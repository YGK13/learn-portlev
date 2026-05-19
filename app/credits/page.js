// ============================================================
// app/credits/page.js — Credits & attribution (Server Component)
// Lists every external open-source source adapted into the
// curriculum, with license and link. Required by the source
// licenses (e.g. MIT) and by PortLev's own attribution policy.
// ============================================================

import Link from 'next/link'
import CTABanner from '@/components/CTABanner'

export const metadata = {
  title:       'Credits & Attribution',
  description: 'The open-source sources adapted into the PortLev Academy curriculum, ' +
               'with full attribution and license information.',
}

// ------------------------------------------------------------
// Adapted sources — add an entry whenever a track adapts an
// external open-source course. Keep in sync with each track's
// `attribution` block in content/tracks/<slug>/track.json.
// ------------------------------------------------------------
const ADAPTED_SOURCES = [
  {
    sourceName:   'AI Engineering from Scratch',
    author:       'Rohit Ghumare',
    url:          'https://github.com/rohitg00/ai-engineering-from-scratch',
    license:      'MIT License',
    description:  'A 428-lesson, 20-phase technical course teaching engineers to build AI ' +
                  'systems from first principles. PortLev Academy adapts the conceptual core ' +
                  'of select lessons — rewritten in plain language, with all code and ' +
                  'mathematics removed — for non-technical leaders.',
    usedIn: [
      { track: 'How AI Actually Works', href: '/learn/how-ai-works' },
    ],
  },
]

export default function CreditsPage() {
  return (
    <>
      {/* ---- Header ---- */}
      <section
        className="py-16 sm:py-20 border-b"
        style={{ borderColor: '#e2e8f0' }}
        aria-labelledby="credits-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: '#4f46e5' }}>
            Attribution
          </p>
          <h1
            id="credits-heading"
            className="text-3xl sm:text-4xl font-bold leading-tight mb-4"
            style={{ color: '#0f172a' }}
          >
            Credits &amp; Attribution
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: '#64748b' }}>
            PortLev Academy is built in the open and stands on the work of others. Some tracks
            are adapted from open-source courses. Every source is credited here in full, with
            its license — and again on every track and lesson that draws on it.
          </p>
        </div>
      </section>

      {/* ---- Adapted sources ---- */}
      <section className="py-14 sm:py-16" aria-labelledby="sources-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2
            id="sources-heading"
            className="text-2xl font-bold mb-6"
            style={{ color: '#0f172a' }}
          >
            Adapted open-source material
          </h2>

          <ul className="flex flex-col gap-6 list-none p-0 m-0">
            {ADAPTED_SOURCES.map(source => (
              <li
                key={source.url}
                className="rounded-xl border p-6"
                style={{ borderColor: '#c7d2fe', backgroundColor: 'rgb(79 70 229 / 0.04)' }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl leading-none shrink-0" aria-hidden="true">📚</span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold leading-snug" style={{ color: '#0f172a' }}>
                      {source.sourceName}
                    </h3>
                    <p className="mt-0.5 text-sm" style={{ color: '#64748b' }}>
                      by {source.author} &middot; {source.license}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed" style={{ color: '#374151' }}>
                      {source.description}
                    </p>

                    {/* Where it is used on this site */}
                    <p className="mt-3 text-sm" style={{ color: '#374151' }}>
                      <span className="font-semibold">Adapted in: </span>
                      {source.usedIn.map((u, i) => (
                        <span key={u.href}>
                          <Link href={u.href} className="underline" style={{ color: '#4f46e5' }}>
                            {u.track}
                          </Link>
                          {i < source.usedIn.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </p>

                    {/* Link to original */}
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold no-underline"
                      style={{ color: '#4f46e5' }}
                    >
                      View the original course
                      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- How we adapt ---- */}
      <section
        className="py-14 sm:py-16"
        style={{ backgroundColor: '#f8fafc' }}
        aria-labelledby="how-heading"
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="how-heading" className="text-2xl font-bold mb-5" style={{ color: '#0f172a' }}>
            How we adapt source material
          </h2>
          <div className="space-y-4 text-base leading-7" style={{ color: '#374151' }}>
            <p>
              The open-source courses we adapt are written for software engineers. Our audience
              is executives, consultants and coaches who are not technical specialists. So we do
              not republish source material as-is. We rewrite it.
            </p>
            <p>
              Every adapted lesson is reworked from the ground up: code and mathematics removed,
              concepts re-explained in plain language, examples reframed around real professional
              decisions and the depth calibrated for a leader who needs to make sound calls about
              AI, not build it. Highly technical modules with no leadership relevance are left out
              entirely.
            </p>
            <p>
              When a license requires it, we preserve it and honor it. Adapted tracks carry the
              source license; an attribution notice appears on the track page and on every lesson.
              The original authors deserve full and visible credit, and they get it.
            </p>
          </div>
        </div>
      </section>

      {/* ---- PortLev's own licensing ---- */}
      <section className="py-14 sm:py-16" aria-labelledby="our-license-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="our-license-heading" className="text-2xl font-bold mb-5" style={{ color: '#0f172a' }}>
            PortLev Academy's own licensing
          </h2>
          <div className="space-y-4 text-base leading-7" style={{ color: '#374151' }}>
            <p>
              PortLev Academy is itself open. Our site code is released under the MIT License.
              Our original written content is released under Creative Commons Attribution 4.0
              (CC-BY 4.0). You may fork it, teach it, translate it or build on it — with attribution.
            </p>
            <p>
              Adapted material remains under its original source license, noted on each track.
              Where a track is adapted, the source's license governs that adapted content.
            </p>
          </div>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="py-12 sm:py-16" style={{ backgroundColor: '#f8fafc' }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CTABanner variant="newsletter" source="credits-page" />
        </div>
      </section>
    </>
  )
}
