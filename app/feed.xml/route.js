// ============================================================
// app/feed.xml/route.js — RSS 2.0 feed for The Leverage Brief
// Served at /feed.xml. Statically generated at build time.
// Uses the `feed` npm package for standards-compliant RSS output.
// ============================================================

import { Feed } from 'feed'
import { getAllBriefs } from '@/lib/content'

// Force static generation — content only changes when briefs change,
// which happens at build time (new brief file added + redeploy).
export const dynamic = 'force-static'

export async function GET() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || 'https://learn.portlev.com')
    .replace(/\/$/, '')

  const briefs = getAllBriefs()

  // ---- Build feed object -----------------------------------
  const feed = new Feed({
    title:       'The Leverage Brief — PortLev Academy',
    description: 'One actionable AI idea every week for executives and consultants. ' +
                 'No hype. No listicles. Just one concept and one implementation path.',
    id:          base + '/',
    link:        base + '/',
    language:    'en',
    feedLinks: {
      rss: base + '/feed.xml',
    },
    copyright:   `© ${new Date().getFullYear()} Yuri Kruman / PortLev. Content licensed under CC-BY 4.0.`,
    author: {
      name:  'Yuri Kruman',
      link:  base + '/about',
    },
  })

  // ---- Add items -------------------------------------------
  for (const brief of briefs) {
    const [year, month, day] = brief.date.split('-').map(Number)
    const pubDate = new Date(year, month - 1, day)

    feed.addItem({
      title:       brief.title,
      id:          `${base}/brief/${brief.slug}`,
      link:        `${base}/brief/${brief.slug}`,
      description: brief.summary,
      date:        pubDate,
      author: [{
        name: 'Yuri Kruman',
        link: base + '/about',
      }],
      category: brief.tags?.map(tag => ({ name: tag })) ?? [],
    })
  }

  // ---- Return RSS XML as Response -------------------------
  return new Response(feed.rss2(), {
    status:  200,
    headers: {
      'Content-Type':  'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
