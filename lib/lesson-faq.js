// ============================================================
// lib/lesson-faq.js — Per-lesson FAQ data for AEO structured data
//
// Maps "<trackSlug>/<lessonSlug>" to an ordered list of
// { question, answer } pairs. The lesson page (app/learn/
// [track]/[lesson]/page.js) reads this map and, when an entry
// exists, emits valid FAQPage JSON-LD so search engines and AI
// answer engines can cite the page as the direct answer to a
// real query.
//
// Why a separate module (not lesson frontmatter): the lesson
// Zod schema (lib/schemas.js) is intentionally strict and a new
// frontmatter field would change the build contract for every
// lesson. Keeping FAQ data here lets a lesson opt in to
// structured data without touching the schema or the prose.
//
// Hard rule (matches the Growth OS guardrails): every answer
// below must be a faithful restatement of claims already made
// in the lesson body. No new facts, stats, names or claims are
// introduced here. This module shapes existing content for AEO,
// it does not author content.
// ============================================================

export const lessonFaq = {
  // ----------------------------------------------------------
  // ai-foundations / your-first-hour-with-claude
  // Target query (Intelligence baseline 2026-06-03, query #1):
  // "How does a non-technical executive actually start using
  //  AI in one hour?" The practical-first-hour answer slot is
  //  open in the cited competitor set, and this lesson already
  //  owns the asset. Each answer below restates the lesson body.
  // ----------------------------------------------------------
  'ai-foundations/your-first-hour-with-claude': [
    {
      question:
        'How does a non-technical executive actually start using AI in one hour?',
      answer:
        'Spend one focused hour on real work rather than a course. Set up a paid Claude account, about ten minutes. Bring one genuine task you already owe this week, such as a memo, a summary or a first draft. Brief the AI in four parts: who you want it to be, the context it needs, the task and the format you want back. Push on its first answer two or three times instead of accepting it, because the value is in the iteration and your judgment is what directs it. Before you close the tab, save the prompt that worked into a Project so the second use is faster. That hour, done on your own desk, is the gap between you and a peer who already uses AI fluently.',
    },
    {
      question:
        'What makes a good first prompt when you are new to AI?',
      answer:
        'A good prompt has four parts: who you want the AI to be, the context it needs, the task and the format you want back. Think of it as briefing a sharp new analyst who knows nothing about your situation yet. A one-line question gets a one-line-quality result, so giving the role, context, task and format is most of the skill.',
    },
    {
      question:
        'Why do executives give up on AI after the first answer?',
      answer:
        'The first response is a starting point, not the output. Executives who stop there conclude AI is nothing special, while those who push two or three times, asking it to cut the length, strengthen a weak section or rewrite for a different audience, end up with work that is often better than their unaided draft and produced in a fraction of the time. The difference is entirely in the iteration.',
    },
  ],
}

// ============================================================
// getLessonFaq(trackSlug, lessonSlug)
// Returns the FAQ array for a lesson, or null if none exists.
// ============================================================
export function getLessonFaq(trackSlug, lessonSlug) {
  return lessonFaq[`${trackSlug}/${lessonSlug}`] ?? null
}
