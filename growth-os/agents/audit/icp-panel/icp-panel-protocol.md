# ICP-Member Audit Panel (protocol)

> The distinctive audit tier of the Content OS. Not a generic quality check. A panel of simulated ICP members reads proposed content AS THEMSELVES and judges it adversarially, because the real ICP is skeptical, defensive and time-poor. A piece can pass the technical and SEO auditors and still fail here, on the only question that ultimately matters: would the actual buyer find this relevant, timely, genuinely useful, and ladder-advancing?

## When the panel runs (twice)
1. **At the idea/outline stage** (cheap): kills or sharpens a content idea before anyone writes it.
2. **At the draft stage** (quality gate): a drafted piece does not reach `status: draft`-ready until the panel signs off.

## Who is on the panel
Three personas (see persona-01..03 in this folder), each grounded in evidence from `state/ICP-profile.md` and the intelligence briefs. They cover different rungs and both destinations of the transformation ladder:
- **persona-01** — the anxious operator-CHRO (rungs 1-2, defensive, time-poor)
- **persona-02** — the portfolio-builder (rungs 3-4 heading to 6a)
- **persona-03** — the enterprise enabler/operator (rungs 4-5 heading to 6b)

Each persona reviews independently, in its own voice, then a verdict is synthesized. The personas are a living set: more C-suite and VP avatars get added as real audience/data accrues (book, app, newsletter, cohort). Never invent a persona without evidence.

## The rubric (each persona scores 1-5 and explains, in character)
1. **Relevant to me right now?** Does this match where I actually am?
2. **Timely?** Is this the thing I need this week, or generic-anytime filler?
3. **Genuinely useful: would I actually do this?** Not "is it correct" but "will I act on it." Vague advice scores low.
4. **Ladder move.** Which rung am I on, and does this create a real next move toward my destination (6a or 6b)? Name the rung and the move.
5. **Voice / trust.** Does it respect that I am time-poor and defensive, or does it preach / hype / talk down? (The ICP shuts off the moment it feels lectured.)
6. **One sentence:** what would make this a 5 for me?

## Verdict format (returned to the pipeline)
```json
{
  "panel": [
    {"persona":"01","scores":{"relevant":n,"timely":n,"useful":n,"voice":n},"rung":"1","move":"...","verdict":"pass|revise|reject","inCharacter":"...","wouldMakeIt5":"..."},
    {"persona":"02", ...},
    {"persona":"03", ...}
  ],
  "synthesis": {
    "verdict": "pass | revise | reject",
    "primaryPersonaServed": "01|02|03",
    "ladderRung": "n",
    "nextMove": "...",
    "topFixes": ["..."],
    "notes": "..."
  }
}
```

## Decision rule
- **Reject** if the primary target persona scores `useful` <= 2 or `voice` <= 2, OR if no persona can name a real ladder move. Misfit or preachy content does not ship.
- **Revise** if the target persona is 3s with specific, fixable objections. Send back with the fixes.
- **Pass** only if the target persona gives 4+ on useful and voice and names a concrete next move.
- A piece may target ONE persona strongly and be neutral to others; that is fine. It may not be useless to all three.

## Hard rules
- Personas judge usefulness and fit, NOT facts. Factual/voice/zero-hallucination checks belong to the technical auditor; SEO/AEO shape to the SEO auditor. Keep lanes separate.
- Stay in character. The value is the adversarial, in-voice objection a real buyer would raise, not a polite committee.
- Evidence-grounded only: persona reactions should be consistent with the documented ICP profile and briefs, not free invention.
