// ============================================================
// app/authority-stack/page.js — Authority Stack
// Server Component. Interest capture via CourseApplyForm island.
//
// Positioning is drawn from the FSV / Vish Rao concept call
// (2026-07-06): mid-career executives 35-55, enemy = the AI wage
// gap, a guided build from "who am I" to ICP, main product and
// value ladder, then build-out, monetization and money management.
// DIY and done-for-you tracks.
//
// Pricing LIVE. DIY ($997 founding) = self-serve Stripe checkout, paid
// up front. Guided/Foundation Sprint (from $5,000) and Done-for-you/Full
// Build (from $15,000) are milestone-split deals (50/50 and 50/25/25,
// ACH preferred, pay-in-full saves 5%) that start with a call — their
// cards route to the CourseApplyForm (#as-cta), and Yuri sends the
// deposit invoice via Stripe Invoicing. Yonatan/Israel is the exception
// to the US split (his terms are separate). See authority-stack repo
// AUTHORITY_STACK_SYSTEM.md §2.
// ============================================================

import Link from 'next/link'
import CourseApplyForm from '@/components/CourseApplyForm'

export const metadata = {
  alternates: { canonical: '/authority-stack' },
  title:       'Authority Stack',
  description: 'Guided build for mid-career executives closing the AI wage gap: ' +
               'ICP, main product, value ladder, monetization. Founding cohort forming.',
}

// The build sequence, from the concept call. Each step is a stage
// of the guided build, not a lecture.
const STAGES = [
  {
    n: 1,
    title: 'Who am I, really',
    desc:  'Point AI at your own record: resume, LinkedIn, work product, the books and ideas you return to. Out of it comes a clear, honest read of the expertise you have actually built, not the job title you happen to hold.',
  },
  {
    n: 2,
    title: 'Name the enemy',
    desc:  'The enemy is the AI wage gap: the widening split between people whose value compounds with AI and people it quietly erodes. You decide which side of it your expertise sits on, and what has to change.',
  },
  {
    n: 3,
    title: 'Find your ICP',
    desc:  'The specific person who will pay for what you know. Not "executives" or "companies": a named kind of buyer with a problem urgent enough to act on now.',
  },
  {
    n: 4,
    title: 'Design your main product and value ladder',
    desc:  'The one core offer that carries your authority, and the ladder of smaller and larger offers around it. The architecture of a portfolio career, drawn for your situation.',
  },
  {
    n: 5,
    title: 'Build it out',
    desc:  'The build-out phase, run on the Career Beast Mode system: the assets, the presence and the proof that turn a positioning doc into a working practice.',
  },
  {
    n: 6,
    title: 'Monetize and manage the money',
    desc:  'How the offer actually makes money, how you price it and how you manage what comes in, so the reinvention is durable rather than a burst.',
  },
]

const BUILT_FROM = [
  ['The AI Wage Gap', 'The framework and forthcoming book the whole program is built to answer.'],
  ['Leverage Signal', 'The daily newsletter on where AI leverage is moving, distilled into your own signal-building.'],
  ['Leverage Brief', 'The weekly brief on where leverage is moving, turned into a practice you run.'],
  ['The Build Vault', 'The library of builds and templates you draw on so you are not starting from a blank page.'],
]

