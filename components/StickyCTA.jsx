'use client'

// ============================================================
// components/StickyCTA.jsx - Mobile-only sticky action bar
// Appears after the visitor scrolls past the hero. Hidden on
// md+ screens where the hero CTA stays in view. One primary
// action, one line of context, tracked as an analytics event.
// Props: href, label, note, event
// ============================================================

import { useEffect, useState } from 'react'
import { track } from '@vercel/analytics'

export default function StickyCTA({ href = '#enroll', label = 'Request enrollment', note, event = 'sticky_cta_click' }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 560)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleClick() {
    try { track(event, { href }) } catch { /* never block */ }
  }

  return (
    <div
      className={`
        md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 backdrop-blur
        px-4 py-3 transition-transform duration-300
        ${visible ? 'translate-y-0' : 'translate-y-full'}
      `}
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
      aria-hidden={!visible}
    >
      <div className="flex items-center justify-between gap-3">
        {note && <p className="text-xs leading-tight text-muted">{note}</p>}
        <a
          href={href}
          onClick={handleClick}
          tabIndex={visible ? 0 : -1}
          className="btn btn-primary shrink-0 whitespace-nowrap"
        >
          {label}
        </a>
      </div>
    </div>
  )
}
