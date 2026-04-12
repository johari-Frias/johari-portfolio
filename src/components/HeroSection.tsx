export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      {/* ── Gradient Orb (Option D) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        {/* Primary orb */}
        <div className="hero-orb hero-orb--primary" />
        {/* Secondary accent orb */}
        <div className="hero-orb hero-orb--secondary" />
      </div>

      {/* Floating particles (pure CSS) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="hero-particle"
            style={{
              left: `${5 + ((i * 47) % 90)}%`,
              animationDelay: `${(i * 0.7) % 8}s`,
              animationDuration: `${6 + (i % 5) * 2}s`,
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              opacity: 0.15 + (i % 4) * 0.08,
            }}
          />
        ))}
      </div>

      {/* AWS Credential Badge */}
      <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent/5 px-5 py-2 text-sm font-medium text-brand-accent backdrop-blur-sm">
        <span className="text-base" aria-hidden>🏆</span>
        Top 3% — AWS 10,000 AIdeas Competition
      </div>

      {/* Heading */}
      <h1 className="animate-fade-in-up animation-delay-200 max-w-4xl text-4xl font-extrabold leading-tight -tracking-[0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
        AI&nbsp;Systems&nbsp;Architect{" "}
        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
          &amp;&nbsp;Data&nbsp;Engineer
        </span>
      </h1>

      {/* Value proposition */}
      <p className="animate-fade-in-up animation-delay-400 mt-6 max-w-2xl text-lg leading-relaxed text-brand-muted sm:text-xl">
        Top 3% AWS Global Finalist. I build serverless GenAI applications,
        event-driven Agentic AI systems, and Python ETL pipelines
        that scale from the edge to the database.
      </p>

      {/* CTAs */}
      <div className="animate-fade-in-up animation-delay-600 mt-10 flex flex-wrap items-center justify-center gap-4">
        {/* Primary CTA */}
        <a
          href="#projects"
          className="glow-accent glow-accent-hover inline-flex items-center gap-2 rounded-lg bg-brand-accent px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-accent-hover hover:scale-105"
        >
          View Architecture Case Studies
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>

        {/* Secondary Ghost CTA */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-brand-accent/40 px-7 py-3 text-sm font-semibold text-brand-accent transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent/10 hover:scale-105"
        >
          GitHub · LinkedIn
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"
            />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in-up animation-delay-800 absolute bottom-10 flex flex-col items-center gap-2 text-brand-muted">
        <span className="text-xs uppercase tracking-widest">Explore</span>
        <svg
          className="h-5 w-5 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
