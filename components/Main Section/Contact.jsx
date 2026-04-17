import React from "react"
import Image from "next/image"
import contactImg from "@/app/assets/sds.jpg"

function Contact() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center p-6 py-20 md:p-16">
      <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-6 lg:flex-row lg:gap-8">
        {/* Left Side Image */}
        <div
          className="relative h-[400px] w-full shrink-0 lg:h-auto lg:w-[350px] xl:w-[400px]"
          style={{
            clipPath:
              "polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)",
          }}
        >
          {/* A shadow drop div won't work on clip-path directly, so it sits flush to the right container */}
          <Image
            src={contactImg}
            alt="Contact Transport"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* Right Side Form Container */}
        <div
          className="flex-1 bg-white/10 p-6 p-8 shadow-sm backdrop-blur-xl md:p-14 lg:p-16"
          style={{
            clipPath:
              "polygon(40px 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%, 0 40px)",
          }}
        >
          <div className="mb-12 flex items-center gap-3">
            <h2 className="text-3xl font-bold md:text-4xl">Contact</h2>
            <span className="text-3xl font-light text-gray-400 md:text-4xl">
              /
            </span>
            <span className="text-xl font-semibold text-white/90 md:text-xl">
              Nous parler
            </span>
          </div>

          <form className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold">Nom complet</label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full border border-gray-200 bg-white px-4 py-3.5 text-sm text-black placeholder:text-gray-400 focus:border-[#3D69FF] focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold">Adresse email</label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full border border-gray-200 bg-white px-4 py-3.5 text-sm text-black placeholder:text-gray-400 focus:border-[#3D69FF] focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold">Téléphone</label>
                  <input
                    type="tel"
                    placeholder="+212 6XX XXX XXX"
                    className="w-full border border-gray-200 bg-white px-4 py-3.5 text-sm text-black placeholder:text-gray-400 focus:border-[#3D69FF] focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold">Sujet</label>
                  <input
                    type="text"
                    placeholder="Objet de votre message"
                    className="w-full border border-gray-200 bg-white px-4 py-3.5 text-sm text-black placeholder:text-gray-400 focus:border-[#3D69FF] focus:outline-none"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold">Message</label>
                <textarea
                  placeholder="Écrivez votre message ici..."
                  rows={5}
                  className="w-full resize-none border border-gray-200 bg-white px-4 py-3.5 text-sm text-black placeholder:text-gray-400 focus:border-[#3D69FF] focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-2">
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center overflow-hidden bg-[#3D69FF] px-8 py-3.5 font-medium text-white shadow-[0_0_30px_rgba(61,105,255,0.3)] transition-all duration-300 ease-out hover:bg-[#2557ff] hover:shadow-[0_0_50px_rgba(61,105,255,0.5)]"
              >
                {/* Shine sweep effect */}
                <span className="absolute inset-0 flex h-full w-full [transform:skew(-13deg)_translateX(-150%)] justify-center group-hover:[transform:skew(-13deg)_translateX(150%)] group-hover:duration-1000">
                  <div className="relative h-full w-10 bg-white/20 blur-md" />
                </span>

                <span className="relative flex items-center gap-2">
                  Envoyer le message
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
