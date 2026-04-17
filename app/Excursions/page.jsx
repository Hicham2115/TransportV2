"use client"

import React from "react"
import { motion } from "motion/react"
import TextType from "@/components/TextType"

const SERVICES_DATA = [
  {
    category: "Airport Transfers",
    description: "A premium service for your arrivals and departures.",
    items: [
      {
        title: "Airport Meet & Greet",
        desc: "Whether you arrive in Marrakech, Casablanca, Tangier, or Agadir, our team welcomes you upon arrival.",
        img: "https://www.transportouhaddou.com/images/pages/excursions/pradocroisiere1920.webp",
      },
      {
        title: "Hotel Transfers",
        desc: "We drive you directly to your hotel, riad, or any other destination, ensuring a smooth ride.",
        img: "https://www.transportouhaddou.com/images/pages/transport/sprintershow1920.jpg",
      },
    ],
  },
  {
    category: "Excursions around Marrakech",
    description: "Discover the hidden gems surrounding the Red City.",
    items: [
      {
        title: "Essaouira",
        desc: "Known for its UNESCO-listed medina and artistic vibe, Essaouira is a must-visit for culture and beach lovers.",
        img: "https://www.transportouhaddou.com/images/pages/excursions/essaouira-port.jpg",
      },
      {
        title: "Agadir",
        desc: "With golden beaches and a relaxed atmosphere, Agadir is perfect for combining relaxation and discovery.",
        img: "https://www.transportouhaddou.com/images/pages/excursions/Agadir.jpg",
      },
      {
        title: "Ouzoud Waterfalls",
        desc: "Enjoy an impressive natural setting, admire the waterfalls, and take a boat ride at the foot of the cascades.",
        img: "https://www.transportouhaddou.com/images/pages/excursions/ouzoud.jpg",
      },
    ],
  },
  {
    category: "Tours Across Morocco",
    description: "Embark on an unforgettable journey across the country.",
    items: [
      {
        title: "The Imperial Cities",
        desc: "Discover the emblematic metropolises: Marrakech, Fes, Casablanca, Rabat, and Tangier.",
        img: "https://www.transportouhaddou.com/images/pages/excursions/DEST_MOROCCO_CHEFCHAOUEN.jpg",
      },
      {
        title: "The Sahara Desert",
        desc: "Dive into the heart of the Moroccan desert in Merzouga or M'Hamid El Ghizlane and sleep under the stars.",
        img: "https://www.transportouhaddou.com/images/pages/excursions/sahara.jpg",
      },
    ],
  },
  {
    category: "Special Events & VIP Logistics",
    description: "Official partner for the most prestigious events in Morocco.",
    items: [
      {
        title: "GITEX Africa Morocco",
        desc: "Complete logistics for Africa's largest tech exhibition. Connecting global innovators and investors.",
        img: "https://www.transportouhaddou.com/images/pages/excursions/GITEX.jpg",
      },
      {
        title: "Ferrari Cavalcade",
        desc: "Exclusive transport and escort for the annual gathering of Ferrari owners across spectacular Moroccan roads.",
        img: "https://www.transportouhaddou.com/images/pages/excursions/2023-Morocco-Cavalcade-at-night.jpg",
      },
      {
        title: "Marrakech International Film Festival",
        desc: "VIP transport services for the prestigious film festival, welcoming international stars since 2001.",
        img: "https://www.transportouhaddou.com/images/pages/excursions/ffmarrakech.png",
      },
    ],
  },
]

export default function Excursions() {
  return (
    <div className="relative z-10 min-h-screen  overflow-hidden bg-transparent px-6 pt-32 pb-24 md:px-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-2 px-2 text-center sm:gap-3"
          >
            <div className="glow-bar hidden sm:block" />
            <div className="glow-dot xs:block hidden" />

            <span className="glow-label text-xs tracking-wide sm:text-sm md:text-base">
              Discover Morocco
            </span>

            <div className="glow-dot xs:block hidden" />
            <div className="glow-bar hidden sm:block" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-2 mb-6 max-w-full font-serif text-xl leading-tight font-light text-white drop-shadow-[0_2px_40px_rgba(10,30,80,0.18)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Our Excursions
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-24 flex flex-col items-center justify-center text-center"
          >
            <TextType
              text={[
                " Transport Ouhaddou is dedicated to offering high-quality mobility services. Explore our premium tours, airport transfers, and VIP event logistics across Morocco.",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              loop={false}
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
              className="mx-auto text-lg italic md:text-xl"
            />
          </motion.div>{" "}
        </div>
        {/* Sections */}
        <div className=" space-y-32">
          {SERVICES_DATA.map((section, secIdx) => (
            <div
              key={secIdx}
              className="relative  border-t border-white/5 pt-12 md:border-t-0 md:border-l md:pt-0 md:pl-10"
            >
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 border-l-4 border-blue-500 pl-6 md:absolute md:top-8 md:-left-[54px] md:w-[350px] md:border-none md:pl-0"
              >
                <div className="absolute top-6 -right-10 hidden h-[2px] w-8 bg-blue-500 md:block" />
                <h2 className="mb-4  text-3xl font-black tracking-tight text-white md:text-4xl">
                  {section.category}
                </h2>
                <p className=" text-base text-gray-400 md:pr-12 md:text-lg">
                  {section.description}
                </p>
              </motion.div>

              {/* Grid map for items */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:pl-[300px] lg:grid-cols-3">
                {section.items.map((item, itemIdx) => (
                  <motion.div
                    key={itemIdx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: itemIdx * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative  overflow-hidden rounded-2xl border border-white/10 bg-[#18181a]/50 shadow-2xl backdrop-blur-sm cursor-pointer"
                  >
                    <div className="relative aspect-video  overflow-hidden bg-zinc-900">
                      <div className="absolute inset-0 z-10  bg-blue-500/10 opacity-100 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0 cursor-pointer" />
                      <div className="absolute inset-0 z-10  bg-gradient-to-t from-[#18181a] via-[#18181a]/20 to-transparent" />
                      <img
                        src={item.img}
                        alt={item.title}
                        className="h-full w-full transform  object-cover transition-transform duration-700 ease-out group-hover:scale-110 cursor-pointer"
                      />
                    </div>

                    <div className="relative z-20 -mt-12  p-6">
                      <h3 className="mb-3  text-xl font-bold text-white drop-shadow-md transition-colors group-hover:text-blue-400 cursor-pointer">
                        {item.title}
                      </h3>
                      <p className=" text-sm leading-relaxed text-gray-400">
                        {item.desc}
                      </p>
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
