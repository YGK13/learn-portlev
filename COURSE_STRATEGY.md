# PortLev Academy: Course Catalog, Value Ladder and Interactivity Plan

**Date:** 2026-07-06 (revised same day after Ship Gate: structure audit FIX-FIRST, harsh critique FIX-FIRST, both sets of corrections applied)
**Owner:** Yuri Kruman
**Status:** Ready for Yuri's decision on Decision Zero (section 3.0). Ranked by ER30 per MONEY_GUIDE.md. Every paid course carries a Revenue Card. Unverified numbers are flagged, never invented.
**Companion docs:** `STRATEGY.md` (why the site exists), `CONTENT.md` (how content ships). This doc answers: which courses to build next, in what order and how to make the existing tracks interactive.

---

## 1. Executive Summary

Learn.PortLev.com today: 9 free tracks, 36 published lessons, and one paid rung already live. The $2,500 Executive AI Cohort (Forward Achieve) is sold in the nav, the footer and a full `/cohort` page, hosted off-site on ForwardShare. The problem is not a missing rung. It is that $2,500 was collected for a "Fractional CAIO" cohort course (Finesse Blumenthal, 2026-06-27) while the live surface sells a differently named $2,500 "Executive AI Cohort" built on a different framework. Before anything gets built, one decision: one product or two.

Three moves, in strict order:

1. **Decision Zero: reconcile the CAIO offer with the live Executive AI Cohort** (30 minutes, Yuri only). Then point the 40 held outbound emails at whichever single surface wins. This gates everything below.
2. **Ship the winning $2,500 course surface** (rewrite the existing `/cohort` page if the offers converge; new page only if Yuri can justify two $2,500 products to overlapping buyers in one paragraph). Highest ER30 by a wide margin: cash already collected, ~50 prospects queued.
3. **Publish one free feeder track per paid offer and make lessons interactive where it moves the funnel.** The interactivity pilot shipped today on the Prompt Engineering track: knowledge checks, action checklists and copy-to-clipboard prompt exercises, all client-side, no auth, no database, consistent with Phase 1 architecture. It also surfaced and fixed a sitewide bug: next-mdx-remote v6 was silently stripping all JSX attribute expressions, so every FlowDiagram on the live site rendered nothing.

---

## 2. Current State (verified against the repo, 2026-07-06)

### Platform
- Next.js 16, React 19, MDX content in `content/tracks/`, Vercel hosting, beehiiv capture, no auth, no database, no payments on-site.
- 9 tracks, 36 published lessons (37 MDX files, 1 draft). All free, CC-BY. Lesson components: Callout, TLDR, FlowDiagram, Pullquote, Stat, plus today's KnowledgeCheck, ActionChecklist and TryIt.
- Paid surfaces already live: `/cohort` (Executive AI Cohort: Forward Achieve, $2,500 inaugural, 12 weeks, 15 seats, ForwardShare-hosted) and `/book` (AI Wage Gap book page with a working `source="book-waitlist"` beehiiv capture).
- Value ladder per `STRATEGY.md`: free lessons → Leverage Brief → Skool community → Leverage Lab ($49-99/mo, planned) → cohort → fractional work ($20K+).

### The gaps this doc closes
- Two $2,500 offers with different names (Executive AI Cohort vs Fractional CAIO course) and no reconciliation. STRATEGY.md calls the paid rung a third name (CHRO AI Cohort, Maven). Three names, two hosts, one price: a buyer who sees all three will trust none.
- The site bio (`/about`) still says "Fractional CHRO". The #1 offer is a CAIO repositioning; the authority claim breaks the moment a buyer checks the bio.
- No course maps to the AI Wage Gap book's actual framework (AI Portfolio OS) even though the book page publishes an 18-chapter TOC built on it.
- Before today, zero retrieval practice, zero application exercises, zero progress feedback in any lesson.

---

## 3. Paid Course Catalog (ranked by ER30)

