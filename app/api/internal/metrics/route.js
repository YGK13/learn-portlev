// ============================================================
// app/api/internal/metrics/route.js
// Token-protected internal metrics endpoint for the Growth OS.
//
// Why this exists: BEEHIIV_API_KEY is marked Sensitive in Vercel and
// will not `vercel env pull`, so the swarm cannot read it locally.
// This route reads it server-side (where the env var IS available at
// runtime) and returns subscriber metrics, gated by METRICS_TOKEN.
// The headless swarm fetches:
//   https://learn.portlev.com/api/internal/metrics?token=<METRICS_TOKEN>
//
// Env required (Vercel): BEEHIIV_API_KEY, BEEHIIV_PUBLICATION_ID, METRICS_TOKEN
// ============================================================

export const dynamic = 'force-dynamic' // never cache: always a live read

const BEEHIIV_API = 'https://api.beehiiv.com/v2'

async function getJson(url, key) {
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${key}`, Accept: 'application/json' },
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`beehiiv ${res.status} ${res.statusText}`)
  return res.json()
}

export async function GET(request) {
  const token = new URL(request.url).searchParams.get('token')
  const expected = process.env.METRICS_TOKEN

  // Constant-ish check; reject if unset or mismatched.
  if (!expected || token !== expected) {
    return Response.json({ error: 'unauthorized' }, { status: 401 })
  }

  const PUB = process.env.BEEHIIV_PUBLICATION_ID
  const KEY = process.env.BEEHIIV_API_KEY
  if (!PUB || !KEY) {
    return Response.json({ error: 'beehiiv env not configured' }, { status: 500 })
  }

  try {
    // Active subscriber total
    const activeUrl = new URL(`${BEEHIIV_API}/publications/${PUB}/subscriptions`)
    activeUrl.searchParams.set('status', 'active')
    activeUrl.searchParams.set('limit', '1')
    const active = await getJson(activeUrl.toString(), KEY)

    // Recent subscriptions for UTM-source attribution
    const recentUrl = new URL(`${BEEHIIV_API}/publications/${PUB}/subscriptions`)
    recentUrl.searchParams.set('limit', '100')
    recentUrl.searchParams.set('order_by', 'created')
    recentUrl.searchParams.set('direction', 'desc')
    const recent = await getJson(recentUrl.toString(), KEY)
    const rows = Array.isArray(recent?.data) ? recent.data : []

    const bySource = {}
    for (const r of rows) {
      const s = (r.utm_source || 'direct/unknown').trim()
      bySource[s] = (bySource[s] || 0) + 1
    }

    return Response.json({
      capturedUtc: new Date().toISOString(),
      totalActiveSubscribers: active?.total_results ?? null,
      recentSampleSize: rows.length,
      recentBySource: Object.fromEntries(
        Object.entries(bySource).sort((a, b) => b[1] - a[1])
      ),
    })
  } catch (err) {
    return Response.json({ error: String(err.message || err) }, { status: 502 })
  }
}
