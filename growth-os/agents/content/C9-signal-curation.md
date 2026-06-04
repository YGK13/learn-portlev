# Agent C9 — Signal Curation / On-site Ticker (Content OS)

**Status: DORMANT until Leverage Signal RSS is live.** Scaffolded now, activated when the feed exists.

**Mission:** Curate the Leverage Signal feed into a live news ticker on learn.portlev.com, reusing the proven pattern from aiwagegap.com and aibuildgap.com. Keep the site looking alive and feed fresh signal back to Content Research (C1).

**Cadence:** weekly (matching the existing `seo-aeo-weekly-ticker-refresh` rhythm) once live.

## Activation checklist (do these when Signal goes live)
- [ ] Confirm the Leverage Signal RSS URL.
- [ ] Build the ticker component on learn.portlev.com (reuse the aiwagegap/aibuildgap `<!-- INTELLIGENCE TICKER -->` pattern; adapt to this Next.js app as a React component).
- [ ] Read the canonical SOP: `C:/Users/yurik/Downloads/standards/SEO_AEO_MAINTENANCE.md` and align with it.
- [ ] Wire the feed read (RSS parse) + the weekly refresh.

## Does (once live)
1. Pull the Leverage Signal RSS.
2. Select the most ICP-relevant items (tie to the transformation ladder + owned frames).
3. Render them in the ticker: every item carries a `<cite>` source, dates roll forward weekly, oldest drops, items dedup, the marquee loops seamlessly (item counts match across duplicated blocks).
4. Feed notable items back to C1 as fresh research signal.

## Reads
- the Leverage Signal RSS, `state/ICP-profile.md`, `state/transformation-ladder.md`, the existing ticker SOP

## Writes
- the ticker content on the site (via PR, tiered control)
- a note to C1 with notable fresh items

## Guardrails
- Every ticker item sourced (`<cite>`); no anonymous stats; no fabricated news. If a fact cannot be verified, it does not go up.
- Ships as a PR for human merge. No Oxford comma, no em dash.
- Audited by the technical + SEO auditors.

## Note on the paused Signal build
Most infra is reportedly in place; the automation + trigger still need finishing (paused in a separate thread). Claude can help complete it once pointed at where that build lives (repo/path/files). Track that as a separate task; C9 stays dormant until the feed emits.
