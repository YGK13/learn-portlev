'use client'

// ============================================================
// components/KnowledgeCheck.jsx — inline retrieval-practice quiz
// Client component: 2-4 multiple-choice questions with instant
// per-answer feedback. Answers persist in localStorage so a
// returning reader sees their prior result.
//
// Used inside MDX via the MDXComponents map, e.g.:
//   <KnowledgeCheck
//     id="anatomy-check"
//     questions={[
//       {
//         question: "What is the highest-leverage line in a prompt?",
//         options: ["The greeting", "The role assignment", "The word count"],
//         answer: 1,
//         explain: "Role assignment primes the AI's entire register."
//       }
//     ]}
//   />
//
// Instructional principle: retrieval practice with immediate
// feedback beats passive re-reading for retention.
// ============================================================

import { useEffect, useRef, useState } from 'react'
import { track } from '@vercel/analytics'

// localStorage helpers — guarded so SSR and private mode never throw
function loadState(key) {
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function saveState(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Storage unavailable (private mode, quota) — degrade silently
  }
}

export default function KnowledgeCheck({ id, title = 'Check your understanding', questions = [] }) {
  const storageKey = `pl-kc-${id}`

  // picks[i] = index the reader chose for question i, or null
  const [picks,    setPicks]    = useState(() => questions.map(() => null))
  const [hydrated, setHydrated] = useState(false)
  const firedRef = useRef(false)

  // Restore prior answers after mount (avoids SSR hydration mismatch).
  // Per-index merge: if the lesson later adds or removes questions, a
  // returning reader keeps every answer that still lines up instead of
  // losing all saved progress to a length-mismatch reset.
  useEffect(() => {
    const saved = loadState(storageKey)
    if (Array.isArray(saved)) {
      setPicks(questions.map((_, i) => (typeof saved[i] === 'number' ? saved[i] : null)))
    }
    setHydrated(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey])

  const answered = picks.filter((p) => p !== null).length
  const done     = answered === questions.length && questions.length > 0
  const correct  = done ? picks.filter((p, i) => p === questions[i].answer).length : 0

  function choose(qIndex, optIndex) {
    // First answer locks — feedback is the point, not re-rolling
    if (picks[qIndex] !== null) return

    const next = picks.map((p, i) => (i === qIndex ? optIndex : p))
    setPicks(next)
    saveState(storageKey, next)

    const isNowDone = next.every((p) => p !== null)
    if (isNowDone && !firedRef.current) {
      firedRef.current = true
      const score = next.filter((p, i) => p === questions[i].answer).length
      try {
        track('knowledge_check_complete', { id, score, total: questions.length })
      } catch {
        // Analytics must never break the lesson
      }
    }
  }

  return (
    <section
      className="my-8 rounded-lg p-4 sm:p-5"
      style={{ backgroundColor: 'rgb(79 70 229 / 0.04)', border: '1px solid rgb(79 70 229 / 0.25)' }}
      aria-label={title}
    >
      <p
        className="m-0 mb-4 text-xs font-bold uppercase tracking-wider"
        style={{ color: '#4f46e5' }}
      >
        {title}
      </p>

      {questions.map((q, qi) => {
        const picked = picks[qi]
        return (
          <div key={qi} className={qi > 0 ? 'mt-6' : ''}>
            <p className="m-0 mb-3 text-[0.95rem] font-semibold leading-6" style={{ color: '#0f172a' }}>
              {questions.length > 1 ? `${qi + 1}. ` : ''}{q.question}
            </p>

            <div className="space-y-2" role="group" aria-label={q.question}>
              {q.options.map((opt, oi) => {
                const isPicked  = picked === oi
                const isCorrect = q.answer === oi
                const revealed  = picked !== null

                // Visual state: neutral until answered, then color the
                // correct option green and a wrong pick amber
                let bg     = '#ffffff'
                let border = '#e2e8f0'
                if (revealed && isCorrect)              { bg = '#f0fdf4'; border = '#86efac' }
                else if (revealed && isPicked)          { bg = 'rgb(245 158 11 / 0.08)'; border = '#fcd34d' }

                return (
                  <button
                    key={oi}
                    type="button"
                    onClick={() => choose(qi, oi)}
                    disabled={!hydrated || revealed}
                    className="block w-full rounded-md px-3.5 py-2.5 text-left text-[0.925rem] leading-6 transition-colors disabled:cursor-default"
                    style={{ backgroundColor: bg, border: `1px solid ${border}`, color: '#374151' }}
                  >
                    {revealed && isCorrect ? '✓ ' : revealed && isPicked ? '✗ ' : ''}{opt}
                  </button>
                )
              })}
            </div>

            {picked !== null && q.explain && (
              <p
                className="m-0 mt-2.5 rounded-md px-3.5 py-2.5 text-[0.875rem] leading-6"
                style={{ backgroundColor: '#f8fafc', color: '#64748b' }}
                role="status"
              >
                {q.explain}
              </p>
            )}
          </div>
        )
      })}

      {done && (
        <p
          className="m-0 mt-5 text-sm font-semibold"
          style={{ color: correct === questions.length ? '#15803d' : '#4f46e5' }}
          role="status"
          aria-live="polite"
        >
          {correct} of {questions.length} correct.
          {correct === questions.length
            ? ' Solid. Keep going.'
            : ' Review the explanations above, then keep going.'}
        </p>
      )}
    </section>
  )
}
