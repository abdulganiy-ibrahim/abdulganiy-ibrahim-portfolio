"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import ProjectCard from "./ProjectCard";

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

export default function Projects() {
  return (
    <motion.section
      id="projects"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-10"
    >
      <motion.div variants={item} className="flex flex-col items-center justify-center">
        <h1 className="text-sm text-primary font-semibold">Featured Projects</h1>
        <p className="text-base font-semibold">Things I've built</p>
      </motion.div>

      <motion.div variants={item} className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <ProjectCard />
      </motion.div>
    </motion.section>
  )
}