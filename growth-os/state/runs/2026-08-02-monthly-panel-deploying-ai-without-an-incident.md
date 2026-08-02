# ICP-Member Audit Panel — Monthly Build, Lesson #1

- **Run date:** 2026-08-02
- **Agent:** M4 (Curriculum Builder), acting as its own reviewer this run (no separate reviewer available)
- **Content under review:** `content/tracks/ai-governance/04-deploying-ai-without-an-incident.mdx` ("How to Deploy AI Without Causing a Governance Incident")
- **Source:** M3 plan item #1, sourced from M1 items 12, 13, 14, 26
- **Lane:** fit and usefulness only (NOT facts, NOT grammar, NOT SEO)

---

## Round 1 — Outline stage (before drafting)

**Outline reviewed:** Opens with the moment an enabler dreads: an approved pilot that demoed well and then did something nobody approved, in production, with her name on the approval. States the 11-14% pilot-to-production statistic (Tricentis) and the seven-item failure taxonomy. Uses Cognizant's 2026-07-28 EMEA AI unit as a real, current proof point. Teaches a tiered governance system (NIST AI RMF, ISO/IEC 42001) so low-stakes tools move fast and only high-stakes deployments carry full governance. Folds in an accountability-design sub-section (HBR item 26): name in writing who explains and defends an AI-driven decision before the deployment ships. Steps: run a failure-taxonomy audit on what is already live, tier it on one page, name an accountable owner for every medium/high item, add a go/no-go gate, put the artifact where the team and board can find it. Cross-links up to the Enterprise AI Deployment Protocol, across to the 60-Day AI Baseline and Your First AI Governance Decision, down to the AI Regulation lesson.

```json
{
  "panel": [
    {
      "persona": "01",
      "scores": { "relevant": 5, "timely": 4, "useful": 3, "voice": 4 },
      "rung": "1-2 (secondary fit, heading toward 4-5)",
      "move": "If the steps stay concrete and produce a one-page artifact I can actually hold, not a program I have to run, this could be my Monday-morning move even though I am not the primary reader.",
      "verdict": "revise",
      "inCharacter": "This names my exact fear, deploying AI wrong and getting blamed for the incident, word for word. My worry reading the outline is that 'build a tiered governance system' turns into a compliance memo by the time someone drafts it. Keep every step to something I could physically do this week or I bounce.",
      "wouldMakeIt5": "Make sure the finished lesson ends with one page I could screenshot and put in front of my board, not a framework I have to go build myself."
    },
    {
      "persona": "02",
      "scores": { "relevant": 3, "timely": 3, "useful": 2, "voice": 3 },
      "rung": "3-4 (not the target)",
      "move": "None obvious yet. If the tier list and named-owner artifact end up looking like a template I could install at a client, the way the CAIO playbook's data-boundary grid already does, that becomes something I could sell. As outlined it reads enterprise-internal, not portfolio-facing.",
      "verdict": "revise",
      "inCharacter": "Not my problem as framed, I am not sitting inside one org's governance committee. But the artifact you are describing, a one-page tier list with named owners, is exactly the kind of deliverable I already charge for. Whether this works for me depends entirely on whether the finished piece treats that page as a portable asset or as internal homework.",
      "wouldMakeIt5": "Not required to pass since I am not primary or secondary here, but noting the bridge for later."
    },
    {
      "persona": "03",
      "scores": { "relevant": 5, "timely": 5, "useful": 4, "voice": 4 },
      "rung": "4-5",
      "move": "Run the failure-taxonomy audit on what my team already uses, tier it, name owners, this is my actual job this quarter.",
      "verdict": "pass",
      "inCharacter": "Finally, vendor-neutral, deployment-real material instead of another 'AI is powerful' piece. The failure taxonomy and the Cognizant example tell me this is not theoretical, and the accountability sub-section names a problem I have been feeling but had not seen written down: my name is on the tool, but it is my most junior analyst explaining the outcome to an upset employee. If the finished lesson keeps this concrete, it is close to a 5.",
      "wouldMakeIt5": "Give me the one-page artifact explicitly, not just the concepts, so I can walk into my next leadership meeting with something in hand."
    }
  ],
  "synthesis": {
    "verdict": "revise",
    "primaryPersonaServed": "03",
    "ladderRung": "4-5",
    "nextMove": "Build the one-page tiering-and-ownership artifact as an explicit, concrete deliverable inside the Steps section, not an abstract framework to go build elsewhere.",
    "topFixes": [
      "Every step must produce something the reader can point to (an audit list, a one-page tier sheet, a named-owner line), not a process to go design.",
      "Keep the register do-this-Monday throughout, per M2's own flagged risk for Dana's secondary fit; do not let the tiered-governance section drift into compliance-memo tone.",
      "Make sure this does not just repeat leading-ai-adoption/05's 'build governance in from day one' step; differentiate with the failure taxonomy, the tiering system and the accountability-design sub-section, none of which that lesson covers."
    ],
    "notes": "Outline passes for persona 03 outright and is fixable for persona 01 and 02. Proceeding to draft with the explicit instruction to make every step produce a concrete artifact."
  }
}
```

