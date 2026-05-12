# Code Review — Projects Landing Page

**Reviewed:** 2026-05-12
**Stack:** Next.js 16.2.1 / React 19 / Tailwind CSS v4 / TypeScript 5
**Build status:** ESLint clean, tsc clean, production build passes

---

## Summary

Solid single-page portfolio with clean component boundaries, good accessibility foundations, and a consistent design-token system. The issues below are ordered by severity — bugs first, then performance, then improvements.

---

## Bugs

### 1. Navbar scroll handler uses stale closure (high)

**File:** `src/components/Navbar.tsx:38-49`

The `useEffect` has **no dependency array**, so it runs on every render. Worse, the scroll handler captures `lastScrollY` from the render closure, but `setLastScrollY` updates it asynchronously — creating a stale-closure race where the navbar flickers or hides unexpectedly during fast scrolling.

**Action:** Add a dependency array and use a ref for `lastScrollY` instead of state:

```tsx
useEffect(() => {
  const lastY = { current: window.scrollY };

  const handleScroll = () => {
    const currentY = window.scrollY;
    setScrolled(currentY > 60);
    setVisible(currentY < lastY.current || currentY < 100);
    lastY.current = currentY;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []); // run once
```

The IntersectionObserver setup in the same effect also re-registers on every render. Split it into its own `useEffect(() => { ... }, [])`.

### 2. Hero "GitHub / LinkedIn" link points to `https://github.com` (medium)

**File:** `src/components/HeroSection.tsx:83`

The secondary CTA says "GitHub / LinkedIn" but the `href` is a bare `https://github.com` — it doesn't point to either the user's GitHub or LinkedIn profile.

**Action:** Either link to the actual GitHub profile (`https://github.com/johari-Frias`) or split into two separate links. The AboutSection and Footer already have the correct URLs to reference.

---

## Performance

### 3. Three auto-playing videos load on initial paint (medium)

**File:** `src/app/page.tsx` (PROJECTS array) + `src/components/ProjectCard.tsx:61-67`

All project cards mount `<video autoPlay>` simultaneously. On a cold load this means 3 video files start downloading in parallel, competing with fonts and the LCP image (profile photo).

**Action:** Use Intersection Observer to lazy-load videos — only set `src` when the card scrolls into (or near) the viewport. Alternatively, add `loading="lazy"` and `preload="none"` attributes as a simpler first step:

```tsx
<video
  src={videoSrc}
  autoPlay
  loop
  muted
  playsInline
  preload="none"
  className="..."
/>
```

### 4. Profile image is `priority` but uses fixed `width={176}` without `sizes` (low)

**File:** `src/components/AboutSection.tsx:86-88`

The `<Image>` tag has `priority` (correct — it's likely LCP), but the container is `h-44 w-44` (176px) and the image has `className="h-full w-full object-cover"` with no `sizes` prop. Next.js will generate a default `sizes="100vw"`, causing the browser to download a much larger variant than needed.

**Action:** Add `sizes="176px"` to match the actual display size.

---

## Accessibility

### 5. Navbar has no mobile hamburger menu (high)

**File:** `src/components/Navbar.tsx:73-97`

The nav links are rendered in a horizontal `flex` row with no responsive collapse. On narrow viewports (< ~400px), the links either overflow or get clipped. There is no hamburger/drawer toggle.

**Action:** Add a mobile menu. At minimum, hide the link row below `sm:` and show a hamburger button that toggles a slide-down or sheet-style menu.

### 6. TechMarquee animation has no `prefers-reduced-motion` respect (low)

**File:** `src/app/globals.css:44-55` + `src/components/TechMarquee.tsx`

The infinite marquee animation runs unconditionally. Users with `prefers-reduced-motion: reduce` should see a static layout instead.

**Action:** Add a media query to pause or disable the animation:

```css
@media (prefers-reduced-motion: reduce) {
  .animate-marquee {
    animation: none;
  }
}
```

Consider applying the same to `.hero-orb`, `.hero-particle`, and `.animate-fade-in-up`.

### 7. Missing skip-link target mismatch (low)

**File:** `src/app/layout.tsx:46`

The skip link targets `#projects`, which skips over the Hero and About sections. A skip link should jump to the main content area.

**Action:** Change the `href` to `#about` or wrap `{children}` in a `<main id="main-content">` and link to that instead.

---

## Code Quality

### 8. SVG icons are inlined everywhere — extract to shared components (medium)

**Files:** `HeroSection.tsx`, `AboutSection.tsx`, `Footer.tsx`, `ProjectCard.tsx`, `ScrollToTop.tsx`

The same GitHub, LinkedIn, Email, and arrow SVGs are copy-pasted across 4+ files. This makes icon updates error-prone (the GitHub path already differs slightly between `AboutSection` and `Footer` — `.387` vs `.385` and `.694` vs no suffix on the last line).

**Action:** Create an `src/components/icons/` directory with named icon components (e.g., `GitHubIcon`, `LinkedInIcon`, `ArrowRight`, `ExternalLink`, `ChevronUp`, `ChevronDown`, `MailIcon`). Import them where needed.

### 9. Duplicated link URLs should be centralized (low)

**Files:** `AboutSection.tsx`, `Footer.tsx`, `HeroSection.tsx`

GitHub, LinkedIn, and email URLs appear in 3 separate files. If a URL changes, all three must be updated.

**Action:** Define a `SOCIAL_LINKS` constant in a shared location (e.g., `src/lib/constants.ts`) and import it in each component.

### 10. `new Date().getFullYear()` makes Footer a de-facto client component (low)

**File:** `src/components/Footer.tsx:80`

`Footer` is a Server Component, but it uses `new Date().getFullYear()`. This is evaluated at build time for static pages, meaning the copyright year will be frozen until the next rebuild. This is likely fine for a portfolio deployed periodically, but worth being aware of. If you want it always-current, mark it `"use client"`.

---

## Unused Assets

### 11. Default Next.js SVGs are still in `public/` (low)

**Files:** `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`

These are the scaffolding assets from `create-next-app` and are not referenced anywhere in the codebase.

**Action:** Delete them to keep the public directory clean.

---

## Security

### 12. All external links correctly use `rel="noopener noreferrer"` (pass)

Checked all `target="_blank"` links — they all include `rel="noopener noreferrer"`.

### 13. No secrets, API keys, or .env files in the repo (pass)

The `.gitignore` correctly excludes `.env*` files. No credentials found in the codebase.

---

## Action Summary

| # | Severity | File(s) | Action | Status |
|---|----------|---------|--------|--------|
| 1 | High | `Navbar.tsx` | Fix stale closure in scroll handler; add dependency arrays to useEffects | FIXED |
| 2 | Medium | `HeroSection.tsx` | Fix broken GitHub/LinkedIn CTA href | FIXED |
| 3 | Medium | `ProjectCard.tsx` | Lazy-load videos or add `preload="none"` | FIXED |
| 4 | Low | `AboutSection.tsx` | Add `sizes="176px"` to profile Image | Open |
| 5 | High | `Navbar.tsx` | Add mobile-responsive hamburger menu | FIXED |
| 6 | Low | `globals.css` | Add `prefers-reduced-motion` media query for animations | Open |
| 7 | Low | `layout.tsx` | Fix skip-link target to `#main-content` or `#about` | Open |
| 8 | Medium | Multiple | Extract duplicated SVG icons into shared components | FIXED |
| 9 | Low | Multiple | Centralize social link URLs into a constants file | Open |
| 10 | Low | `Footer.tsx` | Acknowledge build-time year or convert to client component | Open |
| 11 | Low | `public/` | Delete unused default Next.js SVGs | Open |
