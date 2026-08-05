# Content Refresh Queue

> Created 2026-08-02 by Agent M5 (Freshness and Relevance Auditor), first-ever monthly run. This file tracks substantive-rewrite items that surfaced during a monthly freshness pass but were deliberately NOT applied directly by M5, either because they are enhancement opportunities rather than corrections (nothing scored 3 or lower), or because they are substantive rewrites beyond M5's single priority item for the month. Each item names the lesson, the M1 citation, and who picks it up next.
>
> **Coordination rule:** this file is the monthly, deeper-pass counterpart to the daily Refresh agent C6's lane. M5 (this agent) runs once a month and does a full 46-lesson sweep against that month's deep report; C6 runs daily and does lighter, narrower passes (dead links, small dated phrases, single-stat swaps against an already-confirmed source). Before either agent applies a fix, check this file first: if an item is already logged here as queued for M3/M4 (next month's build) or as a pending Yuri PR-merge decision, C6 should not duplicate it as a fresh daily pick. If C6 ships something logged here, mark it done inline and leave the line for the audit trail, do not delete it.

---

## Queued for next month's M3 (Curriculum Planner) / M4 (Builder), or already in M3's 2026-08 plan

These are evidentiary-upgrade opportunities identified during M5's 2026-08 freshness sweep. None crossed the score-3-or-lower threshold that would require a corrective PR this month; all are small, bounded additions to lessons that are otherwise fine. All five are already captured in M3's `2026-08-plan.md`, so M5 is not re-planning them, only cross-referencing so C6 and next month's M5 do not treat them as new.

1. **`prompt-engineering/01-anatomy-of-a-great-prompt.mdx` and `03-advanced-prompting-patterns.mdx`**: add a one-paragraph framing note (recap or closing) that the field now names single-prompt mastery a "basic, secondary skill" versus "agentic engineering"/orchestration as the higher-value skill that follows. Cites M1 item 9, https://sarifulislam.com/blog/prompt-engineering-2026/. Already M3 plan item #4. Effort: low (one paragraph, no factual correction needed since nothing currently taught is wrong).

2. **`ai-agents/03-when-to-use-an-agent.mdx`**: cite M1 item 3 (Claude Cowork: more than 90% of real-world agent/Cowork usage is non-coding administrative work, Anthropic, 2026-07-07, https://claude.com/blog/cowork-web-mobile) as a concrete, current statistic sharpening the lesson's existing abstract chatbot-vs-agent guidance. Part of M3 plan item #5 (vendor-neutral tool-landscape enhancement). Effort: low. **DONE 2026-08-04** by the daily swarm (17th invocation): re-verified the quote by direct WebFetch, shipped as a `<Stat>` block plus one paragraph at the top of `## Context`. PR #10, open, not merged. See `state/intelligence/2026-08-04.md` Thread 1 and `backlog.md`'s 2026-08-04 pick.

3. **`ai-foundations/03-your-first-hour-with-claude.mdx`**: note the July 2026 Claude voice-mode update (multi-model choice, app-connected to Gmail/Calendar/Slack/Canva/Notion) as a live "just talk to it" on-ramp worth mentioning in a future revision. Cites M1 item 2, https://techcrunch.com/2026/07/23/anthropic-updates-claude-voice-mode-with-more-capable-models/. **DONE 2026-08-05** by the daily swarm (18th invocation): re-verified the quote and date by direct WebFetch, shipped as a `<Callout type="key">` in Step 1. PR #11, open, not merged. See `state/intelligence/2026-08-05.md` Thread 1.

4. **`fractional-caio-playbook/01-what-a-chief-ai-officer-actually-does.mdx`**: cite M1 item 8 (IBM Institute for Business Value with Oxford Economics: CAIO adoption 26% to 76% of firms in one year, companies with a CAIO report 5% higher AI-investment ROI, published 2026-05-04, https://cxovoice.com/76-of-firms-now-have-chief-ai-officers-ibm-research-shows/) as direct evidence for the lesson's "is this role real" framing. **Status: already shipped as PR #7 (opened 2026-07-28), open, unmerged.** Per `backlog.md` IN-PROGRESS item 5. Action needed: Yuri merges PR #7. No further agent work.

5. **`fractional-caio-playbook/05-fractional-vs-full-time.mdx`**: upgrade the currently unsourced $8K-15K/month retainer figure and market framing with M1 items 16 (fractional CAIO economics: $5K-$30K/month industry-wide, 35% US adoption today projected to 40% by year-end, 30-45 day measurable impact vs. 6-9 months for a full hire, https://www.ancorepartners.com/insights/10-statistics-that-prove-fractional-work-is-the-future-of-executive-hiring-2026) and 17 (OECD: roughly half of professionals globally in portfolio careers by 2030, https://www.gofractional.com/blog/how-to-become-a-fractional-executive). No contradiction to fix, the existing figure sits inside item 16's range; purely an evidentiary upgrade. Already M3 plan item #6. Effort: low-medium (a few sentences plus two citations).

---

## Pending Yuri PR-merge decisions surfaced during this sweep (not new agent work)

These are not content gaps. The fixes exist and are already written; they are sitting as open pull requests. Listed here only because M5's live-file audit scores above reflect the *unmerged* state, and a future agent reading this queue should not re-do the work.

6. **PR #5** (opened 2026-07-22): refreshes the flagship `<Stat>` in `content/tracks/ai-foundations/01-what-is-the-ai-wage-gap.mdx` from PwC 56%/2025 to the current, primary-sourced 62%/2026 figure (PwC Global AI Jobs Barometer, PR Newswire, 2026-06-15) and corrects the job-ad sample-size citation. Not M1-2026-08-sourced (it traces to a 2026-07-21 daily intelligence brief, not this month's deep index), so M5 did not treat it as a new correction this run, only confirmed it is still open. **Action: Yuri merges PR #5.**
7. **PR #7** (opened 2026-07-28): ships the IBM 76%-CAIO-adoption stat into `fractional-caio-playbook/01-what-a-chief-ai-officer-actually-does.mdx`. See item 4 above. **Action: Yuri merges PR #7.**

---

## Status discrepancy flagged for M6 (Coordinator)

8. **`content/tracks/ai-workflows/04-substitute-augment-or-elevate.mdx`** carries `status: draft` in its own frontmatter (`updated: "2026-07-20"`), but M2's `2026-08-deep-report.md` discusses it as though it were live, consistent, published content ("ai-workflows (4 lessons)... all consistent with, and in several cases independently validated by, this month's scan"). M5 excluded it from this month's published-lesson scoring per the frontmatter `status` field, consistent with how the other three draft lessons were handled. Needs a decision: either publish the lesson (folding it into next month's freshness sweep as published) or flag M2's read for correction next month.

---

## What is NOT in this queue

No substantive rewrites beyond `ai-governance/03-ai-regulation-for-leaders.mdx` (this month's M5 priority item, applied directly, PR #8, https://github.com/YGK13/learn-portlev/pull/8) were identified this run. No lesson was flagged for retirement. The standard sweep found the curriculum in genuinely strong shape this month, consistent with M2's verdict.
