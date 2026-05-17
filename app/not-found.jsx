"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { ArrowRightToLine, CornerDownLeft, Home, MapPinned } from "lucide-react"

import TextType from "@/components/TextType"

import bgImage from "@/app/assets/Luxury_transport_fleet_Morocco_202605042304.jpeg"

export default function NotFound() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Ambient orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[340px] w-[340px] rounded-full bg-white/[0.04] blur-[90px]" />
      <div className="pointer-events-none absolute -right-24 -bottom-28 h-[420px] w-[420px] rounded-full bg-white/[0.03] blur-[110px]" />

      {/* Slanted lines (matches footer language) */}
      <svg
        className="pointer-events-none absolute top-0 right-0 z-0 h-full w-[88%] opacity-70 md:w-[60%]"
        viewBox="0 0 600 400"
        fill="none"
        preserveAspectRatio="xMaxYMin meet"
      >
        {[560, 510, 460, 410, 360, 310].map((x, i) => (
          <line
            key={i}
            x1={x}
            y1="-20"
            x2={x - 220}
            y2="420"
            stroke={`rgba(255,255,255,${0.04 - i * 0.004})`}
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Top scan accent */}
      <div className="pointer-events-none absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 py-16 md:px-10">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          {/* Signature label */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2 px-2 text-center sm:gap-3">
            <div className="glow-bar hidden sm:block" />
            <div className="glow-dot xs:block hidden" />

            <span className="glow-label text-xs tracking-wide sm:text-sm md:text-base">
              Route Not Found
            </span>

            <div className="glow-dot xs:block hidden" />
            <div className="glow-bar hidden sm:block" />
          </div>

          {/* 404 */}
          <h1 className="mb-3 font-heading text-6xl font-light tracking-[0.12em] text-white sm:text-7xl md:text-8xl">
            404
          </h1>

          <div className="mx-auto mb-6 h-[2px] w-16 bg-gradient-to-r from-transparent via-white/70 to-transparent" />

          <TextType
            text={["We couldn’t trace this destination on our route map."]}
            typingSpeed={55}
            pauseDuration={2500}
            showCursor
            cursorCharacter="_"
            loop={false}
            deletingSpeed={35}
            cursorBlinkDuration={0.55}
            className="mx-auto max-w-[44rem] font-serif text-[clamp(1rem,2.2vw,1.25rem)] font-light text-white/90 italic"
          />

          {/* Path panel */}
          <div className="mt-10 w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-xl md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="min-w-0">
                <p className="mb-2 text-[10px] font-semibold tracking-[0.26em] text-white/80 uppercase">
                  Requested Path
                </p>
                <div className="flex min-w-0 items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] border border-white/10 bg-black/30">
                    <MapPinned className="h-4 w-4 text-white/80" />
                  </div>
                  <p className="min-w-0 font-mono text-[12px] leading-relaxed text-white/80 md:text-[13px]">
                    <span className="text-white/50">GET</span>{" "}
                    <span className="rounded-md border border-white/10 bg-black/20 px-2 py-1 break-words">
                      {pathname || "/"}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center md:justify-end">
                {/* Primary */}
                <Link
                  href="/"
                  className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg px-6 py-3 text-white uppercase transition-all duration-300 ease-in-out focus:outline-2 focus:outline-offset-4 focus:outline-white sm:w-auto"
                  aria-label="Go to home"
                >
                  <span className="relative z-20 flex items-center gap-2 text-sm font-semibold sm:text-base">
                    <Home className="h-4 w-4" />
                    Home
                  </span>

                  <span className="absolute top-0 left-[-80%] z-10 h-full w-[50%] rotate-12 bg-white/20 blur-lg transition-all duration-1000 group-hover:left-[130%]" />

                  <span className="absolute top-0 left-0 h-[20%] w-1/2 border-t-2 border-l-2 border-white/40" />
                  <span className="absolute top-0 right-0 h-[60%] w-1/2 border-t-2 border-r-2 border-white/40 transition-all duration-300 group-hover:h-[90%]" />
                  <span className="absolute bottom-0 left-0 h-[60%] w-1/2 border-b-2 border-l-2 border-white/40 transition-all duration-300 group-hover:h-[90%]" />
                  <span className="absolute right-0 bottom-0 h-[20%] w-1/2 border-r-2 border-b-2 border-white/40" />
                </Link>

                {/* Secondary */}
                <Link
                  href="/Fleet"
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold tracking-widest text-[#0A0A0D] uppercase shadow-lg transition hover:scale-105 sm:w-auto"
                  aria-label="Explore fleet"
                >
                  Explore
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRightToLine className="h-4 w-4" />
                  </span>
                </Link>

                {/* Back */}
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="group flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/0 px-6 py-3 text-sm font-semibold tracking-wider text-white/90 uppercase transition hover:bg-white/10 sm:w-auto"
                  aria-label="Go back"
                >
                  <CornerDownLeft className="h-4 w-4 text-white/80" />
                  Back
                </button>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
              <p className="text-xs text-white/55">
                Tip: Use the dock below to jump back.
              </p>
              <div className="hidden items-center gap-2 sm:flex">
                <span className="h-[1px] w-10 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <span className="text-[10px] font-semibold tracking-[0.3em] text-white/40 uppercase">
                  Transport
                </span>
                <span className="h-[1px] w-10 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              </div>
            </div>
          </div>

          {/* Micro footer note */}
          <p className="mt-8 text-center text-[11px] tracking-[0.2em] text-white/100 uppercase">
            If you typed this URL manually, double-check the spelling.
          </p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black/70 to-transparent" />
    </section>
  )
}
