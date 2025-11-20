import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProductsGridProps {
  activeFilter: string
}

export function ProductsGrid({ activeFilter }: ProductsGridProps) {
  const products = [
    {
      id: 1,
      slug: "owala-freesip",
      name: "Owala FreeSip Insulated Stainless Steel Water Bottle, 24 Oz",
      price: 29.99,
      rating: 4.7,
      reviews: 96142,
      image: "https://m.media-amazon.com/images/I/61sS-XIvEXL._AC_SX679_.jpg",
      features: ["24hr Cold", "Leak-Proof", "FreeSip Spout", "Push-Button Lid"],
      category: "insulated",
    },
    {
      id: 2,
      slug: "hidrate-spark-smart",
      name: "Hidrate Spark PRO 21oz Smart Straw Water Bottle",
      price: 69.99,
      rating: 4.5,
      reviews: 200,
      image: "https://m.media-amazon.com/images/I/61gL6-jlFmL._AC_SX679_.jpg",
      features: ["Hydration Tracking", "Glow Reminders", "App Sync", "24hr Cold", "Leakproof"],
      category: "smart",
    },
    {
      id: 3,
      slug: "thermos-stainless-beverage",
      name: "THERMOS Stainless Steel Beverage Bottle, 34 Ounce",
      price: 29.99,
      rating: 4.6,
      reviews: 5000,
      image: "https://m.media-amazon.com/images/I/518k4n7H6fL._AC_SY879_.jpg",
      features: ["24hr Hot/Cold", "Leak-Proof", "Sweat-Proof", "Durable Steel"],
      category: "insulated",
    },
    {
      id: 4,
      slug: "cierto-insulated-bottle",
      name: "Cierto 24 oz Insulated Water Bottle with Straw Lid",
      price: 24.99,
      rating: 4.4,
      reviews: 13,
      image: "https://m.media-amazon.com/images/I/61Fpo83HYSL._AC_SX679_.jpg",
      features: ["11hr Cold", "7hr Hot", "Leakproof Straw", "BPA-Free", "Dishwasher Safe"],
      category: "insulated",
    },
    {
      id: 5,
      slug: "duocesica-stainless-containers",
      name: "Duocesica Stainless Steel Food Containers, 18oz Leakproof",
      price: 19.99,
      rating: 4.3,
      reviews: 80,
      image: "https://m.media-amazon.com/images/I/71-zvSnx4iL._AC_SX679_PIbundle-3,TopRight,0,0_SH20_.jpg",
      features: ["Leakproof", "BPA-Free", "Dishwasher Safe", "Stackable", "Meal Prep"],
      category: "container",
    },
    {
      id: 6,
      slug: "dumbbell-water-bottle",
      name: "2.2L Dumbbell Shape Water Bottle, Eco-friendly Sports Fitness",
      price: 24.99,
      rating: 4.5,
      reviews: 1156,
      image: "https://m.media-amazon.com/images/I/617fv26pxhL._AC_SX679_.jpg",
      features: ["75oz Capacity", "Eco-Friendly", "Flip-Top Cap", "Adjustable Weight"],
      category: "fitness",
    },
    {
      id: 7,
      slug: "epica-glass-bottles",
      name: "Epica Glass Water Bottles with Silicone Sleeves",
      price: 24.99,
      rating: 4.6,
      reviews: 12000,
      image: "https://m.media-amazon.com/images/I/61FWkYPLedL._AC_SX679_.jpg",
      features: ["Leak-Proof", "BPA-Free", "Eco-Friendly", "Wide Mouth"],
      category: "glass",
    },
    {
      id: 8,
      slug: "locckmy-temperature-bottle",
      name: "Locckmy Water Bottle with LED Temperature Display",
      price: 13.79,
      rating: 4.0,
      reviews: 1480,
      image: "https://m.media-amazon.com/images/I/51xK0qXGbxL._AC_SX679_.jpg",
      features: ["LED Temp Display", "24hr Cold/12hr Hot", "Leak-Proof", "BPA-Free"],
      category: "smart",
    },
    {
      id: 9,
      slug: "echo-flask-hydrogen",
      name: "Echo Flask Hydrogen Water Bottle",
      price: 299.99,
      rating: 4.5,
      reviews: 50,
      image: "https://m.media-amazon.com/images/I/810fGlQuiBL._AC_SX679_.jpg",
      features: ["Hydrogen Generator", "App Tracking", "LCD Screen", "8ppm Hydrogen"],
      category: "hydrogen",
    },
  ]

  const filteredProducts =
    activeFilter === "all" ? products : products.filter((product) => product.category === activeFilter)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProducts.map((product) => (
        <Card
          key={product.id}
          className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
        >
          <Link href={`/products/${product.slug}`}>
            {/* Product image with reflective surface effect */}
            <div className="relative aspect-square bg-gradient-to-br from-[#F8FBFF] to-[#1ED3C6]/5 p-8 overflow-hidden">
              {/* Liquid ripple effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1ED3C6]/10 to-[#00A8FF]/10"></div>
              </div>

              {/* Droplet glint animation */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>

              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="relative w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 drop-shadow-xl"
              />
            </div>

            <div className="p-6">
              <h3 className="font-heading text-xl font-semibold text-[#031B2E] mb-2 group-hover:text-[#00A8FF] transition-colors">
                {product.name}
              </h3>

              {/* Rating */}
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
                  {product.rating} ({product.reviews})
                </span>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.features.map((feature, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 rounded-full bg-[#1ED3C6]/10 text-[#031B2E]/70">
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <Button size="sm" className="bg-[#1ED3C6] hover:bg-[#00A8FF] text-white">
                  View Details
                </Button>
              </div>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  )
}
