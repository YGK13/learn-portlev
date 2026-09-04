// ============================================================
// app/learn/[track]/page.js — Track overview + lesson list
// Server Component.
// NOTE: params is a Promise in Next.js 16 — always await it.
// ============================================================

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllTracks, getTrack, getLessonsForTrack } from '@/lib/content'
import CTABanner         from '@/components/CTABanner'
import AttributionNotice from '@/components/AttributionNotice'
import JsonLd            from '@/components/JsonLd'
import { trackCourseLd, breadcrumbLd, seoTitle, seoDescription } from '@/lib/site'

// Tracks whose end-of-track CTA steps up to the CAIO Program.
const PROGRAM_FEEDER_TRACKS = new Set(['fractional-caio-playbook'])

// ============================================================
// generateStaticParams — pre-render a page for each track
// ============================================================
export function generateStaticParams() {
  const tracks = getAllTracks()
  return tracks.map(track => ({ track: track.slug }))
}

// ============================================================
// generateMetadata — SEO title/description per track
// ============================================================
export async function generateMetadata({ params }) {
  const { track: trackSlug } = await params
  const track = getTrack(trackSlug)
  if (!track) return {}

  return {
    title:       seoTitle(track.title, { variant: 'Free Track' }),
    description: seoDescription(track.summary),
    alternates:  { canonical: `/learn/${trackSlug}` },
    openGraph: {
      title:       track.title,
      description: seoDescription(track.summary, 200),
      url:         `/learn/${trackSlug}`,
      type:        'website',
    },
  }
}

// ============================================================
// Page component
// ============================================================
export default async function TrackPage({ params }) {
  const { track: trackSlug } = await params

  const track   = getTrack(trackSlug)
  if (!track) notFound()

  const lessons = getLessonsForTrack(trackSlug)

  const structuredData = [
    trackCourseLd(track, lessons),
    breadcrumbLd([
      { name: 'Home',  path: '/' },
      { name: 'Learn', path: '/learn' },
      { name: track.title, path: `/learn/${trackSlug}` },
    ]),
  ]

  // Level label map
  const LEVEL_LABELS = {
    beginner:     'Beginner',
    intermediate: 'Intermediate',
    advanced:     'Advanced',
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">
      <JsonLd data={structuredData} />
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 text-sm list-none p-0 m-0" style={{ color: '#64748b' }}>
          <li>
            <Link href="/learn" className="hover:underline no-underline" style={{ color: '#64748b' }}>
              Learn
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" style={{ color: '#0f172a' }}>{track.title}</li>
        </ol>
      </nav>

      {/* Track header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl leading-none" aria-hidden="true">{track.icon}</span>
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold"
            style={{ backgroundColor: '#e0e7ff', color: '#4338ca' }}
          >
            {LEVEL_LABELS[track.level] ?? track.level}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4" style={{ color: '#0f172a' }}>
          {track.title}
        </h1>
        <p className="text-lg leading-relaxed max-w-2xl" style={{ color: '#64748b' }}>
          {track.summary}
        </p>
        <p className="mt-3 text-sm" style={{ color: '#94a3b8' }}>
          {lessons.length} {lessons.length === 1 ? 'lesson' : 'lessons'} &middot; All free
        </p>

        {/* Source attribution — shown when the track is adapted from an
            external open-source course (required by the source license) */}
        {track.attribution && (
          <div className="mt-6">
            <AttributionNotice attribution={track.attribution} variant="track" />
          </div>
        )}
      </header>

      {/* Lesson list */}
      {lessons.length === 0 ? (
        <p style={{ color: '#64748b' }}>No lessons published yet. Check back soon.</p>
      ) : (
        <ol className="flex flex-col gap-3 list-none p-0 m-0 mb-14">
          {lessons.map((lesson, idx) => (
            <li key={lesson.slug}>
              <Link
                href={`/learn/${trackSlug}/${lesson.slug}`}
                className="
                  group flex items-start gap-5 rounded-xl border bg-white p-5
                  no-underline transition-shadow hover:shadow-md
                "
                style={{ borderColor: '#e2e8f0' }}
              >
                {/* Lesson number */}
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}
                  aria-label={`Lesson ${idx + 1}`}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>

                {/* Lesson info */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-base group-hover:underline leading-snug" style={{ color: '#0f172a' }}>
                    {lesson.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: '#64748b' }}>
                    {lesson.summary}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    {lesson.estReadMin && (
                      <span className="text-xs" style={{ color: '#94a3b8' }}>
                        {lesson.estReadMin} min read
                      </span>
                    )}
                    {lesson.tier !== 'free' && (
                      <span
                        className="rounded-full px-2 py-0.5 text-xs font-semibold"
                        style={{ backgroundColor: '#e0e7ff', color: '#4338ca' }}
                      >
                        {lesson.tier === 'members' ? 'Members' : 'Course'}
                      </span>
                    )}
                    {lesson.video?.status === 'published' && (
                      <span className="flex items-center gap-1 text-xs" style={{ color: '#94a3b8' }}>
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="currentColor"/>
                        </svg>
                        Video available
                      </span>
                    )}
                  </div>
                </div>

                {/* Arrow */}
                <svg
                  className="shrink-0 mt-1 opacity-40 group-hover:opacity-100 transition-opacity"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  style={{ color: '#4f46e5' }}
                >
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </li>
          ))}
        </ol>
      )}

      {/* CTA at bottom of track */}
      <CTABanner variant={PROGRAM_FEEDER_TRACKS.has(trackSlug) ? 'program' : 'community'} />
    </div>
  )
}
