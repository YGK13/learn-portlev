#!/usr/bin/env node
// ============================================================
// growth-os/tools/beehiiv-metrics.mjs
// Reads Leverage Brief subscriber metrics from the beehiiv API,
// so the Growth OS Coordinator can record real signup numbers in
// state/metrics.md instead of guessing.
//
// Uses BEEHIIV_API_KEY + BEEHIIV_PUBLICATION_ID (pull locally with
// `vercel env pull .env.local`; this script loads .env.local).
//
// Usage:  node growth-os/tools/beehiiv-metrics.mjs
// Output: JSON with total active subscribers + a utm_source breakdown
//         of the most recent subscriptions (the funnel attribution).
// ============================================================

import { readFileSync } from 'fs'
import { resolve } from 'path'

// ---- load .env.local (no dependency on dotenv) -------------------
function loadEnvLocal() {
  try {
    const raw = readFileSync(resolve(process.cwd(), '.env.local'), 'utf8')
    for (const line of raw.split(/\r?\n/)) {
      const m = line.match(/^([A-Z0-9_]+)=(.*)$/)
      if (m && !process.env[m[1]]) {
        process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
      }
    }
  } catch { /* env may already be in process.env */ }
}
loadEnvLocal()

const API = 'https://api.beehiiv.com/v2'
const PUB = process.env.BEEHIIV_PUBLICATION_ID
const KEY = process.env.BEEHIIV_API_KEY

if (!PUB || !KEY) {
  console.error('Missing BEEHIIV_PUBLICATION_ID or BEEHIIV_API_KEY. Run: vercel env pull .env.local')
  process.exit(1)
}

const headers = { Authorization: `Bearer ${KEY}`, Accept: 'application/json' }

async function getJson(url) {
  const res = await fetch(url, { headers })
  if (!res.ok) throw new Error(`beehiiv ${res.status} ${res.statusText} for ${url}`)
  return res.json()
}

async function main() {
  // Active subscriber total (total_results on a status=active query).
  const activeUrl = new URL(`${API}/publications/${PUB}/subscriptions`)
  activeUrl.searchParams.set('status', 'active')
  activeUrl.searchParams.set('limit', '1')
  const active = await getJson(activeUrl.toString())
  const totalActive = active?.total_results ?? null

  // Most-recent subscriptions for utm_source attribution.
  const recentUrl = new URL(`${API}/publications/${PUB}/subscriptions`)
  recentUrl.searchParams.set('limit', '100')
  recentUrl.searchParams.set('order_by', 'created')
  recentUrl.searchParams.set('direction', 'desc')
  const recent = await getJson(recentUrl.toString())
  const rows = Array.isArray(recent?.data) ? recent.data : []

  const bySource = {}
  for (const r of rows) {
    const s = (r.utm_source || 'direct/unknown').trim()
    bySource[s] = (bySource[s] || 0) + 1
  }

  const out = {
    capturedUtc: new Date().toISOString(),
    publicationId: PUB,
    totalActiveSubscribers: totalActive,
    recentSampleSize: rows.length,
    recentBySource: Object.fromEntries(
      Object.entries(bySource).sort((a, b) => b[1] - a[1])
    ),
  }
  console.log(JSON.stringify(out, null, 2))
}

main().catch(err => {
  console.error('ERROR:', err.message)
  process.exit(1)
})
