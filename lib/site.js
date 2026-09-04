// ============================================================
// lib/site.js - Site-wide entity constants and JSON-LD builders
//
// One place for every fact that search engines and answer engines
// read about this property: who publishes it, who teaches it, what
// the flagship program costs and where the sister properties live.
// Pages import the builders and render them through <JsonLd />.
//
// Rule: nothing in here is a guess. Every claim traces to a page
// already live on the site (about, program, book) or to the owner's
// public profiles listed under PERSON.sameAs.
// ============================================================

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://learn.portlev.com')
  .replace(/\/$/, '')

export const SITE_NAME = 'PortLev Academy'

// X (Twitter) handle used across the PortLev family for twitter:site
// and twitter:creator. Verified against portlev.com and yurikruman.com.
export const X_HANDLE = '@MasterTheTalk'

// The one build count used across every PortLev property. Source:
// portlev.com/builds (content/builds.json in portlev-site), counted on
// 2026-09-02: 13 products and research platforms plus 4 client sites,
// each returning a live homepage. Beta builds, internal operating
// systems and PortLev's own marketing sites are not counted.
export const BUILDS = {
  count:   17,
  label:   '17 builds live in public',
  detail:  '13 products and research platforms plus 4 client sites',
  url:     'https://portlev.com/builds',
  asOf:    '2026-09-02',
}

// Date the marketing surface was last rebuilt. Used as lastmod for
// static pages in the sitemap and in the llms.txt "last updated" line.
export const LAST_UPDATED = '2026-09-03'

export const ORG = {
  '@type': 'Organization',
  '@id':   'https://portlev.com/#organization',
  name:    'Portfolio Leverage Company',
  alternateName: 'PortLev',
  url:     'https://portlev.com',
  sameAs: [
    'https://learn.portlev.com',
    'https://apps.portlev.com',
    'https://www.linkedin.com/in/yurikruman/',
  ],
}

export const PERSON = {
  '@type': 'Person',
  '@id':   'https://yurikruman.com/#person',
  name:    'Yuri Kruman',
  url:     'https://yurikruman.com',
  image:   `${SITE_URL}/yuri-kruman.jpg`,
  jobTitle: 'Fractional Chief AI Officer',
  description:
    'Fractional Chief AI Officer and 3x CHRO. Trains frontier AI models for OpenAI, Meta and Microsoft. ' +
    'Executive coach to 2,300+ clients, 17 builds live in public. Founder of Portfolio Leverage Company and PortLev Academy.',
  worksFor: { '@id': 'https://portlev.com/#organization' },
  sameAs: [
    'https://www.linkedin.com/in/yurikruman/',
    'https://yurikruman.com',
    'https://portlev.com',
    'https://substack.com/@commanderinchief',
    'https://leveragebrief.beehiiv.com',
    'https://x.com/MasterTheTalk',
  ],
}

export const PROGRAM = {
  name:        'The Fractional CAIO Program',
  shortName:   'CAIO Program',
  path:        '/program',
  price:       2500,
  priceLabel:  '$2,500',
  currency:    'USD',
  format:      'Self-paced, application-based',
  modules:     8,
  description:
    'An application-based, self-paced program for senior executives reinventing themselves as ' +
    'Chief AI Officers: the mandate, the 60-day baseline, the operating model, the business case ' +
    'and the fractional book of business. Eight modules, eight working artifacts, personally onboarded.',
}

export const COHORT = {
  name:     'Executive AI Cohort: Forward Achieve',
  path:     '/cohort',
  url:      'https://forwardshare.co/executive-ai-cohort-forward-achieve-forward-share-ventures',
  price:    2500,
  priceLabel: '$2,500',
  format:   'Live, 12 weeks, 15 seats',
}

export const NEWSLETTER = {
  name:         'The Leverage Brief',
  subscribeUrl: 'https://leveragebrief.beehiiv.com/subscribe',
  url:          'https://leveragebrief.beehiiv.com',
}

