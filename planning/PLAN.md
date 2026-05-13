# Projects Landing Page — Plan & Progress

## Overview

Personal portfolio site for an AI Systems Architect & Data Engineer. Single-page app showcasing featured projects using the STAR-T methodology (Situation, Task, Action, Result + Tech Stack).

**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4

---

## Phase 1: Initial Launch (Completed 2026-03-25)

Core portfolio site with all primary sections and components.

| Task | Status | Commit |
|------|--------|--------|
| Root layout with Inter + Roboto Mono fonts, metadata | Done | `ca02fa0` |
| Home page with PROJECTS data array | Done | `ca02fa0` |
| Tailwind v4 `@theme inline` design tokens in `globals.css` | Done | `ca02fa0` |
| `Navbar` — fixed nav with scroll-hide and IntersectionObserver active tracking | Done | `ca02fa0` |
| `HeroSection` — full-screen hero with gradient orbs and particle effects | Done | `ca02fa0` |
| `AboutSection` — bio / background section with profile image | Done | `ca02fa0` |
| `TechMarquee` — infinite-scroll tech skill badges | Done | `ca02fa0` |
| `ProjectCard` — STAR-T tabbed project card with video/image media | Done | `ca02fa0` |
| `RevealOnScroll` — scroll-triggered fade-in wrapper | Done | `ca02fa0` |
| `ScrollToTop` — floating back-to-top button | Done | `ca02fa0` |
| `Footer` — contact links / footer | Done | `ca02fa0` |
| Anchor-linked smooth scrolling (`#hero`, `#about`, `#skills`, `#projects`, `#footer`) | Done | `ca02fa0` |
| Custom CSS utilities: `glow-accent`, `card-shine`, `animate-marquee`, `animate-fade-in-up`, `hero-orb`, `hero-particle` | Done | `ca02fa0` |
| Media assets: profile photo, project demo videos, project screenshot | Done | `ca02fa0` |

---

## Phase 2: Content & Branding Updates (Completed 2026-03-25 — 2026-05-12)

Refinements to copy, links, and professional branding.

| Task | Status | Commit |
|------|--------|--------|
| Rebrand Hero + About sections to "AI Systems Architect and Data Engineer" | Done | `8a4973b` |
| Update Footer content for current role | Done | `44848de` |
| Fix HeroSection LinkedIn profile link | Done | `3549eba` |

---

## Phase 3: Code Review Fixes (Completed 2026-05-12)

Addressed high and medium severity issues identified during code review (`docs/code_review.md`).

| # | Severity | Task | Status | Commit |
|---|----------|------|--------|--------|
| 1 | High | Fix Navbar stale closure — split into two `useEffect`s with proper dependency arrays, use `useRef` for `lastScrollY` | Done | `18d67ac` |
| 5 | High | Add responsive mobile hamburger menu with slide-down drawer to Navbar | Done | `18d67ac` |
| 2 | Medium | Fix Hero CTA — split into separate GitHub and LinkedIn links with correct profile URLs | Done | `18d67ac` |
| 3 | Medium | Add IntersectionObserver-based lazy loading for project card videos | Done | `18d67ac` |
| 8 | Medium | Extract all duplicated inline SVGs into shared icon components (`src/components/icons/`) | Done | `18d67ac` |

---

## Phase 4: Remaining Code Review Items (Completed 2026-05-12)

Lower-severity items from the code review that are still pending.

| # | Severity | Task | Status |
|---|----------|------|--------|
| 4 | Low | Add `sizes="176px"` to profile `<Image>` in AboutSection | Done |
| 6 | Low | Add `prefers-reduced-motion` media query for marquee and hero animations | Done |
| 7 | Low | Fix skip-link target to `#main-content` in layout.tsx | Done |
| 9 | Low | Centralize social link URLs into `src/lib/constants.ts` | Done |
| 10 | Low | Convert Footer to client component for live `getFullYear()` | Done |
| 11 | Low | Delete unused default Next.js SVGs from `public/` | Done |

---

## Phase 4b: OG Image + Accessibility + DRY Social Links (Completed 2026-05-12)

| # | Task | Status |
|---|------|--------|
| 1 | Dynamic Open Graph image via `src/app/opengraph-image.tsx` (1200x630 branded card) | Done |
| 2 | Twitter card metadata (`summary_large_image`) in `layout.tsx` | Done |
| 3 | `prefers-reduced-motion` media query in `globals.css` for all animations | Done |
| 4 | Fix skip-link to `#main-content`, add `id="main-content"` to `<main>` | Done |
| 5 | Add `sizes="176px"` to profile image in AboutSection | Done |
| 6 | Create `src/lib/constants.ts` with centralized `SOCIAL_LINKS` | Done |
| 7 | Update HeroSection, AboutSection, Footer to import from constants | Done |

