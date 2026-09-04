// ============================================================
// app/page.js - Home page (Server Component)
//
// The academy landing is the conversion surface for the
// Fractional CAIO Program, sold from portlev.com and The Leverage
// Brief. Above the fold it answers four questions: what this is,
// who it is for, why trust it and what to do next.
//
// Sections: Hero -> Proof bar -> Two ways further (program vs
// cohort vs free) -> Curriculum preview -> How it works ->
// Instructor -> Latest Briefs + capture -> FAQ -> Final CTA
// ============================================================

import Link from 'next/link'
import { getAllTracks, getLessonsForTrack, getAllBriefs } from '@/lib/content'
import { getLeverageBriefPosts } from '@/lib/leverage-brief'
import { PROGRAM, COHORT, NEWSLETTER, BUILDS, faqLd } from '@/lib/site'
import TrackCard         from '@/components/TrackCard'
import BriefCard         from '@/components/BriefCard'
import NewsletterCapture from '@/components/NewsletterCapture'
import InstructorBlock   from '@/components/InstructorBlock'
import TrackedLink       from '@/components/TrackedLink'
import FAQ               from '@/components/FAQ'
import JsonLd            from '@/components/JsonLd'

export const metadata = {
  title: { absolute: 'PortLev Academy: Free AI Curriculum for Executives' },
  description:
    'Free, open-source AI curriculum for executives from a 3x CHRO who trains frontier ' +
    'models. Ten tracks, no code. Then the $2,500 Fractional CAIO Program.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'PortLev Academy: Free AI Curriculum for Executives',
    description:
      'Free, open-source AI curriculum from a 3x CHRO who trains frontier models. ' +
      'Ten tracks, no code. Then the Fractional CAIO Program.',
    url: '/',
  },
}

// Re-render hourly so newly published briefs on beehiiv appear within the hour.
export const revalidate = 3600

const HOME_FAQ = [
  {
    q: 'What is PortLev Academy?',
    a: 'PortLev Academy is a free, open-source AI curriculum for executives, consultants and coaches, published by Portfolio Leverage Company and taught by Yuri Kruman. It teaches how to build AI workflows and lead AI adoption without code, and it is the on-ramp to the paid Fractional CAIO Program and the Executive AI Cohort.',
  },
  {
    q: 'Is the curriculum really free?',
    a: 'Yes. Every track and lesson on this site is free to read, MIT-licensed code and CC-BY 4.0 content, with no paywall on core material. What is paid is transformation: the artifacts, personal onboarding and accountability in the two programs.',
  },
  {
    q: 'Who is it for?',
    a: 'Mid-career executives and senior professionals, especially CHROs, VPs of People and adjacent leaders, who are late to AI, have dabbled and want a systematic path. Start with AI Foundations if you are new; start with the Fractional CAIO Playbook if you already build with AI.',
  },
  {
    q: 'Who is Yuri Kruman?',
    a: 'Yuri Kruman is a Fractional Chief AI Officer and three-time CHRO who has trained frontier AI models for OpenAI, Meta and Microsoft since 2023, has 17 builds live in public and has coached 2,300+ clients. Yuri founded Portfolio Leverage Company and writes The Leverage Brief.',
  },
  {
    q: 'What is the Fractional CAIO Program?',
    a: `The Fractional CAIO Program is a ${PROGRAM.priceLabel}, self-paced, application-based program for senior operators reinventing themselves as Chief AI Officers. Eight modules, each ending in a working artifact: the board one-pager, the 60-day baseline plan, the AI-use policy and RACI, the ROI model, the pilot SOW and the fractional retainer kit.`,
  },
  {
    q: 'What is the difference between the program and the cohort?',
    a: 'Stage in your arc. The Executive AI Cohort is a live, 12-week program with ForwardShare Ventures for executives learning to build with AI. The Fractional CAIO Program is self-paced and assumes you already build with AI and want the title, mandate and book of business. Both are $2,500.',
  },
  {
    q: 'How do I get The Leverage Brief?',
    a: 'Enter your email in any form on this site or subscribe at leveragebrief.beehiiv.com. It is one actionable AI idea for executives every Monday, free, and you can unsubscribe any time.',
  },
]

const HOW_IT_WORKS = [
  {
    n: '01',
    title: 'Pick a track',
    body:  'Start with AI Foundations if you are new, or jump to the track that matches your seat: governance, adoption, agents or the CAIO playbook.',
  },
  {
    n: '02',
    title: 'Do the lesson on real work',
    body:  'Every lesson follows one arc: hook, context, numbered steps, recap, one next action. Bring a live task from your week, not a toy example.',
  },
  {
    n: '03',
    title: 'Step up one rung',
    body:  'Finish a track, get the Brief, then choose the program that matches your stage: the live cohort or the self-paced CAIO Program.',
  },
]

