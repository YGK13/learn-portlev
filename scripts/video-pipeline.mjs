#!/usr/bin/env node
// ============================================================
// scripts/video-pipeline.mjs — PortLev Academy Video Pipeline CLI
//
// Operationalises the pipeline described in STRATEGY.md:
//   1. Lesson published (done by content author)
//   2. Script generated from lesson content  ← THIS SCRIPT
//   3. HeyGen/Veo renders video             (manual)
//   4. Upload to YouTube                    (manual)
//   5. youtubeId written back to frontmatter ← THIS SCRIPT
//   6. Site auto-embeds the video           (done by app/learn/[track]/[lesson]/page.js)
//
// Usage:
//   node scripts/video-pipeline.mjs list
//     → List all lessons with their video status
//
//   node scripts/video-pipeline.mjs script <track-slug> <lesson-slug>
//     → Generate a narration script and save to scripts/video-scripts/
//
//   node scripts/video-pipeline.mjs set-id <track-slug> <lesson-slug> <youtubeId>
//     → Write youtubeId into the lesson frontmatter and set status: published
//
// Examples:
//   node scripts/video-pipeline.mjs list
//   node scripts/video-pipeline.mjs script ai-foundations what-is-the-ai-wage-gap
//   node scripts/video-pipeline.mjs set-id ai-foundations what-is-the-ai-wage-gap dQw4w9WgXcQ
// ============================================================

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'fs'
import { resolve, join, basename } from 'path'
import matter from 'gray-matter'

// ============================================================
// CONSTANTS
// ============================================================

const ROOT = resolve(process.cwd())
const TRACKS_DIR = join(ROOT, 'content', 'tracks')
const SCRIPTS_DIR = join(ROOT, 'scripts', 'video-scripts')

// Estimated words-per-minute for spoken narration
const NARRATION_WPM = 130

// Standard CTA appended to every video script
const STANDARD_CTA = `[SCREEN TEXT: subscribe button + community link]

That's a wrap on this lesson. If this gave you one thing you can use today, hit subscribe — I publish new lessons every week.

And if you want to go deeper with a community of professionals doing the same work: the link to the free Leverage Lab community is in the description. It's free. Join us.

See you in the next one.`

// ============================================================
// HELPERS: file resolution
// ============================================================

/**
 * Find all track directories under content/tracks/
 * @returns {string[]} Array of track slugs
 */
function getAllTrackSlugs() {
  if (!existsSync(TRACKS_DIR)) return []
  return readdirSync(TRACKS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
}

/**
 * Find all lesson files in a given track directory.
 * Returns objects with { file, slug, frontmatter, content }
 * @param {string} trackSlug
 * @returns {Array}
 */
function getLessonsForTrack(trackSlug) {
  const dir = join(TRACKS_DIR, trackSlug)
  if (!existsSync(dir)) return []

  return readdirSync(dir)
    .filter(f => f.endsWith('.mdx') && /^\d{2}-/.test(f))
    .sort()
    .map(f => {
      const filePath = join(dir, f)
      const raw = readFileSync(filePath, 'utf8')
      const { data: frontmatter, content } = matter(raw)
      // Strip the NN- prefix to get the slug
      const slug = basename(f, '.mdx').replace(/^\d{2}-/, '')
      return { file: filePath, filename: f, slug, frontmatter, content }
    })
}

/**
 * Resolve a single lesson by track slug + lesson slug.
 * @param {string} trackSlug
 * @param {string} lessonSlug
 * @returns {{ file, filename, slug, frontmatter, content } | null}
 */
function getLesson(trackSlug, lessonSlug) {
  const lessons = getLessonsForTrack(trackSlug)
  return lessons.find(l => l.slug === lessonSlug) ?? null
}

// ============================================================
// HELPERS: markdown stripping
// ============================================================

/**
 * Convert markdown to clean spoken-word text.
 * Strips headers, code fences, bold/italic, links, bullets and inline code.
 * Preserves paragraph breaks as double newlines.
 * @param {string} md
 * @returns {string}
 */
function mdToSpeech(md) {
  return md
    // Remove fenced code blocks entirely (they don't narrate well)
    .replace(/```[\s\S]*?```/g, '[CODE EXAMPLE — show on screen]')
    // Remove inline code but keep the text
    .replace(/`([^`]+)`/g, '$1')
    // Remove ATX headers (##, ###, etc.) but keep the text
    .replace(/^#{1,6}\s+(.+)$/gm, '$1')
    // Remove bold/italic markers
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/__([^_]+)__/g, '$1')
    .replace(/_([^_]+)_/g, '$1')
    // Remove markdown links but keep the label
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // Remove horizontal rules
    .replace(/^---+$/gm, '')
    // Convert bullet lists — add a natural pause between items
    .replace(/^[-*]\s+/gm, '— ')
    // Remove numbered list markers
    .replace(/^\d+\.\s+/gm, '')
    // Collapse 3+ blank lines to 2
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

/**
 * Extract a named section (## SectionName) from MDX content.
 * Returns the raw markdown text of that section, up to the next ## heading.
 * @param {string} content
 * @param {string} sectionName  e.g. 'Hook', 'Context', 'Steps', 'Recap'
 * @returns {string}
 */
function extractSection(content, sectionName) {
  // No 'm' flag — without it, $ anchors to end of string (not end of each line),
  // so the lazy [\s\S]*? correctly runs until the next \n## or end of input.
  // Use (?:^|\n) to find the header at the start of a line without the 'm' flag.
  const re = new RegExp(
    `(?:^|\\n)## ${sectionName}[^\\n]*\\n([\\s\\S]*?)(?=\\n## |\\s*$)`,
    'i'
  )
  const match = content.match(re)
  return match ? match[1].trim() : ''
}

