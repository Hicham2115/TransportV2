import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import type { Metadata, Viewport } from "next"

import ClientShell from "./ClientShell"

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

function getSiteUrl() {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL
  if (envUrl) return envUrl

  const vercelUrl = process.env.VERCEL_URL
  if (vercelUrl) return `https://${vercelUrl}`

  return "http://localhost:3000"
}

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Transport ",
    template: "%s | Transport ",
  },
  description:
    "Premium transport services across Morocco — excursions, fleet, and seamless group travel.",
  applicationName: "Transport ",
  keywords: [
    "Transport Morocco",
    "Bus rental Morocco",
    "Group transport",
    "Excursions",
    "Casablanca",
    "Marrakech",
    "Fleet",
    "Premium travel",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: "Transport Ouhaddou",
    title: "Transport Ouhaddou",
    description:
      "Premium transport services across Morocco — excursions, fleet, and seamless group travel.",
    locale: "en_US",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "Transport Ouhaddou",
    description:
      "Premium transport services across Morocco — excursions, fleet, and seamless group travel.",
  },
}

export const viewport: Viewport = {
  themeColor: "#050505",
}

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
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  )
}
