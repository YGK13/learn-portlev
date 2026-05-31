// ============================================================
// lib/leverage-brief.js — Fetch published posts from beehiiv
//
// The /brief archive page pulls its posts from the live
// Leverage Brief publication on beehiiv (NOT from local MDX).
// Each card links to the post's public beehiiv URL, which
// shows the newsletter sign-up CTA at the top for visitors
// who are not yet subscribed.
//
// Requires env vars (same ones used by the subscribe route):
//   BEEHIIV_API_KEY
//   BEEHIIV_PUBLICATION_ID
//
// beehiiv API docs: https://developers.beehiiv.com/api-reference
// ============================================================

const BEEHIIV_API = 'https://api.beehiiv.com/v2'

// Cache for 1 hour. Beehiiv posts publish weekly, so this is
// far more than enough freshness without hammering their API.
const REVALIDATE_SECONDS = 60 * 60

/**
 * Fetch the most recent published posts from the Leverage Brief
 * publication on beehiiv.
 *
 * Returns a normalised array shaped like the local-MDX briefs so
 * the same BriefCard component can render either source:
 *   { title, summary, date, slug, tags, tier, webUrl }
 *
 * Returns [] on failure (missing env, network error, non-2xx).
 * The page is built statically; a transient API failure should
 * never break the build.
 *
 * @param {object} opts
 * @param {number} [opts.limit=24]  How many posts to return
 * @returns {Promise<Array>} Posts (newest first)
 */
export async function getLeverageBriefPosts({ limit = 24 } = {}) {
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID
  const apiKey = process.env.BEEHIIV_API_KEY

  if (!publicationId || !apiKey) {
    // Soft-fail: at build time without secrets, just return empty.
    // The page renders the newsletter CTA with no list. Local dev
    // without env vars stays unbroken.
    return []
  }

  // Query: confirmed (i.e. actually published), newest first.
  // expand[]=free_web_content is NOT requested — we only need
  // metadata for the archive; the full post lives on beehiiv.
  const url = new URL(
    `${BEEHIIV_API}/publications/${publicationId}/posts`
  )
  url.searchParams.set('status', 'confirmed')
  url.searchParams.set('audience', 'free') // only free-tier posts
  url.searchParams.set('platform', 'both')
  url.searchParams.set('order_by', 'publish_date')
  url.searchParams.set('direction', 'desc')
  url.searchParams.set('limit', String(Math.min(limit, 50)))

  let res
  try {
    res = await fetch(url.toString(), {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept':        'application/json',
      },
      // Persistent cache for an hour so production builds and
      // ISR re-renders do not pound the beehiiv API every request.
      next: { revalidate: REVALIDATE_SECONDS, tags: ['leverage-brief'] },
    })
  } catch (err) {
    console.warn('[leverage-brief] beehiiv fetch failed:', err.message)
    return []
  }

  if (!res.ok) {
    console.warn(
      `[leverage-brief] beehiiv returned ${res.status} ${res.statusText}`
    )
    return []
  }

  const json = await res.json().catch(() => null)
  const data = Array.isArray(json?.data) ? json.data : []

  return data
    // Defensive: drop anything missing the basics
    .filter(p => p && p.title && p.web_url && p.publish_date)
    .map(normalisePost)
}

// ------------------------------------------------------------
// Internal: shape a beehiiv post into a BriefCard-friendly object
// ------------------------------------------------------------
function normalisePost(p) {
  // publish_date is a Unix timestamp (seconds). Convert to YYYY-MM-DD
  // so it matches the local-MDX brief format BriefCard expects.
  const date = unixToYMD(p.publish_date)

  return {
    title:   String(p.title).trim(),
    summary: String(p.subtitle ?? p.preview_text ?? '').trim(),
    date,
    slug:    String(p.slug ?? p.id),
    tags:    Array.isArray(p.content_tags) ? p.content_tags.slice(0, 4) : [],
    // Free posts only (we filtered audience=free above), so no
    // members badge on this surface. Keep the field for compat.
    tier:    'free',
    // The external URL is what makes the card link out to the
    // beehiiv post page (where the sign-up CTA lives).
    webUrl:  String(p.web_url),
  }
}

// ------------------------------------------------------------
// Internal: convert a Unix timestamp (seconds) to YYYY-MM-DD in UTC
// ------------------------------------------------------------
function unixToYMD(seconds) {
  if (typeof seconds !== 'number' || !Number.isFinite(seconds)) {
    return '1970-01-01'
  }
  const d = new Date(seconds * 1000)
  const y = d.getUTCFullYear()
  const m = String(d.getUTCMonth() + 1).padStart(2, '0')
  const day = String(d.getUTCDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}
