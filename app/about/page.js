// ============================================================
// app/about/page.js — About Yuri Kruman and PortLev Academy
// Server Component. Pure JSX.
// ============================================================

import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata = {
  title:       'About',
  description: 'Yuri Kruman is a 3x CHRO, AI model trainer and executive coach who built PortLev Academy ' +
               'to help executives and consultants close the AI Wage Gap.',
}

const CREDENTIALS = [
  { label: 'Roles',        value: 'Fractional CAIO · 3x CHRO · CLO' },
  { label: 'AI Training',  value: 'Trainer of frontier AI models for Meta, Microsoft and OpenAI' },
  { label: 'Coaching',     value: '2,300+ executive coaching clients' },
  { label: 'Expertise',    value: 'Top 5 Global HR Thought Leader (Thinkers360)' },
  { label: 'Education',    value: 'JD Cardozo · BA UPenn (Anthropology / Neuroscience)' },
]

export default function AboutPage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <section
        className="py-20 sm:py-24 border-b"
        style={{ borderColor: '#e2e8f0' }}
        aria-labelledby="about-heading"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Headshot */}
            <img
              src="/yuri-kruman.jpg"
              alt="Yuri Kruman"
              width="160"
              height="160"
              className="shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover"
              style={{ backgroundColor: '#eef2ff' }}
            />

            {/* Bio */}
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: '#4f46e5' }}>
                Founder, PortLev Academy
              </p>
              <h1
                id="about-heading"
                className="text-3xl sm:text-4xl font-bold leading-tight mb-5"
                style={{ color: '#0f172a' }}
              >
                Yuri Kruman
              </h1>
              <div className="space-y-4 text-base leading-7" style={{ color: '#374151' }}>
                <p>
                  I have spent 15 years helping organizations build the teams, systems and cultures
                  that perform under pressure. As a 3x CHRO, I have seen firsthand what happens
                  when an organization adopts AI seriously and what happens when it does not.
                  The gap is not theoretical. It is expensive, and it is widening.
                </p>
                <p>
                  Since 2023 I have been training frontier AI models for Meta, Microsoft and OpenAI:
                  evaluating outputs, writing reference solutions and grading reasoning across
                  HR, legal and business domains. That work put me inside how these systems
                  actually learn, and it sharpened the playbook I now teach.
                </p>
                <p>
                  In parallel I kept running into the same pattern in the workplace: brilliant
                  people who understood AI conceptually but had no systematic framework for
                  deploying it in their actual work. That gap is what PortLev Academy exists to close.
                </p>
                <p>
                  Everything on this site is free, open-source and built to implement. The only
                  thing I ask is that you do the work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Credentials ---- */}
      <section
        className="py-14"
        style={{ backgroundColor: '#f8fafc' }}
        aria-labelledby="credentials-heading"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="credentials-heading"
            className="text-xl font-bold mb-6"
            style={{ color: '#0f172a' }}
          >
            Background
          </h2>
          <dl className="grid gap-3 sm:grid-cols-2">
            {CREDENTIALS.map(({ label, value }) => (
              <div key={label} className="flex gap-3 rounded-lg border bg-white p-4" style={{ borderColor: '#e2e8f0' }}>
                <dt className="text-xs font-semibold uppercase tracking-wider shrink-0 pt-0.5" style={{ color: '#94a3b8', minWidth: '6rem' }}>
                  {label}
                </dt>
                <dd className="text-sm font-medium leading-relaxed" style={{ color: '#374151' }}>
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---- Why open-source ---- */}
      <section className="py-16 sm:py-20" aria-labelledby="why-opensource-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            id="why-opensource-heading"
            className="text-2xl font-bold mb-5"
            style={{ color: '#0f172a' }}
          >
            Why open-source?
          </h2>
          <div className="space-y-4 text-base leading-7" style={{ color: '#374151' }}>
            <p>
              The people who need this most are not always the ones who can pay for it first.
              Mid-career executives, consultants just building their practices, HR leaders at
              nonprofits and government agencies — these are the people the AI Wage Gap will hit
              hardest if they do not close it now.
            </p>
            <p>
              Making the curriculum open-source is not charity. It is how I build trust at scale.
              The code is MIT licensed. The content is CC-BY 4.0. Anyone can fork it, teach it,
              translate it or build on top of it — with attribution.
            </p>
            <p>
              What I gate is transformation: live accountability, done-for-you assets, direct access
              to me and to a community of peers doing the same work. That is what the Executive AI
              Cohort and the Fractional CAIO Course are for.
            </p>
          </div>
        </div>
      </section>

      {/* ---- CTAs ---- */}
      <section className="py-12 sm:py-16" style={{ backgroundColor: '#f8fafc' }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              href="/learn"
              className="
                flex-1 flex items-center justify-center gap-2 rounded-lg px-6 py-3
                text-sm font-semibold no-underline text-white
                transition-opacity hover:opacity-90
              "
              style={{ backgroundColor: '#4f46e5' }}
            >
              Start Learning Free
            </Link>
            <Link
              href="/brief"
              className="
                flex-1 flex items-center justify-center gap-2 rounded-lg border px-6 py-3
                text-sm font-semibold no-underline transition-colors
                hover:bg-slate-50
              "
              style={{ borderColor: '#e2e8f0', color: '#374151' }}
            >
              Get the Leverage Brief
            </Link>
          </div>
          <CTABanner variant="newsletter" source="about-page" />
        </div>
      </section>
    </>
  )
}
