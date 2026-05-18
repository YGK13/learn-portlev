// ============================================================
// app/learn/[track]/[lesson]/page.js — Individual lesson page
// Server Component. Uses compileMDX from next-mdx-remote/rsc.
// NOTE: params is a Promise in Next.js 16 — always await it.
// ============================================================

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import {
  getAllTracks,
  getTrack,
  getLessonsForTrack,
  getLesson,
} from '@/lib/content'
import LessonNav    from '@/components/LessonNav'
import CTABanner    from '@/components/CTABanner'
import MDXComponents from '@/components/MDXComponents'

// ============================================================
// generateStaticParams — pre-render a page for every lesson
// in every track. Returns an array of { track, lesson } objects.
// ============================================================
export function generateStaticParams() {
  const tracks = getAllTracks()
  const params = []

  for (const track of tracks) {
    const lessons = getLessonsForTrack(track.slug)
    for (const lesson of lessons) {
      params.push({ track: track.slug, lesson: lesson.slug })
    }
  }

  return params
}

// ============================================================
// generateMetadata — per-lesson title, description, OG tags
// ============================================================
export async function generateMetadata({ params }) {
  const { track: trackSlug, lesson: lessonSlug } = await params
  const lesson = getLesson(trackSlug, lessonSlug)
  if (!lesson) return {}

  return {
    title:       lesson.title,
    description: lesson.summary,
    openGraph: {
      title:       lesson.title,
      description: lesson.summary,
      type:        'article',
    },
  }
}

// ============================================================
// Page component
// ============================================================
export default async function LessonPage({ params }) {
  const { track: trackSlug, lesson: lessonSlug } = await params

  // Load lesson data — 404 if not found
  const lesson = getLesson(trackSlug, lessonSlug)
  if (!lesson) notFound()

  // Load track for breadcrumb and lesson list for prev/next
  const track   = getTrack(trackSlug)
  const lessons = getLessonsForTrack(trackSlug)

  // Determine prev / next lessons for navigation
  const currentIdx = lessons.findIndex(l => l.slug === lessonSlug)
  const prevLesson = currentIdx > 0 ? lessons[currentIdx - 1] : null
  const nextLesson = currentIdx < lessons.length - 1 ? lessons[currentIdx + 1] : null

  // Compile MDX — this is an async operation on the server
  const { content } = await compileMDX({
    source:     lesson.content,
    components: MDXComponents,
    options: {
      mdxOptions: {
        // Remark/rehype plugins can be added here as the site grows
        remarkPlugins: [],
        rehypePlugins: [],
      },
    },
  })

  // Stable date formatter
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  }).format(new Date(lesson.updated + 'T00:00:00'))

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
      <div className="flex gap-12 lg:gap-16">

        {/* ---- Main content column ---- */}
        <div className="flex-1 min-w-0">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm list-none p-0 m-0" style={{ color: '#64748b' }}>
              <li>
                <Link href="/learn" className="hover:underline no-underline" style={{ color: '#64748b' }}>
                  Learn
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={`/learn/${trackSlug}`} className="hover:underline no-underline" style={{ color: '#64748b' }}>
                  {track?.title ?? trackSlug}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="truncate" style={{ color: '#0f172a' }}>
                {lesson.title}
              </li>
            </ol>
          </nav>

          {/* Lesson header */}
          <header className="mb-10">
            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 mb-5 text-sm" style={{ color: '#94a3b8' }}>
              {lesson.estReadMin && (
                <span>{lesson.estReadMin} min read</span>
              )}
              <span aria-hidden="true">·</span>
              <time dateTime={lesson.updated}>Updated {formattedDate}</time>
              {lesson.tier !== 'free' && (
                <>
                  <span aria-hidden="true">·</span>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                    style={{ backgroundColor: '#e0e7ff', color: '#4338ca' }}
                  >
                    {lesson.tier === 'members' ? 'Members' : 'Course'}
                  </span>
                </>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4" style={{ color: '#0f172a' }}>
              {lesson.title}
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: '#64748b' }}>
              {lesson.summary}
            </p>

            {/* YouTube embed if lesson has a published video */}
            {lesson.video?.status === 'published' && lesson.video?.youtubeId && (
              <div className="mt-8 aspect-video w-full overflow-hidden rounded-xl">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${lesson.video.youtubeId}`}
                  title={`${lesson.title} — video lesson`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            )}
          </header>

          {/* MDX content */}
          <article className="prose max-w-none">
            {content}
          </article>

          {/* Prev / Next navigation */}
          <LessonNav
            trackSlug={trackSlug}
            prevLesson={prevLesson}
            nextLesson={nextLesson}
          />

          {/* CTA at bottom of lesson */}
          <div className="mt-10">
            <CTABanner variant="newsletter" source={`lesson-${lessonSlug}`} />
          </div>
        </div>

        {/* ---- Sidebar: lesson list (desktop only) ---- */}
        <aside
          className="hidden lg:block w-64 shrink-0"
          aria-label="Track lessons"
        >
          <div className="sticky top-24">
            <Link
              href={`/learn/${trackSlug}`}
              className="flex items-center gap-1.5 mb-4 text-xs font-semibold uppercase tracking-wider no-underline hover:underline"
              style={{ color: '#64748b' }}
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {track?.title ?? 'Track'}
            </Link>

            <ol className="flex flex-col gap-1 list-none p-0 m-0">
              {lessons.map((l, idx) => {
                const isActive = l.slug === lessonSlug
                return (
                  <li key={l.slug}>
                    <Link
                      href={`/learn/${trackSlug}/${l.slug}`}
                      className={`
                        flex items-start gap-3 rounded-lg px-3 py-2.5 text-sm no-underline transition-colors
                        ${isActive ? 'font-semibold' : 'hover:bg-slate-50'}
                      `}
                      style={{
                        color:           isActive ? '#4f46e5' : '#374151',
                        backgroundColor: isActive ? '#eef2ff' : undefined,
                      }}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: isActive ? '#4f46e5' : '#f1f5f9',
                          color:           isActive ? '#fff'    : '#94a3b8',
                        }}
                      >
                        {idx + 1}
                      </span>
                      <span className="leading-snug">{l.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ol>
          </div>
        </aside>
      </div>
    </div>
  )
}
