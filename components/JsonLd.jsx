// ============================================================
// components/JsonLd.jsx - Render one or more JSON-LD objects
// Server component. Escapes "<" so a stray string can never
// close the script tag (per the Next.js JSON-LD guide).
// Undefined values are dropped by JSON.stringify automatically.
// ============================================================

export default function JsonLd({ data }) {
  const list = Array.isArray(data) ? data : [data]
  return list.filter(Boolean).map((obj, i) => (
    <script
      key={i}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(obj).replace(/</g, '\\u003c') }}
    />
  ))
}
