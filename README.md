# PortLev Academy (learn.portlev.com)

Free, open-source AI curriculum for executives, consultants and coaches, published by
[Portfolio Leverage Company](https://portlev.com) and taught by [Yuri Kruman](https://yurikruman.com).
The site is the top of a value ladder: free tracks, [The Leverage Brief](https://leveragebrief.beehiiv.com),
then the paid programs (the live Executive AI Cohort at `/cohort` and the self-paced
Fractional CAIO Program at `/program`).

## Stack

Next.js 16 (App Router, Turbopack), React 19, Tailwind 4, MDX via `next-mdx-remote`,
Zod-validated frontmatter, Vercel hosting and Vercel Analytics, beehiiv for email capture.
No auth, no database, no on-site payments.

## Layout

| Path | What lives there |
|---|---|
| `content/tracks/<track>/` | `track.json` plus numbered lesson `.mdx` files. Written daily by the `growth-os` automation; do not restructure. |
| `app/` | Routes. Marketing surface (`/`, `/program`, `/programs`, `/cohort`, `/about`), curriculum (`/learn/[track]/[lesson]`), the Brief (`/brief`), and generated `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt`, `feed.xml` and OG images. |
| `lib/site.js` | Every entity fact search engines read (organization, person, program, pricing, sister links) and the JSON-LD builders. Change facts here, not in pages. |
| `lib/content.js` | Content loaders used by pages, sitemap, feed and llms.txt. |
| `components/` | Server components for layout and marketing blocks; client components only where state is needed (nav, forms, lesson interactivity). |
| `docs/` | `AUDIT-2026-09.md` (live audit and what changed) and `GTM-2026-09.md` (go-to-market plan). |
| `STRATEGY.md`, `COURSE_STRATEGY.md`, `CONTENT.md` | Why the site exists, which courses to build, how content ships. Read before adding content. |

## Develop

```bash
npm install
npm run dev        # validates content/ first, then starts next dev
npm run build      # validates, then production build
npm run lint       # eslint
npm run validate   # content/ frontmatter against lib/schemas.js
```

Optional environment: `NEXT_PUBLIC_SITE_URL` (defaults to `https://learn.portlev.com`),
`GOOGLE_SITE_VERIFICATION`, and the beehiiv keys used by `lib/beehiiv.js` and `lib/leverage-brief.js`
(without them `/brief` falls back to the local MDX archive).

## Licensing

Code is MIT. Original content is CC-BY 4.0. Adapted tracks keep their source license, credited on
`/credits` and in each `track.json`.
