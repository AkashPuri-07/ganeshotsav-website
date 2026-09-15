import { getDailyUpdates } from "@/lib/content";

export default function DailyUpdates() {
  const updates = getDailyUpdates();

  return (
    <section
      id="daily-updates"
      className="scroll-mt-16 border-t border-gold bg-ivory px-6 py-16"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-3xl text-vermilion">
          Daily Updates
        </h2>

        {updates.length === 0 ? (
          <p className="mt-4 font-sans text-ink/70">
            Updates will start appearing here from Day 1 (Sept 14, 2026).
          </p>
        ) : (
          <div className="mt-6 flex flex-col gap-6">
            {updates.map((update) => (
              <article
                key={update.day}
                className="rounded-lg border border-gold bg-ivory-warm p-6"
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
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {update.photos.map((photo) => (
                      <img
                        key={photo}
                        src={`/daily-updates/day-${update.day}/${photo}`}
                        alt={`${update.title} — Day ${update.day}`}
                        loading="lazy"
                        className="aspect-square w-full rounded object-cover"
                      />
                    ))}
                  </div>
                )}
                {update.youtubeUrl && (
                  <a
                    href={update.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block rounded-full bg-vermilion px-5 py-2 font-sans text-sm font-semibold text-ivory transition-colors hover:bg-marigold"
                  >
                    ▶ Watch on YouTube
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
