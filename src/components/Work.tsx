"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  codeProjects,
  comicProjects,
  mcuProjects,
  videoProjects,
  type WorkItem,
} from "@/data/content";
import { ProjectModal } from "@/components/ProjectModal";

const groups = [
  { key: "video", label: "视频剪辑", items: videoProjects, filters: ["全部", "短片", "混剪", "商业", "实验"] },
  { key: "mcu", label: "单片机", items: mcuProjects, filters: ["全部", "STM32", "Arduino", "ESP32", "其他"] },
  { key: "code", label: "代码项目", items: codeProjects, filters: ["全部", "Web", "工具", "算法", "开源"] },
  { key: "comic", label: "AI 漫剧", items: comicProjects, filters: ["全部", "漫画", "动态漫", "短剧"] },
] as const;

function matchesFilter(item: WorkItem, filter: string) {
  if (filter === "全部") return true;
  return item.type === filter || item.platform === filter || item.tags.includes(filter);
}

export function Work() {
  const [groupKey, setGroupKey] = useState<(typeof groups)[number]["key"]>("video");
  const [filter, setFilter] = useState("全部");
  const [active, setActive] = useState<WorkItem | null>(null);

  const group = groups.find((g) => g.key === groupKey) ?? groups[0];
  const items = useMemo(
    () => group.items.filter((item) => matchesFilter(item, filter)),
    [group, filter],
  );

  return (
    <section id="work" className="relative z-10 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-[0.24em] text-[var(--accent)]">WORK</p>
            <h2 className="serif mt-3 text-3xl md:text-4xl">项目作品</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {groups.map((g) => (
              <button
                type="button"
                key={g.key}
                onClick={() => {
                  setGroupKey(g.key);
                  setFilter("全部");
                }}
                className={`rounded-full px-3 py-1.5 text-sm ${
                  groupKey === g.key ? "bg-white text-black" : "border border-white/15 text-white/70"
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>
        <div className="reveal mb-6 flex flex-wrap gap-2">
          {group.filters.map((f) => (
            <button
              type="button"
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-3 py-1 text-xs ${
                filter === f ? "bg-[var(--accent-dim)] text-[var(--accent)]" : "text-white/50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {items.map((item) => (
            <button
              type="button"
              key={item.id}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setActive(item)}
              className="work-card reveal overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={item.cover}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="cover object-cover"
                />
              </div>
              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg">{item.title}</h3>
                  <span className="font-mono text-[11px] text-white/40">{item.date}</span>
                </div>
                <p className="line-clamp-2 text-sm leading-6 text-[var(--muted)]">{item.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--accent-dim)] px-2 py-0.5 text-[11px] text-[var(--accent)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      <ProjectModal item={active} onClose={() => setActive(null)} />
    </section>
  );
}
