"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import galleryDimensions from "@/data/gallery-dimensions.json";
import galleryAlt from "@/data/gallery-alt.json";

type Dimensions = { width: number; height: number };
const dimensions = galleryDimensions as Record<string, Dimensions>;
const altText = galleryAlt as Record<string, string>;

function splitAlternate(items: string[]): [string[], string[]] {
  const row1: string[] = [];
  const row2: string[] = [];
  items.forEach((item, index) => (index % 2 === 0 ? row1 : row2).push(item));
  return [row1, row2];
}

// Keeps scroll speed feeling consistent regardless of how many photos are
// in a row (more photos = longer track = needs more time for the same
// visual speed).
function durationFor(photoCount: number) {
  return `${Math.max(20, photoCount * 4.5)}s`;
}

function photoAlt(photo: string) {
  return altText[photo] ?? "A moment from a past Ganeshotsav celebration";
}

// Desktop only — continuous two-row auto-scrolling marquee, unchanged.
function MarqueeRow({
  photos,
  direction,
}: {
  photos: string[];
  direction: "left" | "right";
}) {
  if (photos.length === 0) return null;
  const doubled = [...photos, ...photos];

  return (
    <div className="marquee-viewport">
      <div
        className={`marquee-track marquee-track-${direction} flex gap-4`}
        style={{ animationDuration: durationFor(photos.length) }}
      >
        {doubled.map((photo, index) => {
          const dims = dimensions[photo];
          return (
            <div
              key={`${photo}-${index}`}
              className="flex h-[320px] shrink-0 rounded-md bg-white shadow-md"
            >
              <img
                src={`/gallery/${photo}`}
                alt={photoAlt(photo)}
                loading="lazy"
                decoding="async"
                width={dims?.width}
                height={dims?.height}
                className="h-full w-auto rounded-md"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Mobile only — a single manually swipeable row, plus tap arrows.
function MobileGalleryScroller({ photos }: { photos: string[] }) {
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
    const card = el.querySelector<HTMLElement>("[data-gallery-card]");
    const amount = (card?.offsetWidth ?? el.clientWidth * 0.85) + 16;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div>
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
      >
        {photos.map((photo) => {
          const dims = dimensions[photo];
          return (
            <div
              key={photo}
              data-gallery-card
              className="flex h-[320px] shrink-0 snap-start rounded-md bg-white shadow-md"
            >
              <img
                src={`/gallery/${photo}`}
                alt={photoAlt(photo)}
                loading="lazy"
                decoding="async"
                width={dims?.width}
                height={dims?.height}
                className="h-full w-auto rounded-md"
              />
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={atStart}
          aria-label="Previous photo"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold bg-ivory text-vermilion shadow-md transition-opacity hover:bg-marigold hover:text-ivory disabled:pointer-events-none disabled:opacity-0"
        >
          &#8249;
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={atEnd}
          aria-label="Next photo"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold bg-ivory text-vermilion shadow-md transition-opacity hover:bg-marigold hover:text-ivory disabled:pointer-events-none disabled:opacity-0"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default function GalleryMarquee({ photos }: { photos: string[] }) {
  const [row1, row2] = splitAlternate(photos);

  return (
    <div className="mt-8">
      <div className="hidden flex-col gap-4 sm:flex">
        <MarqueeRow photos={row1} direction="left" />
        <MarqueeRow photos={row2} direction="right" />
      </div>

      <div className="px-6 sm:hidden">
        <MobileGalleryScroller photos={photos} />
      </div>
    </div>
  );
}
