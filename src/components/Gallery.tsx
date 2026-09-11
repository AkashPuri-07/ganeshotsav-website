import { getGalleryPhotos } from "@/lib/content";

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
        {doubled.map((photo, index) => (
          <div
            key={`${photo}-${index}`}
            className="flex h-[320px] shrink-0 rounded-md bg-white shadow-md"
          >
            <img
              src={`/gallery/${photo}`}
              alt="A moment from a past Ganeshotsav celebration"
              loading="lazy"
              className="h-full w-auto rounded-md"
            />
          </div>
        ))}
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
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl text-vermilion">
          Moments we&apos;ve kept
        </h2>
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
