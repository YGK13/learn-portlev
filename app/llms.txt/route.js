// ============================================================
// app/llms.txt/route.js - /llms.txt (llmstxt.org format)
// Generated from content/ at build time so it never drifts from
// the published curriculum. Static: no request-time APIs used.
// ============================================================

import { buildLlmsTxt } from '@/lib/llms'

export const dynamic = 'force-static'

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: {
      'Content-Type':  'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
