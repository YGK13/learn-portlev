// ============================================================
// components/CTABanner.jsx — Contextual CTA blocks
// Server component: pure display. No interactivity.
//
// Variants:
//   'community' — Join the free Skool community
//   'premium'   — Upgrade to Leverage Lab (paid Skool)
//   'cohort'    — Apply for the CHRO AI Cohort (Maven)
//   'newsletter' — Subscribe to The Leverage Brief (with NewsletterCapture)
// ============================================================

import NewsletterCapture from './NewsletterCapture'

// Variant config — stable object outside component
const VARIANTS = {
  community: {
    eyebrow: 'Free Community',
    headline: 'Go deeper with 100+ practitioners.',
    body: 'The free Skool community is where PortLev learners share results, ask questions and hold each other accountable. Free forever.',
    cta: 'Join the Community',
    href: process.env.NEXT_PUBLIC_SKOOL_FREE_URL || 'https://www.skool.com',
    external: true,
    bg:     '#f0f4ff',
    border: '#c7d2fe',
    ctaBg:  '#4f46e5',
    icon:   '🏛️',
  },
  premium: {
    eyebrow: 'Leverage Lab',
    headline: 'Weekly live sessions. Done-for-you assets. Accountability.',
    body: 'Everything in the free community plus weekly live working sessions, prompt libraries, workflow templates and direct access to Yuri. $49–99/mo.',
    cta: 'Explore Leverage Lab',
    href: process.env.NEXT_PUBLIC_SKOOL_PAID_URL || 'https://www.skool.com',
    external: true,
    bg:     '#fffbeb',
    border: '#fde68a',
    ctaBg:  '#f59e0b',
    icon:   '⚡',
  },
  cohort: {
    eyebrow: 'CHRO AI Cohort',
    headline: 'Transform your HR function with AI in 8 weeks.',
    body: 'A live cohort for CHROs and senior HR leaders ready to deploy AI at scale. Small cohort. Hands-on. Real deliverables. Apply now on Maven.',
    cta: 'Apply on Maven',
    href: process.env.NEXT_PUBLIC_MAVEN_COHORT_URL || 'https://maven.com',
    external: true,
    bg:     '#f9f5ff',
    border: '#ddd6fe',
    ctaBg:  '#7c3aed',
    icon:   '🎓',
  },
}

// ============================================================
// CTABanner — exported component
// ============================================================
export default function CTABanner({ variant = 'community', source }) {
  // Newsletter variant renders the email capture form — special case
  if (variant === 'newsletter') {
    return (
      <aside
        className="rounded-xl border p-6 sm:p-8"
        style={{ backgroundColor: '#f0f4ff', borderColor: '#c7d2fe' }}
        aria-label="Subscribe to the Leverage Brief"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <div className="flex flex-col gap-2 sm:flex-1">
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#4f46e5' }}>
              The Leverage Brief
            </p>
            <h2 className="text-lg font-bold" style={{ color: '#0f172a' }}>
              One actionable AI idea, every week.
            </h2>
            <p className="text-sm" style={{ color: '#64748b' }}>
              No hype. No listicles. One idea and one implementation path, every Monday. Free forever.
            </p>
          </div>
          <div className="sm:w-72">
            <NewsletterCapture variant="banner" source={source || 'cta-banner'} />
          </div>
        </div>
      </aside>
    )
  }

  // All other variants
  const config = VARIANTS[variant]
  if (!config) return null

  return (
    <aside
      className="rounded-xl border p-6 sm:p-8"
      style={{ backgroundColor: config.bg, borderColor: config.border }}
      aria-label={config.headline}
    >
      <div className="flex flex-col gap-4">
        {/* Eyebrow + icon */}
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="text-xl">{config.icon}</span>
          <p
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: config.ctaBg }}
          >
            {config.eyebrow}
          </p>
        </div>

        {/* Headline */}
        <h2 className="text-lg font-bold leading-snug" style={{ color: '#0f172a' }}>
          {config.headline}
        </h2>

        {/* Body */}
        <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
          {config.body}
        </p>

        {/* CTA */}
        <div>
          <a
            href={config.href}
            target={config.external ? '_blank' : undefined}
            rel={config.external ? 'noopener noreferrer' : undefined}
            className="
              inline-flex items-center gap-2 rounded-lg px-5 py-2.5
              text-sm font-semibold text-white no-underline
              transition-opacity hover:opacity-90
            "
            style={{ backgroundColor: config.ctaBg }}
          >
            {config.cta}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </aside>
  )
}
