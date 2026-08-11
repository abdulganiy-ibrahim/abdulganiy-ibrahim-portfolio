"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import JourneyCard from "./JourneyCard"

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

export default function Journey() {
  return (
    <motion.section
      id="journey"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-10"
    >
      <motion.div variants={item} className="flex flex-col items-center justify-center">
        <h1 className="text-sm text-primary font-semibold">My Journey</h1>
        <p className="text-base font-semibold">My path as a developer</p>
      </motion.div>

      <motion.div variants={item} className="mt-5 flex w-full flex-col items-center justify-center">
        <JourneyCard />
      </motion.div>

    </motion.section>
  )
}