"use client"
import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Lenis from "@studio-freight/lenis"

export default function SmoothScroll() {
  const pathname = usePathname()
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    })

    lenisRef.current = lenis

    let rafId = 0
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!lenisRef.current) return
    lenisRef.current.scrollTo(0, { immediate: false })
  }, [pathname])

  return null
}
