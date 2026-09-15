import { contributors } from "@/data/contributors";

export default function CommunityContributors() {
  return (
    <section
      id="contributors"
      className="scroll-mt-16 border-t border-gold bg-ivory-warm px-6 py-16"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl text-vermilion">
          Community Contributors
        </h2>
        <p className="mt-2 font-sans text-ink/70">
          With heartfelt thanks to the community members whose generosity
          supports this Ganeshotsav.
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 font-sans text-ink sm:grid-cols-2 lg:grid-cols-3">
          {contributors.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
