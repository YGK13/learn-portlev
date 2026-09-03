'use client'

// ============================================================
// components/TrackedLink.jsx - Link that fires a Vercel Analytics
// custom event on click. Used for every primary CTA so the
// conversion path (home -> program -> enrollment request) is
// measurable without adding a vendor. Falls back to a plain
// link if analytics is unavailable.
// Props: href, event, data (object), external, className, style
// ============================================================

import Link from 'next/link'
import { track } from '@vercel/analytics'

export default function TrackedLink({
  href,
  event = 'cta_click',
  data = {},
  external = false,
  className = '',
  style,
  children,
  ...rest
}) {
  function handleClick() {
    try {
      track(event, { href, ...data })
    } catch {
      // Analytics must never break navigation
    }
  }

  if (external || /^https?:\/\//.test(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={className}
        style={style}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} onClick={handleClick} className={className} style={style} {...rest}>
      {children}
    </Link>
  )
}
