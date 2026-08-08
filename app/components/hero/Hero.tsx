"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

const container = {
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

export default function Hero() {
  return (
    <motion.section
      id="hero"
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-10 p-2 flex flex-col lg:flex-row items-start justify-between gap-10"
    >
      <motion.div variants={item} className="lg:basis-3/5">
        <HeroText />
      </motion.div>

      <motion.div variants={item} className="lg:basis-2/5 flex justify-center md:mx-auto">
        <HeroImage />
      </motion.div>

    </motion.section>
  )
}