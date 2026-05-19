// ============================================================
// app/page.js — Home page (Server Component)
// Sections: Hero → Tracks → Latest Briefs → Newsletter → CTAs
// ============================================================

import Link from 'next/link'
import { getAllTracks, getLessonsForTrack, getAllBriefs } from '@/lib/content'
import TrackCard         from '@/components/TrackCard'
import BriefCard         from '@/components/BriefCard'
import CTABanner         from '@/components/CTABanner'
import NewsletterCapture from '@/components/NewsletterCapture'

export const metadata = {
  title:       'PortLev Academy — Build with AI. Create Leverage.',
  description: 'Free, open-source AI learning for executives and consultants. ' +
               'Build real workflows, close the AI Wage Gap and create lasting leverage.',
}

export default function Home() {
  // Load published content — synchronous, runs on server
  const tracks = getAllTracks()
  const briefs = getAllBriefs().slice(0, 3) // Show three most recent on home page

  // Split intro unit from numbered curriculum tracks
  const introTrack = tracks.find(t => t.type === 'intro') ?? null
  const curriculumTracks = tracks.filter(t => t.type !== 'intro')

  // Attach lesson counts to each track for display
  const tracksWithCounts = curriculumTracks.map(track => ({
    track,
    lessonCount: getLessonsForTrack(track.slug).length,
  }))

  const skoolFreeUrl = process.env.NEXT_PUBLIC_SKOOL_FREE_URL || 'https://www.skool.com'

  return (
    <>
      {/* ============================================================
          Hero section
          ============================================================ */}
      <section
        className="relative overflow-hidden py-20 sm:py-28"
        style={{ backgroundColor: '#0f172a' }}
        aria-labelledby="hero-heading"
      >
        {/* Subtle radial gradient glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgb(79 70 229 / 0.25) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold"
            style={{ backgroundColor: 'rgb(79 70 229 / 0.2)', color: '#a5b4fc', border: '1px solid rgb(79 70 229 / 0.3)' }}
          >
            <span aria-hidden="true">⚡</span>
            Free, open-source learning platform
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white"
          >
            Build with AI.{' '}
            <span style={{ color: '#f59e0b' }}>Create leverage.</span>{' '}
            Close the gap.
          </h1>

          {/* Sub-headline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl leading-8" style={{ color: '#94a3b8' }}>
            PortLev Academy teaches executives, consultants and coaches how to build
            AI-powered workflows that multiply output. No coding required. 100% free.
          </p>

          {/* Primary CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/learn"
              className="
                inline-flex items-center gap-2 rounded-lg px-6 py-3
                text-sm font-semibold text-white no-underline
                transition-opacity hover:opacity-90
              "
              style={{ backgroundColor: '#4f46e5' }}
            >
              Start Learning Free
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <a
              href={skoolFreeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2 rounded-lg px-6 py-3
                text-sm font-semibold no-underline
                transition-colors
              "
              style={{ backgroundColor: 'rgb(255 255 255 / 0.08)', color: '#e2e8f0', border: '1px solid rgb(255 255 255 / 0.15)' }}
            >
              Join the Free Community
            </a>
          </div>

          {/* Newsletter capture inside hero */}
          <div className="mt-12">
            <p className="mb-3 text-sm font-medium" style={{ color: '#94a3b8' }}>
              Get one actionable AI idea every Monday — The Leverage Brief:
            </p>
            <div className="flex justify-center">
              <NewsletterCapture variant="hero" source="homepage-hero" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          Social proof strip
          ============================================================ */}
      <section
        className="border-b py-6"
        style={{ backgroundColor: '#f8fafc', borderColor: '#e2e8f0' }}
        aria-label="About the platform"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 list-none p-0 m-0">
            {[
              { stat: '100% free',       desc: 'No paywall on core content' },
              { stat: 'Open source',     desc: 'MIT code · CC-BY content' },
              { stat: 'No fluff',        desc: 'Every lesson is actionable' },
              { stat: 'Real workflows',  desc: 'Not toy examples' },
            ].map(item => (
              <li key={item.stat} className="flex items-center gap-2 text-sm">
                <span className="font-bold" style={{ color: '#4f46e5' }}>{item.stat}</span>
                <span style={{ color: '#64748b' }}>{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================================
          Tracks section
          ============================================================ */}
      {(introTrack || tracksWithCounts.length > 0) && (
        <section
          className="py-16 sm:py-20"
          aria-labelledby="tracks-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

            {/* Section header */}
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: '#4f46e5' }}>
                  Free curriculum
                </p>
                <h2
                  id="tracks-heading"
                  className="text-2xl sm:text-3xl font-bold leading-tight"
                  style={{ color: '#0f172a' }}
                >
                  Start Learning
                </h2>
                <p className="mt-2 text-base" style={{ color: '#64748b' }}>
                  Begin with the Introduction, then work through the tracks in order.
                </p>
              </div>
              <Link
                href="/learn"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold no-underline whitespace-nowrap"
                style={{ color: '#4f46e5' }}
              >
                Full curriculum
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            {/* Introduction unit — compact banner linking to /learn/ai-foundations */}
            {introTrack && (
              <div className="mb-6">
                <Link
                  href={`/learn/${introTrack.slug}`}
                  className="
                    group flex items-center justify-between gap-4
                    rounded-xl border p-4 sm:p-5 no-underline
                    transition-shadow hover:shadow-md
                  "
                  style={{ borderColor: '#c7d2fe', backgroundColor: 'rgb(79 70 229 / 0.03)' }}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span
                      className="
                        shrink-0 inline-flex items-center justify-center
                        rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider
                      "
                      style={{ backgroundColor: 'rgb(79 70 229 / 0.12)', color: '#4f46e5' }}
                    >
                      Start Here
                    </span>
                    <span className="text-sm leading-none" aria-hidden="true">{introTrack.icon}</span>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm truncate" style={{ color: '#0f172a' }}>
                        {introTrack.title}
                      </p>
                      <p className="text-xs mt-0.5 truncate" style={{ color: '#64748b' }}>
                        {introTrack.summary}
                      </p>
                    </div>
                  </div>
                  <span
                    className="shrink-0 flex items-center gap-1 text-xs font-semibold group-hover:underline"
                    style={{ color: '#4f46e5' }}
                    aria-hidden="true"
                  >
                    Begin
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
              </div>
            )}

            {/* Numbered curriculum tracks */}
            {tracksWithCounts.length > 0 && (
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
                {tracksWithCounts.map(({ track, lessonCount }, i) => (
                  <li key={track.slug} className="relative">
                    <div
                      className="
                        absolute -top-3 -left-2 z-10
                        flex h-7 w-7 items-center justify-center
                        rounded-full text-xs font-bold text-white
                      "
                      style={{ backgroundColor: '#4f46e5' }}
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
          Latest Briefs section
          ============================================================ */}
      {briefs.length > 0 && (
        <section
          className="py-16 sm:py-20"
          style={{ backgroundColor: '#f8fafc' }}
          aria-labelledby="briefs-heading"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: '#4f46e5' }}>
                  Every Monday
                </p>
                <h2
                  id="briefs-heading"
                  className="text-2xl sm:text-3xl font-bold leading-tight"
                  style={{ color: '#0f172a' }}
                >
                  The Leverage Brief
                </h2>
                <p className="mt-2 text-base" style={{ color: '#64748b' }}>
                  One actionable AI idea per week. Seven minutes to read. Built to implement.
                </p>
              </div>
              <Link
                href="/brief"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold no-underline whitespace-nowrap"
                style={{ color: '#4f46e5' }}
              >
                All issues
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
              {briefs.map((brief, idx) => (
                <li key={brief.slug}>
                  <BriefCard brief={brief} size={idx === 0 ? 'featured' : 'default'} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ============================================================
          Value ladder CTAs
          ============================================================ */}
      <section
        className="py-16 sm:py-20"
        aria-labelledby="next-steps-heading"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2
            id="next-steps-heading"
            className="mb-2 text-center text-2xl font-bold"
            style={{ color: '#0f172a' }}
          >
            Keep building
          </h2>
          <p className="mb-10 text-center text-base" style={{ color: '#64748b' }}>
            The free content is the foundation. Here is what comes next.
          </p>

          <div className="flex flex-col gap-5">
            <CTABanner variant="newsletter" source="homepage-bottom" />
            <CTABanner variant="community" />
            <CTABanner variant="cohort" />
          </div>
        </div>
      </section>
    </>
  )
}
