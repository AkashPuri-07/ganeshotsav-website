import {
  aartiReplays,
  getYouTubeId,
  liveAartiConfig,
} from "@/data/liveAarti";

export default function LiveAarti() {
  const { aartiTimeText, channelUrl, liveUrl } = liveAartiConfig;

  const replays = aartiReplays.filter((r) => getYouTubeId(r.url));
  const [latest, ...earlier] = replays;
  const latestId = latest ? getYouTubeId(latest.url) : null;

  return (
    <section
      id="live-aarti"
      className="scroll-mt-16 border-t border-gold bg-ivory px-6 py-16"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl text-vermilion">Live Aarti</h2>

        <div className="mt-6 flex flex-col items-center gap-4 rounded-lg border border-gold bg-ivory-warm px-6 py-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-vermilion px-4 py-1 font-sans text-sm font-semibold uppercase tracking-wide text-ivory">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-ivory opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ivory" />
            </span>
            LIVE now
          </span>

          <p className="font-sans text-ink/80">{aartiTimeText}</p>

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-marigold px-6 py-3 font-sans font-semibold text-ink transition-colors hover:bg-marigold-deep hover:text-ivory"
          >
            ▶ Watch live on YouTube
          </a>
        </div>

        {latest && latestId && (
          <div className="mt-10">
            <h3 className="font-display text-xl text-vermilion">
              Missed it? Watch the replay
            </h3>
            <p className="mt-1 font-sans text-sm text-ink/80">{latest.label}</p>

            <div className="mt-3 aspect-video w-full overflow-hidden rounded-lg border border-gold bg-ivory-warm">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${latestId}`}
                title={`Aarti replay: ${latest.label}`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {earlier.length > 0 && (
              <div className="mt-6">
                <h4 className="font-sans text-sm font-semibold text-ink">
                  Earlier aartis
                </h4>
                <ul className="mt-2 flex flex-col gap-1">
                  {earlier.map((r) => (
                    <li key={r.url}>
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-sm text-leaf hover:text-vermilion"
                      >
                        ▶ {r.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <a
          href={channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block font-sans text-sm text-leaf hover:text-vermilion"
        >
          Visit our YouTube channel &rarr;
        </a>
      </div>
    </section>
  );
}
