// ============================================================
// app/learn/[track]/[lesson]/opengraph-image.js - Per-lesson OG
// Reads the lesson frontmatter so every shared lesson link gets
// its own 1200x630 card with the title and summary.
// ============================================================

import { ImageResponse } from 'next/og'
import { OgCard, OG_SIZE } from '@/lib/og'
import { getLesson, getTrack } from '@/lib/content'

export const alt = 'PortLev Academy lesson'
export const size = OG_SIZE
export const contentType = 'image/png'

export default async function Image({ params }) {
  const { track: trackSlug, lesson: lessonSlug } = await params
  const lesson = getLesson(trackSlug, lessonSlug)
  const track  = getTrack(trackSlug)

  const title    = lesson?.title   ?? 'PortLev Academy'
  const subtitle = lesson?.summary ?? 'Free AI curriculum for executives.'
  const kicker   = track?.title ? `Free lesson · ${track.title}` : 'PortLev Academy'

  return new ImageResponse(
    <OgCard kicker={kicker} title={title} subtitle={subtitle} />,
    { ...size }
  )
}
