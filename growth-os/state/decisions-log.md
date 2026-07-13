# Decisions Log (append-only)

## 2026-07-13: Third invocation, daily swarm, first run after a 39-day dispatcher outage

- The routines dispatcher that triggers this swarm was down under a KILL flag from 2026-06-07 to 2026-07-07 (per project memory, revived same day it was pruned). This was the first `growth-os-daily-swarm` run since 2026-06-04.
- RECONCILED: `backlog.md` still described a 1-track, 4-lesson site. The live repo has 9 published tracks (~45 lessons), a merged AEO PR (#2), a Search Console metrics reader, 2 content format-revamp passes, a 48-quote verified quote bank, and a commercial CAIO course/Authority Stack/Programs hub, none of which were logged by the swarm because it was not running. Backfilled into `backlog.md`'s reconciliation section and SHIPPED list. Full decisions-log backfill (commit-level detail) deferred to the next weekly Coordinator sync.
- INTELLIGENCE: verified 2 stats via direct fetch (not search-snippet-only): IBM 2026 CEO Study CAIO adoption (76%, up from 26% a year earlier; secondary citation via iternal.ai, [VERIFY] primary source before publish use) and CHRO Association/USC Darla Moore 2026 CHRO Survey (91% named AI/digitization a top-5 concern, ranked #1; primary-sourced, PR Newswire, dated 2026-03-20). Full detail in `state/intelligence/2026-07-13.md`.
- STRATEGY: rescored the sitewide `Course`/`LearningResource` + `BreadcrumbList` JSON-LD onpage item from 10 to 12.5 (5x5/2) given the 9x track-count increase since it was last scored, and promoted it to IN-PROGRESS as today's single pick.
- SHIPPED THIS RUN: sitewide `LearningResource` + `BreadcrumbList` JSON-LD on every published lesson page (`app/learn/[track]/[lesson]/page.js`), on branch `growth-os/sitewide-lesson-schema`, PR #3 open (not merged; Yuri merges). Build verified: 52 content files validated, 68 static pages generated, 0 errors. Unblocks the `llms.txt` backlog item, which was deferred pending this.
- FLAGGED for the weekly Coordinator sync: re-check `metrics.md`'s Search Console checklist against the metrics reader that shipped during the gap; decide whether the CAIO paid course tier changes anything in `ICP-profile.md`'s value ladder; full decisions-log backfill for the gap's shipped commits.
- STANDING RULE CONFIRMED: even during an extended outage, the swarm does not fabricate what happened while it was down. This run reconciled from `git log` and the live repo rather than assuming the last-known state was current.

> The swarm's memory of what was decided and why. Agents check here to avoid redoing or contradicting past decisions. Coordinator appends weekly; any agent may append a material decision.

## 2026-06-03 — Growth OS founded
- Scope locked to learn.portlev.com only.
- Change control: tiered (on-page SEO via PR, net-new content as draft, nothing risky auto-publishes).
- External posting (Reddit etc.): draft-for-approval only, never auto-post.
- Cadence: daily producing agents + weekly coordinator sync. Shabbat-aware (no Fri eve - Sat night runs).
- Audit layer required on every producing agent before any output is committed.
- Seed ICP profile written from book + transcripts + ForwardShare cohort research + PwC/Gartner/Deloitte data.

## 2026-06-03 — Content already shipped (dedup guard)
- "Your First Hour with Claude, for Busy Executives" — published.
- "The Enterprise AI Deployment Protocol: Build, Buy or Platform" — published.
- TLDR / Pullquote / Stat mini-format components built; 3 foundational lessons retrofitted.
- Welcome-to-the-Leverage-Lab brief deleted; /brief and home pull live from beehiiv.

## 2026-06-03 — Standing brand/voice rules (do not relitigate)
- No Oxford comma. No em dash. Yuri Kruman voice.
- Zero hallucination: every stat/name/URL/quote sourced or it does not ship.
- Quotes only from the book or transcripts with signed releases (Alon Bochman, Kim Pecina confirmed).

## 2026-06-04 — Second invocation, daily swarm (growth-os-daily-swarm)

- This was the second autonomous invocation on 2026-06-04. The first (bb0ad6a) ran intelligence + strategy + onpage SEO. This invocation ran supplemental intelligence + strategy update + content draft.
- SHIPPED: lesson 07 ("What a CHRO Should Do First with AI") was published by Yuri in commit ef8dbfc alongside phase 3 instrumentation (beehiiv API endpoint, Google Search Console meta, AEO citation tooling, analytics confirmation). Moved to SHIPPED in backlog.
- FLAGGED: branch `aeo/first-hour-faq-schema` (PR #2) is stale. The branch was cut before phases 1-3 were committed to main and is now missing ~750 lines of files. DO NOT MERGE without a rebase. Coordinator to surface this in the weekly digest.
- CONTENT DRAFTED: "Is AI going to take my executive job?" (`content/tracks/ai-foundations/04-is-ai-going-to-take-my-executive-job.mdx`, status: draft). Audit verdict: PASS with two items flagged for human review before publishing: (1) the SHRM 2026 "5.7x" stat (used inline with a [VERIFY] note, sourced from web search results only); (2) no Pullquote component was used (no second verified Yuri Kruman transcript quote was available; lesson passes without one).
- STANDING RULE CONFIRMED: the AEO branch staleness is an infrastructure issue, not a content issue. The PR stays open; Yuri merges after rebase.

## 2026-06-03 (W23): Coordinator weekly sync, seed/proof run reconciled
- This was a bounded SEED/PROOF run. Only Intelligence (01) and Strategy (02) were fired, each audited. Content (03), On-page SEO (04) and Distribution (05) were intentionally NOT run. Nothing was published. Nothing was posted externally.
- Intelligence (01) BLOCKED at the transport layer: `API Error: Unable to connect to API (ECONNRESET)`. No brief produced. Verdict logged in `state/runs/2026-06-03-audit-block.md`.
- Strategy (02) ran blind (no intel), correctly refused to fabricate findings and re-ranked the backlog from sourced state only. Its first submission BLOCKED on em dashes and a fabricated "4 retrofitted" count; both were fixed and the committed `backlog.md` is clean (now reads "3 already done", no em dashes). Verified this week.
- DECISION: the audit layer works. An infrastructure failure (01) and two brand/zero-hallucination violations (02) were all caught before anything reached shared state. This is the proof the gate functions. Keep the gate exactly as specified.
- DECISION: the W23 metrics row records "not connected" for every data-driven metric on purpose, so the instrumentation gap stays visible until Search Console, analytics, beehiiv read and the AEO citation routine are live.
- DECISION: ICP-profile.md held unchanged this week (no new evidence; assumptions are not allowed). All four ICP open questions remain the top brief for the next successful Intelligence run.
- OPEN INFRASTRUCTURE ITEM: recurring ECONNRESET on Agent 01 must be resolved (retry-with-backoff in the runner) before the swarm can flip to autonomous. Flagged by Strategy and confirmed here.
- HOUSEKEEPING NOTE: em dashes still present in `distribution-queue.md` (line 14) and the historical `2026-06-03-audit-block.md` run log. The run log is left as a frozen historical artifact; `distribution-queue.md` should be cleaned on its first real write by Agent 05.
