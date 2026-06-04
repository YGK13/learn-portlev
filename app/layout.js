// ============================================================
// app/layout.js — Root layout (Server Component)
// Wraps every page with the Geist fonts, Nav and Footer.
// Metadata here acts as the global default; individual pages
// override title/description via their own `metadata` export.
// ============================================================

import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Nav    from '@/components/Nav'
import Footer from '@/components/Footer'

// ============================================================
// Fonts — loaded once, CSS variables injected into <html>
// ============================================================
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets:  ['latin'],
  display:  'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets:  ['latin'],
  display:  'swap',
})

// ============================================================
// Default metadata — overridden per page via `metadata` exports
// ============================================================
export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://learn.portlev.com'
  ),
  title: {
    default:  'PortLev Academy — Build with AI. Create Leverage.',
    template: '%s | PortLev Academy',
  },
  description:
    'Free, open-source AI learning for executives and consultants. ' +
    'Build real workflows, close the AI Wage Gap and create lasting leverage.',
  openGraph: {
    type:        'website',
    siteName:    'PortLev Academy',
    title:       'PortLev Academy — Build with AI. Create Leverage.',
    description: 'Free, open-source AI learning for executives and consultants.',
  },
  twitter: {
    card:    'summary_large_image',
    creator: '@yurikruman',
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

// ============================================================
// Root layout component
// ============================================================
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <Nav />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
