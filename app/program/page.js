// ============================================================
// app/program/page.js - The Fractional CAIO Program
// Server Component. The conversion surface for the program sold
// from portlev.com and The Leverage Brief. /caio-course 308s here.
//
// Application-based, self-paced, $2,500. Distinct from the live
// Executive AI Cohort (/cohort), which serves executives earlier
// in the arc. Positioning ruling: COURSE_STRATEGY.md section 3.0.
// "Self-paced" describes the format; never "self-serve" (there is
// no instant checkout, enrollment goes through personal review).
//
// Sections: Hero + enrollment card -> Proof bar -> Outcomes ->
// Curriculum -> How enrollment works -> Compare (program vs cohort
// vs free) -> Fit -> Instructor -> Free feeder track -> Pricing ->
// FAQ -> Sticky mobile CTA
// ============================================================

import Link from 'next/link'
import { getTrack, getLessonsForTrack } from '@/lib/content'
import { PROGRAM, COHORT, BUILDS, programCourseLd, faqLd, breadcrumbLd } from '@/lib/site'
import CourseApplyForm from '@/components/CourseApplyForm'
import InstructorBlock from '@/components/InstructorBlock'
import TrackedLink     from '@/components/TrackedLink'
import StickyCTA       from '@/components/StickyCTA'
import FAQ             from '@/components/FAQ'
import JsonLd          from '@/components/JsonLd'

export const metadata = {
  title:       { absolute: 'Fractional CAIO Program: Become a Chief AI Officer' },
  description:
    'Self-paced, application-based program for senior executives becoming Chief AI Officers. ' +
    '8 modules, 8 working artifacts, $2,500. Taught by a 3x CHRO.',
  alternates: { canonical: PROGRAM.path },
  openGraph: {
    title: 'The Fractional CAIO Program',
    description:
      '8 modules, 8 working artifacts, $2,500. Self-paced and application-based. ' +
      'Taught by a 3x CHRO who trains frontier AI models for OpenAI, Meta and Microsoft.',
    url: PROGRAM.path,
    type: 'website',
  },
}

// The 8 modules. Every module ships one artifact the free tracks
// do not contain: that is the paid-tier rule from COURSE_STRATEGY.md.
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
    desc:  `How to make the calls that commit real budget, scored against the ${BUILDS.count} PortLev builds live in public as case material.`,
    artifact: 'The build-buy-platform decision matrix',
  },
  {
    n: 5,
    title: 'The AI Business Case and ROI',
    desc:  'How to put numbers on AI work that a CFO will sign and how to measure what actually changed.',
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
    desc:  'Turning the CAIO capability into a fractional book of business, positioned for the $8K-15K per month per client band.',
    artifact: 'The retainer positioning kit: offer copy, pricing logic and a first-10-targets worksheet',
  },
]

const OUTCOMES = [
  { title: 'A mandate the board recognizes',   body: 'The one-page framing that turns "what is our AI story" into a seat with a scope.' },
  { title: 'A 60-day baseline you can defend', body: 'Week-by-week plan your lawyers, your people and your board can all sign.' },
  { title: 'An operating model that holds',    body: 'AI-use policy, RACI and the three governance calls that usually go wrong, pre-empted.' },
  { title: 'Budget calls you can justify',     body: `Build, buy or platform, decided with a matrix scored against ${BUILDS.count} real builds.` },
  { title: 'Numbers a CFO will sign',          body: 'A working ROI model, not a slide about ROI.' },
  { title: 'A pilot you can run and price',    body: 'Charter and SOW skeleton from a live corporate engagement, anonymised.' },
  { title: 'Authority inside the building',    body: 'The sequencing and trust mechanics that make you the AI answer internally.' },
  { title: 'A fractional book of business',    body: 'Retainer kit positioned for the $8K-15K per month per client band.' },
]

const STEPS = [
  { n: '01', title: 'Request enrollment', body: 'Enter your work email. No checkout page, no card up front.' },
  { n: '02', title: 'Fit review',         body: 'Yuri reviews fit against the eight modules and replies personally within two business days. If the fit is wrong, you hear that too, with a pointer to the cohort.' },
  { n: '03', title: 'Enrollment and intake', body: 'You receive your enrollment link and a short intake so the first artifact maps to your actual company from day one.' },
  { n: '04', title: 'Build the eight artifacts', body: 'Self-paced. Each module ends with an instrument you produce for your own situation, using the same templates Yuri uses in live engagements.' },
]

