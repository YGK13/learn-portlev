// ============================================================
// components/TLDR.jsx — "TL;DR" summary box for lessons
// Server component: pure display. Used inside MDX via the
// MDXComponents map, e.g.:
//   <TLDR>The one-sentence version of this whole lesson.</TLDR>
//
// Visually distinct from Callout (which uses a left bar): TLDR
// uses a full rounded border so it reads as a self-contained
// summary the eye can jump to. Put one at the top of a lesson
// and, optionally, short ones before a dense section.
// ============================================================

export default function TLDR({ children }) {
  return (
    <aside
      className="my-6 rounded-xl border p-4 sm:p-5"
      style={{ borderColor: '#c7d2fe', backgroundColor: 'rgb(79 70 229 / 0.04)' }}
      aria-label="TL;DR summary"
    >
      <div className="flex items-center gap-2 mb-2">
        <span
          className="inline-flex items-center justify-center rounded-md px-1.5 py-0.5 text-[0.7rem] font-bold uppercase tracking-wider text-white"
          style={{ backgroundColor: '#4f46e5' }}
        >
          TL;DR
        </span>
      </div>
      <div className="text-[0.95rem] leading-7" style={{ color: '#374151' }}>
        {children}
      </div>
    </aside>
  )
}
