// ============================================================
// app/opengraph-image.js - Default OG image for every route that
// does not define its own. 1200x630, generated at build time.
// ============================================================

import { ImageResponse } from 'next/og'
import { OgCard, OG_SIZE } from '@/lib/og'
import { getAllTracks } from '@/lib/content'

export const alt = 'PortLev Academy: free AI curriculum for executives, plus the Fractional CAIO Program'
export const size = OG_SIZE
export const contentType = 'image/png'

export default function Image() {
  const tracks = getAllTracks().length
  return new ImageResponse(
    (
      <OgCard
        title="Free AI curriculum for executives. Then the CAIO seat."
        subtitle={`${tracks} open tracks, no code, from a 3x CHRO who trains frontier models for OpenAI, Meta and Microsoft.`}
      />
    ),
    { ...size }
  )
}
