"use client";

import { useState } from "react";
import { liveAartiConfig } from "@/data/liveAarti";

export default function LiveAarti() {
  const [loaded, setLoaded] = useState(false);
  const { youtubeVideoId, aartiTimeText } = liveAartiConfig;

  return (
    <section
      id="live-aarti"
      className="scroll-mt-16 border-t border-gold bg-ivory px-6 py-16"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl text-vermilion">Live Aarti</h2>
        <p className="mt-2 font-sans text-ink/80">{aartiTimeText}</p>

        <div className="mt-6 aspect-video w-full overflow-hidden rounded-lg border border-gold bg-ivory-warm">
          {!youtubeVideoId ? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-6 text-center">
              <p className="font-sans text-ink/70">
                Streaming details coming soon.
              </p>
            </div>
          ) : loaded ? (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
              title="Live Aarti"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="group relative h-full w-full"
            >
              <img
                src={`https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`}
                alt="Live Aarti — tap to load stream"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-ink/30 transition-colors group-hover:bg-ink/40">
                <span className="flex items-center gap-2 rounded-full bg-ivory px-5 py-3 font-sans font-semibold text-vermilion">
                  ▶ Tap to load live stream
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
