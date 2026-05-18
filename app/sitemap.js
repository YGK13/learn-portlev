// ============================================================
// app/sitemap.js — Dynamic sitemap generator
// Next.js file convention: default export returns SitemapEntry[].
// Next.js automatically serves this at /sitemap.xml.
// All content is statically generated at build time.
// ============================================================

import { getAllTracks, getLessonsForTrack, getAllBriefs } from '@/lib/content'

export default function sitemap() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || 'https://learn.portlev.com')
    .replace(/\/$/, '') // strip trailing slash

  const now = new Date()

  // ---- Static pages ----------------------------------------
  const staticPages = [
    { url: base,          priority: 1.0,  changeFrequency: 'weekly' },
    { url: `${base}/learn`,   priority: 0.9,  changeFrequency: 'weekly' },
    { url: `${base}/brief`,   priority: 0.85, changeFrequency: 'weekly' },
    { url: `${base}/book`,    priority: 0.7,  changeFrequency: 'monthly' },
    { url: `${base}/cohort`,  priority: 0.8,  changeFrequency: 'monthly' },
    { url: `${base}/about`,   priority: 0.6,  changeFrequency: 'monthly' },
  ].map(page => ({ ...page, lastModified: now }))

  // ---- Track pages -----------------------------------------
  const tracks = getAllTracks()

  const trackPages = tracks.map(track => ({
    url:             `${base}/learn/${track.slug}`,
    lastModified:    now,
    changeFrequency: 'weekly',
    priority:        0.8,
  }))

  // ---- Lesson pages ----------------------------------------
  const lessonPages = []

  for (const track of tracks) {
    const lessons = getLessonsForTrack(track.slug)
    for (const lesson of lessons) {
      lessonPages.push({
        url:             `${base}/learn/${track.slug}/${lesson.slug}`,
        lastModified:    new Date(lesson.updated + 'T00:00:00'),
        changeFrequency: 'monthly',
        priority:        0.9,
      })
    }
  }

  // ---- Brief pages -----------------------------------------
  const briefs = getAllBriefs()

  const briefPages = briefs.map(brief => ({
    url:             `${base}/brief/${brief.slug}`,
    lastModified:    new Date(brief.date + 'T00:00:00'),
    changeFrequency: 'yearly',
    priority:        0.7,
  }))

  return [
    ...staticPages,
    ...trackPages,
    ...lessonPages,
    ...briefPages,
  ]
}
