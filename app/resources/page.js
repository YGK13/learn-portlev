// ============================================================
// app/resources/page.js — Curated AI resources directory
// Server Component. Three intents: Stay Informed, Get Certified,
// Build With These. Data-driven from the arrays below.
//
// Accuracy note: only links that were verified during research
// are included. Certification links point to stable provider
// hubs (specific course named in the text) to avoid link rot.
// ============================================================

import CTABanner from '@/components/CTABanner'

export const metadata = {
  title:       'Resources',
  description: 'A curated directory of the best AI newsletters, certifications and ' +
               'open-source tools for executives learning and building with AI.',
}

// ------------------------------------------------------------
// Newsletters — grouped by how an executive should use them
// ------------------------------------------------------------
const DAILY_BRIEFINGS = [
  {
    name: 'The Rundown AI',
    by:   'Rowan Cheung',
    desc: 'Daily AI news, tools and practical insight in plain language. The strongest default daily for a non-technical leader.',
    url:  'https://www.therundown.ai/',
  },
  {
    name: 'The Neuron',
    by:   'Pete Huang and Noah Edelman',
    desc: 'Daily AI news plus actionable guidance, written in a friendly, easy-to-read tone. A lighter alternative to The Rundown.',
    url:  'https://www.theneurondaily.com/',
  },
  {
    name: 'Superhuman AI',
    by:   'Zain Kahn',
    desc: 'Get smarter about AI in three minutes a day: tools, tutorials and the business angle. The shortest serious daily brief.',
    url:  'https://www.superhuman.ai/',
  },
]

const WEEKLY_DEPTH = [
  {
    name: 'One Useful Thing',
    by:   'Prof. Ethan Mollick, Wharton',
    desc: 'Research-based essays on what AI means for work, management and decision-making. The single best fit for this audience.',
    url:  'https://www.oneusefulthing.org/',
  },
  {
    name: 'The Batch',
    by:   'Andrew Ng, DeepLearning.AI',
    desc: 'A weekly, hype-free roundup of AI news and research with commentary from one of the most credible voices in the field.',
    url:  'https://www.deeplearning.ai/the-batch/',
  },
  {
    name: 'TLDR AI',
    by:   'The TLDR newsletter family',
    desc: 'A technical daily covering research, engineering and big-tech AI news. Substance over hype, for the more technical leader.',
    url:  'https://tldr.tech/ai',
  },
  {
    name: "Ben's Bites",
    by:   'Ben Tossell',
    desc: 'AI news through a founder, builder and early-investor lens. Best for leaders with a startup or product orientation.',
    url:  'https://www.bensbites.com/',
  },
]

const CREATORS = [
  {
    name: 'Nate Herk',
    by:   'YouTube and the AI Automation Society',
    desc: 'No-code AI automation and agents, built on n8n. The most builder-oriented resource here: learn to actually build working automations.',
    url:  'https://www.youtube.com/@nateherk',
  },
  {
    name: 'Eric Vyacheslav',
    by:   'LinkedIn',
    desc: 'A leading AI voice on LinkedIn: a steady, digestible feed of model releases and breakthroughs inside a platform you already use.',
    url:  'https://www.linkedin.com/in/eric-vyacheslav-156273169/',
  },
  {
    name: 'Guillermo Flor',
    by:   'The AI Opportunity',
    desc: 'AI as a business and investment opportunity: where the money is moving, for leaders who think in markets, not tutorials.',
    url:  'https://www.theaiopportunities.com/',
  },
  {
    name: 'John Peslar',
    by:   'LinkedIn and newsletter',
    desc: 'Hands-on AI automation tactics for sales, lead generation and personal-brand growth on LinkedIn.',
    url:  'https://www.johnpeslar.com/',
  },
  {
    name: 'AlphaSignal',
    by:   'Technical AI newsletter',
    desc: 'Research papers, model releases and trending open-source tools, built to read in five minutes. For the technically curious leader.',
    url:  'https://alphasignalai.beehiiv.com/',
  },
  {
    name: "There's An AI For That (TAAFT)",
    by:   'AI tools directory',
    desc: 'A curated, searchable catalog of thousands of AI tools by use case. The place to go in "what tool do I use for X" mode.',
    url:  'https://theresanaiforthat.com/',
  },
]

