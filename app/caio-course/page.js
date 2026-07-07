// ============================================================
// app/caio-course/page.js — The Fractional CAIO Course
// Server Component. Pure JSX except the CourseApplyForm island.
//
// Self-serve $2,500 course for executives reinventing themselves
// as Chief AI Officers. Distinct from the Executive AI Cohort
// (/cohort), which serves executives earlier in the arc who are
// learning to build with AI. Both pages cross-link so a visitor
// self-selects. Positioning ruling: COURSE_STRATEGY.md section 3.0.
// ============================================================

import Link from 'next/link'
import CourseApplyForm from '@/components/CourseApplyForm'

export const metadata = {
  title:       'The Fractional CAIO Course',
  description: 'A self-serve course for senior executives reinventing themselves as ' +
               'Chief AI Officers: the mandate, the operating model and the fractional ' +
               'book of business. $2,500. Built by a 3x CHRO turned Fractional CAIO.',
}

// The 8 modules. Every module ships one artifact the free tracks
// do not contain — that is the paid-tier rule from COURSE_STRATEGY.md.
const MODULES = [
  {
    n: 1,
    title: 'The CAIO Mandate',
    desc:  'Why boards are asking for an AI officer, what they actually want and how the role differs from CTO, CIO and CHRO.',
    artifact: 'The board-meeting one-pager that frames the mandate',
  },
  {
    n: 2,
    title: 'The 60-Day Defensible AI Baseline',
    desc:  'The first thing a CAIO delivers. Not a strategy deck: a baseline the org can defend to its board, its lawyers and its people.',
    artifact: 'The full 60-day baseline plan template, week by week',
  },
  {
    n: 3,
    title: 'The AI Operating Model',
    desc:  'Roles, policy and governance that hold up in practice, plus the three governance decisions that most often go wrong, drawn from live corporate engagements.',
    artifact: 'The AI-use policy template and RACI, ready to adapt',
  },
  {
    n: 4,
    title: 'Build vs Buy vs Platform',
    desc:  'How to make the calls that commit real budget, scored against ten shipped AI builds as case material.',
    artifact: 'The build-buy-platform decision matrix',
  },
  {
    n: 5,
    title: 'The AI Business Case and ROI',
    desc:  'How to put numbers on AI work that a CFO will sign, and how to measure what actually changed.',
    artifact: 'The pre-built ROI model spreadsheet',
  },
  {
    n: 6,
    title: 'Running the Corporate Pilot',
    desc:  'Scoping, pricing and running a paid pilot engagement, taken from a live corporate program and anonymised.',
    artifact: 'The pilot charter and SOW skeleton',
  },
  {
    n: 7,
    title: 'Internal Authority',
    desc:  'Positioning yourself as the AI authority inside an organization: the politics, the sequencing and the trust mechanics.',
    artifact: 'The internal-authority playbook',
  },
  {
    n: 8,
    title: 'The Fractional Path to Market',
    desc:  'Turning the CAIO capability into a fractional book of business at $8K-15K per month per client.',
    artifact: 'The retainer positioning kit: offer copy, pricing logic and a first-10-targets worksheet',
  },
]

const WHO_FOR = [
  'You are a senior operator (CHRO, COO, CIO, VP or equivalent) and you want the CAIO title, mandate and book of business, not another AI literacy course',
  'You already use AI in your own work and now need the operating model, governance and commercial playbook to lead it for others',
  'You want a fractional or full-time CAIO seat within the next two quarters and need the artifacts that make you credible in the room',
]

const WHO_NOT_FOR = [
  'You are early in your AI arc and still building your first workflows. Start with the free tracks, then look at the Executive AI Cohort',
  'You want passive video content. Every module here ends with an artifact you produce for your own situation',
]

const FAQ = [
  {
    q: 'How is this different from the Executive AI Cohort?',
    a: 'Different stage of the arc. The cohort is a live 12-week program, taught with ForwardShare Ventures, for executives learning to build with AI and stand up their portfolio. This course is self-serve and assumes you are past that point: you are reinventing yourself as a Chief AI Officer and need the mandate, the operating model and the commercial playbook.',
  },
  {
    q: 'What does it cost?',
    a: '$2,500 for the full course, all eight modules and every template and artifact in them.',
  },
  {
    q: 'What is the format?',
    a: 'Self-serve and self-paced. Eight modules, each built around one artifact you produce for your own situation: a baseline plan, a policy and RACI, an ROI model, a pilot SOW, a retainer kit.',
  },
  {
    q: 'How do I enroll?',
    a: 'Request enrollment below with your work email. Yuri reviews every request personally and replies within two business days with enrollment details. Seats release in order of request.',
  },
  {
    q: 'Who teaches it?',
    a: 'Yuri Kruman: Fractional Chief AI Officer, 3x CHRO, AI model trainer for OpenAI, Meta and Microsoft, with ten custom AI builds shipped and 2,300+ executives coached.',
  },
]

