"use client"
import React from "react"

import img3 from "@/app/assets/pexels-shkrabaanthony-7144212.jpg"
import Image from "next/image"
import { motion } from "framer-motion"
import { CalendarCheck2, MapPinCheckInside, ShieldCheck } from "lucide-react"

function ThirdSection() {
  return (
    <div className="relative mt-40 flex flex-col gap-20 px-6 font-serif md:px-20">
      {/* TOP SECTION (TEXT + IMAGE) */}
      <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-between">
        {/* LEFT SIDE */}
        <div className="flex w-full flex-col md:w-1/2">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4"
          >
            <div className="h-14 w-[2px] rounded-full bg-white" />
            <h2 className="text-3xl font-bold tracking-wide text-white">
              Why Us
            </h2>
          </motion.div>

          {/* Heading */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 text-4xl leading-snug font-semibold text-white md:text-5xl"
          >
            In a World
            <br />
            That Never Stops Moving,
            <br />
            <span className="text-white/90">We Keep Your Journey Smarter.</span>
          </motion.h3>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 max-w-md text-white"
          >
            Premium car rentals, seamless booking, and reliable transport
            solutions designed for comfort, speed, and flexibility.
          </motion.p>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="group relative w-full max-w-xl cursor-pointer overflow-hidden rounded-2xl md:w-1/2"
        >
          <div className="cursor-pointer transition-transform duration-500 group-hover:scale-105">
            <Image
              src={img3}
              alt="Car rental service"
              className="h-[520px] w-full object-cover [clip-path:polygon(10%_0%,100%_0%,100%_80%,90%_100%,0%_100%,0%_20%)]"
            />
          </div>

          {/* TEXT */}
          <div className="absolute right-0 bottom-0 left-0 translate-y-4 cursor-pointer p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <h3 className="text-[16px] font-bold text-white">
              Premium Car Rentals
            </h3>
            <p className="text-[12px] text-white/80">
              Luxury fleet, flexible booking, instant availability
            </p>
          </div>
        </motion.div>
      </div>

      {/* CARDS SECTION */}
      <div className="mb-20 flex flex-col gap-10 md:flex-row md:justify-center">
        {[
          {
            icon: <ShieldCheck className="h-6 w-6" />,
            title: "Trusted by Thousands of Drivers",
            desc: "Reliable car rental services trusted every day by individuals and businesses.",
            delay: 0,
          },
          {
            icon: <CalendarCheck2 className="h-6 w-6" />,
            title: "Smooth Booking & Pickup",
            desc: "Fast reservations and seamless pickup experience anywhere you go.",
            delay: 0.2,
          },
          {
            icon: <MapPinCheckInside className="h-6 w-6" />,
            title: "Smart Mobility Platform",
            desc: "Track and manage your rides in real time with smart tools.",
            delay: 0.4,
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: card.delay }}
            className="group relative w-full cursor-pointer md:w-1/3"
          >
            {/* Card */}
            <div className="relative h-full cursor-pointer rounded-2xl bg-[#18181a4b] p-6 backdrop-blur-xl transition-all duration-500 group-hover:bg-white/10">
              {/* Shine effect */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute top-0 -left-full h-full w-[200%] cursor-pointer bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="relative z-10 text-white">
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold">{card.title}</h3>

                {/* Text */}
                <p className="mt-2 text-sm text-white">{card.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ThirdSection
