import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import MainSlider from "@/components/sections/MainSlider"
import Features from "@/components/sections/Features"
import Playvideo from "@/components/sections/Playvideo"
import Pricing from "@/components/sections/Pricing"
import Testimonials from "@/components/sections/Testimonials"
import News from "@/components/sections/News"
import FAQ from "@/components/sections/FAQ"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <MainSlider />
      <Features />
      <Playvideo />
      <Pricing />
      <Testimonials />
      <News />
      <FAQ />
      <Footer />
    </main>
  )
}