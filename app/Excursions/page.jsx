"use client"

import React, { useState } from "react"
import { motion } from "motion/react"
import TextType from "@/components/TextType"

import img1 from "../assets/airportvoiturefmi1920.jpg"
import img2 from "../assets/VITO1920.jpg"
import img3 from "../assets/vitoairport.jpg"
import img4 from "@/app/assets/DEST_MOROCCO_CHEFCHAOUEN.jpg"
import Image from "next/image"
import { CalendarCheck2, MapPinCheckInside, ShieldCheck } from "lucide-react"
import img5 from "@/app/assets/sahara.jpg"
import img6 from "@/app/assets/amanar.jpg"
import img7 from "@/app/assets/buggy.jpg"
import img8 from "@/app/assets/ballon.jpg"

const SERVICES_DATA = [
  // {
  //   category: "Airport Transfers",
  //   description: "A premium service for your arrivals and departures.",
  //   items: [
  //     {
  //       title: "Airport Meet & Greet",
  //       desc: "Whether you arrive in Marrakech, Casablanca, Tangier, or Agadir, our team welcomes you upon arrival.",
  //       img: "https://www.transportouhaddou.com/images/pages/excursions/pradocroisiere1920.webp",
  //     },
  //     {
  //       title: "Hotel Transfers",
  //       desc: "We drive you directly to your hotel, riad, or any other destination, ensuring a smooth ride.",
  //       img: "https://www.transportouhaddou.com/images/pages/transport/sprintershow1920.jpg",
  //     },
  //   ],
  // },
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
      {
        title:
          "Asni: Tranquility and Nature at the Foot of the Atlas Mountains",
        desc: "Discover verdant landscapes, sparkling rivers, and picturesque Berber villages, while exploring local culture and enjoying hiking.",
        img: "https://www.transportouhaddou.com/images/pages/excursions/asnii.jpg",
      },
      {
        title: "Ouirgane: A Haven of Peace in the Heart of the Atlas Mountains",
        desc: "Known for its clean air and peaceful atmosphere, Ouirgane is an ideal destination for those looking to escape the hustle and bustle of the city and reconnect with nature.",
        img: "https://www.transportouhaddou.com/images/pages/excursions/ouirganee.jpg",
      },
    ],
  },
  // {
  //   category: "Tours Across Morocco",
  //   description: "Embark on an unforgettable journey across the country.",
  //   items: [
  //     {
  //       title: "The Imperial Cities",
  //       desc: "Discover Marrakech, Fes, Casablanca, Rabat, and Tangier.",
  //       img: "https://www.transportouhaddou.com/images/pages/excursions/DEST_MOROCCO_CHEFCHAOUEN.jpg",
  //     },
  //     {
  //       title: "The Sahara Desert",
  //       desc: "Experience Merzouga or M'Hamid El Ghizlane and sleep under the stars.",
  //       img: "https://www.transportouhaddou.com/images/pages/excursions/sahara.jpg",
  //     },
  //   ],
  // },
  // {
  //   category: "VIP Events",
  //   description: "Official partner for prestigious events in Morocco.",
  //   items: [
  //     {
  //       title: "GITEX Africa Morocco",
  //       desc: "Full logistics for Africa's largest tech exhibition.",
  //       img: "https://www.transportouhaddou.com/images/pages/excursions/GITEX.jpg",
  //     },
  //     {
  //       title: "Ferrari Cavalcade",
  //       desc: "Exclusive transport for Ferrari owners across Morocco.",
  //       img: "https://www.transportouhaddou.com/images/pages/excursions/2023-Morocco-Cavalcade-at-night.jpg",
  //     },
  //     {
  //       title: "Marrakech Film Festival",
  //       desc: "VIP transport services for international stars since 2001.",
  //       img: "https://www.transportouhaddou.com/images/pages/excursions/ffmarrakech.png",
  //     },
  //   ],
  // },
]

const SERVICES_DATA2 = [
  {
    category: "Quad & Buggy Adventures",
    description:
      "Explore the wild landscapes around Marrakech by quad or buggy. An exciting adventure through desert trails and palm groves.",
    items: [
      {
        title: "Hot Air Balloon Ride",
        desc: "Admire the sunrise over the Atlas Mountains and lush valleys for unforgettable memories. A magical experience above Morocco.",
        img: img8.src,
      },
      {
        title: "Terres d’Amanar",
        desc: "Enjoy zip-lining, tree climbing, rock climbing, and hiking while relaxing in the heart of the Atlas Mountains.",
        img: img6.src,
      },
      {
        title: "Marrakech Film Festival",
        desc: "VIP transport services for international stars since 2001.",
        img: img7.src,
      },
    ],
  },
]

