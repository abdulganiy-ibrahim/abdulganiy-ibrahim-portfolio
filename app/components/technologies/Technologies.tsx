"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import TechnologyCard from "./TecnologyCard"

const filters = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Tools", value: "tool" },
] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Technologies() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  return (
    <motion.section
      id="technologies"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-10"
    >
      <motion.div variants={item} className="flex flex-col items-center justify-center">
        <h1 className="text-sm text-primary font-semibold">Skill & Technologies</h1>
        <p className="text-base font-semibold">Technogies I work with</p>
      </motion.div>

      <motion.div variants={item} className="mt-6 flex flex-wrap items-center justify-center gap-3">
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
      </motion.div>

      <motion.div variants={item} className="mt-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <TechnologyCard category={activeFilter} />
      </motion.div>
    </motion.section>
  )
}