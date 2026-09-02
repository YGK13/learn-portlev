# Freshness and Relevance Audit, September 2026 (Agent M5)

**Run date:** 2026-09-01. Second monthly run.
**Scope:** all 42 published lessons across 10 tracks under `content/tracks/`. The 6 draft lessons (`ai-foundations/04`, `ai-foundations/06`, `ai-workflows/04`, `ai-governance/04`, `leading-ai-adoption/08`, `leading-ai-adoption/09`) are out of scope per frontmatter `status: draft`, consistent with last month's M5 handling.
**Inputs:** `2026-09-deep-report.md` (M2), `2026-09-deep-index.md` (M1, 32 sourced items across 6 sweeps), `transformation-ladder.md`, `ICP-profile.md`, `content-refresh-queue.md` (read first to avoid duplicating the daily Refresh agent C6's lane).

---

## Summary

**Counts by axis (lessons scoring 3 or lower):**

| Axis | Count | Lessons |
|---|---|---|
| Current | 3 | `prompt-engineering/01`, `prompt-engineering/03`, `ai-governance/03` |
| Relevant | 0 | none |
| Timely | 3 | `ai-foundations/01`, `ai-governance/03`, `fractional-caio-playbook/05` |
| **Distinct lessons flagged (any axis ≤3)** | **5** | see corrections below |

**Overall verdict:** consistent with M2's read, the curriculum is in genuinely strong shape two months running. Nothing in September's field scan contradicts a claim currently live on any published lesson. Of the 42 lessons, 37 score 4 or 5 on all three axes. The 5 flagged lessons are gaps and staleness, not factual errors: two are already tracked in `content-refresh-queue.md` awaiting a Yuri PR-merge decision (not new work); one has an already-queued but under-cited framing gap that this month's M1 sweep independently confirms a second and third time; one is a genuinely new, high-priority correction; and one is a pre-existing blocked citation issue re-checked against this month's evidence and still blocked.

**Highest-priority correction: `ai-governance/03-ai-regulation-for-leaders.mdx`.** Unchanged since 2026-05-19, described by M2 as "the single most dated lesson in the curriculum" two months running, and the only lesson in this sweep scoring 2 or lower on any axis. This month supplies two fresh, dated, real-deadline replacement facts (California SB 942, operative 2026-08-02, $5,000/violation/day penalty; Colorado ADMTA draft rules, public comment open through 2026-10-26) that were not available when last month's PR #8 was drafted. Full correction below. This is a substantive rewrite, logged to the queue for M3/M4, not applied directly.

No lesson is flagged for retirement this cycle. No topic in the curriculum has stopped serving the transformation ladder.

---

## Scoring methodology

Each lesson is scored 1-5 on:
- **Current**: does the content reflect this month's best practice, per `2026-09-deep-report.md`.
- **Relevant**: does it still map to the ICP (`ICP-profile.md`) and its stated ladder rung (`transformation-ladder.md`).
- **Timely**: are named tools, stats and frameworks not stale.

A score of 3 or lower on any axis triggers a correction proposal below the table, sourced to a specific M1 item with a real URL, per the hard rule against "vibes" refreshes.

---

## ai-foundations (4 published lessons)

| Lesson | Current | Relevant | Timely | Rationale |
|---|---|---|---|---|
| 01 What Is the AI Wage Gap | 4 | 5 | **3** | Thesis reinforced by Sept pricing news (Sonnet 5 permanent low rate, open-weight commoditization), but the flagship `<Stat value="56%">` still cites PwC's 2025 figure, superseded by the 62%/2026 figure since 2026-07-22. Fix (PR #5) exists and is unmerged. See correction 1. |
| 02 Your First AI Workflow | 5 | 5 | 5 | Workflow-building mechanics untouched by anything in the September field scan. |
| 03 Your First Hour with Claude | 5 | 5 | 4 | Core protocol unchanged and unchallenged. A voice-mode callout addition (PR #11) shipped 2026-08-05 and remains open, unmerged; not a new finding. |
| 05 Your Claude Starter Kit | 4 | 4 | 4 | GitHub tool list (Claude Mem, Superpowers, Claude Doctor, etc.) was not independently re-verified by M1 this month. No specific staleness found, but link-heavy tool-list content decays fastest of any format on the site and was outside this month's six sweeps. Flagging for a link-check pass, not a correction (nothing scored 3, held at 4 across the board deliberately since no M1 evidence exists either way this month). |

---

## how-ai-works (4 published lessons)

| Lesson | Current | Relevant | Timely | Rationale |
|---|---|---|---|---|
| 01 What an LLM Actually Is | 5 | 5 | 4 | Core mental model (prediction engine, tokens, context window, training cutoff) untouched. Doesn't yet cover Sept's context-compaction research (M1 Sweep 2 item 4), a real enrichment, not an error. |
| 02 Why AI Makes Things Up | 5 | 5 | 5 | Hallucination mechanism and defenses unchallenged. |
| 03 Giving AI Your Own Knowledge | 5 | 5 | 5 | RAG pattern and vendor-evaluation questions unchallenged. |
| 04 Prompting vs. Knowledge vs. Training | 5 | 5 | 5 | Three-lever framework unchallenged. |

---

## prompt-engineering (3 published lessons)

| Lesson | Current | Relevant | Timely | Rationale |
|---|---|---|---|---|
| 01 The Anatomy of a Great Prompt | **3** | 5 | 4 | Role/Task/Context structure is genuinely current technique. But the lesson does not name verification and direction as the necessary skill beyond prompt construction, a gap M2 calls "confirmed, recurring" this month, up from a single-source framing note last month. Already queued (item 1); see correction 2 below (citation upgrade, not a new item). |
| 02 Building Your Prompt Library | 4 | 5 | 5 | Library discipline (name, version, purpose, input spec) unchallenged. |
| 03 Advanced Prompting Patterns | **3** | 5 | 4 | Chain-of-thought, few-shot and structured role-play remain genuinely current. Same gap as lesson 01: Pattern 3 (adversarial role-play) is, per M2, "in substance already a verification technique, just not named as one." Already queued (item 1); see correction 2. |

---

## ai-workflows (3 published lessons; lesson 04 is draft, out of scope)

| Lesson | Current | Relevant | Timely | Rationale |
|---|---|---|---|---|
| 01 What Is an AI Workflow | 5 | 5 | 5 | Thesis (chaining beats single-prompt work) independently reinforced a third time by MIT Sloan's September "Stop Prompting AI" piece. |
| 02 Chaining Prompts | 5 | 5 | 5 | Three chaining patterns and failure modes unchallenged. |
| 03 Your First Document Processing Pipeline | 5 | 5 | 5 | Extract/Analyze/Transform framework unchallenged. |

---

## ai-agents (3 published lessons)

| Lesson | Current | Relevant | Timely | Rationale |
|---|---|---|---|---|
| 01 What Is an AI Agent | 5 | 5 | 5 | Chatbot-vs-agent distinction and observe-think-act loop unchallenged. Claudeforce (Sept, Salesforce+Anthropic) is a fresh illustrative example already logged as DONE in the queue for lesson 03, not lesson 01. |
| 02 How AI Connects to Your Other Software | 5 | 5 | 4 | MCP explanation solid and still accurate. Gemini-in-Chat and Claudeforce (both Sept) are fresh, uncited examples of the "AI disappearing into tools you already use" pattern this lesson's leak categories already cover in principle. |
| 03 When to Use an Agent | 4 | 5 | 4 | "Match autonomy to stakes, set the boundary in advance" governing principle holds and is not contradicted. Does not address Ethan Mollick's "Twilight Factory" pattern (M1 Sweep 2 item 3, new this month): a facilitator agent deciding in real time when to loop in a human, a dynamic variant distinct from the lesson's static, leader-set threshold. Enrichment opportunity, new to the queue; see item 9 below. |

---

## building-agents (5 published lessons)

| Lesson | Current | Relevant | Timely | Rationale |
|---|---|---|---|---|
| 01 Your n8n Workspace | 5 | 5 | 5 | Unchallenged. |
| 02 Connecting AI to Your Real Tools | 5 | 5 | 5 | Credential/tool-node model unchallenged. |
| 03 Your First Working Agent | 5 | 5 | 5 | Unchallenged. |
| 04 Workflow vs. Agent in Practice | 5 | 5 | 5 | Decision test unchallenged. |
| 05 Testing, Monitoring and Shipping It | 4 | 5 | 4 | Edge-case testing, error handling and human-checkpoint discipline solid. Does not name concrete cost-governance controls (Google Cloud's spend caps and budget alerts, M1 Sweep 1 item 7) as their own checkpoint alongside error-handling, an enrichment M2 flags this month as a hands-on-track and leadership-track tie-in opportunity. |

---

## ai-governance (3 published lessons; lesson 04 is draft, out of scope)

| Lesson | Current | Relevant | Timely | Rationale |
|---|---|---|---|---|
| 01 The Real Risks | 4 | 5 | 4 | Hallucination/bias/prompt-injection framing and "a named human stays accountable" principle hold. Does not yet address HBR's September finding that AI-generated narratives degrade human judgment even when a human remains the final decision-maker (M1 Sweep 5 item 1), a real complication to the lesson's own answer, not a contradiction of it. |
| 02 AI and Your Data | 5 | 5 | 4 | Account-tier model (consumer vs. business/enterprise) remains the correct operational answer. Claude's unified opt-in memory categories and Gemini-in-Chat (both Sept, M1 Sweep 1 items 3 and 6) are fresh, uncited illustrations of the exact points the lesson already makes. |
| **03 AI Regulation Every Leader Should Know** | **2** | 4 | **1** | Unchanged since 2026-05-19. The "landscape, in broad strokes" section names no state, no penalty figure and no date anywhere. Named "the single most dated lesson in the curriculum" two months running by M2, now with a hard external deadline attached. See correction 3, the highest-priority item in this audit. |

---

## leading-ai-adoption (7 published lessons; lessons 08 and 09 are draft, out of scope)

| Lesson | Current | Relevant | Timely | Rationale |
|---|---|---|---|---|
| 01 The AI Adoption Roadmap | 5 | 5 | 5 | Four-stage model untouched by anything in the September scan. |
| 02 The Business Case and Measuring ROI | 4 | 5 | 4 | Vanity-metrics warning and kill-criterion discipline strongly re-validated by four independent September surveys (McKinsey, Accenture, EY, SHRM), none of which the lesson currently cites. Enrichment opportunity, new to the queue; see item 10 below. |
| 03 Change Management | 4 | 5 | 4 | Five-cause diagnostic (fear, habit, no time, no skill, no permission) holds. Does not separate manager readiness from individual-employee adoption as its own failure point, a gap two independent September sources now quantify (Gallup CHRO Roundtable, SHRM HR Technology Trends). Enrichment opportunity, new to the queue; see item 11 below. |
| 04 The AI Operating Model | 5 | 5 | 5 | Ownership/policy/toolset/sharing-loop structure unchallenged. |
| 05 The Enterprise AI Deployment Protocol | 5 | 5 | 5 | Six-move protocol and four deployment models unchallenged. |
| 06 The Common Failure Modes | 4 | 5 | 4 | All seven failure modes remain accurate. Gallup's September culture-wash finding (24% improved, 25% worsened, 51% no change, contingent on manager support) would sharpen Failure Mode 7 by naming managers specifically, not yet cited. |
| 07 What a CHRO Should Do First with AI | 5 | 5 | 5 | Five-step plan and the 91% CHRO-concern stat hold, unchallenged. |

---

## fractional-caio-playbook (5 published lessons)

| Lesson | Current | Relevant | Timely | Rationale |
|---|---|---|---|---|
| 01 What a Chief AI Officer Actually Does | 4 | 5 | 4 | CAIO-as-accountability-role thesis holds. BCG's September "Agentic Leadership Playbook" (COO-as-orchestrator) is a fresh adjacent-role parallel, not yet cited. |
| 02 The 60-Day AI Baseline | 5 | 5 | 5 | Inventory/policy-floor/pilot/readout sequence unchallenged. |
| 03 Your First AI Governance Decision | 5 | 5 | 5 | Data-classification grid unchallenged. |
| 04 Build, Buy or Platform: The Triage | 4 | 5 | 4 | Four-question triage holds, strongly reinforced by September open-weight pricing news (DeepSeek-V4-Pro, Qwen3.8-Flash-Next) and IMD's "model-year pricing" framing, neither cited yet. |
| 05 Fractional vs Full-Time | 4 | 4 | **3** | The $8K-15K/month retainer band is used only as positioning language, not asserted as a sourced market figure inside the lesson text, so this is a softer flag than a factual error. The underlying market-sizing citations (M1 items 16 and 17 from a prior month) remain BLOCKED per queue item 5, re-checked 2026-08-13, block still stands. No new M1 evidence this month to unblock it. Not a new finding; flagged for completeness only. |

---

## personal-website (5 published lessons)

| Lesson | Current | Relevant | Timely | Rationale |
|---|---|---|---|---|
| 01 Why Your Website Is Your Highest-Leverage Asset | 5 | 5 | 5 | Not AI-field-dependent. Confirmed a second consecutive month; no M1 item touches this track. |
| 02 The Architecture of a World-Class Personal Site | 5 | 5 | 5 | Same. |
| 03 Writing Website Copy That Converts | 5 | 5 | 5 | Same. |
| 04 Design That Looks Expensive | 5 | 5 | 5 | Same. |
| 05 Build It and Launch It | 5 | 5 | 5 | Same. |

---

## Corrections (lessons scoring 3 or lower)

### Correction 1: `ai-foundations/01-what-is-the-ai-wage-gap.mdx` (Timely: 3)

**Not new work.** This is the pre-existing PwC 56%/2025-to-62%/2026 stat swap, already verified, already drafted as **PR #5** (opened 2026-07-22), already logged in `content-refresh-queue.md` item 6 as a pending Yuri PR-merge decision. Confirmed still open and unmerged as of this run (frontmatter `updated: "2026-05-18"` unchanged). No new queue entry added. **Action: Yuri merges PR #5.**

### Correction 2: `prompt-engineering/01-anatomy-of-a-great-prompt.mdx` and `03-advanced-prompting-patterns.mdx` (Current: 3 each)

**Citation upgrade to an already-queued item, not a new entry.** Queue item 1 (opened 2026-08-02 M5 run) proposed a one-paragraph framing note citing a single August item (M1 item 9, "agentic engineering" naming). This month's M1 index independently confirms the same gap two more times:

- M1 Sweep 2 item 2: Simon Willison, "More than just code review," Simon Willison's Weblog, 2026-08-22, https://simonwillison.net/2026/Aug/22/more-than-just-code-review/. Argues verification, not instruction, is the real bottleneck for productive agent use.
- M1 Sweep 5 item 4: Hung Dao, Selina Lehmann, Oguz Acar, Dirk Deichmann, "Stop Prompting AI. Start Directing It," MIT Sloan Management Review, 2026-08-10, https://sloanreview.mit.edu/article/stop-prompting-ai-start-directing-it/. Argues directing agents (context, capabilities, orientation) outperforms conversational prompting.

Per M2: this is now "the most repeated, most independently confirmed gap in this report," escalated from a single-source framing suggestion to a confirmed gap across three sources and two months. The queue entry should be updated to reflect three citations, not one, and its priority raised for M3/M4's next planning pass. See the updated queue item 1 below. Still a substantive addition (a paragraph naming a new skill progression), so it stays queued for M3/M4, not applied directly by this agent.

### Correction 3: `ai-governance/03-ai-regulation-for-leaders.mdx` (Current: 2, Relevant: 4, Timely: 1). Highest priority.

**The lesson today.** The "landscape, in broad strokes" section (Context, second subsection) currently reads:

> "The European Union has enacted comprehensive, risk-tiered AI legislation, the most far-reaching to date, and the clearest example of the tiered model above. It is being phased into effect over time.
>
> The United States has taken a different path: no single comprehensive federal AI law, but a growing patchwork of sector-specific rules and state-level legislation, with particular early activity around AI in hiring and employment."

No state is named. No penalty figure appears. No date appears anywhere in the section. Frontmatter `updated: "2026-05-19"`, unchanged for three and a half months across two consecutive M5 sweeps.

**The correction, sourced:**

- M1 Sweep 4 item 1: California SB 942 (AI Transparency Act) became operative 2026-08-02 (originally set for 2026-01-01, pushed by AB 853). Requires generative-AI providers with 1M+ monthly California users to offer a free public AI-content detection tool, visible manifest-disclosure and hidden machine-readable watermarking. State enforcement up to $5,000 per violation per day, no private right of action. Source: Morgan Lewis, 2026-08-03, https://www.morganlewis.com/pubs/2026/08/new-california-ai-disclosure-rules-become-operative.
- M1 Sweep 3 item 2 (cross-tagged Sweep 4): Colorado AG published draft ADMTA implementing rules 2026-08-11 (SB 26-189, replacing the 2024 Colorado AI Act). Public comment runs through at least 2026-10-26. The underlying law (pre-use notice, 30-day adverse-outcome disclosure, 3-year record retention, human-review rights) takes effect 2027-01-01. Directly touches AI hiring and HR tools. Source: Davis Polk, 2026-08-13, https://www.davispolk.com/insights/client-update/colorado-repeals-and-replaces-landmark-ai-act-publishes-draft-rules-public.

**The rewrite this section needs:** replace the two generic paragraphs above with dated specifics naming at minimum California's SB 942 (with the $5,000/day figure) and Colorado's ADMTA draft-rule comment window (with the 2026-10-26 closing date, framed as a real, actionable deadline for the lesson's own CHRO-in-hiring reader, not a someday concern). The EU AI Act reference can stay as the clearest example of the tiered model, but should carry a specific phase-in date rather than "being phased into effect over time."

**Status note on the existing PR #8:** `content-refresh-queue.md`'s "What is NOT in this queue" section records `ai-governance/03` as last month's M5 priority item, "applied directly, PR #8." The lesson's own frontmatter (`updated: "2026-05-19"`) confirms PR #8 has not been merged, and PR #8 was drafted from last month's evidence set (EU AI Act Article 50 specifics, Illinois/Colorado/California state-law mentions), not this month's SB 942 operative date or the Colorado comment-window deadline. **Recommendation: before Yuri merges PR #8, the daily Content OS (C6) or next M4 run should amend it to add the SB 942 penalty figure and the Colorado 2026-10-26 comment-window deadline, since both post-date PR #8's drafting and are exactly the "dated, specific, actionable" material the lesson still lacks.** This is the single biggest move available this month per M2's own Section 5 verdict, and it is logged as the top queue item below.

---

## Coordination note

Per the standing rule, this file's findings are cross-checked against `content-refresh-queue.md` before writing. Two of the five flagged lessons (`ai-foundations/01`, `fractional-caio-playbook/05`) required no new queue action; both are pre-existing, already-tracked items. One (`prompt-engineering/01` and `03`) required a citation upgrade to an existing item, not a new one. Only `ai-governance/03` is genuinely new priority work this cycle, and it is the same lesson M2 independently names as September's single biggest move. All changes are reflected in `content-refresh-queue.md` in this same run.
