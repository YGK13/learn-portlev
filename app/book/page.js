// ============================================================
// app/book/page.js — "Closing the AI Wage Gap" book landing page
// Server Component. Pure JSX, no MDX.
// ============================================================

import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata = {
  title:       'The Book — Closing the AI Wage Gap',
  description: 'The definitive guide for mid-career executives and consultants ' +
               'who want to build AI-powered systems that generate professional leverage.',
}

// What is covered — rendered as chapter list
const PARTS = [
  {
    number: 'Part I',
    title:  'The Gap Is Real',
    desc:   'What the AI Wage Gap is, why it is widening, and why the professionals who close it now will own the next decade of their careers.',
  },
  {
    number: 'Part II',
    title:  'Map Your Leverage Points',
    desc:   'A diagnostic framework for identifying exactly where AI can multiply your output within your specific role, industry and work style.',
  },
  {
    number: 'Part III',
    title:  'Build Your First Systems',
    desc:   'Step-by-step workflows for the highest-leverage AI systems: research automation, document generation, client delivery pipelines and more.',
  },
  {
    number: 'Part IV',
    title:  'Scale and Generate Income',
    desc:   'How to package your AI-powered expertise into products, consulting engagements, courses and communities that generate revenue while you sleep.',
  },
  {
    number: 'Part V',
    title:  'The AI-Powered Career',
    desc:   'Long-term strategy for executives in an AI-first world: how to position, how to lead and how to stay on the right side of the gap forever.',
  },
]

export default function BookPage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section
        className="py-20 sm:py-28"
        style={{ backgroundColor: '#0f172a' }}
        aria-labelledby="book-hero-heading"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Book mock cover */}
            <div
              className="shrink-0 w-44 h-64 rounded-xl flex items-center justify-center text-5xl shadow-2xl"
              style={{ backgroundColor: '#4f46e5' }}
              aria-label="Book cover: Closing the AI Wage Gap"
              role="img"
            >
              📘
            </div>

            {/* Copy */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: '#f59e0b' }}>
                Coming 2026
              </p>
              <h1
                id="book-hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-5"
              >
                The Definitive Guide to Closing the AI Wage Gap
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#94a3b8' }}>
                Written for mid-career executives, consultants and coaches who are done watching
                from the sideline. A practical, system-by-system guide to building AI-powered leverage
                in your career before the gap becomes uncrossable.
              </p>
              <p className="text-sm font-medium mb-2" style={{ color: '#64748b' }}>
                By Yuri Kruman &mdash; 3x CHRO, AI Trainer (Meta, Microsoft, OpenAI), Executive Coach
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
                <a
                  href="https://portlev.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2 rounded-lg px-6 py-3
                    text-sm font-semibold no-underline text-white
                    transition-opacity hover:opacity-90
                  "
                  style={{ backgroundColor: '#f59e0b' }}
                >
                  Join the waitlist
                </a>
                <Link
                  href="/learn"
                  className="
                    inline-flex items-center gap-2 rounded-lg px-6 py-3
                    text-sm font-semibold no-underline transition-colors
                  "
                  style={{
                    backgroundColor: 'rgb(255 255 255 / 0.08)',
                    color:           '#e2e8f0',
                    border:          '1px solid rgb(255 255 255 / 0.15)',
                  }}
                >
                  Read free lessons first
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- What is inside ---- */}
      <section
        className="py-16 sm:py-20"
        aria-labelledby="book-contents-heading"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="book-contents-heading"
            className="text-2xl sm:text-3xl font-bold mb-3"
            style={{ color: '#0f172a' }}
          >
            What is inside
          </h2>
          <p className="mb-10 text-base" style={{ color: '#64748b' }}>
            Five parts, twenty chapters, 60,000+ words. 70% practical, 30% strategic.
            Every chapter ends with a specific action you can take that week.
          </p>

          <ol className="flex flex-col gap-5 list-none p-0 m-0">
            {PARTS.map(part => (
              <li
                key={part.number}
                className="flex gap-5 rounded-xl border p-5"
                style={{ borderColor: '#e2e8f0' }}
              >
                <span
                  className="shrink-0 text-xs font-bold uppercase tracking-wider pt-0.5"
                  style={{ color: '#4f46e5', minWidth: '4rem' }}
                >
                  {part.number}
                </span>
                <div>
                  <p className="font-bold mb-1" style={{ color: '#0f172a' }}>{part.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{part.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- Who this is for ---- */}
      <section
        className="py-16 sm:py-20"
        style={{ backgroundColor: '#f8fafc' }}
        aria-labelledby="book-audience-heading"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="book-audience-heading"
            className="text-2xl font-bold mb-8"
            style={{ color: '#0f172a' }}
          >
            Who this is for
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 list-none p-0 m-0">
            {[
              'CHROs and senior HR leaders who need to deploy AI at scale',
              'Management consultants who want to 3x output without 3x hours',
              'Executive coaches building AI-powered practice assets',
              'Mid-career professionals who can see the wage gap opening and intend to be on the right side',
            ].map(item => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border bg-white p-4"
                style={{ borderColor: '#e2e8f0' }}
              >
                <span className="text-lg mt-0.5" aria-hidden="true">✓</span>
                <span className="text-sm leading-relaxed" style={{ color: '#374151' }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- CTAs ---- */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col gap-5">
          <CTABanner variant="newsletter" source="book-page" />
          <CTABanner variant="cohort" />
        </div>
      </section>
    </>
  )
}
