// ============================================================
// components/AttributionNotice.jsx — Source attribution callout
// Server component: pure display, no interactivity.
// Rendered on track pages whose content is adapted from an
// external open-source course. Required by the source license
// (e.g. MIT) and by PortLev's own attribution policy.
//
// Props: attribution {
//   sourceName, sourceAuthor, sourceUrl, license, note?
// }
//        variant — 'track' (default) | 'compact'
// ============================================================

export default function AttributionNotice({ attribution, variant = 'track' }) {
  if (!attribution) return null

  const { sourceName, sourceAuthor, sourceUrl, license, note } = attribution

  return (
    <aside
      className="rounded-xl border p-4 sm:p-5"
      style={{ backgroundColor: 'rgb(79 70 229 / 0.04)', borderColor: '#c7d2fe' }}
      aria-label="Source attribution"
    >
      <div className="flex items-start gap-3">
        {/* Open-book icon */}
        <span className="text-lg leading-none shrink-0 mt-0.5" aria-hidden="true">
          📚
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold mb-1" style={{ color: '#0f172a' }}>
            Adapted with attribution
          </p>
          <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
            {variant === 'track' ? 'This track is' : 'This lesson is'} adapted and
            rewritten for non-technical leaders from{' '}
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline"
              style={{ color: '#4f46e5' }}
            >
              {sourceName}
            </a>{' '}
            by {sourceAuthor}, used under the {license}.
            {note ? ` ${note}` : ''}
          </p>
        </div>
      </div>
    </aside>
  )
}
