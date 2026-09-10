const MAP_ADDRESS = "1st Cross Road, Bhagya Nagar, Angol, Belagavi, Karnataka 590006";
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_ADDRESS)}&output=embed`;

export default function Location() {
  return (
    <section
      id="location"
      className="scroll-mt-16 border-t border-gold bg-ivory px-6 py-16"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-3xl text-vermilion">
          Location & Contact
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="font-sans text-ink">
            <p className="font-display text-lg text-vermilion">Pandal</p>
            <p className="mt-1">{MAP_ADDRESS}</p>

            <p className="mt-4 font-display text-lg text-vermilion">
              Sarvajanik Shri Ganesh Utsav Mandal
            </p>
            <p className="mt-1 text-ink/80">
              Hajjugiri, Bhagyanagar 1st Cross, Anagol, Belgaum &ndash; 590006
            </p>

            <p className="mt-6 font-display text-lg text-vermilion">
              Aarti Timings
            </p>
            <p className="mt-1 text-ink/70">To be announced.</p>

            <p className="mt-6 font-display text-lg text-vermilion">
              Contact
            </p>
            <p className="mt-1 text-ink/70">To be announced.</p>
          </div>

          <div className="overflow-hidden rounded-lg border border-gold">
            <iframe
              src={MAP_EMBED_SRC}
              title="Map to the pandal"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full md:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
