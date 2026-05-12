import Image from "next/image";
import { LinkedInIcon, GitHubIcon, MailIcon } from "@/components/icons";

/* ─── Categorized Skill Grid ─── */
const SKILL_CATEGORIES = [
  {
    label: "Cloud & Infrastructure",
    color: "from-blue-400 to-cyan-400",
    dotColor: "bg-blue-400",
    skills: [
      "AWS Lambda",
      "AWS Bedrock",
      "AWS CDK",
      "API Gateway",
      "DynamoDB",
      "Snowflake",
    ],
  },
  {
    label: "AI / ML & Agents",
    color: "from-violet-400 to-fuchsia-400",
    dotColor: "bg-violet-400",
    skills: [
      "Agentic AI",
      "LLMs",
      "RAG",
      "MediaPipe",
      "Claude",
    ],
  },
  {
    label: "Data Engineering",
    color: "from-teal-400 to-emerald-400",
    dotColor: "bg-teal-400",
    skills: [
      "Python",
      "ETL Pipelines",
      "SQL",
      "PostgreSQL",
      "Pandas",
      "Databricks",
      "Streamlit",
    ],
  },
  {
    label: "Full-Stack & DevOps",
    color: "from-amber-400 to-orange-400",
    dotColor: "bg-amber-400",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Docker",
      "WebAssembly (WASM)",
      "Git / CI-CD",
    ],
  },
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

      <div className="mx-auto w-full max-w-6xl px-6">
        {/* ─── Top Row: Photo + Bio ─── */}
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
          {/* ── Photo Column ── */}
          <div className="flex shrink-0 flex-col items-center gap-5">
            {/* Circular headshot with glow ring */}
            <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-brand-accent/30 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <Image
                src="/images/profile-pic.jpg"
                alt="Johari Frias — AI Systems Architect & Data Engineer"
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
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/johari-Frias"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-border bg-brand-surface/60 text-brand-muted transition-all duration-300 hover:border-brand-accent/50 hover:text-brand-accent hover:scale-110"
              >
                <GitHubIcon />
              </a>
              <a
                href="mailto:johari19@outlook.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-border bg-brand-surface/60 text-brand-muted transition-all duration-300 hover:border-brand-accent/50 hover:text-brand-accent hover:scale-110"
              >
                <MailIcon />
              </a>
            </div>
          </div>

          {/* ── Bio Column ── */}
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
                AI Systems Architect · Data Engineer · Incoming MS in AI
              </p>
            </div>

            <p className="text-sm leading-relaxed text-brand-muted">
              I am an AI Systems Architect specializing in building scalable,
              serverless GenAI applications and robust Python data pipelines.
              Moving beyond traditional data analysis, I engineer event-driven
              Agentic AI systems and end-to-end cloud solutions that drive
              measurable business outcomes. Recently recognized as a{" "}
              <span className="font-semibold text-brand-text">
                Top 3% Global Finalist
              </span>{" "}
              in the AWS 10,000 AIdeas Competition, I architected a hybrid
              edge-cloud fitness platform using AWS Bedrock and deployed
              WebAssembly-optimized models for sub-30ms real-time biomechanical
              tracking.
            </p>

            <p className="text-sm leading-relaxed text-brand-muted">
              Currently pursuing my{" "}
              <span className="font-semibold text-brand-text">
                MS in Artificial Intelligence
              </span>{" "}
              at the University of Colorado Boulder, my focus is on leveraging
              LLMs and advanced cloud architectures to solve complex technical
              bottlenecks.
            </p>
          </div>
        </div>

        {/* ─── Glowing Connector Line ─── */}
        <div className="my-14 flex items-center justify-center" aria-hidden>
          <div className="about-connector-line h-px w-full max-w-3xl" />
        </div>

        {/* ─── Categorized Skill Grid ─── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.label}
              className="group rounded-xl border border-brand-border/60 bg-brand-surface/40 p-5 backdrop-blur-sm transition-all duration-300 hover:border-brand-accent/30 hover:bg-brand-surface/60"
            >
              {/* Category header */}
              <div className="mb-4 flex items-center gap-2">
                <span
                  className={`inline-block h-2 w-2 rounded-full ${category.dotColor} animate-pulse`}
                  aria-hidden
                />
                <span
                  className={`bg-gradient-to-r ${category.color} bg-clip-text text-xs font-semibold uppercase tracking-wider text-transparent`}
                >
                  {category.label}
                </span>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-brand-accent/8 px-2.5 py-1 font-mono text-xs font-medium text-brand-muted transition-colors duration-200 group-hover:text-brand-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
