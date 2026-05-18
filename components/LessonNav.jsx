// ============================================================
// components/LessonNav.jsx — Prev / Next navigation for lessons
// Server component: pure display, no interactivity.
// Props:
//   trackSlug  — string, e.g. "ai-foundations"
//   prevLesson — { title, slug } | null
//   nextLesson — { title, slug } | null
// ============================================================

import Link from 'next/link'

export default function LessonNav({ trackSlug, prevLesson, nextLesson }) {
  // Nothing to render if there's no prev or next
  if (!prevLesson && !nextLesson) return null

  return (
    <nav
      className="mt-12 border-t pt-8 flex items-start justify-between gap-4"
      style={{ borderColor: '#e2e8f0' }}
      aria-label="Lesson navigation"
    >
      {/* Previous lesson */}
      <div className="flex-1">
        {prevLesson ? (
          <Link
            href={`/learn/${trackSlug}/${prevLesson.slug}`}
            className="
              group flex flex-col gap-1 rounded-lg border p-4
              no-underline transition-shadow hover:shadow-md
            "
            style={{ borderColor: '#e2e8f0' }}
          >
            <span className="flex items-center gap-1 text-xs font-medium" style={{ color: '#94a3b8' }}>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Previous
            </span>
            <span className="text-sm font-semibold group-hover:underline" style={{ color: '#0f172a' }}>
              {prevLesson.title}
            </span>
          </Link>
        ) : (
          // Empty spacer so Next stays right-aligned when there is no Prev
          <div />
        )}
      </div>

      {/* Next lesson */}
      <div className="flex-1 flex justify-end">
        {nextLesson ? (
          <Link
            href={`/learn/${trackSlug}/${nextLesson.slug}`}
            className="
              group flex flex-col items-end gap-1 rounded-lg border p-4
              no-underline transition-shadow hover:shadow-md text-right
            "
            style={{ borderColor: '#e2e8f0' }}
          >
            <span className="flex items-center gap-1 text-xs font-medium" style={{ color: '#94a3b8' }}>
              Next
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="text-sm font-semibold group-hover:underline" style={{ color: '#0f172a' }}>
              {nextLesson.title}
            </span>
          </Link>
        ) : (
          // Back to track link when this is the last lesson
          <Link
            href={`/learn/${trackSlug}`}
            className="
              group flex flex-col items-end gap-1 rounded-lg border p-4
              no-underline transition-shadow hover:shadow-md text-right
            "
            style={{ borderColor: '#e2e8f0' }}
          >
            <span className="flex items-center gap-1 text-xs font-medium" style={{ color: '#94a3b8' }}>
              Track complete
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="text-sm font-semibold group-hover:underline" style={{ color: '#4f46e5' }}>
              Back to track overview
            </span>
          </Link>
        )}
      </div>
    </nav>
  )
}
