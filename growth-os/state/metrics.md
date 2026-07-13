# Metrics (outcomes, not vanity)

> Tracked by the Coordinator weekly. The rule: if a number would go up even when we created no value, it does not belong here. Measure qualified traffic, citations, signups, and rankings, not raw activity.

## What we track (once data sources are connected)

| Metric | Source | Why it matters |
|--------|--------|----------------|
| Organic qualified sessions | Vercel Analytics / GA4 / Search Console | Real discovery by the ICP |
| Indexed pages + avg position (target queries) | Google Search Console | SEO progress |
| AI-answer-engine citations | Manual/scripted checks (ChatGPT, Perplexity, Claude, Google AI) | AEO progress: are we the cited source? |
| Newsletter signups (by source) | beehiiv | The actual conversion goal |
| Cohort/book waitlist clicks | beehiiv tags / link tracking | Bottom-of-funnel intent |
| Lessons published vs drafted | repo | Throughput (context, not a goal) |

## Data sources to connect (action items): status re-verified live 2026-07-13 (W29)

- [x] **Analytics: connected.** `@vercel/analytics` `<Analytics/>` in the root layout; live on deploy. Read the dashboard in the Vercel project. Not re-verified this week (no Vercel dashboard access from this session); status carried forward from Phase 3.
- [~] **beehiiv: code shipped, but NOT actually reading live data.** `app/api/internal/metrics/route.js` exists and `growth-os/tools/beehiiv-metrics.mjs` exists, but running the local reader (`node growth-os/tools/beehiiv-metrics.mjs`) failed: `BEEHIIV_API_KEY` and `BEEHIIV_PUBLICATION_ID` are present in the repo's `.env.local` (dated 2026-06-04) only as empty placeholders (value length 2, i.e. `""`). This checklist item was marked `[x]` on 2026-06-04 for shipping the code path, not for confirming a live pull; that distinction was lost. Downgraded to `[~]` (code exists, data flow unverified) until Yuri runs `vercel env pull .env.local` with real production keys and a live pull is confirmed. **Correction, not a regression**: nothing broke this week; this was never actually working end to end.
- [x] **AEO citation routine: defined.** Canonical queries in `growth-os/tools/aeo-queries.json`; the weekly sync runs them through the answer engines and logs who is cited (mirrors the existing seo-aeo position check). Not run this week (folded into a future weekly sync per `01-intelligence.md`; this week's Intelligence run was a light daily scan, not the deeper weekly AEO sweep).
- [ ] **Google Search Console: still not connected, re-confirmed live this week.** Ran `node growth-os/tools/gsc-metrics.mjs` directly: the service account authenticates successfully (JWT signs, token exchange succeeds) but returns `visibleProperties: []`, i.e. `learn.portlev.com` is not yet a verified property under that service account. Same 1-step gap as Phase 3: verify the property at search.google.com/search-console and add the service account's email as a user. Data read stays "not connected" until this lands. This is the single most valuable unblock available to Yuri right now: the tooling and code are already done and tested; only a console click is missing.

## Baseline (to be captured on first full run)

_Still not captured. Blocked on the same Search Console gap above: ranking/position data cannot be read until the property is verified for the service account. Qualified-session and AEO-citation baselines are separately blocked on Vercel Analytics dashboard access and the AEO citation routine actually running, neither attempted this week._

**Why still empty after week 29 (W29):** unlike W23 (Intelligence transport failure), the swarm itself is functioning now (Intelligence, Strategy and On-page all ran and shipped this week, see `state/runs/2026-07-13-daily.md`). The gap is purely the unresolved Search Console verification step, live-confirmed above, not an agent failure.

## Weekly readings

| Week | Date | Qualified sessions | Indexed/avg pos | AEO citations | Newsletter signups | Waitlist clicks | Lessons pub/draft | Notes |
|------|------|--------------------|-----------------|---------------|--------------------|-----------------|-------------------|-------|
| W23 | 2026-06-03 | not connected | not connected | not connected | not connected | not connected | 2 pub / 0 new draft | Seed/proof run. Intelligence BLOCKED (ECONNRESET); content, on-page and distribution producers intentionally not fired. No baseline captured. Nothing published, nothing posted. |
| W29 | 2026-07-13 | not connected (not attempted) | not connected (live-reconfirmed: service account authenticates, property not verified) | not connected (routine defined, not run this week) | not connected (beehiiv keys are placeholders, live pull failed) | not connected | 42 lessons across 10 published tracks pub / 1 draft (`04-is-ai-going-to-take-my-executive-job.mdx`) | First Coordinator sync since W23 (39-day dispatcher outage in between, see `decisions-log.md` 2026-07-13 entries). Live lesson/track count corrected by direct repo count: 10 tracks, not the "9" both `backlog.md` and `state/intelligence/2026-07-13.md` stated (the free `fractional-caio-playbook` track, shipped 2026-07-07, was miscounted as commercial-only scope). Sitewide JSON-LD (PR #3, open) is schema-driven off live frontmatter, so it already covers all 10 tracks including the miscounted one; no rework needed. |

_(Coordinator appends one dated row here each week. "not connected" stays until the matching data source in the action-items list is live, so the gap is always visible.)_