export default async function Home() {
  const tracks       = getAllTracks()
  const beehiivPosts = await getLeverageBriefPosts({ limit: 3 })
  const briefs       = (beehiivPosts.length > 0 ? beehiivPosts : getAllBriefs()).slice(0, 3)

  const introTrack       = tracks.find(t => t.type === 'intro') ?? null
  const curriculumTracks = tracks.filter(t => t.type !== 'intro')

  const tracksWithCounts = curriculumTracks.map(track => ({
    track,
    lessonCount: getLessonsForTrack(track.slug).length,
  }))
  const totalLessons = tracks.reduce((n, t) => n + getLessonsForTrack(t.slug).length, 0)
  const caioTrack    = tracks.find(t => t.slug === 'fractional-caio-playbook') ?? null

  return (
    <>
      <JsonLd data={faqLd(HOME_FAQ)} />

      {/* ============================================================
          Hero
          ============================================================ */}
      <section className="relative overflow-hidden bg-canvas" aria-labelledby="hero-heading">
        {/* Signature gradient wash */}
        <div
          className="pointer-events-none absolute -top-40 right-[-20%] h-[520px] w-[720px] rounded-full hero-gradient opacity-[0.22] blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-48 left-[-10%] h-[380px] w-[520px] rounded-full hero-gradient opacity-[0.12] blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-14 sm:pt-24 sm:pb-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-center">
            {/* Copy */}
            <div className="min-w-0">
              <p className="eyebrow mb-4">Free, open-source AI curriculum for executives</p>
              <h1
                id="hero-heading"
                className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.05] tracking-tight text-ink"
              >
                Go from AI-curious executive to the person who{' '}
                <span className="text-gradient">owns the AI answer</span>.
              </h1>
              <p className="mt-6 max-w-xl text-lg sm:text-xl leading-8 text-body">
                {tracks.length} tracks and {totalLessons} lessons, no code, built by a 3x CHRO who
                trains frontier models for OpenAI, Meta and Microsoft. Free to start. When you are
                ready for the title, the Fractional CAIO Program is the next step.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <TrackedLink href="/learn" event="cta_click" data={{ cta: 'hero_start_free' }} className="btn btn-primary">
                  Start the free curriculum
                  <Arrow />
                </TrackedLink>
                <TrackedLink href={PROGRAM.path} event="cta_click" data={{ cta: 'hero_program' }} className="btn btn-secondary">
                  See the CAIO Program
                  <span className="text-muted font-medium">{PROGRAM.priceLabel}</span>
                </TrackedLink>
              </div>

              <div className="mt-8 max-w-md">
                <p className="mb-2 text-sm font-medium text-muted">
                  Or get one actionable AI idea every Monday, free:
                </p>
                <NewsletterCapture variant="hero" source="homepage-hero" />
              </div>
            </div>

            {/* Path card: above the fold, so never gated behind the reveal observer */}
            <div className="card p-6 sm:p-7 shadow-lift min-w-0">
              <p className="eyebrow mb-4">Your path here</p>
              <ol className="flex flex-col gap-3 list-none p-0 m-0">
                <PathStep
                  n={1}
                  label="Free tracks"
                  meta={`${totalLessons} lessons · no code`}
                  href="/learn"
                  desc="Build your first workflow this week."
                />
                <PathStep
                  n={2}
                  label={NEWSLETTER.name}
                  meta="Every Monday · free"
                  href="/brief"
                  desc="One idea, one implementation path."
                />
                <PathStep
                  n={3}
                  label="Executive AI Cohort"
                  meta={`${COHORT.format} · ${COHORT.priceLabel}`}
                  href={COHORT.path}
                  desc="Learn to build with AI, in a live cohort."
                />
                <PathStep
                  n={4}
                  label={PROGRAM.name}
                  meta={`${PROGRAM.format} · ${PROGRAM.priceLabel}`}
                  href={PROGRAM.path}
                  desc="Take the Chief AI Officer seat."
                  featured
                />
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          Proof bar
          ============================================================ */}
      <section className="border-y border-border bg-white" aria-label="Why trust this curriculum">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-5">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 list-none p-0 m-0 text-sm">
            {[
              { stat: '3x CHRO',       desc: 'operator, not theorist' },
              { stat: 'OpenAI · Meta · Microsoft', desc: 'trains their frontier models' },
              { stat: String(BUILDS.count), desc: 'builds live in public' },
              { stat: '2,300+',        desc: 'clients coached' },
              { stat: 'MIT + CC-BY',   desc: 'open code and content' },
            ].map(item => (
              <li key={item.stat} className="flex items-center gap-2">
                <span className="font-display font-bold text-ink">{item.stat}</span>
                <span className="text-muted">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================================
          Two ways further: self-paced program vs live cohort vs free
          ============================================================ */}
      <section className="py-16 sm:py-24 bg-canvas" aria-labelledby="programs-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl" data-reveal>
            <p className="eyebrow mb-2">Programs</p>
            <h2 id="programs-heading" className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
              Free teaches the map. The programs are the expedition.
            </h2>
            <p className="mt-3 text-lg text-body">
              Two paid programs, one price, two different stages. Pick by where you are, not by format.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* Flagship: the CAIO Program */}
            <article
              className="relative overflow-hidden rounded-2xl p-7 sm:p-9 text-white shadow-lift"
              style={{ backgroundColor: '#000613' }}
              data-reveal
            >
              <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full hero-gradient opacity-40 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lilac">Flagship</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">Self-paced</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">Application-based</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">{PROGRAM.priceLabel}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
                  {PROGRAM.name}
                </h3>
                <p className="mt-3 text-base sm:text-lg leading-relaxed text-white/75 max-w-xl">
                  For senior operators who already build with AI and want the title, the mandate and
                  the fractional book of business. Eight modules, each ending in an artifact you
                  produce: the board one-pager, the 60-day baseline plan, the AI-use policy and RACI,
                  the ROI model, the pilot SOW, the retainer kit.
                </p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2 text-sm text-white/85 list-none p-0 m-0">
                  {[
                    '8 modules, 8 working artifacts',
                    'Personally onboarded by Yuri',
                    'Same instruments used in live engagements',
                    'Free 5-lesson feeder track to try first',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 text-lilac" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <TrackedLink href={PROGRAM.path} event="cta_click" data={{ cta: 'home_program_card' }} className="btn btn-inverse">
                    See the program
                    <Arrow />
                  </TrackedLink>
                  {caioTrack && (
                    <TrackedLink href={`/learn/${caioTrack.slug}`} event="cta_click" data={{ cta: 'home_program_free_track' }} className="btn btn-ghost-inverse">
                      Try the free track first
                    </TrackedLink>
                  )}
                </div>
              </div>
            </article>

            {/* Cohort + free */}
            <div className="flex flex-col gap-5">
              <article className="card card-hover p-6 sm:p-7" data-reveal>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="rounded-full bg-indigo-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo">Live cohort</span>
                  <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted">12 weeks · 15 seats · {COHORT.priceLabel}</span>
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight text-ink">Executive AI Cohort: Forward Achieve</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  Earlier in the arc. Learn to build with AI and stand up your AI Portfolio OS with
                  weekly live sessions, run with ForwardShare Ventures.
                </p>
                <Link href={COHORT.path} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo hover:underline">
                  See the cohort <Arrow />
                </Link>
              </article>

              <article className="card card-hover p-6 sm:p-7" data-reveal>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider badge-free">Free</span>
                  <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted">{tracks.length} tracks · {totalLessons} lessons</span>
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight text-ink">The open curriculum</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  Not ready to commit? Everything below is free, open-source and built to implement,
                  from your first hour with an AI model to leading adoption across a company.
                </p>
                <Link href="/learn" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo hover:underline">
                  Browse the tracks <Arrow />
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          Curriculum preview
          ============================================================ */}
      {(introTrack || tracksWithCounts.length > 0) && (
        <section className="py-16 sm:py-24 bg-white" aria-labelledby="tracks-heading">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between gap-4" data-reveal>
              <div>
                <p className="eyebrow mb-2">Free curriculum</p>
                <h2 id="tracks-heading" className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
                  {tracks.length} tracks. {totalLessons} lessons. No code.
                </h2>
                <p className="mt-2 text-base text-muted">
                  Begin with the Introduction, then work through the tracks in order.
                </p>
              </div>
              <Link href="/learn" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-indigo whitespace-nowrap hover:underline">
                Full curriculum <Arrow />
              </Link>
            </div>

            {introTrack && (
              <div className="mb-6" data-reveal>
                <Link
                  href={`/learn/${introTrack.slug}`}
                  className="group card card-hover flex items-center justify-between gap-4 p-4 sm:p-5 no-underline"
                  style={{ borderColor: 'rgb(75 65 225 / 0.35)' }}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="shrink-0 rounded-full bg-indigo-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo">
                      Start here
                    </span>
                    <span className="text-sm leading-none" aria-hidden="true">{introTrack.icon}</span>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm truncate text-ink">{introTrack.title}</p>
                      <p className="text-xs mt-0.5 truncate text-muted">{introTrack.summary}</p>
                    </div>
                  </div>
                  <span className="shrink-0 flex items-center gap-1 text-xs font-semibold text-indigo group-hover:underline" aria-hidden="true">
                    Begin <Arrow size={12} />
                  </span>
                </Link>
              </div>
            )}

            {tracksWithCounts.length > 0 && (
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
                {tracksWithCounts.map(({ track, lessonCount }, i) => (
                  <li key={track.slug} className="relative" data-reveal>
                    <div
                      className="absolute -top-3 -left-2 z-10 flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white bg-indigo"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </div>
                    <TrackCard track={track} lessonCount={lessonCount} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* ============================================================
          How it works
          ============================================================ */}
      <section className="py-16 sm:py-24 bg-canvas border-y border-border" aria-labelledby="how-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl" data-reveal>
            <p className="eyebrow mb-2">How it works</p>
            <h2 id="how-heading" className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
              One focused hour a week. One rung at a time.
            </h2>
          </div>
          <ol className="grid gap-5 md:grid-cols-3 list-none p-0 m-0">
            {HOW_IT_WORKS.map(step => (
              <li key={step.n} className="card p-6 sm:p-7" data-reveal>
                <p className="font-display text-3xl font-extrabold text-gradient">{step.n}</p>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================================
          Instructor
          ============================================================ */}
      <InstructorBlock eyebrow="Who built this" />

      {/* ============================================================
          Latest Briefs + capture
          ============================================================ */}
      <section className="py-16 sm:py-24 bg-canvas" aria-labelledby="briefs-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4" data-reveal>
            <div>
              <p className="eyebrow mb-2">Every Monday</p>
              <h2 id="briefs-heading" className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
                The Leverage Brief
              </h2>
              <p className="mt-2 text-base text-muted">
                One actionable AI idea per week. Seven minutes to read. Built to implement.
              </p>
            </div>
            <Link href="/brief" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-indigo whitespace-nowrap hover:underline">
              All issues <Arrow />
            </Link>
          </div>

          {briefs.length > 0 && (
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0 mb-8">
              {briefs.map((brief, idx) => (
                <li key={brief.slug} data-reveal>
                  <BriefCard brief={brief} size={idx === 0 ? 'featured' : 'default'} />
                </li>
              ))}
            </ul>
          )}

          <div className="card p-6 sm:p-8" data-reveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex flex-col gap-1 sm:flex-1">
                <p className="eyebrow">Subscribe</p>
                <p className="font-display text-lg font-bold text-ink">One idea and one implementation path, every Monday.</p>
                <p className="text-sm text-muted">No hype. No listicles. Unsubscribe any time.</p>
              </div>
              <div className="sm:w-80">
                <NewsletterCapture variant="banner" source="homepage-bottom" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ (AEO)
          ============================================================ */}
      <FAQ
        id="faq"
        items={HOME_FAQ}
        heading="Questions executives ask before they start"
        intro="Direct answers first. The long version lives in the tracks."
      />

      {/* ============================================================
          Final CTA
          ============================================================ */}
      <section className="relative overflow-hidden py-16 sm:py-20" style={{ backgroundColor: '#000613' }} aria-labelledby="final-cta-heading">
        <div className="pointer-events-none absolute inset-0 hero-gradient opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 id="final-cta-heading" className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            The board will ask. Be the answer.
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Start free today. Take the seat when you are ready.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <TrackedLink href="/learn" event="cta_click" data={{ cta: 'footer_start_free' }} className="btn btn-inverse">
              Start the free curriculum
            </TrackedLink>
            <TrackedLink href={PROGRAM.path} event="cta_click" data={{ cta: 'footer_program' }} className="btn btn-ghost-inverse">
              See the CAIO Program
            </TrackedLink>
          </div>
        </div>
      </section>
    </>
  )
}

// ------------------------------------------------------------
// Small presentational helpers (server-safe)
// ------------------------------------------------------------
function PathStep({ n, label, meta, href, desc, featured = false }) {
  return (
    <li>
      <Link
        href={href}
        className={`group flex items-start gap-4 rounded-xl border p-4 no-underline transition-colors ${
          featured ? 'border-indigo bg-indigo-soft/60' : 'border-border hover:border-indigo/40'
        }`}
      >
        <span
          className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
            featured ? 'bg-indigo text-white' : 'bg-canvas text-muted border border-border'
          }`}
          aria-hidden="true"
        >
          {n}
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
            <span className="font-semibold text-sm text-ink group-hover:underline">{label}</span>
            <span className="text-[11px] font-medium text-muted">{meta}</span>
          </span>
          <span className="mt-0.5 block text-xs text-muted">{desc}</span>
        </span>
      </Link>
    </li>
  )
}

function Arrow({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Check({ className = '' }) {
  return (
    <svg className={`shrink-0 ${className}`} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
