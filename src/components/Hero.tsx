"use client";

import { site } from "@/data/content";
import { HeroMedia } from "@/components/HeroMedia";

export function Hero() {
  return (
    <section id="home" className="relative z-10 px-5 pb-16 pt-28 md:px-8 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="hero-panel relative isolate overflow-hidden rounded-2xl">
          <HeroMedia />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#05070a]/72 via-[#05070a]/28 to-transparent" />
          <div className="hero-copy relative z-10 flex min-h-[72vh] max-w-2xl flex-col justify-center p-6 md:min-h-[640px] md:p-10">
            <p className="hero-line font-mono text-xs tracking-[0.22em] text-[var(--accent)]">
              {site.version} · {site.role}
            </p>
            <h1 className="hero-line serif mt-5 text-6xl leading-none text-white md:text-8xl">
              {site.name}
            </h1>
            <p className="hero-line serif mt-2 text-2xl italic text-white/80 md:text-3xl">
              {site.nameEn}
            </p>
            <p className="hero-line mt-8 max-w-xl text-lg text-white">{site.taglineEn}</p>
            <p className="hero-line mt-2 max-w-xl text-white/80">{site.taglineZh}</p>
            <p className="hero-line mt-8 max-w-xl text-sm leading-7 text-white/90">
              {site.manifesto}
            </p>
            <div className="hero-line mt-10 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[#04221d]"
              >
                查看作品
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/30 bg-black/20 px-5 py-2.5 text-sm text-white"
              >
                联系合作
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
