# Audit Protocol (the audit layer)

Every producing agent (01-05) is paired with an auditor that runs immediately after it and **before its output is written to shared state**. The auditor is adversarial by default: its job is to find the reason the work should not ship, not to rubber-stamp it.

The coordinator (06) audits itself against this protocol plus the cross-agent checks at the bottom.

## How auditing works

1. The producing agent returns a proposed output plus a list of every claim, stat, name and URL it used.
2. The auditor receives the output and the sources, and returns a structured verdict:
   ```json
   { "pass": true|false, "severity": "block|warn|ok", "issues": ["..."], "fixes": ["..."], "notes": "..." }
   ```
3. If `pass` is false, the output is NOT written to state. The issue goes to the run log and (if it recurs) to the coordinator.
4. `warn`-level issues are written to state but flagged for the coordinator's weekly review.

## Universal checks (apply to every agent)

- **Zero hallucination.** Every statistic, study, name, company, quote and URL must be verifiable from a cited source. Unsourced claim = block. "Sounds right" is not sourced.
- **Brand voice.** Yuri Kruman voice: direct, opinionated, no filler. **No Oxford comma. No em dash.** Recommends one path, not five.
- **ICP fit.** Does this actually serve a busy, anxious, mid-career enterprise executive who is late to AI? Generic "AI for everyone" content fails.
- **No vanity work.** Optimizing for activity counts instead of qualified outcomes = block.
- **Honesty about limits.** If the agent capped coverage (top-N, sampling, no-retry), it must say so. Silent truncation = warn.

## Per-agent checks

### 01 Intelligence
- Sources are real, dated and linked. No fabricated stats or studies.
- Claims about competitors/SERPs are from actual fetched pages, not memory.
- ICP insights are evidence-backed (a cited article, forum thread, survey), not assumed.

### 02 Strategy
- Every backlog item traces to a specific intel finding or a stated business goal.
- Priorities reflect ICP impact and effort, not novelty.
- No item duplicates something already shipped (check decisions-log).

### 03 Content
- Lands as `status: draft`. Never `published`.
- Follows the lesson house format (Hook/Context/Steps/Recap) and uses TLDR/Pullquote/Stat where useful.
- Every quote is from a transcript with a signed release or the book; every stat sourced.
- Does not duplicate an existing lesson; fills a real gap from the backlog.

### 04 On-page SEO/AEO
- Changes open a PR; nothing is force-published.
- Schema/JSON-LD is valid; metadata within length limits (title <= 60, description <= 160).
- No regression: the build must pass; internal links resolve.
- AEO: content is genuinely answer-shaped (clear question, direct answer), not keyword-stuffed.

### 05 Distribution
- **Nothing posts.** Output is drafts to the approval queue only.
- Each draft targets a genuinely relevant thread and leads with value, not a link.
- Respects the subreddit's self-promotion rules; discloses affiliation where required.
- No identical copy across threads (spam signal).

## Cross-agent checks (coordinator, weekly)

- Are agents working at cross-purposes (e.g. content drafting a topic strategy deprioritized)?
- Is any handoff dropping (intel surfaced an opportunity strategy never queued)?
- Did anything ship that should not have, or stall that should have moved?
- Is the ICP profile drifting from evidence? Reconcile.
- Are we measuring outcomes, or sliding into vanity metrics?
