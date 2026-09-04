// ============================================================
// app/learn/[track]/opengraph-image.js - Per-track OG image
// Reads track.json so every shared track link gets its own
// 1200x630 card with the title, summary and lesson count.
// ============================================================

import { ImageResponse } from 'next/og'
import { OgCard, OG_SIZE } from '@/lib/og'
import { getAllTracks, getTrack, getLessonsForTrack } from '@/lib/content'

export const alt = 'PortLev Academy free learning track'
export const size = OG_SIZE
export const contentType = 'image/png'

export function generateStaticParams() {
  return getAllTracks().map(track => ({ track: track.slug }))
}

export default async function Image({ params }) {
  const { track: trackSlug } = await params
  const track   = getTrack(trackSlug)
  const lessons = track ? getLessonsForTrack(track.slug) : []

  const title    = track?.title   ?? 'PortLev Academy'
  const subtitle = track?.summary ?? 'Free AI curriculum for executives.'
  const kicker   = track
    ? `Free track · ${lessons.length} ${lessons.length === 1 ? 'lesson' : 'lessons'} · no code`
    : 'PortLev Academy'

  return new ImageResponse(
    <OgCard kicker={kicker} title={title} subtitle={subtitle} />,
    { ...size }
  )
}
