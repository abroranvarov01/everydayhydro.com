import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { HeroSection } from "@/components/home/hero-section"
import { MotionSection } from "@/components/home/motion-section"
import { TopPicksSection } from "@/components/home/top-picks-section"
import { TechnologySection } from "@/components/home/technology-section"
import { VideoSection } from "@/components/home/video-section"
import { EcoSection } from "@/components/home/eco-section"
import { ReviewsSection } from "@/components/home/reviews-section"
import { AboutSection } from "@/components/home/about-section"
import { ContactSection } from "@/components/home/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MotionSection />
        <TopPicksSection />
        <TechnologySection />
        <VideoSection />
        <EcoSection />
        <ReviewsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
