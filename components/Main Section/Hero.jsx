"use client"
import { ArrowRightToLine } from "lucide-react"
import React from "react"
import { motion } from "framer-motion"
import TextType from "@/components/TextType"

function Hero() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden font-sans">
      {/* Animated Glow Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-3"
      >
        <div className="glow-bar" />
        <div className="glow-dot" />
        <span className="glow-label">Next Way Transport</span>
        <div className="glow-dot" />
        <div className="glow-bar" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-full px-8 py-20 text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="-mt-4 mb-6 font-serif text-[100px] leading-tight font-light text-white drop-shadow-[0_2px_40px_rgba(10,30,80,0.18)]"
        >
          THE BEST WAY TO TRAVEL ACROSS MOROCCO
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mb-5 h-[2px] w-16 bg-gradient-to-r from-transparent via-white/70 to-transparent"
        />

        {/* Subtitle */}

        <TextType
          text={[
            "Premium bus journeys across the country — safe, reliable, and designed for a smooth experience.",
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="_"
          loop={false}
          deletingSpeed={50}
          cursorBlinkDuration={0.5}
          className="mx-auto mb-10 max-w-full font-serif text-[clamp(1rem,2.2vw,1.22rem)] leading-relaxed font-light text-white italic"
        />
        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mb-10 max-w-full font-serif text-[clamp(1rem,2.2vw,1.22rem)] leading-relaxed font-light text-white italic"
        >
          
        </motion.p> */}

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button className="font-barlow group relative inline-flex cursor-pointer justify-center overflow-hidden rounded-lg border-solid px-8 py-4 text-center text-white uppercase outline-offset-4 transition-transform duration-300 ease-in-out focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-white">
            <span className="relative z-20 font-semibold">Request a quote</span>

            <span className="absolute top-0 left-[-75%] z-10 h-full w-[50%] rotate-12 bg-white/20 blur-lg transition-all duration-1000 ease-in-out group-hover:left-[125%]"></span>

            <span className="drop-shadow-3xl absolute top-0 left-0 block h-[20%] w-1/2 rounded-tl-lg border-t-2 border-l-2 border-[#D4EDF9] transition-all duration-300"></span>
            <span className="drop-shadow-3xl absolute top-0 right-0 block h-[60%] w-1/2 rounded-tr-lg border-t-2 border-r-2 border-[#D4EDF9] transition-all duration-300 group-hover:h-[90%]"></span>
            <span className="drop-shadow-3xl absolute bottom-0 left-0 block h-[60%] w-1/2 rounded-bl-lg border-b-2 border-l-2 border-[#D4EDF9] transition-all duration-300 group-hover:h-[90%]"></span>
            <span className="drop-shadow-3xl absolute right-0 bottom-0 block h-[20%] w-1/2 rounded-br-lg border-r-2 border-b-2 border-[#D4EDF9] transition-all duration-300"></span>
          </button>

          <button className="group flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-sm font-bold tracking-widest text-blue-900 uppercase shadow-lg transition hover:scale-105">
            Contact us
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRightToLine />
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
