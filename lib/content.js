// ============================================================
// lib/content.js — Content reading library
// Provides all functions for loading tracks, lessons and briefs
// from the content/ directory. Used by all app pages and the
// sitemap / RSS feed generators.
//
// All functions are synchronous (fs-based) and safe to call
// from Next.js Server Components, generateStaticParams and
// generateMetadata. Validation errors at build time are caught
// by scripts/validate-content.mjs; here we log + skip bad files
// so a single corrupt file never takes the build down.
// ============================================================

import { readFileSync, readdirSync, existsSync } from 'fs'
import { join, resolve } from 'path'
import matter from 'gray-matter'
import { LessonSchema, BriefSchema, TrackSchema } from './schemas.js'

// Resolve content directories from the project root.
// turbopackIgnore tells Turbopack's Node File Tracing not to trace the
// entire project tree through process.cwd(). The content/ directory is
// read at build time when Next.js statically renders all pages; it does
// not need to be traced for runtime deployment.
const ROOT       = resolve(/* turbopackIgnore: true */ process.cwd())
const CONTENT    = join(ROOT, 'content')
const TRACKS_DIR = join(CONTENT, 'tracks')
const BRIEFS_DIR = join(CONTENT, 'briefs')

// ============================================================
// Slug derivation helpers
// ============================================================

/**
 * "01-what-is-the-ai-wage-gap.mdx" → "what-is-the-ai-wage-gap"
 * Strips the two-digit order prefix and the .mdx extension.
 */
function lessonFileToSlug(filename) {
  return filename.replace(/\.mdx$/, '').replace(/^\d{2}-/, '')
}

/**
 * "2026-05-18-welcome-to-leverage-lab.mdx" → "welcome-to-leverage-lab"
 * Strips the YYYY-MM-DD- date prefix and the .mdx extension.
 */
function briefFileToSlug(filename) {
  return filename.replace(/\.mdx$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '')
}

// ============================================================
// getAllTracks()
// Returns all published tracks sorted ascending by `order`.
// ============================================================
export function getAllTracks() {
  if (!existsSync(TRACKS_DIR)) return []

  const trackDirs = readdirSync(TRACKS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)

  const tracks = []

  for (const slug of trackDirs) {
    const jsonPath = join(TRACKS_DIR, slug, 'track.json')
    if (!existsSync(jsonPath)) continue

    try {
      const raw    = JSON.parse(readFileSync(jsonPath, 'utf8'))
      const parsed = TrackSchema.parse(raw)
      if (parsed.status !== 'published') continue
      tracks.push({ ...parsed, slug })
    } catch (err) {
      console.warn(`[content] Skipping invalid track "${slug}":`, err.message)
    }
  }

  return tracks.sort((a, b) => a.order - b.order)
}

// ============================================================
// getTrack(slug)
// Returns a single track object or null if not found.
// ============================================================
export function getTrack(slug) {
  const jsonPath = join(TRACKS_DIR, slug, 'track.json')
  if (!existsSync(jsonPath)) return null

  try {
    const raw    = JSON.parse(readFileSync(jsonPath, 'utf8'))
    const parsed = TrackSchema.parse(raw)
    return { ...parsed, slug }
  } catch {
    return null
  }
}

// ============================================================
// getLessonsForTrack(trackSlug)
// Returns all published lessons for a track, sorted by `order`.
// Each lesson object includes a `slug` derived from the filename.
// ============================================================
export function getLessonsForTrack(trackSlug) {
  const trackDir = join(TRACKS_DIR, trackSlug)
  if (!existsSync(trackDir)) return []

  const files   = readdirSync(trackDir).filter(f => f.endsWith('.mdx'))
  const lessons = []

  for (const filename of files) {
    const filepath = join(trackDir, filename)
    try {
      const raw    = readFileSync(filepath, 'utf8')
      const { data } = matter(raw)
      const parsed = LessonSchema.parse(data)
      if (parsed.status !== 'published') continue
      lessons.push({
        ...parsed,
        slug: lessonFileToSlug(filename),
        filename,
      })
    } catch (err) {
      console.warn(
        `[content] Skipping invalid lesson "${trackSlug}/${filename}":`,
        err.message
      )
    }
  }

  return lessons.sort((a, b) => a.order - b.order)
}

// ============================================================
// getLesson(trackSlug, lessonSlug)
// Returns a single lesson including `content` — the raw MDX
// body string (frontmatter stripped) ready for compileMDX.
// Returns null if not found.
// ============================================================
export function getLesson(trackSlug, lessonSlug) {
  const trackDir = join(TRACKS_DIR, trackSlug)
  if (!existsSync(trackDir)) return null

  const files    = readdirSync(trackDir).filter(f => f.endsWith('.mdx'))
  const filename = files.find(f => lessonFileToSlug(f) === lessonSlug)
  if (!filename) return null

  const filepath = join(trackDir, filename)

  try {
    const raw              = readFileSync(filepath, 'utf8')
    const { data, content } = matter(raw)
    const parsed           = LessonSchema.parse(data)
    return {
      ...parsed,
      slug: lessonSlug,
      filename,
      content, // MDX body only, no frontmatter
    }
  } catch (err) {
    console.warn(
      `[content] Failed to load lesson "${trackSlug}/${lessonSlug}":`,
      err.message
    )
    return null
  }
}

// ============================================================
// getAllBriefs()
// Returns all published briefs sorted newest-first by date.
// ============================================================
export function getAllBriefs() {
  if (!existsSync(BRIEFS_DIR)) return []

  const files  = readdirSync(BRIEFS_DIR).filter(f => f.endsWith('.mdx'))
  const briefs = []

  for (const filename of files) {
    const filepath = join(BRIEFS_DIR, filename)
    try {
      const raw    = readFileSync(filepath, 'utf8')
      const { data } = matter(raw)
      const parsed = BriefSchema.parse(data)
      if (parsed.status !== 'published') continue
      briefs.push({
        ...parsed,
        slug: briefFileToSlug(filename),
        filename,
      })
    } catch (err) {
      console.warn(`[content] Skipping invalid brief "${filename}":`, err.message)
    }
  }

  // Newest first
  return briefs.sort((a, b) => new Date(b.date) - new Date(a.date))
}

// ============================================================
// getBrief(slug)
// Returns a single brief including `content` (raw MDX body).
// Returns null if not found.
// ============================================================
export function getBrief(slug) {
  if (!existsSync(BRIEFS_DIR)) return null

  const files    = readdirSync(BRIEFS_DIR).filter(f => f.endsWith('.mdx'))
  const filename = files.find(f => briefFileToSlug(f) === slug)
  if (!filename) return null

  const filepath = join(BRIEFS_DIR, filename)

  try {
    const raw              = readFileSync(filepath, 'utf8')
    const { data, content } = matter(raw)
    const parsed           = BriefSchema.parse(data)
    return {
      ...parsed,
      slug,
      filename,
      content, // MDX body only
    }
  } catch (err) {
    console.warn(`[content] Failed to load brief "${slug}":`, err.message)
    return null
  }
}

// ============================================================
// getAllLessons()
// Returns every published lesson across all tracks — flat list.
// Each item includes `trackSlug` and `trackTitle` for URLs and
// display. Used by the sitemap and RSS generators.
// ============================================================
export function getAllLessons() {
  const tracks  = getAllTracks()
  const lessons = []

  for (const track of tracks) {
    const trackLessons = getLessonsForTrack(track.slug)
    for (const lesson of trackLessons) {
      lessons.push({
        ...lesson,
        trackSlug:  track.slug,
        trackTitle: track.title,
      })
    }
  }

  return lessons
}
