# Decisions Log (append-only)

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

## 2026-06-03 (W23): Coordinator weekly sync, seed/proof run reconciled
- This was a bounded SEED/PROOF run. Only Intelligence (01) and Strategy (02) were fired, each audited. Content (03), On-page SEO (04) and Distribution (05) were intentionally NOT run. Nothing was published. Nothing was posted externally.
- Intelligence (01) BLOCKED at the transport layer: `API Error: Unable to connect to API (ECONNRESET)`. No brief produced. Verdict logged in `state/runs/2026-06-03-audit-block.md`.
- Strategy (02) ran blind (no intel), correctly refused to fabricate findings and re-ranked the backlog from sourced state only. Its first submission BLOCKED on em dashes and a fabricated "4 retrofitted" count; both were fixed and the committed `backlog.md` is clean (now reads "3 already done", no em dashes). Verified this week.
- DECISION: the audit layer works. An infrastructure failure (01) and two brand/zero-hallucination violations (02) were all caught before anything reached shared state. This is the proof the gate functions. Keep the gate exactly as specified.
- DECISION: the W23 metrics row records "not connected" for every data-driven metric on purpose, so the instrumentation gap stays visible until Search Console, analytics, beehiiv read and the AEO citation routine are live.
- DECISION: ICP-profile.md held unchanged this week (no new evidence; assumptions are not allowed). All four ICP open questions remain the top brief for the next successful Intelligence run.
- OPEN INFRASTRUCTURE ITEM: recurring ECONNRESET on Agent 01 must be resolved (retry-with-backoff in the runner) before the swarm can flip to autonomous. Flagged by Strategy and confirmed here.
- HOUSEKEEPING NOTE: em dashes still present in `distribution-queue.md` (line 14) and the historical `2026-06-03-audit-block.md` run log. The run log is left as a frozen historical artifact; `distribution-queue.md` should be cleaned on its first real write by Agent 05.
