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
import img11 from "../../app/assets/julian-hochgesang-oA0EHY-rdQQ-unsplash.jpg"
import { ArrowRightToLine } from "lucide-react"

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
        title: "Marrakech, the Red City: History and Adventure in 6 Days",
        desc: "Enjoy a 6-day journey in Marrakech, the “Red City,” where history, culture, and adventure come together. Explore lively souks, iconic landmarks like Bahia Palace and the Majorelle Gardens, and experience the Atlas Mountains and Agafay Desert. With camel rides, a night in a desert camp, and authentic Moroccan hospitality, this trip offers a rich mix of culture, nature, and unforgettable experiences.",
        img: "https://images.unsplash.com/photo-1579283135011-0974a412341a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Marrakech, the Red City: Culture & Adventure in 6 Days",
        desc: "Discover Marrakech and its surroundings on a 6-day journey blending culture and adventure. Experience the lively Jemaa el-Fna square, historic palaces and madrasas, and explore the stunning Ouzoud Waterfalls. Enjoy outdoor activities at Terre d’Amanar and spend a magical night in the rocky Agafay Desert with camel rides and optional quad biking. This tour combines rich Moroccan history, vibrant city life, and breathtaking natural landscapes for an unforgettable experience.",
        img: "https://images.unsplash.com/photo-1536237717235-0acadb345d8c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title:
          "8-Day Marrakech & Sahara Adventure: Cities, Atlas & Desert Journey",
        desc: "Discover the magic of Marrakech and the vast desert landscapes of Morocco on this 8-day adventure. From the lively souks of Marrakech to the golden dunes of Merzouga, this tour blends cultural discovery with unforgettable outdoor experiences. Explore ancient kasbahs, cross the High Atlas Mountains, and enjoy the peaceful beauty of the Sahara Desert. A perfect journey to experience Morocco’s rich history, traditions, and breathtaking natural scenery.",
        img: "https://images.unsplash.com/photo-1672842056361-1838711c5aeb?q=80&w=1570&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    category: "Fes & Imperial Cities",
    description:
      "Discover the rich history and culture of Morocco's imperial cities.",
    items: [
      {
        title: "5-Day Imperial Morocco Tour: Fes, Marrakech & Casablanca",
        desc: "This 5-day cultural journey takes you through Morocco’s imperial cities and diverse landscapes. Start in Fes, exploring its UNESCO-listed medina and traditional crafts, then cross the Middle Atlas Mountains through Berber villages and cedar forests to reach Marrakech. Discover the vibrant “Red City” with its historic landmarks and lively Jemaa el-Fna square, before continuing to Casablanca to visit the Hassan II Mosque and Morocco’s modern economic hub. This tour offers a perfect blend of history, culture, and scenic beauty from ancient medinas to modern city life.",
        img: "https://images.unsplash.com/photo-1557503799-fac6a98054b3?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "5-Day Fes, Desert & Valley of a Thousand Kasbahs Adventure",
        desc: "Travel from the spiritual city of Fes to the mesmerizing dunes of Merzouga on this 5-day journey. Cross the Middle Atlas Mountains, explore the Valley of a Thousand Kasbahs, and experience the magic of the Sahara Desert. Visit ancient ruins, traditional pottery workshops, and enjoy the hospitality of desert nomads. This trip offers a perfect blend of culture, history, and adventure through some of Morocco’s most iconic landscapes.",
        img: "https://images.unsplash.com/photo-1606405481430-9f5a6de543c2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "6-Day Fes to Marrakech: Sahara, Valleys & Kasbahs Journey",
        desc: "Set off on a 6-day adventure from Fes across Morocco’s most diverse landscapes. Travel through the Middle Atlas Mountains, passing through Azrou and Midelt, and explore the scenic Ziz Valley. Experience the Sahara Desert with camel rides, Berber music, and nights under the stars. Discover the dramatic Todra and Dades Gorges, the Rose Valley, and the historic Ait Ben Haddou kasbah before crossing the High Atlas Mountains to end your journey in Marrakech. A rich blend of nature, culture, and desert adventure.",
        img: "https://images.unsplash.com/photo-1673474450408-037787037672?q=80&w=1702&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    category: "Ourzazate & Desert Tours",
    description:
      "Experience the cinematic landscapes of Ouarzazate and the Sahara Desert.",
    items: [
      {
        title: "3-Day Ouarzazate Desert, Valleys & Canyons Adventure",
        desc: "Enjoy a 3-day desert circuit starting from Ouarzazate through Morocco’s most stunning landscapes. Explore the Skoura palm grove, the dramatic Dades and Todra Gorges, and continue to the Erg Chebbi dunes in Merzouga. Experience a camel trek and a night in a desert bivouac under the stars, with a visit to the historic town of Rissani. The journey returns through the Draa Valley and the Anti-Atlas, offering a perfect mix of desert adventure, natural beauty, and cultural discovery.",
        img: "https://images.unsplash.com/photo-1714229519448-bd6818424912?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title:
          "7-Day Ouarzazate to Marrakech: Valleys, Dunes, Mountains & Waterfalls",
        desc: "Embark on a 7-day journey from Ouarzazate through Morocco’s most diverse landscapes, including Zagora, the dunes of Merzouga, and the dramatic Dades and Todra Gorges. Continue north to Imilchil and the stunning Ouzoud Waterfalls before ending your trip with two days exploring Marrakech’s palaces, madrasas, and vibrant souks. This adventure combines desert exploration, mountain scenery, natural wonders, and rich cultural discovery in one unforgettable experience.",
        img: "https://images.unsplash.com/photo-1590802163243-290dd8621032?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "3-Day Ouarzazate Desert, Valleys & Gorges Experience",
        desc: "Enjoy a 3-day desert adventure from Ouarzazate through the Draa Valley to Zagora and the dunes of Merzouga. Experience a camel trek and a magical night in a desert bivouac under the stars, then return via the impressive Todra Gorges and the Skoura palm grove. This journey offers a perfect mix of desert landscapes, mountain scenery, and authentic Moroccan culture.",
        img: "https://images.unsplash.com/photo-1737927427538-9f9b4ea4ab02?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
]

const SERVICES_DATA2 = [
  {
    category: "City Highlights",
    description:
      " Discover the vibrant culture, history, and hidden gems of Morocco's iconic cities.",
    items: [
      {
        title:
          "6-Day Agadir, Ocean & Desert Escape: Coast, Atlas & Sahara Adventure",
        desc: "Enjoy a 6-day journey from Agadir combining Atlantic coastline, mountain landscapes, and desert adventure. Explore fishing villages and the Souss Massa Reserve, visit Fort Bou Jerif, and discover the unique granite landscapes of Tafraout and the Ait Mansour valley. Continue to the vast dunes of Chegaga for a camel trek and a night in a desert bivouac under the stars. Return through the Draa Valley’s palm groves and the cinematic city of Ouarzazate for a complete Moroccan experience blending ocean, mountains, and Sahara.",
        img: "https://images.unsplash.com/photo-1538053367502-742497073841?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title:
          "8-Day Agadir to Imperial Cities: Waterfalls, Atlas & Cultural Journey",
        desc: "Discover Morocco on an 8-day journey from Agadir through stunning natural landscapes and imperial cities. Visit the breathtaking Ouzoud Waterfalls and Bin El Ouidane Lake, then travel north via Beni Mellal to the historic medina of Fes. Explore Roman Volubilis, the imperial gates of Meknes, and the royal sites of Rabat before ending in Casablanca with its iconic Hassan II Mosque. This tour blends waterfalls, Atlas Mountains scenery, Berber villages, and Morocco’s richest cultural heritage.",
        img: "https://images.unsplash.com/photo-1638575983086-58cc727a684e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title:
          "2-Day Agadir to Marrakech: Ouzoud Waterfalls & Bin El Ouidane Escape",
        desc: "Enjoy a short 2-day getaway from Agadir to Marrakech and the stunning Ouzoud Waterfalls. Observe wild Barbary macaques, explore olive groves and traditional Berber villages, and relax by the beautiful Bin El Ouidane Lake. Take in panoramic waterfall views and optional boat rides before returning via Azilal. This quick trip offers a refreshing mix of nature, culture, and scenic landscapes in Morocco.",
        img: "https://images.unsplash.com/photo-1584914584152-9b56c79aec32?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    category: "Adventure & Nature",
    description:
      "Experience Morocco's breathtaking landscapes and thrilling outdoor activities, from desert dunes to mountain peaks.",
    items: [
      {
        title: "9-Day Northern Morocco Trekking Adventure",
        desc: "Embark on a 9-day trekking journey through Northern Morocco, discovering breathtaking mountains, traditional Berber villages, and diverse natural landscapes. With an experienced multilingual guide, explore remote trails, enjoy authentic cultural encounters, and experience Morocco’s rich heritage along the way. This adventure combines hiking, local hospitality, and scenic beauty for an immersive exploration of the country’s northern regions.",
        img: "https://images.unsplash.com/photo-1660048063418-10db8be0ab65?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title:
          "8-Day Marrakech to M’Goun Mountains Trekking Circuit (7 Nights)",
        desc: "Start your 8-day adventure from Marrakech, the “Red City,” and journey into the stunning M’Goun Mountains. This trekking circuit takes you through remote Berber villages, dramatic valleys, and breathtaking high mountain landscapes. With an experienced multilingual guide, you’ll experience authentic local culture, traditional hospitality, and scenic hiking routes deep in the Atlas Mountains. A perfect blend of nature, adventure, and cultural immersion in Morocco’s wild heart.",
        img: "https://images.unsplash.com/photo-1611154046036-cd91e50978be?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "8-Day Desert Trek & Draa Valley Exploration",
        desc: "Embark on an 8-day trekking adventure through the Moroccan desert and the scenic Draa Valley. Discover vast dunes, traditional Berber villages, and palm-filled oases along one of Morocco’s most beautiful valleys. Experience camel trekking, nights in desert bivouacs under the stars, and authentic local hospitality. This journey offers a perfect mix of desert exploration, cultural immersion, and unforgettable natural landscapes.",
        img: "https://images.unsplash.com/photo-1546744729-7049d0610887?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "8-Day Toubkal Trek: The Roof of Morocco Adventure",
        desc: "Take on an 8-day trekking adventure to Mount Toubkal, the highest peak in North Africa. Journey through the stunning High Atlas Mountains, passing Berber villages, valleys, and rugged alpine landscapes. Guided by experienced locals, this trip offers a deep immersion into mountain culture, breathtaking scenery, and rewarding hiking challenges. A perfect experience for adventure lovers seeking Morocco’s ultimate mountain escape.",
        img: "https://images.unsplash.com/photo-1611859836043-a9177f500a27?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title:
          "9-Day Northern Morocco Trek: Chefchaouen, Asilah & Rif Region Adventure",
        desc: "Discover Northern Morocco on a 9-day trekking journey through the Rif Mountains and coastal towns. Explore the iconic blue streets of Chefchaouen, the artistic charm of Asilah, and the surrounding natural landscapes and Berber villages. With a multilingual guide, enjoy scenic hikes, cultural encounters, and authentic local hospitality. This adventure blends mountain trekking, coastal beauty, and rich cultural heritage for a unique Moroccan experience.",
        img: "https://plus.unsplash.com/premium_photo-1697729733847-0ed51661e005?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
]

const ARTICLES_DATA = [
  {
    title: "Airport Pickup",
    desc: "Whether you arrive at Marrakech, Casablanca, Tangier, Agadir, or any other airport in Morocco, our team will welcome you as soon as you land.",
    img: img1.src,
  },
  {
    title: "Transfers to Your Accommodation",
    desc: "We take you directly to your hotel, riad, or any destination of your choice, ensuring your transfer is as smooth and comfortable as possible.",
    img: img2.src,
  },
  {
    title: "Return Transfers",
    desc: "For your departure, we provide transfers from your accommodation to the airport, making sure you arrive on time for your check-in and formalities.",
    img: img3.src,
  },
]

export default function Excursions() {
  const [activeArticle, setActiveArticle] = useState(0)

  return (
    <div className="relative z-10 min-h-screen overflow-hidden bg-transparent pb-24">
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
              Discover Morocco
            </span>

            <div className="glow-dot xs:block hidden" />
            <div className="glow-bar hidden sm:block" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mb-6 max-w-full font-serif text-3xl leading-tight font-light text-white drop-shadow-[0_2px_40px_rgba(10,30,80,0.18)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Our Excursions
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-5 h-[2px] w-16 bg-gradient-to-r from-transparent via-white/70 to-transparent"
          />

          <TextType
            text={[
              "Transport Ouhaddou offers premium tours, transfers, and VIP logistics across Morocco.",
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
        {/* ARTICLES */}
        <motion.div
          className="mt-12 space-y-10 md:mt-20 md:space-y-14 lg:mt-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-10">
            {/* LEFT */}
            <div className="order-1 flex flex-col justify-between lg:order-1">
              <div className="drop-shadow-md">
                <p className="mb-2 text-xs font-semibold tracking-[0.3em] text-black uppercase">
                  Articles
                </p>
                <h2 className="mb-2 text-3xl leading-tight font-bold text-black sm:text-4xl lg:text-5xl">
                  Latest <span className="text-brand-red">Articles</span>
                </h2>
              </div>

              <p className="mt-4 text-sm font-semibold text-brand-gold italic drop-shadow-sm sm:text-base lg:mt-6">
                Insights into modern transport across Morocco.
              </p>
            </div>

            {/* MAIN IMAGE */}
            <div className="border-black-500/30 to-red/10 relative order-2 overflow-hidden rounded-2xl border bg-gradient-to-br from-red-900/30 shadow-xl sm:rounded-3xl">
              <motion.img
                key={ARTICLES_DATA[activeArticle].img}
                src={ARTICLES_DATA[activeArticle].img}
                className="h-64 w-full scale-105 object-cover transition-transform duration-700 hover:scale-110 sm:h-80 lg:h-auto"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1.01 }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-transparent to-transparent" />

              <div className="absolute right-0 bottom-0 left-0 p-4 text-white sm:p-6 lg:p-7">
                <p className="text-sm leading-relaxed font-medium drop-shadow sm:text-base">
                  {ARTICLES_DATA[activeArticle].desc}
                </p>
              </div>
            </div>

            {/* LIST */}
            <div className="order-3 flex flex-col gap-4 sm:gap-6">
              {ARTICLES_DATA.map((item, index) => (
                <button
                  key={item.title}
                  onMouseEnter={() => setActiveArticle(index)}
                  className={`group text-left transition-all duration-300 ${
                    index === activeArticle ? "scale-[1.02]" : "opacity-80"
                  }`}
                >
                  <div
                    className={`flex flex-col gap-1 border-b border-white/40 pb-3 sm:pb-4 ${
                      index === activeArticle ? "border-b-2" : ""
                    }`}
                  >
                    <p
                      className={`text-base font-semibold transition-colors duration-300 sm:text-lg ${
                        index === activeArticle
                          ? "text-black"
                          : "text-black/60 group-hover:text-blue-300"
                      }`}
                    >
                      {item.title}
                    </p>

                    <p className="text-xs text-black/40 group-hover:text-blue-200">
                      {item.date}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SERVICES */}
        <motion.div
          className="mt-37 space-y-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mt-37 space-y-24">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-6 max-w-full font-serif text-2xl leading-tight font-light text-brand-red drop-shadow-[0_2px_40px_rgba(10,30,80,0.18)] drop-shadow-md sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl"
            >
              Our Excursions
            </motion.h1>
            {SERVICES_DATA.map((section) => (
              <div key={section.category}>
                <div className="-mt-10 mb-8">
                  <h3 className="text-2xl font-semibold text-black">
                    {section.category}
                  </h3>
                  <p className="mt-1 text-sm text-black/90">
                    {section.description}
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                  {section.items.map((item) => (
                    <motion.div
                      key={item.title}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="group w-full overflow-hidden rounded-2xl border border-red-500/20 bg-white shadow-lg transition-all duration-300 hover:border-red-500/50 hover:shadow-xl md:w-[48%] lg:w-[30%]"
                    >
                      {/* Image */}
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Soft overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70" />

                        {/* Red accent line top */}
                        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h4 className="text-lg font-semibold text-black transition-colors duration-300 group-hover:text-red-600">
                          {item.title}
                        </h4>

                        <div className="mt-3 h-[2px] w-14 bg-red-500 transition-all duration-300 group-hover:w-24" />

                        <p className="mt-4 text-sm leading-relaxed text-gray-600">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-20 mb-6 max-w-full font-serif text-xl leading-tight font-light text-brand-red drop-shadow-[0_2px_40px_rgba(10,30,80,0.18)] drop-shadow-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl"
          >
            Circuits à Travers le Maroc
          </motion.h1>

          <div className="mx-auto mt-6 max-w-3xl text-black/70">
            <TextType
              text={[
                "Unforgettable adventures that immerse you in breathtaking landscapes, rich culture, and once-in-a-lifetime experiences.",
              ]}
              typingSpeed={60}
              pauseDuration={1500}
              className="mx-auto mb-10 max-w-full font-serif text-[clamp(1rem,2.2vw,1.22rem)] leading-relaxed font-light text-black italic"
              showCursor
              cursorCharacter="_"
              loop={false}
              deletingSpeed={40}
            />
          </div>
        </div>

        {/* SECTION 1 */}
        <div className="flex flex-col gap-14 md:flex-row md:items-center md:justify-between">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-3 text-xs font-semibold tracking-[0.25em] text-black uppercase"
            >
              Discover Morocco
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-bold text-black sm:text-4xl md:text-5xl"
            >
              10-Day Casablanca to Morocco’s Grand South:{" "}
              <span className="text-brand-gold">
                Cities, Desert & Atlas Adventure
              </span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 h-[3px] w-20 origin-left rounded-full bg-brand-gold"
            />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-sm leading-relaxed text-gray-600 sm:text-base md:max-w-xl"
            >
              Embark on a 10-day journey from vibrant Casablanca to the
              breathtaking landscapes of Morocco’s Grand South. Discover the
              iconic Hassan II Mosque, the desert of Agafay, and the imperial
              charm of Marrakech before crossing the High Atlas Mountains to
              Ouarzazate. Explore the Draa Valley, the towering dunes of
              Merzouga, and the dramatic Todra and Dades Gorges, along with
              traditional Amazigh villages and the stunning Ouzoud Waterfalls.
              This immersive tour combines rich culture, desert adventure, and
              spectacular natural scenery, including camel rides, desert
              camping, and unforgettable encounters with Morocco’s heritage.
            </motion.p>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative h-[280px] w-full overflow-hidden rounded-[30px] border border-gray-200 shadow-xl sm:h-[380px] md:h-[500px] md:w-1/2"
          >
            <Image
              src="https://images.unsplash.com/photo-1699210260021-eac11ba4ff86?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Les grandes villes"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Floating Label */}
            <div className="absolute bottom-6 left-6 rounded-full border border-white/30 bg-white/80 px-5 py-2 text-sm font-medium text-black shadow-lg backdrop-blur-md">
              Premium Experience
            </div>

            {/* Top Accent */}
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-transparent" />
          </motion.div>
        </div>

        {/* SECTION 2 */}
        <div className="mt-24 flex flex-col gap-14 md:flex-row-reverse md:items-center md:justify-between">
          {/* TEXT */}
          <div className="w-full md:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-3 text-xs font-semibold tracking-[0.25em] text-black uppercase"
            >
              Experience Morocco
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-bold text-black sm:text-4xl md:text-5xl"
            >
              11-Day Morocco Grand Tour:{" "}
              <span className="text-brand-gold">
                Imperial Cities, Sahara Desert & Southern Wonders
              </span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 h-[3px] w-20 origin-left rounded-full bg-brand-gold"
            />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-sm leading-relaxed text-gray-600 sm:text-base md:max-w-xl"
            >
              Discover Morocco on an immersive 11-day journey through its
              imperial cities, desert landscapes, and cultural treasures. Start
              in Casablanca before exploring Marrakech and the cinematic city of
              Ouarzazate. Travel through the Draa Valley to the golden dunes of
              Merzouga for an unforgettable Sahara experience. Continue to Fes,
              the spiritual heart of Morocco, then visit the Roman ruins of
              Volubilis and the imperial cities of Meknes and Rabat. This
              comprehensive tour blends history, culture, and natural beauty,
              from the High Atlas Mountains to the vast Sahara Desert.
            </motion.p>
          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative h-[280px] w-full overflow-hidden rounded-[30px] border border-gray-200 shadow-xl sm:h-[380px] md:h-[500px] md:w-1/2"
          >
            <Image
              src={img5}
              alt="Sahara"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Floating Label */}
            <div className="absolute bottom-6 left-6 rounded-full border border-white/30 bg-white/80 px-5 py-2 text-sm font-medium text-black shadow-lg backdrop-blur-md">
              Desert Experience
            </div>

            {/* Top Accent */}
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-transparent" />
          </motion.div>
        </div>

        {/* Section 3 */}
        <div className="mt-24 flex flex-col gap-14 md:flex-row md:items-center md:justify-between">
          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-3 text-xs font-semibold tracking-[0.25em] text-black uppercase"
            >
              Explore Morocco
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-bold text-black sm:text-4xl md:text-5xl"
            >
              8-Day Imperial Cities Tour:
              <span className="text-brand-gold">
                {" "}
                Casablanca, Fes, Marrakech & Rabat
              </span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 h-[3px] w-20 origin-left rounded-full bg-brand-gold"
            />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-sm leading-relaxed text-gray-600 sm:text-base md:max-w-xl"
            >
              Explore Morocco on an 8-day journey through its imperial cities
              and vibrant modern hubs. Discover the historic medinas of Fes and
              Marrakech, the cultural richness of Rabat, and the dynamic
              atmosphere of Casablanca. Visit UNESCO World Heritage sites,
              bustling souks, and grand palaces while experiencing Morocco’s
              legendary hospitality. This tour offers a deep immersion into the
              country’s history, culture, and architectural heritage, blending
              ancient traditions with modern city life.
            </motion.p>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative h-[280px] w-full overflow-hidden rounded-[30px] border border-gray-200 shadow-xl sm:h-[380px] md:h-[500px] md:w-1/2"
          >
            <Image
              src="https://images.unsplash.com/photo-1732384776624-8173c973de75?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Les grandes villes"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Floating Label */}
            <div className="absolute bottom-6 left-6 rounded-full border border-white/30 bg-white/80 px-5 py-2 text-sm font-medium text-black shadow-lg backdrop-blur-md">
              City Highlights
            </div>

            {/* Top Accent */}
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-transparent" />
          </motion.div>
        </div>
        {/* SERVICES 2 */}

        <div className="mt-37 space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-full font-serif text-2xl leading-tight font-light text-brand-red drop-shadow-[0_2px_40px_rgba(10,30,80,0.18)] drop-shadow-md sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl"
          >
            Adventure and Leisure Activities
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-full font-serif text-2xl leading-tight font-light text-brand-red drop-shadow-[0_2px_40px_rgba(10,30,80,0.18)] drop-shadow-md sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl"
          >
            {SERVICES_DATA2.map((section) => (
              <div key={section.category}>
                <div className="mt-15 mb-8">
                  <h3 className="text-2xl font-semibold text-black">
                    {section.category}
                  </h3>
                  <p className="mt-1 text-sm text-black/90">
                    {section.description}
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                  {section.items.map((item) => (
                    <motion.div
                      key={item.title}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="group w-full overflow-hidden rounded-2xl border border-red-500/20 bg-white shadow-lg transition-all duration-300 hover:border-red-500/50 hover:shadow-xl md:w-[48%] lg:w-[30%]"
                    >
                      {/* Image */}
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Soft overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70" />

                        {/* Red accent top line */}
                        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-red-600 via-red-500 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h4 className="text-lg font-semibold text-black transition-colors duration-300 group-hover:text-red-600">
                          {item.title}
                        </h4>

                        <div className="mt-3 h-[2px] w-14 bg-red-500 transition-all duration-300 group-hover:w-24" />

                        <p className="mt-4 text-sm leading-relaxed text-gray-600">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>{" "}
              </div>
            ))}
          </motion.h1>
        </div>
      </div>
    </div>
  )
}
