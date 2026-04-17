import Hero from "@/components/Main Section/Hero"
import FirstSection from "@/components/Main Section/FirstSection"
import SecondSection from "@/components/Main Section/SecondSection"
import ThirdSection from "@/components/Main Section/ThirdSection"
import SmoothScroll from "@/components/Main Section/SmoothScroll"
import FAQ from "@/components/Main Section/FAQ"
import FourthSection from "@/components/Main Section/FourthSection"
import Footer from "@/components/Main Section/Footer"
import Contact from "@/components/Main Section/Contact"

function Page() {
  return (
    <div>
      <Hero />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <SmoothScroll />
      <FAQ />
      <FourthSection />

      <Contact />
    </div>
  )
}

export default Page
