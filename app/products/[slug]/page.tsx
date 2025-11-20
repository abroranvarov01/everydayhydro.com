import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { ProductHero } from "@/components/product/product-hero"
import { ProductFeatures } from "@/components/product/product-features"
import { ProductSpecs } from "@/components/product/product-specs"
import { ProductReviews } from "@/components/product/product-reviews"
import { ProductCTA } from "@/components/product/product-cta"

export const metadata = {
  title: "Product Details - HydraPulse",
  description: "Discover premium hydration solutions with advanced technology and design.",
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 bg-white">
        <ProductHero productSlug={params.slug} />
        <ProductFeatures />
        <ProductSpecs />
        <ProductReviews />
        <ProductCTA />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
