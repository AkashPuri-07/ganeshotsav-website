"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { DailyUpdate } from "@/lib/content";

function DayPhotos({
  photos,
  dayLabel,
  basePath,
  sideBySide,
}: {
  photos: string[];
  dayLabel: string;
  basePath: string;
  sideBySide?: boolean;
}) {
  const imgClass = "h-full w-full min-h-0 object-contain rounded";

  if (photos.length === 1) {
    return (
      <img
        src={`${basePath}/${photos[0]}`}
        alt={dayLabel}
        loading="lazy"
        className={`absolute inset-0 ${imgClass}`}
      />
    );
  }

  return (
    <div
      className={`absolute inset-0 flex min-h-0 gap-2 ${sideBySide ? "flex-row" : "flex-col"}`}
    >
      {photos.map((photo) => (
        <img
          key={photo}
          src={`${basePath}/${photo}`}
          alt={dayLabel}
          loading="lazy"
          className={`min-h-0 flex-1 ${imgClass}`}
        />
      ))}
    </div>
  );
}

export default function DailyUpdatesCarousel({
  updates,
}: {
  updates: DailyUpdate[];
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-day-card]");
    const amount = (card?.offsetWidth ?? el.clientWidth * 0.85) + 24;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative mt-6">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4"
      >
        {updates.map((update) => (
          <article
            key={update.day}
            data-day-card
            className="flex min-h-[560px] w-[85vw] shrink-0 snap-start flex-col rounded-lg border border-gold bg-ivory-warm p-6 sm:h-[620px] sm:w-[420px]"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-display text-xl text-vermilion">
                Day {update.day}
              </span>
              <h3 className="font-display text-lg text-ink">
                {update.title}
              </h3>
              <span className="rounded-full bg-marigold px-3 py-1 font-sans text-xs font-semibold text-ivory">
                {update.highlight}
              </span>
            </div>
            <p className="mt-1 font-sans text-sm text-ink/60">
              {update.date}
            </p>
            <p className="mt-3 font-sans text-ink">{update.writeup}</p>
            {update.photos.length > 0 && (
              <div className="relative mt-4 min-h-[288px] flex-1 sm:min-h-0">
                <DayPhotos
                  photos={update.photos}
                  dayLabel={`${update.title} — Day ${update.day}`}
                  basePath={`/daily-updates/day-${update.day}`}
                  sideBySide={update.layout === "side-by-side"}
                />
              </div>
            )}
            {update.videos && update.videos.length > 0 ? (
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                {update.videos.map((video) => (
                  <a
                    key={video.url}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full bg-vermilion px-3 py-2 text-center font-sans text-sm font-semibold text-ivory transition-colors hover:bg-marigold"
                  >
                    ▶ {video.label}
                  </a>
                ))}
              </div>
            ) : (
              update.youtubeUrl && (
                <a
                  href={update.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block rounded-full bg-vermilion px-5 py-2 font-sans text-sm font-semibold text-ivory transition-colors hover:bg-marigold"
                >
                  ▶ Watch on YouTube
                </a>
              )
            )}
          </article>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        disabled={atStart}
        aria-label="Previous update"
        className="absolute left-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-ivory/90 text-vermilion shadow-md transition-opacity hover:bg-marigold hover:text-ivory disabled:pointer-events-none disabled:opacity-0"
      >
        &#8249;
      </button>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        disabled={atEnd}
        aria-label="Next update"
        className="absolute right-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-ivory/90 text-vermilion shadow-md transition-opacity hover:bg-marigold hover:text-ivory disabled:pointer-events-none disabled:opacity-0"
      >
        &#8250;
      </button>
    </div>
  );
}
