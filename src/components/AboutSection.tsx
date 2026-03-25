import Image from "next/image";
const SKILLS = [
  "SQL",
  "Excel",
  "Tableau",
  "Python",
  "Statistical Analysis",
  "Data Visualization",
  "Databricks",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-brand-border py-24"
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 30% 50%, rgba(59,130,246,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 px-6 md:flex-row md:items-start md:gap-16">
        {/* ─── Photo Column ─── */}
        <div className="flex shrink-0 flex-col items-center gap-5">
          {/* Circular headshot */}
          <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-brand-accent/30 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            <Image
              src="/images/profile-pic.jpg"
              alt="Johari Frias — Data Analyst & AI Engineer"
              width={176}
              height={176}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Social row */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/johari-f-37baa5210"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-border bg-brand-surface/60 text-brand-muted transition-all duration-300 hover:border-brand-accent/50 hover:text-brand-accent hover:scale-110"
            >
              {/* LinkedIn icon */}
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/johari-Frias"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-border bg-brand-surface/60 text-brand-muted transition-all duration-300 hover:border-brand-accent/50 hover:text-brand-accent hover:scale-110"
            >
              {/* GitHub icon */}
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href="mailto:your.email@example.com"
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-border bg-brand-surface/60 text-brand-muted transition-all duration-300 hover:border-brand-accent/50 hover:text-brand-accent hover:scale-110"
            >
              {/* Email icon */}
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* ─── Bio Column ─── */}
        <div className="flex flex-col gap-5 text-center md:text-left">
          <div>
            <span className="mb-2 inline-block rounded-full bg-brand-accent/10 px-4 py-1 font-mono text-xs font-medium uppercase tracking-widest text-brand-accent">
              About Me
            </span>
            <h2 className="mt-3 text-3xl font-bold -tracking-[0.04em] sm:text-4xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Johari Frias
              </span>
            </h2>
            <p className="mt-1 text-sm font-medium text-brand-muted">
              Data Analyst · AI Engineer · Business Intelligence Enthusiast
            </p>
          </div>

          <p className="text-sm leading-relaxed text-brand-muted">
            I am a Data Analyst with a unique background in modeling complex
            interactive systems and user behavior. With over five years of
            experience analyzing user engagement within digital platforms, I have
            pivoted my focus to applying data-driven insights to the Financial
            and E-commerce sectors. My expertise lies in translating raw data
            into actionable business strategies. Unlike traditional analysts, I
            combine technical proficiency in data visualization with a deep
            understanding of Generative AI, allowing me to not only report on
            what happened but predict what will happen next.
          </p>

          <p className="text-sm leading-relaxed text-brand-muted">
            Each project below represents my analytical approach: start with a
            clear business question, dig into the data until the story emerges,
            and present findings in a way that stakeholders can act on
            immediately.
          </p>

          {/* Skill badges */}
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-brand-accent/10 px-3 py-1 font-mono text-xs font-medium text-brand-accent"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
