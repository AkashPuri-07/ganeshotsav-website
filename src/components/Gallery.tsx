import { getGalleryPhotos } from "@/lib/content";

const TILTS = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3", "rotate-1", "-rotate-1"];

// Landscape-oriented photos render short next to portrait neighbors at the
// same column width — span 2 columns so they read at a comparable size.
const WIDE_PHOTOS = new Set(["gallery-01.jpeg"]);

export default function Gallery() {
  const photos = getGalleryPhotos();

  return (
    <section
      id="gallery"
      className="scroll-mt-16 border-t border-gold bg-ivory px-6 py-16"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl text-vermilion">
          Moments we&apos;ve kept
        </h2>

        {photos.length === 0 ? (
          <p className="mt-4 font-sans text-ink/70">Coming soon.</p>
        ) : (
          <div className="mt-8 grid grid-cols-2 items-start gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {photos.map((photo, index) => (
              <div
                key={photo}
                className={`${TILTS[index % TILTS.length]} ${WIDE_PHOTOS.has(photo) ? "col-span-2" : ""} rounded-sm border-8 border-white bg-white shadow-md transition-transform duration-200 hover:z-10 hover:-translate-y-2 hover:rotate-0 hover:shadow-xl`}
              >
                <img
                  src={`/gallery/${photo}`}
                  alt="A moment from a past Ganeshotsav celebration"
                  loading="lazy"
                  className="block h-auto w-full"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