// ============================================================
// HELPERS: timing estimate
// ============================================================

/**
 * Estimate narration duration from word count.
 * @param {string} text
 * @returns {string} e.g. "3m 20s"
 */
function estimateDuration(text) {
  const words = text.trim().split(/\s+/).length
  const totalSeconds = Math.round((words / NARRATION_WPM) * 60)
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return s === 0 ? `${m}m` : `${m}m ${s}s`
}

// ============================================================
// COMMAND: list
// ============================================================

function cmdList() {
  const trackSlugs = getAllTrackSlugs()
  if (trackSlugs.length === 0) {
    console.log('No tracks found in content/tracks/')
    return
  }

  const rows = []
  for (const trackSlug of trackSlugs) {
    const lessons = getLessonsForTrack(trackSlug)
    for (const lesson of lessons) {
      const { frontmatter: fm, slug } = lesson
      const videoStatus = fm.video?.status ?? 'none'
      const youtubeId = fm.video?.youtubeId ?? ''
      const scriptFile = join(SCRIPTS_DIR, `${trackSlug}--${slug}.md`)
      const hasScript = existsSync(scriptFile)
      rows.push({
        track: trackSlug,
        lesson: slug,
        title: fm.title ?? '(no title)',
        status: fm.status ?? 'draft',
        videoStatus,
        youtubeId: youtubeId || '—',
        scriptGenerated: hasScript ? '✓' : '·',
      })
    }
  }

  // Print as an aligned table
  const col = (s, w) => String(s).padEnd(w)
  const header = [
    col('TRACK', 22),
    col('LESSON', 38),
    col('STATUS', 10),
    col('VIDEO', 12),
    col('YOUTUBE ID', 14),
    col('SCRIPT', 7),
  ].join('  ')

  console.log('\nPortLev Academy — Video Pipeline Status')
  console.log('─'.repeat(header.length))
  console.log(header)
  console.log('─'.repeat(header.length))
  for (const r of rows) {
    console.log([
      col(r.track, 22),
      col(r.lesson, 38),
      col(r.status, 10),
      col(r.videoStatus, 12),
      col(r.youtubeId, 14),
      col(r.scriptGenerated, 7),
    ].join('  '))
  }
  console.log('─'.repeat(header.length))
  console.log(
    `\n${rows.length} lesson(s) across ${trackSlugs.length} track(s). ` +
    `Videos pending: ${rows.filter(r => r.videoStatus === 'none').length}\n`
  )
}

// ============================================================
// COMMAND: script
// ============================================================

