import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export const metadata = {
  title: "About Us - HydraPulse",
  description:
    "Born from motion. Built for endurance. Designed for style. Learn about HydraPulse's mission to revolutionize hydration.",
}

export default function AboutPage() {
  const timeline = [
    { year: "2020", title: "The Beginning", description: "Founded with a mission to revolutionize hydration" },
    { year: "2021", title: "First Launch", description: "Introduced our flagship insulated bottle line" },
    {
      year: "2022",
      title: "Smart Innovation",
      description: "Released the world's first temperature-sensing smart cap",
    },
    { year: "2023", title: "Eco Initiative", description: "Committed to 100% sustainable materials and packaging" },
    { year: "2024", title: "Global Reach", description: "Expanded to serve active lifestyles in 50+ countries" },
    { year: "2025", title: "The Future", description: "Continuing to innovate with AI-powered hydration tracking" },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        {/* Hero Section */}
        <section className="relative py-24 gradient-hydra overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute w-64 h-64 bg-white rounded-full blur-[100px] top-20 right-20 animate-float"></div>
            <div
              className="absolute w-96 h-96 bg-white rounded-full blur-[120px] bottom-20 left-20 animate-float"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-center text-white mb-6">
              About HydraPulse
            </h1>
            <p className="text-xl text-white/90 text-center max-w-3xl mx-auto leading-relaxed">Born from Motion</p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-[#031B2E]/80 leading-relaxed mb-6">
                  <strong className="text-[#00A8FF]">Born from motion.</strong> HydraPulse started with a simple
                  observation: people who move need hydration that moves with them. Whether you're crushing a workout,
                  conquering a trail, or navigating a busy workday, your water bottle should be a seamless part of your
                  journey.
                </p>
                <p className="text-xl text-[#031B2E]/80 leading-relaxed mb-6">
                  <strong className="text-[#1ED3C6]">Built for endurance.</strong> Every HydraPulse product undergoes
                  rigorous testing to ensure it can withstand the demands of active lifestyles. From extreme
                  temperatures to high-impact activities, our bottles are engineered to perform when you need them most.
                </p>
                <p className="text-xl text-[#031B2E]/80 leading-relaxed">
                  <strong className="text-[#B9FF66]">Designed for style.</strong> Functionality doesn't mean sacrificing
                  aesthetics. Our design philosophy blends cutting-edge technology with timeless style, creating
                  products that look as good as they perform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-gradient-to-br from-[#F8FBFF] to-white relative overflow-hidden">
          {/* Wave background */}
          <div className="absolute top-0 left-0 w-full h-32 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path
                d="M0,50 C300,100 500,0 800,50 C1000,80 1100,20 1200,50 L1200,0 L0,0 Z"
                fill="#1ED3C6"
                className="animate-wave"
              />
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-[#031B2E] mb-16">
              Our Journey
            </h2>

            <div className="max-w-4xl mx-auto">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative pl-8 pb-12 border-l-2 border-[#1ED3C6]/30 last:pb-0">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-[#00A8FF] border-4 border-white shadow-lg"></div>

                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#1ED3C6]/10">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="font-heading text-2xl font-bold text-[#00A8FF]">{item.year}</span>
                      <h3 className="font-heading text-xl font-semibold text-[#031B2E]">{item.title}</h3>
                    </div>
                    <p className="text-[#031B2E]/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-[#031B2E] mb-16">Our Values</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#1ED3C6]/20 to-[#00A8FF]/20 flex items-center justify-center text-4xl">
                  ⚡
                </div>
                <h3 className="font-heading text-2xl font-semibold text-[#031B2E] mb-4">Innovation</h3>
                <p className="text-[#031B2E]/70 leading-relaxed">
                  We constantly push boundaries to create products that redefine hydration technology.
                </p>
              </div>

              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#B9FF66]/20 to-[#1ED3C6]/20 flex items-center justify-center text-4xl">
                  🌍
                </div>
                <h3 className="font-heading text-2xl font-semibold text-[#031B2E] mb-4">Sustainability</h3>
                <p className="text-[#031B2E]/70 leading-relaxed">
                  Every product is designed with environmental responsibility at its core.
                </p>
              </div>

              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#00A8FF]/20 to-[#1ED3C6]/20 flex items-center justify-center text-4xl">
                  💪
                </div>
                <h3 className="font-heading text-2xl font-semibold text-[#031B2E] mb-4">Quality</h3>
                <p className="text-[#031B2E]/70 leading-relaxed">
                  We never compromise on materials, craftsmanship, or performance.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
