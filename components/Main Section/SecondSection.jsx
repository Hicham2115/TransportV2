"use client"
import React, { useState } from "react"
import Image from "next/image"

const services = [
  {
    id: "01",
    title: "Man",
    description:
      "Efficient and cost-effective transport for large volumes across vast distances. Our rail freight service ensures timely delivery with a focus on reliability and sustainability.",
    image:
      "https://images.unsplash.com/photo-1549460228-56c68e1abec7?auto=format&fit=crop&q=80&w=800", // placeholder train
  },
  {
    id: "02",
    title: "Mercedes Sprinter ",
    description:
      "Global maritime transport solutions for containerized and bulk cargo. We provide cost-efficient routing to major ports worldwide.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8ed7c663be?auto=format&fit=crop&q=80&w=800", // placeholder ship
  },
  {
    id: "03",
    title: "Toyota Prado",
    description:
      "Rapid delivery for time-sensitive cargo. Connecting businesses globally through our extensive air transport network with maximum security.",
    image:
      "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&q=80&w=800", // placeholder plane
  },
  {
    id: "04",
    title: "Mercedes Vito",
    description:
      "Flexible and direct door-to-door delivery. Comprehensive ground transportation across cities and borders customized to your schedule.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800", // placeholder truck
  },
  {
    id: "05",
    title: "King Long",
    description:
      "Flexible and direct door-to-door delivery. Comprehensive ground transportation across cities and borders customized to your schedule.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800", // placeholder truck
  },
  {
    id: "06",
    title: "Mercedes Minibus",
    description:
      "Flexible and direct door-to-door delivery. Comprehensive ground transportation across cities and borders customized to your schedule.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800", // placeholder truck
  },
]

function SecondSection() {
  const [activeItem, setActiveItem] = useState(services[0])

  return (
    <div className="min-h-screen bg-[#1a1c22c8] text-white">
      {/* Optional: Your original header */}
      <div className="mx-20 mr-20 flex justify-between pt-20">
        <h1 className="font-serif text-[30px] leading-tight font-light text-blue-400 drop-shadow-[0_2px_40px_rgba(10,30,80,0.18)]">
          LOGO NAME
        </h1>
        <div className="flex items-center gap-4">
          <div className="h-14 w-[2px] rounded-full bg-blue-400" />
          <h2 className="text-3xl font-bold tracking-wide text-blue-400">
            Our Services
          </h2>
        </div>
      </div>

      {/* Main interactive section */}
      <div className="mx-20 mt-20 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left Side: Image and paragraph */}
        <div className="flex flex-col gap-6">
          <div className="relative h-64 w-full max-w-md overflow-hidden rounded-md transition-all duration-500 ease-in-out [clip-path:polygon(10%_0%,100%_0%,100%_100%,0%_100%,0%_20%)]">
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="animate-fade-in h-full w-full object-cover brightness-90"
              key={activeItem.id}
              // Using key to trigger re-render and small fade animation if you add one
            />
          </div>
          <div className="max-w-md transition-all duration-300">
            <h3 className="mb-2 text-sm text-gray-400">{activeItem.title}</h3>
            <p className="text-sm leading-relaxed font-light text-gray-200">
              {activeItem.description}
            </p>
          </div>
        </div>

        {/* Right Side: Navigation List */}
        <div className="flex flex-col gap-0 border-l border-white/10 pl-8">
          {services.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => setActiveItem(service)}
              className="group cursor-pointer border-b border-white/10 py-6 last:border-0"
            >
              <div
                className={`flex items-start gap-2 transition-all duration-300 ${
                  activeItem.id === service.id
                    ? "text-white"
                    : "text-white/30 hover:text-white/60"
                }`}
              >
                <h2 className="text-6xl font-bold tracking-tight">
                  {service.title}
                </h2>
                <span className="mt-2 text-sm font-semibold">
                  [{service.id}]
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SecondSection
