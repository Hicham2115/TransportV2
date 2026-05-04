"use client"
import { ArrowRightToLine } from "lucide-react"
import React from "react"
import { motion } from "framer-motion"
import TextType from "@/components/TextType"
import Image from "next/image"
import img1 from "../../app/assets/Luxury_transport_fleet_Morocco_202605042304.jpeg"

function Hero() {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden font-sans"
      style={{
        backgroundImage: `url(${img1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-full px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="-mt-20 mb-10 flex flex-wrap items-center justify-center gap-2 px-2 text-center sm:gap-3"
        >
          <div className="glow-bar hidden sm:block" />
          <div className="glow-dot xs:block hidden" />

          <span className="glow-label text-xs tracking-wide sm:text-sm md:text-base">
            Transport
          </span>

          <div className="glow-dot xs:block hidden" />
          <div className="glow-bar hidden sm:block" />
        </motion.div>
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-6 max-w-full font-serif text-3xl leading-tight font-light text-white drop-shadow-[0_2px_40px_rgba(10,30,80,0.18)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
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

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          {/* Primary Button */}
          <button className="group relative inline-flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg px-6 py-3 text-white uppercase transition-all duration-300 ease-in-out focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-white sm:w-auto sm:px-8 sm:py-4">
            <span className="relative z-20 text-sm font-semibold sm:text-base">
              Request a quote
            </span>

            {/* shine effect */}
            <span className="absolute top-0 left-[-80%] z-10 h-full w-[50%] rotate-12 cursor-pointer bg-white/20 blur-lg transition-all duration-1000 group-hover:left-[130%]" />

            {/* borders */}
            <span className="absolute top-0 left-0 h-[20%] w-1/2 border-t-2 border-l-2 border-white/40" />
            <span className="absolute top-0 right-0 h-[60%] w-1/2 cursor-pointer border-t-2 border-r-2 border-white/40 transition-all duration-300 group-hover:h-[90%]" />
            <span className="absolute bottom-0 left-0 h-[60%] w-1/2 cursor-pointer border-b-2 border-l-2 border-white/40 transition-all duration-300 group-hover:h-[90%]" />
            <span className="absolute right-0 bottom-0 h-[20%] w-1/2 border-r-2 border-b-2 border-white/40" />
          </button>

          {/* Secondary Button */}
          <button className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-bold tracking-widest text-[#0A0A0D] uppercase shadow-lg transition hover:scale-105 sm:w-auto sm:px-8">
            Contact us
            <span className="cursor-pointer transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRightToLine />
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
