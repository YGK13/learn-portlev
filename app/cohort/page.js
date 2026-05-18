// ============================================================
// app/cohort/page.js — CHRO AI Cohort landing page
// Server Component. Pure JSX.
// ============================================================

import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata = {
  title:       'CHRO AI Cohort',
  description: 'An 8-week live cohort for CHROs and senior HR leaders ready to deploy AI at scale. ' +
               'Small cohort. Hands-on. Real deliverables.',
}

const OUTCOMES = [
  'A fully documented AI strategy for your HR function, ready to present to your board',
  'Three live AI workflows deployed in your actual systems before the cohort ends',
  'An attrition risk model built on your workforce data, not a generic template',
  'A prompt library and playbook your team can use without you in the room',
  'A peer network of CHROs at companies facing the same challenges',
]

const CURRICULUM = [
  { week: 'Week 1–2', title: 'AI Audit and Strategy',       desc: 'Assess your current HR stack, map your highest-leverage AI opportunities and draft a board-ready strategy.' },
  { week: 'Week 3–4', title: 'First Workflows',             desc: 'Deploy your first three AI-powered workflows in tier-one HR operations using tools your team already has.' },
  { week: 'Week 5–6', title: 'Analytics and Prediction',    desc: 'Build an attrition risk model and workforce planning dashboard on your own data.' },
  { week: 'Week 7–8', title: 'Scale and Operationalize',    desc: 'Document and hand off your playbook so your team can run these systems without you.' },
]

const FAQ = [
  {
    q: 'Who is this for?',
    a: 'CHROs, CPOs and senior HR leaders at companies with 200+ employees who have budget authority and want to deploy AI in their HR function within the next 90 days.',
  },
  {
    q: 'What is the time commitment?',
    a: 'Two live sessions per week (90 minutes each) plus approximately three to four hours of implementation work. Expect to spend 6-8 hours per week.',
  },
  {
    q: 'What tools do I need?',
    a: 'Claude or ChatGPT (we use both), your existing HRIS, and a spreadsheet. No coding required.',
  },
  {
    q: 'What does it cost?',
    a: 'Cohort pricing is $2,000–$5,000 per participant depending on cohort size and access level. Exact pricing is available on Maven during enrollment.',
  },
  {
    q: 'What if I miss a session?',
    a: 'Every session is recorded and available within 24 hours. Recordings are yours to keep.',
  },
]

export default function CohortPage() {
  const mavenUrl = process.env.NEXT_PUBLIC_MAVEN_COHORT_URL || 'https://maven.com'

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
            Live cohort on Maven
          </p>
          <h1
            id="cohort-hero-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
          >
            CHRO AI Cohort
          </h1>
          <p className="text-lg leading-relaxed mb-4 mx-auto max-w-2xl" style={{ color: '#94a3b8' }}>
            An 8-week intensive for CHROs and senior HR leaders who want to deploy AI
            in their HR function and walk away with a real strategy, real workflows and a
            real playbook their team can run.
          </p>
          <p className="text-sm mb-10" style={{ color: '#64748b' }}>
            Small cohort (12 participants max) · Live sessions · Real deliverables · Led by Yuri Kruman
          </p>
          <a
            href={mavenUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 rounded-lg px-7 py-3.5
              text-sm font-semibold text-white no-underline
              transition-opacity hover:opacity-90
            "
            style={{ backgroundColor: '#7c3aed' }}
          >
            Apply on Maven
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
            8-week curriculum
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
            Ready to close the gap in your org?
          </h2>
          <p className="mb-8 text-base" style={{ color: '#64748b' }}>
            The cohort runs with 12 participants maximum. Once it fills, enrollment closes.
          </p>
          <a
            href={mavenUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 rounded-lg px-7 py-3.5
              text-sm font-semibold text-white no-underline
              transition-opacity hover:opacity-90
            "
            style={{ backgroundColor: '#7c3aed' }}
          >
            Apply on Maven
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
        </div>
      </section>
    </>
  )
}
