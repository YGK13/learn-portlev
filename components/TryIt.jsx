'use client'

// ============================================================
// components/TryIt.jsx — do-this-now exercise block
// Client component: presents a hands-on exercise with a
// copy-to-clipboard prompt template and an "I ran this"
// confirmation that persists in localStorage.
//
// Used inside MDX via the MDXComponents map, e.g.:
//   <TryIt id="anatomy-tryit" title="Run this on your real work" prompt={`You are a senior ...
//   My task: ...`}>
//     Take a deliverable due this week. Paste the template into
//     Claude, fill the brackets, and compare against your last
//     unstructured attempt.
//   </TryIt>
//
// Instructional principle: the lesson is not complete until the
// reader has applied it to their own work. The confirmation click
// is a lightweight commitment device.
// ============================================================

import { useState } from 'react'
import { track } from '@vercel/analytics'
import { useStoredValue, writeStored } from '@/lib/use-stored-value'

export default function TryIt({ id, title = 'Try it now', prompt, children }) {
  const storageKey = `pl-ti-${id}`

  const [copied,     setCopied]     = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)

  // Stored completion flag: undefined until hydrated, then null | 'done'.
  // Read through an external store so SSR and first client render agree
  // without copying storage into state inside an effect.
  const stored   = useStoredValue(storageKey)
  const hydrated = stored !== undefined
  const ranIt    = stored === 'done'

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      setCopyFailed(false)
      setTimeout(() => setCopied(false), 2000)
      try {
        track('tryit_copy', { id })
      } catch {
        // Analytics must never break the lesson
      }
    } catch {
      // Clipboard blocked — tell the reader to select the text manually
      // instead of failing silently on a button that appears to do nothing
      setCopyFailed(true)
      setTimeout(() => setCopyFailed(false), 3000)
    }
  }

  function confirmRan() {
    writeStored(storageKey, 'done')
    try {
      track('tryit_complete', { id })
    } catch {
      // Analytics must never break the lesson
    }
  }

  return (
    <section
      className="my-8 rounded-lg p-4 sm:p-5"
      style={{ backgroundColor: 'rgb(15 23 42 / 0.03)', border: '1px solid #cbd5e1' }}
      aria-label={title}
    >
      <p
        className="m-0 mb-2 text-xs font-bold uppercase tracking-wider"
        style={{ color: '#0f172a' }}
      >
        ⚡ {title}
      </p>

      <div className="text-[0.95rem] leading-7" style={{ color: '#374151' }}>
        {children}
      </div>

      {prompt && (
        <div className="relative mt-4">
          <pre
            className="m-0 overflow-x-auto whitespace-pre-wrap rounded-md p-4 pr-20 text-[0.85rem] leading-relaxed"
            style={{ backgroundColor: '#0f172a', color: '#e2e8f0' }}
          >
            {prompt}
          </pre>
          <button
            type="button"
            onClick={copyPrompt}
            className="absolute right-2.5 top-2.5 rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors"
            style={{
              backgroundColor: copied ? '#15803d' : copyFailed ? '#b45309' : '#334155',
              color:           '#f8fafc',
            }}
            aria-label="Copy prompt to clipboard"
          >
            {copied ? '✓ Copied' : copyFailed ? 'Select text manually' : 'Copy'}
          </button>
        </div>
      )}

      <div className="mt-4">
        {ranIt ? (
          <p className="m-0 text-sm font-semibold" style={{ color: '#15803d' }} role="status">
            ✓ Done. One real rep beats any amount of reading. On to the next section.
          </p>
        ) : (
          <button
            type="button"
            onClick={confirmRan}
            disabled={!hydrated}
            className="rounded-md px-4 py-2 text-sm font-semibold transition-colors"
            style={{ backgroundColor: '#4f46e5', color: '#ffffff' }}
          >
            I ran this on my own work
          </button>
        )}
      </div>
    </section>
  )
}
