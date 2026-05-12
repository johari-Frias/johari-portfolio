@AGENTS.md

# Projects Landing Page

Personal portfolio site for an AI Systems Architect & Data Engineer. Single-page app showcasing featured projects using the STAR-T methodology (Situation, Task, Action, Result + Tech Stack).

## Tech Stack

- **Framework:** Next.js 16 (App Router) with React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 with `@theme inline` design tokens in `globals.css`
- **Fonts:** Inter (sans) + Roboto Mono (mono), loaded via `next/font/google`
- **Package manager:** npm (uses `package-lock.json`)

## Project Structure

```
src/
  app/
    layout.tsx       # Root layout — fonts, metadata, Navbar, ScrollToTop
    page.tsx         # Home page — assembles all sections, defines PROJECTS array
    globals.css      # Tailwind v4 @theme tokens, custom animations, utilities
  components/
    Navbar.tsx       # Fixed nav with scroll-hide and IntersectionObserver active tracking
    HeroSection.tsx  # Full-screen hero with gradient orbs and particle effects
    AboutSection.tsx # Bio / background section
    TechMarquee.tsx  # Infinite-scroll tech skill badges
    ProjectCard.tsx  # STAR-T tabbed project card with video/image media
    RevealOnScroll.tsx # Scroll-triggered fade-in wrapper
    ScrollToTop.tsx  # Floating back-to-top button
    Footer.tsx       # Contact links / footer
```

## Design System

All custom colors and fonts are defined as Tailwind v4 `@theme` tokens in `globals.css`. Use `brand-*` token names (`brand-bg`, `brand-surface`, `brand-accent`, `brand-text`, `brand-muted`, `brand-border`) — do not hardcode hex values.

Custom CSS utilities (also in `globals.css`): `glow-accent`, `card-shine`, `animate-marquee`, `animate-fade-in-up`, `hero-orb`, `hero-particle`.

## Key Conventions

- All sections are anchor-linked (`#hero`, `#about`, `#skills`, `#projects`, `#footer`) for smooth scrolling.
- Project data lives in the `PROJECTS` array in `page.tsx`. To add a project, add an entry there — the `ProjectCard` component handles rendering.
- `ProjectCard` supports both `videoSrc` (auto-playing MP4) and `imageSrc` (static image via `next/image`).
- Client components (`"use client"`) are used only where needed: `Navbar`, `ProjectCard`, `RevealOnScroll`, `ScrollToTop`.
- `RevealOnScroll` wraps sections for staggered entrance animations.

## Commands

```
npm run dev    # Start dev server (http://localhost:3000)
npm run build  # Production build
npm run lint   # ESLint
```

# Porfolio Project 

All project documentation is in the `planning` directory.

The key document is PLAN.md included in full below

@planning/PLAN.md
