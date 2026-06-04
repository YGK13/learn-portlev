// ============================================================
// growth-os/workflows/content-pipeline.js
// Content OS pipeline (a division of the Growth OS).
// C1 Research -> C2 Editorial Strategy (+ ICP panel @ outline)
// -> C4 Content draft -> [technical + SEO + ICP-panel audits]
// -> C5 Repurposing -> C7 Content Coordinator.
//
// The ICP-Member panel is the distinctive gate: 3 personas judge
// fit/usefulness/ladder-advancement adversarially, in character.
//
// Run: Workflow tool with scriptPath = this file (on demand / proof).
// Cron (Phase 4): mirrored by a SKILL.md on the dispatcher.
// ============================================================

export const meta = {
  name: 'content-os-pipeline',
  description: 'Content OS: research -> editorial strategy -> draft -> (technical + SEO + ICP-panel audits) -> repurpose -> coordinate',
  phases: [
    { title: 'Research' },
    { title: 'Strategy' },
    { title: 'Create' },
    { title: 'ICP Panel' },
    { title: 'Repurpose' },
    { title: 'Coordinate' },
  ],
}

const GROW = 'C:/Users/yurik/Downloads/learn-portlev/growth-os'

function defPrompt(agentFile, extra) {
  return `You are an agent in the PortLev Academy Content OS (a division of the Growth OS). Read IN FULL: ${GROW}/config.json, ${GROW}/agents/${agentFile}, ${GROW}/state/transformation-ladder.md, ${GROW}/state/ICP-profile.md, ${GROW}/state/decisions-log.md.
Do your job exactly as your definition specifies; read every state file it lists; write outputs to the exact paths it specifies.
HARD RULES: zero hallucination (sourced or omitted; quotes only from book/signed-release transcripts). No Oxford comma. No em dash. Yuri Kruman voice. Tiered change control (content = draft only).
${extra || ''}
Return a concise summary, exact file paths written, and every source URL used.`
}

function techAudit(key, summary) {
  return `You are the technical/brand + SEO/AEO AUDITOR. Read ${GROW}/agents/audit/audit-protocol.md IN FULL. Audit the output below against the universal + "${key}" checks. Verify sources by fetch; confirm no Oxford comma, no em dash, change-control honored. Fix small defects in place; reject structural ones to ${GROW}/state/runs/.
OUTPUT:\n${summary}\nReturn ONLY JSON {"pass":bool,"severity":"block|warn|ok","issues":[],"fixes":[],"notes":""}.`
}

// The ICP-Member panel: 3 personas judge in character.
function icpPanel(stage, target) {
  return `You are the ICP-MEMBER AUDIT PANEL for the PortLev Content OS. Read IN FULL: ${GROW}/agents/audit/icp-panel/icp-panel-protocol.md and all three personas (persona-01-anxious-chro.md, persona-02-portfolio-builder.md, persona-03-enterprise-operator.md) in ${GROW}/agents/audit/icp-panel/.
Review the following content (${stage} stage) AS EACH of the three personas, independently and in character. Be adversarial: the real ICP is skeptical, defensive and time-poor. Score each persona on the rubric (relevant, timely, useful, voice 1-5), name the ladder rung + the next move it creates, and say in one sentence what would make it a 5 for that persona. Then synthesize a verdict per the decision rule.
CONTENT UNDER REVIEW:\n${target}\nReturn ONLY the JSON described in the panel protocol. Write the full verdict to ${GROW}/state/runs/ as an icp-panel log too.`
}

// ---- Research ----
phase('Research')
const research = await agent(defPrompt('content/C1-content-research.md', 'Read the latest Growth OS intelligence baseline and produce ONE content research dossier for the single highest-value theme this run.'), { label: 'C1-research', phase: 'Research' })
await agent(techAudit('intelligence', research), { label: 'audit:research', phase: 'Research' })

// ---- Strategy + ICP panel at outline ----
phase('Strategy')
const strategy = await agent(defPrompt('content/C2-editorial-strategy.md', `Research dossier:\n${research}\nUpdate the content calendar and produce the single top READY content item as a tight OUTLINE (title, target query, rung, next move, destination, persona, section beats). Do not write the full piece.`), { label: 'C2-strategy', phase: 'Strategy' })
const outlinePanel = await agent(icpPanel('outline', strategy), { label: 'icp-panel:outline', phase: 'Strategy' })

// ---- Create (shared C4 = 03-content.md) ----
phase('Create')
const draft = await agent(defPrompt('03-content.md', `Approved outline + ICP outline-panel verdict:\n${strategy}\n${outlinePanel}\nDraft the full lesson as status: draft, house format, TLDR/Pullquote/Stat where useful, addressing the panel's outline-stage objections. Do not publish.`), { label: 'C4-content', phase: 'Create' })
await agent(techAudit('content', draft), { label: 'audit:content', phase: 'Create' })

// ---- ICP panel at draft stage (the real gate) ----
phase('ICP Panel')
const draftPanel = await agent(icpPanel('draft', draft), { label: 'icp-panel:draft', phase: 'ICP Panel' })

// ---- Repurpose ----
phase('Repurpose')
const repurpose = await agent(defPrompt('content/C5-repurposing.md', `Source draft + its ICP-panel verdict:\n${draft}\n${draftPanel}\nIf the panel verdict is pass or revise-then-pass, draft channel derivatives (Brief section, LinkedIn, Reddit draft to the queue, ticker item). If reject, skip repurposing and note why.`), { label: 'C5-repurpose', phase: 'Repurpose' })

// ---- Coordinate ----
phase('Coordinate')
const coord = await agent(defPrompt('content/C7-content-coordinator.md', `This run produced: research dossier, outline + outline-panel, draft + draft-panel, repurposing.\nResearch:\n${research}\nDraft panel:\n${draftPanel}\nReconcile, roll content metrics (drafts, panel pass rate, ladder coverage), and write the content-division summary block for the master coordinator. Highlight what the ICP panel rejected/revised and why.`), { label: 'C7-coordinate', phase: 'Coordinate' })

log('Content OS pipeline complete. ICP panel ran at outline and draft stages. Any new lesson is status: draft for human publish.')
return { research, strategy, outlinePanel, draft, draftPanel, repurpose, coord }
