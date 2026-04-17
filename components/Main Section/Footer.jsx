import React from "react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#18181a] px-6 pt-14 md:px-14">
      {/* Decorative slanted lines — matches your hero panel aesthetic */}
      <svg
        className="pointer-events-none absolute top-0 right-0 z-0 h-full w-[80%] md:w-[55%]"
        viewBox="0 0 600 400"
        fill="none"
        preserveAspectRatio="xMaxYMin meet"
      >
        {[500, 560, 440, 380, 320].map((x, i) => (
          <line
            key={i}
            x1={x}
            y1="-20"
            x2={x - 200}
            y2="420"
            stroke={`rgba(255,255,255,${0.04 - i * 0.005})`}
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="relative z-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2">
          {/* Left — logo + newsletter */}
          <div className="flex flex-col justify-between gap-8">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-[6px] bg-[#2557ff]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 16L10 4L16 16"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 11h6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  LOGO NAME
                </span>
              </div>
              <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-zinc-400">
                Premium bus journeys across Morocco — safe, reliable, and
                designed for a smooth experience.
              </p>
            </div>

            <div>
              <p className="mb-2.5 text-[10px] font-semibold tracking-[0.12em] text-zinc-500 uppercase">
                Stay updated
              </p>
              <div className="flex w-full max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full min-w-0 flex-1 rounded-l-[6px] border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-[#3D69FF]"
                />
                <button className="shrink-0 cursor-pointer rounded-r-[6px] bg-[#2557ff] px-4 text-sm font-medium text-white transition-colors hover:bg-[#2b4bcc]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Right — nav + contact */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-12">
            <div>
              <p className="mb-3.5 text-[10px] font-semibold tracking-[0.14em] text-zinc-500 uppercase">
                Navigation
              </p>
              <nav className="flex flex-col gap-2.5">
                {["Home", "Excursions", "Our Story", "Our Fleet"].map(
                  (item) => (
                    <Link
                      key={item}
                      href="#"
                      className="text-sm text-zinc-400 transition-colors hover:text-[#3D69FF]"
                    >
                      {item}
                    </Link>
                  )
                )}
              </nav>
            </div>

            <div>
              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.12em] text-zinc-500 uppercase">
                    Address
                  </p>
                  <p className="mt-1 text-sm leading-relaxed font-medium text-zinc-200">
                    LOGO NAME
                    <br />
                    Casablanca, Morocco
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.12em] text-zinc-500 uppercase">
                    Email
                  </p>
                  <a
                    href="mailto:hello@nextway.ma"
                    className="mt-1 block text-sm font-medium text-zinc-200 hover:text-[#3D69FF]"
                  >
                    hello@nextway.ma
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.12em] text-zinc-500 uppercase">
                    Phone
                  </p>
                  <p className="mt-1 text-sm font-medium text-zinc-200">
                    +212 600 000 000
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.12em] text-zinc-500 uppercase">
                    Socials
                  </p>
                  <div className="mt-2 flex gap-2">
                    {/* LinkedIn */}
                    <a
                      href="#"
                      className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-white/10 bg-white/5 transition-colors hover:border-[#3D69FF] hover:bg-white/10"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"
                          stroke="#e4e4e7"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <rect
                          x="2"
                          y="9"
                          width="4"
                          height="12"
                          stroke="#e4e4e7"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="4"
                          cy="4"
                          r="2"
                          stroke="#e4e4e7"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </a>
                    {/* X/Twitter */}
                    <a
                      href="#"
                      className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-white/10 bg-white/5 transition-colors hover:border-[#3D69FF] hover:bg-white/10"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M4 4l16 16M4 20L20 4"
                          stroke="#e4e4e7"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                    {/* Instagram */}
                    <a
                      href="#"
                      className="flex h-8 w-8 items-center justify-center rounded-[6px] border border-white/10 bg-white/5 transition-colors hover:border-[#3D69FF] hover:bg-white/10"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          stroke="#e4e4e7"
                          strokeWidth="1.5"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="4"
                          stroke="#e4e4e7"
                          strokeWidth="1.5"
                        />
                        <circle cx="17.5" cy="6.5" r="1" fill="#e4e4e7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-zinc-500">
            ©{new Date().getFullYear()} LOGO NAME. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {["Privacy policy", "Terms of use", "Cookie settings"].map(
              (link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-xs text-zinc-500 transition-colors hover:text-[#3D69FF]"
                >
                  {link}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
