"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { journeyCardText as cardText } from "@/lib/data";

const MARQUEE_DURATION = 30; // seconds for one full loop — increase to slow it down

export default function JourneyCard() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicated so the track can loop from -50% back to 0% seamlessly
  const loopedCards = [...cardText, ...cardText];

  return (
    <>
      {/* Mobile — vertical timeline */}
      <div className="md:hidden">
        {
          cardText.map((text) => (
            <div
              key={text.desc}
              className="relative pl-12 mb-8 last:mb-0"
            >
              <div className="absolute left-2 top-2 h-4 w-4 rounded-full border-2 border-primary bg-background" />
              <div className="absolute left-3.75 top-6 -bottom-8 w-0.5 bg-primary/20 last:hidden" />

              <div className="rounded-2xl shadow-soft p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-emerald">
                <div className="inline-flex items-center justify-center rounded-xl bg-primary/20 p-2 transition-transform duration-300">
                  <text.icon className="text-primary" />
                </div>

                <div className="mt-2">
                  <h1>{text.year}</h1>
                  <p>{text.desc}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      {/* Tablet / Desktop — endless auto-scrolling marquee */}
      <div className="hidden md:block relative w-full overflow-hidden">
        <div className="absolute left-0 right-0 top-2 h-0.5 bg-primary/20" />

        {/* Edge fade so cards don't clip abruptly */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-linear-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-linear-to-l from-background to-transparent" />

        <motion.div
          className="relative flex w-max items-start gap-4 px-1 lg:gap-6"
          animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
          transition={{
            duration: MARQUEE_DURATION,
            repeat: Infinity,
            ease: "linear",
          }}
          onHoverStart={() => setIsPaused(true)}
          onHoverEnd={() => setIsPaused(false)}
        >
          {
            loopedCards.map((text, i) => (
              <div
                key={`${text.year}-${i}`}
                className="relative z-10 flex w-56 shrink-0 flex-col items-center text-center lg:w-64"
              >
                <div className="mb-4 h-4 w-4 shrink-0 rounded-full border-2 border-primary bg-background" />

                <div className="w-full rounded-2xl shadow-soft p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-emerald">
                  <div className="mx-auto inline-flex items-center justify-center rounded-xl bg-primary/20 p-2 transition-transform duration-300">
                    <text.icon className="text-primary" />
                  </div>

                  <div className="mt-2">
                    <h1>{text.year}</h1>
                    <p>{text.desc}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </motion.div>
      </div>
    </>
  )
}