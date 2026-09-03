// ============================================================
// app/not-found.js - Branded 404
// Replaces the default Next.js error page (which rendered inside
// the layout with its own body styles). Points lost visitors at
// the three places they most likely wanted.
// ============================================================

import Link from 'next/link'

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section className="bg-canvas py-24 sm:py-32" aria-labelledby="nf-heading">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 id="nf-heading" className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink">
          That page has moved on.
        </h1>
        <p className="mt-5 text-lg text-body">
          The lesson or program you were after is not at this address. The curriculum is still free
          and the program is still open.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/learn" className="btn btn-primary">Browse the free curriculum</Link>
          <Link href="/program" className="btn btn-secondary">The CAIO Program</Link>
        </div>
        <p className="mt-6 text-sm text-muted">
          Or <Link href="/" className="text-indigo underline underline-offset-2">go home</Link>,{' '}
          read <Link href="/brief" className="text-indigo underline underline-offset-2">The Leverage Brief</Link>{' '}
          or see <Link href="/programs" className="text-indigo underline underline-offset-2">all programs</Link>.
        </p>
      </div>
    </section>
  )
}
