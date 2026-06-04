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

## Data sources to connect (action items) — Phase 3 status 2026-06-04

- [x] **Analytics: connected.** `@vercel/analytics` `<Analytics/>` in the root layout; live on deploy. Read the dashboard in the Vercel project.
- [x] **beehiiv: connected via server endpoint.** `app/api/internal/metrics/route.js` reads the Sensitive key server-side and returns active-subscriber total + UTM breakdown, gated by `METRICS_TOKEN` (set in Vercel prod + gitignored `.env.local`). The swarm fetches `GET /api/internal/metrics?token=...`. Live on next deploy.
- [x] **AEO citation routine: defined.** Canonical queries in `growth-os/tools/aeo-queries.json`; the weekly sync runs them through the answer engines and logs who is cited (mirrors the existing seo-aeo position check).
- [ ] **Google Search Console: 1 step left for Yuri.** Verification meta is wired (set `GOOGLE_SITE_VERIFICATION` in Vercel with the HTML-tag code). Then verify the property at search.google.com/search-console. For the swarm to READ ranking data, also create a Google Cloud service account, enable the Search Console API, add its email as a user in Search Console, and place its key for the dispatcher. Data read stays "not connected" until this lands.

## Baseline (to be captured on first full run)

_Not yet captured. The first Intelligence run will record a baseline so all future movement is measured against it (the same discipline the business-case lesson preaches)._

**Why still empty after week 23 (W23):** the only Intelligence run this week (2026-06-03) failed at the transport layer (`API Error: Unable to connect to API (ECONNRESET)`) and wrote no brief. See `state/runs/2026-06-03-audit-block.md`. No baseline can be honestly recorded until a real Intelligence run completes AND the data sources above are connected. None of the four data sources (Search Console, analytics, beehiiv read, AEO citation routine) have produced a reading yet, so every metric below remains uninstrumented by design, not by oversight.

## Weekly readings

| Week | Date | Qualified sessions | Indexed/avg pos | AEO citations | Newsletter signups | Waitlist clicks | Lessons pub/draft | Notes |
|------|------|--------------------|-----------------|---------------|--------------------|-----------------|-------------------|-------|
| W23 | 2026-06-03 | not connected | not connected | not connected | not connected | not connected | 2 pub / 0 new draft | Seed/proof run. Intelligence BLOCKED (ECONNRESET); content, on-page and distribution producers intentionally not fired. No baseline captured. Nothing published, nothing posted. |

_(Coordinator appends one dated row here each week. "not connected" stays until the matching data source in the action-items list is live, so the gap is always visible.)_