// Sister properties for the "A PortLev build" footer strip.
export const SISTER_LINKS = [
  { label: 'PortLev',            href: 'https://portlev.com' },
  { label: 'Yuri Kruman',        href: 'https://yurikruman.com' },
  { label: 'The Leverage Brief', href: 'https://leveragebrief.beehiiv.com' },
  { label: 'AI Wage Gap',        href: 'https://aiwagegap.com' },
  { label: 'AI Build Gap',       href: 'https://aibuildgap.com' },
  { label: 'Career Beast Mode',  href: 'https://www.careerbeastmode.com' },
  { label: 'AI HR Pilot',        href: 'https://aihrpilot.com' },
  { label: 'DueDrill',           href: 'https://duedrill.com' },
  { label: 'ChaiRaise',          href: 'https://chairaise.com' },
  { label: 'Commander-in-Chief', href: 'https://www.commanderinchief.ai' },
  { label: 'BookToCourse.AI',    href: 'https://booktocourse.ai' },
  { label: 'PortLev Apps',       href: 'https://apps.portlev.com' },
  { label: 'I9Drill',            href: 'https://i9drill.com' },
  { label: 'HR Talent Sys',      href: 'https://hrtalentsys.com' },
]

// ============================================================
// SEO string helpers. The root layout appends " | PortLev Academy"
// to every page title through its template, which pushes long
// lesson and track titles past 60 characters. seoTitle() returns
// the longest candidate that fits, falling back to an absolute
// title (no suffix) and finally to the part before the colon.
// ============================================================

export const TITLE_SUFFIX = ` | ${SITE_NAME}`
export const TITLE_MAX    = 60
export const DESC_MAX     = 155

export function seoTitle(title, { variant } = {}) {
  const t = String(title || '').trim()
  const candidates = []
  if (variant) candidates.push(`${t}: ${variant}${TITLE_SUFFIX}`)
  candidates.push(`${t}${TITLE_SUFFIX}`)
  if (variant) candidates.push(`${t}: ${variant}`)
  candidates.push(t)
  const head = t.split(/:\s|\s\(|\s-\s/)[0].trim()
  if (head && head !== t) {
    candidates.push(`${head}${TITLE_SUFFIX}`)
    candidates.push(head)
  }
  for (const c of candidates) {
    if (c.length <= TITLE_MAX) {
      // Use the template when the plain "title | suffix" form fits.
      if (!variant && c === `${t}${TITLE_SUFFIX}`) return t
      return { absolute: c }
    }
  }
  // Last resort: cut on a word boundary.
  const cut = t.slice(0, TITLE_MAX).replace(/\s+\S*$/, '').replace(/[,:;\s]+$/, '')
  return { absolute: cut }
}

export function seoDescription(text, max = DESC_MAX) {
  const t = String(text || '').replace(/\s+/g, ' ').trim()
  if (t.length <= max) return t
  // Prefer a sentence boundary, then a clause boundary, then a word.
  const sentence = t.slice(0, max).match(/^[\s\S]*[.!?](?=\s|$)/)
  if (sentence && sentence[0].length >= max * 0.5) return sentence[0].trim()
  const clause = t.slice(0, max).match(/^[\s\S]*[;:,](?=\s)/)
  if (clause && clause[0].length >= max * 0.6) return clause[0].replace(/[;:,]$/, '').trim() + '.'
  return t.slice(0, max).replace(/\s+\S*$/, '').replace(/[,;:\s]+$/, '') + '.'
}

// ============================================================
// JSON-LD builders. Each returns a plain object; render with <JsonLd />.
// ============================================================

export function organizationLd() {
  return { '@context': 'https://schema.org', ...ORG, founder: { '@id': PERSON['@id'] } }
}

export function personLd() {
  return { '@context': 'https://schema.org', ...PERSON }
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type':    'WebSite',
    '@id':      `${SITE_URL}/#website`,
    name:       SITE_NAME,
    url:        SITE_URL,
    description:
      'Free, open-source AI curriculum for executives and consultants, plus the Fractional CAIO Program.',
    publisher:  { '@id': ORG['@id'] },
    inLanguage: 'en',
  }
}