const WHO_FOR = [
  'You are a senior operator (CHRO, COO, CIO, VP or equivalent) and you want the CAIO title, mandate and book of business, not another AI literacy course',
  'You already use AI in your own work and now need the operating model, governance and commercial playbook to lead it for others',
  'You want a fractional or full-time CAIO seat within the next two quarters and need the artifacts that make you credible in the room',
]

const WHO_NOT_FOR = [
  'You are early in your AI arc and still building your first workflows. Start with the free tracks, then look at the Executive AI Cohort',
  'You want passive video content. Every module here ends with an artifact you produce for your own situation',
  'You want the title without having run a function. The positioning in module 8 is built on an operator credential; without one it does not hold',
]

const compareRows = (caioLessonCount) => [
  { label: 'Format',        free: 'Read at your pace',            cohort: 'Live, weekly sessions',          program: 'Self-paced, application-based' },
  { label: 'Length',        free: `${caioLessonCount} lessons in the CAIO track`, cohort: '12 weeks',                 program: '8 modules, no fixed calendar' },
  { label: 'Stage',         free: 'Any',                          cohort: 'Learning to build with AI',      program: 'Already building, wants the seat' },
  { label: 'You leave with',free: 'The map',                      cohort: 'Your AI Portfolio OS',           program: '8 working artifacts' },
  { label: 'Access to Yuri',free: 'The Brief',                    cohort: 'Weekly live sessions',           program: 'Personal onboarding and intake' },
  { label: 'Seats',         free: 'Unlimited',                    cohort: '15 per intake',                  program: 'Reviewed individually' },
  { label: 'Price',         free: 'Free',                         cohort: COHORT.priceLabel,                program: PROGRAM.priceLabel },
]

const FAQ_ITEMS = [
  {
    q: 'What is the Fractional CAIO Program?',
    a: `The Fractional CAIO Program is a ${PROGRAM.priceLabel}, self-paced, application-based program for senior executives reinventing themselves as Chief AI Officers. It covers the mandate, the 60-day baseline, the operating model, build-buy-platform decisions, the business case, the corporate pilot, internal authority and the fractional path to market, and every module ends with a working artifact you produce for your own organization.`,
  },
  {
    q: 'Who is it for?',
    a: 'Senior operators, typically CHRO, COO, CIO or VP level, who already use AI in their own work and want the Chief AI Officer title, mandate and book of business within the next two quarters. It is not for executives still building their first workflows; the free tracks and the Executive AI Cohort serve that stage.',
  },
  {
    q: 'What does it cost?',
    a: `${PROGRAM.priceLabel} for the full program: all eight modules and every template and artifact in them. There is no separate tier or upsell inside the program.`,
  },
  {
    q: 'Is it self-paced or a cohort?',
    a: 'Self-paced. There is no fixed calendar and nothing expires. The live, 12-week Executive AI Cohort is a separate program for executives earlier in the arc; both are $2,500 and each page points you to the other if the fit is wrong.',
  },
  {
    q: 'How is this different from the Executive AI Cohort?',
    a: 'Different stage of the arc. The cohort is a live 12-week program, taught with ForwardShare Ventures, for executives learning to build with AI and stand up their portfolio. This program assumes you are past that point: you are reinventing yourself as a Chief AI Officer and need the mandate, the operating model and the commercial playbook.',
  },
  {
    q: 'Why does a self-paced program cost the same as the live cohort?',
    a: 'Because it sits later in the arc and carries higher stakes. The cohort teaches you to build; this program arms you to take a C-level seat. The price buys the eight working instruments (baseline plan, policy and RACI, ROI model, pilot SOW, retainer kit) plus personal onboarding by Yuri, so your first artifact maps to your actual company from day one.',
  },
  {
    q: 'How long does it take?',
    a: 'It is self-paced with no fixed calendar. Each module is built around one artifact you produce for your own organization, so the pace depends on how quickly you can get to the underlying material: your policies, budgets and pilot candidates. Nothing expires.',
  },
  {
    q: 'How do I enroll?',
    a: 'Request enrollment on this page with your work email. Every seat is onboarded personally: Yuri reviews fit against the eight modules and replies within two business days with your enrollment link and a short intake. If the fit is wrong, Yuri says so and points you to the cohort instead.',
  },
  {
    q: 'Do I need a technical background?',
    a: 'No. The Chief AI Officer role as taught here is an accountability role, not an engineering role: owning the value, the risk and the operating model of AI adoption. What you do need is operating experience, because the positioning in module 8 is built on an operator credential.',
  },
  {
    q: 'Is there a free version?',
    a: 'The Fractional CAIO Playbook track on this site is free and covers the map in five lessons: what a CAIO does, the 60-day baseline, the first governance decision, the build-buy-platform triage and fractional versus full-time. The program is the instruments plus Yuri in your corner.',
  },
  {
    q: 'Who teaches it?',
    a: `Yuri Kruman, Fractional Chief AI Officer and 3x CHRO, with ${BUILDS.label}, who trains AI models for OpenAI, Meta and Microsoft and has coached 2,300+ clients. The templates in this program are not teaching props: the baseline plan, the data-boundary policy and the pilot SOW are the same instruments Yuri uses in live corporate engagements.`,
  },
]