// ------------------------------------------------------------
// Certifications and courses — grouped by function
// ------------------------------------------------------------
const CERT_CATEGORIES = [
  {
    title: 'AI literacy for leaders',
    blurb: 'Start here. Broad, non-technical grounding in what AI is and how to use it at work.',
    items: [
      { name: 'Generative AI for Everyone', provider: 'DeepLearning.AI (Andrew Ng)', cost: 'Free to audit · ~$49 for the certificate', note: 'The flagship non-technical primer. Best first course for any executive.', url: 'https://www.deeplearning.ai/' },
      { name: 'AI Fluency: Framework and Foundations', provider: 'Anthropic Academy', cost: 'Free · includes a certificate', note: 'A vendor-neutral, ethics-aware framework for working with any AI tool.', url: 'https://anthropic.skilljar.com/' },
      { name: 'AI Foundations', provider: 'OpenAI Academy', cost: 'Free', note: 'A self-paced primer you work through inside ChatGPT itself.', url: 'https://academy.openai.com/' },
      { name: 'Google Cloud Generative AI Leader', provider: 'Google Cloud', cost: 'Paid · ~$99 proctored exam (prep free)', note: 'A real proctored certification designed for non-technical leaders.', url: 'https://cloud.google.com/learn/training' },
    ],
  },
  {
    title: 'Prompt engineering',
    blurb: 'The core practical skill: getting consistently strong output from any AI model.',
    items: [
      { name: 'Google Prompting Essentials', provider: 'Google, via Coursera', cost: 'Paid · Coursera subscription ~$49/month', note: 'The best all-around prompting course. No technical experience required.', url: 'https://www.coursera.org/' },
      { name: 'ChatGPT Prompt Engineering for Developers', provider: 'DeepLearning.AI and OpenAI', cost: 'Free · ~1.5 hours', note: 'Short and excellent; light coding helps but is not essential.', url: 'https://www.deeplearning.ai/' },
      { name: 'Prompting modules in Claude 101', provider: 'Anthropic Academy', cost: 'Free · includes a certificate', note: 'For leaders and teams standardizing on Claude.', url: 'https://anthropic.skilljar.com/' },
    ],
  },
  {
    title: 'AI for product and business',
    blurb: 'Planning AI initiatives, organizational readiness and AI strategy.',
    items: [
      { name: 'Generative AI for Business and Technical Decision Makers', provider: 'AWS Skill Builder', cost: 'Free', note: 'A three-part series on planning AI projects and building a ready organization.', url: 'https://skillbuilder.aws/' },
      { name: 'Generative AI for Executives', provider: 'AWS Skill Builder', cost: 'Free', note: 'A short, business-framed overview for C-suite leaders.', url: 'https://skillbuilder.aws/' },
      { name: 'Google Cloud Generative AI Leader', provider: 'Google Cloud', cost: 'Paid · ~$99 exam', note: 'Doubles as a business-strategy credential; part of the exam is gen-AI strategy.', url: 'https://cloud.google.com/learn/training' },
    ],
  },
  {
    title: 'Technical and machine learning',
    blurb: 'For leaders who want genuine fundamentals, or a credential their teams can pursue.',
    items: [
      { name: 'Machine Learning Specialization', provider: 'Stanford and DeepLearning.AI', cost: 'Free to audit · ~$49/month for the certificate', note: 'The canonical on-ramp to machine learning fundamentals.', url: 'https://www.deeplearning.ai/' },
      { name: 'AWS Certified AI Practitioner', provider: 'Amazon Web Services', cost: 'Paid · ~$100 proctored exam', note: 'A foundational, application-focused credential accessible to non-engineers.', url: 'https://skillbuilder.aws/' },
      { name: 'Azure AI Fundamentals (AI-901)', provider: 'Microsoft', cost: 'Paid · ~$99 exam', note: 'Entry-level technical credential. Note: the older AI-900 retires mid-2026; pursue AI-901.', url: 'https://learn.microsoft.com/training/' },
    ],
  },
  {
    title: 'AI governance, risk and ethics',
    blurb: 'For leaders in legal, compliance and risk, or anyone building an AI governance program.',
    items: [
      { name: 'AIGP — Artificial Intelligence Governance Professional', provider: 'IAPP', cost: 'Paid · exam ~$649 to $799 (training extra)', note: 'The leading professional AI governance certification.', url: 'https://iapp.org/' },
      { name: 'Responsible AI modules', provider: 'Microsoft and LinkedIn Learning', cost: 'Free', note: 'A lightweight introduction to responsible-AI frameworks, inside the Career Essentials path.', url: 'https://learn.microsoft.com/training/' },
    ],
  },
]

