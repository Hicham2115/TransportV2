"use client"
import { useState } from "react"
import { motion } from "framer-motion"

import img1 from "@/app/assets/Mercedes_Vito_minibus_front_202605042009.jpeg"
import img2 from "@/app/assets/Ultra-realistic_4K_image_of_a_202605042032.jpeg"
import img3 from "@/app/assets/Ultra-realistic_4K_studio_photo_of_202605042038.jpeg"
import img4 from "@/app/assets/Mercedes_Sprinter_minibus_side_view_202605042152.jpeg"
import img5 from "@/app/assets/Mercedes_Sprinter_minibus_side_view_202605042155.jpeg"

import img6 from "@/app/assets/Mitsubishi_4x4_SUV_black_202605042156.jpeg"
import img7 from "@/app/assets/Toyota_Land_Cruiser_4x4_isolated_202605042200.jpeg"
import img8 from "@/app/assets/Toyota_Prado_4x4_SUV_202605042202.jpeg"

const minibusVehicles = [
  {
    name: "Mercedes Vito",
    capacity: "7 – 9 Places",
    description:
      "Discret, élégant et agile — idéal pour les transferts VIP et les petits groupes exigeant intimité et confort.",
    image: img1.src,
  },
  {
    name: "Ford Transit",
    capacity: "8 – 17 Places",
    description:
      "Spacieux et modulable, le Ford Transit réunit les groupes intermédiaires dans un cadre confortable pour tout type de déplacement.",
    image: img2.src,
  },
]

const sprinterVehicles = [
  {
    name: "07 Places",
    description:
      "La configuration VIP par excellence — sept passagers dans un espace privatif digne d'un premier rang.",
    image: img3.src,
  },
  {
    name: "17 Places",
    description:
      "Le juste milieu entre intimité et capacité, parfait pour les excursions et les transferts de groupes.",
    image: img4.src,
  },
  {
    name: "20 Places",
    description:
      "Convivialité maximale sans concession sur le confort — pour les séminaires, team-buildings et circuits organisés.",
    image: img5.src,
  },
]

const fourWDVehicles = [
  {
    name: "Mitsubishi Pajero",
    description:
      "Robuste et infatigable, le Pajero dompte chaque terrain avec une assurance légendaire.",
    image: img6.src,
  },
  {
    name: "Toyota Land Cruiser",
    description:
      "L'icône du tout-terrain — puissance, fiabilité et prestige réunis pour vos aventures les plus ambitieuses.",
    image: img7.src,
  },
  {
    name: "Toyota Prado",
    description:
      "Alliant luxe et performance off-road, le Prado redéfinit l'aventure avec une élégance sans égale.",
    image: img8.src,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
}

function VehicleCard({ vehicle, badge }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative overflow-hidden border border-black/10 bg-white shadow-md transition-all duration-500 hover:border-brand-gold/50 hover:shadow-xl"
    >
      <div className="relative h-66 overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="h-full w-full object-cover brightness-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        {badge && (
          <span className="absolute top-3 right-3 bg-brand-red px-2 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
            {badge}
          </span>
        )}
        {vehicle.capacity && (
          <span className="absolute bottom-3 left-3 border border-brand-gold bg-white/90 px-3 py-1 text-xs font-semibold tracking-widest text-brand-gold backdrop-blur-sm">
            {vehicle.capacity}
          </span>
        )}
      </div>
      <div className="p-5">
        <h4 className="mb-2 text-lg font-bold text-black">{vehicle.name}</h4>
        <p className="text-sm leading-relaxed font-light text-black/60">
          {vehicle.description}
        </p>
      </div>
    </motion.div>
  )
}

function CategoryHeader({ index, title, description }) {
  return (
    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end">
      <span className="hidden font-serif text-[80px] leading-none font-light text-black/40 select-none md:block">
        {index}
      </span>
      <div className="flex items-center gap-4">
        <div className="h-10 w-[2px] flex-shrink-0 rounded-full bg-brand-red md:h-14" />
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-black md:text-3xl">
            {title}
          </h3>
          <p className="mt-1 text-sm font-light tracking-wide text-brand-gold">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

function FleetSection() {
  const [fourWDMode, setFourWDMode] = useState("circuit")

  return (
    <section className="bg-white px-6 py-24 text-black md:px-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mb-20 max-w-7xl"
      >
        <p className="glow-label mb-4 text-brand-red">Notre Flotte Complète</p>

        <h2 className="mt-10 font-serif text-4xl leading-snug font-semibold text-black md:text-5xl">
          Un véhicule pour chaque
          <br />
          <span className="text-brand-gold">horizon.</span>
        </h2>
        <div className="mt-6 h-px w-24 bg-gradient-to-r from-brand-red to-transparent" />
      </motion.div>

      <div className="mx-auto max-w-7xl space-y-24">
        {/* ── Minibus ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <CategoryHeader
            index="01"
            title="Minibus"
            description="Confort et élégance pour les petits groupes"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {minibusVehicles.map((v) => (
              <VehicleCard key={v.name} vehicle={v} />
            ))}
          </div>
        </motion.div>

        <div className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

        {/* ── Mercedes Sprinter ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <CategoryHeader
            index="02"
            title="Mercedes Sprinter"
            description="Polyvalence et prestige pour chaque mission"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sprinterVehicles.map((v) => (
              <VehicleCard key={v.name} vehicle={v} />
            ))}
          </div>
        </motion.div>

        <div className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

        {/* ── 4WD / 4×4 ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <CategoryHeader
            index="03"
            title="4WD · 4×4"
            description="L'aventure et le luxe, sans compromis"
          />

          {/* Mode toggle */}
          <div className="mb-10 flex flex-wrap gap-3">
            <button
              onClick={() => setFourWDMode("circuit")}
              className={`px-6 py-2.5 text-sm font-semibold tracking-widest uppercase transition-all duration-300 ${
                fourWDMode === "circuit"
                  ? "bg-brand-red text-white shadow-[0_4px_20px_rgba(224,16,32,0.35)]"
                  : "border border-black/20 text-black/50 hover:border-brand-red/40 hover:text-brand-red"
              }`}
            >
              Avec Chauffeur — Circuit
            </button>
            <button
              onClick={() => setFourWDMode("location")}
              className={`px-6 py-2.5 text-sm font-semibold tracking-widest uppercase transition-all duration-300 ${
                fourWDMode === "location"
                  ? "bg-brand-red text-white shadow-[0_4px_20px_rgba(224,16,32,0.35)]"
                  : "border border-black/20 text-black/50 hover:border-brand-red/40 hover:text-brand-red"
              }`}
            >
              Sans Chauffeur — Location
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fourWDVehicles.map((v) => (
              <VehicleCard
                key={v.name}
                vehicle={v}
                badge={fourWDMode === "circuit" ? "Circuit" : "Location"}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FleetSection
