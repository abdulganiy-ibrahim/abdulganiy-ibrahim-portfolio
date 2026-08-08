"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import AboutImage from "./AboutImage";
import AboutText from './AboutText';

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

export default function About() {
  return (
    <motion.section
      id="about"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-10 p-2 flex flex-col lg:flex-row justify-between gap-10"
    >
      <motion.div variants={item} className="hidden lg:flex lg:basis-2/5">
        <AboutImage />
      </motion.div>

      <motion.div variants={item} className="lg:basis-3/5">
        <AboutText />
      </motion.div>

    </motion.section>
  )
}