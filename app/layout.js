// ============================================================
// app/layout.js - Root layout (Server Component)
// Wraps every page with the house fonts, Nav and Footer, the
// sitewide entity JSON-LD (Organization, WebSite, Person) and
// the scroll-reveal observer. Metadata here is the global
// default; pages override title/description/canonical.
// ============================================================

import { Manrope, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Nav    from '@/components/Nav'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import JsonLd from '@/components/JsonLd'
import { SITE_URL, SITE_NAME, X_HANDLE, organizationLd, websiteLd, personLd } from '@/lib/site'

// ============================================================
// Fonts: Manrope (display) + Inter (body). Google Fonts, free,
// self-hosted by next/font with system fallbacks.
// ============================================================
const manrope = Manrope({
  variable: '--font-manrope',
  subsets:  ['latin'],
  display:  'swap',
  weight:   ['600', '700', '800'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets:  ['latin'],
  display:  'swap',
})

// ============================================================
// Default metadata, overridden per page via `metadata` exports
// ============================================================
const DEFAULT_TITLE = 'PortLev Academy: Free AI Curriculum for Executives'
const DEFAULT_DESCRIPTION =
  'Free, open-source AI curriculum for executives from a 3x CHRO who trains frontier ' +
  'models. Ten tracks, no code. Then the $2,500 Fractional CAIO Program.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:  DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'Yuri Kruman', url: 'https://yurikruman.com' }],
  creator: 'Yuri Kruman',
  publisher: 'Portfolio Leverage Company',
  openGraph: {
    type:        'website',
    siteName:    SITE_NAME,
    locale:      'en_US',
    title:       DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card:    'summary_large_image',
    site:    X_HANDLE,
    creator: X_HANDLE,
    title:   DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  // Google Search Console verification. Set GOOGLE_SITE_VERIFICATION in
  // Vercel (the content value Google gives you on the HTML-tag method)
  // and Next renders the verification meta tag automatically. Unset = omitted.
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
}

export const viewport = {
  themeColor: '#4b41e1',
  width: 'device-width',
  initialScale: 1,
}

// ============================================================
// Root layout component
// ============================================================
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <JsonLd data={[organizationLd(), websiteLd(), personLd()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-indigo"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <Reveal />
        <Analytics />
      </body>
    </html>
  )
}
