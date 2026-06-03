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

## What Yuri must confirm to flip to fully autonomous
- [ ] `CLAUDE_CODE_OAUTH_TOKEN` present for the dispatcher, OR scheduled-remote-agents available in this workspace.
- [ ] The two routines registered (daily + weekly) pointing at the workflow scriptPaths.
- [ ] First unattended run reviewed in the weekly digest to confirm quality before trusting it.
