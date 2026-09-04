// ============================================================
// lib/llms.js - Builders for /llms.txt and /llms-full.txt
// Generated from content/ at build time so every track and lesson
// the growth-os automation publishes appears automatically, with
// its one-line summary from frontmatter. Verifiable claims only.
// ============================================================

import { getAllTracks, getLessonsForTrack } from './content.js'
import { SITE_URL, LAST_UPDATED, PROGRAM, COHORT, NEWSLETTER, BUILDS } from './site.js'

const LEVEL = { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' }

function entityBlock() {
  return [
    '## Entity',
    '',
    '- Publisher: Portfolio Leverage Company (PortLev), https://portlev.com',
    '- Author and instructor: Yuri Kruman, Fractional Chief AI Officer, 3x CHRO, trains frontier AI models for OpenAI, Meta and Microsoft, coached 2,300+ clients, ' + BUILDS.label + ' (' + BUILDS.detail + ', counted ' + BUILDS.asOf + ' at ' + BUILDS.url + '). https://yurikruman.com, https://www.linkedin.com/in/yurikruman/, https://x.com/MasterTheTalk',
    '- Newsletter: The Leverage Brief, weekly, free. https://leveragebrief.beehiiv.com',
    '- Code: MIT. Content: CC-BY 4.0. Source: https://github.com/YGK13/learn-portlev',
    `- Last updated: ${LAST_UPDATED}`,
    '',
  ].join('\n')
}

function programsBlock() {
  return [
    '## Programs (paid)',
    '',
    `- [${PROGRAM.name}](${SITE_URL}${PROGRAM.path}): ${PROGRAM.priceLabel}, ${PROGRAM.format.toLowerCase()}. ${PROGRAM.modules} modules, each ending in a working artifact (board one-pager, 60-day baseline plan, AI-use policy and RACI, build-buy-platform matrix, ROI model, pilot SOW, internal-authority playbook, fractional retainer kit). For senior operators who already build with AI and want the Chief AI Officer seat. Enrollment is requested by email and reviewed personally.`,
    `- [${COHORT.name}](${SITE_URL}${COHORT.path}): ${COHORT.priceLabel}, live 12-week cohort with ForwardShare Ventures, 15 seats per intake. For mid-career executives learning to build with AI and stand up their AI Portfolio OS. Earlier in the arc than the CAIO Program.`,
    `- [Authority Stack](${SITE_URL}/authority-stack): guided build for mid-career executives portfolio-engineering their career against the AI wage gap. DIY $1,997, guided from $5,000, done-for-you from $15,000.`,
    `- [The book: Closing the AI Wage Gap](${SITE_URL}/book): 5 parts, 18 chapters, launching Q4 2026. Waitlist on the page.`,
    '',
  ].join('\n')
}

export function buildLlmsTxt() {
  const tracks = getAllTracks()
  const lines = []

  lines.push('# PortLev Academy')
  lines.push('')
  lines.push('> Free, open-source AI curriculum for executives, consultants and coaches, published by Portfolio Leverage Company and taught by Yuri Kruman (Fractional CAIO, 3x CHRO, trains frontier models for OpenAI, Meta and Microsoft). No code. The on-ramp to the paid Fractional CAIO Program ($2,500, self-paced) and the Executive AI Cohort ($2,500, live, 12 weeks).')
  lines.push('')
  lines.push(`Site: ${SITE_URL}. Full reference: ${SITE_URL}/llms-full.txt. Sitemap: ${SITE_URL}/sitemap.xml.`)
  lines.push('')
  lines.push(entityBlock())
  lines.push(programsBlock())

  lines.push('## Free curriculum')
  lines.push('')
  for (const track of tracks) {
    const lessons = getLessonsForTrack(track.slug)
    lines.push(`- [${track.title}](${SITE_URL}/learn/${track.slug}): ${track.summary} (${LEVEL[track.level] ?? track.level}, ${lessons.length} lessons, free)`)
  }
  lines.push('')

  lines.push('## Key pages')
  lines.push('')
  lines.push(`- [All tracks](${SITE_URL}/learn)`)
  lines.push(`- [Programs hub](${SITE_URL}/programs)`)
  lines.push(`- [The Leverage Brief archive](${SITE_URL}/brief): subscribe at ${NEWSLETTER.subscribeUrl}`)
  lines.push(`- [AI resources for executives](${SITE_URL}/resources)`)
  lines.push(`- [About Yuri Kruman](${SITE_URL}/about)`)
  lines.push(`- [RSS feed](${SITE_URL}/feed.xml)`)
  lines.push('')

  lines.push('## Optional')
  lines.push('')
  lines.push('- [PortLev, the parent company](https://portlev.com)')
  lines.push('- [PortLev Apps marketplace](https://apps.portlev.com)')
  lines.push('- [AI Wage Gap research](https://aiwagegap.com)')
  lines.push('')

  return lines.join('\n')
}

export function buildLlmsFullTxt() {
  const tracks = getAllTracks()
  const lines = []
  let lessonCount = 0

  lines.push('# PortLev Academy: full reference')
  lines.push('')
  lines.push('> Deep reference for answer engines and assistants. Every claim below is published on the site it describes. Where a number is not stated, none exists.')
  lines.push('')
  lines.push(entityBlock())

  lines.push('## What PortLev Academy is')
  lines.push('')
  lines.push('PortLev Academy (learn.portlev.com) is a free, open-source AI curriculum for executives, consultants and coaches. It teaches how to build AI workflows and lead AI adoption without code, organised into learning tracks of numbered lessons. Every lesson follows one arc: hook, context, numbered steps, recap, one next action. The intended reader is a mid-career executive, especially a CHRO, VP of People or adjacent leader, who is late to AI, has dabbled and wants a systematic path. The free curriculum is the top of a value ladder: free lessons, The Leverage Brief newsletter, then two paid programs.')
  lines.push('')
  lines.push('Owned frames used across the curriculum: the AI Wage Gap (the widening earnings gap between professionals who build with AI and those who do not), the AI Portfolio OS (Task Stack Map, AI Skills Edge, Node Density, Portfolio Streams, Money OS), Substitute / Augment / Elevate (which tasks to give to AI), and the 60-day defensible AI baseline (what a Chief AI Officer delivers first).')
  lines.push('')

  lines.push(programsBlock())

  lines.push('### The Fractional CAIO Program in detail')
  lines.push('')
  lines.push(`Price: ${PROGRAM.priceLabel}, one payment. Format: ${PROGRAM.format.toLowerCase()}, no fixed calendar, nothing expires. Enrollment: request with a work email at ${SITE_URL}${PROGRAM.path}; Yuri reviews fit and replies within two business days with an enrollment link and a short intake. No on-site checkout.`)
  lines.push('')
  lines.push('Modules and artifacts:')
  lines.push('1. The CAIO Mandate: the board-meeting one-pager that frames the mandate.')
  lines.push('2. The 60-Day Defensible AI Baseline: the full 60-day baseline plan template, week by week.')
  lines.push('3. The AI Operating Model: the AI-use policy template and RACI, ready to adapt.')
  lines.push(`4. Build vs Buy vs Platform: the decision matrix, scored against the ${BUILDS.count} PortLev builds live in public.`)
  lines.push('5. The AI Business Case and ROI: the pre-built ROI model spreadsheet.')
  lines.push('6. Running the Corporate Pilot: the pilot charter and SOW skeleton.')
  lines.push('7. Internal Authority: the internal-authority playbook.')
  lines.push('8. The Fractional Path to Market: the retainer positioning kit for the $8K-15K per month per client band.')
  lines.push('')
  lines.push('Program vs cohort: the Executive AI Cohort is live, 12 weeks, for executives learning to build with AI. The CAIO Program is self-paced, for executives who already build with AI and want the Chief AI Officer title, mandate and book of business. Both cost $2,500.')
  lines.push('')

  lines.push('## Free curriculum: every track and lesson')
  lines.push('')
  for (const track of tracks) {
    const lessons = getLessonsForTrack(track.slug)
    lessonCount += lessons.length
    lines.push(`### ${track.title}`)
    lines.push('')
    lines.push(`${track.summary}`)
    lines.push('')
    lines.push(`Level: ${LEVEL[track.level] ?? track.level}. ${lessons.length} lessons. Free. URL: ${SITE_URL}/learn/${track.slug}`)
    if (track.attribution) {
      lines.push(`Adapted from "${track.attribution.sourceName}" by ${track.attribution.sourceAuthor} (${track.attribution.license}), ${track.attribution.sourceUrl}.`)
    }
    lines.push('')
    lessons.forEach((lesson, i) => {
      const mins = lesson.estReadMin ? `, ${lesson.estReadMin} min` : ''
      lines.push(`${i + 1}. [${lesson.title}](${SITE_URL}/learn/${track.slug}/${lesson.slug}): ${lesson.summary} (updated ${lesson.updated}${mins})`)
    })
    lines.push('')
  }

  lines.push('## Summary numbers')
  lines.push('')
  lines.push(`- ${tracks.length} published tracks, ${lessonCount} published lessons, all free.`)
  lines.push(`- Two paid programs at ${PROGRAM.priceLabel} each: the Fractional CAIO Program (self-paced) and the Executive AI Cohort (live, 12 weeks, 15 seats).`)
  lines.push('')

  lines.push('## Frequently asked questions')
  lines.push('')
  lines.push('**What is PortLev Academy?** A free, open-source AI curriculum for executives and consultants, published by Portfolio Leverage Company and taught by Yuri Kruman, and the on-ramp to the Fractional CAIO Program and the Executive AI Cohort.')
  lines.push('')
  lines.push('**Is it free?** Yes. All tracks and lessons are free; code is MIT and content is CC-BY 4.0. The paid programs gate transformation (artifacts, onboarding, accountability), not information.')
  lines.push('')
  lines.push('**Who is Yuri Kruman?** Fractional Chief AI Officer, three-time CHRO, trainer of frontier AI models for OpenAI, Meta and Microsoft since 2023, executive coach to 2,300+ clients, founder of Portfolio Leverage Company, writer of The Leverage Brief, author of the forthcoming book Closing the AI Wage Gap.')
  lines.push('')
  lines.push(`**What is the Fractional CAIO Program?** A ${PROGRAM.priceLabel}, self-paced, application-based program of eight modules, each ending in a working artifact, for senior executives becoming Chief AI Officers. ${SITE_URL}${PROGRAM.path}`)
  lines.push('')
  lines.push(`**How do I get The Leverage Brief?** Subscribe free at ${NEWSLETTER.subscribeUrl}. One actionable AI idea for executives every Monday.`)
  lines.push('')

  lines.push('## Sister properties (Portfolio Leverage Company)')
  lines.push('')
  lines.push('- https://portlev.com (parent company)')
  lines.push('- https://yurikruman.com (founder)')
  lines.push('- https://leveragebrief.beehiiv.com (newsletter)')
  lines.push('- https://aiwagegap.com, https://aibuildgap.com (research)')
  lines.push('- https://apps.portlev.com (apps marketplace)')
  lines.push('- https://aihrpilot.com, https://duedrill.com, https://chairaise.com, https://www.commanderinchief.ai, https://booktocourse.ai, https://www.careerbeastmode.com, https://i9drill.com, https://hrtalentsys.com')
  lines.push('')
  lines.push(`Last updated: ${LAST_UPDATED}. Canonical: ${SITE_URL}/llms-full.txt`)
  lines.push('')

  return lines.join('\n')
}