// Three ways to run the build, by how much you do yourself.
// DIY is the self-serve on-ramp; the higher tiers add delivery.
const TRACKS = [
  {
    name:     'DIY',
    price:    '$1,997',
    founding: 'Founding $997',
    tagline:  'You build it, guided.',
    desc:     'The whole system, self-paced: video walkthroughs, the exact template and prompt vault Yuri uses in delivery, plus a monthly group accountability call and a private community. Lifetime access and updates.',
    points:   ['40+ templates + Authority Prompt Pack', 'Monthly group office hours (live, recorded)', 'Private community', 'Apply your fee toward a higher tier within 90 days'],
    accent:   '#0891b2',
    featured: true,
    checkout: 'https://buy.stripe.com/00w5kE4Al7xPg9o6F0gQE0L',
    cta:      'Get founding access',
    note:     'Instant access · no call required',
  },
  {
    name:     'Guided',
    price:    'From $5,000',
    founding: 'Foundation Sprint',
    tagline:  'We build the foundation with you.',
    desc:     'The Foundation Sprint: your identity, enemy and named method built with you over six weeks of working sessions, so the core of your stack is locked and defensible before you scale it.',
    points:   ['Positioning, voice and method, done with you', 'Live working sessions', 'Your framework pages and diagnostic', 'Upgrades to the full build'],
    accent:   '#7c3aed',
    featured: false,
    checkout: '#as-cta',
    cta:      'Book a call to start',
    note:     '50/50 split · ACH or card · pay in full saves 5%',
  },
  {
    name:     'Done-for-you',
    price:    'From $15,000',
    founding: 'Full Build',
    tagline:  'We build the whole stack.',
    desc:     'The 90-day done-for-you build: all seven layers plus the connective tissue, delivered by Yuri and a production system. You walk out with the position, the site, the engines and the offer, live.',
    points:   ['All seven layers, done for you', 'Book architecture and a working product', 'Newsletter, LinkedIn and PR engines live', 'Full handoff, you own everything'],
    accent:   '#4f46e5',
    featured: false,
    checkout: '#as-cta',
    cta:      'Book a call to start',
    note:     '50/25/25 split · ACH or card · pay in full saves 5%',
  },
]

const FAQ = [
  {
    q: 'Who is this for?',
    a: 'Mid-career executives, roughly 35 to 55, who are established in a field and are watching AI reshape it. You are not looking to become an engineer. You are looking to future-proof and monetize the expertise you already have, before the wage gap decides for you.',
  },
  {
    q: 'How is it delivered?',
    a: 'As a guided build, not a video library. The founding cohort runs as a series of working sessions that move you through the stages above. A do-it-yourself course and a done-for-you track are both planned; the founding cohort shapes which fits you.',
  },
  {
    q: 'What does it cost?',
    a: 'Three ways in. The DIY track is $1,997 (founding $997): the full system, self-paced, with a monthly group call and community. The Guided Foundation Sprint starts at $5,000. The done-for-you Full Build starts at $15,000. You can apply your DIY fee toward a higher tier within 90 days.',
  },
  {
    q: 'How is this different from the CAIO Course?',
    a: 'The Fractional CAIO Course is for reinventing yourself specifically as a Chief AI Officer inside organizations. Authority Stack is broader: it is for any established professional engineering a portfolio career against the AI wage gap, in whatever field their authority already lives.',
  },
  {
    q: 'Who is behind it?',
    a: 'Yuri Kruman: 3x CHRO and AI Model Trainer for OpenAI, Meta and Microsoft, author of the forthcoming Closing the AI Wage Gap. Built in partnership with ForwardShare Ventures.',
  },
]

