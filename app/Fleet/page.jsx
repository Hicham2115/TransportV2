"use client"

import React, { useState } from "react"
import { motion } from "motion/react"
import TextType from "@/components/TextType"

import img7 from "@/app/assets/EQUIPE1200.webp"
import img8 from "@/app/assets/national-cancer-institute-1c8sj2IO2I4-unsplash.jpg"
import img9 from "@/app/assets/nrd-aMmDIsdnUro-unsplash.jpg"
import busSide from "@/app/assets/Irizar_bus_side_view_202605041953.jpeg"
import busWhite1 from "@/app/assets/Irizar_coach_bus_white_background_202605041956.jpeg"
import busWhite2 from "@/app/assets/Irizar_coach_bus_white_background_202605042003.jpeg"
import miniVito from "@/app/assets/Mercedes_Vito_minibus_front_202605042009.jpeg"
import miniTransit from "@/app/assets/Ultra-realistic_4K_image_of_a_202605042032.jpeg"
import sprinter07 from "@/app/assets/Ultra-realistic_4K_studio_photo_of_202605042038.jpeg"
import sprinter17 from "@/app/assets/Mercedes_Sprinter_minibus_side_view_202605042152.jpeg"
import sprinter20 from "@/app/assets/Mercedes_Sprinter_minibus_side_view_202605042155.jpeg"
import pajero from "@/app/assets/Mitsubishi_4x4_SUV_black_202605042156.jpeg"
import landCruiser from "@/app/assets/Toyota_Land_Cruiser_4x4_isolated_202605042200.jpeg"
import prado from "@/app/assets/Toyota_Prado_4x4_SUV_202605042202.jpeg"
import Image from "next/image"
import { Car, Warehouse, Fuel, Wrench, RadioTower, UserCog } from "lucide-react"
import img11 from "../../app/assets/jahanzeb-ahsan-UTIoG2pJVfA-unsplash.jpg"
import { ArrowRightToLine } from "lucide-react"

const SERVICES_DATA = [
  {
    category: "Bus",
    description: "Grande capacité pour vos déplacements de groupe",
    items: [
      {
        title: "30 Places",
        desc: "Idéal pour les groupes de taille moyenne, ce car compact allie maniabilité et confort. Parfait pour les excursions de journée, transferts d'aéroport et circuits touristiques.",
        img: busSide.src,
      },
      {
        title: "40 Places",
        desc: "Un équilibre parfait entre capacité et flexibilité. Ses sièges ergonomiques et son espace généreux en font le choix idéal pour les séminaires d'entreprise et voyages organisés.",
        img: busWhite1.src,
      },
      {
        title: "50 Places",
        desc: "Conçu pour les grands groupes exigeants, ce car spacieux offre une expérience de voyage premium. Climatisation performante, sièges inclinables pour les longs trajets.",
        img: busWhite2.src,
      },
      {
        title: "54 Places",
        desc: "Notre fleuron pour les déplacements de grande envergure. Capacité maximale avec confort optimal — idéal pour les voyages longue distance et événements à travers tout le royaume.",
        img: busWhite2.src,
      },
    ],
  },
  {
    category: "Minibus",
    description: "Confort et élégance pour les petits groupes",
    items: [
      {
        title: "Mercedes Vito",
        desc: "Discret, élégant et agile — idéal pour les transferts VIP et les petits groupes exigeant intimité et confort.",
        img: miniVito.src,
      },
      {
        title: "Ford Transit",
        desc: "Spacieux et modulable, le Ford Transit réunit les groupes intermédiaires dans un cadre confortable pour tout type de déplacement.",
        img: miniTransit.src,
      },
    ],
  },
  {
    category: "Mercedes Sprinter",
    description: "Polyvalence et prestige pour chaque mission",
    items: [
      {
        title: "07 Places",
        desc: "La configuration VIP par excellence — sept passagers dans un espace privatif digne d'un premier rang.",
        img: sprinter07.src,
      },
      {
        title: "17 Places",
        desc: "Le juste milieu entre intimité et capacité, parfait pour les excursions et les transferts de groupes.",
        img: sprinter17.src,
      },
      {
        title: "20 Places",
        desc: "Convivialité maximale sans concession sur le confort — pour les séminaires, team-buildings et circuits organisés.",
        img: sprinter20.src,
      },
    ],
  },
  {
    category: "4WD · 4×4",
    description: "L'aventure et le luxe, sans compromis",
    items: [
      {
        title: "Mitsubishi Pajero",
        desc: "Robuste et infatigable, le Pajero dompte chaque terrain avec une assurance légendaire.",
        img: pajero.src,
      },
      {
        title: "Toyota Land Cruiser",
        desc: "L'icône du tout-terrain — puissance, fiabilité et prestige réunis pour vos aventures les plus ambitieuses.",
        img: landCruiser.src,
      },
      {
        title: "Toyota Prado",
        desc: "Alliant luxe et performance off-road, le Prado redéfinit l'aventure avec une élégance sans égale.",
        img: prado.src,
      },
    ],
  },
]

