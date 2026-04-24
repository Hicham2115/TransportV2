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

import img7 from "@/app/assets/EQUIPE1200.webp"
import img8 from "@/app/assets/national-cancer-institute-1c8sj2IO2I4-unsplash.jpg"
import img9 from "@/app/assets/nrd-aMmDIsdnUro-unsplash.jpg"
import Image from "next/image"
import { Car, Warehouse, Fuel, Wrench, RadioTower, UserCog } from "lucide-react"
import img11 from "../../app/assets/jahanzeb-ahsan-UTIoG2pJVfA-unsplash.jpg"
import { ArrowRightToLine } from "lucide-react"

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
                  Discover Our Luxury Vehicles
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
