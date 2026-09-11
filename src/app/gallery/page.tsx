import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { getGalleryPhotos } from "@/lib/content";
import galleryDimensions from "@/data/gallery-dimensions.json";

type Dimensions = { width: number; height: number };
const dimensions = galleryDimensions as Record<string, Dimensions>;

export const metadata: Metadata = {
  title: "Full Gallery — Sarvajanik Shri Ganesh Utsav Mandal",
  description:
    "All photos from past Ganeshotsav celebrations at Sarvajanik Shri Ganesh Utsav Mandal, Angol, Belgaum.",
};

export default function GalleryPage() {
  const photos = getGalleryPhotos();

  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col bg-ivory px-6 py-16">
        <div className="mx-auto w-full max-w-6xl">
          <Link
            href="/#gallery"
            className="font-sans text-sm text-ink/70 hover:text-vermilion"
          >
            &larr; Back to home
          </Link>

          <h1 className="mt-4 font-display text-3xl text-vermilion sm:text-4xl">
            Moments we&apos;ve kept
          </h1>
          <p className="mt-2 font-sans text-ink/70">
            {photos.length} photos from past Ganeshotsav celebrations.
          </p>

          {photos.length === 0 ? (
            <p className="mt-8 font-sans text-ink/70">Coming soon.</p>
          ) : (
            <div className="mt-8 columns-2 gap-4 sm:columns-3 lg:columns-4">
              {photos.map((photo) => {
                const dims = dimensions[photo];
                return (
                  <img
                    key={photo}
                    src={`/gallery/${photo}`}
                    alt="A moment from a past Ganeshotsav celebration"
                    loading="lazy"
                    decoding="async"
                    width={dims?.width}
                    height={dims?.height}
                    className="mb-4 w-full break-inside-avoid rounded-md shadow-md"
                  />
                );
              })}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
