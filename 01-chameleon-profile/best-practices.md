# Profile Page UX — Best Practices

**Project 01 · Reference Material**
**Updated 2026-06-10 — Round 1 complete. Based on [`research-notes.md`](research-notes.md) plus all 8 Chameleon voices across Sessions 1, 2, and 3.**

The curated source-of-truth for the wireframe phase. This is what we've agreed the new Chameleon profile pages should *do* and *be* — translated from the eleven-platform research and the full Round 1 Chameleon discovery. The research notes are the *what we observed*. This file is the *what we're committing to*.

When wireframes start, this is the document they design against.

### Session 3 changes to this doc

Round 1 closed out with three sessions of group discovery. The principles below stand. Session 3 added five new commitments and one nuance the wireframe phase needs to know about:

- **Master + tailored children architecture** added to page architecture — one canonical profile, many tailored derivatives.
- **Multi-format output (web + slide/PDF)** added under output formats — one source, both formats. Required, not optional.
- **AI-tailored bio + profile coaching** added under Bio module — Jeff's existing manual workflow built natively.
- **Automated post-engagement testimonial collection** added under Trust Signals — the automation layer that makes the testimonial feature actually work.
- **External vs Chameleon-only ecosystem** clarified under Activity Stream — pulling from LinkedIn / personal sites is now optional per Chameleon, not the default. Some Chameleons (Chris, Pamela) want everything inside the Collective.
- **Activity stream motivation** clarified — it's a brand/credibility play, not a lead-capture play. This matters for tone and content recommendations.

---

## Core position

The Chameleon profile is the page that helps a prospective client decide whether to reach out to this specific person. It sells **the person and their skills**, not the Collective. It's the human moment after a Google search, an outbound email link, or a referral.

We are not building a talent-marketplace listing and we are not building a hidden consultancy bio. We are building **a premium personal landing page for a senior marketing leader, with discovery and contact mechanics that actually work**.

---

## Framing principle

> **Feel consultancy. Work talent network.**

Each profile should *feel* like a Pentagram or IDEO partner page — narrative, considered, prestige-framed, humanizing — because that's what positions us as the place for the most skilled and capable marketing leaders.

But the page must *work* like a talent network — searchable, contactable, status-aware, modular — because that's what makes the Collective discoverable, useful, and ownable for the Chameleons themselves.

Where the two frameworks disagree, **the rubric breaks the tie** — choose whatever makes the page more useful to the Chameleon and the prospect who lands on it, even if that means borrowing from one tradition and rejecting the other.

---

## Page architecture

**Modular widget builder with strong defaults.** Every Chameleon's page is composed of toggleable modules. Defaults are pulled from Collective OS data + shared Collective content so the page is presentable on day one without any Chameleon effort. Customization is opt-in and per-module.

The architecture splits into three layers:

1. **Shared base** — modules every profile has, in the same order. Strong defaults from COS or shared Collective content. The Chameleon can edit but can't remove. Establishes brand consistency.
2. **Personal upgrades** — modules the Chameleon turns on, customizes, populates. These are what differentiate one Chameleon from another. Optional but enabled by design.
3. **Conditional modules** — modules that appear only when relevant data exists (e.g. sizzle reels for visual roles, sample deliverables for craft-driven Chameleons).

### Master + tailored children *(added Session 3)*

Each Chameleon has **one master profile** — the canonical version, fed by COS data and personal upgrades. The master is the source of truth.

On top of that, each Chameleon can generate **tailored children** — derivative profiles cloned from the master and edited for a specific pitch, client, or job description. Each child is saveable, shareable, has its own URL, and can be updated independently. When the master changes, children retain their edits where they diverged but inherit unchanged content.

This is the architectural shift that lets Chameleons stop using Google Slides as their primary pitch tool. The master is the page; the children are the disposable, tailored, shareable artifacts. Combined with AI-tailored bio generation (see Bio module below) and multi-format output (see Output formats below), this turns the profile system into an active pitch tool — not a static page.

Start simple: 3–5 active children per Chameleon. Sprawl management matters.

### Output formats — required, not optional *(added Session 3)*

One source of truth, **multiple output formats**. Required from day one. Both formats consensus-validated across Session 3 (Jeff: "I would still do the slide." Pamela: "I would use it instead of my Google slide.").

- **Web** — auto-updated, mobile-responsive, shareable as a link, supports embedded video and interactive modules. Always live, never stale.
- **Slide / PDF export** — generated server-side from current profile state. Same content, slide-formatted. Always up-to-date because it's rendered fresh on demand. Covers the "polished feel" Chameleons still send via email today.

