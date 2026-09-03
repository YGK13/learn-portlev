// ============================================================
// lib/og.jsx - Shared Open Graph image template
// Used by every opengraph-image.js route. Satori rules apply:
// every element with more than one child must be display:flex.
// Fonts: ImageResponse ships a default sans, so no font file
// needs to be loaded at build time.
// ============================================================

export const OG_SIZE = { width: 1200, height: 630 }

export function OgCard({ kicker = 'PortLev Academy', title, subtitle, footer = 'learn.portlev.com' }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '64px 72px',
        backgroundColor: '#000613',
        backgroundImage:
          'radial-gradient(circle at 85% 15%, rgba(124,92,255,0.55) 0%, rgba(124,92,255,0) 45%), ' +
          'radial-gradient(circle at 10% 95%, rgba(75,65,225,0.45) 0%, rgba(75,65,225,0) 40%)',
        color: '#ffffff',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: 999,
            background: 'linear-gradient(120deg, #4b41e1 0%, #7c5cff 55%, #b8a6ff 100%)',
          }}
        />
        <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#b8a6ff' }}>
          {kicker}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <div
          style={{
            fontSize: title.length > 60 ? 54 : 66,
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: -1.5,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div style={{ fontSize: 28, lineHeight: 1.35, color: 'rgba(255,255,255,0.78)', maxWidth: 960 }}>
            {subtitle}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 24, color: 'rgba(255,255,255,0.7)' }}>{footer}</div>
        <div style={{ fontSize: 24, color: 'rgba(255,255,255,0.7)' }}>Yuri Kruman · 3x CHRO · Fractional CAIO</div>
      </div>
    </div>
  )
}
