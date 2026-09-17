import { liveAartiConfig } from "@/data/liveAarti";

export default function LiveAarti() {
  const { channelId, aartiTimeText, channelUrl } = liveAartiConfig;

  return (
    <section
      id="live-aarti"
      className="scroll-mt-16 border-t border-gold bg-ivory px-6 py-16"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl text-vermilion">Live Aarti</h2>
        <p className="mt-2 font-sans text-ink/80">{aartiTimeText}</p>

        <div className="mt-6 aspect-video w-full overflow-hidden rounded-lg border border-gold bg-ivory-warm">
          <iframe
            src={`https://www.youtube.com/embed/live_stream?channel=${channelId}`}
            title="Live Aarti"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <a
          href={channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-sans text-sm text-leaf hover:text-vermilion"
        >
          Visit our YouTube channel &rarr;
        </a>
      </div>
    </section>
  );
}
