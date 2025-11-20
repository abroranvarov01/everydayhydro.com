import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export const metadata = {
  title: "Terms of Service - HydraPulse",
  description: "Read our terms of service and conditions for using HydraPulse products and services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#031B2E]">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">Terms of Service</h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-white/80 mb-8">Last updated: January 2025</p>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-white/70 leading-relaxed">
                By accessing and using HydraPulse.com, you accept and agree to be bound by the terms and provision of
                this agreement. If you do not agree to these terms, please do not use our website or purchase our
                products.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-white mb-4">2. Use License</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on HydraPulse's website for
                personal, non-commercial transitory viewing only.
              </p>
              <p className="text-white/70 leading-relaxed">
                This is the grant of a license, not a transfer of title, and under this license you may not modify or
                copy the materials, use the materials for any commercial purpose, or attempt to decompile or reverse
                engineer any software contained on HydraPulse's website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-white mb-4">3. Product Information</h2>
              <p className="text-white/70 leading-relaxed">
                We strive to provide accurate product descriptions and pricing. However, we do not warrant that product
                descriptions or other content is accurate, complete, reliable, current, or error-free.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-white mb-4">4. Amazon Associates Disclosure</h2>
              <p className="text-white/70 leading-relaxed">
                HydraPulse is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
                program designed to provide a means for sites to earn advertising fees by advertising and linking to
                Amazon.com. As an Amazon Associate, we earn from qualifying purchases.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
              <p className="text-white/70 leading-relaxed">
                In no event shall HydraPulse or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the materials on HydraPulse's website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-white mb-4">6. Governing Law</h2>
              <p className="text-white/70 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the United
                States and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-white mb-4">7. Contact Information</h2>
              <p className="text-white/70 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at legal@hydrapulse.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