Rule applied: no course enters this list without a named buyer or a documented pull signal in MONEY_GUIDE.md. Courses that fail that test are parked in section 4.7.

### 3.0 Decision Zero: RESOLVED by Yuri, 2026-07-07. Two products.

They are two distinct products at two distinct stages of the buyer's journey:

- **Executive AI Cohort (Forward Achieve)**: live 12-week cohort taught in partnership with ForwardShare, for mid-career executives learning to build with AI and stand up their AI Portfolio OS. Earlier in the journey. Stays exactly where it is (`/cohort`, ForwardShare-hosted).
- **The Fractional CAIO Course**: self-serve, $2,500, for executives completely reinventing themselves as Chief AI Officers, not executives learning to use AI. Later in the journey: the buyer already builds with AI and wants the title, the mandate and the fractional book of business. This is the course to build out now, on its own surface (`/caio-course`).

The differentiation paragraph above is the positioning line both surfaces must carry so a visitor self-selects correctly. Each page cross-links the other ("earlier in your journey? / further along?").

Related rulings, same date: the **Beast Score is the public spine and lead magnet** across book, cohort and academy content (dimensions taxonomy still pending from Yuri; do not invent it). The book is **5 parts, 18 chapters** (FACT_GUIDE section 3 updated). FACT_GUIDE additions (BYOCIC + Forbes listing, 4 Conversations, CBM OS verbs) approved and logged.

### 3.1 The Fractional CAIO Course ($2,500/seat): SHIP THE SURFACE FIRST

The course version of the offer that already has cash in the account. Draws directly on verified credentials: 3x CHRO, Fractional CAIO positioning, 10 shipped AI builds, AI model trainer for OpenAI, Meta and Microsoft.

**Revenue Card**

| Field | Value |
|---|---|
| Who pays | Finesse Blumenthal (CPO, ProfitSolv, PAID $2,500 on 2026-06-27) plus ~50 queued prospects (CEO/CFO Tier 1, CHROs-with-AI-mandate Tier 2, Chiefs of Staff Tier 3) |
| Ticket size | $2,500/seat |
| Time-to-cash | 7-21 days email-to-paid (per MONEY_GUIDE line 6b) |
| Evidence of pull | $2,500 collected; 10 CHRO emails sent 2026-06-27; 40 held pending reposition |
| Distribution | Outbound email (new sender domain, 14-day warmup in progress), learn.portlev.com free CAIO track as feeder, the reconciled `/cohort` page per Decision Zero |
| Next dollar | Decision Zero, then release the held 40 emails against the winning surface. Deliver Finesse's seat visibly well in parallel |

**Curriculum spine (8 modules). Rule: every paid module names one artifact the free tracks do not contain. No "paid depth" without naming the deliverable.**

| # | Module | Paid artifact the free reader does not get |
|---|---|---|
| 1 | The CAIO mandate: why boards are asking and what they want | The board-meeting one-pager Yuri uses to frame the mandate |
| 2 | The 60-day defensible AI baseline | The full 60-day baseline plan template (AI HR Pilot methodology), week by week |
| 3 | AI operating model: roles, policy, governance | Yuri's actual AI-use policy template and RACI, ready to adapt, plus the 3 governance decisions that most often go wrong (ProfitSolv-pattern engagement, anonymised) |
| 4 | Build vs buy vs platform decisions | The decision matrix scored against the 10 shipped builds as case material |
| 5 | The AI business case and ROI measurement | The pre-built ROI model spreadsheet, not a lecture about ROI |
| 6 | Running the corporate pilot | The pilot charter and SOW skeleton from a live corporate engagement, anonymised |
| 7 | Positioning yourself as the AI authority internally | The internal-authority playbook drawn from 2,300+ clients coached |
| 8 | The fractional path to market | The $8K-15K/mo retainer positioning kit: offer page copy, pricing logic, first-10-targets worksheet |

