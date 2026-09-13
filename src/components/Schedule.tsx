import { scheduleEvents } from "@/data/schedule";

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="scroll-mt-16 border-t border-gold bg-ivory px-6 py-16"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl text-vermilion">Schedule</h2>
        <p className="mt-2 font-sans text-ink/70">
          Special events during this year&apos;s festival.
        </p>

        <div className="mt-6 rounded-lg border border-gold bg-ivory-warm p-6">
          <ul className="space-y-3 font-sans text-ink">
            {scheduleEvents.map((item) => (
              <li key={item.date + item.event} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                <span>
                  <strong className="text-vermilion">{item.date}</strong>
                  {" — "}
                  {item.event}
                  {item.tbc && (
                    <span className="ml-2 rounded-full bg-marigold px-2 py-0.5 font-sans text-xs font-semibold text-ivory">
                      TBC
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
