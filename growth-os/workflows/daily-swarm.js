// ============================================================
// growth-os/workflows/daily-swarm.js
// PortLev Academy Growth OS — DAILY run.
// Intelligence -> Strategy -> Content (draft) -> On-page SEO (PR),
// each producer immediately checked by its adversarial auditor
// before its output is trusted. Reads/writes growth-os/state.
//
// Run: Workflow tool with scriptPath = this file.
// Cron: Sun-Thu 06:30 Asia/Jerusalem (see schedule/crons.md).
// ============================================================

export const meta = {
  name: 'growth-os-daily-swarm',
  description: 'PortLev Growth OS daily swarm: intelligence, strategy, content draft, on-page SEO PR, each audited',
  phases: [
    { title: 'Intelligence' },
    { title: 'Strategy' },
    { title: 'Content' },
    { title: 'On-page SEO' },
  ],
}

const GROW = 'C:/Users/yurik/Downloads/learn-portlev/growth-os'

// Build a producing-agent prompt that points at its definition + the guardrails.
function defPrompt(agentFile, extra) {
  return `You are an agent in the PortLev Academy Growth OS swarm. Read these files IN FULL before acting:
- ${GROW}/config.json (locked decisions + guardrails)
- ${GROW}/agents/${agentFile} (your complete job definition — follow it exactly)
- ${GROW}/state/ICP-profile.md (who we serve)
- ${GROW}/state/decisions-log.md (do not redo or contradict past decisions)
Then do your job exactly as your definition specifies. Read every other state file your definition lists, and write your outputs to the exact paths it specifies.
HARD RULES: zero hallucination (every stat, name, quote and URL must be from a real fetched source or you omit it). No Oxford comma. No em dash. Yuri Kruman voice. Tiered change control: content lands as status: draft; on-page SEO opens a PR and never merges; nothing risky auto-publishes.
${extra || ''}
Return: a concise summary of what you did, the exact file paths you created/modified, and a bulleted list of every source URL you used.`
}

// Build an adversarial auditor prompt.
function auditPrompt(auditKey, producerSummary) {
  return `You are the ADVERSARIAL AUDITOR for the PortLev Growth OS. Read ${GROW}/agents/audit/audit-protocol.md IN FULL.
Audit the following agent output against the universal checks AND the per-agent checks for "${auditKey}". Your job is to find the reason it should NOT ship, not to approve it.
Open and inspect every file the agent claims it wrote. Independently verify that each stat, quote and URL is real and sourced (fetch the source if needed). Confirm voice rules (no Oxford comma, no em dash) and change-control rules were honored.
AGENT OUTPUT:
${producerSummary}
Return ONLY JSON: {"pass": true|false, "severity": "block|warn|ok", "issues": [], "fixes": [], "notes": ""}.
If severity is block or warn, also append a dated note to ${GROW}/state/runs/ describing the issue for the coordinator.`
}

// ---- Intelligence -------------------------------------------------
phase('Intelligence')
const intel = await agent(
  defPrompt('01-intelligence.md', 'Scope today to 1-2 threads. If no baseline brief exists yet, establish the baseline (ICP signals, top competitors, top AEO queries).'),
  { label: '01-intelligence', phase: 'Intelligence' }
)
await agent(auditPrompt('intelligence', intel), { label: 'audit:intelligence', phase: 'Intelligence' })

// ---- Strategy -----------------------------------------------------
phase('Strategy')
const strat = await agent(
  defPrompt('02-strategy.md', `Latest intelligence summary:\n${intel}\nRe-rank the backlog and mark the single top item of each type (content, onpage, distribution) as ready.`),
  { label: '02-strategy', phase: 'Strategy' }
)
await agent(auditPrompt('strategy', strat), { label: 'audit:strategy', phase: 'Strategy' })

// ---- Content (draft only) ----------------------------------------
phase('Content')
const content = await agent(
  defPrompt('03-content.md', `Strategy/backlog summary:\n${strat}\nDraft ONLY the single top \`content\` item. Write it as a complete lesson with frontmatter status: draft. Do not touch any other file.`),
  { label: '03-content', phase: 'Content' }
)
await agent(auditPrompt('content', content), { label: 'audit:content', phase: 'Content' })

// ---- On-page SEO / AEO (PR only) ---------------------------------
phase('On-page SEO')
const seo = await agent(
  defPrompt('04-onpage-seo.md', `Strategy/backlog summary:\n${strat}\nExecute ONLY the single top \`onpage\` item. Make the change on a new branch and open a PR. Run npm run build and confirm it passes. Never merge.`),
  { label: '04-onpage-seo', phase: 'On-page SEO' }
)
await agent(auditPrompt('onpage-seo', seo), { label: 'audit:onpage-seo', phase: 'On-page SEO' })

log('Daily swarm complete. New content drafted (status: draft) and an SEO PR opened. Both await Yuri in the weekly digest.')
return { intel, strat, content, seo }
