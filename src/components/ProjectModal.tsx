"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { WorkItem } from "@/data/content";

export function ProjectModal({
  item,
  onClose,
}: {
  item: WorkItem | null;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!item) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtml = html.style.overflow;
    const prevBody = body.style.overflow;
    const x = window.scrollX;
    const y = window.scrollY;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      html.style.overflow = prevHtml;
      body.style.overflow = prevBody;
      window.removeEventListener("keydown", onKey);
      window.scrollTo(x, y);
    };
  }, [item, onClose]);

  if (!mounted || !item) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/75 px-4 py-24"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl border border-white/10 bg-[#0b1118] p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="serif text-2xl">{item.title}</h3>
            <p className="mt-1 text-sm text-white/50">
              {[item.type, item.platform, item.duration, item.date].filter(Boolean).join(" · ")}
            </p>
          </div>
          <button type="button" onClick={onClose} className="shrink-0 text-sm text-white/60">
            关闭
          </button>
        </div>
        <div className="relative mb-4 aspect-video overflow-hidden rounded-xl bg-black">
          {item.videoEmbed ? (
            <iframe
              src={item.videoEmbed}
              title={item.title}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <Image src={item.cover} alt={item.title} fill className="object-cover" />
          )}
        </div>
        <p className="leading-7 text-[var(--muted)]">{item.summary}</p>
        {item.tools?.length ? (
          <p className="mt-3 text-sm text-white/70">工具：{item.tools.join(" / ")}</p>
        ) : null}
        {item.features?.length ? (
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/70">
            {item.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        ) : null}
        {item.process?.length ? (
          <details className="mt-4 rounded-xl border border-white/10 p-4">
            <summary className="cursor-pointer text-sm text-[var(--accent)]">创作过程</summary>
            <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-white/70">
              {item.process.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </details>
        ) : null}
        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          {item.link ? (
            <a href={item.link} target="_blank" rel="noreferrer" className="text-[var(--accent)]">
              观看作品
            </a>
          ) : null}
          {item.demo ? (
            <a href={item.demo} className="text-[var(--accent)]">
              在线演示
            </a>
          ) : null}
          {item.repo ? (
            <a href={item.repo} target="_blank" rel="noreferrer" className="text-[var(--accent)]">
              代码仓库
            </a>
          ) : null}
        </div>
      </div>
    </div>,
    document.body,
  );
}
