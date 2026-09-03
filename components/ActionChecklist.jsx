'use client'

// ============================================================
// components/ActionChecklist.jsx — persistent lesson checklist
// Client component: renders the lesson's action items as
// checkboxes whose state survives across visits (localStorage).
// Shows a completion count so progress is visible.
//
// Used inside MDX via the MDXComponents map, e.g.:
//   <ActionChecklist
//     id="anatomy-actions"
//     title="Do this before the next lesson"
//     items={[
//       "Write your five role descriptions",
//       "Fill in the output specification template on a real task"
//     ]}
//   />
//
// Instructional principle: application on the reader's real work
// plus visible progress (goal-gradient effect) sustains completion.
// ============================================================

import { useMemo, useRef } from 'react'
import { track } from '@vercel/analytics'
import { useStoredValue, writeStored, parseStored } from '@/lib/use-stored-value'

export default function ActionChecklist({ id, title = 'Do this now', items = [] }) {
  const storageKey = `pl-cl-${id}`

  const firedRef = useRef(false)

  // The stored array is the source of truth (external store), so there
  // is no copy in React state to synchronise. `raw` is undefined until
  // hydration, so the checkboxes stay disabled until storage is readable.
  // Per-index merge on restore: if the lesson later adds or removes
  // items, a returning reader keeps every checkmark that still lines
  // up instead of losing all progress to a length-mismatch reset.
  const raw      = useStoredValue(storageKey)
  const hydrated = raw !== undefined
  const checked  = useMemo(() => {
    const saved = parseStored(raw)
    return items.map((_, i) => Array.isArray(saved) && saved[i] === true)
  }, [raw, items])

  const doneCount = checked.filter(Boolean).length
  const allDone   = doneCount === items.length && items.length > 0

  function toggle(index) {
    const next = checked.map((c, i) => (i === index ? !c : c))
    writeStored(storageKey, JSON.stringify(next))

    // Fire the completion event once per page view, not on every
    // uncheck/re-check cycle, so the analytics count stays honest
    if (next.every(Boolean) && !firedRef.current) {
      firedRef.current = true
      try {
        track('checklist_complete', { id, items: items.length })
      } catch {
        // Analytics must never break the lesson
      }
    }
  }

  return (
    <section
      className="my-8 rounded-lg p-4 sm:p-5"
      style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}
      aria-label={title}
    >
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <p
          className="m-0 text-xs font-bold uppercase tracking-wider"
          style={{ color: '#0f172a' }}
        >
          {title}
        </p>
        <span
          className="text-xs font-semibold tabular-nums"
          style={{ color: allDone ? '#15803d' : '#64748b' }}
          aria-live="polite"
        >
          {doneCount}/{items.length}
        </span>
      </div>

      <ul className="m-0 list-none space-y-2 p-0">
        {items.map((item, i) => (
          <li key={i}>
            <label
              className="flex cursor-pointer items-start gap-3 rounded-md px-3 py-2.5 transition-colors"
              style={{
                backgroundColor: checked[i] ? '#f0fdf4' : '#ffffff',
                border:          `1px solid ${checked[i] ? '#bbf7d0' : '#e2e8f0'}`,
              }}
            >
              <input
                type="checkbox"
                checked={checked[i]}
                disabled={!hydrated}
                onChange={() => toggle(i)}
                className="mt-1 h-4 w-4 shrink-0 accent-indigo-600"
              />
              <span
                className="text-[0.925rem] leading-6"
                style={{
                  color:          checked[i] ? '#64748b' : '#374151',
                  textDecoration: checked[i] ? 'line-through' : 'none',
                }}
              >
                {item}
              </span>
            </label>
          </li>
        ))}
      </ul>

      {allDone && (
        <p className="m-0 mt-3 text-sm font-semibold" style={{ color: '#15803d' }} role="status">
          ✓ All done. Keep the momentum into the next lesson.
        </p>
      )}
    </section>
  )
}
