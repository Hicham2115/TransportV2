"use client"
import { Geist, Geist_Mono } from "next/font/google"
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

import Dock from "../components/Dock"
import { useRouter } from "next/navigation"
import Grainient from "@/components/Grainient"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const router = useRouter()

  const items = [
    {
      icon: <House size={18} />,
      label: "Home",
      onClick: () => {
        router.push("/")
      },
    },
    {
      icon: <BookOpen size={18} />,
      label: "Notre Histoire",
      onClick: () => {
        router.push("/History")
      },
    },
    {
      icon: <BusFront size={18} />,
      label: "Excursions",
      onClick: () => {
        router.push("/Excursions")
      },
    },
    {
      icon: <Users size={18} />,
      label: "Notre Flotte",
      onClick: () => {
        router.push("/Fleet")
      },
    },
    {
      icon: <PhoneCall size={18} />,
      label: "Contact",
      onClick: () => {
        router.push("/Contact")
      },
    },
  ]
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body className="text-white">
        <div className="fixed inset-0 -z-10">
          <Grainient
            color1="#3B82F6"
            color2="#7291c1"
            color3="#2e64bd"
            timeSpeed={0.25}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.12}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>

        {/* Content */}
        <main className="relative z-10 min-h-screen">{children}</main>

        {/* Dock (fixed at bottom) */}
        <div className="fixed bottom-4 left-1/2 z-20 -translate-x-1/2">
          <Dock
            items={items}
            panelHeight={70}
            baseItemSize={50}
            magnification={80}
          />
        </div>
      </body>
    </html>
  )
}
