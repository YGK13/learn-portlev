// ============================================================
// app/cohort/page.js — Portfolio Executive Cohort landing page
// Server Component. Pure JSX.
//
// This page is a teaser for the live cohort run by Yuri with
// ForwardShare Ventures. All CTAs link directly to the
// ForwardShare enrolment page (the source of truth) so there
// is one funnel, not two.
// ============================================================

import Link from 'next/link'

// Single source of truth for the cohort URL.
const COHORT_URL = 'https://forwardshare.co/executive-ai-cohort-forward-achieve-forward-share-ventures'

export const metadata = {
  alternates: { canonical: '/cohort' },
  title:       'Executive AI Cohort: Forward Achieve',
  description: 'A 12-week live cohort with ForwardShare Ventures for ' +
               'mid-career executives building their AI Portfolio OS. ' +
               'Limited to 15 per intake.',
}

const OUTCOMES = [
  'A complete Task Stack Map: where AI substitutes, augments and unlocks new work in your specific role',
  'An AI Skills Edge plan moving you from user to architect, layer by layer',
  'A Node Density Map of the network that will actually distribute your work',
  'A Portfolio Seed List: three to five income streams matched to your skills, audience and constraints',
  'Your first paid Proof-of-Concept engagement, started during the cohort',
  'A Money OS for variable income, including legal and tax guardrails',
]

const CURRICULUM = [
  { week: 'Weeks 1–3',  title: 'See the Gap',     desc: 'Diagnose your personal AI Wage Gap. Calculate your score, map the macro and the micro, and decide what you are actually optimizing for.' },
  { week: 'Weeks 4–6',  title: 'Design the OS',   desc: 'Build your Task Stack Map, AI Skills Edge plan and Node Density Map. The three documents that everything else hangs off.' },
  { week: 'Weeks 7–9',  title: 'Build the First Stream', desc: 'Choose your first portfolio stream, run the Stream Filter Test, ship a paid Proof-of-Concept and negotiate the space to do it.' },
  { week: 'Weeks 10–12', title: 'Scale and Protect', desc: 'Systems that scale beyond your own hours. Legal and IP guardrails. A Money OS built for variable income. The plan for the next 90 days.' },
]

const FAQ = [
  {
    q: 'Who is this for?',
    a: 'Mid-career executives, senior consultants, coaches and advisors who want to build an AI Portfolio OS while still employed. Not for absolute beginners. You should already be comfortable using AI tools in your work.',
  },
  {
    q: 'What is the time commitment?',
    a: 'One live session per week (90 minutes) plus approximately three to five hours of implementation work on your own portfolio. Expect to spend about six hours per week.',
  },
  {
    q: 'What does it cost?',
    a: 'Inaugural cohort pricing is $2,500. Future cohorts will be priced higher as the program matures and the alumni network compounds.',
  },
  {
    q: 'What if I miss a session?',
    a: 'Every session is recorded and available within 24 hours. The recordings are yours to keep.',
  },
  {
    q: 'Who runs it?',
    a: 'Yuri Kruman, in partnership with ForwardShare Ventures. The full program operates on the ForwardShare platform.',
  },
]

