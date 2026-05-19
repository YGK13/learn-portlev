// ============================================================
// lib/schemas.js — Zod validation schemas for all content types
// Imported by lib/content.js at runtime and by
// scripts/validate-content.mjs at build time.
// A schema violation blocks the build by design — fix the
// content file, not the schema.
// ============================================================

import { z } from 'zod'

// ============================================================
// Shared: video metadata block (optional on all content types)
// ============================================================

const VideoSchema = z.object({
  // Current state of the video in the production pipeline
  status: z.enum(['none', 'scripted', 'produced', 'published']).default('none'),
  // Set after the video is live on YouTube — triggers auto-embed on the lesson page
  youtubeId: z.string().optional(),
  // Target video length in minutes (used when scripting)
  durationTarget: z.number().optional(),
  // Current state of the script
  scriptStatus: z.enum(['none', 'drafted', 'approved']).default('none'),
}).optional().default({ status: 'none', scriptStatus: 'none' })

// ============================================================
// Lesson schema (content/tracks/<track>/NN-<slug>.mdx)
// ============================================================

export const LessonSchema = z.object({
  // Required — max 70 chars for SEO title tag
  title: z.string().min(1).max(70),
  // Required — max 160 chars, used as meta description and lesson card copy
  summary: z.string().min(1).max(160),
  // Required — must match the containing track directory name exactly
  track: z.string().min(1),
  // Required — unique integer within the track; drives sort order
  order: z.number().int().positive(),
  level: z.enum(['beginner', 'intermediate', 'advanced']),
  // draft = hidden in production, visible in Vercel preview deployments
  status: z.enum(['draft', 'published']),
  // free = in public repo; members/course = lives on Skool or Maven (see First Law in CONTENT.md)
  tier: z.enum(['free', 'members', 'course']).default('free'),
  // Last meaningful content update — YYYY-MM-DD
  updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'updated must be YYYY-MM-DD'),
  // Optional — max 5 tags, all lowercase kebab-case
  tags: z.array(z.string()).max(5).default([]),
  // Optional — auto-calculated from word count if omitted (~200 wpm)
  estReadMin: z.number().optional(),
  // Optional — see VideoSchema above
  video: VideoSchema,
  // Optional — auto-generated via next/og if omitted
  ogImage: z.string().optional(),
})

// ============================================================
// Brief schema (content/briefs/YYYY-MM-DD-<slug>.mdx)
// ============================================================

export const BriefSchema = z.object({
  title: z.string().min(1),
  // Required — max 160 chars for SEO and card copy
  summary: z.string().min(1).max(160),
  // Must match the YYYY-MM-DD prefix in the filename
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'date must be YYYY-MM-DD'),
  // brief = Leverage Brief newsletter issue; article = standalone piece
  type: z.enum(['brief', 'article']),
  status: z.enum(['draft', 'published']),
  tier: z.enum(['free', 'members']).default('free'),
  tags: z.array(z.string()).max(5).default([]),
  // Set if this was first published on beehiiv — used as the canonical URL tag
  canonical: z.string().url().optional(),
  video: VideoSchema,
})

// ============================================================
// Track schema (content/tracks/<track>/track.json)
// ============================================================

export const TrackSchema = z.object({
  title: z.string().min(1),
  // Must match the directory name exactly
  slug: z.string().min(1),
  summary: z.string().min(1),
  level: z.enum(['beginner', 'intermediate', 'advanced']),
  // Drives display order on the /learn page; 0 is reserved for the intro unit
  order: z.number().int().min(0),
  // Emoji or icon name shown on the track card
  icon: z.string().min(1),
  // draft tracks are hidden; a track needs at least 3 lessons before publishing
  status: z.enum(['draft', 'published']),
  tags: z.array(z.string()).default([]),
  // 'intro' = the orientation unit rendered before the numbered track grid
  // 'track' = a numbered curriculum track (default)
  type: z.enum(['intro', 'track']).default('track'),
  // Optional — set when a track is adapted from an external open-source source.
  // Renders an attribution notice on the track page. Required by the source
  // license (e.g. MIT) and by PortLev's own attribution policy.
  attribution: z.object({
    sourceName:   z.string().min(1),
    sourceAuthor: z.string().min(1),
    sourceUrl:    z.string().url(),
    license:      z.string().min(1),
    note:         z.string().optional(),
  }).optional(),
})