**Delivery decision:** on-site gating (Phase 3 auth) is NOT required to start. V1 delivers through the reconciled surface (ForwardShare or drip email plus unlisted lesson URLs plus live calls). Build on-site gating only after 10 paid seats prove the volume. Note: `lib/schemas.js` already carries a `tier: course` enum, but its comment assumes Skool/Maven hosting; update the comment when Decision Zero lands so the plumbing note matches the plan.

### 3.2 Career Beast Mode: The Corporate Program (supports the $62,500 ProfitSolv SOW)

Not a new SKU. The course-ification of the CBM corporate delivery so the ProfitSolv engagement (500 employees, 6 months) scales beyond Yuri's calendar.

**Revenue Card**

| Field | Value |
|---|---|
| Who pays | ProfitSolv (buyer: Finesse Blumenthal, CPO); $62,500 SOW at Board for signature, deadline 2026-07-31 |
| Ticket size | $62,500 (original scope $114K-144K, may re-expand) |
| Time-to-cash | Days-to-weeks pending Board signature |
| Evidence of pull | SOW out for Board signature (per Yuri 2026-06-28); not yet signed, $0 collected |
| Distribution | Direct enterprise deal; course modules are the delivery vehicle, not the acquisition vehicle |
| Next dollar | Board signature. Course build starts the day it signs, not before |

**Trigger discipline:** zero build hours before signature. If signed, the free AI Portfolio OS track (4.2 below) doubles as the public-facing top of this funnel for the next corporate buyer.

**Framework note (from Ship Gate):** the live book page publishes the "AI Portfolio OS" spine (Task Stack Map, AI Skills Edge, Node Density, Portfolio Streams, Money OS). The Career Beast Mode OS verbs (SEE, MEASURE, DESIGN, EXECUTE, SUSTAIN) and Beast Score appear in Yuri's IP but nowhere in live site content, and the Beast Score taxonomy is UNVERIFIED in FACT_GUIDE. Yuri picks one public framework: either CBM becomes the corporate-delivery name for the AI Portfolio OS, or the two are explicitly two frameworks for two products. Book, cohort and feeder track must speak one spine.

### 3.3 The AI Wage Gap Course (book companion): PREP, DO NOT BUILD

The book (5 parts, 18 chapters, 275 pages per the live book page; the global CLAUDE.md says 20 chapters, reconcile which is current) will need a course rung. Today it has no pre-order pipeline and therefore no pull signal.

**Revenue Card status: INCOMPLETE. Fields 1, 3 and 4 are empty.** Per MONEY_GUIDE rules this cannot ship. The only permitted action: route the 4.2 track's end-of-track CTA to the already-live `source="book-waitlist"` capture on `/book` (do not build new capture, it exists), which builds the evidence-of-pull field for later. Revisit when pre-orders or a speaking-driven cohort ask exists.

### 3.4 The Leverage Lab membership ($49-99/mo, planned rung)

Already in `STRATEGY.md` as rung 3. A membership is a retention product and needs a content flywheel plus community mass. Sequencing: launch only after the reconciled $2,500 cohort has run once, so founding members come from alumni instead of cold traffic. No build this month beyond keeping the CTABanner community variant live.

---

## 4. Free Open-Source Track Catalog (each track exists to feed a paid rung)

Ranked by the ER30 of the paid rung it feeds. Every track follows the existing Teaching Arc and governance, ships CC-BY and carries exactly one CTA per lesson pointing up its own ladder.

### 4.1 The Fractional CAIO Playbook (NEW TRACK, 5 lessons) → feeds 3.1
The free 20% of the paid course. Background it draws on: 3x CHRO, CAIO repositioning, 10 AI builds.
1. What a Chief AI Officer actually does (and why every mid-market board wants one)
2. The 60-day AI baseline: the one-page version
3. Your first AI governance decision
4. The build-buy-platform triage
5. Fractional vs full-time: the market, the math, the positioning
CTA ladder: lessons 1-4 → next lesson; lesson 5 → the reconciled $2,500 course page.
Gate: publishes after Decision Zero, so lesson 5 points at one canonical offer.

