import React from "react"
import Image from "next/image"
import bgImage from "@/app/assets/pexels-pavel-danilyuk-8424931.jpg"

function FourthSection() {
  return (
    <section className="relative z-0 mb-20 flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-[#18181a] px-4 py-24">
      {/* Radial glow behind panels */}
      <div className="pointer-events-none absolute top-16 left-1/2 z-0 h-[340px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(61,105,255,0.18)_0%,transparent_70%)]" />

      {/* Slanted panel image */}
      <div className="pointer-events-none absolute top-0 z-0 ml-20 h-[520px] w-full max-w-[900px]">
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="slantedPanels" clipPathUnits="objectBoundingBox">
              <polygon points="0.18 0, 0.38 0, 0.13 1, -0.07 1" />
              <polygon points="0.46 0, 0.66 0, 0.41 1, 0.21 1" />
              <polygon points="0.74 0, 0.94 0, 0.69 1, 0.49 1" />
            </clipPath>
          </defs>
        </svg>

        <div
          className="relative z-0 h-full w-full"
          style={{ clipPath: "url(#slantedPanels)" }}
        >
          <Image
            src={bgImage}
            alt="Transport vehicle"
            fill
            className="object-cover object-center opacity-65"
          />
        </div>

        <svg
          viewBox="0 0 1 1"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 z-10 h-full w-full"
        >
          <polygon
            points="0.18 0, 0.38 0, 0.13 1, -0.07 1"
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="0.002"
          />
          <polygon
            points="0.46 0, 0.66 0, 0.41 1, 0.21 1"
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="0.002"
          />
          <polygon
            points="0.74 0, 0.94 0, 0.69 1, 0.49 1"
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="0.002"
          />
        </svg>

        <div className="absolute top-0 left-0 z-10 h-[160px] w-full bg-gradient-to-b from-[#18181a] to-transparent" />
        <div className="absolute bottom-0 left-0 z-10 h-[220px] w-full bg-gradient-to-t from-[#18181a] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-[200px] flex max-w-[700px] flex-col items-center text-center">
        <h2 className="mb-6 text-[clamp(2.8rem,6vw,5rem)] leading-[1.08] font-bold tracking-[-0.03em] text-white">
          Ready to move <br />
          <span className="text-white/45">smarter</span> and faster?
        </h2>

        <div className="mb-6 h-px w-10 bg-white/15" />

        <p className="mb-10 max-w-full text-[1.05rem] leading-relaxed font-normal text-white/45">
          Talk to our experts and get a tailored logistics solution built around
          your route.
        </p>
        <button className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg px-6 py-3 text-white uppercase transition-all duration-300 ease-in-out focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-white sm:w-auto sm:px-8 sm:py-4">
          <span className="relative z-20 text-sm font-semibold sm:text-base">
            Get in Touch
          </span>

          {/* shine effect */}
          <span className="absolute top-0 left-[-80%] z-10 h-full w-[50%] rotate-12 bg-white/20 blur-lg transition-all duration-1000 group-hover:left-[130%]" />

          {/* borders */}
          <span className="absolute top-0 left-0 h-[20%] w-1/2 border-t-2 border-l-2 border-[#D4EDF9]" />
          <span className="absolute top-0 right-0 h-[60%] w-1/2 border-t-2 border-r-2 border-[#D4EDF9] transition-all duration-300 group-hover:h-[90%]" />
          <span className="absolute bottom-0 left-0 h-[60%] w-1/2 border-b-2 border-l-2 border-[#D4EDF9] transition-all duration-300 group-hover:h-[90%]" />
          <span className="absolute right-0 bottom-0 h-[20%] w-1/2 border-r-2 border-b-2 border-[#D4EDF9]" />
        </button>
      </div>
    </section>
  )
}

export default FourthSection
