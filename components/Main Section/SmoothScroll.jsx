"use client"
import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Lenis from "@studio-freight/lenis"

export default function SmoothScroll() {
  const pathname = usePathname()
  const lenisRef = useRef(null)

  const scrollToHash = (hash) => {
    if (!lenisRef.current) return
    const id = (hash || "").replace(/^#/, "")
    if (!id) return

    const el = document.getElementById(id)
    if (!el) return

    // Offset for the sticky header
    lenisRef.current.scrollTo(el, {
      immediate: false,
      offset: -80,
      duration: 2.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    })
  }

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    })

    lenisRef.current = lenis

    // Allow other components to reuse Lenis (e.g. buttons that scroll to sections)
    window.__lenis = lenis

    let rafId = 0
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // If the page loads with a hash, scroll to it smoothly
    const t = setTimeout(() => scrollToHash(window.location.hash), 0)

    const onHashChange = () => scrollToHash(window.location.hash)
    window.addEventListener("hashchange", onHashChange)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      clearTimeout(t)
      window.removeEventListener("hashchange", onHashChange)
      lenis.destroy?.()
      lenisRef.current = null
      if (window.__lenis === lenis) delete window.__lenis
    }
  }, [])

  useEffect(() => {
    if (!lenisRef.current) return

    if (window.location.hash) {
      // Navigated to a hash route (e.g. /#contact)
      const t = setTimeout(() => scrollToHash(window.location.hash), 0)
      return () => clearTimeout(t)
    }

    lenisRef.current.scrollTo(0, { immediate: false })
  }, [pathname])

  return null
}