---

## Phase 5: Add Juice Rush Project (POR-1) — Completed 2026-05-12

Add the Juice Rush gamified PWA as the fourth portfolio entry. Source: Jira ticket POR-1.

| # | Task | Status |
|---|------|--------|
| 1 | Capture screenshot from live Juice Rush app for project media | Done |
| 2 | Add Juice Rush entry to PROJECTS array in `page.tsx` with full STAR-T data | Done |
| 3 | Set up Vitest + React Testing Library test infrastructure | Done |
| 4 | Write unit tests for ProjectCard rendering with Juice Rush data | Done |
| 5 | Run `npm run test` — 8/8 tests pass | Done |
| 6 | Visual verification via Playwright on local dev server | Done |

---

## Phase 6: Performance Optimization (Completed 2026-05-12)

Diagnosed slow initial page load caused by 23.8 MB of uncompressed video with no browser caching.

| # | Task | Status | Commit |
|---|------|--------|--------|
| 1 | Add `Cache-Control: public, max-age=1yr, immutable` headers for `/videos/*` and `/images/*` in `next.config.ts` | Done | `5fbbd60` |
| 2 | Generate lightweight poster JPGs (~53 KB each) from video first frames | Done | `5fbbd60` |
| 3 | Add `posterSrc` prop to `ProjectCard` — show `<Image>` before IntersectionObserver fires, `poster` attr on `<video>` | Done | `5fbbd60` |
| 4 | Add `posterSrc` entries to PROJECTS array for both video projects | Done | `5fbbd60` |
| 5 | Compress videos with ffmpeg (target ~2-4 MB each) | Pending | — |

---

## Phase 7: Performance Diagnostics & Optimization (POR-2) — Awaiting Review

Formal performance audit per Jira ticket POR-2. Run Lighthouse diagnostics, identify remaining bottlenecks, implement optimizations, and verify measurable improvement on desktop and mobile.

**Bottlenecks identified:**
- Duplicate poster downloads: poster JPGs loaded twice per video card (once via Next.js `<Image>` at ~4.7 KB, again as raw `<video poster=...>` at ~53 KB each = 106 KB wasted)
- Large uncompressed videos: 6.7 MB + 17.1 MB (addressed in Phase 6, requires ffmpeg for compression)

**Optimization implemented:**
- Refactored `ProjectCard.tsx` video rendering: removed `poster` attr from `<video>`, keep Next.js `<Image>` overlay visible until `onPlaying` fires, eliminating duplicate poster downloads

**Post-optimization results (production build):**
- Desktop (1440x900): FCP 60ms, DOM Interactive 24ms, Load Complete 44ms
- Mobile (375x812): DOM Interactive 37ms, Load Complete 80ms
- Initial page weight: 672 KB decoded (JS 530 KB + CSS 40 KB + Fonts 79 KB + profile image 6 KB)
- No videos or poster images loaded until user scrolls to project cards
- Poster images loaded only once via Next.js optimization (4.7 KB + 4.8 KB vs previous 4.7+53 + 4.8+52 KB)

| # | Task | Status |
|---|------|--------|
| 1 | Run performance audit (desktop) — baseline metrics | Done |
| 2 | Run performance audit (mobile) — baseline metrics | Done |
| 3 | Identify and document key bottlenecks from audit results | Done |
| 4 | Fix duplicate poster loading — remove `poster` attr, use `onPlaying` crossfade | Done |
| 5 | Post-optimization audits — FCP/TTI well under 2-3s target on both viewports | Done |
| 6 | Run `npm run test` — 8/8 tests pass | Done |
| 7 | Visual verification via Playwright on desktop (1440x900) and mobile (375x812) | Done |

---

## Architecture Notes

- **Component model:** Client components (`"use client"`) only where needed: `Navbar`, `ProjectCard`, `RevealOnScroll`, `ScrollToTop`. Everything else is a Server Component.
- **Project data:** `PROJECTS` array in `page.tsx`. To add a project, add an entry there.
- **Design tokens:** All colors use `brand-*` tokens defined in `globals.css` `@theme inline` block. No hardcoded hex values.
- **Icons:** Shared icon components live in `src/components/icons/index.tsx` (GitHubIcon, LinkedInIcon, MailIcon, etc.).