Slide-format quality bar: at least as good as what Chameleons currently make in Google Slides by hand. If it doesn't clear that bar, the feature fails.

---

## The module set, in recommended order

### 1. Identity hero  ·  *shared base · always shown*

- **Large, treated portrait.** Not a generic LinkedIn headshot. Designed treatment (duotone, considered crop) signals premium. Same treatment system across all Chameleons creates visual continuity for the Collective.
- **Name and location.** Pentagram pattern — *Name, Location* as the first reading after the photo. Location matters even for remote work (clients ask).
- **Headline that pitches the person, not the service.** One line. Senior-marketing-leader register. Not "Marketing Consultant" — something like "Fractional CMO for DTC and PE-backed brands." Customizable per Chameleon.
- **Stat callouts (up to three).** Years of experience, years in the Collective, total paid-media managed / brands served / category-specific signal. Auto-populated where possible, customizable. Inspired by Austin's concept, validated as a credibility scan by both sessions.
- **Availability status indicator.** Available now / fully booked / partial capacity. Pulled from capacity tracking (revenue-target inferred where possible; see [Idea 19](ideas.html#idea-19)). Visible to clients filtering for capacity. Solves Sonia's stated pain.
- **"Hire your team, not your agency" universal positioning line.** A single sentence that lives in or near the hero on every profile. Reinforces the model in the moment a prospect is forming first impressions.

> **Rejects:** "Top 3%"-style prestige badge that subsumes the individual into a platform brand (the Toptal failure mode). Generic stock headshot. Vague role titles ("Consultant," "Strategist") that signal commodity.

### 2. Bio  ·  *shared base · always shown*

- **First-person narrative bio, multi-paragraph.** Closer to a biography than a resume summary. Warm, considered, the Chameleon's actual voice.
- **3–5 paragraphs covering:** what they do at their best · how they got here (career arc) · industries / problems they care about · who they like to work with.
- **No bullet lists in the bio.** Bullets are for skills and projects. The bio is the human moment.
- **Default: a guided draft.** If the Chameleon hasn't written one, the system offers a starter draft assembled from COS + a template + recent project data. They can publish it as-is or revise. Default is good enough that it works.

#### AI-tailored bio + profile coaching *(added Session 3)*

Jeff's actual current workflow, built natively: input a client name + job description, and the system generates a tailored bio page from the master. The AI is constrained to the Chameleon's real experience — it surfaces things they have but undersold (Jeff's example: "I have buyer journey optimization experience but didn't mention it"), not made-up content. The output is a saveable **child profile** (see Master + tailored children above).

The AI also operates as a coaching layer: looking at the Chameleon's master profile, it can suggest gaps, weak sections, and experiences they undersold relative to what their typical clients ask for.

**Always approve-before-save.** AI-tailored content without Chameleon review is not acceptable. The flow is: AI drafts → Chameleon reviews → Chameleon edits → Chameleon saves.

> **Rejects:** McKinsey-style third-person bio (cold). Resume-summary bullet bio (Upwork default). Bios that read as "available for hire" rather than "this is who I am." AI-generated content that publishes without Chameleon review.

### 3. Curated expertise  ·  *shared base · always shown*

- **Top 3–5 areas of focus.** What the Chameleon actually wants to be hired for *now*. Not an exhaustive directory. Braintrust's "Superpowers" pattern.
- **Industries they serve** — small, curated set, not the legacy tag wall.
- **Roles / titles they take on.** Fractional CMO. Brand Strategist. CRM Lead. Specific.
- **One-time cleanup of legacy tags** required to populate this well (see [Idea 23](ideas.html#idea-23)).
- **Tag data lives underneath, powers search.** What's *displayed* on the page is curated; what's *indexed for matching* is richer.

> **Rejects:** Walls of tags. Auto-listing every skill the Chameleon has ever touched. Adjective-soup descriptions ("strategic, innovative, creative" — meaningless).

### 4. Work proof  ·  shared base + conditional modules

**Always shown (shared base):**

- **Auto-populated client logo bar.** Pulled from Collective OS account data. Override + hide controls for NDA clients. Zero Chameleon effort to populate. The fastest credibility scan on the page ([Idea 5](ideas.html#idea-05)).
- **Selected projects (3–6).** Structured: project name · client (logo or anonymized) · role · contribution · team / collaborators (Braintrust's Product/Role/Contribution/Team framework). One paragraph each. Default set auto-pulled from COS; Chameleon curates.

**Conditional modules (turn on when relevant):**

- **Sample deliverables** — anonymized examples of typical outputs. Especially powerful for creatives. Pilot with high-craft Chameleons first ([Idea 10](ideas.html#idea-10)).
- **Sizzle reel** — short video of the work itself, for visual / creative roles ([Idea 24](ideas.html#idea-24)).
- **Case studies** — long-form when the Chameleon has them and they're theirs. *Not generic Collective case studies.*

> **Rejects:** Generic Collective case studies presented as the Chameleon's work (current state — this is the inflation-by-association problem we explicitly named). "Featured logos" the Chameleon never actually worked with.

### 5. Trust signals  ·  shared base · always shown (but graceful when empty)

- **Client testimonials.** First-class feature. Chameleon requests via email link; client submits; testimonial displays when approved ([Idea 4](ideas.html#idea-04)). The single highest-confidence win across the research.
- **Automated post-engagement collection *(added Session 3)*.** The collection layer that makes testimonials actually exist. Triggered after engagement completes (or 3/6-month checkpoints for retainers). Email asks client thumbs up/down → on thumbs up, prompts for a 3-sentence testimonial → testimonial enters the Chameleon's moderation queue → Chameleon chooses what displays ([Idea 29](ideas.html#idea-29)). Jeff: "feels less personal in a good way coming from the company." Strict frequency caps required to avoid client survey fatigue.
- **Peer endorsements as testimonials** — when another Chameleon mentions working together ("Worked with Sonia on 15 projects, she always…"), that lives as a named testimonial. Not a "common collaborators" tag.
- **Recognition / awards** when applicable — only surface when present, never as an empty section.
- **Chameleon moderates the display set.** Per Chris: "I want to be a restaurant on Yelp where I can moderate." The Chameleon picks which approved testimonials display, in what order, and can hide any.
- **Empty state matters.** A blank testimonials section signals "no one likes working with this person." When empty, the section is hidden or filled with a default — never visibly blank.

> **Rejects:** Public star ratings ([Idea 22](ideas.html#idea-22), refined out — creates the metric tyranny the Collective was built to escape). Job Success Score-style algorithmic ratings. "Common collaborators" tag ([Idea 12](ideas.html#idea-12), killed). Unmoderated testimonial display. Survey-fatigue-inducing collection cadence.

### 6. Activity stream  ·  shared base · always shown (with fallback)

**The most important commitment in this whole document.** A profile that doesn't move dies. A profile that moves carries the Collective's relevance.

**Motivation matters here.** *(clarified Session 3)* The activity stream is a **brand and credibility play**, not a direct lead-capture play. When Juan tested in S3 whether direct lead-routing would motivate Chameleons to publish more, Chris and Pamela said no — they preferred Collective cohesion to individual lead-gen ownership. The right framing for Chameleons: *publishing keeps the page alive, which keeps the Collective looking sharp.*

- **Recent thought pieces, talks, podcasts, posts, projects.** Two sourcing options, per Chameleon's preference *(clarified Session 3)*:
  - **External ingestion** — auto-pulled from sources the Chameleon connects (LinkedIn, personal blog, podcast, Substack, COS project completions). Default for Chameleons who maintain an external presence.
  - **Chameleon-ecosystem only** — content posted directly in the Collective stays inside it. Default for Chameleons (Chris, Pamela) who explicitly want everything in one place under the Collective brand.
- **Fallback when the Chameleon hasn't produced anything recently: core shared Collective content.** Recent posts from `collectivecapitalism.org`, the book, the Collective's LinkedIn, other Chameleons' published work tagged relevant. The page is never visibly empty.
- **Future state: AI-assisted publishing.** Make it easy for Chameleons to use Claude (already in our stack) to draft thought pieces, posts, mini-experiments tied to their practice. The activity stream becomes a flywheel — easy publication → fresh content → better page → reason to publish more. We are not building this in Phase 1, but the architecture should anticipate it. Always approve-before-publish.
- **Format mix:** text posts, links, video embeds, audio. Don't force a single content type.

> **Rejects:** Empty "Recent Activity" sections that signal stagnation. Auto-published AI slop with no human edit pass. Activity that's only the Chameleon retweeting Collective announcements. Forcing external account connections on Chameleons who don't have or want them.

### 7. Contact / CTA  ·  shared base · always shown

- **Primary CTA: "Book an Intro Call" (or equivalent personal action).** Direct, named — "Talk to [Name]" — not "Contact Chameleon Collective."
- **Contact form with pre-populated subject line** signaling the lead came from this Chameleon's page ([Idea 3](ideas.html#idea-03)).
- **Light qualifying fields, all optional:** budget (with "not sure / let's discuss"), timeline, internal resource scope ([Idea 7](ideas.html#idea-07)).
- **Variable routing tier per Chameleon ([Idea 14](ideas.html#idea-14))** — four tiers, every routing preference voiced in research is covered:
  1. *Raw direct* — form goes straight to them, accepting the spam tradeoff
  2. *Spam-filtered* — Collective screens for legitimacy, forwards
  3. *Vetted + closing support* — fuller sales hand-holding, opt-in fee
  4. *Fully centralized* *(added Session 3)* — all leads route to BD as today, profile carries no individual contact path. For Chameleons (Chris, Pamela) who prefer the Collective handle all client intake. No routing premium.
- **Secondary CTA: LinkedIn.** Standard, low-stakes way to connect.
- **Optional tertiary:** Calendly / scheduling link if the Chameleon uses one.

> **Rejects:** Generic "Chat With Us" routing to the Collective sales inbox (current Caleb page). No-contact-on-profile (the consultancy failure mode — fails the brief's core thesis). Through-platform-only messaging that hides the email path (the talent network failure mode).

### 8. Optional personal modules  ·  *personal upgrades · Chameleon opts in*

Modules the Chameleon can turn on, never required, never defaulted-on:

- **Off Hours / Personal content** ([Idea 11](ideas.html#idea-11)) — wildlife photography, music, sport, kids. Humanizes. Optional.
- **"How I Work" personal process** ([Idea 9](ideas.html#idea-09)) — process module distinct from the universal "Hire your team, not your agency" positioning. Written, Loom, or annotated slides. Process-focused, never productized.
- **Peer-to-peer video testimonials** ([Idea 2](ideas.html#idea-02)) — short videos from collaborators or clients. Opt-in.
- **Custom links / "Find me elsewhere"** — personal site, Substack, podcast, etc.

> **Rejects:** Mandating personal content. Surfacing absence ("This Chameleon hasn't added Off Hours" type messaging — never).

---

## What we explicitly reject

Across the eleven platforms, several patterns clearly fail the rubric or the brief. We're naming them so the wireframes don't backslide:

| Anti-pattern | Where seen | Why we reject it |
|---|---|---|
| Tag walls / exhaustive skill lists | Current Caleb page; Upwork | Optimized for crawlers, hostile to humans. The brief is explicit on this. |
| Public star ratings | Upwork JSS | Creates metric tyranny, hierarchy, gaming. Cuts against "We over Me." |
| Common collaborators / "frequent partners" tag | (Proposed Session 1) | Rejected by Chameleons as cliquey. Peer endorsements live in testimonials instead. |
| Through-platform-only contact | Toptal, Braintrust, Upwork | Fails autonomy. The page should give clients a real path to the Chameleon. |
| No-contact-on-profile | McKinsey, BCG, Pentagram | Fails the prospect-landing moment. The whole brief was about not letting that happen. |
| "Top X%" prestige badge | Toptal | Brand-vouches-for-individual subsumes the person into the platform. We sell people. |
| Resume-summary bullet bio | LinkedIn default | Cold and commodity-feeling. Bio should be biography. |
| Auto-published AI content with no human pass | (Risk for Idea 20) | Tone-deaf at scale. Always require Chameleon review-before-publish. |
| Empty trust / testimonials sections visible | Generic risk | Signals "no one likes working with this person." Hide or default — never visibly blank. |
| Generic Collective case studies as the Chameleon's work | Current Caleb page | Inflation by association. Caleb pointed this out explicitly. |

---

## Discovery (off-page, but profile-essential)

The page only works if prospects can find it. Three supporting decisions tied to ideas already scored:

- **Curated skill tagging cleanup** ([Idea 23](ideas.html#idea-23)) — each Chameleon prunes legacy tags so they're only surfaced for work they actually want. Chris's S3 framing makes this a "We over Me" act: he prunes so peers who are better at a thing get those leads.
- **Conversational AI search on the site** ([Idea 15](ideas.html#idea-15)) — replaces the broken filter UX. Blocks on #23 (sequential dependency).
- **Available-now filter + automated availability triggers** ([Ideas 17 + 18](ideas.html#idea-17)) — clients filter for capacity; system promotes Chameleons when they're available.
- **Bifurcated site structure** ([Idea 16](ideas.html#idea-16)) — separate "learn about Chameleon" from "find an expert." Bigger lift; separate workstream.
- **Group/team profile assembly** ([Idea 28](ideas.html#idea-28)) — biz-dev-facing tool: when pitching multiple Chameleons, generate a unified team output instead of manual PDF compilation. Uses the same multi-format output engine, multi-Chameleon input.

---

## Implementation principles

For wireframing, design, and engineering decisions, these are the principles the work should be tested against:

1. **The page works without any Chameleon effort.** Defaults pulled from COS + shared Collective content produce a presentable profile on day one. Most Chameleons will never customize — the page has to work for them.
2. **Customization is opt-in, per-module.** No global "customize / don't customize" toggle. The Chameleon turns on modules they care about and leaves the rest as defaults.
3. **Empty states are designed, not accidental.** Every module has a default content state. Visibly empty modules are a design failure — either hide or fill.
4. **Each module has an inline edit affordance.** No separate admin panel — edit in place, simple, fast.
5. **Brand consistency comes from the system, not the writer.** Shared visual treatment, type, spacing — the Chameleon's voice fills the structure, doesn't fight it.
6. **The page is the source of truth — for the page and for what flows from it.** Profile data feeds matching, search, featuring, social. Update once → propagate everywhere.
7. **Personality is permitted, never required.** Humanization is opt-in. Quieter Chameleons aren't disadvantaged for not adding Off Hours.
8. **The CTA is named, personal, and routed to the Chameleon's chosen tier.** Not "Contact Us." "Talk to [Name]," with routing that respects the Chameleon's preference.

---

## Cross-reference — which ideas this codifies

| Best practice | Scored idea(s) |
|---|---|
| Modular page architecture with strong defaults | [Idea 1](ideas.html#idea-01) + [Idea 8](ideas.html#idea-08) |
| Master + tailored children profile system | [Idea 26](ideas.html#idea-26) |
| Multi-format output (web + slide/PDF) | [Idea 27](ideas.html#idea-27) |
| AI-tailored bio + profile coaching workflow | [Idea 25](ideas.html#idea-25) |
| Group/team profile assembly | [Idea 28](ideas.html#idea-28) |
| Automated post-engagement testimonial collection | [Idea 29](ideas.html#idea-29) |
| Hero stat callouts + availability indicator | [Idea 17](ideas.html#idea-17) |
| "Hire your team, not your agency" in hero | [Idea 13](ideas.html#idea-13) |
| Auto-populated client logo bar | [Idea 5](ideas.html#idea-05) |
| Selected projects with Product/Role/Contribution/Team framework | (new — Braintrust pattern) |
| Sample deliverables | [Idea 10](ideas.html#idea-10) |
| Sizzle reels | [Idea 24](ideas.html#idea-24) |
| Client testimonials feature | [Idea 4](ideas.html#idea-04) |
| Peer endorsements as testimonials (not as a tag) | [Idea 4](ideas.html#idea-04), supersedes [Idea 12](ideas.html#idea-12) |
| Activity stream with shared-content fallback | (new — Pentagram pattern adapted) |
| AI-assisted publishing flywheel (future) | [Idea 20](ideas.html#idea-20) extended |
| Direct contact form with pre-populated subject | [Idea 3](ideas.html#idea-03) |
| Budget + timeline qualifying fields | [Idea 7](ideas.html#idea-07) |
| Variable routing tiers per Chameleon | [Idea 14](ideas.html#idea-14) |
| Off Hours / Personal content (optional) | [Idea 11](ideas.html#idea-11) |
| "How I Work" personal process (optional) | [Idea 9](ideas.html#idea-09) |
| Peer-to-peer video testimonials (optional) | [Idea 2](ideas.html#idea-02) |
| Curated skill tagging | [Idea 23](ideas.html#idea-23) |
| Conversational AI search | [Idea 15](ideas.html#idea-15) |
| Bifurcated site structure | [Idea 16](ideas.html#idea-16) |

---

## What's not in this doc

- **Visual design specifics.** Type, color, exact spacing — that's the design system layer. This is structural.
- **Engineering architecture.** How modules are built, what data model lives behind them — that's the engineering layer.
- **Content templates.** What the actual default bio reads like; what the testimonial request email says — that's the content layer.
- **Phasing / roadmap.** What ships in Phase 1 vs Phase 2 — that's the planning layer. We've flagged some sequencing (skill cleanup blocks conversational search, etc.) but haven't roadmapped.
- **The site-wide context.** Site nav, search UX, bifurcation — touched briefly under Discovery but treated as a separate workstream that the profile depends on but doesn't own.

Each of these becomes its own document when the wireframe phase produces the next set of decisions worth codifying.

---

## What's next

When wireframes start, this document is the rubric against which they're evaluated. Any wireframe decision that contradicts a "Rejects" line should be flagged and discussed before shipping. Any new pattern that surfaces during wireframing should be added back to [`research-notes.md`](research-notes.md), scored against the [Chameleon Rubric](../../Framework/Chameleon-Rubric.md), and either folded into this document or explicitly rejected with reasoning.

The point of this doc isn't to lock the design — it's to lock the *principles* so the design can move fast without losing them.
