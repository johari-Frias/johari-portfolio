"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ExternalLinkIcon, StarIcon } from "@/components/icons";

export interface ProjectCardProps {
  videoSrc?: string;
  posterSrc?: string;
  imageSrc?: string;
  title: string;
  impactHook: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  techStack: string[];
  liveUrl: string;
  ctaLabel?: string;
  badge?: string;
}

const STAR_TABS = ["Situation", "Task", "Action", "Result"] as const;
type StarTab = (typeof STAR_TABS)[number];

export default function ProjectCard({
  videoSrc,
  posterSrc,
  imageSrc,
  title,
  impactHook,
  situation,
  task,
  action,
  result,
  techStack,
  liveUrl,
  ctaLabel = "Launch Live App",
  badge,
}: ProjectCardProps) {
  const [activeTab, setActiveTab] = useState<StarTab>("Situation");
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    if (!videoSrc || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [videoSrc]);

  const tabContent: Record<StarTab, string> = {
    Situation: situation,
    Task: task,
    Action: action,
    Result: result,
  };

  return (
    <article className="card-shine group relative flex flex-col overflow-hidden rounded-2xl border border-brand-border bg-brand-surface/60 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-500 hover:border-brand-accent/40 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_40px_rgba(59,130,246,0.10)]">
      {/* ─── Media (Video or Image) ─── */}
      <div ref={containerRef} className="relative aspect-video w-full overflow-hidden bg-zinc-900">
        {videoSrc ? (
          videoVisible ? (
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              poster={posterSrc}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : posterSrc ? (
            <Image
              src={posterSrc}
              alt={title}
              width={800}
              height={450}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-brand-muted/40 text-sm">
              Loading...
            </div>
          )
        ) : imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            width={800}
            height={450}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-brand-muted/40 text-sm">
            No preview available
          </div>
        )}
        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-surface/80 via-transparent to-transparent" />
      </div>

      {/* ─── Content ─── */}
      <div className="flex flex-1 flex-col gap-5 p-6">
        {/* Title + Impact hook */}
        <div>
          <h3 className="inline-flex items-center text-xl font-bold leading-snug tracking-tight">
            {title}
            {badge && (
              <span className="ml-3 inline-flex items-center gap-1 translate-y-[-2px] rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-0.5 text-xs font-semibold text-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.15)]">
                <StarIcon />
                {badge}
              </span>
            )}
          </h3>
          <p className="mt-2 text-sm font-medium text-brand-accent">
            {impactHook}
          </p>
        </div>

        {/* ─── STAR-T Tabs ─── */}
        <div>
          {/* Tab buttons */}
          <div className="flex border-b border-brand-border" role="tablist" aria-label="STAR-T project breakdown">
            {STAR_TABS.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={`panel-${tab}`}
                id={`tab-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`relative flex-1 px-3 py-2.5 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 cursor-pointer ${
                  activeTab === tab
                    ? "text-brand-accent"
                    : "text-brand-muted hover:text-brand-text"
                }`}
              >
                {tab}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-brand-accent transition-all duration-300 ${
                    activeTab === tab
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            className="relative min-h-[150px] rounded-b-lg bg-brand-bg/50 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] px-4 py-4 mt-0"
          >
            <p
              key={activeTab}
              className="text-sm leading-relaxed text-brand-muted animate-fade-in-up"
              style={{ animationDuration: "0.3s" }}
            >
              {tabContent[activeTab]}
            </p>
          </div>
        </div>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-brand-accent/10 px-3 py-1 font-mono text-xs font-medium text-brand-accent"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 self-start rounded-lg border border-brand-accent/30 px-5 py-2.5 text-sm font-semibold text-brand-accent transition-all duration-300 hover:bg-brand-accent hover:text-white hover:scale-[1.03]"
        >
          {ctaLabel}
          <ExternalLinkIcon />
        </a>
      </div>
    </article>
  );
}
