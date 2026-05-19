// ============================================================
// components/Callout.jsx — Highlighted callout box for lessons
// Server component: pure display. Used inside MDX via the
// MDXComponents map, e.g.:
//   <Callout type="key">The single most important idea.</Callout>
//   <Callout type="warning" title="Common mistake">...</Callout>
//
// Types: key (indigo) · example (neutral) · warning (amber)
// ============================================================

const STYLES = {
  key: {
    bar:        '#4f46e5',
    bg:         'rgb(79 70 229 / 0.05)',
    label:      'Key idea',
    labelColor: '#4f46e5',
  },
  example: {
    bar:        '#0f172a',
    bg:         '#f8fafc',
    label:      'Example',
    labelColor: '#0f172a',
  },
  warning: {
    bar:        '#f59e0b',
    bg:         'rgb(245 158 11 / 0.07)',
    label:      'Watch out',
    labelColor: '#b45309',
  },
}

export default function Callout({ type = 'key', title, children }) {
  const s = STYLES[type] ?? STYLES.key

  return (
    <aside
      className="my-6 rounded-lg p-4 sm:p-5"
      style={{ backgroundColor: s.bg, borderLeft: `3px solid ${s.bar}` }}
    >
      <p
        className="m-0 mb-1.5 text-xs font-bold uppercase tracking-wider"
        style={{ color: s.labelColor }}
      >
        {title || s.label}
      </p>
      <div className="text-[0.95rem] leading-7" style={{ color: '#374151' }}>
        {children}
      </div>
    </aside>
  )
}
