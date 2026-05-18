// ============================================================
// app/brief/page.js — Leverage Brief archive (/brief)
// Server Component.
// ============================================================

import { getAllBriefs } from '@/lib/content'
import BriefCard         from '@/components/BriefCard'
import CTABanner         from '@/components/CTABanner'

export const metadata = {
  title:       'The Leverage Brief',
  description: 'Weekly actionable AI ideas for executives and consultants. ' +
               'One idea per week. Seven minutes to read. Built to implement.',
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
}

export default function BriefArchivePage() {
  const briefs = getAllBriefs()

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

      {/* RSS subscription notice */}
      <div className="mb-8 flex items-center gap-2 text-sm" style={{ color: '#94a3b8' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="5" cy="19" r="1" fill="currentColor"/>
        </svg>
        <a
          href="/feed.xml"
          className="underline underline-offset-2 hover:no-underline transition-colors"
          style={{ color: '#94a3b8' }}
        >
          Subscribe via RSS
        </a>
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
