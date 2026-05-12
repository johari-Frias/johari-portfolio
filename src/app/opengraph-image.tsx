import { ImageResponse } from "next/og";

export const alt = "Portfolio — AI Systems Architect & Data Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a0a 0%, #18181b 50%, #0a0a0a 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "24px",
            fontSize: "16px",
            color: "#3b82f6",
            fontWeight: 600,
          }}
        >
          Top 3% — AWS 10,000 AIdeas Competition
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#fafafa",
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            marginBottom: "8px",
            display: "flex",
          }}
        >
          AI Systems Architect
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.04em",
            marginBottom: "32px",
            background: "linear-gradient(90deg, #3b82f6, #06b6d4, #14b8a6)",
            backgroundClip: "text",
            color: "transparent",
            display: "flex",
          }}
        >
          & Data Engineer
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "22px",
            color: "#a1a1aa",
            lineHeight: 1.5,
            maxWidth: "700px",
            display: "flex",
          }}
        >
          Serverless GenAI applications, event-driven Agentic AI systems, and Python ETL pipelines that scale from the edge to the database.
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, #3b82f6, #06b6d4, #14b8a6, #3b82f6)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
