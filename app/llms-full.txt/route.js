// ============================================================
// app/llms-full.txt/route.js - /llms-full.txt deep reference
// Every published track and lesson with its summary, plus the
// entity block, programs, pricing and FAQ. Built from content/.
// ============================================================

import { buildLlmsFullTxt } from '@/lib/llms'

export const dynamic = 'force-static'

export function GET() {
  return new Response(buildLlmsFullTxt(), {
    headers: {
      'Content-Type':  'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
