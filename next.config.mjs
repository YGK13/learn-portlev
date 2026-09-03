// ============================================================
// next.config.mjs - PortLev Academy Next.js configuration
// ============================================================

import { fileURLToPath } from 'url'
import { dirname } from 'path'

// Derive __dirname for ES module context
const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ---- Turbopack (default bundler in Next.js 16) ----------
  turbopack: {
    // Pin the project root so Turbopack does not mistake a
    // parent-directory package-lock.json as the workspace root.
    root: __dirname,
  },

  // ---- Redirects -------------------------------------------
  // The Fractional CAIO Program is sold from portlev.com and The
  // Leverage Brief as /program. The original /caio-course URL keeps
  // working via a permanent redirect so held outbound emails,
  // lesson CTAs and any indexed link consolidate on one canonical.
  async redirects() {
    return [
      { source: '/caio-course',        destination: '/program', permanent: true },
      { source: '/caio-course/:path*', destination: '/program', permanent: true },
      { source: '/course',             destination: '/program', permanent: true },
      { source: '/caio',               destination: '/program', permanent: true },
    ]
  },
}

export default nextConfig;
