# Growth OS Backlog

> Owned by Agent 02 (Strategy). Re-ranked daily. Status: idea | ready | in-progress | shipped | killed.
> Score = ICP impact (1-5) x intent/AEO value (1-5) / effort (1-5). Higher is better.

_Last re-ranked: 2026-07-13 (Agent 02, third invocation, 39-day gap since the second: the routines dispatcher that triggers this swarm was down under a KILL flag from 2026-06-07 to 2026-07-07. Reconciled the backlog against what actually shipped during the gap; promoted the sitewide JSON-LD item to IN-PROGRESS.)_

## Intel status for this run

`2026-07-13.md`: verified CAIO adoption stats (IBM 2026 CEO Study via secondary citation, [VERIFY] flagged) and a primary-sourced CHRO anxiety stat (CHRO Association/USC Darla Moore, 91%, dated 2026-03-20). Full detail in `state/intelligence/2026-07-13.md`.

## Reconciliation: what shipped during the 39-day gap (outside the swarm)

None of this was logged by the swarm because the dispatcher was down. Reconciled here from `git log` and the live repo so the backlog stops lying about scope:

1. **8 new tracks published**, taking the site from 1 track (`ai-foundations`, 4 lessons) to 9: `how-ai-works`, `prompt-engineering`, `ai-workflows`, `ai-agents`, `ai-governance`, `personal-website`, `building-agents`, `leading-ai-adoption`, `fractional-caio-playbook`. This is the single biggest fact this backlog was missing.
2. **PR #2 (the stale AEO branch) was rebased and merged** by Yuri. FAQPage JSON-LD + direct-answer Callout live on "Your First Hour with Claude." Item 1 below moves to SHIPPED.
3. **Search Console metrics reader** shipped (commit `51c59b8`, zero-dep service-account JWT). `state/metrics.md`'s Search Console blocker may be partially resolved; needs a Coordinator check against the actual metrics.md checklist (still shows Yuri's verification step as outstanding as of this run, not re-verified here).
4. **Content format revamp** (2 passes, ~21 lessons retrofitted with TLDR/Pullquote/Stat) and a **verified quote bank** (48 verbatim quotes from book + transcripts) shipped. This substantially reduces the "no second verified quote available" gap flagged against lesson 04 in the 2026-06-04 decisions-log entry; worth rechecking before that lesson publishes.
5. **CAIO course, Authority Stack and Programs hub** shipped (per `git log`: `aab576b`, `60c9c5a`, `398804c`). These are commercial surfaces (course/pricing tiers), not `content/tracks/` lessons, out of this swarm's `content/` scope but relevant context for the ICP profile (CAIO is now a paid track, not just free lessons).
6. `llms.txt` still does not exist. Confirmed unchanged.

**Standing gap:** this reconciliation is Strategy-level triage, not a full audit. A complete pass (metrics.md re-check, decisions-log backfill for items 3 to 5 above, ICP-profile implications of the CAIO paid tier) belongs to the next weekly Coordinator sync. Flagged there.

## IN-PROGRESS (being produced this run)

| # | Type | Item | Score | Status |
|---|------|------|-------|--------|
| 1 | onpage | Add sitewide `Course`/`LearningResource` + `BreadcrumbList` JSON-LD to all lesson pages across all 9 published tracks | 5x5/2 = 12.5 (was 4x5/2=10 when scoped to 1 track; raised on the 9x scope increase) | **in-progress this run: implementing on branch, PR to follow.** Unblocks `llms.txt` (raw score 16, deferred until this lands per the 2026-06-04 backlog note). |

## IDEAS (queued, not yet ranked for execution)

> Indicative scores. A future intel brief may reorder these. Notes indicate which brief promoted each.

