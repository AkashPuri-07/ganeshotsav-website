import { getDailyUpdates } from "@/lib/content";
import DailyUpdatesCarousel from "@/components/DailyUpdatesCarousel";

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
          <DailyUpdatesCarousel updates={updates} />
        )}
      </div>
    </section>
  );
}
