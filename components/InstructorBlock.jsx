// ============================================================
// components/InstructorBlock.jsx - Instructor authority block
// Server component. Every claim below is already published on
// /about, /program or /book. Do not add a number here that is
// not on one of those pages.
// Props: variant 'full' | 'compact', eyebrow
// ============================================================

import Image from 'next/image'
import Link from 'next/link'

const CREDENTIALS = [
  { k: '3x',     v: 'Chief Human Resources Officer' },
  { k: '10',     v: 'custom AI builds shipped' },
  { k: '2,300+', v: 'executives and professionals coached' },
  { k: '3',      v: 'frontier labs trained for: OpenAI, Meta, Microsoft' },
]

export default function InstructorBlock({ variant = 'full', eyebrow = 'Who teaches this' }) {
  return (
    <section
      className="py-16 sm:py-20 bg-white border-y border-border"
      aria-labelledby="instructor-heading"
      data-reveal
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-center">
          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute -inset-3 rounded-[28px] hero-gradient opacity-15 blur-2xl" aria-hidden="true" />
            <Image
              src="/yuri-kruman.jpg"
              alt="Yuri Kruman, Fractional Chief AI Officer and 3x CHRO, instructor of PortLev Academy"
              width={640}
              height={640}
              sizes="(min-width: 1024px) 420px, 90vw"
              className="relative w-full rounded-3xl object-cover shadow-card"
              priority={false}
            />
          </div>

          {/* Copy */}
          <div>
            <p className="eyebrow mb-3">{eyebrow}</p>
            <h2 id="instructor-heading" className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink mb-4">
              Yuri Kruman
            </h2>
            <p className="text-lg text-body leading-relaxed mb-5">
              Fractional Chief AI Officer and three-time CHRO. Since 2023 Yuri has trained
              frontier AI models for OpenAI, Meta and Microsoft, evaluating outputs and grading
              reasoning across HR, legal and business domains. The templates taught here are the
              instruments used in live corporate engagements, not classroom props.
            </p>
            {variant === 'full' && (
              <p className="text-base text-body leading-relaxed mb-6">
                Founder of Portfolio Leverage Company, author of the forthcoming book
                <em> Closing the AI Wage Gap</em> and writer of The Leverage Brief. Top 5 Global HR
                Thought Leader (Thinkers360). JD, Cardozo. BA, UPenn.
              </p>
            )}

            <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-7">
              {CREDENTIALS.map(({ k, v }) => (
                <div key={v} className="rounded-xl border border-border bg-canvas p-4">
                  <dt className="font-display text-2xl font-bold text-indigo">{k}</dt>
                  <dd className="mt-1 text-xs leading-snug text-muted">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <Link href="/about" className="font-semibold text-indigo hover:underline">Full bio</Link>
              <a href="https://www.linkedin.com/in/yurikruman/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink hover:underline">LinkedIn</a>
              <a href="https://yurikruman.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink hover:underline">yurikruman.com</a>
              <a href="https://portlev.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ink hover:underline">portlev.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
