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
// The Toolkit — open-source repos worth knowing.
// Each repo carries four honest lenses:
//   quality     = effect on build quality
//   tokens      = effect on token use (HIGH STAKES: never invent a percentage)
//   commercial  = commercial potential
//   howto       = how to access and start using it
// Token-savings figures appear only when the repo itself states one.
// Otherwise the effect is described qualitatively.
// ------------------------------------------------------------
const TOOLKIT = [
  {
    category: 'Claude Code, supercharged',
    blurb: 'Power-user setups that make Claude Code itself dramatically more capable. Install these first.',
    items: [
      {
        name: 'superpowers', by: 'obra', url: 'https://github.com/obra/superpowers',
        oneLiner: 'Auto-sources and activates skills',
        quality: 'High. Skills load on demand, so Claude reaches for the right capability without you naming it.',
        tokens: 'Lower per-task: only the active skill loads, instead of a fat system prompt.',
        commercial: 'Resell your own skill packs to clients or teams.',
        howto: '`git clone` and follow the README to point Claude at the skills directory.',
      },
      {
        name: 'everything-claude-code', by: 'affaan-m', url: 'https://github.com/affaan-m/everything-claude-code',
        oneLiner: 'The complete Claude Code playbook',
        quality: 'High. A curated reference set of hooks, plans and patterns.',
        tokens: 'Neutral. Reference material you read, not load at runtime.',
        commercial: 'A reading list, not a product.',
        howto: 'Browse the GitHub README. Cherry-pick the techniques that apply to your stack.',
      },
      {
        name: 'gstack', by: 'garrytan', url: 'https://github.com/garrytan/gstack',
        oneLiner: 'A full deploy pipeline inside Claude',
        quality: 'High. Turns Claude into a build/test/deploy operator with real guardrails.',
        tokens: 'Neutral. Token cost trades against the human-hours it removes.',
        commercial: 'Strong: ship client work end-to-end from a single chat.',
        howto: 'Install per the README. Point it at a git repo with deploy targets configured.',
      },
      {
        name: 'gbrain', by: 'garrytan', url: 'https://github.com/garrytan/gbrain',
        oneLiner: 'A persistent second brain for Claude',
        quality: 'High. Long-running context survives sessions and projects.',
        tokens: 'Lower over time: retrieves only relevant memory instead of replaying full history.',
        commercial: 'Differentiator for client work: continuity across engagements.',
        howto: 'Install, point it at the projects you want a brain for, let it index.',
      },
      {
        name: 'Personal_AI_Infrastructure', by: 'danielmiessler', url: 'https://github.com/danielmiessler/Personal_AI_Infrastructure',
        oneLiner: 'A full personal AI operating system',
        quality: 'High. The opinionated reference architecture for running AI on your own stack.',
        tokens: 'Variable: depends on which modules you enable.',
        commercial: 'A great starting point for productizing an internal AI ops practice.',
        howto: 'Read the README first; this is a system, not a single tool. Adopt module by module.',
      },
      {
        name: 'claude-doctor', by: 'millionco', url: 'https://github.com/millionco/claude-doctor',
        oneLiner: 'Diagnoses and tunes your setup',
        quality: 'High for reliability. Catches silent misconfigurations.',
        tokens: 'Lower indirectly: fewer wasted retries from broken setups.',
        commercial: 'Run it for clients as a paid setup audit.',
        howto: 'Run the doctor command, follow its fixes.',
      },
      {
        name: 'archon', by: 'coleam00', url: 'https://github.com/coleam00/archon',
        oneLiner: 'Repeatable, standardized coding workflows',
        quality: 'High. Codifies "the right way" to do common engineering tasks.',
        tokens: 'Lower per task: shorter prompts, standardized scaffolds.',
        commercial: 'Productize your engineering playbook for client teams.',
        howto: 'Clone, define your workflows in the prescribed format, invoke from Claude.',
      },
    ],
  },
  {
    category: 'Memory and token efficiency',
    blurb: 'The single highest-leverage category for cost. Memory and compaction repos cut what you pay for repeated context.',
    items: [
      {
        name: 'claude-mem', by: 'thedotmack', url: 'https://github.com/thedotmack/claude-mem',
        oneLiner: 'Free long-term memory, fewer tokens',
        quality: 'High. Claude stops forgetting between sessions on the same project.',
        tokens: 'Materially lower: retrieves the relevant slice instead of replaying full history. Cost scales with what you remember, not how often you ask.',
        commercial: 'Premium feature for client engagements that span weeks.',
        howto: 'Install per README, give it a project path, let it manage the memory store.',
      },
      {
        name: 'mempalace', by: 'MemPalace', url: 'https://github.com/MemPalace/mempalace',
        oneLiner: 'A structured memory palace',
        quality: 'High when your work is reference-heavy.',
        tokens: 'Lower: structured retrieval beats raw context dumps.',
        commercial: 'Sell as a knowledge layer for client teams.',
        howto: 'Install per README. Ingest your domain documents, then query.',
      },
      {
        name: 'rtk', by: 'rtk-ai', url: 'https://github.com/rtk-ai/rtk',
        oneLiner: 'Aggressive prompt compaction',
        quality: 'Neutral to slightly improved: tighter prompts, less drift.',
        tokens: 'The project advertises up to 90% reduction on suitable workloads. Measure on your own corpus before trusting any figure on yours.',
        commercial: 'Real margin on high-volume agent or pipeline work.',
        howto: 'Install per README, wrap your prompt pipeline with the rtk client.',
      },
      {
        name: 'lat.md', by: '1st1', url: 'https://github.com/1st1/lat.md',
        oneLiner: 'Fixes markdown file architecture',
        quality: 'Higher: cleaner files, better parseability for AI agents.',
        tokens: 'Lower indirectly: tidier files mean smaller, focused reads.',
        commercial: 'Niche, but real if you sell content systems.',
        howto: 'Install and run against your markdown tree.',
      },
    ],
  },
  {
    category: 'Agents and skills',
    blurb: 'Frameworks and patterns for turning Claude into a fleet of specialists, not a single chat.',
    items: [
      {
        name: 'agent-skills', by: 'addyosmani', url: 'https://github.com/addyosmani/agent-skills',
        oneLiner: 'A curated agent-skills collection',
        quality: 'High. Vetted skills you do not have to invent.',
        tokens: 'Lower per task: load only the skill the moment needs.',
        commercial: 'Use these as starter blocks for client agents.',
        howto: 'Browse the catalog, copy the skill folder, point Claude at it.',
      },
      {
        name: 'book-to-skill', by: 'virgiliojr94', url: 'https://github.com/virgiliojr94/book-to-skill',
        oneLiner: 'Turns any book into a Claude skill',
        quality: 'High for domain expertise. Embeds the book\'s framework into Claude.',
        tokens: 'Lower than copy-pasting the book; higher than no context. Net positive.',
        commercial: 'Productize your own book as a paid skill. Direct monetization.',
        howto: 'Feed it a PDF or text. Out comes a skill folder you ship.',
      },
      {
        name: 'create-agent-tui', by: 'OpenRouterTeam', url: 'https://github.com/OpenRouterTeam/skills/tree/main/skills/create-agent-tui',
        oneLiner: 'A full agent in one command',
        quality: 'High starter quality. Right defaults, fewer footguns.',
        tokens: 'Neutral. Scaffolds the agent, you choose the model.',
        commercial: 'Fastest path from idea to demoable client agent.',
        howto: 'Run the command, answer the TUI prompts, get a working agent.',
      },
      {
        name: 'maestro', by: 'its-maestro-baby', url: 'https://github.com/its-maestro-baby/maestro',
        oneLiner: 'A Bloomberg Terminal for Claude Code',
        quality: 'High visibility into what the agent is doing.',
        tokens: 'Neutral to slightly lower: easier to spot wasteful patterns.',
        commercial: 'A dashboard you can demo to enterprise buyers.',
        howto: 'Install, point at your Claude sessions, watch the panes.',
      },
      {
        name: 'helmor', by: 'dohooo', url: 'https://github.com/dohooo/helmor',
        oneLiner: 'Multi-agent development fixer',
        quality: 'High on complex bug hunts and refactors.',
        tokens: 'Higher per task than a single agent, but lower than failing repeatedly.',
        commercial: 'Premium "stuck-codebase rescue" engagements.',
        howto: 'Install, point at the broken repo, supervise.',
      },
      {
        name: 'paperclip', by: 'paperclipai', url: 'https://github.com/paperclipai/paperclip',
        oneLiner: 'An AI agent that manages agents',
        quality: 'High for orchestration at scale.',
        tokens: 'Variable: a meta-agent uses tokens, but it offsets coordination overhead.',
        commercial: 'Strong: sell agent-fleet operations to enterprise clients.',
        howto: 'Install per README, give it the agents to manage.',
      },
      {
        name: 'OpenMythos', by: 'kyegomez', url: 'https://github.com/kyegomez/OpenMythos',
        oneLiner: 'An open-source agent toolkit',
        quality: 'High when you need a vendor-neutral base.',
        tokens: 'Variable by configuration.',
        commercial: 'Build proprietary agents without lock-in.',
        howto: 'Clone, install dependencies, pick the agent type to extend.',
      },
      {
        name: 'token-dashboard', by: 'nateherkai', url: 'https://github.com/nateherkai/token-dashboard',
        oneLiner: 'Live Claude token tracking',
        quality: 'Neutral. Diagnostic.',
        tokens: 'Lower indirectly: you cannot cut what you do not measure.',
        commercial: 'Run it for clients to justify AI spend with real numbers.',
        howto: 'Install, point at your usage source, watch the live dashboard.',
      },
    ],
  },
  {
    category: 'Content, media and design',
    blurb: 'Ship publishable output (decks, audio, print, design) without paying SaaS rent.',
    items: [
      {
        name: 'PptxGenJS', by: 'gitbrent', url: 'https://github.com/gitbrent/PptxGenJS',
        oneLiner: 'Generate slide decks programmatically',
        quality: 'High when content is data-driven. Pixel-perfect on layouts you control.',
        tokens: 'Neutral. The model writes content; this writes the pptx.',
        commercial: 'Strong: an alternative to monthly Gamma fees.',
        howto: '`npm install pptxgenjs`. Build a script that takes structured content and emits a deck.',
      },
      {
        name: 'supertonic', by: 'supertone-inc', url: 'https://github.com/supertone-inc/supertonic',
        oneLiner: 'Fast TTS, an ElevenLabs alternative',
        quality: 'High for usable narration without a subscription.',
        tokens: 'N/A. Saves SaaS dollars, not tokens.',
        commercial: 'Strong: podcast and video production at lower cost.',
        howto: 'Install per README. Feed it text, get audio.',
      },
      {
        name: 'LuxTTS', by: 'ysharma3501', url: 'https://github.com/ysharma3501/LuxTTS',
        oneLiner: 'Free text-to-speech for Claude',
        quality: 'Good for quick voiceovers; not a replacement for studio TTS.',
        tokens: 'N/A.',
        commercial: 'Use as a free fallback when SaaS quotas run out.',
        howto: 'Install per README. Plug into your Claude pipeline.',
      },
      {
        name: 'cli-printing-press', by: 'mvanhorn', url: 'https://github.com/mvanhorn/cli-printing-press',
        oneLiner: 'Publication-quality output from the CLI',
        quality: 'High typographic quality (LaTeX-class).',
        tokens: 'Neutral. The press handles formatting; the model writes.',
        commercial: 'Sell self-published books and reports without a designer.',
        howto: 'Install per README, hand it markdown, get a print-ready PDF.',
      },
      {
        name: 'open-design', by: 'nexu-io', url: 'https://github.com/nexu-io/open-design',
        oneLiner: 'An open design system for Claude builds',
        quality: 'High visual consistency across AI-generated UIs.',
        tokens: 'Neutral.',
        commercial: 'Use as the house style for productized client builds.',
        howto: 'Install per README, reference the design tokens in your Claude prompts and components.',
      },
    ],
  },
  {
    category: 'Web, data and research',
    blurb: 'Give Claude eyes and hands on the open web and your own data.',
    items: [
      {
        name: 'browser-harness', by: 'browser-use', url: 'https://github.com/browser-use/browser-harness',
        oneLiner: 'Flexible AI browser control',
        quality: 'High for any task that needs a real browser.',
        tokens: 'Neutral to higher: the browser context is not free; cap rounds.',
        commercial: 'Strong: scraping, QA, research, lead gen.',
        howto: 'Install per README, give Claude a goal and a URL, watch it work.',
      },
      {
        name: 'Scrapling', by: 'D4Vinci', url: 'https://github.com/D4Vinci/Scrapling',
        oneLiner: 'A robust, free web scraper',
        quality: 'High on hostile sites where naive scrapers fail.',
        tokens: 'N/A. Saves time and SaaS costs.',
        commercial: 'Strong: an alternative to paid scraping APIs for research and lead gen.',
        howto: '`pip install scrapling`. Build the scraper into your research pipeline.',
      },
      {
        name: 'wterm', by: 'vercel-labs', url: 'https://github.com/vercel-labs/wterm',
        oneLiner: 'A web terminal, by Vercel',
        quality: 'High for client-facing terminal experiences.',
        tokens: 'Neutral.',
        commercial: 'Embed in deliverables that include a live shell.',
        howto: 'Install per README, expose the terminal in your app.',
      },
      {
        name: 'data-formulator', by: 'microsoft', url: 'https://github.com/microsoft/data-formulator',
        oneLiner: 'Natural-language BI and charts',
        quality: 'High for fast exploratory analysis.',
        tokens: 'Variable, depends on dataset size. Cap with sampling.',
        commercial: 'Replace a chunk of Tableau or PowerBI usage for clients.',
        howto: 'Install per README. Load a dataset, ask in natural language.',
      },
    ],
  },
  {
    category: 'Privacy, learning and career',
    blurb: 'Govern what leaves your environment, accelerate your own skills, and ship things that earn.',
    items: [
      {
        name: 'LLM-anonymization', by: 'zeroc00I', url: 'https://github.com/zeroc00I/LLM-anonymization',
        oneLiner: 'Strips sensitive data from prompts',
        quality: 'High. Real governance, not vibes.',
        tokens: 'Neutral.',
        commercial: 'Strong for any enterprise sale: handle PII safely.',
        howto: 'Install per README. Wrap your prompt pipeline with the anonymizer.',
      },
      {
        name: 'ai-engineering-from-scratch', by: 'rohitg00', url: 'https://github.com/rohitg00/ai-engineering-from-scratch',
        oneLiner: 'A 428-lesson AI engineering course',
        quality: 'High for technical depth, well beyond the academy.',
        tokens: 'N/A.',
        commercial: 'Builds the skills behind paid AI engineering work.',
        howto: 'Start at the README index. Work through the lessons in order.',
      },
      {
        name: 'omniget', by: 'tonhowtf', url: 'https://github.com/tonhowtf/omniget',
        oneLiner: 'Free courses pulled from everywhere',
        quality: 'High coverage, variable depth.',
        tokens: 'N/A.',
        commercial: 'Cheap upskilling for you or your team.',
        howto: 'Install per README, search by topic.',
      },
      {
        name: 'career-ops', by: 'santifer', url: 'https://github.com/santifer/career-ops',
        oneLiner: 'An AI-powered job-search system',
        quality: 'High for structured search at scale.',
        tokens: 'Neutral.',
        commercial: 'Operate as a paid service for executive job-seekers.',
        howto: 'Install per README, configure your target roles, let it run.',
      },
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
          <p className="text-base leading-7 mb-3" style={{ color: '#374151' }}>
            Open-source repositories worth knowing as you move from learning to building:
            the actual toolkit behind a power-user Claude Code setup, grouped by what each
            one does for you. Every entry below carries four lenses so you can decide what
            is worth installing.
          </p>
          <ul className="mb-8 grid gap-2 sm:grid-cols-2 list-none p-0" style={{ color: '#374151' }}>
            <li><strong>Quality:</strong> what it does for the build itself.</li>
            <li><strong>Tokens:</strong> the cost lens. Higher, lower or neutral. Percentages only when a repo states them.</li>
            <li><strong>Commercial:</strong> where the money is if you operate it for clients.</li>
            <li><strong>How to use:</strong> the first command, the first decision, the first link.</li>
          </ul>

          <div className="flex flex-col gap-10">
            {TOOLKIT.map(group => (
              <div key={group.category}>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-1" style={{ color: '#4f46e5' }}>
                  {group.category}
                </h3>
                {group.blurb && (
                  <p className="mb-4 text-sm" style={{ color: '#64748b' }}>
                    {group.blurb}
                  </p>
                )}
                <ul className="flex flex-col gap-3 list-none p-0 m-0">
                  {group.items.map(it => (
                    <li
                      key={it.name}
                      className="rounded-xl border bg-white p-4"
                      style={{ borderColor: '#e2e8f0' }}
                    >
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                        <a
                          href={it.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-bold font-mono no-underline hover:underline"
                          style={{ color: '#0f172a' }}
                        >
                          {it.name}
                        </a>
                        <span className="text-xs" style={{ color: '#cbd5e1' }}>/{it.by}</span>
                        <span className="text-xs" style={{ color: '#cbd5e1' }}>&middot;</span>
                        <span className="text-sm font-medium" style={{ color: '#475569' }}>{it.oneLiner}</span>
                      </div>
                      <dl className="mt-3 grid gap-x-5 gap-y-2 sm:grid-cols-2">
                        {[
                          ['Quality',     it.quality],
                          ['Tokens',      it.tokens],
                          ['Commercial',  it.commercial],
                          ['How to use',  it.howto],
                        ].map(([k, v]) => v && (
                          <div key={k}>
                            <dt className="text-[10px] font-bold uppercase tracking-wider" style={{ color: '#94a3b8' }}>{k}</dt>
                            <dd className="text-sm leading-relaxed" style={{ color: '#374151' }}>{v}</dd>
                          </div>
                        ))}
                      </dl>
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
