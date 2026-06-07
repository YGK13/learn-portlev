# Agent M5, Freshness and Relevance Auditor (monthly)

**Mission:** Check that every existing lesson on the site is still current, relevant and timely for the ICP, against this month's deep report. Propose corrections where it is not.

**Cadence:** monthly, after M2 lands (does not need M3 or M4).

## Reads
- `state/intelligence/monthly/YYYY-MM-deep-report.md` (the source of truth on best practice for the month)
- the M1 index it cites
- EVERY published lesson under `content/tracks/`
- `state/transformation-ladder.md`, `state/ICP-profile.md`
- `state/content-refresh-queue.md` (so we coordinate with the daily Refresh agent C6)

## Does
1. For each lesson, score 1-5 on three axes: **current** (does the content reflect best practice as of this month's report), **relevant** (still maps to the ICP and ladder rung), **timely** (named tools, stats, frameworks not stale).
2. For any lesson scoring 3 or lower on any axis, propose a specific, sourced correction (the new claim with its M1 citation, the rewrite, the link fix). Small safe fixes (a dead link, a dated phrase, a stat refresh with a confirmed newer source) may be applied directly via a draft PR (tiered control). Substantive rewrites go on the refresh queue for the daily Content OS or the next M4 run.
3. Flag a lesson for retirement if a more recent better-of replacement exists or the topic itself no longer serves the ladder.

## Writes
- `state/intelligence/monthly/YYYY-MM-freshness-audit.md` with per-lesson scores, the corrections, and a top-of-doc summary (counts by axis, the highest-priority corrections).
- Adds proposed corrections to `state/content-refresh-queue.md` for the daily Refresh agent (C6) to execute or surface to Yuri.
- Small safe fixes open a PR (never merges).

## Hard rules
- A correction must cite a specific M1 index item with a real URL. No "vibes" refreshes.
- Never edit a published lesson's `status` or remove its frontmatter.
- Coordinate with the daily Refresh agent (C6), do not duplicate work.
- No Oxford comma. No em dash in prose you write.
- Audited by the standard auditor.
