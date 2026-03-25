export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      {/* Radial glow backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Heading */}
      <h1 className="animate-fade-in-up max-w-3xl text-4xl font-extrabold leading-tight -tracking-[0.04em] sm:text-5xl md:text-6xl">
        AI&nbsp;Engineer{" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">&amp;&nbsp;Data&nbsp;Analyst</span>
      </h1>

      {/* Value proposition */}
      <p className="animate-fade-in-up animation-delay-200 mt-6 max-w-2xl text-lg leading-relaxed text-brand-muted sm:text-xl">
        Data Analyst and AI Engineer specializing in serverless cloud
        architectures, interactive data diagnostics, and driving product
        monetization through analytics. I build scalable data pipelines,
        AI-augmented workflows, and full-stack web applications that turn
        complex telemetry into actionable product strategies.
      </p>

      {/* CTAs */}
      <div className="animate-fade-in-up animation-delay-400 mt-10 flex flex-wrap items-center justify-center gap-4">
        {/* Primary CTA */}
        <a
          href="#projects"
          className="glow-accent glow-accent-hover inline-flex items-center rounded-lg bg-brand-accent px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-accent-hover hover:scale-105"
        >
          View Projects
        </a>

        {/* Secondary Ghost CTA */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-brand-accent/40 px-7 py-3 text-sm font-semibold text-brand-accent transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent/10 hover:scale-105"
        >
          GitHub / LinkedIn
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
      <div className="animate-fade-in-up animation-delay-600 absolute bottom-10 flex flex-col items-center gap-2 text-brand-muted">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
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