export default function ProgramPage() {
  const caioTrack   = getTrack('fractional-caio-playbook')
  const caioLessons = caioTrack ? getLessonsForTrack(caioTrack.slug) : []
  const COMPARE     = compareRows(caioLessons.length)

  return (
    <div className="pb-20 md:pb-0">
      <JsonLd
        data={[
          programCourseLd({ modules: MODULES }),
          faqLd(FAQ_ITEMS),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Programs', path: '/programs' },
            { name: PROGRAM.name, path: PROGRAM.path },
          ]),
        ]}
      />

      {/* ---- Hero + enrollment card ---- */}
      <section className="relative overflow-hidden bg-canvas" aria-labelledby="program-hero-heading">
        <div className="pointer-events-none absolute -top-32 left-[-15%] h-[480px] w-[680px] rounded-full hero-gradient opacity-[0.20] blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-14 pb-14 sm:pt-20 sm:pb-20">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs list-none p-0 m-0 text-muted">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/programs" className="hover:underline">Programs</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">CAIO Program</li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <p className="eyebrow mb-4">{PROGRAM.name} · Self-paced · {PROGRAM.priceLabel}</p>
              <h1 id="program-hero-heading" className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.05] tracking-tight text-ink">
                Become the executive who{' '}
                <span className="text-gradient">owns your company&rsquo;s AI answer</span>.
              </h1>
              <p className="mt-6 max-w-xl text-lg sm:text-xl leading-8 text-body">
                A board asked your CEO &ldquo;what&rsquo;s our AI story?&rdquo; The person who answers it
                owns the next seat. This program gives senior operators the mandate, the operating
                model and the commercial playbook to be that person: eight modules, eight working
                artifacts, personally onboarded.
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-body list-none p-0 m-0">
                {['8 modules', '8 artifacts you produce', 'Personally onboarded', 'Taught by a 3x CHRO turned Fractional CAIO'].map(t => (
                  <li key={t} className="flex items-center gap-2"><Check className="text-indigo" />{t}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#enroll" className="btn btn-primary">Request enrollment <Arrow /></a>
                <a href="#curriculum" className="btn btn-secondary">See the 8 modules</a>
              </div>
            </div>

            {/* Enrollment card: the conversion element, never gated behind the reveal observer */}
            <aside className="card p-6 sm:p-7 shadow-lift" aria-labelledby="enroll-card-heading">
              <div className="flex items-baseline justify-between gap-3">
                <p id="enroll-card-heading" className="font-display text-lg font-bold text-ink">Request your seat</p>
                <p className="font-display text-2xl font-extrabold text-ink">{PROGRAM.priceLabel}</p>
              </div>
              <p className="mt-1 text-xs text-muted">One payment · all 8 modules and every template</p>
              <ul className="mt-5 flex flex-col gap-2 text-sm text-body list-none p-0 m-0">
                {[
                  'The 60-day baseline plan template',
                  'AI-use policy template and RACI',
                  'Build-buy-platform decision matrix',
                  'ROI model spreadsheet',
                  'Pilot charter and SOW skeleton',
                  'Fractional retainer positioning kit',
                  'Personal onboarding and intake with Yuri',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2"><Check className="mt-0.5 text-indigo" />{item}</li>
                ))}
              </ul>
              <div className="mt-6">
                <CourseApplyForm source="caio-course-apply-hero" />
              </div>
              <p className="mt-3 text-xs text-muted text-center">
                No checkout, no card up front. Yuri replies within two business days.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* ---- Proof bar ---- */}
      <section className="border-y border-border bg-white" aria-label="Instructor credentials">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-5">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 list-none p-0 m-0 text-sm">
            {[
              { stat: '3x CHRO',                    desc: 'operator credential' },
              { stat: 'OpenAI · Meta · Microsoft',  desc: 'trains their frontier models' },
              { stat: String(BUILDS.count),         desc: 'builds live in public, the case material' },
              { stat: '2,300+',                     desc: 'clients coached' },
            ].map(item => (
              <li key={item.stat} className="flex items-center gap-2">
                <span className="font-display font-bold text-ink">{item.stat}</span>
                <span className="text-muted">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- Outcomes ---- */}
      <section className="py-16 sm:py-24 bg-white" aria-labelledby="outcomes-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl" data-reveal>
            <p className="eyebrow mb-2">What you leave with</p>
            <h2 id="outcomes-heading" className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
              Not literacy. Eight instruments that make you the credible answer in the room.
            </h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 list-none p-0 m-0">
            {OUTCOMES.map((o, i) => (
              <li key={o.title} className="card p-5" data-reveal>
                <p className="font-display text-xs font-bold text-indigo mb-2">0{i + 1}</p>
                <h3 className="font-display text-base font-bold text-ink">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{o.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- Curriculum ---- */}
      <section id="curriculum" className="py-16 sm:py-24 bg-canvas border-y border-border" aria-labelledby="curriculum-heading">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8" data-reveal>
            <p className="eyebrow mb-2">Curriculum</p>
            <h2 id="curriculum-heading" className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
              The 8 modules
            </h2>
            <p className="mt-3 text-base text-muted">
              Every module ends with an artifact you produce for your own situation. If a module could
              not name its artifact, it did not make the program.
            </p>
          </div>
          <ol className="flex flex-col gap-3 list-none p-0 m-0">
            {MODULES.map(({ n, title, desc, artifact }) => (
              <li key={n} className="card flex gap-5 p-5 sm:p-6" data-reveal>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white bg-indigo" aria-hidden="true">
                  {n}
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-base sm:text-lg font-bold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-body">{desc}</p>
                  <p className="mt-2 text-sm font-medium text-indigo">
                    <span className="text-muted font-normal">Artifact: </span>{artifact}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- How enrollment works ---- */}
      <section className="py-16 sm:py-24 bg-white" aria-labelledby="steps-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl" data-reveal>
            <p className="eyebrow mb-2">How it works</p>
            <h2 id="steps-heading" className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
              Request, review, onboard, build.
            </h2>
          </div>
          <ol className="grid gap-5 md:grid-cols-4 list-none p-0 m-0">
            {STEPS.map(step => (
              <li key={step.n} className="relative card p-6" data-reveal>
                <p className="font-display text-3xl font-extrabold text-gradient">{step.n}</p>
                <h3 className="mt-3 font-display text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- Compare: program vs cohort vs free ---- */}
      <section id="compare" className="py-16 sm:py-24 bg-canvas border-y border-border" aria-labelledby="compare-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-2xl" data-reveal>
            <p className="eyebrow mb-2">Self-paced or cohort?</p>
            <h2 id="compare-heading" className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
              Pick by where you are, not by format.
            </h2>
            <p className="mt-3 text-base text-muted">
              Both paid programs cost {PROGRAM.priceLabel}. They serve different stages of the same arc.
            </p>
          </div>
          <div className="overflow-x-auto card" data-reveal>
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th scope="col" className="p-4 font-semibold text-muted">&nbsp;</th>
                  <th scope="col" className="p-4 font-display font-bold text-ink">Free tracks</th>
                  <th scope="col" className="p-4 font-display font-bold text-ink">Executive AI Cohort</th>
                  <th scope="col" className="p-4 font-display font-bold text-indigo bg-indigo-soft/50">CAIO Program</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(row => (
                  <tr key={row.label} className="border-b border-border last:border-0">
                    <th scope="row" className="p-4 font-medium text-muted text-left">{row.label}</th>
                    <td className="p-4 text-body">{row.free}</td>
                    <td className="p-4 text-body">{row.cohort}</td>
                    <td className="p-4 font-medium text-ink bg-indigo-soft/30">{row.program}</td>
                  </tr>
                ))}
                <tr>
                  <td className="p-4">&nbsp;</td>
                  <td className="p-4"><Link href="/learn" className="text-sm font-semibold text-indigo hover:underline">Browse tracks</Link></td>
                  <td className="p-4"><Link href={COHORT.path} className="text-sm font-semibold text-indigo hover:underline">See the cohort</Link></td>
                  <td className="p-4 bg-indigo-soft/30"><a href="#enroll" className="text-sm font-semibold text-indigo hover:underline">Request enrollment</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---- Fit ---- */}
      <section className="py-16 sm:py-24 bg-white" aria-labelledby="fit-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div data-reveal>
              <p className="eyebrow mb-2">Fit</p>
              <h2 id="fit-heading" className="font-display text-3xl font-bold tracking-tight text-ink mb-6">Who this is for</h2>
              <ul className="flex flex-col gap-4 list-none p-0 m-0">
                {WHO_FOR.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white bg-indigo mt-0.5" aria-hidden="true"><Check /></span>
                    <p className="text-base leading-relaxed text-body">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal>
              <h3 className="font-display text-xl font-bold text-ink mb-6 lg:mt-[3.25rem]">Who this is not for</h3>
              <ul className="flex flex-col gap-4 list-none p-0 m-0">
                {WHO_NOT_FOR.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-canvas border border-border text-muted text-xs font-bold mt-0.5" aria-hidden="true">✕</span>
                    <p className="text-base leading-relaxed text-body">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Instructor ---- */}
      <InstructorBlock />

      {/* ---- Free feeder track ---- */}
      {caioTrack && caioLessons.length > 0 && (
        <section className="py-16 sm:py-24 bg-canvas" aria-labelledby="feeder-heading">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8" data-reveal>
              <p className="eyebrow mb-2">Try before you request</p>
              <h2 id="feeder-heading" className="font-display text-3xl font-bold tracking-tight text-ink">
                The free {caioTrack.title}
              </h2>
              <p className="mt-3 text-base text-muted">
                {caioLessons.length} free lessons that teach the map. The program is the instruments.
              </p>
            </div>
            <ol className="flex flex-col gap-3 list-none p-0 m-0">
              {caioLessons.map((lesson, i) => (
                <li key={lesson.slug} data-reveal>
                  <Link
                    href={`/learn/${caioTrack.slug}/${lesson.slug}`}
                    className="group card card-hover flex items-start gap-4 p-4 sm:p-5 no-underline"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-canvas border border-border text-sm font-bold text-muted" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-ink group-hover:underline">{lesson.title}</span>
                      <span className="mt-1 block text-sm text-muted">{lesson.summary}</span>
                    </span>
                    <span className="text-xs text-muted whitespace-nowrap">{lesson.estReadMin ? `${lesson.estReadMin} min` : 'Free'}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ---- Pricing + enrollment ---- */}
      <section id="enroll" className="relative overflow-hidden py-16 sm:py-24" style={{ backgroundColor: '#000613' }} aria-labelledby="enroll-heading">
        <div className="pointer-events-none absolute inset-0 hero-gradient opacity-25" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center text-white">
            <div data-reveal>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-lilac mb-3">Pricing and enrollment</p>
              <h2 id="enroll-heading" className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                {PROGRAM.priceLabel}. One payment. Every artifact.
              </h2>
              <p className="mt-4 text-lg text-white/80 leading-relaxed">
                The free track taught you the method. The program is the instruments plus Yuri in
                your corner. Enrollment is reviewed personally, so request with your work email and
                expect a reply within two business days.
              </p>
              <dl className="mt-7 grid grid-cols-2 gap-4 text-sm">
                <div><dt className="text-white/60">Price</dt><dd className="font-semibold">{PROGRAM.priceLabel}, one-time</dd></div>
                <div><dt className="text-white/60">Format</dt><dd className="font-semibold">Self-paced, application-based</dd></div>
                <div><dt className="text-white/60">Includes</dt><dd className="font-semibold">8 modules, 8 artifacts, onboarding</dd></div>
                <div><dt className="text-white/60">Reply time</dt><dd className="font-semibold">Within two business days</dd></div>
              </dl>
            </div>
            <div className="card p-6 sm:p-8 text-ink" data-reveal>
              <p className="font-display text-lg font-bold mb-1">Request enrollment</p>
              <p className="text-sm text-muted mb-5">Work email only. Yuri reads every request.</p>
              <CourseApplyForm source="caio-course-apply-footer" />
              <p className="mt-4 text-xs text-muted">
                Earlier in your arc?{' '}
                <TrackedLink href={COHORT.path} event="cta_click" data={{ cta: 'program_to_cohort' }} className="underline underline-offset-2 text-indigo">
                  See the Executive AI Cohort
                </TrackedLink>
                . Not sure?{' '}
                <a href="#compare" className="underline underline-offset-2 text-indigo">Compare the three paths</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <FAQ id="program-faq" items={FAQ_ITEMS} heading="Frequently asked questions" />

      <StickyCTA href="#enroll" label="Request enrollment" note={`${PROGRAM.shortName} · ${PROGRAM.priceLabel} · self-paced`} />
    </div>
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
    <svg className={`shrink-0 ${className}`} width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
