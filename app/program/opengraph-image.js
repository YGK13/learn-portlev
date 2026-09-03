// ============================================================
// app/program/opengraph-image.js - OG image for the CAIO Program
// ============================================================

import { ImageResponse } from 'next/og'
import { OgCard, OG_SIZE } from '@/lib/og'
import { PROGRAM } from '@/lib/site'

export const alt = 'The Fractional CAIO Program: 8 modules, 8 working artifacts, $2,500'
export const size = OG_SIZE
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        kicker="The Fractional CAIO Program"
        title="Become the executive who owns the AI answer."
        subtitle={`${PROGRAM.modules} modules, ${PROGRAM.modules} working artifacts, ${PROGRAM.priceLabel}. Self-paced, application-based, personally onboarded.`}
        footer="learn.portlev.com/program"
      />
    ),
    { ...size }
  )
}
