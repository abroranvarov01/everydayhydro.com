import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export const metadata = {
  title: "Privacy Policy - HydraPulse",
  description: "Learn how HydraPulse collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#031B2E]">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-white/80 mb-8">Last updated: January 2025</p>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you create an account, make a purchase,
                subscribe to our newsletter, or contact us for support.
              </p>
              <p className="text-white/70 leading-relaxed">
                This may include your name, email address, postal address, phone number, and payment information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-white/70 leading-relaxed">
                We use the information we collect to process your orders, communicate with you about your purchases,
                send you marketing communications (with your consent), improve our website and services, and comply with
                legal obligations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-white mb-4">3. Cookies and Tracking</h2>
              <p className="text-white/70 leading-relaxed">
                We use cookies and similar tracking technologies to collect information about your browsing activities.
                You can control cookies through your browser settings, but please note that disabling cookies may affect
                the functionality of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-white mb-4">4. Information Sharing</h2>
              <p className="text-white/70 leading-relaxed">
                We do not sell your personal information. We may share your information with service providers who
                assist us in operating our website and conducting our business, or when required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-white mb-4">5. Data Security</h2>
              <p className="text-white/70 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized or unlawful processing, accidental loss, destruction, or damage.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
              <p className="text-white/70 leading-relaxed">
                You have the right to access, correct, or delete your personal information. You may also object to or
                restrict certain processing of your information. To exercise these rights, please contact us at
                privacy@hydrapulse.com
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-white mb-4">7. Changes to This Policy</h2>
              <p className="text-white/70 leading-relaxed">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-white mb-4">8. Contact Us</h2>
              <p className="text-white/70 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at privacy@hydrapulse.com
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