export default function CohortPage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section
        className="py-20 sm:py-28"
        style={{ backgroundColor: '#0f172a' }}
        aria-labelledby="cohort-hero-heading"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider" style={{ color: '#f59e0b' }}>
            Live cohort · ForwardShare Ventures
          </p>
          <h1
            id="cohort-hero-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
          >
            Executive AI Cohort: Forward Achieve
          </h1>
          <p className="text-lg leading-relaxed mb-4 mx-auto max-w-2xl" style={{ color: '#94a3b8' }}>
            A 12-week intensive for mid-career executives who are done watching
            the AI wave from the sideline. Build your Portfolio OS, ship your
            first paid stream and walk out with a Money OS that survives the
            transition.
          </p>
          <p className="text-sm mb-10" style={{ color: '#64748b' }}>
            15 participants max · Live sessions · Real deliverables · Led by Yuri Kruman with ForwardShare Ventures
          </p>
          <a
            href={COHORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 rounded-lg px-7 py-3.5
              text-sm font-semibold text-white no-underline
              transition-opacity hover:opacity-90
            "
            style={{ backgroundColor: '#7c3aed' }}
          >
            Apply on ForwardShare
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ---- Outcomes ---- */}
      <section className="py-16 sm:py-20" aria-labelledby="cohort-outcomes-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="cohort-outcomes-heading"
            className="text-2xl sm:text-3xl font-bold mb-8"
            style={{ color: '#0f172a' }}
          >
            What you walk away with
          </h2>
          <ul className="flex flex-col gap-4 list-none p-0 m-0">
            {OUTCOMES.map(outcome => (
              <li key={outcome} className="flex items-start gap-3">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white text-xs font-bold mt-0.5"
                  style={{ backgroundColor: '#7c3aed' }}
                  aria-hidden="true"
                >
                  ✓
                </span>
                <p className="text-base leading-relaxed" style={{ color: '#374151' }}>{outcome}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- Curriculum ---- */}
      <section
        className="py-16 sm:py-20"
        style={{ backgroundColor: '#f8fafc' }}
        aria-labelledby="cohort-curriculum-heading"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="cohort-curriculum-heading"
            className="text-2xl sm:text-3xl font-bold mb-8"
            style={{ color: '#0f172a' }}
          >
            12-week curriculum
          </h2>
          <ol className="flex flex-col gap-4 list-none p-0 m-0">
            {CURRICULUM.map(({ week, title, desc }) => (
              <li
                key={week}
                className="flex gap-5 rounded-xl border bg-white p-5"
                style={{ borderColor: '#e2e8f0' }}
              >
                <span
                  className="shrink-0 text-xs font-bold uppercase tracking-wider pt-0.5"
                  style={{ color: '#7c3aed', minWidth: '5.5rem' }}
                >
                  {week}
                </span>
                <div>
                  <p className="font-bold mb-1" style={{ color: '#0f172a' }}>{title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <section className="py-16 sm:py-20" aria-labelledby="cohort-faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            id="cohort-faq-heading"
            className="text-2xl font-bold mb-8"
            style={{ color: '#0f172a' }}
          >
            Frequently asked questions
          </h2>
          <dl className="flex flex-col gap-6">
            {FAQ.map(({ q, a }) => (
              <div key={q} className="rounded-lg border p-5" style={{ borderColor: '#e2e8f0' }}>
                <dt className="font-semibold mb-2" style={{ color: '#0f172a' }}>{q}</dt>
                <dd className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: '#f8fafc' }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#0f172a' }}>
            Ready to build your Portfolio OS?
          </h2>
          <p className="mb-8 text-base" style={{ color: '#64748b' }}>
            The cohort runs with 15 participants maximum. Once it fills, enrollment closes.
          </p>
          <a
            href={COHORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 rounded-lg px-7 py-3.5
              text-sm font-semibold text-white no-underline
              transition-opacity hover:opacity-90
            "
            style={{ backgroundColor: '#7c3aed' }}
          >
            Apply on ForwardShare
          </a>
          <p className="mt-5 text-sm" style={{ color: '#94a3b8' }}>
            Not ready for the cohort?{' '}
            <Link
              href="/learn"
              className="underline underline-offset-2"
              style={{ color: '#64748b' }}
            >
              Start with the free lessons
            </Link>
            .
          </p>
          <p className="mt-2 text-sm" style={{ color: '#94a3b8' }}>
            Further along? Already building with AI and after the Chief AI
            Officer seat itself?{' '}
            <Link
              href="/program"
              className="underline underline-offset-2"
              style={{ color: '#64748b' }}
            >
              See the Fractional CAIO Course
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
