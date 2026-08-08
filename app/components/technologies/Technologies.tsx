"use client";

import { useState } from "react";
import TechnologyCard from "./TecnologyCard"

const filters = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Tools", value: "tool" },
] as const;

export default function Technologies() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  return (
    <section 
      id="technologies"
      className="mt-10"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-sm text-primary font-semibold">Skill & Technologies</h1>
        <p className="text-base font-semibold">Technogies I work with</p>
      </div> 

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {
          filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? "border-primary bg-primary text-white shadow-emerald"
                  : "border-border/60 text-muted-foreground hover:border-primary/40 hover:text-primary"
              }`}
            >
              {filter.label}
            </button>
          ))
        }
      </div>

      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <TechnologyCard category={activeFilter} />
      </div>
    </section>
  )
}