export default function CaioCoursePage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section
        className="py-20 sm:py-28"
        style={{ backgroundColor: '#0f172a' }}
        aria-labelledby="caio-hero-heading"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider" style={{ color: '#818cf8' }}>
            Self-serve course · $2,500
          </p>
          <h1
            id="caio-hero-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
          >
            The Fractional CAIO Course
          </h1>
          <p className="text-lg leading-relaxed mb-4 mx-auto max-w-2xl" style={{ color: '#94a3b8' }}>
            For senior executives reinventing themselves as Chief AI Officers.
            Not an AI literacy program: the mandate, the operating model, the
            governance and the fractional book of business, with the actual
            templates used in live corporate engagements.
          </p>
          <p className="text-sm mb-10" style={{ color: '#64748b' }}>
            8 modules · 8 artifacts you produce · Built by a 3x CHRO turned Fractional CAIO
          </p>
          <CourseApplyForm source="caio-course-apply-hero" />
        </div>
      </section>

      {/* ---- Who it is for / not for ---- */}
      <section className="py-16 sm:py-20" aria-labelledby="caio-fit-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="caio-fit-heading"
            className="text-2xl sm:text-3xl font-bold mb-8"
            style={{ color: '#0f172a' }}
          >
            Who this is for
          </h2>
          <ul className="flex flex-col gap-4 list-none p-0 m-0 mb-10">
            {WHO_FOR.map(item => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white text-xs font-bold mt-0.5"
                  style={{ backgroundColor: '#4f46e5' }}
                  aria-hidden="true"
                >
                  ✓
                </span>
                <p className="text-base leading-relaxed" style={{ color: '#374151' }}>{item}</p>
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-bold mb-4" style={{ color: '#0f172a' }}>
            Who this is not for
          </h3>
          <ul className="flex flex-col gap-4 list-none p-0 m-0">
            {WHO_NOT_FOR.map(item => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold mt-0.5"
                  style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}
                  aria-hidden="true"
                >
                  ✕
                </span>
                <p className="text-base leading-relaxed" style={{ color: '#374151' }}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- Curriculum ---- */}
      <section
        className="py-16 sm:py-20"
        style={{ backgroundColor: '#f8fafc' }}
        aria-labelledby="caio-curriculum-heading"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="caio-curriculum-heading"
            className="text-2xl sm:text-3xl font-bold mb-3"
            style={{ color: '#0f172a' }}
          >
            The 8 modules
          </h2>
          <p className="text-base mb-8" style={{ color: '#64748b' }}>
            Every module ends with an artifact you produce for your own
            situation. If a module could not name its artifact, it did not
            make the course.
          </p>
          <ol className="flex flex-col gap-4 list-none p-0 m-0">
            {MODULES.map(({ n, title, desc, artifact }) => (
              <li
                key={n}
                className="flex gap-5 rounded-xl border bg-white p-5"
                style={{ borderColor: '#e2e8f0' }}
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: '#4f46e5' }}
                  aria-hidden="true"
                >
                  {n}
                </span>
                <div>
                  <p className="font-bold mb-1" style={{ color: '#0f172a' }}>{title}</p>
                  <p className="text-sm leading-relaxed mb-2" style={{ color: '#64748b' }}>{desc}</p>
                  <p className="text-sm font-medium" style={{ color: '#4f46e5' }}>
                    Artifact: {artifact}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- Which program: cross-link to the cohort ---- */}
      <section className="py-16 sm:py-20" aria-labelledby="caio-which-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="caio-which-heading"
            className="text-2xl font-bold mb-8"
            style={{ color: '#0f172a' }}
          >
            Which program is right for you?
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border-2 p-6" style={{ borderColor: '#4f46e5' }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#4f46e5' }}>
                This course
              </p>
              <p className="font-bold mb-2" style={{ color: '#0f172a' }}>The Fractional CAIO Course</p>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                Self-serve, $2,500. You already build with AI. You are
                reinventing yourself as a Chief AI Officer and need the
                mandate, governance and commercial playbook.
              </p>
            </div>
            <div className="rounded-xl border p-6" style={{ borderColor: '#e2e8f0' }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#7c3aed' }}>
                Earlier in the arc
              </p>
              <p className="font-bold mb-2" style={{ color: '#0f172a' }}>Executive AI Cohort: Forward Achieve</p>
              <p className="text-sm leading-relaxed mb-3" style={{ color: '#64748b' }}>
                Live 12-week cohort with ForwardShare Ventures. You are
                learning to build with AI and want structure, accountability
                and a portfolio by the end.
              </p>
              <Link
                href="/cohort"
                className="text-sm font-semibold underline underline-offset-2"
                style={{ color: '#7c3aed' }}
              >
                See the cohort
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <section
        className="py-16 sm:py-20"
        style={{ backgroundColor: '#f8fafc' }}
        aria-labelledby="caio-faq-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            id="caio-faq-heading"
            className="text-2xl font-bold mb-8"
            style={{ color: '#0f172a' }}
          >
            Frequently asked questions
          </h2>
          <dl className="flex flex-col gap-6">
            {FAQ.map(({ q, a }) => (
              <div key={q} className="rounded-lg border bg-white p-5" style={{ borderColor: '#e2e8f0' }}>
                <dt className="font-semibold mb-2" style={{ color: '#0f172a' }}>{q}</dt>
                <dd className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---- Final CTA ---- */}
      <section className="py-16 sm:py-20" aria-labelledby="caio-cta-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="caio-cta-heading" className="text-2xl font-bold mb-4" style={{ color: '#0f172a' }}>
            Ready to take the CAIO seat?
          </h2>
          <p className="mb-8 text-base" style={{ color: '#64748b' }}>
            Request enrollment with your work email. Yuri replies personally
            within two business days.
          </p>
          <CourseApplyForm source="caio-course-apply-footer" />
          <p className="mt-6 text-sm" style={{ color: '#94a3b8' }}>
            Not there yet?{' '}
            <Link
              href="/learn/fractional-caio-playbook"
              className="underline underline-offset-2"
              style={{ color: '#64748b' }}
            >
              Start with the free Fractional CAIO Playbook track
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
