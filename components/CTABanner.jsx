// ============================================================
// components/CTABanner.jsx — Contextual CTA blocks
// Server component: pure display. No interactivity.
//
// Variants:
//   'community' — Subscribe to The Leverage Brief (no Skool yet)
//   'cohort'    — Apply for the Executive AI Cohort (ForwardShare)
//   'newsletter' — Subscribe to The Leverage Brief (with NewsletterCapture)
// ============================================================

import NewsletterCapture from './NewsletterCapture'

// Variant config — stable object outside component
const VARIANTS = {
  // The "community" hook stays in the API so existing callers do not
  // break, but until the Skool community is live it now points to
  // The Leverage Brief signup. Single funnel, one less broken link.
  community: {
    eyebrow: 'Free Newsletter',
    headline: 'Get one actionable AI idea every Monday.',
    body: 'The Leverage Brief is the weekly signal for PortLev readers: one concept, one implementation path, something you can act on this week. Free forever.',
    cta: 'Subscribe to the Brief',
    href: '/brief',
    external: false,
    bg:     '#f0f4ff',
    border: '#c7d2fe',
    ctaBg:  '#4f46e5',
    icon:   '✉️',
  },
  cohort: {
    eyebrow: 'Executive AI Cohort',
    headline: 'Build your Portfolio OS in 12 weeks with ForwardShare.',
    body: 'A live cohort for mid-career executives building their AI Portfolio OS. Small cohort. Real deliverables. Run by Yuri with ForwardShare Ventures.',
    cta: 'Apply on ForwardShare',
    href: 'https://forwardshare.co/executive-ai-cohort-forward-achieve-forward-share-ventures',
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
