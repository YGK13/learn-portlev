# Growth OS Backlog

> Owned by Agent 02 (Strategy). Re-ranked daily. Status: idea | ready | in-progress | shipped | killed.
> Score = ICP impact (1-5) x intent/AEO value (1-5) / effort (1-5). Higher is better.

_Last re-ranked: 2026-06-04 (Agent 02 daily run, second real-intel re-rank)_

## Intel status for this run

Today's brief (2026-06-04) added two findings that reshape the IDEAS queue but do not displace the top two READY items:

1. **The conviction-anxiety gap** (new naming from AMS/Reworked.co): CHROs believe AI is essential (80% in a Jan 2026 survey of 300) but freeze on personal commitment due to job-security fear. The 2026-06-03 content draft maps onto this directly; carry it forward as in-progress.
2. **The internal communication gap** (new from Mercer 2025 HR Tech Report): 78% of employees are already using AI tools; only 13% heard anything from HR. No incumbent addresses "what should CHROs tell employees about AI?" at a hands-on, non-governance level. New IDEAS entry added below.
3. **Structural risk data** (new from Bersin/Findem, cited in HR Dive, January 28, 2026): average CHRO tenure fell from 6 to 4.8 years; 42% move to lower-level roles post-tenure. Reinforces the seat-shrinking anxiety underpinning READY #2; no re-ranking needed.

The top onpage item (AEO answer block on the first-hour lesson) is being produced in this run. The content item is already in-progress. Rankings unchanged from 2026-06-03 except status updates below.

## IN-PROGRESS (being produced this run)

| # | Type | Item | Score | Status |
|---|------|------|-------|--------|
| 1 | onpage | Add AEO answer block (concise direct-answer lede + `FAQPage` JSON-LD) to the published "Your First Hour with Claude" lesson, targeting "How does a non-technical executive actually start using AI in one hour?" | 5x5/1 = 25 | **in-progress: branch aeo/first-hour-faq-schema, PR opened 2026-06-04 by Agent 04** |
| 2 | content | "What a CHRO should do first with AI (without handing it to IT)" | 5x5/2 = 12.5 | **in-progress: drafted 2026-06-03, file `content/tracks/leading-ai-adoption/07-what-a-chro-should-do-first-with-ai.mdx`, status: draft, awaiting human publish** |

## IDEAS (queued, not yet ranked for execution)

> Indicative scores. A future intel brief may reorder these. Notes indicate which brief promoted each.

- onpage: Stand up the governance/"deploying AI wrong" AEO answer (query #5, "How do I use AI at work without causing a data or governance incident?"): ~5x5/2 = 12.5. Brief 2026-06-03 query #5 + recommended action #3. High-fear, under-served at executive altitude, backed by the survey's 17% data/security barrier and 47% no-productivity-measurement stat. Needs a published lesson to anchor (none exists yet).
- content: "What should CHROs tell their employees about AI?" (the internal communication gap): ~5x4/2 = 10. Brief 2026-06-04, new. 78% of employees already use AI tools; only 13% heard from HR about it (Mercer 2025 HR Tech Report). No incumbent answers this at hands-on, non-governance altitude. Concrete first move a CHRO can own with no budget.
- content: Define "AI fluency" operationally for a time-poor executive (query #8): ~4x5/2 = 10. Brief 2026-06-03 query #8. "AI fluency" is the phrase incumbents use but rarely define operationally.
- content: "AI wage gap: what is it and how do I close it as an individual leader?" (query #3): ~5x4/2 = 10. Brief 2026-06-03 query #3. Our owned brand frame, near-zero direct competition on the individual-leader closing angle. Partially served by `content/tracks/ai-foundations/01-what-is-the-ai-wage-gap.mdx`; check overlap before drafting.
- content: "Is AI going to take my executive job?" (anxiety query, AI Wage Gap reframe): ~5x5/2 = 12.5. Strongest emotional driver. Held below the CHRO-first lesson because role+first-action is more bottom-funnel.
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

## KILLED

_(none yet)_
