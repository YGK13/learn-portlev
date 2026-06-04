# Growth OS Backlog

> Owned by Agent 02 (Strategy). Re-ranked daily. Status: idea | ready | in-progress | shipped | killed.
> Score = ICP impact (1-5) x intent/AEO value (1-5) / effort (1-5). Higher is better.

_Last re-ranked: 2026-06-04 (Agent 02, second invocation — lesson 07 moved to SHIPPED; new top content item promoted to IN-PROGRESS)_

## Intel status for this run

The second invocation of 2026-06-04 produced two new briefs:
- `2026-06-04.md` (first run, primary): conviction-anxiety gap, CHRO tenure data, internal communication gap
- `2026-06-04-supp.md` (second run, supplemental): competitive landscape for the "is AI going to take my executive job?" query space

Key changes from this invocation:
1. **Lesson 07 published** by Yuri in commit `ef8dbfc` (phase 3 run, June 4). Moved to SHIPPED below.
2. **AEO branch (`aeo/first-hour-faq-schema`) is stale**: the branch was cut before phases 1-3 were committed to main. It is missing all files added in those commits. PR #2 is open. DO NOT MERGE without a rebase. Flagged for Yuri.
3. **New top content item** ("Is AI going to take my executive job?", score 12.5) promoted from IDEAS to IN-PROGRESS. Draft produced this run: `content/tracks/ai-foundations/04-is-ai-going-to-take-my-executive-job.mdx`.

## IN-PROGRESS (being produced this run)

| # | Type | Item | Score | Status |
|---|------|------|-------|--------|
| 1 | onpage | Add AEO answer block (concise direct-answer lede + `FAQPage` JSON-LD) to the published "Your First Hour with Claude" lesson, targeting "How does a non-technical executive actually start using AI in one hour?" | 5x5/1 = 25 | **PR #2 OPEN but STALE — branch `aeo/first-hour-faq-schema` diverged from main (missing phases 1-3 files). Rebase required before merge. Flagged for Yuri.** |
| 2 | content | "Is AI going to take my executive job?" — ai-foundations/04, targeting the CHRO job-security anxiety query; AI Wage Gap reframe; one concrete first move | 5x5/2 = 12.5 | **in-progress: drafted 2026-06-04 (second invocation), file `content/tracks/ai-foundations/04-is-ai-going-to-take-my-executive-job.mdx`, status: draft, awaiting human publish** |

## IDEAS (queued, not yet ranked for execution)

> Indicative scores. A future intel brief may reorder these. Notes indicate which brief promoted each.

- onpage: Stand up the governance/"deploying AI wrong" AEO answer (query #5, "How do I use AI at work without causing a data or governance incident?"): ~5x5/2 = 12.5. Brief 2026-06-03 query #5 + recommended action #3. High-fear, under-served at executive altitude, backed by the survey's 17% data/security barrier and 47% no-productivity-measurement stat. Needs a published lesson to anchor (none exists yet).
- content: "What should CHROs tell their employees about AI?" (the internal communication gap): ~5x4/2 = 10. Brief 2026-06-04, new. 78% of employees already use AI tools; only 13% heard from HR about it (Mercer 2025 HR Tech Report). No incumbent answers this at hands-on, non-governance altitude. Concrete first move a CHRO can own with no budget.
- content: Define "AI fluency" operationally for a time-poor executive (query #8): ~4x5/2 = 10. Brief 2026-06-03 query #8. "AI fluency" is the phrase incumbents use but rarely define operationally.
- content: "AI wage gap: what is it and how do I close it as an individual leader?" (query #3): ~5x4/2 = 10. Brief 2026-06-03 query #3. Our owned brand frame, near-zero direct competition on the individual-leader closing angle. Partially served by `content/tracks/ai-foundations/01-what-is-the-ai-wage-gap.mdx`; check overlap before drafting.
- ~~content: "Is AI going to take my executive job?" (anxiety query, AI Wage Gap reframe): ~5x5/2 = 12.5. Promoted to IN-PROGRESS this run.~~
- content: "What should I actually build first with AI?" (the paralysis query): ~5x4/2 = 10. Possible overlap with `content/tracks/ai-foundations/02-your-first-ai-workflow.mdx`; check before drafting.
- content: "Substitute vs augment vs elevate: how to decide which tasks to give AI" (query #4): ~4x4/2 = 8. Our framework phrased as the comparison query. No incumbent owns this exact phrasing.
- content: "AI for the VP of Finance" role playbook: ~4x4/2 = 8. Adjacent ICP; reuses the CHRO lesson structure once READY #2 ships.
- content: "Why aren't HR leaders leading AI adoption in their companies?" (the conviction-anxiety gap query): ~4x4/2 = 8. Brief 2026-06-04. An honest answer that names the fear and reframes it as solvable would rank on the "explains our ICP to themselves" slot.
- onpage: Add `Course`/`LearningResource` + `BreadcrumbList` JSON-LD to all lesson pages: ~4x5/2 = 10. Strong AEO foundation that makes all lessons machine-parseable and citable. The site-wide JSON-LD pass is the next onpage item after the first-hour answer block ships.
- onpage: publish `llms.txt` pointing AI crawlers at the best lessons + book/cohort: raw 4x4/1 = 16, effective priority DEFERRED until the site-wide JSON-LD pass lands so it points at structured, citable pages.
- onpage: add `FAQPage` JSON-LD to the highest-traffic lessons: ~4x4/2 = 8. "Highest-traffic" cannot be chosen honestly until Search Console/Analytics are connected (confirmed blocked).
- onpage: internal-linking pass to build the "AI Wage Gap" topical cluster: ~3x4/2 = 6.
- onpage: per-lesson OG images via next/og: ~3x3/3 = 3. Distribution polish, low AEO value.
- content: refresh remaining lessons with TLDR/Pullquote/Stat (rollout from the 3 already done): ~3x3/3 = 3. Throughput/consistency, not new demand capture.
- content: build-protocol "How I built learn.portlev.com": HELD pending Yuri's go on the protocol section.
- infrastructure: connect Search Console + analytics + beehiiv read + AEO-citation routine. Not ICP-scored (enabler, not demand capture), but the top blocker per brief action #6: until it lands, every outcome metric stays "not connected." Owned by Coordinator (06), flagged for Yuri.

## SHIPPED (dedup guard; coordinator moves items here)

- content: "Your First Hour with Claude, for Busy Executives" (published 2026-06-03)
- content: "The Enterprise AI Deployment Protocol" (published 2026-06-03)
- format: TLDR / Pullquote / Stat components + retrofit of 3 foundational lessons (2026-06-03)
- content: "What a CHRO Should Do First with AI (Without Handing It to IT)" — published by Yuri, commit `ef8dbfc`, 2026-06-04. ICP panel verdict: PASS (strong fit for persona 01, partial fit for persona 03). Level corrected from advanced to intermediate. Dual handoff link added for personas 01 and 03.

## KILLED

_(none yet)_
