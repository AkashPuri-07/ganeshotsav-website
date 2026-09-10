import { sponsors } from "@/data/sponsors";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="scroll-mt-16 border-t border-gold bg-ivory px-6 py-16"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl text-vermilion">Sponsors</h2>
        <p className="mt-2 font-sans text-ink/70">
          With gratitude to the businesses and families of our community.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex flex-col gap-2 rounded-lg border border-gold bg-ivory-warm p-5"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {sponsor.icon}
                </span>
                <div>
                  <p className="font-display text-lg leading-tight text-vermilion">
                    {sponsor.name}
                  </p>
                  <p className="font-sans text-sm text-leaf">
                    {sponsor.category}
                  </p>
                </div>
              </div>

              {sponsor.description && (
                <p className="font-sans text-sm text-ink">
                  {sponsor.description}
                </p>
              )}

              {sponsor.address && (
                <p className="font-sans text-sm text-ink/80">
                  {sponsor.address}
                </p>
              )}

              {(sponsor.contact || sponsor.phones.length > 0) && (
                <p className="font-sans text-sm text-ink/80">
                  {sponsor.contact}
                  {sponsor.contact && sponsor.phones.length > 0 ? " · " : ""}
                  {sponsor.phones.join(" / ")}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