**Action taken before drafting:** built every one of the five Steps around a physical, concrete artifact (the audit list, the one-page tier sheet, the named-owner line, the go/no-go gate script, the board-ready page) rather than an abstract governance program, per the outline panel's top fix.

---

## Round 2 — Draft stage (on the finished lesson, final text)

```json
{
  "panel": [
    {
      "persona": "01",
      "scores": { "relevant": 5, "timely": 4, "useful": 4, "voice": 4 },
      "rung": "1-2 (secondary fit)",
      "move": "Run Step 1 this week: list every AI tool my team already uses, even informally, and ask the seven-item failure list as literal questions against each one. That is an afternoon, not a quarter, and it gives me the one-page tier sheet I can actually show someone.",
      "verdict": "pass",
      "inCharacter": "This is not a compliance memo, it is a checklist and a one-page sheet. The line 'not a committee, not the AI team, one name' is exactly how I would say it myself. I would not call this my lesson, it is written past my rung, but I could steal the five steps this week and nobody would know I did not write the framework myself.",
      "wouldMakeIt5": "It is close. It would be a full 5 if Step 1 named a specific time box even shorter than an afternoon for someone who genuinely has twenty minutes between meetings, but I understand why a real audit needs more than that."
    },
    {
      "persona": "02",
      "scores": { "relevant": 3, "timely": 3, "useful": 3, "voice": 3 },
      "rung": "3-4 (not the target)",
      "move": "Re-badge the Steps 2 and 3 artifact, the tier sheet with named owners, as a fixed deliverable I install in a client's first week. As written it assumes I sit inside one org's governance chain, which is not my situation.",
      "verdict": "revise (not gating, persona is not primary or secondary for this lesson)",
      "inCharacter": "I can use the skeleton, the tier sheet and the named-owner rule are genuinely sellable, but the piece never says 'sell this,' it assumes I am the one accountable inside a company. Not useless to me, just not written for me, which is fine since this is not my lesson.",
      "wouldMakeIt5": "Not required for this lesson's pass; the artifact itself is close to something I would use with clients regardless."
    },
    {
      "persona": "03",
      "scores": { "relevant": 5, "timely": 5, "useful": 5, "voice": 5 },
      "rung": "4-5",
      "move": "Run the five-step protocol against my function this week: audit what is live, tier it, name an owner for every medium- and high-stakes item, add the go/no-go gate to what ships next, and take the one-page result into my next board conversation. That is a direct move toward 6b.",
      "verdict": "pass",
      "inCharacter": "This is the real thing. The seven-item failure taxonomy gives me a shared vocabulary with my team instead of a vague 'be careful' warning. The Cognizant example proves this is not hypothetical scaremongering, a real firm restructured around it a week before this was written. And the accountability-design section names the exact problem I have not seen anyone else write down: a risk tier tells me how much governance something needs, it does not tell me who explains the outcome to the person it affects. That is precisely my name-is-on-it worry, stated back to me more precisely than I would have stated it myself.",
      "wouldMakeIt5": "It already is one. This is close to an ideal fit for my seat specifically."
    }
  ],
  "synthesis": {
    "verdict": "pass",
    "primaryPersonaServed": "03",
    "ladderRung": "4-5",
    "nextMove": "Build the one-page tier sheet with a named owner for every medium- and high-stakes AI use already live, then bring it to the next board or team conversation. Points directly at 6b (Internal Operator).",
    "topFixes": [],
    "notes": "Passes cleanly. Primary persona (03, Priya) scores 5 across the board and names a concrete ladder move; secondary persona (01, Dana) passes at 4s having confirmed the do-this-Monday register held through the full draft, resolving the exact risk M2's ICP-panel check flagged for this lesson. Persona 02 (Marcus) is neutral-to-mildly-useful, not primary or secondary, and not rejecting, satisfying the rule that a piece may be neutral to a non-target persona but not useless. No outstanding revise objections remain."
  }
}
```

## Plain-English synthesis

The governance anchor lesson passes on both rounds. The single change made between the outline pass and the final draft, per Dana's round-1 objection, was ensuring every one of the five Steps produces a concrete, physical artifact (an audit list, a one-page tier sheet, a named-owner line, a go/no-go script, a board-ready page) rather than describing an abstract governance program to go build. That single fix is what took Dana from a conditional revise to a clean pass, and it is also what makes Priya's fit go from strong to essentially ideal: she gets a real deployment protocol, honest treatment of the accountability gap HBR's research names, and an artifact she can carry into her next board conversation. Marcus is correctly neutral rather than rejecting, since this lesson does not claim him as a target and the underlying artifact (tier sheet plus named owner) is close enough to what he already sells that it does not read as useless to him either. Ships as drafted.