### 4.2 The AI Portfolio OS (NEW TRACK, 6 lessons) → feeds 3.2, 3.3 and the book
The public spine of the book's actual framework, matching the live 18-chapter TOC: intro plus Task Stack Map, AI Skills Edge, Node Density, Portfolio Streams, Money OS. One lesson per pillar, each teaching the one-page version of the pillar's core exercise as an interactive checklist.
CTA ladder: newsletter capture mid-track, existing `/book` waitlist capture at track end.
Naming: this track was originally scoped as "Career Beast Mode / Beast Score". Renamed to match the book per the 3.2 framework note. If Yuri rules that CBM is the public name, rename back before publishing; the lesson content is the same either way.

### 4.3 Turn Your Book into an AI Academy (NEW TRACK, 4 lessons) → feeds BookToCourse.AI ($2K deposit)
Draws on: author of Be Your Own Commander-in-Chief (Ideapress, 2020; the "Forbes Top 21 Books to Read in 2021" listing appears in Yuri's LinkedIn export, add it to FACT_GUIDE before using it in public copy) and BookToCourse.AI founder. The track IS the demo: it teaches the method and points at a live example academy.
Caveat: BookToCourse.AI is mid-rebuild and its Revenue Map line has no last-buyer signal filled in. Cap this at 4 lessons of repurposed material until a deposit lands. Day-14 check applies.

### 4.4 AI for HR Leaders (EXPANSION, 4 lessons) → feeds AI HR Pilot and cohort Tier 2
"What a CHRO Should Do First with AI" is already the strongest buyer-matched lesson on the site. Promote it from one lesson inside Leading AI Adoption into a 4-lesson track: first 90 days, the HR AI stack, compliance and employee data, the board conversation. Signature frame stays: "You don't need an AI strategy. You need a defensible HR AI baseline in 60 days."

### 4.5 AI for Coaches and Consultants (NEW TRACK, 4 lessons) → feeds cohort Tier 3 and coaching
Draws on: 2,300+ clients coached (cleared figure per FACT_GUIDE) and executive coach positioning. Prompt library for coaches, session prep pipelines, productizing coaching IP.

### 4.6 Commander-in-Chief: The Executive Operating System (NEW TRACK, 5 lessons) → feeds BYOCIC book sales and coaching
BYOCIC's 4 Conversations framework (self: body and mind, others, G-d/the Universe, meta), ZOG and the habit and stress chapters. Framework is Yuri's own IP from the manuscript; log it in FACT_GUIDE as stated-by-Yuri before public copy. Lowest direct ER30 on this list, highest story equity: it carries the Worldview narrative that differentiates every other property. Build after 4.1-4.4, or assemble mostly from existing manuscript excerpts to keep cost near zero. Also the natural demo academy for 4.3.

### 4.7 Parked (no pull signal, do not build)
- AI-powered fundraising for Jewish nonprofits (deep Ohr Vishua and ChaiRaise experience, but Ohr Vishua is a fundraising client, not a course buyer; revisit if a development director asks)
- Personal-website track expansion (track exists; Ravenbridge site work is a services line with collection problems, not course pull)
- SMART KPIs port (lives on Coursera; link it from /resources for authority, do not rebuild)

---

## 5. The Full Value Ladder (integrated, pending Decision Zero naming)

| Rung | Offer | Price | Surface | Status |
|---|---|---|---|---|
| 0 | SEO articles, YouTube, LinkedIn | Free | portlev.com, YouTube | Live |
| 1 | 9 existing tracks + 5 new feeder tracks (4.1-4.5) | Free | learn.portlev.com | Live / to build |
| 2 | Leverage Brief newsletter | Free | beehiiv | Live |
| 3 | Skool community | Free | Skool | Planned |
| 4 | **The reconciled $2,500 cohort course** (Executive AI Cohort and Fractional CAIO course, per Decision Zero) | **$2,500** | `/cohort` page, ForwardShare or drip delivery | **Live page exists; reconcile now (3.0)** |
| 5 | Leverage Lab membership | $49-99/mo | Skool paid | After first reconciled cohort |
| 6 | CBM Corporate Program | $62,500+ per engagement | Direct enterprise | Pending ProfitSolv signature |
| 7 | Fractional CAIO retainer | $8K-15K/mo target | Direct | Positioning shipping |
| 8 | Fractional CHRO / CAIO enterprise work | $20K+ | Direct | Live |

After Decision Zero, update STRATEGY.md's ladder (it still says "CHRO AI Cohort, Maven, $2K-5K") so both documents describe the same rung 4. Each free track names its rung. No orphan content: a proposed lesson that cannot point at a rung does not ship.

---

## 6. Interactivity Upgrade (evidence-based instructional design, applied)

### 6.1 Principles applied
Consistent with Merrill's First Principles of Instruction and the retrieval-practice literature (Roediger and Karpicke's testing-effect research), five mechanisms:
1. **Retrieval practice beats re-reading.** Short knowledge checks after teaching blocks measurably improve retention versus passive reading.
2. **Application on real work beats hypotheticals.** Learners leave every lesson having done the thing on their own material, not read about it.
3. **Scenario-based decisions build judgment.** Present a realistic executive situation, force a choice, explain the consequences.
4. **Visible progress sustains completion** (goal-gradient effect); drip pacing and cohort structure raise completion further.
5. **Social and live layers belong on the paid rungs.** Peer feedback and live sessions are the strongest engagement drivers and are exactly what justifies the paid tier, per the "gate transformation, not information" rule already in STRATEGY.md.

