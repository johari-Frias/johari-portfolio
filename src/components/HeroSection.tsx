import { ArrowRightIcon, ExternalLinkIcon, ChevronDownIcon } from "@/components/icons";

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
        <div className="hero-orb hero-orb--primary" />
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
          <ArrowRightIcon />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/johari-Frias"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-brand-accent/40 px-7 py-3 text-sm font-semibold text-brand-accent transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent/10 hover:scale-105"
        >
          GitHub
          <ExternalLinkIcon />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/johari-f-37baa5210"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-brand-accent/40 px-7 py-3 text-sm font-semibold text-brand-accent transition-all duration-300 hover:border-brand-accent hover:bg-brand-accent/10 hover:scale-105"
        >
          LinkedIn
          <ExternalLinkIcon />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-in-up animation-delay-800 absolute bottom-10 flex flex-col items-center gap-2 text-brand-muted">
        <span className="text-xs uppercase tracking-widest">Explore</span>
        <ChevronDownIcon className="h-5 w-5 animate-bounce" />
      </div>
    </section>
  );
}
