'use client'

// ============================================================
// components/Nav.jsx — Site navigation
// Client component: needs useState for mobile menu toggle.
// All links are standard <a> / next/link — no router hooks.
// ============================================================

import { useState } from 'react'
import Link from 'next/link'

// Primary nav links
const NAV_LINKS = [
  { label: 'Learn',     href: '/learn' },
  { label: 'Resources', href: '/resources' },
  { label: 'Brief',     href: '/brief' },
  { label: 'Book',      href: '/book' },
  { label: 'Cohort',    href: '/cohort' },
  { label: 'About',     href: '/about' },
]

// Cross-property links shown after a divider in the desktop nav
const ECOSYSTEM_LINKS = [
  { label: 'Marketplace', href: 'https://apps.portlev.com' },
  { label: 'PortLev.com', href: 'https://portlev.com' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Primary CTA. The Skool community is not live yet, so for now
  // the nav CTA routes to the /brief archive, where the Leverage
  // Brief sign-up form is the first thing every visitor sees.
  const briefUrl = '/brief'

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between gap-6">

          {/* ---- Logo ---- */}
          <Link
            href="/"
            className="flex items-center gap-2 text-base font-bold tracking-tight text-navy no-underline shrink-0"
          >
            <span className="text-indigo text-lg">⚡</span>
            <span>PortLev Academy</span>
          </Link>

          {/* ---- Desktop links ---- */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="
                    px-3 py-2 rounded-md text-sm font-medium text-slate-600
                    hover:text-navy hover:bg-slate-50
                    transition-colors duration-150 no-underline
                  "
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li aria-hidden className="mx-1 h-4 w-px bg-slate-200 self-center" />
            {ECOSYSTEM_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-3 py-2 rounded-md text-sm font-medium text-slate-400
                    hover:text-navy hover:bg-slate-50
                    transition-colors duration-150 no-underline
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ---- Desktop CTA ---- */}
          <Link
            href={briefUrl}
            className="
              hidden md:inline-flex items-center gap-1.5
              px-4 py-2 rounded-lg text-sm font-semibold
              bg-indigo text-white
              hover:bg-indigo-dark
              transition-colors duration-150 no-underline shrink-0
            "
            style={{ backgroundColor: '#4f46e5' }}
          >
            Get the Brief
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          {/* ---- Mobile hamburger ---- */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="
              md:hidden flex flex-col justify-center items-center
              w-9 h-9 rounded-md text-slate-600 hover:bg-slate-100
              transition-colors duration-150
            "
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              // X icon
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              // Hamburger icon
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </nav>

        {/* ---- Mobile menu (dropdown) ---- */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-100 pb-4">
            <ul className="flex flex-col gap-0.5 pt-2 list-none m-0 p-0">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                      block px-3 py-2.5 rounded-md text-sm font-medium text-slate-700
                      hover:text-navy hover:bg-slate-50
                      transition-colors no-underline
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-slate-100 mt-2">
              <Link
                href={briefUrl}
                onClick={() => setMenuOpen(false)}
                className="
                  flex items-center justify-center gap-2
                  mx-3 py-2.5 rounded-lg text-sm font-semibold
                  text-white no-underline
                "
                style={{ backgroundColor: '#4f46e5' }}
              >
                Get the Leverage Brief
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
