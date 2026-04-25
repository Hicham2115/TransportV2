"use client"

import Hero from "@/components/Main Section/Hero"
import FirstSection from "@/components/Main Section/FirstSection"
import SecondSection from "@/components/Main Section/SecondSection"
import ThirdSection from "@/components/Main Section/ThirdSection"
import FAQ from "@/components/Main Section/FAQ"
import FourthSection from "@/components/Main Section/FourthSection"
import Contact from "@/components/Main Section/Contact"
import { useEffect, useState } from "react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

function Page() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Remove this line later if you want loader only once
    sessionStorage.removeItem("visited")

    const alreadyVisited = sessionStorage.getItem("visited")

    if (alreadyVisited) {
      setLoading(false)
    } else {
      const timer = setTimeout(() => {
        sessionStorage.setItem("visited", "true")
        setLoading(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#050505] text-white">
        {/* Ambient orbs */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[100px]" />
        <div className="pointer-events-none absolute top-1/3 left-1/3 h-[300px] w-[300px] rounded-full bg-white/[0.02] blur-[60px]" />

        {/* Top line */}
        <div className="absolute top-0 left-0 h-[1px] w-full animate-[shimmer_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Corner marks */}
        <div className="absolute top-8 left-8 h-6 w-6 border-t border-l border-white/20" />
        <div className="absolute top-8 right-8 h-6 w-6 border-t border-r border-white/20" />
        <div className="absolute bottom-8 left-8 h-6 w-6 border-b border-l border-white/20" />
        <div className="absolute right-8 bottom-8 h-6 w-6 border-r border-b border-white/20" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-8">
          {/* Eyebrow */}
          <p className="mb-6 animate-[fadeUp_0.8s_ease_forwards] text-[10px] tracking-[0.6em] text-white/30 uppercase">
            Next Way Transport
          </p>

          {/* Main heading */}
          <div className="mb-8 overflow-hidden">
            <h1 className="animate-[slideUp_0.9s_cubic-bezier(0.16,1,0.3,1)_0.2s_both] text-center text-5xl font-semibold tracking-[0.4em] uppercase md:text-7xl">
              LOADING
            </h1>
          </div>

          {/* Thin divider */}
          <div className="mb-8 h-8 w-[1px] animate-[fadeIn_1s_ease_0.6s_both] bg-gradient-to-b from-white/40 to-transparent" />

          {/* Progress track */}
          <div className="relative mb-3 w-[260px] md:w-[340px]">
            <div className="h-[1px] w-full bg-white/10" />
            <div
              className="absolute top-0 left-0 h-[1px] animate-[progressFill_3.5s_cubic-bezier(0.4,0,0.2,1)_0.8s_both] bg-white"
              style={{ width: "0%" }}
            />
            {/* Glint */}
            <div className="absolute top-0 left-0 h-[1px] w-8 animate-[glint_3.5s_cubic-bezier(0.4,0,0.2,1)_0.8s_both] bg-white/60 blur-[1px]" />
          </div>

          {/* Percentage */}
          <p className="mb-10 animate-[fadeIn_0.6s_ease_1s_both] font-mono text-[10px] tracking-[0.3em] text-white/25">
            <span className="animate-[countUp_3.5s_linear_0.8s_both] tabular-nums">
              —
            </span>
          </p>

          {/* Lottie */}
          <div className="mb-10 w-[180px] animate-[fadeIn_1s_ease_1.2s_both] opacity-70 md:w-[220px]">
            <DotLottieReact
              src="https://lottie.host/ba92fd65-03a3-4943-a71f-7deca59c65a4/ZkRWvMGh6K.lottie"
              loop
              autoplay
            />
          </div>

          {/* Status line */}
          <p className="animate-[fadeIn_1s_ease_1.4s_both] text-center text-[11px] tracking-[0.25em] text-white/35 uppercase">
            Preparing your premium experience
          </p>

          {/* Dot row */}
          <div className="mt-6 flex animate-[fadeIn_1s_ease_1.6s_both] items-center gap-[6px]">
            <div className="h-[3px] w-[3px] animate-[pulse_1.4s_ease-in-out_0s_infinite] rounded-full bg-white/60" />
            <div className="h-[3px] w-[3px] animate-[pulse_1.4s_ease-in-out_0.2s_infinite] rounded-full bg-white/40" />
            <div className="h-[3px] w-[3px] animate-[pulse_1.4s_ease-in-out_0.4s_infinite] rounded-full bg-white/20" />
          </div>
        </div>

        {/* Keyframes */}
        <style>{`
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(12px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(40px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes progressFill {
      from { width: 0%; }
      to   { width: 100%; }
    }
    @keyframes glint {
      from { left: 0%; opacity: 1; }
      to   { left: 100%; opacity: 0; }
    }
    @keyframes shimmer {
      0%, 100% { opacity: 0.3; }
      50%       { opacity: 1; }
    }
    @keyframes pulse {
      0%, 100% { opacity: 0.2; transform: scale(1); }
      50%       { opacity: 1;   transform: scale(1.4); }
    }
  `}</style>
      </div>
    )
  }

  return (
    <div>
      <Hero />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FAQ />
      <FourthSection />
      <Contact />
    </div>
  )
}

export default Page
