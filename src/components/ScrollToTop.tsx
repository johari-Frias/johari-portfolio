"use client";

import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@/components/icons";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollUp}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-brand-accent/30 bg-brand-surface/80 backdrop-blur-md text-brand-accent shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 hover:bg-brand-accent hover:text-white hover:scale-110 cursor-pointer ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ChevronUpIcon />
    </button>
  );
}
