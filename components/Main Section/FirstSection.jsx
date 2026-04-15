"use client"
import React from "react"

function FirstSection() {
  return (
    <div className="relative flex items-center px-6 font-serif md:px-20">
      <div className="flex w-full flex-col gap-10 md:flex-row md:items-start md:justify-between">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">
          <div className="h-14 w-[2px] rounded-full bg-white" />
          <h2 className="text-3xl font-bold tracking-wide text-white">
            About Us
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6 md:w-1/2">
          <h3 className="text-2xl leading-snug font-semibold text-white md:text-3xl">
            At Next Way Transport, we move Morocco with safe, comfortable, and
            reliable journeys that connect people and places across the country.
          </h3>

          <p className="text-lg leading-relaxed text-white/80 italic">
            With strong experience in passenger transport, we provide
            comfortable and efficient bus travel solutions across cities and
            regions. Our mission is to simplify mobility through safety,
            punctuality, and quality service — helping people travel with
            confidence every day.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FirstSection
