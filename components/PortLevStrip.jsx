// ============================================================
// components/PortLevStrip.jsx - "A PortLev build" footer strip
// Server component. Links every sister property so the entity
// graph (Portfolio Leverage Company -> its products) is visible
// to crawlers and to people. Rendered inside <Footer />.
// ============================================================

import { SISTER_LINKS } from '@/lib/site'

export default function PortLevStrip() {
  return (
    <div className="border-t border-border bg-canvas" aria-label="PortLev family of properties">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
          A{' '}
          <a href="https://portlev.com" target="_blank" rel="noopener noreferrer" className="text-indigo hover:underline">
            PortLev
          </a>{' '}
          build by{' '}
          <a href="https://yurikruman.com" target="_blank" rel="noopener noreferrer" className="text-indigo hover:underline">
            Yuri Kruman
          </a>
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 list-none p-0 m-0">
          {SISTER_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-ink hover:underline no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