export default function AuthorityStackPage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: '#0f172a' }} aria-labelledby="as-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider" style={{ color: '#22d3ee' }}>
            Founding cohort forming
          </p>
          <h1 id="as-hero" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            Authority Stack
          </h1>
          <p className="text-lg leading-relaxed mb-4 mx-auto max-w-2xl" style={{ color: '#94a3b8' }}>
            Portfolio-engineer your career against the AI wage gap. A guided build
            that takes you from who you actually are to a named buyer, a main
            product and a value ladder, then the build-out and the money. It
            compresses what usually takes years, tens of thousands of dollars and
            a parade of consultants into a system you run with a guide.
          </p>
          <p className="text-sm mb-10" style={{ color: '#64748b' }}>
            For mid-career executives 35-55 · DIY and done-for-you tracks · Built with ForwardShare Ventures
          </p>
          <CourseApplyForm source="authority-stack-interest-hero" />
        </div>
      </section>

      {/* ---- The stakes ---- */}
      <section className="py-16 sm:py-20" aria-labelledby="as-stakes">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="as-stakes" className="text-2xl sm:text-3xl font-bold mb-5" style={{ color: '#0f172a' }}>
            The wage gap is already sorting people. It has not asked your permission.
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: '#374151' }}>
            AI is quietly splitting every field into two groups: the people whose
            value compounds because they have learned to build leverage with it,
            and the people whose value erodes because they have not. The gap
            between them widens every quarter. Seniority does not protect you.
            A title does not protect you. A portfolio of proven, monetizable
            authority does.
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#374151' }}>
            Authority Stack is how an established professional builds that
            portfolio deliberately, in months, instead of hoping to stumble into
            it over years. You do not need to become technical. You need to turn
            what you already know into a durable, compounding position.
          </p>
        </div>
      </section>

      {/* ---- The build ---- */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: '#f8fafc' }} aria-labelledby="as-build">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="as-build" className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: '#0f172a' }}>
            The build, stage by stage
          </h2>
          <p className="text-base mb-8" style={{ color: '#64748b' }}>
            Not a course you watch. A build you run, with a guide, from a blank
            page to a working practice.
          </p>
          <ol className="flex flex-col gap-4 list-none p-0 m-0">
            {STAGES.map(({ n, title, desc }) => (
              <li key={n} className="flex gap-5 rounded-xl border bg-white p-5" style={{ borderColor: '#e2e8f0' }}>
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: '#0891b2' }}
                  aria-hidden="true"
                >
                  {n}
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

      {/* ---- Built from ---- */}
      <section className="py-16 sm:py-20" aria-labelledby="as-builtfrom">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 id="as-builtfrom" className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: '#0f172a' }}>
            Built from a system that already runs
          </h2>
          <p className="text-base mb-8" style={{ color: '#64748b' }}>
            Authority Stack is not theory assembled for a course. It is the
            playbook Yuri runs in public, packaged so you can run it too.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            {BUILT_FROM.map(([title, desc]) => (
              <div key={title} className="rounded-xl border bg-white p-6" style={{ borderColor: '#e2e8f0' }}>
                <p className="font-bold mb-2" style={{ color: '#0f172a' }}>{title}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Choose your track ---- */}
      <section className="py-16 sm:py-20" aria-labelledby="as-tracks">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 id="as-tracks" className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: '#0f172a' }}>
            Choose your track
          </h2>
          <p className="text-base mb-8" style={{ color: '#64748b' }}>
            Same build, three levels of help. Start where you are; move up whenever you want, and your
            fee follows you.
          </p>
          <div className="grid gap-5 lg:grid-cols-3 items-stretch">
            {TRACKS.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-2xl border bg-white p-6"
                style={{ borderColor: t.featured ? t.accent : '#e2e8f0', borderWidth: t.featured ? 2 : 1 }}
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: t.accent }}>{t.name}</p>
                  {t.featured && (
                    <span className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white" style={{ backgroundColor: t.accent }}>
                      Start here
                    </span>
                  )}
                </div>
                <p className="text-2xl font-bold" style={{ color: '#0f172a' }}>{t.price}</p>
                <p className="text-xs font-medium mb-3" style={{ color: t.accent }}>{t.founding}</p>
                <p className="text-sm font-semibold mb-2" style={{ color: '#475569' }}>{t.tagline}</p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#64748b' }}>{t.desc}</p>
                <ul className="flex flex-col gap-2 list-none p-0 m-0 mt-auto">
                  {t.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm" style={{ color: '#374151' }}>
                      <span className="mt-1 shrink-0" style={{ color: t.accent }} aria-hidden="true">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={t.checkout}
                  className="mt-5 block rounded-lg px-5 py-3 text-center text-sm font-semibold text-white"
                  style={{ backgroundColor: t.accent }}
                >
                  {t.cta} →
                </a>
                <p className="mt-2 text-center text-xs" style={{ color: '#94a3b8' }}>{t.note}</p>
              </div>
            ))}
          </div>
          <p className="text-sm mt-6" style={{ color: '#94a3b8' }}>
            Every track builds the same Authority Stack. DIY hands you the system; Guided and
            Done-for-you add Yuri and a production team. Use the form below to start on any of them.
          </p>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: '#f8fafc' }} aria-labelledby="as-faq">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="as-faq" className="text-2xl font-bold mb-8" style={{ color: '#0f172a' }}>
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
      <section className="py-16 sm:py-20" aria-labelledby="as-cta">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="as-cta" className="text-2xl font-bold mb-4" style={{ color: '#0f172a' }}>
            Join the founding cohort
          </h2>
          <p className="mb-8 text-base" style={{ color: '#64748b' }}>
            Express interest with your work email. Yuri reviews every request
            personally and replies with the track options and next step.
          </p>
          <CourseApplyForm source="authority-stack-interest-footer" />
          <p className="mt-6 text-sm" style={{ color: '#94a3b8' }}>
            Comparing programs?{' '}
            <Link href="/programs" className="underline underline-offset-2" style={{ color: '#64748b' }}>
              See all three side by side
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
