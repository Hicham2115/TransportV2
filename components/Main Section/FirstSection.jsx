"use client"
import React from "react"
import img1 from "@/app/assets/pexels-pavel-danilyuk-8424931.jpg"
import img2 from "@/app/assets/pexels-pavel-danilyuk-8425054.jpg"
import img3 from "@/app/assets/pexels-pavel-danilyuk-8425057.jpg"
import img4 from "@/app/assets/pexels-mizunokozuki-13802141.jpg"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  CalendarCheck2,
  CarFront,
  MapPinCheckInside,
  ShieldCheck,
} from "lucide-react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

function FirstSection() {
  return (
    <div className="relative mb-20 flex flex-col items-center px-6 font-serif md:px-20">
      <div className="flex w-full flex-col gap-10 md:flex-row md:items-start md:justify-between">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="h-14 w-[2px] rounded-full bg-white" />
              <h2 className="text-3xl font-bold tracking-wide text-white">
                About Us
              </h2>
            </div>
            <div className="aspect-square w-40 md:ml-20 md:w-60 lg:w-72">
              <DotLottieReact
                src="https://lottie.host/e0d3531c-4542-4bd8-b091-a7c96c0559bc/vzBBiRTBKX.lottie"
                loop
                autoplay
              />
            </div>
          </div>
        </motion.div>
        {/* RIGHT SIDE */}
        <div className="space-y-6 md:w-1/2">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl leading-snug font-semibold text-white md:text-3xl"
          >
            At Next Way Transport, we move Morocco with safe, comfortable, and
            reliable journeys that connect people and places across the country.
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg leading-relaxed text-white italic"
          >
            With strong experience in passenger transport, we provide
            comfortable and efficient bus travel solutions across cities and
            regions. Our mission is to simplify mobility through safety,
            punctuality, and quality service — helping people travel with
            confidence every day.
          </motion.p>
        </div>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="mt-10 flex w-full flex-col justify-center gap-2 md:flex-row">
        {/* Image 1 */}
        {/* Image 1 */}
        <div className="group relative w-80 overflow-hidden rounded-2xl shadow-md md:w-100">
          <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
            <Image
              src={img1}
              alt="Image 1"
              className="h-full w-full cursor-pointer object-cover [clip-path:polygon(28px_0,100%_0,100%_100%,0_100%,0_38px)]"
            />
          </div>

          {/* Badge */}
          <span className="absolute top-2.5 right-2.5 z-10 rounded-full border border-white/30 bg-white/20 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
            Rentals
          </span>

          {/* Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 transition-opacity duration-500 [clip-path:polygon(28px_0,100%_0,100%_100%,0_100%,0_38px)] group-hover:opacity-100" />

          {/* Text */}
          <div className="absolute right-0 bottom-0 left-0 translate-y-3 p-3.5 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
            <h3 className="text-[15px] leading-snug font-bold text-white">
              Premium Car Rentals
            </h3>
            <p className="mt-0.5 text-[12px] text-white">
              Luxury fleet, flexible booking
            </p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="group relative w-80 overflow-hidden rounded-2xl shadow-md md:w-100">
          <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
            <Image
              src={img2}
              alt="Image 2"
              className="h-full w-full cursor-pointer object-cover"
            />
          </div>

          {/* Badge */}
          <span className="absolute top-2.5 right-2.5 z-10 rounded-full border border-white/30 bg-white/20 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
            Rentals
          </span>

          {/* Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 transition-opacity duration-500 [clip-path:polygon(28px_0,100%_0,100%_100%,0_100%,0_38px)] group-hover:opacity-100" />

          {/* Text */}
          <div className="absolute right-0 bottom-0 left-0 translate-y-3 p-3.5 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
            <h3 className="text-[15px] leading-snug font-bold text-white">
              Premium Car Rentals
            </h3>
            <p className="mt-0.5 text-[12px] text-white">
              Luxury fleet, flexible booking
            </p>
          </div>
        </div>

        {/* Image 3 */}
        <div className="group relative w-80 overflow-hidden rounded-2xl md:w-100">
          <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
            <Image
              src={img3}
              alt="Image 3"
              className="h-full w-full cursor-pointer object-cover [clip-path:polygon(0_0,100%_0,100%_calc(100%-38px),calc(100%-28px)_100%,0_100%)]"
            />
          </div>

          {/* Badge */}
          <span className="absolute top-2.5 right-2.5 z-10 rounded-full border border-white/30 bg-white/20 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
            Rentals
          </span>

          {/* Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 transition-opacity duration-500 [clip-path:polygon(28px_0,100%_0,100%_100%,0_100%,0_38px)] group-hover:opacity-100" />

          {/* Text */}
          <div className="absolute right-0 bottom-0 left-0 translate-y-3 p-3.5 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
            <h3 className="text-[15px] leading-snug font-bold text-white">
              Premium Car Rentals
            </h3>
            <p className="mt-0.5 text-[12px] text-white">
              Luxury fleet, flexible booking
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 mb-20 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl border border-white/30 p-4 sm:p-6"
        >
          <div className="relative flex h-12 w-12 items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-white/30" />
            <div className="absolute inset-[6px] rounded-full border border-white/15" />
            <ShieldCheck className="relative z-10 h-5 w-5 text-white/95" />
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <span className="text-base font-bold sm:text-lg">
              Trusted by Thousands of Drivers
            </span>

            <span className="text-sm text-white/80 sm:text-base">
              We provide reliable car rental and transport services trusted by
              individuals and businesses every day.
            </span>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-xl border border-white/30 p-4 sm:p-6"
        >
          <div className="relative flex h-12 w-12 items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-white/30" />
            <div className="absolute inset-[6px] rounded-full border border-white/15" />
            <CalendarCheck2 className="relative z-10 h-5 w-5 text-white/95" />
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <span className="text-base font-bold sm:text-lg">
              Smooth Booking & Hassle-Free Pickup
            </span>

            <span className="text-sm text-white/80 sm:text-base">
              Enjoy fast reservations, easy documentation, and seamless vehicle
              pickup wherever you need it.
            </span>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="rounded-xl border border-white/30 p-4 sm:p-6"
        >
          <div className="relative flex h-12 w-12 items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-white/30" />
            <div className="absolute inset-[6px] rounded-full border border-white/15" />
            <MapPinCheckInside className="relative z-10 h-5 w-5 text-white/95" />
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <span className="text-base font-bold sm:text-lg">
              Smart Mobility Platform
            </span>

            <span className="text-sm text-white/80 sm:text-base">
              Track, manage, and book your rides in real time with our simple
              and efficient digital system.
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FirstSection