function cmdScript(trackSlug, lessonSlug) {
  if (!trackSlug || !lessonSlug) {
    console.error('Usage: video-pipeline.mjs script <track-slug> <lesson-slug>')
    process.exit(1)
  }

  const lesson = getLesson(trackSlug, lessonSlug)
  if (!lesson) {
    console.error(`Lesson not found: ${trackSlug}/${lessonSlug}`)
    console.error('Run "list" to see available tracks and lessons.')
    process.exit(1)
  }

  const { frontmatter: fm, content } = lesson

  // Extract the four structural sections
  const hookMd     = extractSection(content, 'Hook')
  const contextMd  = extractSection(content, 'Context')
  const stepsMd    = extractSection(content, 'Steps')
  const recapMd    = extractSection(content, 'Recap')

  const hookText    = mdToSpeech(hookMd)
  const contextText = mdToSpeech(contextMd)
  const stepsText   = mdToSpeech(stepsMd)
  const recapText   = mdToSpeech(recapMd)

  // Estimate timing
  const hookDur    = estimateDuration(hookText)
  const contextDur = estimateDuration(contextText)
  const stepsDur   = estimateDuration(stepsText)
  const recapDur   = estimateDuration(recapText)
  const ctaDur     = estimateDuration(STANDARD_CTA)
  const totalWords = [hookText, contextText, stepsText, recapText, STANDARD_CTA]
    .join(' ').trim().split(/\s+/).length
  const totalDur   = estimateDuration([hookText, contextText, stepsText, recapText, STANDARD_CTA].join(' '))

  // Build the script document
  const scriptLines = [
    `# VIDEO SCRIPT`,
    `## ${fm.title}`,
    ``,
    `**Track:** ${trackSlug}  |  **Lesson:** ${lessonSlug}`,
    `**Estimated duration:** ${totalDur}  |  **Word count:** ~${totalWords}`,
    `**Generated:** ${new Date().toISOString().slice(0, 10)}`,
    `**Target YouTube ID:** (fill in after upload)`,
    ``,
    `---`,
    ``,
    `> **Recording notes:**`,
    `> - Speak at ~${NARRATION_WPM} wpm (conversational, not rushed)`,
    `> - Cut away to screen recording / slides during [CODE EXAMPLE] markers`,
    `> - B-roll: relevant screen content during concept sections`,
    `> - End card: 20s for subscribe + community link`,
    ``,
    `---`,
    ``,
    `## [HOOK — ${hookDur}]`,
    ``,
    hookText || '(no Hook section found in lesson)',
    ``,
    `---`,
    ``,
    `## [CONTEXT — ${contextDur}]`,
    ``,
    contextText || '(no Context section found in lesson)',
    ``,
    `---`,
    ``,
    `## [STEPS / WALKTHROUGH — ${stepsDur}]`,
    ``,
    stepsText || '(no Steps section found in lesson)',
    ``,
    `---`,
    ``,
    `## [RECAP — ${recapDur}]`,
    ``,
    recapText || '(no Recap section found in lesson)',
    ``,
    `---`,
    ``,
    `## [CTA — ${ctaDur}]`,
    ``,
    STANDARD_CTA,
    ``,
    `---`,
    ``,
    `*End of script. After recording:*`,
    `*  1. Upload to YouTube*`,
    `*  2. Run: node scripts/video-pipeline.mjs set-id ${trackSlug} ${lessonSlug} <youtubeId>*`,
  ]

  const scriptContent = scriptLines.join('\n')

  // Write to scripts/video-scripts/
  mkdirSync(SCRIPTS_DIR, { recursive: true })
  const outFile = join(SCRIPTS_DIR, `${trackSlug}--${lessonSlug}.md`)
  writeFileSync(outFile, scriptContent, 'utf8')

  console.log(`\n✓ Script generated: ${outFile}`)
  console.log(`  Estimated duration: ${totalDur} (~${totalWords} words at ${NARRATION_WPM} wpm)`)
  console.log(`\n  Sections:`)
  console.log(`    Hook    ${hookDur}`)
  console.log(`    Context ${contextDur}`)
  console.log(`    Steps   ${stepsDur}`)
  console.log(`    Recap   ${recapDur}`)
  console.log(`    CTA     ${ctaDur}`)
  console.log(`\n  Next: record the video, upload to YouTube, then run:`)
  console.log(`  node scripts/video-pipeline.mjs set-id ${trackSlug} ${lessonSlug} <youtubeId>\n`)
}

