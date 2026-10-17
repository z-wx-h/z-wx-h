"use client";

import { site } from "@/data/content";

export function HeroMedia() {
  const { kind, gifSrc, videoSrc, posterSrc, alt } = site.heroMedia;

  return (
    <div className="hero-media absolute inset-0 overflow-hidden">
      <div className="hero-aurora" />
      {kind === "video" ? (
        <video
          className="hero-media-asset h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={posterSrc}
          aria-label={alt}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={gifSrc}
          alt={alt}
          decoding="async"
          className="hero-media-asset h-full w-full object-cover"
        />
      )}
    </div>
  );
}
