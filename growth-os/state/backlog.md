# Growth OS Backlog

> Owned by Agent 02 (Strategy). Re-ranked daily. Status: idea | ready | in-progress | shipped | killed.
> Score = ICP impact (1-5) x intent/AEO value (1-5) / effort (1-5). Higher is better.

_Last re-ranked: 2026-06-03 (Agent 02 daily run)_

## Intel status for this run

No intelligence brief was ingested this run. The Intelligence agent (01) returned a transport-layer failure (`API Error: Unable to connect to API (ECONNRESET)`), logged as a BLOCK verdict in `state/runs/2026-06-03-audit-block.md`. There is no dated brief in `state/intelligence/` (only `.gitkeep`). Per the zero-hallucination guardrail I did not invent any intel findings. This re-rank is therefore grounded only in already-sourced state: `ICP-profile.md` and the stated business goals (free-academy traffic, AEO citations, newsletter signups, cohort/book waitlist intent). New intel-derived items are deferred until a real baseline brief lands. No baseline movement exists yet either, since `metrics.md` records no captured baseline.

## READY (top of each type, picked up next run)

| # | Type | Item | Score | Why (intel/goal link) |
|---|------|------|-------|----------------------|
| 1 | content | "AI for the CHRO: the 90-day starting plan" role playbook | 5x5/2 = 12.5 | Goal: free-academy foundation + bottom-funnel intent. Maps to the primary persona (CHRO/CPO/VP People) and the "paralyzed by where to start" + "anxious about obsolescence" states in `ICP-profile.md`. High-intent role+timeframe query, no on-site equivalent. |
| 2 | onpage | Add `Course`/`LearningResource` + `BreadcrumbList` JSON-LD to all lesson pages | 4x5/2 = 10 | Goal: AEO citations (the metric "AI-answer-engine citations" in `metrics.md`). Makes lessons machine-parseable and citable. Currently missing. Low risk: ships as a PR for human merge. |
| 3 | distribution | Draft value-first replies in r/humanresources threads on "AI in HR / where do I start" | 4x4/2 = 8 | Goal: qualified discovery by the ICP. `ICP-profile.md` lists r/humanresources as a where-they-are channel; anxiety-driven "where do I start" questions match our foundational content. Draft-only to the approval queue. VERIFY the subreddit's self-promotion rules before drafting. |

## IDEAS (queued, not yet ranked for execution)

> Indicative scores below are provisional and grounded in ICP/goals only. Treat them as a ranking aid, not committed work. A real intel brief should reorder these and may add higher-priority items.

- content: "Is AI going to take my executive job?" (anxiety query, AI Wage Gap reframe): ~5x5/2 = 12.5. Hits the strongest emotional driver ("anxious about obsolescence") and the core brand frame. Held below #1 only because the role+timeframe playbook is more bottom-funnel and less likely to read as opinion.
- content: "What should I actually build first with AI?" (the paralysis query): ~5x4/2 = 10. Direct match to "paralyzed by where to start"; high search and answer-engine intent.
- content: "AI for the VP of Finance" role playbook: ~4x4/2 = 8. Adjacent senior operator in the ICP; reuses the CHRO playbook structure once #1 ships.
- onpage: publish `llms.txt` pointing AI crawlers at the best lessons + book/cohort. Raw score reads 4x4/1 = 16, but effective priority is DEFERRED (treat as below the #1 READY item) until the JSON-LD pass lands so it points at structured, citable pages. Revisit next run.
- onpage: add `FAQPage` JSON-LD to the highest-traffic lessons: ~4x4/2 = 8. Strong AEO, but "highest-traffic" cannot be chosen honestly until Search Console/Analytics are connected (`metrics.md` action items). Blocked on data.
- onpage: internal-linking pass to build the "AI Wage Gap" topical cluster: ~3x4/2 = 6.
- onpage: per-lesson OG images via next/og: ~3x3/3 = 3. Distribution polish, low AEO value.
- content: refresh remaining lessons with TLDR/Pullquote/Stat (rollout from the 3 already done): ~3x3/3 = 3. Throughput/consistency, not new demand capture.
- content: build-protocol "How I built learn.portlev.com": HELD pending Yuri's go on the protocol section (per prior note). Not scored.

## SHIPPED (this becomes the dedup guard; coordinator moves items here)

- content: "Your First Hour with Claude, for Busy Executives" (published 2026-06-03)
- content: "The Enterprise AI Deployment Protocol" (published 2026-06-03)
- format: TLDR / Pullquote / Stat components + retrofit of 3 foundational lessons (2026-06-03)

## KILLED

_(none yet)_
