"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import img1 from "@/app/assets/Man48.jpg"
import img2 from "@/app/assets/sprintershow1920.jpg"
import img3 from "@/app/assets/pradopalmerais.jpg"
import img4 from "@/app/assets/vito_1024.webp"
import img5 from "@/app/assets/kinglong.jpeg"
import img6 from "@/app/assets/nvcar.jpg"

const services = [
  {
    id: "01",
    title: "Man",
    description:
      "Autocars robustes et fiables, offrant confort et espace pour les groupes de grandes tailles, parfaits pour diverses missions de transport.",
    image: img1,
  },
  {
    id: "02",
    title: "Mercedes Sprinter ",
    description:
      "Plus de 80 autocars spacieux, parfaits pour les grands groupes, offrant confort et sécurité pour les longs trajets et excursions.",
    image: img2,
  },
  {
    id: "03",
    title: "Toyota Prado",
    description:
      "Plus de 10 minibus de luxe, offrant confort optimal avec sièges ergonomiques et technologies avancées, idéaux pour circuits touristiques et transferts.",
    image: img3,
  },
  {
    id: "04",
    title: "Mercedes Vito",
    description:
      "Plus de 45 véhicules agiles et confortables, parfaits pour petits groupes et excursions locales, offrant flexibilité et une expérience agréable.",
    image: img4,
  },
  {
    id: "05",
    title: "King Long",
    description:
      "Plus de 30 vans élégants pour voyages de luxe et transferts VIP, alliant style et fonctionnalités avancées.",
    image: img5,
  },
  {
    id: "06",
    title: "Mercedes Minibus",
    description:
      "Plus de 100 Toyota tout-terrain performants et sécurisés, conçus pour affronter les terrains difficiles lors d'excursions en montagne ou safaris dans le désert.",
    image: img6,
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
        <div className="absolute inset-0 bg-[#1a1c22]/80 backdrop-blur-xl"></div>
      </div>

      <div className="relative z-10 pb-20">
        <div className="flex flex-col gap-6 px-6 pt-20 md:flex-row md:items-center md:justify-between md:px-20">
          <h1 className="font-serif text-[30px] leading-tight font-light text-blue-400 drop-shadow-[0_2px_40px_rgba(10,30,80,0.18)]">
            LOGO NAME
          </h1>
          <div className="flex items-center gap-4">
            <div className="h-10 w-[2px] rounded-full bg-blue-400 md:h-14" />
            <h2 className="text-2xl font-bold tracking-wide text-blue-400 md:text-3xl">
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
                  <h3 className="text-md font-bold text-blue-300">
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
                      color: isActive ? "#ffffff" : "rgba(255,255,255,0.3)",
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex items-start gap-2 group-hover:text-white/60"
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