// ------------------------------------------------------------
// The Toolkit — open-source repos worth knowing, by category.
// Each line: one repo, one short effect. Curated from a real
// power-user Claude Code setup.
// ------------------------------------------------------------
const TOOLKIT = [
  {
    category: 'Claude Code, supercharged',
    items: [
      { name: 'superpowers',             by: 'obra',          desc: 'Auto-sources and activates skills',         url: 'https://github.com/obra/superpowers' },
      { name: 'everything-claude-code',  by: 'affaan-m',      desc: 'The complete Claude Code playbook',         url: 'https://github.com/affaan-m/everything-claude-code' },
      { name: 'gstack',                  by: 'garrytan',      desc: 'A full deploy pipeline inside Claude',      url: 'https://github.com/garrytan/gstack' },
      { name: 'gbrain',                  by: 'garrytan',      desc: 'A persistent second brain for Claude',      url: 'https://github.com/garrytan/gbrain' },
      { name: 'Personal_AI_Infrastructure', by: 'danielmiessler', desc: 'A full personal AI operating system',  url: 'https://github.com/danielmiessler/Personal_AI_Infrastructure' },
      { name: 'claude-doctor',           by: 'millionco',     desc: 'Diagnoses and tunes your setup',            url: 'https://github.com/millionco/claude-doctor' },
      { name: 'archon',                  by: 'coleam00',      desc: 'Repeatable, standardized coding workflows', url: 'https://github.com/coleam00/archon' },
    ],
  },
  {
    category: 'Memory and token efficiency',
    items: [
      { name: 'claude-mem',  by: 'thedotmack', desc: 'Free long-term memory, fewer tokens', url: 'https://github.com/thedotmack/claude-mem' },
      { name: 'mempalace',   by: 'MemPalace',  desc: 'A structured memory palace',          url: 'https://github.com/MemPalace/mempalace' },
      { name: 'rtk',         by: 'rtk-ai',     desc: 'Cuts token use up to 90 percent',     url: 'https://github.com/rtk-ai/rtk' },
      { name: 'lat.md',      by: '1st1',       desc: 'Fixes markdown file architecture',    url: 'https://github.com/1st1/lat.md' },
    ],
  },
  {
    category: 'Agents and skills',
    items: [
      { name: 'agent-skills',      by: 'addyosmani',     desc: 'A curated agent-skills collection',    url: 'https://github.com/addyosmani/agent-skills' },
      { name: 'book-to-skill',     by: 'virgiliojr94',   desc: 'Turns any book into a Claude skill',   url: 'https://github.com/virgiliojr94/book-to-skill' },
      { name: 'create-agent-tui',  by: 'OpenRouterTeam', desc: 'A full agent in one command',          url: 'https://github.com/OpenRouterTeam/skills/tree/main/skills/create-agent-tui' },
      { name: 'maestro',           by: 'its-maestro-baby', desc: 'A Bloomberg Terminal for Claude Code', url: 'https://github.com/its-maestro-baby/maestro' },
      { name: 'helmor',            by: 'dohooo',         desc: 'Multi-agent development fixer',         url: 'https://github.com/dohooo/helmor' },
      { name: 'paperclip',         by: 'paperclipai',    desc: 'An AI agent that manages agents',      url: 'https://github.com/paperclipai/paperclip' },
      { name: 'OpenMythos',        by: 'kyegomez',       desc: 'An open-source agent toolkit',         url: 'https://github.com/kyegomez/OpenMythos' },
      { name: 'token-dashboard',   by: 'nateherkai',     desc: 'Live Claude token tracking',           url: 'https://github.com/nateherkai/token-dashboard' },
    ],
  },
  {
    category: 'Content, media and design',
    items: [
      { name: 'PptxGenJS',         by: 'gitbrent',      desc: 'Generate slide decks, a free Gamma',       url: 'https://github.com/gitbrent/PptxGenJS' },
      { name: 'supertonic',        by: 'supertone-inc', desc: 'Fast TTS, an ElevenLabs alternative',      url: 'https://github.com/supertone-inc/supertonic' },
      { name: 'LuxTTS',            by: 'ysharma3501',   desc: 'Free text-to-speech for Claude',           url: 'https://github.com/ysharma3501/LuxTTS' },
      { name: 'cli-printing-press', by: 'mvanhorn',     desc: 'Publication-quality output from the CLI',  url: 'https://github.com/mvanhorn/cli-printing-press' },
      { name: 'open-design',       by: 'nexu-io',       desc: 'An open design system for Claude builds',  url: 'https://github.com/nexu-io/open-design' },
    ],
  },
  {
    category: 'Web, data and research',
    items: [
      { name: 'browser-harness', by: 'browser-use', desc: 'Flexible AI browser control',      url: 'https://github.com/browser-use/browser-harness' },
      { name: 'Scrapling',       by: 'D4Vinci',     desc: 'A robust, free web scraper',       url: 'https://github.com/D4Vinci/Scrapling' },
      { name: 'wterm',           by: 'vercel-labs', desc: 'A web terminal, by Vercel',        url: 'https://github.com/vercel-labs/wterm' },
      { name: 'data-formulator', by: 'microsoft',   desc: 'Natural-language BI and charts',   url: 'https://github.com/microsoft/data-formulator' },
    ],
  },
  {
    category: 'Privacy, learning and career',
    items: [
      { name: 'LLM-anonymization',        by: 'zeroc00I',  desc: 'Strips sensitive data from prompts', url: 'https://github.com/zeroc00I/LLM-anonymization' },
      { name: 'ai-engineering-from-scratch', by: 'rohitg00', desc: 'The 428-lesson AI engineering course', url: 'https://github.com/rohitg00/ai-engineering-from-scratch' },
      { name: 'omniget',                  by: 'tonhowtf',  desc: 'Free courses pulled from everywhere', url: 'https://github.com/tonhowtf/omniget' },
      { name: 'career-ops',               by: 'santifer',  desc: 'An AI-powered job-search system',    url: 'https://github.com/santifer/career-ops' },
    ],
  },
]

