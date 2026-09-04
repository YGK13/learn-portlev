// ============================================================
// app/brief/page.js — Leverage Brief archive (/brief)
// Server Component (async).
//
// Posts are pulled live from the Leverage Brief publication on
// beehiiv via lib/leverage-brief.js. Each card links directly
// to the beehiiv post page, where the newsletter sign-up CTA
// is shown to non-subscribers.
//
// If the beehiiv API is unreachable or env vars are missing,
// the page falls back to the local MDX briefs in content/briefs
// so the page still renders.
// ============================================================

import { getAllBriefs }            from '@/lib/content'
import { getLeverageBriefPosts }   from '@/lib/leverage-brief'
import BriefCard                   from '@/components/BriefCard'
import CTABanner                   from '@/components/CTABanner'

export const metadata = {
  title:       'The Leverage Brief',
  description: 'Weekly actionable AI ideas for executives and consultants. ' +
               'One idea per week. Seven minutes to read. Built to implement.',
  alternates: {
    canonical: '/brief',
    types: {
      'application/rss+xml': 'https://leveragebrief.beehiiv.com/feed',
    },
  },
}

// Re-render the page hourly so newly-published posts on beehiiv
// appear within an hour. This matches the per-fetch revalidate
// inside lib/leverage-brief.js, and keeps the page statically
// served between revalidations.
export const revalidate = 3600

export default async function BriefArchivePage() {
  // Pull posts from beehiiv. Fall back to local MDX briefs
  // (welcome issue etc.) if the API returns nothing.
  const beehiivPosts = await getLeverageBriefPosts({ limit: 24 })
  const briefs       = beehiivPosts.length > 0 ? beehiivPosts : getAllBriefs()
  const sourcedFromBeehiiv = beehiivPosts.length > 0

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
      {/* Page header */}
      <header className="mb-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: '#4f46e5' }}>
          Every Monday
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3" style={{ color: '#0f172a' }}>
          The Leverage Brief
        </h1>
        <p className="text-lg max-w-2xl mb-6" style={{ color: '#64748b' }}>
          One actionable AI idea per week. No hype, no listicles. One concept,
          one implementation path, something you can act on this week.
        </p>

        {/* Newsletter subscribe + RSS */}
        <div className="flex items-center gap-6">
          <CTABanner variant="newsletter" source="brief-archive-header" />
        </div>
      </header>

      {/* RSS + source attribution */}
      <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm" style={{ color: '#94a3b8' }}>
        <span className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="5" cy="19" r="1" fill="currentColor"/>
          </svg>
          <a
            href="https://leveragebrief.beehiiv.com/feed"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:no-underline transition-colors"
            style={{ color: '#94a3b8' }}
          >
            Subscribe via RSS
          </a>
        </span>
        {sourcedFromBeehiiv && (
          <span className="flex items-center gap-2">
            <span aria-hidden="true">·</span>
            <a
              href="https://leveragebrief.beehiiv.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:no-underline transition-colors"
              style={{ color: '#94a3b8' }}
            >
              View on the Leverage Brief
            </a>
          </span>
        )}
      </div>

      {/* Brief grid */}
      {briefs.length === 0 ? (
        <p style={{ color: '#64748b' }}>No issues published yet. Check back soon.</p>
      ) : (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
          {briefs.map((brief, idx) => (
            <li key={brief.slug}>
              <BriefCard brief={brief} size={idx === 0 ? 'featured' : 'default'} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
