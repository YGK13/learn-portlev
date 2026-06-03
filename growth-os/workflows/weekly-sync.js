// ============================================================
// growth-os/workflows/weekly-sync.js
// PortLev Academy Growth OS — WEEKLY run.
// Distribution (drafts to approval queue) -> Coordinator
// (reconcile the whole week, update shared truth, write the
// single digest Yuri reads). Reads/writes growth-os/state.
//
// Run: Workflow tool with scriptPath = this file.
// Cron: Sunday 07:00 Asia/Jerusalem (see schedule/crons.md).
// ============================================================

export const meta = {
  name: 'growth-os-weekly-sync',
  description: 'PortLev Growth OS weekly sync: distribution drafts + coordinator reconcile and digest',
  phases: [
    { title: 'Distribution' },
    { title: 'Coordinator' },
  ],
}

const GROW = 'C:/Users/yurik/Downloads/learn-portlev/growth-os'

function defPrompt(agentFile, extra) {
  return `You are an agent in the PortLev Academy Growth OS swarm. Read IN FULL: ${GROW}/config.json, ${GROW}/agents/${agentFile}, ${GROW}/state/ICP-profile.md, ${GROW}/state/decisions-log.md.
Do your job exactly as your definition specifies, reading and writing the state files it lists.
HARD RULES: zero hallucination (sourced or omitted). No Oxford comma. No em dash. Yuri Kruman voice. Distribution drafts ONLY, never post.
${extra || ''}
Return a concise summary, the exact file paths written, and every source URL used.`
}

function auditPrompt(auditKey, producerSummary) {
  return `You are the ADVERSARIAL AUDITOR for the PortLev Growth OS. Read ${GROW}/agents/audit/audit-protocol.md IN FULL. Audit the output below against the universal + "${auditKey}" checks. Find why it should NOT ship. Inspect the files it wrote; verify sources; confirm NOTHING was auto-posted.
AGENT OUTPUT:
${producerSummary}
Return ONLY JSON: {"pass":bool,"severity":"block|warn|ok","issues":[],"fixes":[],"notes":""}.`
}

// ---- Distribution (drafts only) ----------------------------------
phase('Distribution')
const dist = await agent(
  defPrompt('05-distribution.md', 'Find 3-7 genuinely relevant, currently-active threads where Yuri can add real value. Draft a value-first reply for each and append to state/distribution-queue.md as pending-approval. VERIFY each community\'s self-promotion rules. Post NOTHING.'),
  { label: '05-distribution', phase: 'Distribution' }
)
await agent(auditPrompt('distribution', dist), { label: 'audit:distribution', phase: 'Distribution' })

// ---- Coordinator (reconcile + digest) ----------------------------
phase('Coordinator')
const digest = await agent(
  defPrompt('06-coordinator.md', `This week's distribution summary:\n${dist}\nRead every intelligence brief, run log, the backlog, metrics, decisions-log and any new drafts/PRs from the week. Reconcile per the cross-agent checks. Update ICP-profile.md, metrics.md and decisions-log.md. Then write the single weekly digest to ${GROW}/digests/ (use ISO year-week, e.g. 2026-W23.md).`),
  { label: '06-coordinator', phase: 'Coordinator' }
)

log('Weekly sync complete. Digest written. Approval queue ready for Yuri.')
return { dist, digest }
