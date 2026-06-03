# Growth OS Backlog

> Owned by Agent 02 (Strategy). Re-ranked daily. Status: idea | ready | in-progress | shipped | killed.
> Score = ICP impact (1-5) x intent/AEO value (1-5) / effort (1-5). Higher is better.

_Last re-ranked: 2026-06-03 (Agent 02 daily run, FIRST run with a real intelligence baseline ingested)_

## Intel status for this run

The first successful Intelligence baseline brief landed: `state/intelligence/2026-06-03-baseline.md` (bounded run, 6 searches + 2 fetches). This re-rank ingests it in full. Prior daily runs ran blind (Agent 01 was blocked by a recurring ECONNRESET), so this is the first re-rank grounded in fetched evidence rather than seed state alone. Every item below traces to a specific brief finding or a stated business goal, with the link written inline.

Three findings reshape the queue:

1. **The practical-first-hour AEO slot is open and we already own the asset.** Incumbents (HBR April 2026, IMD May 2026, Microsoft 90-day guide) answer at strategy altitude or in weeks/quarters. None give a non-technical senior leader a literal do-this-now first session, except Microsoft, which is Copilot-locked. We already published "Your First Hour with Claude, for Busy Executives" (`content/tracks/ai-foundations/03-your-first-hour-with-claude.mdx`, status: published). The brief's #1 recommended action is to wrap that lesson in an AEO answer block for query "How does a non-technical executive actually start using AI in one hour?" This is now the top onpage item: the asset exists, the slot is open, the effort is low.
2. **The sharpest ICP-voice hook this run is "without handing it to IT."** Warren Wang, The CHRO Office, May 24 2026: "The CHROs who hand it to Legal or IT or a newly hired Chief AI Officer are about to watch their seat shrink." This is obsolescence anxiety in the ICP's own words and is more specific than the seed profile's generic "restructured out." It sharpens the prior blind #1 content item (a generic "90-day plan") into an evidence-anchored, role-specific lesson with a validated emotional hook. This is now the top content item.
3. **Topic is heating now (time-sensitive).** The cited competitor set is fresh (HBR April 2026, WEF May 2026, Microsoft 90-day guide), so "how executives learn AI in 2026" is rising this quarter. Publishing into it now rides the wave; waiting cedes the slot.