const SERVICES_DATA2 = [
  {
    category: "Driver Health & Safety Standards",
    description:
      "We ensure the highest level of safety, professionalism, and reliability through strict medical and performance monitoring of all our drivers.",
    items: [
      {
        title: "Annual Medical Monitoring",
        desc: "Each driver undergoes comprehensive health monitoring, including medical check-ups, physical evaluations, and preventive care support. Regular screenings ensure long-term reliability and safety.",
        img: img8.src,
      },
      {
        title: "Enhanced Vision Testing",
        desc: "Vision and reflex tests are regularly scheduled to guarantee maximum alertness and safe driving performance, in full compliance with road safety standards.",
        img: img9.src,
      },
      {
        title: "Professionalism & Excellence",
        desc: "Our drivers maintain a premium standard of professionalism through proper appearance, respectful behavior, discretion, courtesy, and strong customer service values.",
        img: img7.src,
      },
    ],
  },
]

export default function Excursions() {
  const [activeArticle, setActiveArticle] = useState(0)

  return (
    <div className="relative z-10 min-h-screen overflow-hidden bg-transparent">
      <div className="">
        {/* HEADER */}
        <div
          className="relative flex min-h-140 flex-col items-center justify-center overflow-hidden font-sans"
          style={{
            backgroundImage: `url(${img11.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />

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
                Our Premium Fleet
              </span>

              <div className="glow-dot xs:block hidden" />
              <div className="glow-bar hidden sm:block" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto mb-6 max-w-full font-serif text-3xl leading-tight font-light text-white drop-shadow-[0_2px_40px_rgba(10,30,80,0.18)] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              Prestige of Our Fleet, Our Drivers' Expertise
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto mb-5 h-[2px] w-16 bg-gradient-to-r from-transparent via-white/70 to-transparent"
            />

            <TextType
              text={[
                "At Transport Ouhaddou, we constantly invest in acquiring new vehicles to strengthen our fleet and maintain our leading position. Our drivers benefit from rigorous medical monitoring, guaranteeing impeccable service. Furthermore, our modern equipment and well-equipped garages perfectly complement our commitment to providing quality service.",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              loop={false}
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
              className="mx-auto w-200 max-w-full font-serif text-[clamp(1rem,2.2vw,1.22rem)] leading-relaxed font-light text-white italic"
            />
          </div>
        </div>
        <div className="px-12">
          {/* SERVICES */}
          <motion.div
            className="mt-37 space-y-14"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {SERVICES_DATA.map((section, sectionIdx) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 + sectionIdx * 0.1 }}
                className="mb-20"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="mx-auto mt-6 max-w-full font-serif text-2xl leading-tight font-light text-brand-red drop-shadow-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl"
                >
                  {section.category}
                </motion.h1>
                {/* Section Description */}
                <div className="mt-10 mb-10">
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    {section.description}
                  </p>
                </div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item, itemIdx) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.2 + itemIdx * 0.1 }}
                      whileHover={{ y: -10 }}
                      className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl"
                    >
                      {/* Side Red Accent */}
                      <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-red-600 via-red-500 to-transparent" />

                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Floating Badge Effect */}
                        <div className="absolute bottom-4 left-4 rounded-full border border-white/40 bg-white/80 px-4 py-1 text-xs font-medium text-black shadow-md backdrop-blur-md">
                          Premium Service
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 pl-8">
                        <h4 className="text-lg font-semibold text-black transition-colors duration-300 group-hover:text-red-600">
                          {item.title}
                        </h4>

                        <p className="mt-3 text-sm leading-relaxed text-gray-600">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mt-37 space-y-14"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mt-6 max-w-full font-serif text-2xl leading-tight font-light text-brand-red drop-shadow-[0_2px_40px_rgba(10,30,80,0.18)] drop-shadow-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl"
            >
              Medical Monitoring & Professional Requirements
            </motion.h1>
            {SERVICES_DATA2.map((section, sectionIdx) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 + sectionIdx * 0.1 }}
                className="mb-20"
              >
                {/* Section Header */}
                <div className="mb-10 text-center">
                  <h3 className="text-2xl font-semibold text-black md:text-3xl">
                    {section.category}
                  </h3>

                  <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
                    {section.description}
                  </p>
                </div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item, itemIdx) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.2 + itemIdx * 0.1 }}
                      whileHover={{ y: -10 }}
                      className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl"
                    >
                      {/* Left Red Accent */}
                      <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-red-600 via-red-500 to-transparent" />

                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Floating Tag */}
                        <div className="absolute bottom-4 left-4 rounded-full border border-white/40 bg-white/80 px-4 py-1 text-xs font-medium text-black shadow-md backdrop-blur-md">
                          Premium Service
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 pl-8">
                        <h4 className="text-lg font-semibold text-black transition-colors duration-300 group-hover:text-red-600">
                          {item.title}
                        </h4>

                        <p className="mt-3 text-sm leading-relaxed text-gray-600">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* MAINTENANCE & INFRASTRUCTURE SECTION */}
          <motion.section
            className="mt-32 mb-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Header */}
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase">
                Infrastructure & Maintenance
              </p>

              <h2 className="mb-4 text-3xl font-bold text-black md:text-5xl">
                Premium Maintenance,{" "}
                <span className="text-brand-gold">Total Availability</span>
              </h2>

              <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
                Integrated workshops, certified teams, and 24/7 logistics to
                keep our fleet impeccable, everywhere in Morocco.
              </p>
            </motion.div>

            {/* Cards Grid */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Card Base Style */}
              {[
                {
                  icon: <Car size={24} className="text-red-600" />,
                  title: "Recent Vehicles",
                  desc: "A continuously renewed fleet, with an average age under 4 years to guarantee reliability and comfort.",
                },
                {
                  icon: <Warehouse size={24} className="text-red-600" />,
                  title: "Large Garage in Marrakech",
                  desc: "20,000 m² of specialized workshops (mechanics, bodywork, painting, electricity, tires) and state-of-the-art equipment.",
                  span: "md:col-span-2",
                },
                {
                  icon: <Fuel size={24} className="text-red-600" />,
                  title: "Integrated Diesel Station",
                  desc: "Secure on-site refueling to optimize availability and reduce downtime.",
                },
                {
                  icon: <Wrench size={24} className="text-red-600" />,
                  title: "Regional Garages",
                  desc: "Presence in Agadir and Ouarzazate for rapid coverage and local follow-up.",
                },
                {
                  icon: <RadioTower size={24} className="text-red-600" />,
                  title: "Assistance Branches",
                  desc: "Operational branches in Casablanca, Agadir, Ouarzazate, Zagora, and Erfoud.",
                },
                {
                  icon: <UserCog size={24} className="text-red-600" />,
                  title: "24/7 Technical Team",
                  desc: "Mechanics available day and night, with a mobile intervention unit throughout Morocco.",
                  span: "md:col-span-2 lg:col-span-3",
                },
              ].map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -8 }}
                  className={`group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-7 shadow-sm transition-all duration-500 hover:shadow-2xl ${card.span || ""}`}
                >
                  {/* Left Accent Line */}
                  <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-red-600 via-red-500 to-transparent" />

                  {/* Icon */}
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-red-100 bg-red-50 transition-all duration-300 group-hover:scale-110">
                      {card.icon}
                    </div>

                    <h3 className="text-lg font-semibold text-black transition-colors duration-300 group-hover:text-red-600">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-gray-600">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