- onpage: Stand up the governance/"deploying AI wrong" AEO answer (query #5, "How do I use AI at work without causing a data or governance incident?"): ~5x5/2 = 12.5. Brief 2026-06-03 query #5 + recommended action #3. High-fear, under-served at executive altitude, backed by the survey's 17% data/security barrier and 47% no-productivity-measurement stat. Needs a published lesson to anchor (none exists yet).
- content: "What should CHROs tell their employees about AI?" (the internal communication gap): ~5x4/2 = 10. Brief 2026-06-04, new. 78% of employees already use AI tools; only 13% heard from HR about it (Mercer 2025 HR Tech Report). No incumbent answers this at hands-on, non-governance altitude. Concrete first move a CHRO can own with no budget.
- content: Define "AI fluency" operationally for a time-poor executive (query #8): ~4x5/2 = 10. Brief 2026-06-03 query #8. "AI fluency" is the phrase incumbents use but rarely define operationally.
- content: "AI wage gap: what is it and how do I close it as an individual leader?" (query #3): ~5x4/2 = 10. Brief 2026-06-03 query #3. Our owned brand frame, near-zero direct competition on the individual-leader closing angle. Partially served by `content/tracks/ai-foundations/01-what-is-the-ai-wage-gap.mdx`; check overlap before drafting.
- content: "What should I actually build first with AI?" (the paralysis query): ~5x4/2 = 10. Possible overlap with `content/tracks/ai-foundations/02-your-first-ai-workflow.mdx`; check before drafting.
- content: "Substitute vs augment vs elevate: how to decide which tasks to give AI" (query #4): ~4x4/2 = 8. Our framework phrased as the comparison query. No incumbent owns this exact phrasing.
- content: "AI for the VP of Finance" role playbook: ~4x4/2 = 8. Adjacent ICP; reuses the CHRO lesson structure once READY #2 ships.
- content: "Why aren't HR leaders leading AI adoption in their companies?" (the conviction-anxiety gap query): ~4x4/2 = 8. Brief 2026-06-04. An honest answer that names the fear and reframes it as solvable would rank on the "explains our ICP to themselves" slot.
- onpage: publish `llms.txt` pointing AI crawlers at the best lessons + book/cohort: raw 4x4/1 = 16, effective priority DEFERRED until the sitewide JSON-LD pass (item 1 in IN-PROGRESS) lands so it points at structured, citable pages.
- onpage: add `FAQPage` JSON-LD to the highest-traffic lessons: ~4x4/2 = 8. "Highest-traffic" cannot be chosen honestly until Search Console/Analytics are connected (confirmed blocked).
- onpage: internal-linking pass to build the "AI Wage Gap" topical cluster: ~3x4/2 = 6.
- onpage: per-lesson OG images via next/og: ~3x3/3 = 3. Distribution polish, low AEO value.
- content: refresh remaining lessons with TLDR/Pullquote/Stat (rollout from the 3 already done): ~3x3/3 = 3. Throughput/consistency, not new demand capture.
- content: build-protocol "How I built learn.portlev.com": HELD pending Yuri's go on the protocol section.
- infrastructure: connect Search Console + analytics + beehiiv read + AEO-citation routine. Not ICP-scored (enabler, not demand capture), but the top blocker per brief action #6: until it lands, every outcome metric stays "not connected." Owned by Coordinator (06), flagged for Yuri. Partially addressed during the gap (Search Console metrics reader shipped, commit `51c59b8`); Coordinator to re-check `metrics.md` checklist.

## DRAFTED, AWAITING HUMAN PUBLISH

- content: "Is AI Going to Take My Executive Job?" (`content/tracks/ai-foundations/04-is-ai-going-to-take-my-executive-job.mdx`), `status: draft` since 2026-06-04, unchanged this run. Two open items from the 2026-06-04 decisions-log entry: (1) [VERIFY]-flagged SHRM "5.7x" stat, now supersedable by the primary-sourced CHRO Association 91% stat from `2026-07-13.md`; (2) no Pullquote used, now potentially resolvable against the 48-quote verified quote bank that shipped during the gap. Flagged for content agent's next run, not touched today (today's single pick was onpage).

## SHIPPED (dedup guard; coordinator moves items here)

- content: "Your First Hour with Claude, for Busy Executives" (published 2026-06-03)
- content: "The Enterprise AI Deployment Protocol" (published 2026-06-03)
- format: TLDR / Pullquote / Stat components + retrofit of 3 foundational lessons (2026-06-03)
- content: "What a CHRO Should Do First with AI (Without Handing It to IT)", published by Yuri, commit `ef8dbfc`, 2026-06-04. ICP panel verdict: PASS (strong fit for persona 01, partial fit for persona 03). Level corrected from advanced to intermediate. Dual handoff link added for personas 01 and 03.
- onpage: FAQPage JSON-LD + direct-answer Callout on "Your First Hour with Claude" (PR #2, rebased and merged by Yuri during the gap).
- infrastructure: Search Console metrics reader (zero-dep service-account JWT), commit `51c59b8`, shipped during the gap.
- content: format revamp passes 1 and 2 (~21 lessons retrofitted with TLDR/Pullquote/Stat) + verified quote bank (48 verbatim quotes), shipped during the gap.
- commercial: Fractional CAIO course, Authority Stack landing, Programs hub (`aab576b`, `60c9c5a`, `398804c`), shipped during the gap, out of `content/tracks/` scope.

## KILLED

_(none yet)_
