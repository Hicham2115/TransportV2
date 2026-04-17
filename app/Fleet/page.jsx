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
    <div className="relative z-10 min-h-screen overflow-hidden bg-transparent px-6 pt-32 md:px-14">
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
            className="mx-auto mt-6 max-w-full font-serif text-2xl leading-tight font-light text-white drop-shadow-[0_2px_40px_rgba(10,30,80,0.18)] sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl"
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
                <p className="mt-1 text-sm text-white/90">
                  {section.description}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-8">
                {section.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.title}
                    className="w-full items-start overflow-hidden rounded-2xl border border-white/10 bg-[#18181a4b] md:w-[48%] md:items-center lg:w-[30%]"
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
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="mt-2 text-sm text-white/90">{item.desc}</p>
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
            className="mx-auto mt-6 max-w-full font-serif text-2xl leading-tight font-light text-white drop-shadow-[0_2px_40px_rgba(10,30,80,0.18)] sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl"
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
                <h3 className="text-2xl font-semibold text-white">
                  {section.category}
                </h3>
                <p className="mt-1 text-sm text-white/90">
                  {section.description}
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                {section.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.title}
                    className="w-full items-start overflow-hidden rounded-2xl border border-white/10 bg-[#18181a4b] md:w-[48%] md:items-center lg:w-[30%]"
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
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="mt-2 text-sm text-white/90">{item.desc}</p>
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
            <h2 className="mb-2 text-3xl font-bold text-white drop-shadow-sm md:text-4xl">
              Premium Maintenance, Total Availability
            </h2>
            <p className="md:text-md mx-auto max-w-2xl text-base font-light text-white/90">
              Integrated workshops, certified teams, and 24/7 logistics to keep
              our fleet impeccable, everywhere in Morocco.
            </p>
          </motion.div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <motion.div
              className="flex flex-col gap-2 rounded-2xl border border-[#18181a4b] bg-[#18181a4b] p-7 shadow-xl transition-all hover:shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0, delay: 0.1 }}
              // whileHover={{ scale: 1.03, y: -6 }}
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <Car size={24} className="text-black" />
                </span>
                <span className="text-lg font-bold text-white">
                  Recent Vehicles
                </span>
              </div>
              <p className="text-sm text-white">
                A continuously renewed fleet, with an average age under 4 years
                to guarantee reliability and comfort.
              </p>
            </motion.div>
            {/* Card 2 */}
            <motion.div
              className="flex flex-col gap-2 rounded-2xl border border-[#18181a4b] bg-[#18181a4b] p-7 shadow-xl transition-all hover:shadow-2xl md:col-span-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0, delay: 0.2 }}
              // whileHover={{ scale: 1.03, y: -6 }}
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <Warehouse size={24} className="text-black" />
                </span>
                <span className="text-lg font-bold text-white">
                  Large Garage in Marrakech
                </span>
              </div>
              <p className="text-sm text-white">
                20,000 m² of specialized workshops (mechanics, bodywork,
                painting, electricity, tires) and state-of-the-art equipment.
              </p>
            </motion.div>
            {/* Card 3 */}
            <motion.div
              className="flex flex-col gap-2 rounded-2xl border border-[#18181a4b] bg-[#18181a4b] p-7 shadow-xl transition-all hover:shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0, delay: 0.3 }}
              // whileHover={{ scale: 1.03, y: -6 }}
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <Fuel size={24} className="text-black" />
                </span>
                <span className="text-lg font-bold text-white">
                  Integrated Diesel Station
                </span>
              </div>
              <p className="text-sm text-white">
                Secure on-site refueling to optimize availability and reduce
                downtime.
              </p>
            </motion.div>
            {/* Card 4 */}
            <motion.div
              className="flex flex-col gap-2 rounded-2xl border border-[#18181a4b] bg-[#18181a4b] p-7 shadow-xl transition-all hover:shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0, delay: 0.4 }}
              // whileHover={{ scale: 1.03, y: -6 }}
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <Wrench size={24} className="text-black" />
                </span>
                <span className="text-lg font-bold text-white">
                  Regional Garages
                </span>
              </div>
              <p className="text-sm text-white">
                Presence in Agadir and Ouarzazate for rapid coverage and local
                follow-up.
              </p>
            </motion.div>
            {/* Card 5 */}
            <motion.div
              className="flex flex-col gap-2 rounded-2xl border border-[#18181a4b] bg-[#18181a4b] p-7 shadow-xl transition-all hover:shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0, delay: 0.5 }}
              // whileHover={{ scale: 1.03, y: -6 }}
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <RadioTower size={24} className="text-black" />
                </span>
                <span className="text-lg font-bold text-white">
                  Assistance Branches
                </span>
              </div>
              <p className="text-sm text-white">
                Operational branches in Casablanca, Agadir, Ouarzazate, Zagora,
                and Erfoud.
              </p>
            </motion.div>
            {/* Card 6 */}
            <motion.div
              className="flex flex-col gap-2 rounded-2xl border border-[#18181a4b] bg-[#18181a4b] p-7 shadow-xl transition-all hover:shadow-2xl md:col-span-3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0, delay: 0.6 }}
              // whileHover={{ scale: 1.03, y: -6 }}
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-blue-700">
                  <UserCog size={24} className="text-black" />
                </span>
                <span className="text-lg font-bold text-white">
                  24/7 Technical Team
                </span>
              </div>
              <p className="text-sm text-white">
                Mechanics available day and night, with a mobile intervention
                unit throughout Morocco.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
