// ============================================================
// components/BriefCard.jsx — Card displayed on /brief archive
// Server component: no interactivity. Pure display.
// Props: brief { title, slug, summary, date, tags, tier }
//        size: 'default' | 'featured' (larger first-card layout)
// ============================================================

import Link from 'next/link'

// Stable formatter — created once per module load, not per render
const DATE_FORMATTER = new Intl.DateTimeFormat('en-US', {
  year:  'numeric',
  month: 'long',
  day:   'numeric',
})

function formatDate(dateString) {
  // dateString is YYYY-MM-DD; parse as UTC to avoid off-by-one day issues
  const [year, month, day] = dateString.split('-').map(Number)
  return DATE_FORMATTER.format(new Date(year, month - 1, day))
}

export default function BriefCard({ brief, size = 'default' }) {
  const { title, slug, summary, date, tags = [], tier } = brief
  const isFeatured = size === 'featured'

  return (
    <article
      className="group relative flex flex-col rounded-xl border bg-white transition-shadow"
      style={{
        borderColor: '#e2e8f0',
        boxShadow:   '0 1px 3px 0 rgb(0 0 0 / 0.08)',
      }}
    >
      {/* Full-card link overlay */}
      <Link
        href={`/brief/${slug}`}
        className="absolute inset-0 rounded-xl"
        aria-label={`Read: ${title}`}
      />

      <div className={`flex flex-col gap-3 ${isFeatured ? 'p-8' : 'p-5'}`}>
        {/* Meta row: date + tier badge */}
        <div className="flex items-center justify-between gap-3">
          <time
            dateTime={date}
            className="text-xs font-medium"
            style={{ color: '#94a3b8' }}
          >
            {formatDate(date)}
          </time>
          {tier === 'members' && (
            <span
              className="rounded-full px-2 py-0.5 text-xs font-semibold"
              style={{ backgroundColor: '#e0e7ff', color: '#4338ca' }}
            >
              Members
            </span>
          )}
        </div>

        {/* Title */}
        <h2
          className={`font-bold leading-snug ${isFeatured ? 'text-xl' : 'text-base'}`}
          style={{ color: '#0f172a' }}
        >
          {title}
        </h2>

        {/* Summary */}
        <p
          className={`leading-relaxed ${isFeatured ? 'text-base' : 'text-sm'}`}
          style={{ color: '#64748b' }}
        >
          {summary}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0 mt-1">
            {tags.map(tag => (
              <li
                key={tag}
                className="rounded-md px-2 py-0.5 text-xs font-medium"
                style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {/* Read CTA */}
        <div className="mt-auto pt-2">
          <span
            className="relative z-10 flex items-center gap-1 text-xs font-semibold group-hover:underline"
            style={{ color: '#4f46e5' }}
            aria-hidden="true"
          >
            Read issue
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
    </article>
  )
}
