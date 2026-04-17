"use client"

import React, { useState } from "react"
import { motion } from "motion/react"
import TextType from "@/components/TextType"

import img1 from "@/app/assets/Man52.jpg"
import img2 from "@/app/assets/Man48.jpg"
import img3 from "@/app/assets/nvcar.jpg"
import img4 from "@/app/assets/sprintershow1920.jpg"
import img5 from "@/app/assets/vito_1024.webp"
import img6 from "@/app/assets/PACKPRADO.jpg"

import Image from "next/image"
import { CalendarCheck2, MapPinCheckInside, ShieldCheck } from "lucide-react"

const SERVICES_DATA = [
  {
    category: "Harmonious Travel",
    description:
      "Robust and reliable coaches offering comfort and space for large groups, perfect for all types of transport missions.",
    items: [
      {
        title: "MAN Coaches – Large Capacity",
        desc: "Over 80 spacious coaches with 48 seats, designed for large groups. Ideal for long-distance journeys and excursions, combining comfort and safety.",
        img: img1.src,
      },
      {
        title: "MAN Minibuses – Space & Comfort",
        desc: "More than 10 luxury minibuses with 26 seats, featuring ergonomic seating and modern technology. Perfect for tours and group transfers.",
        img: img2.src,
      },
      {
        title: "Mercedes Vehicles – Flexibility & Comfort",
        desc: "Over 45 agile vehicles with 18 seats, ideal for small groups and local excursions, offering flexibility and a smooth travel experience.",
        img: img3.src,
      },
      {
        title: "Mercedes Sprinter – Elegance & Space",
        desc: "More than 30 elegant vans with 7 seats, perfect for luxury travel and VIP transfers, combining style with advanced features.",
        img: img4.src,
      },
      {
        title: "Toyota Land Cruiser – Off-Road Comfort",
        desc: "Over 100 powerful 4x4 vehicles with 5 seats, built for challenging terrains such as mountains and desert safaris, ensuring safety and performance.",
        img: img5.src,
      },
      {
        title: "Prado – Adventure & Comfort",
        desc: "Over 50 robust SUVs with 5 seats, designed for adventurous journeys and off-road excursions, combining durability with comfort.",
        img: img6.src,
      }
    ],
  },
]
export default function Excursions() {
  const [activeArticle, setActiveArticle] = useState(0)

  return (
    <div className="relative z-10 min-h-screen overflow-hidden bg-transparent px-6 pt-32 pb-24 md:px-14">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 text-sm tracking-widest text-white/60 uppercase"
          >
            <div className="glow-bar hidden sm:block" />
            <div className="glow-dot xs:block hidden" />

            <span className="glow-label text-xs tracking-wide sm:text-sm md:text-base">
              Our Premium Fleet
            </span>
            <div className="glow-bar hidden sm:block" />
            <div className="glow-dot xs:block hidden" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mb-6 max-w-full font-serif text-3xl leading-tight font-light text-white drop-shadow-[0_2px_40px_rgba(10,30,80,0.18)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Prestige of Our Fleet,
            <br />
            Our Drivers' Expertise
            <br />
          </motion.h1>

          <div className="mx-auto mt-6 max-w-3xl text-white/70">
            <TextType
              text={[
                "At Transport Ouhaddou, we constantly invest in acquiring new vehicles to strengthen our fleet and maintain our leading position. Our drivers benefit from rigorous medical monitoring, guaranteeing impeccable service. Furthermore, our modern equipment and well-equipped garages perfectly complement our commitment to providing quality service.",
              ]}
              typingSpeed={60}
              pauseDuration={1500}
              className="mx-auto mb-10 max-w-full font-serif text-[clamp(1rem,2.2vw,1.22rem)] leading-relaxed font-light text-white italic"
              showCursor
              cursorCharacter="_"
              loop={false}
              deletingSpeed={40}
            />
          </div>
        </div>

        {/* SERVICES */}
        <div className="mt-37 space-y-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-full font-serif text-2xl leading-tight font-light text-white drop-shadow-[0_2px_40px_rgba(10,30,80,0.18)] sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl"
          >
            Découvrez Nos Véhicules de Luxe
          </motion.h1>
          {SERVICES_DATA.map((section) => (
            <div key={section.category}>
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white">
                  {section.category}
                </h3>
                <p className="mt-1 text-sm text-white/90">
                  {section.description}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-8">
                {section.items.map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -8 }}
                    className="w-full items-start overflow-hidden rounded-2xl border border-white/10 bg-[#18181a4b] md:w-[48%] md:items-center lg:w-[30%]"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.img}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>

                    <div className="p-5">
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="mt-2 text-sm text-white/90">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
