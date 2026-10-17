import { awards } from "@/data/content";

export function Awards() {
  return (
    <section id="awards" className="relative z-10 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="reveal font-mono text-xs tracking-[0.24em] text-[var(--accent)]">AWARDS</p>
        <h2 className="reveal serif mt-3 text-3xl md:text-4xl">荣誉与经历</h2>
        <ol className="mt-10 space-y-0">
          {awards.map((item) => (
            <li
              key={item.title}
              className="reveal grid gap-2 border-t border-white/10 py-6 md:grid-cols-[140px_1fr]"
            >
              <p className="font-mono text-sm text-[var(--accent)]">{item.date}</p>
              <div>
                <h3>
                  {item.title}
                  <span className="ml-2 text-sm text-white/40">{item.org}</span>
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
