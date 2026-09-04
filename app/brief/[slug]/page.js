// ============================================================
// app/brief/[slug]/page.js — Individual brief post
// Server Component. Uses compileMDX from next-mdx-remote/rsc.
// NOTE: params is a Promise in Next.js 16 — always await it.
// ============================================================

import Link from 'next/link'
import { seoTitle, seoDescription } from '@/lib/site'
import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'
import { getAllBriefs, getBrief } from '@/lib/content'
import CTABanner    from '@/components/CTABanner'
import MDXComponents from '@/components/MDXComponents'
import { TRUSTED_MDX_OPTIONS } from '@/lib/mdx-options'

// ============================================================
// generateStaticParams — pre-render a page for every brief
// ============================================================
export function generateStaticParams() {
  const briefs = getAllBriefs()
  return briefs.map(brief => ({ slug: brief.slug }))
}

// ============================================================
// generateMetadata — per-brief SEO
// ============================================================
export async function generateMetadata({ params }) {
  const { slug } = await params
  const brief = getBrief(slug)
  if (!brief) return {}

  return {
    title:       seoTitle(brief.title),
    description: seoDescription(brief.summary),
    openGraph: {
      title:       brief.title,
      description: brief.summary,
      type:        'article',
      publishedTime: brief.date,
    },
  }
}

// Stable date formatter — created once at module level
const DATE_FORMATTER = new Intl.DateTimeFormat('en-US', {
  year: 'numeric', month: 'long', day: 'numeric',
})

function formatDate(dateString) {
  const [year, month, day] = dateString.split('-').map(Number)
  return DATE_FORMATTER.format(new Date(year, month - 1, day))
}

// ============================================================
// Page component
// ============================================================
export default async function BriefPage({ params }) {
  const { slug } = await params

  const brief = getBrief(slug)
  if (!brief) notFound()

  // Compile the MDX body. Security posture lives in lib/mdx-options.js.
  const { content } = await compileMDX({
    source:     brief.content,
    components: MDXComponents,
    options:    TRUSTED_MDX_OPTIONS,
  })

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 text-sm list-none p-0 m-0" style={{ color: '#64748b' }}>
          <li>
            <Link href="/brief" className="hover:underline no-underline" style={{ color: '#64748b' }}>
              The Leverage Brief
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="truncate" style={{ color: '#0f172a' }}>
            {brief.title}
          </li>
        </ol>
      </nav>

      {/* Brief header */}
      <header className="mb-10">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-5 text-sm" style={{ color: '#94a3b8' }}>
          <time dateTime={brief.date}>{formatDate(brief.date)}</time>
          {brief.tier === 'members' && (
            <>
              <span aria-hidden="true">·</span>
              <span
                className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                style={{ backgroundColor: '#e0e7ff', color: '#4338ca' }}
              >
                Members
              </span>
            </>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4" style={{ color: '#0f172a' }}>
          {brief.title}
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: '#64748b' }}>
          {brief.summary}
        </p>

        {/* Tags */}
        {brief.tags?.length > 0 && (
          <ul className="flex flex-wrap gap-2 mt-5 list-none p-0 m-0">
            {brief.tags.map(tag => (
              <li
                key={tag}
                className="rounded-md px-2.5 py-1 text-xs font-medium"
                style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* MDX content */}
      <article className="prose max-w-none">
        {content}
      </article>

      {/* Bottom CTA */}
      <div className="mt-14 flex flex-col gap-5">
        <CTABanner variant="newsletter" source={`brief-${slug}`} />
        <CTABanner variant="community" />
      </div>

      {/* Back to archive */}
      <div className="mt-10">
        <Link
          href="/brief"
          className="inline-flex items-center gap-1.5 text-sm font-medium no-underline hover:underline"
          style={{ color: '#64748b' }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          All issues
        </Link>
      </div>
    </div>
  )
}
