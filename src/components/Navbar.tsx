"use client";

import { useEffect, useState } from "react";
import { navItems, site } from "@/data/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`pointer-events-none fixed inset-x-0 top-0 z-40 transition-colors ${
        scrolled || open ? "nav-blur" : "bg-transparent"
      }`}
    >
      <div className="pointer-events-auto mx-auto flex max-w-6xl items-center justify-between px-5 py-4 text-white md:px-8">
        <a href="#home" className="flex items-baseline gap-2 tracking-wide">
          <span className="serif text-lg text-white">{site.name}</span>
          <span className="font-mono text-[11px] text-[var(--accent)]">
            {site.version.toLowerCase()}
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-[var(--muted)] md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <button
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="打开菜单"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-px w-5 bg-white transition ${open ? "translate-y-1 rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-5 bg-white transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
        </button>
      </div>
      {open ? (
        <div className="pointer-events-auto grid gap-4 px-6 pb-6 text-sm md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-2 text-[var(--muted)]"
            >
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
