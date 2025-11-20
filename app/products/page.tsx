"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { ProductsGrid } from "@/components/products/products-grid"
import { ProductFilters } from "@/components/products/product-filters"

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 bg-gradient-to-br from-[#F8FBFF] to-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-[#031B2E] mb-4">Our Collection</h1>
            <p className="text-xl text-[#031B2E]/60 max-w-2xl mx-auto">
              Premium hydration solutions engineered for your lifestyle
            </p>
          </div>

          <ProductFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
          <ProductsGrid activeFilter={activeFilter} />
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