// ============================================================
// COMMAND: script-all
// ============================================================

function cmdScriptAll() {
  const trackSlugs = getAllTrackSlugs()
  let generated = 0
  for (const trackSlug of trackSlugs) {
    const lessons = getLessonsForTrack(trackSlug)
    for (const lesson of lessons) {
      if (lesson.frontmatter.status !== 'published') continue
      // Only generate if not already present
      const outFile = join(SCRIPTS_DIR, `${trackSlug}--${lesson.slug}.md`)
      if (!existsSync(outFile)) {
        cmdScript(trackSlug, lesson.slug)
        generated++
      } else {
        console.log(`  skipping ${trackSlug}/${lesson.slug} (script already exists)`)
      }
    }
  }
  if (generated === 0) {
    console.log('All published lessons already have scripts. Nothing generated.')
  }
}

// ============================================================
// COMMAND: set-id
// ============================================================

function cmdSetId(trackSlug, lessonSlug, youtubeId) {
  if (!trackSlug || !lessonSlug || !youtubeId) {
    console.error('Usage: video-pipeline.mjs set-id <track-slug> <lesson-slug> <youtubeId>')
    process.exit(1)
  }

  // Basic YouTube ID validation (11 alphanumeric characters)
  if (!/^[A-Za-z0-9_-]{11}$/.test(youtubeId)) {
    console.error(`Invalid YouTube ID: "${youtubeId}"`)
    console.error('YouTube IDs are exactly 11 characters (letters, numbers, _ and -).')
    process.exit(1)
  }

  const lesson = getLesson(trackSlug, lessonSlug)
  if (!lesson) {
    console.error(`Lesson not found: ${trackSlug}/${lessonSlug}`)
    process.exit(1)
  }

  const raw = readFileSync(lesson.file, 'utf8')
  const parsed = matter(raw)

  // Build the updated frontmatter
  const updatedFm = {
    ...parsed.data,
    video: {
      ...(parsed.data.video ?? {}),
      status: 'published',
      youtubeId,
    },
  }

  // Reconstruct the file using gray-matter's stringify
  // gray-matter.stringify(content, frontmatter) → full file string
  const updatedContent = matter.stringify(parsed.content, updatedFm)

  writeFileSync(lesson.file, updatedContent, 'utf8')

  console.log(`\n✓ Updated: ${lesson.filename}`)
  console.log(`  video.status  → published`)
  console.log(`  video.youtubeId → ${youtubeId}`)
  console.log(`  YouTube URL   → https://www.youtube.com/watch?v=${youtubeId}`)
  console.log(`\n  The lesson page will auto-embed the video on next build.`)
  console.log(`  Push to deploy: git add ${lesson.file} && git commit -m "feat: add video for ${lessonSlug}" && git push\n`)
}

// ============================================================
// ENTRYPOINT
// ============================================================

const [,, cmd, arg1, arg2, arg3] = process.argv

const COMMANDS = {
  list:       () => cmdList(),
  script:     () => cmdScript(arg1, arg2),
  'script-all': () => cmdScriptAll(),
  'set-id':   () => cmdSetId(arg1, arg2, arg3),
}

if (!cmd || !COMMANDS[cmd]) {
  console.log(`
PortLev Academy — Video Pipeline CLI

Commands:
  list                              Show all lessons with video status
  script <track> <lesson>          Generate narration script for one lesson
  script-all                        Generate scripts for all published lessons
  set-id <track> <lesson> <ytId>   Write YouTube ID back to lesson frontmatter

Examples:
  node scripts/video-pipeline.mjs list
  node scripts/video-pipeline.mjs script ai-foundations what-is-the-ai-wage-gap
  node scripts/video-pipeline.mjs script-all
  node scripts/video-pipeline.mjs set-id prompt-engineering anatomy-of-a-great-prompt dQw4w9WgXcQ
`)
  process.exit(cmd ? 1 : 0)
}

COMMANDS[cmd]()
