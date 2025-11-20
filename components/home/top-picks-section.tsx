import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function TopPicksSection() {
  const products = [
    {
      id: 1,
      slug: "owala-freesip",
      name: "Owala FreeSip Insulated Stainless Steel Water Bottle, 24 Oz",
      price: "$29.99",
      rating: 4.7,
      reviews: 96142,
      image: "https://m.media-amazon.com/images/I/61sS-XIvEXL._AC_SX679_.jpg",
      features: ["24hr Cold", "Leak-Proof", "FreeSip Spout"],
    },
    {
      id: 2,
      slug: "hidrate-spark-smart",
      name: "Hidrate Spark PRO 21oz Smart Straw Water Bottle",
      price: "$69.99",
      rating: 4.5,
      reviews: 200,
      image: "https://m.media-amazon.com/images/I/61gL6-jlFmL._AC_SX679_.jpg",
      features: ["Hydration Tracking", "Glow Reminders", "App Sync"],
    },
    {
      id: 4,
      slug: "epica-glass-bottles",
      name: "Epica Glass Water Bottles with Silicone Sleeves",
      price: "$24.99",
      rating: 4.6,
      reviews: 12000,
      image: "https://m.media-amazon.com/images/I/61FWkYPLedL._AC_SX679_.jpg",
      features: ["BPA-Free", "Eco-Friendly", "Wide Mouth"],
    },
    {
      id: 5,
      slug: "dumbbell-water-bottle",
      name: "2.2L Dumbbell Shape Water Bottle, Eco-friendly Sports Fitness",
      price: "$24.99",
      rating: 4.5,
      reviews: 1156,
      image: "https://m.media-amazon.com/images/I/617fv26pxhL._AC_SX679_.jpg",
      features: ["75oz Capacity", "Eco-Friendly", "Flip-Top Cap"],
    },
    {
      id: 6,
      slug: "cierto-insulated-bottle",
      name: "Cierto 24 oz Insulated Water Bottle with Straw Lid",
      price: "$24.99",
      rating: 4.4,
      reviews: 13,
      image: "https://m.media-amazon.com/images/I/61Fpo83HYSL._AC_SX679_.jpg",
      features: ["11hr Cold", "7hr Hot", "Leakproof Straw"],
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-[#031B2E] mb-4">
          Top Picks of the Week
        </h2>
        <p className="text-center text-[#031B2E]/60 mb-16 text-lg">Discover our most popular hydration solutions</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <Link href={`/products/${product.slug}`}>
                <div className="aspect-square bg-gradient-to-br from-[#031B2E]/5 to-[#1ED3C6]/10 p-8 relative overflow-hidden">
                  {/* Light reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/40 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>

                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-[#031B2E] mb-2 group-hover:text-[#00A8FF] transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-[#B9FF66]" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-[#031B2E]/60">
                      {product.rating} ({product.reviews.toLocaleString()})
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded-full bg-[#1ED3C6]/10 text-[#031B2E]/70">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <Button size="sm" className="bg-[#1ED3C6] hover:bg-[#00A8FF] text-white">
                      View
                    </Button>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products">
            <Button size="lg" className="bg-[#031B2E] hover:bg-[#031B2E]/90 text-white px-12">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
