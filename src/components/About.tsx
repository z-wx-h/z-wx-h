import { site } from "@/data/content";

const facets = [
  { en: "Code", zh: "构建逻辑" },
  { en: "Edit", zh: "讲述故事" },
  { en: "MCU", zh: "连接现实" },
  { en: "AI", zh: "拓展想象" },
];

export function About() {
  return (
    <section id="about" className="relative z-10 px-5 py-20 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-stretch">
        <div className="reveal">
          <p className="font-mono text-xs tracking-[0.24em] text-[var(--accent)]">ABOUT</p>
          <div className="about-plate mt-6">
            <div className="about-grid" />
            <div className="about-ring about-ring-a" />
            <div className="about-ring about-ring-b" />
            <div className="relative z-10 flex h-full min-h-[280px] flex-col justify-between p-6 md:min-h-[340px] md:p-7">
              <div className="flex items-start justify-between gap-4">
                <p className="serif text-5xl leading-none text-white/90 md:text-6xl">ZH</p>
                <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--accent)]">
                  {site.version}
                </span>
              </div>
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] text-white/40">
                  {site.nameEn.toUpperCase()}
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
                  {facets.map((item) => (
                    <li key={item.en}>
                      <p className="font-mono text-[10px] tracking-[0.18em] text-[var(--accent)]">
                        {item.en}
                      </p>
                      <p className="mt-1 text-sm text-white/75">{item.zh}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="reveal flex max-w-2xl flex-col justify-center space-y-6">
          <h2 className="serif text-3xl break-keep md:text-4xl">多领域之间，把想法做成作品。</h2>
          <p className="leading-8 text-[var(--muted)]">{site.about}</p>
          <p className="font-mono text-sm text-white/50">站点版本 {site.version}</p>
        </div>
      </div>
    </section>
  );
}
