"use client";

import { useEffect, useRef, useState } from "react";
import { HamburgerIcon, CloseIcon } from "@/components/icons";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#footer" },
] as const;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
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

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 60);
      setVisible(currentY < lastScrollY.current || currentY < 100);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id: string) =>
    `relative text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
      activeSection === id
        ? "text-brand-accent"
        : "text-brand-muted hover:text-brand-text"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled || mobileOpen
          ? "border-b border-brand-border/60 bg-brand-bg/70 backdrop-blur-md shadow-[0_1px_12px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <a
          href="#"
          className="text-sm font-bold tracking-tight text-brand-text transition-colors hover:text-brand-accent"
        >
          JF<span className="text-brand-accent">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 sm:flex">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            return (
              <a key={id} href={href} className={linkClass(id)}>
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

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-brand-muted transition-colors hover:text-brand-accent sm:hidden cursor-pointer"
        >
          {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 sm:hidden ${
          mobileOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 border-t border-brand-border/40 bg-brand-bg/90 px-6 py-4 backdrop-blur-md">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            return (
              <a
                key={id}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-semibold uppercase tracking-widest transition-colors duration-200 ${
                  activeSection === id
                    ? "bg-brand-accent/10 text-brand-accent"
                    : "text-brand-muted hover:bg-brand-surface hover:text-brand-text"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
