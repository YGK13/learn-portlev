// ============================================================
// lib/mdx-options.js — shared compileMDX options
// Single source of truth for the MDX security posture, used by
// every render surface (lesson pages, brief pages).
//
// Our MDX is trusted first-party content: git-committed, build-
// validated (npm run validate) and governance-gated per CONTENT.md.
// There is no user-submitted MDX path anywhere on the site.
//
// next-mdx-remote v6 defaults blockJS to true, which strips ALL
// JSX attribute expressions (e.g. <FlowDiagram steps={[...]} /> or
// <KnowledgeCheck questions={[...]} />) and silently breaks every
// component that takes an array or object prop. blockJS must stay
// off for lesson components to receive their props.
//
// blockDangerousJS stays on as defense in depth: eval, Function,
// process and other dangerous globals remain blocked.
// ============================================================

export const TRUSTED_MDX_OPTIONS = {
  blockJS:          false,
  blockDangerousJS: true,
  mdxOptions: {
    // Remark/rehype plugins can be added here as the site grows
    remarkPlugins: [],
    rehypePlugins: [],
  },
}
