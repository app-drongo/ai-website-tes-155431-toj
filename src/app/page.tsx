import Hero from '@/components/sections/home/Hero'
import Pricing from '@/components/sections/home/Pricing'
import Reviews from '@/components/sections/home/Reviews'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="reviews">
        <Reviews />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
    </>
  )
}