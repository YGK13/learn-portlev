// ============================================================
// components/TrackCard.jsx — Card displayed on /learn grid
// Server component: no interactivity. Pure display.
// Props: track { title, slug, summary, level, icon, order }
//        lessonCount (number)
// ============================================================

import Link from 'next/link'

// Level badge color mapping — stable object, defined outside component
const LEVEL_STYLES = {
  beginner:     { bg: '#dcfce7', color: '#15803d', label: 'Beginner' },
  intermediate: { bg: '#fef3c7', color: '#b45309', label: 'Intermediate' },
  advanced:     { bg: '#fce7f3', color: '#be185d', label: 'Advanced' },
}

export default function TrackCard({ track, lessonCount = 0 }) {
  const { title, slug, summary, level, icon } = track
  const levelStyle = LEVEL_STYLES[level] ?? LEVEL_STYLES.beginner

  return (
    <article
      className="group relative flex flex-col rounded-xl border bg-white transition-shadow"
      style={{
        borderColor: '#e2e8f0',
        boxShadow:   '0 1px 3px 0 rgb(0 0 0 / 0.08)',
      }}
    >
      {/* Card link overlay — covers the entire card */}
      <Link href={`/learn/${slug}`} className="absolute inset-0 rounded-xl" aria-label={`Start ${title} track`} />

      <div className="flex flex-col gap-4 p-6">
        {/* Icon + level badge row */}
        <div className="flex items-center justify-between">
          <span className="text-3xl leading-none" aria-hidden="true">
            {icon}
          </span>
          <span
            className="rounded-full px-2.5 py-1 text-xs font-semibold"
            style={{ backgroundColor: levelStyle.bg, color: levelStyle.color }}
          >
            {levelStyle.label}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-base font-bold leading-snug" style={{ color: '#0f172a' }}>
          {title}
        </h2>

        {/* Summary */}
        <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
          {summary}
        </p>

        {/* Footer: lesson count + CTA */}
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-xs" style={{ color: '#94a3b8' }}>
            {lessonCount} {lessonCount === 1 ? 'lesson' : 'lessons'}
          </span>
          <span
            className="
              relative z-10 flex items-center gap-1 text-xs font-semibold
              transition-colors group-hover:underline
            "
            style={{ color: '#4f46e5' }}
            aria-hidden="true"
          >
            Start learning
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
    </article>
  )
}
