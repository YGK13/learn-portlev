// ============================================================
// app/programs/page.js — Programs hub
// Server Component. One reachable home for every paid program,
// linked from the "Programs" nav tab. Each card routes to the
// program's own landing page (or external host for the cohort).
//
// Three programs, ordered by where the buyer is in their arc:
//   1. Executive AI Cohort  (/cohort)        — learning to build with AI
//   2. Fractional CAIO Course (/caio-course) — reinventing as a CAIO
//   3. Authority Stack (/authority-stack)    — portfolio-engineering a
//      career against the AI wage gap
// ============================================================

import Link from 'next/link'

export const metadata = {
  title:       'Programs',
  description: 'The PortLev Academy programs: the Executive AI Cohort, the ' +
               'Fractional CAIO Course and Authority Stack. Pick the one that ' +
               'matches where you are in your arc with AI.',
}

const PROGRAMS = [
  {
    href:     '/cohort',
    eyebrow:  'Live · 12 weeks · with ForwardShare',
    title:    'Executive AI Cohort',
    tagline:  'Learn to build with AI, in a cohort.',
    desc:     'A live 12-week program for mid-career executives learning to ' +
              'build with AI and stand up their own AI portfolio, with ' +
              'structure, accountability and a finished portfolio by the end.',
    forWho:   'You are learning to build with AI and want structure and a cohort.',
    cta:      'See the cohort',
    accent:   '#7c3aed',
    featured: false,
  },
  {
    href:     '/caio-course',
    eyebrow:  'Self-serve · $2,500',
    title:    'The Fractional CAIO Course',
    tagline:  'Reinvent yourself as a Chief AI Officer.',
    desc:     'Eight self-paced modules, each ending in an artifact you produce: ' +
              'the mandate, the operating model, the governance and the ' +
              'fractional book of business. Built by a 3x CHRO turned Fractional CAIO.',
    forWho:   'You already build with AI and want the CAIO title, mandate and book of business.',
    cta:      'See the course',
    accent:   '#4f46e5',
    featured: true,
  },
  {
    href:     '/authority-stack',
    eyebrow:  'Founding cohort forming',
    title:    'Authority Stack',
    tagline:  'Portfolio-engineer your career against the AI wage gap.',
    desc:     'A guided build for mid-career executives asking what AI does to ' +
              'their job. From "who am I" to your ICP, your main product and ' +
              'your value ladder, then the build-out, monetization and money ' +
              'management. DIY and done-for-you tracks.',
    forWho:   'You are 35-55, established, and want to future-proof and monetize your expertise.',
    cta:      'See Authority Stack',
    accent:   '#0891b2',
    featured: false,
  },
]

export default function ProgramsPage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="py-20 sm:py-24" style={{ backgroundColor: '#0f172a' }} aria-labelledby="programs-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider" style={{ color: '#818cf8' }}>
            PortLev Academy · Programs
          </p>
          <h1 id="programs-hero" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Three programs. One question: where are you with AI?
          </h1>
          <p className="text-lg leading-relaxed mx-auto max-w-2xl" style={{ color: '#94a3b8' }}>
            Everything on the Academy is free to read. When you are ready to go
            further with structure, artifacts and accountability, one of these
            is your next step. Not sure which? Start at the top and read down.
          </p>
        </div>
      </section>

      {/* ---- Program cards ---- */}
      <section className="py-16 sm:py-20" aria-labelledby="programs-list">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="programs-list" className="sr-only">The programs</h2>
          <div className="flex flex-col gap-6">
            {PROGRAMS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group block rounded-2xl border bg-white p-6 sm:p-8 no-underline transition-shadow hover:shadow-lg"
                style={{ borderColor: p.featured ? p.accent : '#e2e8f0', borderWidth: p.featured ? 2 : 1 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: p.accent }}>
                      {p.eyebrow}
                    </p>
                    <p className="text-xl sm:text-2xl font-bold mb-1" style={{ color: '#0f172a' }}>{p.title}</p>
                    <p className="text-base font-medium mb-3" style={{ color: '#475569' }}>{p.tagline}</p>
                  </div>
                  {p.featured && (
                    <span
                      className="shrink-0 rounded-full px-3 py-1 text-xs font-semibold text-white"
                      style={{ backgroundColor: p.accent }}
                    >
                      Most popular
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748b' }}>{p.desc}</p>
                <p className="text-sm mb-5" style={{ color: '#94a3b8' }}>
                  <span className="font-semibold" style={{ color: '#475569' }}>Right for you if: </span>
                  {p.forWho}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: p.accent }}>
                  {p.cta}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Free-first reassurance ---- */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: '#f8fafc' }} aria-labelledby="programs-free">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="programs-free" className="text-2xl font-bold mb-4" style={{ color: '#0f172a' }}>
            Not ready to commit? Start free.
          </h2>
          <p className="mb-8 text-base" style={{ color: '#64748b' }}>
            Nine tracks and dozens of lessons on building with AI, free and open.
            The programs above are where you go when free is no longer enough.
          </p>
          <Link
            href="/learn"
            className="inline-flex items-center gap-1.5 rounded-lg px-5 py-2.5 text-sm font-semibold text-white no-underline"
            style={{ backgroundColor: '#4f46e5' }}
          >
            Browse the free tracks
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
