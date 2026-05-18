# PortLev Academy: Strategy Reference

> Last updated: 2026-05-18. This is the single source of truth for why Learn.PortLev.com exists
> and how it makes money. Read before adding content or code.

---

## Vision

Learn.PortLev.com is a free, open-source content site teaching professionals how to build with AI.
It is the top-of-funnel engine for a five-rung value ladder anchored by a paid community membership
and a high-ticket CHRO cohort course.

The site is designed to grow fast. Everything here keeps that growth intentional and profitable,
not chaotic.

---

## Core Principle: Gate Transformation, Not Information

> *"Information is no longer scarce. Transformation is. People can get information from AI.
> They cannot get guided transformation from AI. That requires you and your leadership."*

**Free content is not generosity. It is strategy.**

Free content is: distribution (SEO, YouTube reach, social sharing), proof of competence
(removes the "will I learn anything" objection before anyone is asked to pay), email capture
(converts anonymous traffic to an owned audience) and open-source moat (a public, openly
licensed catalog that compounds and is hard to replicate).

What gets gated: accountability, live access to Yuri, peer community, done-for-you
implementation assets, speed and a credentialed path. Free content teaches the **map**.
Paid delivers the **guided expedition**.

---

## Value Ladder

| Rung | Offer | Platform | Price | Role |
|------|-------|----------|-------|------|
| 0 | YouTube + SEO articles | YouTube / portlev.com | Free | Infinite reach, discovery |
| 1 | Free lessons + Leverage Brief | learn.portlev.com (this site) | Free | Email capture, owned audience |
| 2 | Free Skool community | Skool | Free | Warm pool, engagement, social proof |
| 3 | The Leverage Lab (paid membership) | Skool paid tier | ~$49-99/mo | Low-risk recurring yes, buyer qualification |
| 4 | CHRO AI Cohort | Maven | ~$2K-5K | High-ticket guided transformation |
| 5 | 1:1 / corporate / fractional CHRO | Direct | $20K+ | Highest ticket (existing business) |

---

## Platform Stack

| Purpose | Platform |
|---------|----------|
| Free content site | Next.js 15 + Vercel (this repo) |
| Community (free + paid) | Skool |
| Cohort course | Maven |
| Newsletter | beehiiv (Leverage Brief) |

Do not build community or LMS infrastructure. Skool and Maven already exist.
The site's job is to feed and sell them, not to replicate them.

---

## The 90/10 Split

**Free (90%+) — lives in this public repo, CC-BY licensed:**
- All foundational and intermediate lessons and tracks
- Full Leverage Brief archive
- Conceptual teaching: the what, the why and the how at walkthrough level
- Basic prompts and snippets inline in lessons
- YouTube embeds (auto-populated from frontmatter)
- Community contributions via pull request are welcome

**Gated (~10%) — lives on Skool and Maven, NOT in this repo:**
- Leverage Lab paid tier: premium template library, monthly live office hours with Yuri,
  member-only deep dives, accountability challenges, 30-day early-access window before
  content goes free, member directory and opportunity board
- Done-for-you assets: premium prompt packs, workflow and agent templates, CHRO-specific toolkits
- CHRO AI Cohort: structured 6-week program, live cohort, certification

**The gating decision rule (enforced in CONTENT.md):**
A piece may be gated only if it meets at least one of: (a) it requires Yuri's live time,
(b) it is a done-for-you implementation asset, (c) it provides accountability or peer structure,
(d) it earns a 30-day paid early-access window before going free. Everything else is free.

---

## Conversion Mechanics

1. **Free content** removes "will I learn anything" — competence proven at zero cost.
2. **Newsletter** (Leverage Brief via beehiiv) nurtures and segments the audience over time.
3. **Free Skool community** removes "will this work for someone like me" — social proof and
   belonging convert a reader into a participant.
4. **The Challenge Activation Method**: a structured challenge inside the community delivers
   one real result and pulls passive free members into action. Converts 8-15% of active free
   members to paid. Run on a regular cadence (monthly).
5. **Paid membership** (the Leverage Lab) is the low-risk yes that qualifies buyers and
   produces recurring revenue.
6. **Cohort course** sells: outcome, accountability, speed, access and Yuri's leadership —
   exactly what free content withholds, not by being weak, but by not doing the work for people.

Every free lesson ends with a contextual CTA stepping the reader exactly one rung up.
Track completion triggers: "You finished the free Foundations track. The cohort takes you
from concept to deployed system in 6 weeks."

---

## The YouTube Video Flywheel

Every lesson follows a fixed teaching arc (Hook, Context, Steps, Recap, CTA). A narration
script is mechanically derivable from this arc via a `## Script` section in each lesson.

**Pipeline:**
1. Lesson published on the site.
2. Script generated from the `## Script` section (or via Claude Code if not yet written).
3. HeyGen or Veo renders a headless video.
4. Video uploaded to YouTube.
5. `video.youtubeId` written back into the lesson frontmatter.
6. The lesson page auto-embeds the video.

YouTube descriptions link back to the free lesson and the community. Each lesson compounds
across SEO, YouTube and community from a single authoring effort.

---

## Open-Source Model

The repo is fully public. Code license: MIT. Content license: CC-BY 4.0.
The community can contribute lessons and corrections by pull request.
The open catalog is the moat: it compounds, attracts contributors and is hard to replicate.
Gated content never goes in this repo.

---

## Phase Roadmap

**Phase 1 (current):** Next.js 15 scaffold, content system + governance docs, core routes with
real layouts, sample lessons and a brief, beehiiv subscribe integration, full SEO foundation
(metadata, sitemap, RSS, OG images) and book + cohort landing pages.

**Phase 2:** beehiiv Leverage Brief archive sync, full content migration (all tracks and briefs),
Skool community links and social proof feed, cohort application flow, search.

**Phase 3:** Auth and early-access gating for the 30-day window, Stripe or Maven handles cohort
payments, member area, lesson progress tracking, YouTube auto-embed pipeline scripted.