// ------------------------------------------------------------
// Small presentational helpers
// ------------------------------------------------------------
function ResourceCard({ name, by, desc, url }) {
  return (
    <li className="rounded-xl border bg-white p-5" style={{ borderColor: '#e2e8f0' }}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-base font-bold no-underline hover:underline"
        style={{ color: '#0f172a' }}
      >
        {name}
      </a>
      {by && (
        <p className="mt-0.5 text-xs font-medium uppercase tracking-wide" style={{ color: '#94a3b8' }}>
          {by}
        </p>
      )}
      <p className="mt-2 text-sm leading-relaxed" style={{ color: '#64748b' }}>
        {desc}
      </p>
    </li>
  )
}

export default function ResourcesPage() {
  return (
    <>
      {/* ---- Header ---- */}
      <section
        className="py-16 sm:py-20 border-b"
        style={{ borderColor: '#e2e8f0' }}
        aria-labelledby="resources-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: '#4f46e5' }}>
            Curated directory
          </p>
          <h1
            id="resources-heading"
            className="text-3xl sm:text-4xl font-bold leading-tight mb-4"
            style={{ color: '#0f172a' }}
          >
            AI Resources
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: '#64748b' }}>
            The signal, without the noise. A short, curated set of the best places to stay
            informed, get credentialed and start building, chosen for executives who are
            early in their AI journey. Quality over quantity, always.
          </p>
        </div>
      </section>

      {/* ---- Stay Informed ---- */}
      <section className="py-14 sm:py-16" aria-labelledby="informed-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="informed-heading" className="text-2xl font-bold mb-2" style={{ color: '#0f172a' }}>
            Stay informed
          </h2>
          <p className="text-base leading-7 mb-6" style={{ color: '#374151' }}>
            The mistake is subscribing to everything. The daily newsletters cover the same
            launches, so more of them is not more signal. Pick <strong>one daily briefing</strong> to
            know what happened, and <strong>one weekly source</strong> to understand what it means.
            That is the whole system.
          </p>

          <h3 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: '#4f46e5' }}>
            Daily briefings — pick one
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2 list-none p-0 m-0 mb-8">
            {DAILY_BRIEFINGS.map(r => <ResourceCard key={r.name} {...r} />)}
          </ul>

          <h3 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: '#4f46e5' }}>
            Weekly depth — pick one or two
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2 list-none p-0 m-0 mb-8">
            {WEEKLY_DEPTH.map(r => <ResourceCard key={r.name} {...r} />)}
          </ul>

          <h3 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: '#4f46e5' }}>
            Creators and specialists — follow as needed
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2 list-none p-0 m-0">
            {CREATORS.map(r => <ResourceCard key={r.name} {...r} />)}
          </ul>
        </div>
      </section>

      {/* ---- Get Certified ---- */}
      <section
        className="py-14 sm:py-16"
        style={{ backgroundColor: '#f8fafc' }}
        aria-labelledby="certified-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="certified-heading" className="text-2xl font-bold mb-2" style={{ color: '#0f172a' }}>
            Get certified
          </h2>
          <p className="text-base leading-7 mb-8" style={{ color: '#374151' }}>
            Courses and certifications worth your time, grouped by function. Most of the best
            ones are free; the few paid credentials are marked. Course details and prices
            change, so confirm on the provider page before you enroll.
          </p>

          <div className="flex flex-col gap-8">
            {CERT_CATEGORIES.map(cat => (
              <div key={cat.title}>
                <h3 className="text-base font-bold" style={{ color: '#0f172a' }}>
                  {cat.title}
                </h3>
                <p className="mt-0.5 mb-3 text-sm" style={{ color: '#64748b' }}>
                  {cat.blurb}
                </p>
                <ul className="flex flex-col gap-3 list-none p-0 m-0">
                  {cat.items.map(item => (
                    <li
                      key={item.name}
                      className="rounded-lg border bg-white p-4"
                      style={{ borderColor: '#e2e8f0' }}
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-bold no-underline hover:underline"
                          style={{ color: '#0f172a' }}
                        >
                          {item.name}
                        </a>
                        <span className="text-xs font-medium" style={{ color: '#4f46e5' }}>
                          {item.cost}
                        </span>
                      </div>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wide" style={{ color: '#94a3b8' }}>
                        {item.provider}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed" style={{ color: '#64748b' }}>
                        {item.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- The Toolkit ---- */}
      <section className="py-14 sm:py-16" aria-labelledby="build-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="build-heading" className="text-2xl font-bold mb-2" style={{ color: '#0f172a' }}>
            The toolkit
          </h2>
          <p className="text-base leading-7 mb-8" style={{ color: '#374151' }}>
            Open-source repositories worth knowing as you move from learning to building:
            the actual toolkit behind a power-user Claude Code setup, grouped by what each
            one does for you.
          </p>

          <div className="flex flex-col gap-7">
            {TOOLKIT.map(group => (
              <div key={group.category}>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: '#4f46e5' }}>
                  {group.category}
                </h3>
                <ul className="flex flex-col list-none p-0 m-0 rounded-xl border divide-y" style={{ borderColor: '#e2e8f0', backgroundColor: '#fff' }}>
                  {group.items.map(it => (
                    <li
                      key={it.name}
                      className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 px-4 py-2.5"
                      style={{ borderColor: '#f1f5f9' }}
                    >
                      <a
                        href={it.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold font-mono no-underline hover:underline"
                        style={{ color: '#0f172a' }}
                      >
                        {it.name}
                      </a>
                      <span className="text-xs" style={{ color: '#cbd5e1' }}>/{it.by}</span>
                      <span className="text-xs" style={{ color: '#cbd5e1' }}>&middot;</span>
                      <span className="text-sm" style={{ color: '#64748b' }}>{it.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="py-12 sm:py-16" style={{ backgroundColor: '#f8fafc' }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CTABanner variant="newsletter" source="resources-page" />
        </div>
      </section>
    </>
  )
}
