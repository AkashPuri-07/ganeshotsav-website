import Link from "next/link";
import { getGalleryPhotos } from "@/lib/content";
import GalleryMarquee from "@/components/GalleryMarquee";

// The strip is capped (it renders every photo twice on desktop, which hurts
// mobile performance). The full list lives on /gallery. Photos numbered from
// FIRST_PHOTO_OF_LATEST_BATCH up are the newest batch (Day 12, 2026).
const FIRST_PHOTO_OF_LATEST_BATCH = 37;
const STRIP_FROM_LATEST_BATCH = 12;
const STRIP_FROM_OLDER = 24;

function photoNumber(photo: string) {
  return Number(photo.match(/(\d+)/)?.[1] ?? 0);
}

export default function Gallery() {
  const allPhotos = getGalleryPhotos();
  const latest = allPhotos.filter(
    (p) => photoNumber(p) >= FIRST_PHOTO_OF_LATEST_BATCH,
  );
  const older = allPhotos.filter(
    (p) => photoNumber(p) < FIRST_PHOTO_OF_LATEST_BATCH,
  );
  const photos = [
    ...latest.slice(0, STRIP_FROM_LATEST_BATCH),
    ...older.slice(0, STRIP_FROM_OLDER),
  ];

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
        <GalleryMarquee photos={photos} />
      )}
    </section>
  );
}
