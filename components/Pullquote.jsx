// ============================================================
// components/Pullquote.jsx — Attributed quote block for lessons
// Server component: pure display. Used inside MDX via the
// MDXComponents map. Built for quotes pulled from the book and
// from podcast / interview transcripts, e.g.:
//
//   <Pullquote author="Alon Bochman" role="Fractional CTO; ex-Google, Microsoft, FactSet" source="AI Wage Gap Podcast">
//   There's a shortage of people that can bring that change about.
//   </Pullquote>
//
//   <Pullquote author="Yuri Kruman" source="Closing the AI Wage Gap">
//   The build is the easy part now. Deployment is where the value is won or lost.
//   </Pullquote>
//
// Props:
//   author  — required, the person being quoted
//   role    — optional, their title / context
//   source  — optional, the book or podcast it came from
// ============================================================

export default function Pullquote({ children, author, role, source }) {
  return (
    <figure className="my-8" style={{ margin: '2rem 0' }}>
      <blockquote
        className="relative rounded-xl p-6 sm:p-7"
        style={{ backgroundColor: '#f8fafc', borderLeft: '4px solid #f59e0b' }}
      >
        {/* Decorative quote mark */}
        <span
          aria-hidden="true"
          className="absolute select-none leading-none"
          style={{ top: '0.25rem', left: '1rem', fontSize: '3rem', color: 'rgb(245 158 11 / 0.25)' }}
        >
          &ldquo;
        </span>
        <p
          className="relative m-0 text-lg leading-8 font-medium"
          style={{ color: '#1e293b' }}
        >
          {children}
        </p>
      </blockquote>
      {(author || source) && (
        <figcaption className="mt-3 pl-1 text-sm" style={{ color: '#64748b' }}>
          <span className="font-semibold" style={{ color: '#0f172a' }}>
            {author}
          </span>
          {role ? `, ${role}` : ''}
          {source ? (
            <>
              {' '}
              <span aria-hidden="true">·</span>{' '}
              <cite className="not-italic" style={{ color: '#4f46e5' }}>{source}</cite>
            </>
          ) : null}
        </figcaption>
      )}
    </figure>
  )
}
