// ============================================================
// components/AnswerBlock.jsx — Answer-shaped Q&A block (AEO)
// Server component: pure display. Used inside MDX via the
// MDXComponents map, e.g.:
//   <AnswerBlock question="How does a non-technical executive
//   actually start using AI in one hour?">
//     One direct, plain-language answer paragraph.
//   </AnswerBlock>
//
// Purpose (AEO, not editorial): put a crisp question and a
// direct answer near the top of a lesson so search and AI
// answer engines can lift it verbatim as the answer to a real
// query. The visible question is wrapped in a semantic heading
// so it reads as a genuine on-page answer, not keyword padding.
//
// The matching FAQPage / QAPage JSON-LD is emitted separately
// from the lesson page (see lib/lesson-faq.js and
// app/learn/[track]/[lesson]/page.js). Keeping the structured
// data in the page and the visible copy here means the two
// always describe the same question without duplicating prose.
// ============================================================

export default function AnswerBlock({ question, children }) {
  return (
    <section
      className="my-7 rounded-xl border p-5 sm:p-6"
      style={{ borderColor: '#bfdbfe', backgroundColor: 'rgb(37 99 235 / 0.04)' }}
      aria-label="Quick answer"
    >
      <p
        className="m-0 mb-2 text-xs font-bold uppercase tracking-wider"
        style={{ color: '#1d4ed8' }}
      >
        Quick answer
      </p>
      {/* h2 so the question is a real heading in the page outline,
          which is what answer engines read first. */}
      <h2
        className="text-xl font-bold leading-snug mt-0 mb-3 scroll-mt-20"
        style={{ color: '#0f172a' }}
      >
        {question}
      </h2>
      <div className="text-base leading-7" style={{ color: '#374151' }}>
        {children}
      </div>
    </section>
  )
}
