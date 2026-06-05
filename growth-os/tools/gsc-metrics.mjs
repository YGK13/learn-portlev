#!/usr/bin/env node
// ============================================================
// growth-os/tools/gsc-metrics.mjs
// Reads Google Search Console performance data for learn.portlev.com
// using a service-account key, so the Growth OS can record real
// impressions, average position and top queries in state/metrics.md.
//
// Zero npm dependencies: signs the service-account JWT with Node's
// built-in crypto, exchanges it for an access token, then calls the
// Search Console API directly.
//
// Key location (gitignored, NEVER committed):
//   default: C:/Users/yurik/.claude/routines/secrets/learn-portlev-gsc-*.json
//   override: env GSC_SA_KEY=<path to the service-account json>
//
// Usage:  node growth-os/tools/gsc-metrics.mjs
// Output: JSON { siteUrl, range, totals, topQueries[] } or a clear note.
// ============================================================

import { readFileSync, readdirSync } from 'fs'
import { createSign } from 'crypto'
import { join } from 'path'

const SECRETS_DIR = 'C:/Users/yurik/.claude/routines/secrets'
const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly'
const TOKEN_URL = 'https://oauth2.googleapis.com/token'
const SC_BASE = 'https://searchconsole.googleapis.com/webmasters/v3'

// ---- locate + load the service-account key ----------------------
function loadKey() {
  let path = process.env.GSC_SA_KEY
  if (!path) {
    const f = readdirSync(SECRETS_DIR).find(n => n.startsWith('learn-portlev-gsc') && n.endsWith('.json'))
    if (!f) throw new Error(`No learn-portlev-gsc*.json in ${SECRETS_DIR}. Set GSC_SA_KEY.`)
    path = join(SECRETS_DIR, f)
  }
  const k = JSON.parse(readFileSync(path, 'utf8'))
  if (!k.client_email || !k.private_key) throw new Error('Key missing client_email/private_key.')
  return k
}

// ---- base64url ---------------------------------------------------
const b64url = (buf) =>
  Buffer.from(buf).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

// ---- mint an access token from the service-account JWT -----------
async function getAccessToken(key) {
  const now = Math.floor(Date.now() / 1000)
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const claims = b64url(JSON.stringify({
    iss: key.client_email,
    scope: SCOPE,
    aud: TOKEN_URL,
    iat: now,
    exp: now + 3600,
  }))
  const signer = createSign('RSA-SHA256')
  signer.update(`${header}.${claims}`)
  const sig = b64url(signer.sign(key.private_key))
  const assertion = `${header}.${claims}.${sig}`

  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(`token exchange failed: ${res.status} ${JSON.stringify(data)}`)
  return data.access_token
}

async function api(path, token, method = 'GET', body) {
  const res = await fetch(`${SC_BASE}${path}`, {
    method,
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(`${method} ${path} -> ${res.status} ${JSON.stringify(data)}`)
  return data
}

function ymd(d) { return d.toISOString().slice(0, 10) }

async function main() {
  const key = loadKey()
  const token = await getAccessToken(key)

  // Find the verified property (URL-prefix or domain) for learn.portlev.com.
  const sites = await api('/sites', token)
  const entries = sites.siteEntry || []
  const match = entries.find(s => (s.siteUrl || '').includes('learn.portlev.com'))
  if (!match) {
    console.log(JSON.stringify({
      ok: false,
      note: 'Service account authenticated, but learn.portlev.com is not in its verified properties yet. Confirm the service account email was added under Search Console > Settings > Users and permissions, and allow a few minutes to propagate.',
      visibleProperties: entries.map(e => e.siteUrl),
    }, null, 2))
    return
  }
  const siteUrl = match.siteUrl

  // GSC data lags ~2-3 days. Window: last 28 days ending 3 days ago.
  const end = new Date(Date.now() - 3 * 86400000)
  const start = new Date(end.getTime() - 28 * 86400000)
  const range = { startDate: ymd(start), endDate: ymd(end) }

  const totals = await api(`/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`, token, 'POST', range)
  const byQuery = await api(`/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`, token, 'POST', {
    ...range, dimensions: ['query'], rowLimit: 25,
  })

  const sum = (totals.rows && totals.rows[0]) || null
  console.log(JSON.stringify({
    ok: true,
    capturedUtc: new Date().toISOString(),
    siteUrl,
    permission: match.permissionLevel,
    range,
    totals: sum
      ? { clicks: sum.clicks, impressions: sum.impressions, ctr: sum.ctr, avgPosition: sum.position }
      : 'no data yet (new property; data appears after a few days)',
    topQueries: (byQuery.rows || []).map(r => ({
      query: r.keys[0], clicks: r.clicks, impressions: r.impressions, position: r.position,
    })),
  }, null, 2))
}

main().catch(err => { console.error('ERROR:', err.message); process.exit(1) })
