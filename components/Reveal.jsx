'use client'

// ============================================================
// components/Reveal.jsx - One IntersectionObserver for the page
// Mounted once in the root layout. Any server-rendered element
// with a `data-reveal` attribute fades and lifts into view the
// first time it enters the viewport. Re-scans on route change.
// CSS lives in globals.css and is disabled under
// prefers-reduced-motion, so this never blocks content.
// ============================================================

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Reveal() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

    const nodes = Array.from(document.querySelectorAll('[data-reveal]:not(.is-visible)'))
    if (nodes.length === 0) return

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
