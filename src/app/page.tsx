import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechMarquee from "@/components/TechMarquee";
import ProjectCard from "@/components/ProjectCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import Footer from "@/components/Footer";

/* ─── Real project data ─── */
const PROJECTS = [
  {
    videoSrc: "/videos/project-one-demo.mp4",
    title: "Data Diagnostic Dashboard",
    impactHook:
      "Automated manual data preprocessing workflows, reducing initial dataset profiling and cleaning time from hours to seconds.",
    situation:
      "Data professionals and business stakeholders typically spend up to 80% of their time manually profiling, cleaning, and formatting raw CSV/Excel files before any actual analysis can take place.",
    task: "I needed to architect a scalable, self-serve application that would automate the data health-check process, highlight anomalies, and execute standard ETL transformations without requiring the user to write any code.",
    action:
      "I engineered a full-stack web application using Python and Streamlit. I utilized Pandas to build an automated ETL pipeline that handles missing values, drops duplicates, and standardizes data types. For outlier detection, I implemented the statistical IQR method and visualized the anomalies interactively using Plotly and Altair. Finally, I containerized the application with Docker, integrated Supabase for backend telemetry logging, and deployed it to the cloud via Render.",
    result:
      "Delivered a production-ready, cloud-hosted tool supported by a 45-test Pytest suite (TDD). The app successfully enables non-technical users to upload raw data, instantly visualize statistical outliers, and download a fully cleaned dataset alongside a transparent ETL audit report, eliminating manual preprocessing bottlenecks.",
    techStack: [
      "Python",
      "Streamlit",
      "Pandas",
      "Docker",
      "Supabase",
      "PostgreSQL",
      "Plotly",
      "Git/CI-CD",
    ],
    liveUrl: "https://data-diagnostic-portfolio.onrender.com/",
  },
  {
    videoSrc: "/videos/project-two-demo.mp4",
    title: "MotionMatchAI",
    impactHook:
      "Imagine a fitness application that doesn\u2019t just record your workout, but actively watches your biomechanics, proactively coaches you through sticking points, and connects you with friends for live, synchronized training sessions. MotionMatchAI bridges the gap between expensive personal trainers and solo home workouts by combining real-time edge AI computer vision with a highly scalable, serverless multiplayer cloud architecture.",
    situation:
      "Working out alone at home often leads to poor exercise form, high injury risk, and low motivation. Users typically lack the real-time feedback required to correct biomechanical mistakes during a lift, and standard fitness apps isolate their data rather than using it to create engaging, communal experiences.",
    task: "The objective was to architect and build a premium, full-stack AI fitness platform featuring real-time skeletal tracking, proactive voice coaching, dynamic UI/UX themes, comprehensive post-workout analytics, and a low-latency \u201CWorkout Buddy\u201D multiplayer system to sync rep counts live between remote users.",
    action:
      "Using an advanced Agentic IDE (Kiro/Roo Code) powered by Anthropic\u2019s Claude 3.5 Sonnet, we rapidly prototyped a React/Vite frontend integrated with Google\u2019s MediaPipe for edge-based pose detection. We implemented an autonomous QA testing loop using the Model Context Protocol (MCP) and Puppeteer, allowing the AI to physically render and debug the DOM, ensuring high-contrast UI theming and fixing rendering bugs. For the backend, we engineered a scalable, serverless WebSocket architecture using AWS CDK to deploy API Gateway, AWS Lambda routing functions, and Amazon DynamoDB for real-time session management.",
    result:
      "Successfully transitioned from a local, single-player prototype to a robust, cloud-connected application. The platform now features intelligent proactive coaching (syncing visual warnings with TTS audio) and a highly cost-effective (~$0.57/month) real-time multiplayer backend ready for the AWS 10,000 AIdeas Competition.",
    techStack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "MediaPipe",
      "Web Speech API",
      "Kiro IDE",
      "Claude 3.5 Sonnet",
      "MCP",
      "Puppeteer",
      "AWS CDK",
      "API Gateway",
      "AWS Lambda",
      "DynamoDB",
      "IAM",
    ],
    liveUrl:
      "https://builder.aws.com/content/39lHNWFs6RCW1y2iiSQmKdDXYrI/aideas-motionmatch-ai",
    ctaLabel: "Read Case Study",
    badge: "Top 3% AWS 10,000 AIdeas Competition",
  },
  {
    imageSrc: "/videos/project-three-image.png",
    title: "Amazon Sales Dashboard",
    impactHook:
      "Uncovered $978K in hidden operational costs and identified $100K\u2013$150K in wasted discount margin across Amazon\u2019s global marketplace through end-to-end SQL analytics and a 5-dashboard Tableau suite.",
    situation:
      "An Amazon global e-commerce marketplace generates over $9.25M in cross-border revenue across 14 countries, yet hidden inefficiencies in logistics, payment processing, pricing, and inventory are silently eroding profitability. With 50,000+ transactions spanning multiple currencies, fulfillment methods (FBA/FBM), and shipping channels, leadership had no unified view of where the business was leaking value.",
    task: "Build an end-to-end analytics pipeline\u2014from raw data cleaning to executive dashboards\u2014that could systematically quantify margin erosion, identify the root causes, and produce a prioritized action plan with dollar-denominated recommendations.",
    action:
      "Cleaned and engineered the 50K-row, 53-column dataset in Excel\u2014handling nulls in FX rates, standardizing dates to ISO format, and creating calculated fields. Wrote 15+ advanced SQL queries in PostgreSQL using CTEs, window functions (LAG, RANK, NTILE), and CASE-based segmentation. Designed 5 interactive Tableau dashboards\u2014Logistics Command Center, Profitability & Margin Erosion, Revenue Optimization, Customer Behavior & Loyalty, and Product & Inventory Strategy\u2014featuring KPI cards, heatmaps, Pareto charts, scatter quadrants, waterfall charts, and geographic treemaps. Built a responsive portfolio website (HTML/CSS/JS) with glassmorphism design and embedded interactive Tableau dashboards.",
    result:
      "Identified $978K in recoverable hidden costs ($346K shipping, $233K payment fees, $399K refunds). Proved the 5\u201310% discount tier is wasted spend ($100K\u2013$150K annually). Discovered UPI & NetBanking payment methods lose money (203.7% and 152.4% cost-to-revenue ratios). Revealed Expedited FBM shipping fails 19% of the time in the US. Found 74.7% of SKUs are \u201CBleeders\u201D (high volume, low profit). Quantified the European margin advantage (21\u201324%) at 2.6\u00D7 the value of US revenue.",
    techStack: [
      "Microsoft Excel",
      "PostgreSQL",
      "SQL (CTEs, Window Fns)",
      "Tableau Public",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    liveUrl:
      "https://johari-frias.github.io/Amazon-Global-Sales-Analytics/",
    ctaLabel: "View Dashboard",
  },
  {
    imageSrc: "/videos/project-four-image.png",
    title: "Juice Rush",
    impactHook:
      "Gamified PWA that trains juice bar employees to recall 38+ recipes under pressure — turning weeks of memorization into days of play.",
    situation:
      "Juice Generation new hires must memorize 38+ smoothie, bowl, and juice recipes (5-9 ingredients each) before working the morning rush. Traditional paper-based training was slow, error-prone, and gave managers no visibility into who was ready.",
    task: "Build a mobile-first training app that drills recipe recall under timed pressure, tracks individual mastery, and lets managers monitor progress — all usable offline on personal phones.",
    action:
      "Built a React 18 PWA with a 15-second timed ingredient-selection game at its core. Added progressive difficulty (3x3 to 4x4 grids based on streak), spaced repetition weighting weak recipes, and an RPG leveling system (EXP, rank titles, gated categories) to drive daily engagement. Implemented 6 training modes (Rush, Normal, Zen, Reverse, Shift Simulation, Category Sorter) for varied practice. Integrated Supabase for auth and cloud sync, then built a live leaderboard with multi-metric RPC queries so managers can track top performers. Polished for mobile with sub-frame input lag, haptic feedback, Web Audio chimes, and streak confetti.",
    result:
      "38 recipes across 6 categories fully drillable. Leaderboard provides real-time manager visibility. PWA installs to home screen and works offline. Arcade-style feedback loop (speed grades, flow state effects, badge unlocks) designed to replace passive study with active recall practice.",
    techStack: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "Lucide React",
      "Web Audio API",
      "canvas-confetti",
      "vite-plugin-pwa",
    ],
    liveUrl: "https://juice-training.vercel.app/",
  },
];

export default function Home() {
  return (
    <main id="main-content" className="flex flex-col">
      <HeroSection />

      <RevealOnScroll>
        <AboutSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <div id="skills">
          <TechMarquee />
        </div>
      </RevealOnScroll>

      {/* ─── Projects Section ─── */}
      <section
        id="projects"
        className="mx-auto w-full max-w-6xl px-6 py-24"
      >
        <RevealOnScroll>
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Featured{" "}
            <span className="text-brand-accent">Projects</span>
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-brand-muted">
            Production-grade systems with measurable business impact — each
            broken down using the STAR-T methodology.
          </p>
        </RevealOnScroll>

        <div className="grid gap-10 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <RevealOnScroll key={project.title} delay={i * 150}>
              <ProjectCard {...project} />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <RevealOnScroll>
        <Footer />
      </RevealOnScroll>
    </main>
  );
}