/**
 * Course schema for the paid program.
 * Google Course rich results require: name, description, provider.
 */
export function programCourseLd({ modules = [] } = {}) {
  return {
    '@context':  'https://schema.org',
    '@type':     'Course',
    '@id':       `${SITE_URL}${PROGRAM.path}#course`,
    name:        PROGRAM.name,
    description: PROGRAM.description,
    url:         `${SITE_URL}${PROGRAM.path}`,
    provider:    { '@id': ORG['@id'] },
    instructor:  { '@id': PERSON['@id'] },
    educationalLevel: 'Advanced',
    audience: {
      '@type': 'Audience',
      audienceType: 'Senior executives (CHRO, COO, CIO, VP) moving into a Chief AI Officer role',
    },
    numberOfCredits: undefined,
    hasCourseInstance: {
      '@type':     'CourseInstance',
      courseMode:  'online',
      courseWorkload: 'PT8H',
      instructor:  { '@id': PERSON['@id'] },
    },
    offers: {
      '@type':        'Offer',
      price:          PROGRAM.price,
      priceCurrency:  PROGRAM.currency,
      availability:   'https://schema.org/InStock',
      url:            `${SITE_URL}${PROGRAM.path}#enroll`,
      category:       'Paid',
    },
    syllabusSections: modules.map(m => ({
      '@type':     'Syllabus',
      name:        `Module ${m.n}: ${m.title}`,
      description: m.desc,
    })),
  }
}

/**
 * Course schema for a free learning track.
 */
export function trackCourseLd(track, lessons = []) {
  return {
    '@context':  'https://schema.org',
    '@type':     'Course',
    '@id':       `${SITE_URL}/learn/${track.slug}#course`,
    name:        track.title,
    description: track.summary,
    url:         `${SITE_URL}/learn/${track.slug}`,
    provider:    { '@id': ORG['@id'] },
    instructor:  { '@id': PERSON['@id'] },
    isAccessibleForFree: true,
    educationalLevel: track.level,
    hasCourseInstance: {
      '@type':    'CourseInstance',
      courseMode: 'online',
      courseWorkload: `PT${Math.max(1, lessons.reduce((n, l) => n + (l.estReadMin || 8), 0))}M`,
    },
    offers: {
      '@type':       'Offer',
      price:         0,
      priceCurrency: 'USD',
      category:      'Free',
      url:           `${SITE_URL}/learn/${track.slug}`,
    },
    syllabusSections: lessons.map((l, i) => ({
      '@type':     'Syllabus',
      name:        `Lesson ${i + 1}: ${l.title}`,
      description: l.summary,
      url:         `${SITE_URL}/learn/${track.slug}/${l.slug}`,
    })),
  }
}

/**
 * LearningResource + Article hybrid for a single lesson page.
 */
export function lessonLd(track, lesson) {
  const url = `${SITE_URL}/learn/${track.slug}/${lesson.slug}`
  return {
    '@context': 'https://schema.org',
    '@type':    ['Article', 'LearningResource'],
    '@id':      `${url}#article`,
    headline:   lesson.title,
    description: lesson.summary,
    url,
    mainEntityOfPage: url,
    dateModified: lesson.updated,
    datePublished: lesson.updated,
    author:     { '@id': PERSON['@id'] },
    publisher:  { '@id': ORG['@id'] },
    isAccessibleForFree: lesson.tier === 'free',
    learningResourceType: 'Lesson',
    educationalLevel: lesson.level,
    timeRequired: lesson.estReadMin ? `PT${lesson.estReadMin}M` : undefined,
    isPartOf:   { '@id': `${SITE_URL}/learn/${track.slug}#course` },
    keywords:   (lesson.tags || []).join(', '),
    inLanguage: 'en',
    image:      `${url}/opengraph-image`,
  }
}

export function faqLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type':    'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name:    q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

export function breadcrumbLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type':    'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type':  'ListItem',
      position: i + 1,
      name:     item.name,
      item:     item.path ? `${SITE_URL}${item.path}` : undefined,
    })),
  }
}