Carry-over blocker (confirmed by the brief, action #6): no Search Console, analytics, beehiiv read or AEO-citation routine is connected, so we still cannot measure our own ranking or citations. Every "did it work" claim stays "not connected" until those land. Items that depend on "highest-traffic" selection remain blocked on data.

## READY (top of each type, picked up next run)

| # | Type | Item | Score | Why (intel/goal link) |
|---|------|------|-------|----------------------|
| 1 | onpage | Add an AEO answer block (concise, answer-shaped lede + `FAQPage`/`QAPage` JSON-LD) to the published "Your First Hour with Claude" lesson, targeting "How does a non-technical executive actually start using AI in one hour?" | 5x5/1 = 25 | Brief section 2 + section 3 query #1 + recommended action #1. The practical-first-hour slot is open (incumbents answer in weeks/quarters; the one exception, Microsoft, is Copilot-locked). The asset is already published, so effort is low. Highest intent, lowest direct competition. Ships as a PR for human merge (on-page SEO fix, tiered control). |
| 2 | content | "What a CHRO should do first with AI (without handing it to IT)" lesson, opening on the shrinking-seat anxiety **[in-progress: drafted 2026-06-03 by Agent 03 at `content/tracks/leading-ai-adoption/07-what-a-chro-should-do-first-with-ai.mdx`, status: draft, awaiting human publish]** | 5x5/2 = 12.5 | Brief section 1 + section 3 query #2 + recommended action #2. Maps to the primary persona (CHRO/CPO/VP People) and the validated, status-driven obsolescence anxiety ("watch their seat shrink," Warren Wang, The CHRO Office, May 24 2026). Sharpest ICP-voice hook surfaced this run. Use Wang as the framing foil, not a citation crutch. Lands in `content/` as `status: draft` for human flip to published (tiered control: net-new content never auto-publishes). |
| 3 | distribution | Draft value-first replies in r/humanresources threads on "AI in HR / where do I start" | 4x4/2 = 8 | Goal: qualified discovery by the ICP. `ICP-profile.md` lists r/humanresources as a where-they-are channel. NOTE from brief section 1 / proposed-update #5: reddit.com is blocked to our crawler this run, so the ICP-thread evidence is NOT yet confirmed. A manual or different-transport pull must validate live threads AND each subreddit's self-promotion rules before any draft. Draft-only to the approval queue. Weekly cadence (Agent 05). |

## IDEAS (queued, not yet ranked for execution)

> Indicative scores below. A future intel brief may reorder these. The baseline brief promoted three of these into a clearer near-term order (see notes).

- onpage: Stand up the governance/"deploying AI wrong" AEO answer (query #5, "How do I use AI at work without causing a data or governance incident?"): ~5x5/2 = 12.5. Brief query #5 + recommended action #3. High-fear, under-served at executive altitude, backed by the survey's 17% data/security barrier and 47%-no-productivity-measurement stat (CHRO Association + Univ. of South Carolina, ~150 CHROs, March 20 2026). Needs a published lesson to anchor (none exists yet), so it trails the first-hour block which has its asset.
- content: "AI for the CHRO: the 90-day starting plan" role playbook: ~5x5/2 = 12.5. The prior blind #1. Now MERGED into READY #2 as the sharper, anxiety-led "without handing it to IT" framing rather than a generic timeframe plan. Kept here only as a structural reference for the 90-day arc inside that lesson; not a separate work item.
- content: Define "AI fluency" operationally for a time-poor executive (query #8): ~4x5/2 = 10. Brief query #8 + recommended action #4. "AI fluency" is the phrase incumbents (IMD, ForwardShare framing) use but rarely define operationally. Own the definition slot before they define it for us.
- content: "AI wage gap: what is it and how do I close it as an individual leader?" (query #3): ~5x4/2 = 10. Brief query #3 + recommended action #4. Our owned brand frame, near-zero direct competition on the individual-leader closing angle (most coverage is macro/economic). Partially served by `content/tracks/ai-foundations/01-what-is-the-ai-wage-gap.mdx`; check overlap before drafting net-new.
- content: "Is AI going to take my executive job?" (anxiety query, AI Wage Gap reframe): ~5x5/2 = 12.5. Hits the strongest emotional driver. Held below the CHRO-first lesson because the role+first-action piece is more bottom-funnel and rides the fresher CHRO-anxiety evidence.
- content: "What should I actually build first with AI?" (the paralysis query): ~5x4/2 = 10. Direct match to "paralyzed by where to start." Possible overlap with `content/tracks/ai-foundations/02-your-first-ai-workflow.mdx`; check before drafting.
- content: "Substitute vs augment vs elevate: how to decide which tasks to give AI" (query #4): ~4x4/2 = 8. Our framework, phrased as the comparison query. No incumbent owns this exact phrasing (brief query #4).
- content: "AI for the VP of Finance" role playbook: ~4x4/2 = 8. Adjacent senior operator in the ICP; reuses the CHRO lesson structure once READY #2 ships.
- onpage: Add `Course`/`LearningResource` + `BreadcrumbList` JSON-LD to all lesson pages: ~4x5/2 = 10. The prior blind #2 onpage item. Strong AEO foundation that makes all lessons machine-parseable and citable. Demoted below the single-lesson answer block because the answer block captures the open first-hour slot immediately with less surface area; the site-wide JSON-LD pass is the next onpage item right after it. Ships as a PR.
- onpage: publish `llms.txt` pointing AI crawlers at the best lessons + book/cohort: raw 4x4/1 = 16, effective priority DEFERRED until the site-wide JSON-LD pass lands so it points at structured, citable pages. Revisit then.
- onpage: add `FAQPage` JSON-LD to the highest-traffic lessons: ~4x4/2 = 8. Strong AEO, but "highest-traffic" cannot be chosen honestly until Search Console/Analytics are connected (`metrics.md` action items, confirmed blocked by brief action #6).
- onpage: internal-linking pass to build the "AI Wage Gap" topical cluster: ~3x4/2 = 6.
- onpage: per-lesson OG images via next/og: ~3x3/3 = 3. Distribution polish, low AEO value.
- content: refresh remaining lessons with TLDR/Pullquote/Stat (rollout from the 3 already done): ~3x3/3 = 3. Throughput/consistency, not new demand capture.
- content: build-protocol "How I built learn.portlev.com": HELD pending Yuri's go on the protocol section (per prior note). Not scored.
- infrastructure: connect Search Console + analytics + beehiiv read + AEO-citation routine. Not ICP-scored (enabler, not demand capture), but it is the top blocker per brief action #6: until it lands, every outcome metric stays "not connected." Owned by Coordinator (06), flagged for Yuri.

## SHIPPED (this becomes the dedup guard; coordinator moves items here)

- content: "Your First Hour with Claude, for Busy Executives" (published 2026-06-03)
- content: "The Enterprise AI Deployment Protocol" (published 2026-06-03)
- format: TLDR / Pullquote / Stat components + retrofit of 3 foundational lessons (2026-06-03)

## KILLED

_(none yet)_
