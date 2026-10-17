"use client";

import { useState } from "react";
import { site } from "@/data/content";

const links = [
  { label: "GitHub", href: site.contact.github },
  { label: "Gitee", href: site.contact.gitee },
  { label: "Bilibili", href: site.contact.bilibili },
  { label: "YouTube", href: site.contact.youtube },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(site.contact.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section id="contact" className="relative z-10 px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl border-t border-white/10 pt-16">
        <p className="reveal font-mono text-xs tracking-[0.24em] text-[var(--accent)]">CONTACT</p>
        <h2 className="reveal serif mt-3 max-w-xl text-3xl md:text-4xl">{site.contact.note}</h2>
        <div className="reveal mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={copyEmail}
            className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[#04221d]"
          >
            {copied ? "已复制邮箱" : site.contact.email}
          </button>
          <a
            href={site.contact.resume}
            download="郑皓的简历-代码技术.pdf"
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm"
          >
            下载简历 PDF
          </a>
        </div>
        <div className="reveal mt-8 flex flex-wrap gap-5 text-sm text-white/60">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[var(--accent)]"
            >
              {item.label}
            </a>
          ))}
          <span>微信 {site.contact.wechat}</span>
        </div>
      </div>
    </section>
  );
}
