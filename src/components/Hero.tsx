export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-16 bg-gradient-to-br from-marigold to-vermilion px-6 py-16 md:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
          <span className="rounded-full bg-ivory px-4 py-1 font-sans text-sm font-semibold text-vermilion">
            49th Year
          </span>

          <h1 className="font-display text-4xl text-ivory sm:text-5xl">
            Belgaum cha भाग्यविधाता
          </h1>

          <p className="font-sans text-lg text-ivory-warm">
            Sarvajanik Shri Ganesh Utsav Mandal &middot; Angol, Belgaum
          </p>

          <p className="font-sans text-base font-semibold text-ivory">
            Sept 14 &ndash; 25, 2026
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <a
              href="#daily-updates"
              className="rounded-full bg-ivory px-6 py-3 text-center font-sans font-semibold text-vermilion transition-colors hover:bg-ivory-warm"
            >
              See today&apos;s update
            </a>
            <a
              href="#live-aarti"
              className="rounded-full border-2 border-ivory px-6 py-3 text-center font-sans font-semibold text-ivory transition-colors hover:bg-ivory hover:text-vermilion"
            >
              Watch live aarti
            </a>
          </div>
        </div>

        <div className="w-full max-w-md overflow-hidden rounded-lg border-2 border-ivory/70 shadow-lg md:shrink-0">
          <img
            src="/daily-updates/day-1/sthapana.jpg"
            alt="This year's Ganpati idol"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
