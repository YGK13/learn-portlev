# Content Calendar (Content OS)

> Owned by Agent C2 (Editorial Strategy). Each entry: target query (AEO), ladder rung, next move, destination (6a/6b), funnel stage, primary persona, pillar/cluster. Status: idea | ready | drafting | drafted | published | killed. Every "ready" item has passed the ICP-Member panel at the outline stage.

_Seeded 2026-06-03 from the Growth OS backlog + baseline brief + the transformation ladder. Not yet re-ranked by a live C2 run._

## READY

| Query (AEO) | Rung | Next move | Dest | Funnel | Persona | Pillar/cluster | Status |
|---|---|---|---|---|---|---|---|
| "How do I use AI at work without causing a data or governance incident?" | 4-5 | Build new governance "deploy without an incident" anchor lesson: failure taxonomy + 11-14% pilot-to-production stat (M1-12), Cognizant EMEA AI unit example (M1-13), NIST AI RMF/ISO 42001 tiered framing (M1-14), accountability-for-AI-decisions sub-section (M1-26) | 6b | academy->Book/cohort | 03 | Pillar B / governance ("deploy without an incident" cluster) | ready, M3 2026-08 plan item #1, promoted from IDEAS |
| "What does current EU and US AI regulation actually require of an executive right now?" | 4 | Refresh ai-governance/03-ai-regulation-for-leaders.mdx: replace evergreen generalities with dated EU AI Act Art.50/GPAI enforcement (live 2026-08-02, M1-22), Illinois HB 3773 + Colorado + CA state law specifics (M1-23), federal-preemption-has-not-happened closer (M1-24) | 6b | academy->Book/cohort | 03 | Pillar B / governance (regulation currency) | ready, M3 2026-08 plan item #2, same work session as item #1 |
| "What is AI fluency for a time-poor executive (operationally)?" | 2-3 | Build operational AI-fluency page using Anthropic's Delegation/Description/Discernment/Diligence framework (M1-11), companion to lesson 03 "Your First Hour with Claude"; differentiate vs Anthropic's own course via the site's "one focused hour"/AI Wage Gap frame per backlog crowding flag 2026-07-20 | 6a/6b | academy->Brief | 01/03 | Pillar A / AI fluency defined operationally | ready, M3 2026-08 plan item #3, promoted from IDEAS, resolves backlog crowding down-score |

## IDEAS (from the baseline brief + backlog, pending C2 ranking + ICP-panel outline check)

| Query (AEO) | Rung | Dest | Persona | Notes |
|---|---|---|---|---|
| "AI Wage Gap: how do I close it as an individual leader?" | 1-3 | 6a | 02 | Owned frame; check overlap with existing wage-gap lesson. |
| "Is AI going to take my executive job?" | 1 | 6b | 01 | Strongest emotional driver; wage-gap reframe. |
| "What should I actually build first with AI?" | 2 | 6a/6b | 01/02 | Paralysis query; check overlap with "your first AI workflow". |
| "Substitute vs augment vs elevate: which tasks to give AI?" | 2-3 | 6a/6b | 02/03 | Owned framework as a comparison query. |
| "AI for the VP of Finance: the first 90 days" | 1-2 | 6b | (future persona) | Role playbook; reuses CHRO structure. |
| Build-protocol: "How I built [app] with AI" series | 3 | 6a | 02 | Premium-kit potential; pending Yuri go on the protocol section. |
| "Is prompt engineering still the highest-value AI skill?" | 2-3 | 6a/6b | 01/02 | Framing addition, not a new lesson. M1-9 names "agentic engineering" as the field's current higher-value skill. **SHIPPED 2026-08-02** as a new Recap bullet in prompt-engineering/03-advanced-prompting-patterns.mdx, PR #9, open, not merged. Source re-verified by direct WebFetch (not the search-snippet synthesis M1 relied on): claim traced to a single named guide (Sariful Islam, sarifulislam.com, 2026-01-26), not "multiple guides" as M1's index phrased it, quotes confirmed a match. |
| "Claude vs ChatGPT vs Copilot vs Gemini: which should my team actually use?" | 3-4 | 6b | 01/03 | M1 items 3, 4, 6, 7 show the ICP's org likely already licenses M365 Copilot; add vendor-neutral framing to ai-agents/02 and leading-ai-adoption/08 without abandoning Claude-first hands-on teaching. Soft-blocked on lesson 08's own publish decision. M3 2026-08 plan item #5. |
| "What does a fractional CAIO actually cost and how fast does it pay off?" | 3-6a | 6a | 02 | M1 items 16, 17 supply hard fractional-CAIO pricing/adoption numbers ($5K-30K/mo, 35% adoption rising to 40% by year-end 2026, OECD roughly half of professionals in portfolio careers by 2030) to replace the unsourced $8K-15K claim in fractional-caio-playbook/05. IBM's 76%-CAIO-adoption stat (M1-8) is already shipped to lesson 01 via PR #7, excluded here. M3 2026-08 plan item #6. |
| Cross-link pass: leading-ai-adoption/09, ai-foundations/04 and fractional-caio-playbook/01 (three independent CHRO-anxiety drafts, currently zero cross-links) + pair BCG (M1-15) and MIT Sloan (M1-27) as convergent-evidence citations in leading-ai-adoption/02 or /04 and ai-workflows/04 | 1-5 | 6a/6b | 01/02/03 | Internal-linking action, not a new query. Cross-link half soft-blocked on Yuri's publish decision for lessons 09 and 04; citation-pairing half has no dependency and can run earlier. M3 2026-08 plan item #7. |
| SHRM companion stat for ai-foundations/04 (54% of orgs zero AI-in-HR adoption vs. 92% of CHROs expecting further integration, M1-29) | 1 | 6b | 01 | Minor enhancement, sharpens the existing belief-vs-deployment gap. Fold in whenever Yuri finalizes lesson 04's publish decision. M3 2026-08 plan item #8. |

## DRAFTED (awaiting human publish)
- lesson 07 "What a CHRO Should Do First with AI (Without Handing It to IT)" (status: draft)

## PUBLISHED (dedup guard)
- "Your First Hour with Claude, for Busy Executives"
- "The Enterprise AI Deployment Protocol"
- the 3 retrofitted foundational lessons (TLDR/Pullquote/Stat)
- "What a CHRO Should Do First with AI (Without Handing It to IT)" (lesson 07), published by Yuri, commit `ef8dbfc`, 2026-06-04. **Corrected 2026-08-02 (W31 coordinator sync):** this file's READY table still listed lesson 07 as `status: draft, awaiting publish` more than 8 weeks after it actually published; `backlog.md`'s SHIPPED section had it right the whole time. This file was simply never cross-checked against it. Direct repo grep confirms `status: published` in the live frontmatter. Moved here, removed from READY.

## KILLED
_(none yet)_
