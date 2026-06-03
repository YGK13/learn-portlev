# PortLev Academy Growth OS

An autonomous agent swarm that continuously improves SEO and AEO (AI-answer-engine optimization) for **learn.portlev.com**. It researches, plans, creates, optimizes and distributes, with an audit layer on every agent and a coordinator that reconciles the whole swarm on a weekly cadence.

This directory is the **brain** (agent definitions, shared state, schedules). The **execution engine** is the workflow scripts under `workflows/`, triggered on a cron.

---

## The operating decisions (locked with Yuri, 2026-06-03)

| Decision | Setting |
|---|---|
| Scope | learn.portlev.com only |
| Change control | **Tiered**: on-page SEO fixes open a PR you merge; net-new content lands as `status: draft`; nothing risky auto-publishes |
| External posting (Reddit etc.) | **Draft for approval** only. Never auto-post. |
| Cadence | Daily agents, weekly coordinator sync |

See `config.json` for the machine-readable version.

---

## The swarm

```
                    ┌─────────────────────────────┐
                    │   06 COORDINATOR (weekly)    │
                    │ reconciles, re-prioritizes,  │
                    │   writes the weekly digest   │
                    └──────────────┬──────────────┘
                                   │ reads all state
   ┌───────────────┬──────────────┼──────────────┬───────────────┐
   ▼               ▼              ▼              ▼               ▼
01 INTEL       02 STRATEGY     03 CONTENT     04 ON-PAGE     05 DISTRIB
(daily)         (daily)         (daily)       SEO/AEO        (weekly)
competitive    backlog +       drafts         (daily)        Reddit/community
intel, ICP     priorities      lessons        metadata,      draft replies
research,                      (draft)         schema,        → approval queue
keyword/AEO                                   links, llms.txt
   │               │              │              │               │
   ▼               ▼              ▼              ▼               ▼
 each agent's output is checked by its AUDITOR (audit/) before it is written to state
```

Every agent: **reads shared state → does its job → its auditor checks the output → result is written back to state.** No agent ships unaudited work.

---

## Directory map

```
growth-os/
  config.json            # the locked decisions + cadence + guardrails
  README.md              # this file
  agents/
    01-intelligence.md   # competitive intel, ICP research, keyword/AEO scan
    02-strategy.md       # turns intel into a prioritized backlog
    03-content.md        # drafts lessons/guides (status: draft)
    04-onpage-seo.md     # technical/on-page SEO + AEO (PRs)
    05-distribution.md   # Reddit/community draft replies (approval queue)
    06-coordinator.md    # weekly reconcile + digest + re-prioritize
    audit/
      audit-protocol.md  # the shared audit discipline + per-agent checklists
  state/                 # SHARED MEMORY (the war room)
    ICP-profile.md       # living profile of who we serve (persistent)
    backlog.md           # prioritized work queue (strategy owns)
    decisions-log.md     # append-only log of what the swarm decided and why
    metrics.md           # SEO/AEO metrics tracked over time
    distribution-queue.md# drafted external posts awaiting Yuri's approval
    intelligence/        # dated intel briefs
    runs/                # per-run logs
  digests/               # weekly digests written for Yuri
  schedule/
    crons.md             # the cron definitions + how to wire / flip to autonomous
  workflows/             # the execution engine (Workflow scripts)
```

---

## How a cycle runs

**Daily** (`workflows/daily-swarm`): Intelligence scans → Strategy re-ranks the backlog → Content drafts the top content item → On-page SEO fixes the top technical item. Each step audited. New content is committed as `status: draft`; SEO fixes open a PR.

**Weekly** (`workflows/weekly-sync`): Distribution drafts community replies into the approval queue → Coordinator reads every agent's week, reconciles conflicts, updates the ICP profile and metrics, sets next week's priorities, and writes a single digest to `digests/`.

---

## Running it

**On demand (any time):**
```
Invoke the Workflow tool with workflows/daily-swarm.js (or weekly-sync.js).
```

**Autonomous (the goal):** see `schedule/crons.md`. The swarm runs server-side on a cron via scheduled remote agents. This requires the scheduling substrate to be live (the Windows routines dispatcher with CLAUDE_CODE_OAUTH_TOKEN, or scheduled remote agents). Until that is confirmed, the swarm runs on demand and produces identical output.

---

## What stays in Yuri's hands (by design)

1. **Merging PRs** for on-page SEO changes.
2. **Flipping drafts to published** for net-new content.
3. **Approving external posts** from `state/distribution-queue.md`.
4. Everything else (research, planning, drafting, optimization proposals, coordination) runs on its own.
