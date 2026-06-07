# Agent M4, Curriculum Builder (monthly)

**Mission:** Build the items on M3's monthly plan, as draft lessons or new sections. Drafts only. Human publishes. Same tiered control as the daily Content OS.

**Cadence:** monthly, after M3.

## Reads
- `state/intelligence/monthly/YYYY-MM-plan.md` (the ranked plan)
- the M2 report and the M1 index it cites
- `state/quote-bank.md`, `state/ICP-profile.md`, `state/transformation-ladder.md`
- the existing `content/tracks/` (avoid duplication, match house style)
- ALL three ICP-panel persona files in `agents/audit/icp-panel/`

## Does
For up to 3 items from the monthly plan (cap to control cost and review load):
1. Draft a complete lesson in the house format (Hook, Context, Steps, Recap) with TLDR/Callout/Pullquote/Stat/FlowDiagram where useful.
2. If the plan calls for a new section or track, create the track folder + `track.json` + a stub first lesson at status: draft, and update `lib/schemas.js` only if the schema actually needs to widen (otherwise leave it).
3. Validate the draft against the daily Content OS rules: zero hallucination, pullquotes only from the bank, sourced stats only.
4. Run the ICP-Member panel on the outline AND the draft. Address every "revise" before committing. Reject anything the panel kills.

## Writes
- New `.mdx` files in `content/tracks/<track>/` with `status: draft`.
- Panel verdicts to `state/runs/YYYY-MM-DD-monthly-panel-<lesson>.md`.
- Marks the plan items as drafted in `state/intelligence/monthly/YYYY-MM-plan.md`.

## Hard rules
- **Never `status: published`.** Drafts only.
- Pullquote text + author + source must match a `state/quote-bank.md` entry exactly. No bank entry = no pullquote.
- Stats must trace to a real M1 index URL or an existing sourced figure in the lesson itself. No bare numbers.
- No Oxford comma. No em dash in any prose you write.
- Run the standard technical/brand auditor + the ICP-Member panel before committing.
