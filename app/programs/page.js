// ============================================================
// app/programs/page.js - Programs hub
// Server Component. One reachable home for every paid program,
// linked from the "Programs" nav tab. Each card routes to the
// program's own landing page (or external host for the cohort).
//
// Three programs, ordered by where the buyer is in their arc:
//   1. Executive AI Cohort      (/cohort)          learning to build with AI
//   2. Fractional CAIO Program  (/program)         reinventing as a CAIO
//   3. Authority Stack          (/authority-stack) portfolio-engineering a
//      career against the AI wage gap
// ============================================================

import Link from 'next/link'
import { PROGRAM, COHORT, breadcrumbLd } from '@/lib/site'
import JsonLd from '@/components/JsonLd'

export const metadata = {
  title:       { absolute: 'PortLev Academy Programs: Cohort, CAIO, Authority Stack' },
  description: 'The PortLev Academy programs: the live Executive AI Cohort, the self-paced ' +
               'Fractional CAIO Program and Authority Stack. Pick by where you are with AI.',
  alternates: { canonical: '/programs' },
}

const PROGRAMS = [
  {
    href:     COHORT.path,
    eyebrow:  `Live · 12 weeks · with ForwardShare · ${COHORT.priceLabel}`,
    title:    'Executive AI Cohort',
    tagline:  'Learn to build with AI, in a cohort.',
    desc:     'A live 12-week program for mid-career executives learning to ' +
              'build with AI and stand up their own AI portfolio, with ' +
              'structure, accountability and a finished portfolio by the end.',
    forWho:   'You are learning to build with AI and want structure and a cohort.',
    cta:      'See the cohort',
    featured: false,
  },
  {
    href:     PROGRAM.path,
    eyebrow:  `Self-paced · Application-based · ${PROGRAM.priceLabel}`,
    title:    PROGRAM.name,
    tagline:  'Reinvent yourself as a Chief AI Officer.',
    desc:     'Eight self-paced modules, each ending in an artifact you produce: ' +
              'the mandate, the operating model, the governance and the ' +
              'fractional book of business. Built by a 3x CHRO turned Fractional CAIO.',
    forWho:   'You already build with AI and want the CAIO title, mandate and book of business.',
    cta:      'See the program',
    featured: true,
  },
  {
    href:     '/authority-stack',
    eyebrow:  'Founding cohort forming · DIY $1,997 · Guided from $5,000',
    title:    'Authority Stack',
    tagline:  'Portfolio-engineer your career against the AI wage gap.',
    desc:     'A guided build for mid-career executives asking what AI does to ' +
              'their job. From "who am I" to your ICP, your main product and ' +
              'your value ladder, then the build-out, monetization and money ' +
              'management. DIY and done-for-you tracks.',
    forWho:   'You are 35-55, established, and want to future-proof and monetize your expertise.',
    cta:      'See Authority Stack',
    featured: false,
  },
]

export default function ProgramsPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Programs', path: '/programs' }])} />

      {/* ---- Hero ---- */}
      <section className="relative overflow-hidden bg-canvas py-16 sm:py-24" aria-labelledby="programs-hero">
        <div className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[600px] rounded-full hero-gradient opacity-[0.18] blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow mb-4">PortLev Academy · Programs</p>
          <h1 id="programs-hero" className="font-display text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-ink mb-5">
            Three programs. One question: where are you with AI?
          </h1>
          <p className="text-lg leading-relaxed mx-auto max-w-2xl text-body">
            Everything on the Academy is free to read. When you are ready to go
            further with structure, artifacts and accountability, one of these
            is your next step. Not sure which? Start at the top and read down.
          </p>
        </div>
      </section>

      {/* ---- Program cards ---- */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="programs-list">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="programs-list" className="sr-only">The programs</h2>
          <div className="flex flex-col gap-6">
            {PROGRAMS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group card card-hover block p-6 sm:p-8 no-underline"
                style={p.featured ? { borderColor: '#4b41e1', borderWidth: 2 } : undefined}
                data-reveal
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow mb-2">{p.eyebrow}</p>
                    <p className="font-display text-xl sm:text-2xl font-bold mb-1 text-ink">{p.title}</p>
                    <p className="text-base font-medium mb-3 text-body">{p.tagline}</p>
                  </div>
                  {p.featured && (
                    <span className="shrink-0 rounded-full px-3 py-1 text-xs font-semibold text-white bg-indigo">
                      Flagship
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed mb-4 text-body">{p.desc}</p>
                <p className="text-sm mb-5 text-muted">
                  <span className="font-semibold text-body">Right for you if: </span>
                  {p.forWho}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo">
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
      <section className="py-16 sm:py-20 bg-canvas border-t border-border" aria-labelledby="programs-free">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="programs-free" className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-ink">
            Not ready to commit? Start free.
          </h2>
          <p className="mb-8 text-base text-muted">
            Ten tracks and dozens of lessons on building with AI, free and open.
            The programs above are where you go when free is no longer enough.
          </p>
          <Link href="/learn" className="btn btn-primary">
            Browse the free tracks
          </Link>
        </div>
      </section>
    </>
  )
}
