import Link from "next/link";
import { getGalleryPhotos } from "@/lib/content";
import GalleryMarquee from "@/components/GalleryMarquee";

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
        <GalleryMarquee photos={photos} />
      )}
    </section>
  );
}
