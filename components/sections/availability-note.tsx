"use client"

import { motion } from "framer-motion"
import { FaRegSmileWink } from "react-icons/fa"

export function AvailabilityNoteSection() {
  return (
    // <section id="availability-note" className="relative py-12 sm:py-20">
    // <div className="mx-auto max-w-4xl px-6">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <blockquote className="relative">
        {/* Quote icon */}
        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-6xl text-muted-foreground/50">
          “
        </span>
        {/* Text */}
        <p className="mx-auto max-w-3xl text-base md:text-lg italic leading-relaxed text-muted-foreground">
          If the specific skill you are looking for is not yet listed in my
          experience, <br /> I am always ready to learn, adapt quickly, and grow
          into exactly the professional you need.
          <FaRegSmileWink className="inline-block ml-2 text-pink-400 dark:text-pink-300" />
        </p>

        {/* Signature */}
        <div className="mt-4 flex items-center justify-center gap-3 text-sm text-muted-foreground/70">
          <span className="h-px w-10 bg-muted-foreground/30" />
          <span className="italic">Always Learning</span>
          <span className="h-px w-10 bg-muted-foreground/30" />
        </div>
      </blockquote>
    </motion.div>
    // </div>
    // </section>
  )
}