import { executiveCommittee, departments } from "@/data/team";
import DepartmentAccordion from "@/components/DepartmentAccordion";

export default function Team() {
  return (
    <section
      id="team"
      className="scroll-mt-16 border-t border-gold bg-ivory px-6 py-16"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-3xl text-vermilion">Our Team</h2>

        <h3 className="mt-8 font-display text-xl text-ink">
          Executive Committee
        </h3>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {executiveCommittee.map((entry) => (
            <div
              key={entry.role}
              className="rounded-lg border border-gold bg-ivory-warm p-5"
            >
              <p className="font-display text-lg text-vermilion">
                {entry.role}
              </p>
              <p className="mt-1 font-sans text-ink">
                {entry.names.join(", ")}
              </p>
            </div>
          ))}
        </div>

        <h3 className="mt-12 font-display text-xl text-ink">Departments</h3>
        <p className="mt-1 font-sans text-sm text-ink/70">
          Tap a department to see all members.
        </p>
        <div className="mt-4">
          <DepartmentAccordion departments={departments} />
        </div>
      </div>
    </section>
  );
}
