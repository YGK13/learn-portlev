// ============================================================
// components/Footer.jsx — Site footer
// Server component: no interactivity. Pure links + text.
// ============================================================

import Link from 'next/link'

const LEARN_LINKS = [
  { label: 'All Tracks',     href: '/learn' },
  { label: 'AI Resources',   href: '/resources' },
  { label: 'The Brief',      href: '/brief' },
]

const PRODUCT_LINKS = [
  { label: 'The Book',              href: '/book' },
  { label: 'Executive AI Cohort',   href: '/cohort' },
  { label: 'About Yuri',            href: '/about' },
  { label: 'Credits',               href: '/credits' },
]

// Community is not live yet (Skool not set up). For now every
// "join us" link routes to The Leverage Brief signup.
const COMMUNITY_LINKS = [
  { label: 'The Leverage Brief',    href: '/brief' },
  { label: 'Subscribe by Email',    href: 'https://leveragebrief.beehiiv.com/subscribe' },
  { label: 'RSS Feed',              href: 'https://leveragebrief.beehiiv.com/feed' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://learn.portlev.com'

  return (
    <footer
      className="mt-auto border-t border-slate-200 bg-white"
      aria-label="Site footer"
    >
      {/* Main footer grid */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-bold tracking-tight no-underline"
              style={{ color: '#0f172a' }}
            >
              <span style={{ color: '#4f46e5' }} aria-hidden="true">⚡</span>
              PortLev Academy
            </Link>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: '#64748b' }}>
              Build with AI. Create leverage. Close the gap. Free, open-source learning for
              executives and consultants who are serious about results.
            </p>
            {/* RSS feed link */}
            <a
              href="/feed.xml"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium no-underline transition-colors"
              style={{ color: '#64748b' }}
              aria-label="Subscribe to RSS feed"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="5" cy="19" r="1" fill="currentColor"/>
              </svg>
              RSS Feed
            </a>
          </div>

          {/* Learn column */}
          <nav aria-label="Learn navigation">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: '#0f172a' }}>
              Learn
            </h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {LEARN_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm no-underline transition-colors hover:underline"
                    style={{ color: '#64748b' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Product column */}
          <nav aria-label="Product navigation">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: '#0f172a' }}>
              Product
            </h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {PRODUCT_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm no-underline transition-colors hover:underline"
                    style={{ color: '#64748b' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Community column */}
          <nav aria-label="Community navigation">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: '#0f172a' }}>
              Community
            </h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {COMMUNITY_LINKS.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm no-underline transition-colors hover:underline"
                    style={{ color: '#64748b' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: '#94a3b8' }}>
            &copy; {currentYear} Yuri Kruman / PortLev. Code:{' '}
            <a
              href="https://github.com/YGK13/learn-portlev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
              style={{ color: '#94a3b8' }}
            >
              MIT License
            </a>
            . Content:{' '}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
              style={{ color: '#94a3b8' }}
            >
              CC-BY 4.0
            </a>
            .
          </p>
          <p className="text-xs" style={{ color: '#94a3b8' }}>
            Built in public at{' '}
            <a
              href="https://github.com/YGK13/learn-portlev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
              style={{ color: '#94a3b8' }}
            >
              github.com/YGK13/learn-portlev
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
