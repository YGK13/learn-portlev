# PortLev Academy: Content Governance

> This is the single source of truth for how content is created, organized and shipped.
> Read this before adding a single file to `content/`. The rules here exist because this
> site will grow fast. Structure applied now prevents chaos later.

---

## The First Law: Default Free

Every new piece of content defaults to **free**. A piece may be gated only if it meets
at least one of:

1. It requires Yuri's live time (calls, sessions, office hours).
2. It is a done-for-you implementation asset (template, prompt pack, workflow, CHRO toolkit).
3. It provides accountability or peer structure (challenge, accountability cohort).
4. It earns a **30-day paid early-access window** before going free.

If a piece does not meet one of these criteria, it is free. No exceptions.

---

## Directory Structure

```
content/
├── tracks/                    # Learning tracks (the main free curriculum)
│   └── <track-slug>/
│       ├── track.json         # Track metadata (title, summary, level, order)
│       ├── 01-<slug>.mdx      # Lessons, numbered for display order
│       ├── 02-<slug>.mdx
│       └── ...
├── briefs/                    # Leverage Brief issues and standalone articles
│   └── YYYY-MM-DD-<slug>.mdx
└── pages/                     # Static marketing pages (MDX-rendered)
    ├── book.mdx
    ├── cohort.mdx
    └── about.mdx
```

---

## Content Types and Schemas

All frontmatter is validated at build time by a Zod schema (`lib/schemas.js`).
A build failure means a required field is missing or a value is out of range.
Fix the frontmatter, not the validator.

### Lessons (`content/tracks/<track>/NN-<slug>.mdx`)

**Required fields:**

| Field | Type | Values / Notes |
|-------|------|----------------|
| `title` | string | Sentence case. Max 70 chars. |
| `summary` | string | One sentence. Max 160 chars. Used for SEO and lesson cards. |
| `track` | string | Must match the containing directory name exactly. |
| `order` | number | Integer. Unique within the track. Derived from filename prefix. |
| `level` | enum | `beginner`, `intermediate` or `advanced` |
| `status` | enum | `draft` or `published`. Drafts hidden in production. |
| `tier` | enum | `free`, `members` or `course`. Default: `free`. See First Law. |
| `updated` | string | `YYYY-MM-DD`. Date of last meaningful content change. |

**Optional fields:**

| Field | Type | Notes |
|-------|------|-------|
| `tags` | string[] | Lowercase kebab-case. Max 5 per lesson. |
| `estReadMin` | number | Estimated reading minutes. Auto-calculated if omitted. |
| `video.status` | enum | `none`, `scripted`, `produced` or `published`. Default: `none`. |
| `video.youtubeId` | string | Set after the YouTube video is live. Site auto-embeds. |
| `video.durationTarget` | number | Target video length in minutes. |
| `video.scriptStatus` | enum | `none`, `drafted` or `approved`. |
| `ogImage` | string | Path to a custom OG image. Auto-generated if omitted. |

**Example frontmatter:**

```yaml
---
title: "What Is the AI Wage Gap and Why It Matters"
summary: "Most professionals are falling behind economically because of AI. Here is why — and what you can do about it."
track: ai-foundations
order: 1
level: beginner
status: published
tier: free
updated: "2026-05-18"
tags: ["ai-wage-gap", "fundamentals", "career"]
estReadMin: 8
video:
  status: none
  scriptStatus: none
---
```

---

### Briefs (`content/briefs/YYYY-MM-DD-<slug>.mdx`)

| Field | Type | Values / Notes |
|-------|------|----------------|
| `title` | string | Required. |
| `summary` | string | Required. Max 160 chars. |
| `date` | string | Required. `YYYY-MM-DD`. Must match the filename prefix. |
| `type` | enum | Required. `brief` (Leverage Brief issue) or `article` (standalone). |
| `status` | enum | Required. `draft` or `published`. |
| `tier` | enum | Required. `free` or `members`. Default: `free`. |
| `tags` | string[] | Optional. Lowercase kebab-case. Max 5. |
| `canonical` | string | Optional. beehiiv URL if published there first. |
| `video.status` | enum | Optional. Same values as lessons. |
| `video.youtubeId` | string | Optional. |

---

### Track Metadata (`content/tracks/<track>/track.json`)

```json
{
  "title": "AI Foundations",
  "slug": "ai-foundations",
  "summary": "The essential concepts every professional needs before they can build with AI.",
  "level": "beginner",
  "order": 1,
  "icon": "🧠",
  "status": "published",
  "tags": ["ai-fundamentals", "career"]
}
```

| Field | Notes |
|-------|-------|
| `title` | Display title. |
| `slug` | Must match the directory name exactly. |
| `summary` | One or two sentences. Used on the /learn page. |
| `level` | `beginner`, `intermediate` or `advanced`. |
| `order` | Integer. Controls display order on /learn. |
| `icon` | Emoji. Shows on the track card. |
| `status` | `draft` or `published`. Draft tracks hidden in production. |
| `tags` | string[]. |

---

## Naming Conventions

**Track directories:** `kebab-case` only. Must match the `slug` in `track.json`.
Examples: `ai-foundations`, `prompt-engineering-for-hr`, `building-your-first-agent`.

