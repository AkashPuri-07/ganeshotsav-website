"use client";

import { useState } from "react";
import type { Department } from "@/data/team";

export default function DepartmentAccordion({
  departments,
}: {
  departments: Department[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gold rounded-lg border border-gold bg-ivory-warm">
      {departments.map((dept, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={dept.name}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-sans"
            >
              <span>
                <span className="font-display text-lg text-vermilion">
                  {dept.name}
                </span>
                <span className="block text-sm text-ink/70">
                  President: {dept.president} &middot; VP: {dept.vicePresident}
                </span>
              </span>
              <span className="shrink-0 text-xl text-vermilion">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5">
                <p className="font-sans text-sm text-ink">
                  {dept.members.join(", ")}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
