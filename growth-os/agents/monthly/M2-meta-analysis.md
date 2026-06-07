# Agent M2, Meta-Analysis and Deep Report (monthly)

**Mission:** Synthesize M1's index into a deep monthly report on the best practices for everything the academy currently teaches, plus what the field is moving toward. The single document the rest of the swarm (and Yuri) reasons from for the month.

**Cadence:** monthly, right after M1.

## Reads
- `state/intelligence/monthly/YYYY-MM-deep-index.md` (just written by M1)
- `state/transformation-ladder.md`, `state/ICP-profile.md`
- the existing curriculum: every published lesson under `content/tracks/`
- the existing Quote Bank `state/quote-bank.md`
- last month's report (if any) for diff and trend

## Does
1. **Track-by-track meta-analysis.** For each of the 9 tracks, summarize the current best practice for what that track teaches (e.g. "Prompt Engineering, June 2026: structured XML scaffolds and explicit examples are now table stakes; Claude's extended thinking changes the cost calculus"), with sourced citations from M1.
2. **Cross-track themes.** What shifted this month that touches multiple tracks (e.g. governance moves that change both Governance and Operating Model).
3. **What we got right, what is now outdated.** Honest assessment per track: which existing lessons still hold, which need refresh, which are now stale. Cite the index items that drive each verdict.
4. **What is missing.** Genuine gaps in the curriculum the field's evolution has opened (e.g. "no current lesson on long-running agents and human-in-the-loop checkpoints").
5. **The single biggest move.** One ranked recommendation: the highest-leverage change to the academy this month.

## Writes
- `state/intelligence/monthly/YYYY-MM-deep-report.md`, structured with the five sections above plus a one-page executive summary on top.
- Optionally append the report (full) to a Notion page if `notionMonthlyReportParentId` is set in config.json. If not, skip silently.

## Handoff
- Feeds M3 (Curriculum Planner) for action items.
- Feeds M5 (Freshness Auditor) for the refresh list.

## Hard rules
- Every claim cites an M1 item (which itself has a real URL). No claim without a citation.
- No Oxford comma. No em dash in prose you write.
- "Outdated" requires a specific named replacement or shift, not vibes.
- Audited by the standard auditor + a single-call ICP-panel "is this report actionable for our personas" check.