**Lesson files:** `NN-kebab-case.mdx`. `NN` is a zero-padded integer (01, 02 ... 99).
The number defines display order within the track and must be unique.
The URL slug is derived by stripping the `NN-` prefix and `.mdx` extension.
Example: `03-your-first-ai-workflow.mdx` → URL slug `your-first-ai-workflow`.

**Brief files:** `YYYY-MM-DD-kebab-case.mdx`. The date prefix is mandatory and must
match the `date` frontmatter field.
Example: `2026-05-18-welcome-to-the-leverage-lab.mdx`.

**Tags:** Always lowercase, always kebab-case. Reuse existing tags before creating new ones.

---

## The Teaching Arc (mandatory for all lessons)

Every lesson must follow this exact arc. This is what makes lessons: (a) pedagogically
effective, (b) mechanically convertible to a YouTube video script and (c) consistent
across a fast-growing catalog.

```
1. Hook      One paragraph. The problem, the stakes or the provocative question.
             Makes reading feel urgent. No preamble.

2. Context   What the reader needs to understand before the steps.
             Two to three paragraphs max. No fluff.

3. Steps     The core teaching. Use a numbered list. Each step has a clear
             instruction, an explanation of why and a concrete example.

4. Recap     Three to five bullets summarizing what was covered.
             No new information here.

5. CTA       Exactly one contextual call to action. See the CTA ladder below.
```

**CTA Ladder (use the lowest rung the reader has not yet crossed):**
- Reader just started the track: link to the next lesson.
- Reader finished the track: newsletter signup prompt.
- Reader is already subscribed: link to the free Skool community.
- Reader is in the free community: link to the Leverage Lab or cohort.

Never present more than one CTA per lesson.

---

## Video Pipeline

When a lesson is ready to become a YouTube video:

1. Add a `## Script` section to the MDX file, between `## Recap` and the CTA section.
   Write it as narration-optimized prose: shorter sentences, active voice, no bullet
   points, natural spoken phrasing. Target 800-1200 words for a 6-10 minute video.
2. Set `video.scriptStatus: drafted` in frontmatter.
3. Yuri reviews and approves the script. Set `video.scriptStatus: approved`.
4. Generate the video in HeyGen or Veo using the `## Script` content as the prompt.
   Set `video.status: produced`.
5. Upload to YouTube. Set `video.status: published` and `video.youtubeId: <the-id>`.
6. The lesson page automatically embeds the video. No code change needed.

---

## How to Add Content

### Add a lesson to an existing track

1. Create `content/tracks/<track>/NN-<slug>.mdx` where `NN` is the next available number.
2. Fill in all required frontmatter fields.
3. Write the lesson following the teaching arc exactly.
4. Set `status: draft` until reviewed.
5. Run `npm run validate` to confirm schema passes.
6. Set `status: published` when ready.
7. Run `npm run build` to confirm the site builds cleanly.

### Add a new track

1. Create `content/tracks/<track-slug>/` directory.
2. Create `track.json` with `status: draft`.
3. Add at least three lessons before setting the track to `status: published`.
   A track with one or two lessons is not ready to surface.
4. Set `track.json` to `status: published` when the first three lessons are done.

### Add a Leverage Brief issue

1. Create `content/briefs/YYYY-MM-DD-<slug>.mdx`.
2. Set `type: brief` and `status: draft`.
3. Set `canonical` to the beehiiv URL if you published there first.
4. Set `status: published` when ready to appear on the site.

---

## SEO Checklist

Before setting `status: published` on any content:

- [ ] `title` is 60-70 chars and contains the primary keyword.
- [ ] `summary` is under 160 chars and reads well as a search snippet.
- [ ] Lesson has at least one H2 heading.
- [ ] No broken internal links.
- [ ] `tags` are consistent with existing tags (check before creating new ones).
- [ ] If `tier: free`, the content is complete and genuinely useful. No stub lessons.

---

## Draft Workflow

- `status: draft` content is hidden in production but visible in Vercel preview
  deployments. Use preview URLs to review before publishing.
- Never delete a published lesson. If it needs to be retired, set `status: draft`
  and add a `retired:` note to the frontmatter explaining why.
- Use pull requests for new tracks. Direct commits are fine for lesson updates
  and brief additions.

---

## Open-Source Contribution

Code license: MIT. Content license: CC-BY 4.0.

**Welcome contributions:**
- New lessons for existing tracks (follow the teaching arc exactly).
- Corrections to existing lessons (typos, outdated info, broken links).
- New track proposals (open a GitHub issue first for discussion).

**Not welcome:**
- Alternative perspectives or opinions embedded in existing lessons (the voice is Yuri's).
- Lessons that promote specific tools or companies not already referenced in the curriculum.
- Any content with `tier: members` or `tier: course` — that is Yuri's to write.

---

## Build Validation

`npm run validate` (also runs automatically as a pre-build step) will:
- Parse every `.mdx` and `.json` file in `content/`.
- Validate frontmatter against the Zod schemas in `lib/schemas.js`.
- Exit with a clear error message identifying exactly which file and field failed.

A failed validation blocks the build. This is intentional.
Fix the content file, not the schema.
