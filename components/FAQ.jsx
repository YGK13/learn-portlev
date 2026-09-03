// ============================================================
// components/FAQ.jsx - Accessible accordion built on <details>
// Server component, zero JavaScript. Answers are real prose,
// first sentence answers the question directly (AEO pattern).
// Pair with faqLd() from lib/site.js for the FAQPage schema.
// Props: items [{ q, a }], id (section id), heading, intro
// ============================================================

export default function FAQ({ items, id = 'faq', heading = 'Frequently asked questions', intro }) {
  if (!items?.length) return null
  return (
    <section className="py-16 sm:py-20" aria-labelledby={`${id}-heading`} id={id}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 id={`${id}-heading`} className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-3">
          {heading}
        </h2>
        {intro && <p className="text-base text-muted mb-8">{intro}</p>}
        <div className="faq flex flex-col divide-y divide-border border-y border-border">
          {items.map(({ q, a }, i) => (
            <details key={q} className="group py-1" name={id}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4 text-left text-base font-semibold text-ink">
                <span>{q}</span>
                <span
                  className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <div className="pb-5 pr-10 text-[15px] leading-relaxed text-body" id={`${id}-a-${i}`}>
                {a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
