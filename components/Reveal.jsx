'use client'

// ============================================================
// components/Reveal.jsx - One IntersectionObserver for the page
// Mounted once in the root layout. Any server-rendered element
// with a `data-reveal` attribute fades and lifts into view the
// first time it enters the viewport. Re-scans on route change.
//
// Content is visible by default. The hide-then-reveal styles in
// globals.css only apply once this component has mounted and set
// `data-reveal-ready` on <html>, so nothing is blank before
// hydration, on a JS error, or for a crawler that never scrolls.
// Elements already in the viewport are marked visible before the
// styles switch on, so there is no flash. Disabled under
// prefers-reduced-motion.
// ============================================================

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Reveal() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

    const nodes = Array.from(document.querySelectorAll('[data-reveal]:not(.is-visible)'))
    if (nodes.length === 0) return

    // Anything already on screen stays on screen: mark it before the
    // hiding styles are enabled so the switch is invisible to the reader.
    const vh = window.innerHeight || document.documentElement.clientHeight
    for (const n of nodes) {
      const r = n.getBoundingClientRect()
      if (r.top < vh && r.bottom > 0) n.classList.add('is-visible')
    }
    document.documentElement.setAttribute('data-reveal-ready', '')

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    )

    nodes.forEach(n => observer.observe(n))
    return () => observer.disconnect()
  }, [pathname])

  return null
}
