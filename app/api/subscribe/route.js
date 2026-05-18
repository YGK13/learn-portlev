// ============================================================
// app/api/subscribe/route.js — POST /api/subscribe
// Accepts { email, source } JSON body. Validates the email,
// then calls lib/beehiiv.js to subscribe the address.
// Returns JSON { message } on success or { error } on failure.
// ============================================================

import { subscribeEmail } from '@/lib/beehiiv'

// Basic email format check — not exhaustive, just prevents
// obviously bad values from hitting the beehiiv API
function isValidEmail(email) {
  return typeof email === 'string' &&
    email.length > 0 &&
    email.length < 320 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request) {
  // Parse request body
  let body
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  const { email, source } = body

  // Validate email
  if (!isValidEmail(email)) {
    return Response.json(
      { error: 'Please enter a valid email address.' },
      { status: 422 }
    )
  }

  // Attempt subscription via beehiiv
  try {
    const result = await subscribeEmail(email.trim().toLowerCase(), { source })

    // beehiiv returns 200/201 for success and 400/409 etc. for errors
    if (result.success) {
      return Response.json(
        { message: 'You are in. Check your inbox to confirm your subscription.' },
        { status: 200 }
      )
    }

    // beehiiv indicated an error (e.g. already subscribed)
    return Response.json(
      { error: result.error || 'Could not subscribe. Please try again.' },
      { status: 400 }
    )
  } catch (err) {
    console.error('[/api/subscribe] Unexpected error:', err)
    return Response.json(
      { error: 'Something went wrong on our end. Please try again later.' },
      { status: 500 }
    )
  }
}
