"use client";

import { useState } from "react";
import galleryDimensions from "@/data/gallery-dimensions.json";
import galleryAlt from "@/data/gallery-alt.json";

type Dimensions = { width: number; height: number };
const dimensions = galleryDimensions as Record<string, Dimensions>;
const altText = galleryAlt as Record<string, string>;

const NUDGE_SECONDS = 3;

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
  return Math.max(20, photoCount * 4.5);
}

function MarqueeRow({
  photos,
  direction,
  offsetSec,
}: {
  photos: string[];
  direction: "left" | "right";
  offsetSec: number;
}) {
  if (photos.length === 0) return null;
  const doubled = [...photos, ...photos];

  return (
    <div className="marquee-viewport">
      <div
        className={`marquee-track marquee-track-${direction} flex gap-4`}
        style={{
          animationDuration: `${durationFor(photos.length)}s`,
          animationDelay: `${offsetSec}s`,
        }}
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
                alt={
                  altText[photo] ?? "A moment from a past Ganeshotsav celebration"
                }
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

export default function GalleryMarquee({ photos }: { photos: string[] }) {
  const [offsetSec, setOffsetSec] = useState(0);
  const [row1, row2] = splitAlternate(photos);

  // Nudges animation-delay instead of pausing the animation — this jumps
  // the running CSS animation's position instantly without interrupting
  // its continuous playback.
  const skip = (dir: 1 | -1) => {
    setOffsetSec((prev) => prev - dir * NUDGE_SECONDS);
  };

  return (
    <div className="mt-8 flex flex-col gap-4">
      <MarqueeRow photos={row1} direction="left" offsetSec={offsetSec} />
      <MarqueeRow photos={row2} direction="right" offsetSec={offsetSec} />

      <div className="flex items-center justify-center gap-6 sm:hidden">
        <button
          type="button"
          onClick={() => skip(-1)}
          aria-label="Skip gallery back"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold bg-ivory text-vermilion shadow-md transition-colors hover:bg-marigold hover:text-ivory"
        >
          &#8249;
        </button>
        <button
          type="button"
          onClick={() => skip(1)}
          aria-label="Skip gallery ahead"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gold bg-ivory text-vermilion shadow-md transition-colors hover:bg-marigold hover:text-ivory"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}
