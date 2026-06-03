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

## Current status (2026-06-03)

- **Workflows: built and proven.** `daily-swarm.js` and `weekly-sync.js` run on demand today and produce identical output to a scheduled run.
- **In-session crons: registered** via CronCreate (daily `33 6 * * 0,1,2,3,4`, weekly `7 7 * * 0`, Israel local). IMPORTANT: these are **session-only**. They fire only while a Claude Code session is open and idle, and they auto-expire after 7 days. They are NOT 24/7 autonomy. They are a stopgap for testing.
- **Proof run done.** The audit layer was verified: it blocked a transient Intelligence API failure and two brand/zero-hallucination violations before anything reached shared state. Nothing was published or posted.

## The ONE step to true 24/7 autonomy (needs Yuri)

The in-session cron dies when Claude closes. Real always-on requires the **Windows routines dispatcher** (Task Scheduler), which per memory (`project_claude_routines_alwayson.md`) is installed but "cutover pending" and needs `CLAUDE_CODE_OAUTH_TOKEN` in the environment.

- [ ] Confirm `CLAUDE_CODE_OAUTH_TOKEN` is set for the dispatcher.
- [ ] Cut the dispatcher over (flip it live).
- [ ] Register two routines pointing at `daily-swarm.js` and `weekly-sync.js`.
- [ ] Review the first unattended weekly digest before trusting it unsupervised.
- [ ] Resolve the Agent 01 ECONNRESET with retry-with-backoff in the runner (logged by the coordinator) so a transient API blip never wastes a run again.
