// ============================================================
// next.config.mjs — PortLev Academy Next.js configuration
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
}

export default nextConfig;
