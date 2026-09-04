'use client'

// ============================================================
// components/CourseApplyForm.jsx — CAIO Course enrollment request
// Client component: same pattern and API as NewsletterCapture
// (POST /api/subscribe with a distinct source tag) so course
// applications land in beehiiv segmented by source. Yuri follows
// up manually with the enrollment link. No payment on-site yet.
// ============================================================

import { useState } from 'react'
import { track } from '@vercel/analytics'

export default function CourseApplyForm({ source = 'caio-course-apply' }) {
  const [email,   setEmail]   = useState('')
  const [status,  setStatus]  = useState('idle')   // idle | submitting | success | error
  const [message, setMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    const trimmed = email.trim()
    if (!trimmed) return

    setStatus('submitting')
    setMessage('')

    try {
      const res = await fetch('/api/subscribe', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email: trimmed, source }),
      })

      const json = await res.json()

      if (res.ok) {
        setStatus('success')
        setEmail('')
        try {
          track('caio_course_apply', { source })
        } catch {
          // Analytics must never break the form
        }
      } else {
        setStatus('error')
        setMessage(json.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please check your connection and try again.')
    }
  }

  // Success state — persistent, sets the follow-up expectation
  if (status === 'success') {
    return (
      <div
        className="flex items-start gap-3 rounded-lg p-4 text-left"
        style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}
        role="status"
        aria-live="polite"
      >
        <span aria-hidden="true" className="mt-0.5 text-lg">✓</span>
        <p className="text-sm font-medium" style={{ color: '#15803d' }}>
          Request received. Yuri reviews every request personally and replies
          within two business days with enrollment details.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto"
      noValidate
      aria-label="Request enrollment in the Fractional CAIO Program"
    >
      <label htmlFor="caio-apply-email" className="sr-only">
        Work email address
      </label>
      <input
        id="caio-apply-email"
        type="email"
        name="email"
        autoComplete="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="your work email"
        disabled={status === 'submitting'}
        className="
          flex-1 rounded-lg border px-4 py-3 text-sm
          placeholder-slate-400 outline-none transition-shadow
        "
        style={{
          borderColor:     '#e2e8f0',
          backgroundColor: '#fff',
          color:           '#0f172a',
        }}
        aria-invalid={status === 'error' ? 'true' : undefined}
        aria-describedby={status === 'error' ? 'caio-apply-error' : undefined}
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="
          rounded-lg px-5 py-3 text-sm font-semibold text-white
          transition-opacity disabled:opacity-60
          shrink-0 cursor-pointer
        "
        style={{ backgroundColor: '#4f46e5' }}
      >
        {status === 'submitting' ? 'Sending...' : 'Request enrollment'}
      </button>
      {status === 'error' && (
        <p
          id="caio-apply-error"
          className="w-full text-xs mt-1"
          style={{ color: '#dc2626' }}
          role="alert"
        >
          {message}
        </p>
      )}
    </form>
  )
}
