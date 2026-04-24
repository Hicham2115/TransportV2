"use client"
import React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import bgImage from "@/app/assets/pexels-pavel-danilyuk-8424931.jpg"

function FourthSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section className="relative z-0 mb-20 flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-black px-4 py-20 sm:py-24">
      {/* Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="pointer-events-none absolute top-10 left-1/2 z-0 h-[220px] w-[320px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(224,16,32,0.15)_0%,transparent_70%)] sm:h-[340px] sm:w-[600px]"
      />

      {/* Slanted image */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="pointer-events-none absolute top-0 z-0 h-[320px] w-full max-w-[100%] sm:ml-20 sm:h-[520px] sm:max-w-[900px]"
      >
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="slantedPanels" clipPathUnits="objectBoundingBox">
              <polygon points="0.18 0, 0.38 0, 0.13 1, -0.07 1" />
              <polygon points="0.46 0, 0.66 0, 0.41 1, 0.21 1" />
              <polygon points="0.74 0, 0.94 0, 0.69 1, 0.49 1" />
            </clipPath>
          </defs>
        </svg>

        <div
          className="relative h-full w-full"
          style={{ clipPath: "url(#slantedPanels)" }}
        >
          <Image
            src={bgImage}
            alt="Transport vehicle"
            fill
            className="object-cover object-center opacity-65"
          />
        </div>

        <div className="absolute top-0 left-0 z-10 h-[120px] w-full bg-gradient-to-b from-black/70 to-transparent sm:h-[160px]" />
        <div className="absolute bottom-0 left-0 z-10 h-[160px] w-full bg-gradient-to-t from-black/70 to-transparent sm:h-[220px]" />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mt-[120px] flex max-w-[700px] flex-col items-center text-center sm:mt-[200px]"
      >
        <motion.h2
          variants={itemVariants}
          className="mb-6 text-3xl leading-tight font-bold tracking-[-0.03em] text-white sm:text-[clamp(2.8rem,6vw,5rem)]"
        >
          Ready to move <br />
          <span className="text-white/45">smarter</span> and faster?
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="mb-6 h-px w-10 bg-white/15"
        />

        <motion.p
          variants={itemVariants}
          className="mb-10 text-sm leading-relaxed text-white/45 sm:text-[1.05rem]"
        >
          Talk to our experts and get a tailored logistics solution built around
          your route.
        </motion.p>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg px-6 py-3 text-sm text-white uppercase sm:w-auto sm:px-8 sm:py-4 sm:text-base"
        >
          <span className="relative z-20 font-semibold">Get in Touch</span>

          <span className="absolute top-0 left-[-80%] z-10 h-full w-[50%] rotate-12 bg-white/20 blur-lg transition-all duration-1000 group-hover:left-[130%]" />

          <span className="absolute top-0 left-0 h-[20%] w-1/2 border-t-2 border-l-2 border-white/40" />
          <span className="absolute top-0 right-0 h-[60%] w-1/2 border-t-2 border-r-2 border-white/40 group-hover:h-[90%]" />
          <span className="absolute bottom-0 left-0 h-[60%] w-1/2 border-b-2 border-l-2 border-white/40 group-hover:h-[90%]" />
          <span className="absolute right-0 bottom-0 h-[20%] w-1/2 border-r-2 border-b-2 border-white/40" />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default FourthSection
