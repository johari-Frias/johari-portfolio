import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProjectCard from "@/components/ProjectCard";

vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    const { fill, priority, ...rest } = props;
    return <img {...rest} />;
  },
}));

const juiceRush = {
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
};

describe("ProjectCard — Juice Rush", () => {
  it("renders the project title", () => {
    render(<ProjectCard {...juiceRush} />);
    expect(screen.getByText("Juice Rush")).toBeInTheDocument();
  });

  it("renders the impact hook", () => {
    render(<ProjectCard {...juiceRush} />);
    expect(screen.getByText(juiceRush.impactHook)).toBeInTheDocument();
  });

  it("renders the project image with correct src", () => {
    render(<ProjectCard {...juiceRush} />);
    const img = screen.getByAltText("Juice Rush");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/videos/project-four-image.png");
  });

  it("renders all tech stack chips", () => {
    render(<ProjectCard {...juiceRush} />);
    for (const tech of juiceRush.techStack) {
      expect(screen.getByText(tech)).toBeInTheDocument();
    }
  });

  it("renders the live URL link with default CTA label", () => {
    render(<ProjectCard {...juiceRush} />);
    const link = screen.getByRole("link", { name: /launch live app/i });
    expect(link).toHaveAttribute("href", "https://juice-training.vercel.app/");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("shows Situation tab content by default", () => {
    render(<ProjectCard {...juiceRush} />);
    expect(screen.getByText(juiceRush.situation)).toBeInTheDocument();
  });

  it("switches to Action tab on click", () => {
    render(<ProjectCard {...juiceRush} />);
    fireEvent.click(screen.getByRole("tab", { name: /action/i }));
    expect(screen.getByText(juiceRush.action)).toBeInTheDocument();
  });

  it("cycles through all STAR-T tabs", () => {
    render(<ProjectCard {...juiceRush} />);
    const tabs = ["Situation", "Task", "Action", "Result"] as const;
    const content = {
      Situation: juiceRush.situation,
      Task: juiceRush.task,
      Action: juiceRush.action,
      Result: juiceRush.result,
    };

    for (const tab of tabs) {
      fireEvent.click(screen.getByRole("tab", { name: tab }));
      expect(screen.getByText(content[tab])).toBeInTheDocument();
    }
  });
});
