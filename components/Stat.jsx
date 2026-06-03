// ============================================================
// components/Stat.jsx — Big-number data callout for lessons
// Server component: pure display. Used inside MDX via the
// MDXComponents map, e.g.:
//
//   <Stat value="88%" label="of enterprise AI agent pilots never reach production" source="Deloitte, 2026" />
//
// Stack two or three for a quick, scannable data strip. Keeps a
// data-heavy lesson visually alive without a chart library.
//
// Props:
//   value  — required, the headline figure (e.g. "88%", "14.2x", "$2.5K")
//   label  — required, what the figure means
//   source — optional, attribution (always cite real data)
// ============================================================

export default function Stat({ value, label, source }) {
  return (
    <div
      className="my-4 flex items-center gap-5 rounded-xl border p-4 sm:p-5"
      style={{ borderColor: '#e2e8f0', backgroundColor: '#ffffff' }}
    >
      <span
        className="shrink-0 font-bold tabular-nums leading-none"
        style={{ color: '#4f46e5', fontSize: '2.25rem', minWidth: '5.5rem' }}
      >
        {value}
      </span>
      <div className="min-w-0">
        <p className="m-0 text-[0.95rem] leading-6" style={{ color: '#374151' }}>
          {label}
        </p>
        {source ? (
          <p className="m-0 mt-1 text-xs" style={{ color: '#94a3b8' }}>
            {source}
          </p>
        ) : null}
      </div>
    </div>
  )
}
