"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import img1 from "@/app/assets/Irizar_bus_side_view_202605041953.jpeg"
import img2 from "@/app/assets/Irizar_coach_bus_white_background_202605041956.jpeg"
import img5 from "@/app/assets/Irizar_coach_bus_white_background_202605042003.jpeg"

const services = [
  {
    id: "01",
    title: "30 Places",
    description:
      "Idéal pour les groupes de taille moyenne, ce car compact allie maniabilité et confort. Parfait pour les excursions de journée, transferts d'aéroport et circuits touristiques en ville comme en montagne.",
    image: img1,
  },
  {
    id: "02",
    title: "40 Places",
    description:
      "Un équilibre parfait entre capacité et flexibilité. Ses sièges ergonomiques et son espace généreux en font le choix idéal pour les sorties scolaires, séminaires d'entreprise et voyages organisés.",
    image: img2,
  },
  {
    id: "03",
    title: "50 Places",
    description:
      "Conçu pour les grands groupes exigeants, ce car spacieux offre une expérience de voyage premium. Climatisation performante, sièges inclinables et large rangement pour les longs trajets en toute sérénité.",
    image: img5,
  },
  {
    id: "04",
    title: "54 Places",
    description:
      "Notre fleuron pour les déplacements de grande envergure. Capacité maximale avec confort optimal — idéal pour les voyages longue distance, pèlerinages et événements sportifs à travers tout le royaume.",
    image: img5,
  },
]

function SecondSection() {
  const [activeItem, setActiveItem] = useState(services[0])

  return (
    <div className="relative mx-auto min-h-screen w-[95%] overflow-hidden text-white sm:w-[90%] sm:rounded-3xl md:w-full md:rounded-none">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${activeItem?.image?.src || activeItem?.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-2xl"></div>
      </div>

      <div className="relative z-10 pb-20">
        <div className="flex flex-col gap-6 px-6 pt-20 md:flex-row md:items-center md:justify-between md:px-20">
          <h1 className="font-serif text-[30px] leading-tight font-light text-brand-gold drop-shadow-[0_2px_40px_rgba(196,146,42,0.25)]">
            EXPLORE OUR BUSES
          </h1>
          <div className="flex items-center gap-4">
            <div className="h-10 w-[2px] rounded-full bg-brand-red md:h-14" />
            <h2 className="text-2xl font-bold tracking-wide text-white md:text-3xl">
              Our Services
            </h2>
          </div>
        </div>

        {/* Main interactive section */}
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 items-start gap-12 px-6 md:mt-20 md:grid-cols-2 md:gap-12 md:px-20">
          {/* Left Side: Image and paragraph */}
          <div className="flex flex-col gap-6 md:sticky md:top-32">
            <div className="relative h-56 w-[90%] max-w-md overflow-hidden bg-white/5 shadow-2xl [clip-path:polygon(10%_0%,100%_0%,100%_80%,90%_100%,0%_100%,0%_20%)] sm:w-80 md:h-64 md:w-full">
              {" "}
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={activeItem?.id}
                  src={activeItem?.image?.src || activeItem?.image}
                  alt={activeItem?.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover brightness-90"
                />
              </AnimatePresence>
            </div>

            <div className="h-auto w-[90%] max-w-md overflow-hidden sm:w-80 md:h-[120px] md:w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem?.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col gap-2"
                >
                  <h3 className="text-md font-bold text-brand-gold">
                    {activeItem?.title}
                  </h3>
                  <p className="text-sm leading-relaxed font-light text-gray-200">
                    {activeItem?.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: Navigation List */}
          <div className="flex flex-col gap-0 border-l border-white/10 pl-4 md:pl-8">
            {services.map((service) => {
              const isActive = activeItem.id === service.id
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveItem(service)}
                  onClick={() => setActiveItem(service)}
                  className="group relative cursor-pointer border-b border-white/10 py-6 last:border-0"
                >
                  <motion.div
                    animate={{
                      x: isActive ? 10 : 0,
                      color: isActive ? "#ffffff" : "rgba(255,255,255,0.25)",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex cursor-pointer items-start gap-2 group-hover:text-white/60"
                  >
                    <h2 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                      {service.title}
                    </h2>
                    <span className="mt-1 text-xs font-semibold md:mt-2 md:text-sm">
                      [{service.id}]
                    </span>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondSection
