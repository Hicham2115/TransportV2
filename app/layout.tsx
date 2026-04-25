"use client"
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import React from "react"
import {
  Archive,
  BookOpen,
  BusFront,
  House,
  Info,
  PhoneCall,
  Settings,
  UserRound,
  Users,
} from "lucide-react"

import { AppDock } from "@/components/AppDock"
import Grainient from "@/components/Grainient"
import Footer from "@/components/Main Section/Footer"
import SmoothScroll from "@/components/Main Section/SmoothScroll"
import ScrollToTopButton from "@/components/ui/ScrollToTopButton"
// import { SmoothCursor } from "@/components/ui/smooth-cursor"
import { useEffect, useState } from "react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [loading, setLoading] = useState(true)
  const [showSite, setShowSite] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      setTimeout(() => setShowSite(true), 700)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable,
        cormorant.variable
      )}
    >
      <body>
        {/* LOADER */}
        <div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#050505] text-white"
          style={{
            opacity: loading ? 1 : 0,
            pointerEvents: loading ? "auto" : "none",
            transition: "opacity 0.7s ease",
          }}
        >
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
            <p className="mb-6 animate-[fadeUp_0.8s_ease_forwards] text-[10px] tracking-[0.6em] text-white/30 uppercase">
              Next Way Transport
            </p>

            <h1 className="mb-8 animate-[slideUp_0.9s_cubic-bezier(0.16,1,0.3,1)_0.2s_both] text-center text-5xl font-semibold tracking-[0.4em] uppercase md:text-7xl">
              LOADING
            </h1>

            <div className="mb-8 h-8 w-[1px] animate-[fadeIn_1s_ease_0.6s_both] bg-gradient-to-b from-white/40 to-transparent" />

            {/* Progress */}
            <div className="relative mb-3 w-[260px] md:w-[340px]">
              <div className="h-[1px] w-full bg-white/10" />
              <div
                className="absolute top-0 left-0 h-[1px] bg-white"
                style={{
                  width: loading ? "100%" : "100%",
                  transition: "width 4.5s ease",
                  animation: "progressBar 4.5s ease forwards",
                }}
              />
            </div>

            <p className="mb-10 animate-[fadeIn_1s_ease_1s_both] font-mono text-[10px] tracking-[0.3em] text-white/25">
              —
            </p>

            {/* Lottie */}
            <div className="mb-10 w-[180px] animate-[fadeIn_1s_ease_1.2s_both] opacity-70 md:w-[220px]">
              <DotLottieReact
                src="https://lottie.host/ba92fd65-03a3-4943-a71f-7deca59c65a4/ZkRWvMGh6K.lottie"
                loop
                autoplay
              />
            </div>

            <p className="animate-[fadeIn_1s_ease_1.4s_both] text-center text-[11px] tracking-[0.25em] text-white/35 uppercase">
              Preparing your premium experience
            </p>

            <div className="mt-6 flex animate-[fadeIn_1s_ease_1.6s_both] items-center gap-[6px]">
              <div className="h-[3px] w-[3px] animate-pulse rounded-full bg-white/60" />
              <div className="h-[3px] w-[3px] animate-pulse rounded-full bg-white/40" />
              <div className="h-[3px] w-[3px] animate-pulse rounded-full bg-white/20" />
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
            @keyframes shimmer {
              0%, 100% { opacity: 0.3; }
              50%       { opacity: 1; }
            }
            @keyframes progressBar {
              from { width: 0%; }
              to   { width: 100%; }
            }
          `}</style>
        </div>

        {/* Site content */}
        <div
          style={{
            opacity: showSite ? 1 : 0,
            transform: showSite ? "translateY(0px)" : "translateY(20px)",
            filter: showSite ? "blur(0px)" : "blur(8px)",
            transition: "all 1s ease",
          }}
        >
          <main className="relative z-10 min-h-screen">
            {children}
            <Footer />
          </main>
          <div className="hidden md:block">
            <ScrollToTopButton />
          </div>

          <AppDock />

          <SmoothScroll />
          {/* <SmoothCursor /> */}
        </div>
      </body>
    </html>
  )
}
