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
import img11 from "../../app/assets/jose-de-queiroz-omHANMySs_8-unsplash.jpg"
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
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mt-6 max-w-full font-serif text-2xl leading-tight font-light text-brand-red drop-shadow-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl"
            >
              Discover Our Luxury Vehicles
            </motion.h1>
            {SERVICES_DATA.map((section, sectionIdx) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.1 + sectionIdx * 0.1 }}
              >
                <div className="mb-8">
                  <p className="mt-1 text-sm text-black/90">
                    {section.description}
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                  {section.items.map((item, itemIdx) => (
                    <motion.div
                      key={item.title}
                      className="w-full items-start overflow-hidden rounded-2xl border border-black bg-[#f3abab13] md:w-[48%] md:items-center lg:w-[30%]"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.2 + itemIdx * 0.1 }}
                      whileHover={{ scale: 1.03, y: -6 }}
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={item.img}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>

                      <div className="p-5">
                        <h4 className="font-semibold text-black">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm text-black/90">
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
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-black">
                    {section.category}
                  </h3>
                  <p className="mt-1 text-sm text-black/90">
                    {section.description}
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                  {section.items.map((item, itemIdx) => (
                    <motion.div
                      key={item.title}
                      className="w-full items-start overflow-hidden rounded-2xl border border-black bg-[#f3abab13] md:w-[48%] md:items-center lg:w-[30%]"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: 0.2 + itemIdx * 0.1 }}
                      whileHover={{ scale: 1.03, y: -6 }}
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={item.img}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>

                      <div className="p-5">
                        <h4 className="font-semibold text-black">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm text-black/90">
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
            <motion.div
              className="mb-14 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="mb-2 text-xs font-semibold tracking-[0.2em] uppercase">
                Infrastructure & Maintenance
              </p>
              <h2 className="mb-2 text-3xl font-bold text-brand-red drop-shadow-sm md:text-4xl">
                Premium Maintenance, Total Availability
              </h2>
              <p className="md:text-md mx-auto max-w-2xl text-base font-light text-black/90">
                Integrated workshops, certified teams, and 24/7 logistics to
                keep our fleet impeccable, everywhere in Morocco.
              </p>
            </motion.div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <motion.div
                className="flex flex-col gap-2 rounded-2xl border border-[#18181a4b] bg-[#ef6f6f1e] p-7 shadow-xl transition-all hover:shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0, delay: 0.1 }}
                // whileHover={{ scale: 1.03, y: -6 }}
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-red">
                    <Car size={24} className="text-black" />
                  </span>
                  <span className="text-lg font-bold text-black">
                    Recent Vehicles
                  </span>
                </div>
                <p className="text-sm text-black">
                  A continuously renewed fleet, with an average age under 4
                  years to guarantee reliability and comfort.
                </p>
              </motion.div>
              {/* Card 2 */}
              <motion.div
                className="flex flex-col gap-2 rounded-2xl border border-[#18181a4b] bg-[#ef6f6f1e] p-7 shadow-xl transition-all hover:shadow-2xl md:col-span-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0, delay: 0.2 }}
                // whileHover={{ scale: 1.03, y: -6 }}
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-red">
                    <Warehouse size={24} className="text-black" />
                  </span>
                  <span className="text-lg font-bold text-black">
                    Large Garage in Marrakech
                  </span>
                </div>
                <p className="text-sm text-black">
                  20,000 m² of specialized workshops (mechanics, bodywork,
                  painting, electricity, tires) and state-of-the-art equipment.
                </p>
              </motion.div>
              {/* Card 3 */}
              <motion.div
                className="flex flex-col gap-2 rounded-2xl border border-[#18181a4b] bg-[#ef6f6f1e] p-7 shadow-xl transition-all hover:shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0, delay: 0.3 }}
                // whileHover={{ scale: 1.03, y: -6 }}
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-red">
                    <Fuel size={24} className="text-black" />
                  </span>
                  <span className="text-lg font-bold text-black">
                    Integrated Diesel Station
                  </span>
                </div>
                <p className="text-sm text-black">
                  Secure on-site refueling to optimize availability and reduce
                  downtime.
                </p>
              </motion.div>
              {/* Card 4 */}
              <motion.div
                className="flex flex-col gap-2 rounded-2xl border border-[#18181a4b] bg-[#ef6f6f1e] p-7 shadow-xl transition-all hover:shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0, delay: 0.4 }}
                // whileHover={{ scale: 1.03, y: -6 }}
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-red">
                    <Wrench size={24} className="text-black" />
                  </span>
                  <span className="text-lg font-bold text-black">
                    Regional Garages
                  </span>
                </div>
                <p className="text-sm text-black">
                  Presence in Agadir and Ouarzazate for rapid coverage and local
                  follow-up.
                </p>
              </motion.div>
              {/* Card 5 */}
              <motion.div
                className="flex flex-col gap-2 rounded-2xl border border-[#18181a4b] bg-[#ef6f6f1e] p-7 shadow-xl transition-all hover:shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0, delay: 0.5 }}
                // whileHover={{ scale: 1.03, y: -6 }}
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-red">
                    <RadioTower size={24} className="text-black" />
                  </span>
                  <span className="text-lg font-bold text-black">
                    Assistance Branches
                  </span>
                </div>
                <p className="text-sm text-black">
                  Operational branches in Casablanca, Agadir, Ouarzazate,
                  Zagora, and Erfoud.
                </p>
              </motion.div>
              {/* Card 6 */}
              <motion.div
                className="flex flex-col gap-2 rounded-2xl border border-[#18181a4b] bg-[#ef6f6f1e] p-7 shadow-xl transition-all hover:shadow-2xl md:col-span-3"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0, delay: 0.6 }}
                // whileHover={{ scale: 1.03, y: -6 }}
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-red">
                    <UserCog size={24} className="text-black" />
                  </span>
                  <span className="text-lg font-bold text-black">
                    24/7 Technical Team
                  </span>
                </div>
                <p className="text-sm text-black">
                  Mechanics available day and night, with a mobile intervention
                  unit throughout Morocco.
                </p>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
