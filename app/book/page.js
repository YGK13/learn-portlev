// ============================================================
// app/book/page.js — "Closing the AI Wage Gap" book landing page
// Server Component. Pure JSX, no MDX.
//
// Mirrors the real manuscript: 5 Parts, 18 chapters, 275 pages.
// Launch target: Q4 2026. Single CTA is the waitlist (handled
// by NewsletterCapture, subscribing to The Leverage Brief with
// source="book-waitlist" so we can segment in beehiiv).
// ============================================================

import Link             from 'next/link'
import NewsletterCapture from '@/components/NewsletterCapture'

export const metadata = {
  alternates: { canonical: '/book' },
  title:       'The Book: Closing the AI Wage Gap',
  description: 'A 5-part, 18-chapter operating system for mid-career executives ' +
               'who want to close the AI Wage Gap. Launching Q4 2026.',
}

// ------------------------------------------------------------
// The actual table of contents from the manuscript.
// ------------------------------------------------------------
const PARTS = [
  {
    number:  'Part I',
    title:   'The New Wage Game',
    range:   'Chapters 1–4',
    desc:    'Why the old career ladder is gone, what the AI Wage Gap actually is in dollars, how AI is reshaping every desk job and how to calculate your personal score.',
    chapters: [
      { n: 1, title: 'The Day the Ladder Snapped' },
      { n: 2, title: 'The AI Wage Gap by the Numbers' },
      { n: 3, title: 'How AI Actually Changes Work' },
      { n: 4, title: 'Calculate Your Personal AI Wage Gap Score' },
    ],
  },
  {
    number:  'Part II',
    title:   'Design Your AI Portfolio OS',
    range:   'Chapters 5–8',
    desc:    'The blueprint. Move from a single job title to a stack of tasks, build the AI skills edge that compounds, design the network that distributes your work and choose your first portfolio streams.',
    chapters: [
      { n: 5, title: 'From Job Title to Task Stack' },
      { n: 6, title: 'Building Your AI Skills Edge' },
      { n: 7, title: 'Nodes Not Ladders' },
      { n: 8, title: 'Choosing Your First Portfolio Streams' },
    ],
  },
  {
    number:  'Part III',
    title:   'Execute While You Are Still Employed',
    range:   'Chapters 9–12',
    desc:    'How to launch a real income stream without quitting. From the first paid engagement to the conversation with your employer, the legal guardrails and the systems that scale beyond your own hours.',
    chapters: [
      { n:  9, title: 'The First Stream: From Free Work to Paid Work' },
      { n: 10, title: 'The Conversation with Your Employer' },
      { n: 11, title: 'Legal Guardrails, Contracts and Practice Infrastructure' },
      { n: 12, title: 'Systems That Scale' },
    ],
  },
  {
    number:  'Part IV',
    title:   'Sustain and Thrive',
    range:   'Chapters 13–15',
    desc:    'The questions every portfolio executive faces. When to leave employment, how to run a Money OS built for variable income and how to manage the human side: burnout, family and identity.',
    chapters: [
      { n: 13, title: 'When to Jump' },
      { n: 14, title: 'The Money OS' },
      { n: 15, title: 'Burnout, Family, Identity' },
    ],
  },
  {
    number:  'Part V',
    title:   'The Long Game',
    range:   'Chapters 16–18',
    desc:    'Compound your returns over years and decades, lead the shift for others in your organization and industry and close the final gap: the one between who you were when the ladder snapped and who you are becoming on the other side.',
    chapters: [
      { n: 16, title: 'Compounding Your Portfolio' },
      { n: 17, title: 'Leading the Shift for Others' },
      { n: 18, title: 'Who You Are Becoming' },
    ],
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
                Launching Q4 2026
              </p>
              <h1
                id="book-hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-5"
              >
                Closing the AI Wage Gap
              </h1>
              <p className="text-xl leading-relaxed mb-4 text-white/80">
                The Definitive Guide to Building Your AI Portfolio OS
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#94a3b8' }}>
                Five parts. Eighteen chapters. 275 pages. A complete operating
                system for mid-career executives who refuse to be commoditized
                by AI and intend to be on the right side of the gap.
              </p>
              <p className="text-sm font-medium" style={{ color: '#64748b' }}>
                By Yuri Kruman. 3x CHRO. Trainer of frontier AI models for Meta, Microsoft and OpenAI. Executive coach to 2,300+.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- What is inside (the actual TOC) ---- */}
      <section
        className="py-16 sm:py-20"
        aria-labelledby="book-contents-heading"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: '#4f46e5' }}>
            Table of Contents
          </p>
          <h2
            id="book-contents-heading"
            className="text-2xl sm:text-3xl font-bold mb-3"
            style={{ color: '#0f172a' }}
          >
            The full operating system, end to end
          </h2>
          <p className="mb-12 text-base leading-relaxed" style={{ color: '#64748b' }}>
            Every chapter ends with structured exercises that produce a concrete
            output: a Task Stack Map, a Skills Edge plan, a Node Density Map, a
            Portfolio Seed List, a Money OS. The exercises are the book.
          </p>

          <ol className="flex flex-col gap-8 list-none p-0 m-0">
            {PARTS.map(part => (
              <li key={part.number}>
                {/* Part header */}
                <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: '#4f46e5' }}
                  >
                    {part.number}
                  </span>
                  <h3 className="text-xl font-bold" style={{ color: '#0f172a' }}>
                    {part.title}
                  </h3>
                  <span className="text-xs font-medium" style={{ color: '#94a3b8' }}>
                    · {part.range}
                  </span>
                </div>
                <p className="mb-4 text-sm leading-relaxed max-w-3xl" style={{ color: '#64748b' }}>
                  {part.desc}
                </p>

                {/* Chapter list */}
                <ul
                  className="rounded-xl border divide-y list-none p-0 m-0"
                  style={{ borderColor: '#e2e8f0' }}
                >
                  {part.chapters.map(ch => (
                    <li
                      key={ch.n}
                      className="flex items-center gap-4 px-5 py-3"
                      style={{ borderColor: '#f1f5f9' }}
                    >
                      <span
                        className="shrink-0 text-xs font-bold tabular-nums"
                        style={{ color: '#94a3b8', minWidth: '2.25rem' }}
                      >
                        Ch {String(ch.n).padStart(2, '0')}
                      </span>
                      <span className="text-sm font-medium" style={{ color: '#0f172a' }}>
                        {ch.title}
                      </span>
                    </li>
                  ))}
                </ul>
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
              'Mid-career executives whose ladder has snapped or is about to',
              'CHROs and senior HR leaders deploying AI inside large organizations',
              'Management consultants who want to multiply output without burning out',
              'Coaches, advisors and operators building a portfolio of income streams',
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

      {/* ---- Waitlist CTA ---- */}
      <section className="py-20" aria-labelledby="book-waitlist-heading">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: '#f59e0b' }}>
            Launching Q4 2026
          </p>
          <h2
            id="book-waitlist-heading"
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ color: '#0f172a' }}
          >
            Get notified when the book launches
          </h2>
          <p className="mb-8 text-base leading-relaxed" style={{ color: '#64748b' }}>
            Drop your email and I will send you the launch date, the pre-order
            link and a sample chapter the moment the book goes live. You will
            also receive The Leverage Brief: one actionable AI idea every Monday.
          </p>
          <div className="mx-auto max-w-md">
            <NewsletterCapture variant="hero" source="book-waitlist" />
          </div>
          <p className="mt-4 text-xs" style={{ color: '#94a3b8' }}>
            No spam. Unsubscribe anytime.
          </p>
          <p className="mt-10 text-sm" style={{ color: '#64748b' }}>
            Want to start applying the frameworks now?{' '}
            <Link
              href="/learn"
              className="underline underline-offset-2 font-semibold"
              style={{ color: '#4f46e5' }}
            >
              Begin with the free lessons
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
