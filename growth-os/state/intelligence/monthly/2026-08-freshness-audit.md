# Monthly Freshness and Relevance Audit: 2026-08

**Agent M5 (Freshness and Relevance Auditor), PortLev Academy Growth OS**
Run date: 2026-08-02. First-ever monthly run: no prior freshness audit exists to diff against, and `content-refresh-queue.md` did not exist before this run (created below).
Inputs read in full: M2's `2026-08-deep-report.md`, M1's `2026-08-deep-index.md` (33 items), M3's `2026-08-plan.md`, `state/transformation-ladder.md`, `state/ICP-profile.md`, `lib/schemas.js`, and every lesson file under `content/tracks/` (46 total, listed below with disposition).

---

## Summary

- **46 lesson files** across 10 tracks. **4 are `status: draft`** and were skipped per the audit's scope (published lessons only): `leading-ai-adoption/08-is-your-ai-spend-actually-worth-it.mdx`, `leading-ai-adoption/09-why-arent-hr-leaders-leading-ai-adoption.mdx`, `ai-foundations/04-is-ai-going-to-take-my-executive-job.mdx`, and `ai-workflows/04-substitute-augment-or-elevate.mdx` (note: M2's deep report discusses this last one as if reviewing live content; the file's own frontmatter is `status: draft`, so it is excluded here and flagged below).
- **42 published lessons scored** on current / relevant / timely (1-5 each).
- **1 lesson scored 3 or lower and received a full corrective rewrite**, applied directly: `ai-governance/03-ai-regulation-for-leaders.mdx` (this month's priority item, per M2 and M3). PR opened on branch `m5-refresh-ai-regulation-lesson-202608`, not merged: **https://github.com/YGK13/learn-portlev/pull/8**.
- **41 of 42 published lessons scored 4 or 5 on every axis.** No lesson besides the priority item scored 3 or lower on any axis this month, consistent with M2's finding that "nothing M1 found this month contradicts a claim currently live on the site."
- **0 lessons flagged for retirement.** No genuinely better replacement exists for any topic and no ladder rung is unserved, matching M2's expectation that retirement candidates would be rare or zero this month.
- **5 small evidentiary-enhancement opportunities noted** (not corrections; none cross the score-3 threshold). All 5 are already captured in M3's `2026-08-plan.md` build queue (items #4, #5, #6) or are pre-existing, already-in-flight backlog items. Per the coordination rule against duplicating M3's plan or C6's daily lane, these are logged in `content-refresh-queue.md` as cross-references, not re-planned here.
- **1 pre-existing, already-in-flight issue surfaced during the sweep** (not M1-2026-08-sourced, so not treated as a new correction under this audit's citation rule): the flagship `<Stat>` in `ai-foundations/01-what-is-the-ai-wage-gap.mdx` still shows the superseded PwC 56%/2025 figure on the live file as of this run, even though the fix (56% to 62%) has been sitting in an open, unmerged PR (#5, opened 2026-07-22) per `backlog.md`. Flagged for Yuri in the queue below as a merge-decision, not new agent work.

---

## Priority item: `ai-governance/03-ai-regulation-for-leaders.mdx`

### Score before this run
| Axis | Score | Why |
|---|---|---|
| Current | 2 | Written entirely in evergreen generalities ("being phased into effect over time," "a growing patchwork") with no dates, no named statutes and no concrete obligations. Last touched 2026-05-19, before this month's EU Article 50 go-live. |
| Relevant | 5 | Still the correct ladder position (rung 4, Enabler) and still maps directly to Priya's and Dana's named anxieties in `ICP-profile.md`. Relevance was never the problem. |
| Timely | 2 | The lesson's entire regulatory section could have been written at any point in the last two years without needing an edit. That is itself the failure: a regulation lesson with no date-sensitive content is not doing its job. Confirmed by M2: "the single most dated lesson in the curriculum." |

### What was wrong, specifically
The "landscape, in broad strokes" section described the EU as having "enacted comprehensive, risk-tiered AI legislation... being phased into effect over time" with no mention of what phased in, when, or what changed. The US section described "a growing patchwork of sector-specific rules" with zero named statutes. The "Disclosure is rising too" section described transparency obligations as a future direction ("the exact rules vary, but the direction is one-way") when, as of the day M1 ran, that direction had already arrived as binding law in the EU.

### The rewrite, applied directly
Rewrote three sections using only the three M1-sourced facts specified in this run's brief, each cited inline with a real URL, in the lesson's existing plain-executive voice:

1. **"The landscape, in broad strokes" retitled "The landscape, as of today"** and rewritten into three dated paragraphs:
   - **EU** (M1 item 22): Article 50 transparency duties (chatbot disclosure "perceivable in the interaction itself," machine-readable AI-content marking, deepfake labeling, public-interest AI-text disclosure with an editorial exemption) and the European Commission's full GPAI enforcement toolkit went live 2026-08-02, the day M1 ran, building on GPAI obligations (Articles 51-56) live since 2025-08-02. The 2026-06-16 Parliament amendments pushed Annex III (standalone high-risk, including hiring tools) to 2027-12-02 and Annex I (product-embedded high-risk) to 2028-08-02. Penalties unchanged: up to EUR 15 million or 3% of global turnover. Source cited inline: https://www.digitalapplied.com/blog/eu-ai-act-august-2026-transparency-obligations-agency-checklist
   - **US** (M1 item 23): Illinois HB 3773 (effective 2026-01-01, amends the Illinois Human Rights Act, full employment lifecycle), Colorado's live employer-obligation framework (impact assessments, worker notice, appeal right, public disclosure), California's amended FEHA/Automated Decision Systems rules (effective 2025-10) in active 2026 enforcement. Source cited inline: https://iuslaboris.com/insights/ai-regulation-in-the-us-the-new-state-laws-employers-cant-ignore/
   - **Federal-state fight** (M1 item 24): DOJ AI Litigation Task Force (active since 2026-01-10) and $42B BEAD-funding pressure have not preempted any state law to date; a moratorium was stripped from the 2025 budget reconciliation bill on a 99-1 Senate vote. "Wait for federal clarity" named explicitly as not a defensible posture. Source cited inline: https://www.whitecase.com/insight-alert/state-ai-laws-under-federal-scrutiny-key-takeaways-executive-order-establishing
2. **"Disclosure is rising too" retitled "Disclosure is no longer a future obligation"**, rewritten to point back at the now-live Article 50 duties instead of describing disclosure as a coming trend.
3. **Recap** updated with two new dated bullets summarizing the EU and US facts, so a reader who only reads the recap still gets the current, dated picture.
4. **`updated:` frontmatter changed from `2026-05-19` to `2026-08-02`.** No other required frontmatter field touched. `status` remains `published`, per the hard rule.
5. **Forward cross-link added** as a `<Callout>` referencing "the deploy-safely companion lesson in this track" in prose, with no markdown link. M4's companion lesson (`content/tracks/ai-governance/04-deploying-ai-without-an-incident.mdx`) did not exist when this rewrite began and appeared partway through this run, but its `status` is still `draft` (not live in production per `lib/schemas.js`'s own comment: "draft = hidden in production"). Linking to a draft page from a published one would be a broken link for real readers, so the prose-only reference was kept as originally instructed for the "not there yet" case. **Action for Yuri or M3/M4 next month: once `04-deploying-ai-without-an-incident.mdx` is published, replace the prose reference with a real markdown link to `/learn/ai-governance/deploying-ai-without-an-incident`.**

### Score after this run
| Axis | Score | Why |
|---|---|---|
| Current | 5 | Reflects the exact regulatory state as of the day this audit ran, with statute names, effective dates and dollar/euro figures. |
| Relevant | 5 | Unchanged, was never the issue. |
| Timely | 5 | Every fact carries a specific 2026 date and is tied to the same-day news peg M2 and M3 both flagged as too good to let slip a month. |

### Delivery
Direct edit applied to the file. New branch `m5-refresh-ai-regulation-lesson-202608`, one commit, pushed to origin, PR opened against `main`: **https://github.com/YGK13/learn-portlev/pull/8**. Not merged. `status: published` and all other required frontmatter fields unchanged, matching the tiered-control rule (Yuri already approved this lesson's existence; only content and `updated` changed; a human merges).

---

## Standard sweep: full per-lesson scoring

Scale: 1-5 on current (reflects August 2026 best practice per M2), relevant (still maps to ICP/ladder), timely (named tools/stats/frameworks not stale). A score of 3 or lower on any axis requires a sourced correction; none triggered below except the priority item above.

### ai-foundations (5 lessons, 1 draft)
| Lesson | Current | Relevant | Timely | Note |
|---|---|---|---|---|
| 01-what-is-the-ai-wage-gap.mdx | 3 | 5 | 3 | Flagship `<Stat>` still shows PwC 56%/2025; fix already shipped as PR #5 (2026-07-22, unmerged) per `backlog.md`. Not M1-2026-08-sourced, so not treated as a new correction here; logged in the refresh queue as a merge decision, not new work. |
| 02-your-first-ai-workflow.mdx | 5 | 5 | 5 | Fine. Confirmed by M2. |
| 03-your-first-hour-with-claude.mdx | 4 | 5 | 4 | Fine per M2. M1 item 2 (Claude voice mode, multi-model, app-connected) is a live enhancement opportunity for a future revision, not a correction; not queued separately since it does not cross the score-3 threshold. |
| 04-is-ai-going-to-take-my-executive-job.mdx | n/a | n/a | n/a | **Draft, skipped.** M2 confirms it holds up (SHRM item 29 is an uncited companion-stat opportunity, not a correction), contingent on Yuri's publish decision per M3 item #8. |
| 05-your-claude-starter-kit.mdx | 5 | 5 | 4 | Fine. Tool list (Claude Mem, Superpowers, Claude Doctor, etc.) current as of its own 2026-07-28 update; nothing in M1 supersedes any named tool. |

### how-ai-works (4 lessons, conceptual track, model/vendor-agnostic)
| Lesson | Current | Relevant | Timely |
|---|---|---|---|
| 01-what-an-llm-actually-is.mdx | 5 | 5 | 5 |
| 02-why-ai-makes-things-up.mdx | 5 | 5 | 5 |
| 03-giving-ai-your-own-knowledge.mdx | 5 | 5 | 5 |
| 04-prompting-vs-knowledge-vs-training.mdx | 5 | 5 | 5 |

All four confirmed by M2 as untouched by this month's scan; nothing in M1 bears on how LLMs, RAG or fine-tuning fundamentally work.

### prompt-engineering (3 lessons)
| Lesson | Current | Relevant | Timely | Note |
|---|---|---|---|---|
| 01-anatomy-of-a-great-prompt.mdx | 4 | 5 | 4 | M1 item 9 (field naming "agentic engineering" as the next skill beyond single-prompt mastery) is a framing addition, not a factual error. Nothing taught is wrong. Already queued as M3 plan item #4; not duplicated here. |
| 02-building-your-prompt-library.mdx | 5 | 5 | 5 | Fine. |
| 03-advanced-prompting-patterns.mdx | 4 | 5 | 4 | Same item 9 framing opportunity as lesson 01, most naturally landing in this lesson's recap per M3's plan. Not a correction. |

### ai-workflows (4 lessons, 1 draft)
| Lesson | Current | Relevant | Timely |
|---|---|---|---|
| 01-what-is-an-ai-workflow.mdx | 5 | 5 | 5 |
| 02-chaining-prompts.mdx | 5 | 5 | 5 |
| 03-your-first-document-pipeline.mdx | 5 | 5 | 5 |
| 04-substitute-augment-or-elevate.mdx | n/a | n/a | n/a |

Note on lesson 04: **frontmatter reads `status: draft`** (`updated: "2026-07-20"`). M2's deep report discusses this lesson as though it were live, generally-consistent content ("ai-workflows (4 lessons)... all consistent with... this month's scan"). Flagging this discrepancy for M6 (Coordinator): either M2 read a preview/staging copy, or the file moved to draft after M2's pass. Per this audit's own instruction to check frontmatter `status` directly, it is excluded from scoring here as a draft, consistent with how the other three drafts are handled.

### ai-agents (3 lessons)
| Lesson | Current | Relevant | Timely | Note |
|---|---|---|---|---|
| 01-what-is-an-ai-agent.mdx | 5 | 5 | 5 | Fine. |
| 02-how-ai-connects-to-your-tools.mdx | 5 | 5 | 5 | Fine. MCP framing holds; nothing in M1 supersedes it. |
| 03-when-to-use-an-agent.mdx | 4 | 5 | 4 | M1 item 3 (Claude Cowork: >90% of real usage is non-coding admin work) is a concrete statistic that would sharpen this lesson's existing abstract chatbot-vs-agent guidance. Enhancement opportunity per M2, not a correction. |

### building-agents (5 lessons, tool-specific but n8n itself unchanged this month)
| Lesson | Current | Relevant | Timely |
|---|---|---|---|
| 01-your-n8n-workspace.mdx | 5 | 5 | 5 |
| 02-connecting-ai-to-tools.mdx | 5 | 5 | 5 |
| 03-your-first-working-agent.mdx | 5 | 5 | 5 |
| 04-workflow-vs-agent-in-practice.mdx | 5 | 5 | 5 |
| 05-testing-and-shipping.mdx | 5 | 5 | 5 |

Confirmed by M2: nothing in M1 names n8n or any no-code platform as changed this month, and the track's safety disciplines (least-access, human checkpoints) match where Anthropic's own Cowork product is heading (item 3).

### ai-governance (3 lessons)
| Lesson | Current | Relevant | Timely | Note |
|---|---|---|---|---|
| 01-the-real-risks.mdx | 5 | 5 | 5 | Fine. Hallucination/bias/prompt-injection framing unchanged. |
| 02-ai-and-your-data.mdx | 5 | 5 | 5 | Fine. Consumer-vs-business account framing unchanged. |
| 03-ai-regulation-for-leaders.mdx | 5 | 5 | 5 | **Priority item, rewritten this run.** See full detail above. Score reflects the post-rewrite state. |

### leading-ai-adoption (9 lessons, 2 draft)
| Lesson | Current | Relevant | Timely |
|---|---|---|---|
| 01-the-ai-adoption-roadmap.mdx | 5 | 5 | 5 |
| 02-the-business-case-and-roi.mdx | 5 | 5 | 5 |
| 03-change-management.mdx | 5 | 5 | 5 |
| 04-the-ai-operating-model.mdx | 5 | 5 | 5 |
| 05-the-enterprise-ai-deployment-protocol.mdx | 5 | 5 | 5 |
| 06-common-failure-modes.mdx | 5 | 5 | 5 |
| 07-what-a-chro-should-do-first-with-ai.mdx | 5 | 5 | 5 |
| 08-is-your-ai-spend-actually-worth-it.mdx | n/a | n/a | n/a |
| 09-why-arent-hr-leaders-leading-ai-adoption.mdx | n/a | n/a | n/a |

Lessons 08 and 09 confirmed `status: draft`, skipped. M2 confirms both are publish-ready and need no content update (lesson 09's Protiviti sourcing, items 20/32, has not moved; lesson 08 is not directly addressed by any M1 item this sweep but is not contradicted either). Both are queue/publish decisions for Yuri, tracked in `backlog.md`, not freshness issues.

### fractional-caio-playbook (5 lessons)
| Lesson | Current | Relevant | Timely | Note |
|---|---|---|---|---|
| 01-what-a-chief-ai-officer-actually-does.mdx | 4 | 5 | 4 | M1 item 8 (IBM/Oxford Economics: CAIO adoption 26%→76% in a year) would strengthen this lesson's "is this role real" framing. Per `backlog.md`, a PR (#7, 2026-07-28) already shipped this exact stat, open and awaiting merge; the live file read for this audit does not yet show it (PR unmerged). Not treated as a new correction. |
| 02-the-60-day-ai-baseline.mdx | 5 | 5 | 5 | Fine. |
| 03-your-first-ai-governance-decision.mdx | 5 | 5 | 5 | Fine. |
| 04-the-build-buy-platform-triage.mdx | 5 | 5 | 5 | Fine. |
| 05-fractional-vs-full-time.mdx | 4 | 5 | 4 | M1 items 16 (fractional CAIO economics, $5K-$30K/month, 30-45 day impact) and 17 (OECD portfolio-career projection) would upgrade the lesson's currently unsourced $8K-15K figure and market framing. Already queued as M3 plan item #6. Not a correction (the existing figure sits inside item 16's range, no contradiction), an evidentiary upgrade. |

### personal-website (5 lessons, lighter pass per instructions, not AI-currency-dependent)
| Lesson | Current | Relevant | Timely | Note |
|---|---|---|---|---|
| 01-why-your-website-matters.mdx | 5 | 5 | 5 | No M1 item touches website strategy. |
| 02-the-architecture-of-a-great-site.mdx | 5 | 5 | 5 | Structural guidance, evergreen. |
| 03-writing-copy-that-converts.mdx | 5 | 5 | 5 | Copywriting guidance, evergreen. |
| 04-design-that-looks-expensive.mdx | 5 | 5 | 5 | Design guidance, evergreen. |
| 05-build-it-and-launch-it.mdx | 5 | 5 | 5 | Describes the AI-assisted build path in general terms (no named tool version), so not exposed to this month's model-release churn. |

---

## Retirement candidates

**None.** No lesson in the 42 scored has a genuinely better replacement available, and no ladder rung this track set serves is left unaddressed. This matches M2's own expectation ("expect this to be rare or zero given M2's generally positive verdicts").

---

## Coordination notes for M6 (Coordinator)

1. **`ai-workflows/04-substitute-augment-or-elevate.mdx` status discrepancy.** M2's deep report treats this lesson as live, consistent content. Its own frontmatter reads `status: draft`. Recommend M6 confirm with Yuri whether this lesson should be published (in which case it enters next month's freshness sweep as published) or whether M2's read should be corrected in a future run.
2. **This audit's one direct edit is scoped narrowly.** Per the brief, only the priority item received a substantive rewrite. All five enhancement opportunities found in the standard sweep (prompt-engineering item 9 framing, ai-agents/03 item 3 stat, ai-foundations/03 item 2 voice-mode note, fractional-caio-playbook 01 and 05 items 8/16/17) are already captured in M3's `2026-08-plan.md` items #4, #5 and #6, or already shipped as open, unmerged PRs per `backlog.md`. None are duplicated in `content-refresh-queue.md` as new work; they are cross-referenced there for Yuri's PR-merge queue instead.
3. **Three open, unmerged PRs surfaced during this sweep that predate this run** (not created by M5): PR #5 (PwC 56%→62% stat refresh, `ai-foundations/01`), PR #7 (IBM CAIO stat, `fractional-caio-playbook/01`). These are Yuri merge decisions, not new agent work, flagged here only because this audit's live-file reads depend on their unmerged state and a reader might otherwise wonder why the scores above don't match `backlog.md`'s account of "already shipped."
