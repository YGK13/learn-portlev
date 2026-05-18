#!/usr/bin/env node
// ============================================================
// scripts/validate-content.mjs — Pre-build content validation
// Runs automatically before `npm run build` and `npm run dev`
// via the prebuild/predev scripts in package.json.
//
// Validates every file in content/ against its Zod schema.
// Exits with code 1 and a clear error message if any file
// fails — the build is blocked until the content is fixed.
//
// Usage: node scripts/validate-content.mjs
// ============================================================

import { readFileSync, readdirSync, existsSync } from 'fs'
import { join, resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import matter from 'gray-matter'
import { LessonSchema, BriefSchema, TrackSchema } from '../lib/schemas.js'

// Resolve paths relative to the project root (one level up from /scripts)
const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const CONTENT_DIR = join(ROOT, 'content')

// Track all errors and successes for the final report
const errors = []
let checked = 0

// ============================================================
// Helper: validate a single file's frontmatter against a schema
// ============================================================

function validateMdx(filepath, schema, label) {
  try {
    const raw = readFileSync(filepath, 'utf8')
    const { data } = matter(raw)
    schema.parse(data)
    checked++
  } catch (err) {
    const rel = filepath.replace(ROOT + '/', '')
    // Zod errors have an `errors` array; other errors have a message
    const detail = err.errors
      ? err.errors.map(e => `  [${e.path.join('.')}] ${e.message}`).join('\n')
      : `  ${err.message}`
    errors.push(`FAIL (${label}): ${rel}\n${detail}`)
  }
}

function validateJson(filepath, schema, label) {
  try {
    const raw = JSON.parse(readFileSync(filepath, 'utf8'))
    schema.parse(raw)
    checked++
  } catch (err) {
    const rel = filepath.replace(ROOT + '/', '')
    const detail = err.errors
      ? err.errors.map(e => `  [${e.path.join('.')}] ${e.message}`).join('\n')
      : `  ${err.message}`
    errors.push(`FAIL (${label}): ${rel}\n${detail}`)
  }
}

// ============================================================
// Step 1: Validate track.json files
// ============================================================

const tracksDir = join(CONTENT_DIR, 'tracks')
if (existsSync(tracksDir)) {
  const trackDirs = readdirSync(tracksDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)

  for (const trackSlug of trackDirs) {
    const trackJsonPath = join(tracksDir, trackSlug, 'track.json')
    if (!existsSync(trackJsonPath)) {
      errors.push(`FAIL (track): ${trackSlug}/track.json is missing`)
      continue
    }
    validateJson(trackJsonPath, TrackSchema, 'track')
  }
}

// ============================================================
// Step 2: Validate lesson .mdx files
// ============================================================

if (existsSync(tracksDir)) {
  const trackDirs = readdirSync(tracksDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)

  for (const trackSlug of trackDirs) {
    const trackDir = join(tracksDir, trackSlug)
    const lessonFiles = readdirSync(trackDir).filter(f => f.endsWith('.mdx'))

    for (const filename of lessonFiles) {
      // Enforce naming convention: NN-slug.mdx
      if (!/^\d{2}-/.test(filename)) {
        errors.push(
          `FAIL (lesson naming): ${trackSlug}/${filename}\n` +
          `  Lesson filenames must start with a two-digit order prefix (e.g., 01-my-lesson.mdx)`
        )
      }
      validateMdx(join(trackDir, filename), LessonSchema, 'lesson')
    }
  }
}

// ============================================================
// Step 3: Validate brief .mdx files
// ============================================================

const briefsDir = join(CONTENT_DIR, 'briefs')
if (existsSync(briefsDir)) {
  const briefFiles = readdirSync(briefsDir).filter(f => f.endsWith('.mdx'))

  for (const filename of briefFiles) {
    // Enforce naming convention: YYYY-MM-DD-slug.mdx
    if (!/^\d{4}-\d{2}-\d{2}-/.test(filename)) {
      errors.push(
        `FAIL (brief naming): ${filename}\n` +
        `  Brief filenames must start with a date prefix (e.g., 2026-05-18-my-brief.mdx)`
      )
    }
    validateMdx(join(briefsDir, filename), BriefSchema, 'brief')
  }
}

// ============================================================
// Report
// ============================================================

console.log(`\nPortLev Academy — content validation`)
console.log(`Checked: ${checked} files`)

if (errors.length > 0) {
  console.error(`\nFound ${errors.length} error(s):\n`)
  for (const err of errors) {
    console.error(err + '\n')
  }
  console.error('Fix the content files above, then re-run the build.')
  process.exit(1)
} else {
  console.log(`All content valid. ✓\n`)
  process.exit(0)
}
