const TECH_ITEMS = [
  "Python",
  "AWS Lambda",
  "AWS Bedrock",
  "TypeScript",
  "React",
  "PostgreSQL",
  "Streamlit",
  "MediaPipe",
  "Databricks",
  "Snowflake",
];

function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-brand-border bg-brand-surface/60 px-5 py-2 text-sm font-medium text-brand-muted backdrop-blur-sm transition-all duration-300 hover:border-brand-accent/50 hover:text-brand-accent hover:scale-105 hover:-translate-y-0.5">
      <span
        className="inline-block h-2 w-2 rounded-full bg-brand-accent animate-pulse"
        aria-hidden
      />
      {label}
    </span>
  );
}

export default function TechMarquee() {
  // Duplicate the list so the second copy fills the gap when the first
  // scrolls off-screen — pure CSS infinite scroll, zero JS runtime.
  const items = [...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <section
      id="tech-stack"
      aria-label="Technology stack"
      className="relative overflow-hidden border-y border-brand-border bg-brand-bg/80 py-6 backdrop-blur-sm"
    >
      {/* Left / right fade masks */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-brand-bg to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-brand-bg to-transparent"
      />

      <div className="animate-marquee flex w-max gap-6">
        {items.map((tech, i) => (
          <TechBadge key={`${tech}-${i}`} label={tech} />
        ))}
      </div>
    </section>
  );
}
