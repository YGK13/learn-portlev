// ============================================================
// lib/beehiiv.js — beehiiv API helper
// Used by: app/api/subscribe/route.js
// Requires env vars: BEEHIIV_API_KEY, BEEHIIV_PUBLICATION_ID
// beehiiv API docs: https://developers.beehiiv.com/docs/v2
// ============================================================

const BEEHIIV_API = 'https://api.beehiiv.com/v2'

/**
 * Subscribe an email address to the Leverage Brief publication on beehiiv.
 *
 * @param {string} email - The subscriber's email address
 * @param {object} opts  - Optional UTM parameters for attribution tracking
 * @returns {Promise<object>} The beehiiv API response data
 * @throws {Error} If env vars are missing or the API returns an error status
 */
export async function subscribeEmail(email, {
  utmSource = 'learn-portlev',
  utmMedium = 'web',
  utmCampaign = 'newsletter-capture',
  referringSite = 'learn.portlev.com',
} = {}) {
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID
  const apiKey = process.env.BEEHIIV_API_KEY

  if (!publicationId || !apiKey) {
    throw new Error(
      'Missing BEEHIIV_PUBLICATION_ID or BEEHIIV_API_KEY. ' +
      'Add them to .env.local (see .env.local.example).'
    )
  }

  const res = await fetch(
    `${BEEHIIV_API}/publications/${publicationId}/subscriptions`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        // Do not error if the subscriber already exists — just update
        reactivate_existing: false,
        // Trigger the welcome email sequence defined in beehiiv
        send_welcome_email: true,
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        referring_site: referringSite,
      }),
    }
  )

  const data = await res.json()

  if (!res.ok) {
    // Surface the beehiiv error message for debugging
    throw new Error(data.message ?? `beehiiv API error ${res.status}`)
  }

  return data
}
