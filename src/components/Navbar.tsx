"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#footer" },
] as const;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    /* ── Active-section tracking via IntersectionObserver ── */
    const observers: IntersectionObserver[] = [];

    NAV_LINKS.forEach(({ href }) => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    /* ── Hide on scroll-down, show on scroll-up ── */
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 60);
      setVisible(currentY < lastScrollY || currentY < 100);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "border-b border-brand-border/60 bg-brand-bg/70 backdrop-blur-md shadow-[0_1px_12px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        {/* Logo / Name */}
        <a
          href="#"
          className="text-sm font-bold tracking-tight text-brand-text transition-colors hover:text-brand-accent"
        >
          JF<span className="text-brand-accent">.</span>
        </a>

        {/* Links */}
        <div className="flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            return (
              <a
                key={id}
                href={href}
                className={`relative text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
                  activeSection === id
                    ? "text-brand-accent"
                    : "text-brand-muted hover:text-brand-text"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 inset-x-0 h-px rounded-full bg-brand-accent transition-all duration-300 ${
                    activeSection === id
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
