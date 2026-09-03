// ============================================================
// app/learn/page.js — All tracks grid (/learn)
// Server Component.
// Layout: Introduction unit (full-width) → numbered Tracks grid
// ============================================================

import Link from 'next/link'
import { getAllTracks, getLessonsForTrack } from '@/lib/content'
import TrackCard from '@/components/TrackCard'

export const metadata = {
  alternates: { canonical: '/learn' },
  title:       'Learn',
  description: 'Free AI learning tracks for executives and consultants. ' +
               'Structured paths from zero to leverage, one lesson at a time.',
}

export default function LearnPage() {
  const allTracks = getAllTracks()

  // Split into intro unit (type: 'intro') and the numbered curriculum tracks
  const introTrack  = allTracks.find(t => t.type === 'intro') ?? null
  const tracks      = allTracks.filter(t => t.type !== 'intro')

  const introLessonCount = introTrack
    ? getLessonsForTrack(introTrack.slug).length
    : 0

  const tracksWithCounts = tracks.map(track => ({
    track,
    lessonCount: getLessonsForTrack(track.slug).length,
  }))

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">

      {/* ============================================================
          Page header
          ============================================================ */}
      <header className="mb-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: '#4f46e5' }}>
          Free learning
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3" style={{ color: '#0f172a' }}>
          The Curriculum
        </h1>
        <p className="text-lg max-w-2xl" style={{ color: '#64748b' }}>
          Start with the Introduction, then work through the tracks in order.
          Every lesson is free, open-source and built to implement — not just read.
        </p>
      </header>

      {/* ============================================================
          Introduction unit — rendered above the track grid
          ============================================================ */}
      {introTrack && (
        <section className="mb-14" aria-labelledby="intro-heading">
          <div className="mb-4 flex items-center gap-2">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
              style={{ backgroundColor: 'rgb(79 70 229 / 0.1)', color: '#4f46e5' }}
            >
              Start Here
            </span>
          </div>

          {/* Full-width introduction card */}
          <article
            className="group relative rounded-xl border bg-white"
            style={{
              borderColor: '#c7d2fe',
              boxShadow: '0 0 0 1px rgb(79 70 229 / 0.08), 0 2px 8px 0 rgb(79 70 229 / 0.06)',
            }}
          >
            {/* Full-card link overlay */}
            <Link
              href={`/learn/${introTrack.slug}`}
              className="absolute inset-0 rounded-xl"
              aria-label={`Begin the ${introTrack.title} introduction`}
            />

            <div className="flex flex-col sm:flex-row items-start gap-6 p-6 sm:p-8">
              {/* Icon */}
              <span className="text-5xl leading-none shrink-0" aria-hidden="true">
                {introTrack.icon}
              </span>

              <div className="flex-1 min-w-0">
                <h2
                  id="intro-heading"
                  className="text-xl sm:text-2xl font-bold leading-snug mb-2"
                  style={{ color: '#0f172a' }}
                >
                  {introTrack.title}
                </h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: '#475569' }}>
                  {introTrack.summary}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-sm" style={{ color: '#64748b' }}>
                    {introLessonCount} {introLessonCount === 1 ? 'lesson' : 'lessons'} · Free · Beginner
                  </span>
                  <span
                    className="
                      relative z-10 inline-flex items-center gap-1.5
                      text-sm font-semibold transition-colors group-hover:underline
                    "
                    style={{ color: '#4f46e5' }}
                    aria-hidden="true"
                  >
                    Begin Introduction
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </article>
        </section>
      )}

      {/* ============================================================
          Numbered tracks grid
          ============================================================ */}
      <section aria-labelledby="tracks-heading">
        <div className="mb-6">
          <h2
            id="tracks-heading"
            className="text-xl sm:text-2xl font-bold leading-tight"
            style={{ color: '#0f172a' }}
          >
            Learning Tracks
          </h2>
          <p className="mt-1 text-base" style={{ color: '#64748b' }}>
            Work through the tracks in order — each one builds on the last.
          </p>
        </div>

        {tracksWithCounts.length === 0 ? (
          <p style={{ color: '#64748b' }}>No published tracks yet. Check back soon.</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
            {tracksWithCounts.map(({ track, lessonCount }, i) => (
              <li key={track.slug} className="relative">
                {/* Track number badge */}
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
      </section>

    </div>
  )
}
