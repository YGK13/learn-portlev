// ============================================================
// app/sitemap.js - Dynamic sitemap generator
// Next.js file convention: default export returns SitemapEntry[].
// Served at /sitemap.xml. All content is statically generated at
// build time. lastModified is real: content dates for lessons and
// briefs, the newest lesson date for a track, and the marketing
// surface's last rebuild date for static pages (never "now").
// ============================================================

import { getAllTracks, getLessonsForTrack, getAllBriefs } from '@/lib/content'
import { SITE_URL, LAST_UPDATED } from '@/lib/site'

const toDate = ymd => new Date(`${ymd}T00:00:00Z`)

export default function sitemap() {
  const base = SITE_URL
  const rebuilt = toDate(LAST_UPDATED)

  // ---- Static pages ----------------------------------------
  const staticPages = [
    { path: '',                 priority: 1.0,  changeFrequency: 'weekly'  },
    { path: '/program',         priority: 0.95, changeFrequency: 'monthly' },
    { path: '/learn',           priority: 0.9,  changeFrequency: 'weekly'  },
    { path: '/programs',        priority: 0.85, changeFrequency: 'monthly' },
    { path: '/brief',           priority: 0.85, changeFrequency: 'weekly'  },
    { path: '/cohort',          priority: 0.8,  changeFrequency: 'monthly' },
    { path: '/authority-stack', priority: 0.7,  changeFrequency: 'monthly' },
    { path: '/book',            priority: 0.7,  changeFrequency: 'monthly' },
    { path: '/resources',       priority: 0.6,  changeFrequency: 'monthly' },
    { path: '/about',           priority: 0.6,  changeFrequency: 'monthly' },
    { path: '/credits',         priority: 0.3,  changeFrequency: 'yearly'  },
  ].map(page => ({
    url:             `${base}${page.path}`,
    lastModified:    rebuilt,
    changeFrequency: page.changeFrequency,
    priority:        page.priority,
  }))

  // ---- Track + lesson pages --------------------------------
  const tracks      = getAllTracks()
  const trackPages  = []
  const lessonPages = []

  for (const track of tracks) {
    const lessons = getLessonsForTrack(track.slug)
    let newest = LAST_UPDATED

    for (const lesson of lessons) {
      if (lesson.updated > newest) newest = lesson.updated
      lessonPages.push({
        url:             `${base}/learn/${track.slug}/${lesson.slug}`,
        lastModified:    toDate(lesson.updated),
        changeFrequency: 'monthly',
        priority:        0.8,
      })
    }

    trackPages.push({
      url:             `${base}/learn/${track.slug}`,
      lastModified:    toDate(newest),
      changeFrequency: 'weekly',
      priority:        0.85,
    })
  }

  // ---- Brief pages -----------------------------------------
  const briefPages = getAllBriefs().map(brief => ({
    url:             `${base}/brief/${brief.slug}`,
    lastModified:    toDate(brief.date),
    changeFrequency: 'yearly',
    priority:        0.6,
  }))

  return [...staticPages, ...trackPages, ...lessonPages, ...briefPages]
}
