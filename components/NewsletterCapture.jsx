'use client'

// ============================================================
// components/NewsletterCapture.jsx — beehiiv email capture
// Client component: manages form state + POST to /api/subscribe.
// Accepts a `variant` prop: 'inline' (default) | 'hero' | 'banner'
// ============================================================

import { useState } from 'react'

// ============================================================
// NewsletterCapture — exported component
// ============================================================
export default function NewsletterCapture({ variant = 'inline', source = 'website' }) {
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
        setMessage(json.message || 'You are in. Check your inbox to confirm.')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(json.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please check your connection and try again.')
    }
  }

  // Success state — persistent, no re-submit
  if (status === 'success') {
    return (
      <div
        className="flex items-start gap-3 rounded-lg p-4"
        style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0' }}
        role="status"
        aria-live="polite"
      >
        <span aria-hidden="true" className="mt-0.5 text-lg">✓</span>
        <p className="text-sm font-medium" style={{ color: '#15803d' }}>
          {message}
        </p>
      </div>
    )
  }

  // Variant: hero — large centered form used in the homepage hero
  if (variant === 'hero') {
    return (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
        noValidate
        aria-label="Subscribe to the Leverage Brief"
      >
        <label htmlFor="hero-email" className="sr-only">
          Email address
        </label>
        <input
          id="hero-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com"
          disabled={status === 'submitting'}
          className="
            flex-1 rounded-lg border px-4 py-3 text-sm
            placeholder-slate-400 outline-none
            transition-shadow
          "
          style={{
            borderColor:   '#e2e8f0',
            backgroundColor: '#fff',
            color:         '#0f172a',
          }}
          aria-invalid={status === 'error' ? 'true' : undefined}
          aria-describedby={status === 'error' ? 'hero-email-error' : undefined}
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
          {status === 'submitting' ? 'Joining…' : 'Get the Brief'}
        </button>
        {status === 'error' && (
          <p
            id="hero-email-error"
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

  // Variant: banner — compact horizontal strip used at bottom of pages
  if (variant === 'banner') {
    return (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-3"
        noValidate
        aria-label="Subscribe to the Leverage Brief"
      >
        <label htmlFor="banner-email" className="sr-only">
          Email address
        </label>
        <input
          id="banner-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com"
          disabled={status === 'submitting'}
          className="
            w-full sm:w-64 rounded-md border px-3 py-2 text-sm
            placeholder-slate-400 outline-none transition-shadow
          "
          style={{
            borderColor:     '#e2e8f0',
            backgroundColor: '#fff',
            color:           '#0f172a',
          }}
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="
            shrink-0 rounded-md px-4 py-2 text-sm font-semibold
            text-white transition-opacity disabled:opacity-60 cursor-pointer
          "
          style={{ backgroundColor: '#4f46e5' }}
        >
          {status === 'submitting' ? 'Joining…' : 'Subscribe'}
        </button>
        {status === 'error' && (
          <p className="text-xs" style={{ color: '#dc2626' }} role="alert">
            {message}
          </p>
        )}
      </form>
    )
  }

  // Variant: inline — default, used inside cards and section CTAs
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3"
      noValidate
      aria-label="Subscribe to the Leverage Brief"
    >
      <div className="flex gap-2">
        <label htmlFor="inline-email" className="sr-only">
          Email address
        </label>
        <input
          id="inline-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com"
          disabled={status === 'submitting'}
          className="
            flex-1 min-w-0 rounded-md border px-3 py-2 text-sm
            placeholder-slate-400 outline-none transition-shadow
          "
          style={{
            borderColor:     '#e2e8f0',
            backgroundColor: '#fff',
            color:           '#0f172a',
          }}
          aria-invalid={status === 'error' ? 'true' : undefined}
          aria-describedby={status === 'error' ? 'inline-email-error' : undefined}
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="
            shrink-0 rounded-md px-4 py-2 text-sm font-semibold
            text-white transition-opacity disabled:opacity-60 cursor-pointer
          "
          style={{ backgroundColor: '#4f46e5' }}
        >
          {status === 'submitting' ? '…' : 'Join'}
        </button>
      </div>
      {status === 'error' && (
        <p
          id="inline-email-error"
          className="text-xs"
          style={{ color: '#dc2626' }}
          role="alert"
        >
          {message}
        </p>
      )}
      <p className="text-xs" style={{ color: '#94a3b8' }}>
        Free. One email per week. Unsubscribe any time.
      </p>
    </form>
  )
}
