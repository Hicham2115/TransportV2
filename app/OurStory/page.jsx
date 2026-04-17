"use client"

import React from "react"
import Image from "next/image"
import { motion } from "motion/react"
import TextType from "@/components/TextType"

import prado from "@/app/assets/ben-hessler-iXrme6sBsVE-unsplash.jpg"
import pavel1 from "@/app/assets/daniel-bertrams-1hcGR1xTGhg-unsplash.jpg"
import pavel2 from "@/app/assets/janosch-diggelmann-hL7rNgAUEBQ-unsplash.jpg"
import shkraba from "@/app/assets/pexels-bayram-yalcin-86843184-15071551.jpg"
import vito from "@/app/assets/pexels-georgesultan-11877372.jpg"
import sprinter from "@/app/assets/pexels-georgesultan-11877372.jpg"
import man48 from "@/app/assets/samuel-girven-NGbtPRrEujY-unsplash.jpg"

const TIMELINE_DATA = [
  {
    year: "1978",
    title: "Fondation de Transport Ouhaddou",
    description:
      "Sous l'initiative du feu Haj Mohamed Ouhaddou et de Youssef Ouhaddou, Transport Ouhaddou voit le jour à Zagora avec deux véhicules 4x4 Santana.",
    img: prado,
  },
  {
    year: "1986",
    title: "Expansion à Marrakech",
    description:
      "Ouverture de notre premier bureau à Marrakech, élargissant notre portée et nos services.",
    img: pavel2,
  },

  {
    year: "1990",
    title: "Diversification de la Flotte",
    description:
      "Ajout de minibus pour répondre aux besoins variés de nos clients.",
    img: sprinter,
  },
  {
    year: "2002",
    title: "Renforcement & Ouarzazate",
    description:
      "Acquisition de véhicules 36 et 48 places. Ouverture d'un bureau à Ouarzazate.",
    img: man48,
  },

  {
    year: "2012",
    title: "Véhicules de Luxe",
    description:
      "Investissement dans des Mercedes Vito et SsangYong pour un confort supérieur.",
    img: vito,
  },

  {
    year: "2018",
    title: "Connectivité & Digitalisation",
    description:
      "WIFI à bord et logiciel de gestion avancé pour des opérations optimisées.",
    img: shkraba,
  },

  {
    year: "2020",
    title: "Engagement Solidaire",
    description:
      "Soutien national durant la COVID-19 : transport de malades, médecins et vaccins.",
    img: pavel1,
  },
]

export default function OurStory() {
  return (
    <div className="min-h-screen overflow-hidden bg-transparent px-6 pt-32 pb-24 md:px-14">
      <div className="mx-auto max-w-6xl">
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
              Our Heritage
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
            A History of Excellence
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-24 flex flex-col items-center justify-center text-center"
          >
            <TextType
              text={[
                "Over four decades of passion, innovation, and service to Moroccan tourism.",
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

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute top-4 bottom-0 left-4 w-px bg-white/60 md:left-1/2 md:-translate-x-1/2" />

          {TIMELINE_DATA.map((item, index) => {
            const isEven = index % 2 === 0
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative mb-20 flex w-full flex-col items-center gap-8 md:mb-32 md:flex-row ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Center Node */}
                <div className="absolute top-0 left-4 z-10 h-8 w-8 -translate-x-1/2 rounded-full border-4 border-[#ffffff] bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] md:left-1/2 md:translate-y-0" />

                {/* Content Side */}
                <div
                  className={`flex w-full flex-col pl-12 md:w-1/2 md:pl-0 ${isEven ? "md:items-end md:pr-16 md:text-right" : "md:items-start md:pl-16 md:text-left"}`}
                >
                  <h3 className="text-[100px] leading-none font-black tracking-tighter text-white/10 select-none md:text-[140px]">
                    {item.year}
                  </h3>
                  <div className="z-20 -mt-16 md:-mt-20">
                    <span className="mb-2 inline-block font-mono text-xl font-semibold md:text-2xl">
                      {item.year}
                    </span>
                    <h4 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                      {item.title}
                    </h4>
                    <p className="text-gray-white/80 max-w-md text-base leading-relaxed md:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Image Side */}
                <div
                  className={`mt-4 w-full pl-12 md:mt-0 md:w-1/2 md:pl-0 ${isEven ? "md:pl-16" : "md:pr-16"}`}
                >
                  {item.img && (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                      className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
                    >
                      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#18181a]/80 via-transparent to-transparent" />
                      <div className="absolute inset-0 z-10 bg-blue-500/10 mix-blend-overlay" />
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
