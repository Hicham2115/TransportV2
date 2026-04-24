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
// import { SmoothCursor } from "@/components/ui/smooth-cursor"

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
        <div className="bg-red-20/40 fixed inset-0 -z-1">
          {/* <Grainient
            color1="#ffffff"
            color2="#e6697e"
            color3="#ffffff"
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
            grainAmount={0.31}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          /> */}
        </div>

        {/* Content */}
        <main className="relative z-10 min-h-screen">
          {children}
          <Footer />
        </main>

        <AppDock />

        <SmoothScroll />

        {/* <SmoothCursor /> */}
      </body>
    </html>
  )
}
