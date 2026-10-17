import { skillGroups } from "@/data/content";

export function Skills() {
  return (
    <section id="skills" className="relative z-10 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="reveal font-mono text-xs tracking-[0.24em] text-[var(--accent)]">SKILLS</p>
        <h2 className="reveal serif mt-3 text-3xl md:text-4xl">技能专长</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.name} className="reveal">
              <h3 className="mb-3 text-sm text-white/70">{group.name}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="skill-chip rounded-full px-3 py-1.5 text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