### 6.2 New MDX components (SHIPPED today, pilot live)
All client components, localStorage persistence, no auth, no database, drop-in usable inside any lesson MDX. Styling matches the existing Callout family. Post-review hardening applied same day: per-index state restore (progress survives lesson edits), fire-once analytics events, clipboard-failure fallback label.

| Component | What it does | Instructional principle |
|---|---|---|
| `<KnowledgeCheck>` | 2-4 question multiple choice with per-answer explanations and a score state that persists per lesson | Retrieval practice, immediate feedback |
| `<ActionChecklist>` | Checkbox list of the lesson's Steps, state persists across visits, completion count shown | Application, visible progress |
| `<TryIt>` | A "do this now" exercise block with a copy-to-clipboard prompt template and a self-report confirmation | Real-work application, commitment device |

Wired into `components/MDXComponents.jsx`. Authoring requires zero new tooling: components drop straight into MDX per CONTENT.md conventions. Shipping the pilot also required fixing a sitewide bug: next-mdx-remote v6 defaults `blockJS: true`, which silently stripped every JSX attribute expression, so FlowDiagram had been rendering nothing on every lesson since the v6 upgrade. Fixed via `lib/mdx-options.js` (blockJS off for trusted first-party content, blockDangerousJS kept on).

### 6.3 Where interactivity goes, track by track
The Teaching Arc gains two optional slots: a KnowledgeCheck after Context or Steps, and a TryIt or ActionChecklist before Recap. One interactive element minimum, three maximum, per lesson. Never interrupt the Hook.

