# Schedule (CRONs)

The swarm runs on two scheduled jobs. All times are Asia/Jerusalem. **Shabbat-aware: nothing runs Friday evening through Saturday night.**

| Job | When | Cron | Runs |
|-----|------|------|------|
| Daily swarm | Sun-Thu 06:30 | `30 6 * * 0,1,2,3,4` | Intelligence → Strategy → Content → On-page SEO (each audited) |
| Weekly sync | Sunday 07:00 | `0 7 * * 0` | Distribution (draft) → Coordinator (reconcile + digest) |

> Note: Sunday is the start of Yuri's work week. Friday/Saturday are intentionally excluded.

## Execution engine

Each job invokes a Workflow script in `growth-os/workflows/`:
- `daily-swarm` — runs the four daily agents in sequence, each followed by its auditor, reading/writing `growth-os/state/`.
- `weekly-sync` — runs Distribution then Coordinator, producing the approval queue and the weekly digest.

The Workflow tool persists each run's script and returns a `scriptPath`. The cron re-invokes that scriptPath.

## Wiring it to run autonomously

True autonomy (runs even when the laptop is off / no chat session open) requires a scheduling substrate. Options, in order of preference:

1. **Scheduled remote agents** (the `/schedule` skill). Server-side cron. Preferred. Each routine triggers the workflow run.
2. **Windows routines dispatcher** (`~/.claude/routines/`, Task Scheduler). Needs `CLAUDE_CODE_OAUTH_TOKEN` in the environment. Per memory, cutover was pending; confirm it is live.
3. **On-demand** (today's fallback). Invoke the Workflow tool manually. Produces identical output; just not unattended.

## Current status (2026-06-03) — WIRED FOR 24/7

The "cutover pending" note in memory was stale. The **Windows routines dispatcher is live** (`~/.claude/routines/`, a Scheduled Task firing every 15 min, `CLAUDE_CODE_OAUTH_TOKEN` set, 17 routines already running). The Growth OS is now registered into it:

- `~/.claude/scheduled-tasks/growth-os-daily-swarm/SKILL.md` — daily cycle (intelligence + strategy + the single top producer item, each audited), cron `10 6 * * 0,1,2,3,4` (6:10am Israel, Sun-Thu).
- `~/.claude/scheduled-tasks/growth-os-weekly-sync/SKILL.md` — weekly distribution drafts + coordinator digest, cron `30 7 * * 0` (7:30am Sunday).
- Both added to `~/.claude/routines/routines.json`. The dispatcher picks them up on its next 15-min pass. No Task Scheduler change needed.

Note: the dispatcher runs prompts headless and synchronously, so the SKILL.md files orchestrate the agents directly (not via the async Workflow tool, which fire-and-forgets). The `workflows/*.js` here remain the on-demand/interactive engine and the canonical sequence the SKILL files mirror.

The session-only CronCreate stopgaps were deleted (superseded by the dispatcher).

These existing routines target OTHER properties (portlev.com, aiwagegap.com, aibuildgap.com) and pipelines, not learn.portlev.com, so there is no conflict. Worth aligning later with the existing `Downloads/standards/SEO_AEO_MAINTENANCE.md` SOP and `AEO_POSITION_LOG.csv`.

## What is left (small, mostly Yuri's hands)

- [ ] Confirm the first unattended weekly digest looks right before trusting it fully.
- [ ] Add retry-with-backoff for the Agent 01 ECONNRESET so a transient API blip never wastes a run.
- [ ] beehiiv read is built (`growth-os/tools/beehiiv-metrics.mjs`) but `BEEHIIV_API_KEY` is Sensitive in Vercel and will not `env pull`. Provide the key to the dispatcher env, or expose a small authed server endpoint, to unlock real signup numbers.
- [ ] Google Search Console: needs Yuri to verify the property and grant API access (see metrics.md).