const ARTICLES_DATA = [
  {
    title: "Accueil à l'Aéroport",
    desc: "Que vous arriviez à l'aéroport de Marrakech, Casablanca, Tanger, Agadir ou tout autre aéroport au Maroc, notre équipe vous accueille dès votre arrivée.",
    img: img1.src,
  },
  {
    title: "Transferts vers votre Hébergement",
    desc: "Nous vous emmenons directement à votre hôtel, riad ou toute autre destination de votre choix, en veillant à ce que votre transfert soit aussi fluide que possible.",
    img: img2.src,
  },
  {
    title: "Transferts Retours",
    desc: "Pour votre départ, nous assurons votre transfert depuis votre hébergement jusqu'à l'aéroport, en veillant à ce que vous arriviez à temps pour vos formalités.",
    img: img3.src,
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
              Discover Morocco
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
            Our Excursions
          </motion.h1>

          <div className="mx-auto mt-6 max-w-3xl text-white/70">
            <TextType
              text={[
                "Transport Ouhaddou offers premium tours, transfers, and VIP logistics across Morocco.",
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

        {/* ARTICLES */}
        <div className="mt-28 grid gap-10 lg:grid-cols-[1fr_1.5fr_1fr]">
          {/* LEFT */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-[0.3em] text-white uppercase">
                Articles
              </p>
              <h2 className="mb-2 text-4xl leading-tight font-bold text-white sm:text-5xl">
                Latest <span className="text-blue-400">Articles</span>
              </h2>
            </div>
            <p className="mt-6 max-w-xs text-base text-white/90">
              Insights into modern transport across Morocco.
            </p>
          </div>

          {/* MAIN IMAGE */}
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-900/30 to-blue-400/10 shadow-xl">
            <motion.img
              key={ARTICLES_DATA[activeArticle].img}
              src={ARTICLES_DATA[activeArticle].img}
              className="aspect-[4/3] w-full scale-105 object-cover transition-transform duration-700 hover:scale-110"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1.01 }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent" />

            <div className="absolute right-0 bottom-0 left-0 p-7 text-white">
              <p className="mt-2 text-base leading-relaxed font-medium text-white/90 drop-shadow">
                {ARTICLES_DATA[activeArticle].desc}
              </p>
            </div>
          </div>

          {/* LIST */}
          <div className="flex flex-col gap-6">
            {ARTICLES_DATA.map((item, index) => (
              <button
                key={item.title}
                onMouseEnter={() => setActiveArticle(index)}
                className={`group text-left transition-all duration-300 ${index === activeArticle ? "scale-105" : "opacity-80"}`}
              >
                <div
                  className={`flex flex-col gap-1 border-b border-white/40 pb-4 ${index === activeArticle ? "border-b-2" : ""}`}
                >
                  <p
                    className={`text-lg font-semibold transition-colors duration-300 ${
                      index === activeArticle
                        ? "text-white"
                        : "text-white/60 group-hover:text-blue-300"
                    }`}
                  >
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-white/40 transition-colors duration-200 group-hover:text-blue-200">
                    {item.date}
                  </p>
                </div>
              </button>
            ))}
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
            Our Excursions
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
                    className="w-full items-start overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:w-[48%] md:items-center lg:w-[30%]"
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

        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-20 mb-6 max-w-full font-serif text-xl leading-tight font-light text-white drop-shadow-[0_2px_40px_rgba(10,30,80,0.18)] sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl"
          >
            Circuits à Travers le Maroc
          </motion.h1>

          <div className="mx-auto mt-6 max-w-3xl text-white/70">
            <TextType
              text={["Aventures inoubliables."]}
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

        {/* SECTION 1 */}
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* LEFT */}
          <div className="w-full md:w-1/2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Les Grandes Villes
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-sm text-white/90 sm:text-base md:max-w-lg"
            >
              Notre circuit vous fait découvrir les métropoles emblématiques du
              Maroc, chacune avec son ambiance et son patrimoine unique. À
              Marrakech, explorez la médina animée, les souks colorés, et le
              jardin Majorelle. À Fès, perdez-vous dans les ruelles de la plus
              ancienne médina du monde et visitez l'université Al Quaraouiyine.
              Casablanca vous impressionnera par la mosquée Hassan II et son
              architecture moderne, tandis que Rabat vous charmera avec la tour
              Hassan et le mausolée Mohammed V. Tanger, enfin, vous séduira par
              sa médina surplombant la mer et son mélange unique de cultures.
            </motion.p>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative h-[250px] w-full overflow-hidden rounded-2xl sm:h-[350px] md:h-[450px] md:w-1/2"
          >
            <Image
              src={img4}
              alt="Les grandes villes"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
              <h3 className="text-sm font-bold text-white">
                Premium Experience
              </h3>
            </div>
          </motion.div>
        </div>

        {/* SECTION 2 */}
        <div className="mt-16 flex flex-col gap-10 md:flex-row-reverse md:items-center md:justify-between">
          {/* TEXT */}
          <div className="w-full md:w-1/2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Le Sahara
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-sm text-white/90 sm:text-base md:max-w-lg"
            >
              Nos circuits dans le Sahara vous plongent au cœur du désert
              marocain. À Merzouga, découvrez les majestueuses dunes de l'Erg
              Chebbi, faites une balade à dos de chameau, admirez un coucher de
              soleil spectaculaire, et passez une nuit inoubliable sous les
              étoiles dans un campement berbère. À M'Hamid El Ghizlane, aux
              portes du désert, vivez une aventure authentique loin des sentiers
              battus, idéale pour ceux en quête de solitude et de paysages
              grandioses.
            </motion.p>
          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative h-[250px] w-full overflow-hidden rounded-2xl sm:h-[350px] md:h-[450px] md:w-1/2"
          >
            <Image
              src={img5}
              alt="Sahara"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
              <h3 className="text-sm font-bold text-white">
                Desert Experience
              </h3>
            </div>
          </motion.div>
        </div>

        {/* SERVICES 2 */}
        <div className="mt-37 space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-full font-serif text-2xl leading-tight font-light text-white drop-shadow-[0_2px_40px_rgba(10,30,80,0.18)] sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl"
          >
            Activités d'Aventure et de Loisirs
          </motion.h1>

          {SERVICES_DATA2.map((section) => (
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
