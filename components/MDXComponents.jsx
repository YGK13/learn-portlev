// ============================================================
// components/MDXComponents.jsx
// Custom React components passed to compileMDX / MDXRemote.
// These override the default HTML elements rendered from MDX,
// giving us consistent styling without writing CSS class names
// directly in content files.
//
// Used in: app/learn/[track]/[lesson]/page.js
//          app/brief/[slug]/page.js
// ============================================================

import Link from 'next/link'
import Callout from './Callout'
import FlowDiagram from './FlowDiagram'
import TLDR from './TLDR'
import Pullquote from './Pullquote'
import Stat from './Stat'
import KnowledgeCheck from './KnowledgeCheck'
import ActionChecklist from './ActionChecklist'
import TryIt from './TryIt'

// ---- Headings --------------------------------------------------

function H1({ children }) {
  return (
    <h1
      className="text-3xl font-bold leading-tight tracking-tight mt-0 mb-6"
      style={{ color: '#0f172a' }}
    >
      {children}
    </h1>
  )
}

function H2({ children }) {
  // Derive a stable anchor id from text content
  const id = typeof children === 'string'
    ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    : undefined

  return (
    <h2
      id={id}
      className="text-2xl font-bold leading-snug tracking-tight mt-10 mb-4 scroll-mt-20"
      style={{ color: '#0f172a' }}
    >
      {children}
    </h2>
  )
}

function H3({ children }) {
  const id = typeof children === 'string'
    ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    : undefined

  return (
    <h3
      id={id}
      className="text-lg font-semibold leading-snug mt-8 mb-3 scroll-mt-20"
      style={{ color: '#0f172a' }}
    >
      {children}
    </h3>
  )
}

// ---- Paragraph -------------------------------------------------

function P({ children }) {
  return (
    <p className="text-base leading-7 mb-5" style={{ color: '#374151' }}>
      {children}
    </p>
  )
}

// ---- Links -----------------------------------------------------

function A({ href, children, ...props }) {
  // Internal links (starting with /) use next/link for prefetching
  if (href && href.startsWith('/')) {
    return (
      <Link
        href={href}
        className="font-medium underline underline-offset-3 transition-colors"
        style={{ color: '#4f46e5', textDecorationColor: 'rgb(79 70 229 / 0.4)' }}
        {...props}
      >
        {children}
      </Link>
    )
  }

  // External links open in new tab with rel safety
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium underline underline-offset-3 transition-colors"
      style={{ color: '#4f46e5', textDecorationColor: 'rgb(79 70 229 / 0.4)' }}
      {...props}
    >
      {children}
    </a>
  )
}

// ---- Lists -----------------------------------------------------

function UL({ children }) {
  return (
    <ul
      className="mb-5 space-y-1.5 pl-6 text-base leading-7"
      style={{ color: '#374151' }}
    >
      {children}
    </ul>
  )
}

function OL({ children }) {
  return (
    <ol
      className="mb-5 space-y-1.5 pl-6 list-decimal text-base leading-7"
      style={{ color: '#374151' }}
    >
      {children}
    </ol>
  )
}

function LI({ children }) {
  return <li className="pl-1">{children}</li>
}

// ---- Blockquote ------------------------------------------------

function Blockquote({ children }) {
  return (
    <blockquote
      className="my-6 pl-5 italic"
      style={{
        borderLeft: '3px solid #f59e0b',
        color:      '#64748b',
      }}
    >
      {children}
    </blockquote>
  )
}

// ---- Code ------------------------------------------------------

// Inline code — <code> not wrapped in <pre>
function Code({ children, className }) {
  // className is set by MDX for fenced code blocks (e.g. "language-js")
  // Inline code has no className
  const isInline = !className

  if (isInline) {
    return (
      <code
        className="rounded px-1.5 py-0.5 text-[0.875em] font-mono"
        style={{ backgroundColor: '#f1f5f9', color: '#1e293b' }}
      >
        {children}
      </code>
    )
  }

  // Within a Pre block — no extra wrapper styles needed
  return (
    <code className={`${className ?? ''} text-[0.875rem] leading-relaxed font-mono`}>
      {children}
    </code>
  )
}

// Fenced code block
function Pre({ children }) {
  return (
    <pre
      className="my-6 overflow-x-auto rounded-lg p-5 text-sm leading-relaxed"
      style={{ backgroundColor: '#0f172a', color: '#e2e8f0' }}
    >
      {children}
    </pre>
  )
}

// ---- Horizontal rule -------------------------------------------

function HR() {
  return (
    <hr
      className="my-10"
      style={{ borderColor: '#e2e8f0' }}
    />
  )
}

// ---- Strong / Em -----------------------------------------------

function Strong({ children }) {
  return (
    <strong className="font-semibold" style={{ color: '#0f172a' }}>
      {children}
    </strong>
  )
}

// ============================================================
// MDXComponents — the object passed to compileMDX / MDXRemote
// ============================================================
const MDXComponents = {
  h1:         H1,
  h2:         H2,
  h3:         H3,
  p:          P,
  a:          A,
  ul:         UL,
  ol:         OL,
  li:         LI,
  blockquote: Blockquote,
  code:       Code,
  pre:        Pre,
  hr:         HR,
  strong:     Strong,
  // Custom lesson components — used directly in MDX content
  Callout,
  FlowDiagram,
  TLDR,
  Pullquote,
  Stat,
  // Interactive lesson components (client-side, localStorage persistence)
  KnowledgeCheck,
  ActionChecklist,
  TryIt,
}

export default MDXComponents
