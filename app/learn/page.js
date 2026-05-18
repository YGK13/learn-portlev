// ============================================================
// app/learn/page.js — All tracks grid (/learn)
// Server Component.
// ============================================================

import { getAllTracks, getLessonsForTrack } from '@/lib/content'
import TrackCard from '@/components/TrackCard'

export const metadata = {
  title:       'Learn',
  description: 'Free AI learning tracks for executives and consultants. ' +
               'Structured paths from zero to leverage, one lesson at a time.',
}

export default function LearnPage() {
  const tracks = getAllTracks()

  const tracksWithCounts = tracks.map(track => ({
    track,
    lessonCount: getLessonsForTrack(track.slug).length,
  }))

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
      {/* Page header */}
      <header className="mb-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: '#4f46e5' }}>
          Free learning
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3" style={{ color: '#0f172a' }}>
          Learning Tracks
        </h1>
        <p className="text-lg max-w-2xl" style={{ color: '#64748b' }}>
          Structured paths that take you from understanding AI to deploying real systems
          that generate professional leverage. Every lesson is free, open-source and built to implement.
        </p>
      </header>

      {/* Tracks grid */}
      {tracksWithCounts.length === 0 ? (
        <p style={{ color: '#64748b' }}>No published tracks yet. Check back soon.</p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0">
          {tracksWithCounts.map(({ track, lessonCount }) => (
            <li key={track.slug}>
              <TrackCard track={track} lessonCount={lessonCount} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
