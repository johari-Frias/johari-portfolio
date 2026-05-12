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

## Phase 4: Remaining Code Review Items (Open)

Lower-severity items from the code review that are still pending.

| # | Severity | Task | Status |
|---|----------|------|--------|
| 4 | Low | Add `sizes="176px"` to profile `<Image>` in AboutSection | Done |
| 6 | Low | Add `prefers-reduced-motion` media query for marquee and hero animations | Done |
| 7 | Low | Fix skip-link target to `#main-content` in layout.tsx | Done |
| 9 | Low | Centralize social link URLs into `src/lib/constants.ts` | Done |
| 10 | Low | Address `new Date().getFullYear()` build-time freeze in Footer (or convert to client component) | Open |
| 11 | Low | Delete unused default Next.js SVGs from `public/` | Open |

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

## Phase 5: Add Juice Rush Project (POR-1) — Awaiting Review

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

## Architecture Notes

- **Component model:** Client components (`"use client"`) only where needed: `Navbar`, `ProjectCard`, `RevealOnScroll`, `ScrollToTop`. Everything else is a Server Component.
- **Project data:** `PROJECTS` array in `page.tsx`. To add a project, add an entry there.
- **Design tokens:** All colors use `brand-*` tokens defined in `globals.css` `@theme inline` block. No hardcoded hex values.
- **Icons:** Shared icon components live in `src/components/icons/index.tsx` (GitHubIcon, LinkedInIcon, MailIcon, etc.).
