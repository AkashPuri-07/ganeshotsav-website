import Link from "next/link";
import { getGalleryPhotos } from "@/lib/content";
import galleryDimensions from "@/data/gallery-dimensions.json";

type Dimensions = { width: number; height: number };
const dimensions = galleryDimensions as Record<string, Dimensions>;

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
                alt="A moment from a past Ganeshotsav celebration"
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

export default function Gallery() {
  const photos = getGalleryPhotos();

  return (
    <section
      id="gallery"
      className="scroll-mt-16 overflow-hidden border-t border-gold bg-ivory py-16"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6">
        <h2 className="font-display text-3xl text-vermilion">
          Moments we&apos;ve kept
        </h2>
        {photos.length > 0 && (
          <Link
            href="/gallery"
            className="rounded-full bg-marigold px-5 py-2 font-sans text-sm font-semibold text-ivory transition-colors hover:bg-marigold-deep"
          >
            View full gallery &rarr;
          </Link>
        )}
      </div>

      {photos.length === 0 ? (
        <p className="mt-4 px-6 font-sans text-ink/70">Coming soon.</p>
      ) : (
        <div className="mt-8 flex flex-col gap-4">
          {(() => {
            const [row1, row2] = splitAlternate(photos);
            return (
              <>
                <MarqueeRow photos={row1} direction="left" />
                <MarqueeRow photos={row2} direction="right" />
              </>
            );
          })()}
        </div>
      )}
    </section>
  );
}