| Track | Primary elements | Funnel role of the interaction |
|---|---|---|
| Prompt Engineering (PILOT, live) | TryIt with copyable templates, KnowledgeCheck, ActionChecklist | Proof of practical value → newsletter CTA |
| AI Foundations | KnowledgeCheck per lesson, TryIt in "First Workflow" | Early win → continue to next track |
| How AI Actually Works | Scenario-style KnowledgeCheck ("will this hallucinate?") | Mental-model confidence |
| AI Workflows | ActionChecklist as pipeline build steps | Completion → Building Agents track |
| AI Agents, Explained | Decision-scenario KnowledgeCheck (agent vs workflow) | Sets up hands-on track |
| Building AI Agents Hands-On | ActionChecklist per build lesson (setup steps are checkable by nature) | Completion → cohort CTA |
| AI Risk and Governance | Scenario KnowledgeCheck (liability calls) | Authority → CAIO Playbook track |
| Leading AI Adoption | ActionChecklist (90-day roadmap items), TryIt (draft your pilot charter) | Direct feeder → CAIO course |
| Personal Website | ActionChecklist (launch checklist) | Completion → Brief |

### 6.4 Deliberately NOT building (anti-vapor list)
- Auth, database-backed progress, member area: Phase 3 per STRATEGY.md, triggered by 10 paid course seats, not before.
- Badges, points, leaderboards: gamification cosmetics without a buyer.
- Embedded chat/AI tutor: real cost, no pull signal.
- Video-first production: the video pipeline already has a staged flywheel; do not front-load it.

### 6.5 Measurement
KnowledgeCheck, ActionChecklist and TryIt completions fire Vercel Analytics custom events (component-level, no backend, fire-once per page view). The first real signal to watch: do lessons with interactive elements convert to newsletter signups at a higher rate? Check at day 14 with 4.1's launch traffic.

---

## 7. Execution Sequence (ER30-ordered, decision before build)

| # | Action | Revenue line | When |
|---|---|---|---|
| DONE 2026-07-07 | Decision Zero resolved: two products (see 3.0) | Unblocks $125K queued pipeline | Done |
| 1 | Build `/caio-course` sales page (self-serve positioning, application capture) + `/about` bio to CAIO + cross-links between `/caio-course` and `/cohort` | 3.1 | Now |
| 2 | Fractional CAIO Playbook free track, 5 lessons with interactive elements | Feeder for 3.1 | Now |
| 3 | Deploy, then release held 40 outbound emails once domain warmup completes | 3.1, $2,500/seat, ~50 queued | Gated on #1 and warmup |
| 4 | ProfitSolv signature chase (not a course action, but it gates 3.2) | 3.2, $62,500 | Deadline 2026-07-31 |
| 5 | Beast Score lead-magnet track + diagnostic (public spine per 3.0 ruling) | Book / cohort / funnel-wide | Blocked on Yuri supplying the 6-dimension taxonomy |
| 6 | Book-to-Academy track (repurposed material only) | BookToCourse.AI | Day-14 check applies |
| 7 | Roll interactive elements across remaining tracks | Funnel-wide | Rolling, 1 track per work block |
| DONE 2026-07-06 | Interactivity pilot on Prompt Engineering track (3 lessons) + sitewide FlowDiagram fix | Funnel-wide conversion | Shipped |

Kill criteria on every new item: named-buyer card by day 7, buyer-side movement by day 14, first dollar in pipeline by day 30, else archive.

---

## 8. Open Verifications

Resolved 2026-07-07 by Yuri: Decision Zero (two products), Beast Score as public spine, 18 chapters, FACT_GUIDE additions (all logged in FACT_GUIDE).

Still open:
1. **Beast Score 6-dimension taxonomy:** needed from Yuri before the diagnostic or the Beast Score track ships. Do not invent it.
2. **CAIO course module list vs what Finesse was actually sold:** confirm scope matches before the held emails release against the sales page.
3. **AI HR Pilot pricing:** still a placeholder in MONEY_GUIDE; the 4.4 track CTA links to a call, not a price.
4. **STRATEGY.md ladder update:** replace the "CHRO AI Cohort, Maven, $2K-5K" rung with the two real offers (Executive AI Cohort via ForwardShare; Fractional CAIO Course, $2,500, self-serve on-site).
