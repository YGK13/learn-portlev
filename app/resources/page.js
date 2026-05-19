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
// Open-source projects worth knowing
// ------------------------------------------------------------
const PROJECTS = [
  {
    name: 'n8n',
    desc: 'The leading no-code workflow automation platform. The practical foundation for building AI agents and automations without writing code.',
    url:  'https://github.com/n8n-io/n8n',
  },
  {
    name: 'AI Engineering from Scratch',
    desc: 'The open-source course (by Rohit Ghumare) that three PortLev Academy tracks are adapted from. A full technical curriculum for those who want the depth.',
    url:  'https://github.com/rohitg00/ai-engineering-from-scratch',
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

      {/* ---- Build With These ---- */}
      <section className="py-14 sm:py-16" aria-labelledby="build-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="build-heading" className="text-2xl font-bold mb-2" style={{ color: '#0f172a' }}>
            Build with these
          </h2>
          <p className="text-base leading-7 mb-6" style={{ color: '#374151' }}>
            Open-source projects worth knowing as you move from learning to building.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2 list-none p-0 m-0">
            {PROJECTS.map(r => <ResourceCard key={r.name} {...r} />)}
          </ul>
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
