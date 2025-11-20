"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function ProductHero({ productSlug }: { productSlug: string }) {
  const [currentImage, setCurrentImage] = useState(0)

  const productData: Record<string, any> = {
    "owala-freesip": {
      name: "Owala FreeSip Insulated Stainless Steel Water Bottle, 24 Oz",
      amazonUrl: "https://www.amazon.com/Owala-FreeSip-Insulated-Stainless-BPA-Free/dp/B0BZYCJK89",
      price: 29.99,
      rating: 4.7,
      reviews: 96142,
      description:
        "The Owala FreeSip Insulated Stainless-Steel Water Bottle with Locking Push-Button Lid easily tackles every thirst. With a built-in, easy-clean straw and a wide-mouth opening, the FreeSip reusable bottle is designed for drinking two different ways: sipping upright through the straw or tilting back to swig from the wide-mouth spout opening. Add in a push-to-open lid and playful colors, and staying hydrated has never been simpler—or more fun. Double-wall insulation keeps drinks cold up to 24 hours.",
      images: ["https://m.media-amazon.com/images/I/61sS-XIvEXL._AC_SX679_.jpg"],
      colors: ["Denim", "All the Berries", "Black Cherry", "Blue Citrus", "Tropical"],
    },
    "hidrate-spark-smart": {
      name: "Hidrate Spark PRO 21oz Smart Straw Water Bottle",
      amazonUrl: "https://www.amazon.com/Hidrate-Spark-Smart-Straw-Bottle/dp/B0FJ8RQCS1",
      price: 69.99,
      rating: 4.5,
      reviews: 200,
      description:
        "Smart water bottle with app connectivity to track hydration and glow reminders. Features a spill-proof straw lid and BPA-free construction for daily use.",
      images: ["https://m.media-amazon.com/images/I/61gL6-jlFmL._AC_SX679_.jpg"],
      colors: ["ChillFiesta", "Midnight", "Blush"],
    },
    "thermos-stainless-beverage": {
      name: "THERMOS Stainless Steel Beverage Bottle, 34 Ounce",
      amazonUrl: "https://www.amazon.com/THERMOS-Stainless-Beverage-Bottle-Ounce/dp/B08JX32JHP",
      price: 29.99,
      rating: 4.6,
      reviews: 5000,
      description:
        "Durable stainless steel insulated bottle keeps beverages hot for 24 hours or cold for 24 hours. Features a leak-proof lid and sweat-proof exterior for on-the-go use.",
      images: ["https://m.media-amazon.com/images/I/518k4n7H6fL._AC_SY879_.jpg"],
      colors: ["Matte Black", "Stainless Steel", "Midnight Blue"],
    },
    "cierto-insulated-bottle": {
      name: "Cierto 24 oz Insulated Water Bottle with Straw Lid",
      amazonUrl: "https://www.amazon.com/Cierto-Insulated-Bottle-Workout-Friendly/dp/B0F9KHKRWJ",
      price: 24.99,
      rating: 4.4,
      reviews: 13,
      description:
        "Double wall vacuum insulated stainless steel bottle designed for workouts and daily use, keeping drinks cold for up to 11 hours or hot for 7 hours. Includes leakproof flip straw lid, carrying loop, and is BPA-free and dishwasher safe.",
      images: ["https://m.media-amazon.com/images/I/61Fpo83HYSL._AC_SX679_.jpg"],
      colors: ["Black", "Gray", "White"],
    },
    "duocesica-stainless-containers": {
      name: "Duocesica Stainless Steel Food Containers, 18oz Leakproof",
      amazonUrl: "https://www.amazon.com/Duocesica-Stainless-Containers-Refrigerator-Travel-18oz/dp/B0DLWZJPJB",
      price: 19.99,
      rating: 4.3,
      reviews: 80,
      description:
        "Set of leakproof stainless steel containers ideal for meal prep, travel, and refrigeration. BPA-free, dishwasher safe, and stackable for easy storage.",
      images: ["https://m.media-amazon.com/images/I/71-zvSnx4iL._AC_SX679_PIbundle-3,TopRight,0,0_SH20_.jpg"],
      colors: ["Silver"],
    },
    "dumbbell-water-bottle": {
      name: "2.2L Dumbbell Shape Water Bottle, Eco-friendly Sports Fitness",
      amazonUrl: "https://www.amazon.com/Dumbbell-Eco-friendly-Fitness-Exercise-Outdoors/dp/B0722VN5ZL",
      price: 24.99,
      rating: 4.5,
      reviews: 1156,
      description:
        "Unique 2.2L / 75oz dumbbell-shaped water bottle made from eco-friendly PETG material, perfect for gym, yoga, running, and outdoors. Features flip-top cap and can double as adjustable weights based on water level.",
      images: ["https://m.media-amazon.com/images/I/617fv26pxhL._AC_SX679_.jpg"],
      colors: ["Black", "Transparent"],
    },
    "epica-glass-bottles": {
      name: "Epica Glass Water Bottles with Silicone Sleeves",
      amazonUrl: "https://www.amazon.com/Epica-glass-bottles-lids-ecofriendly/dp/B00I0YNYSI",
      price: 24.99,
      rating: 4.6,
      reviews: 12000,
      description:
        "Eco-friendly glass bottles with protective silicone sleeves and airtight bamboo lids. Ideal for infusing fruits or storing beverages sustainably.",
      images: ["https://m.media-amazon.com/images/I/61FWkYPLedL._AC_SX679_.jpg"],
      colors: ["Clear Glass with Blue Sleeve", "Clear Glass with Green Sleeve"],
    },
    "locckmy-temperature-bottle": {
      name: "Locckmy Water Bottle with LED Temperature Display",
      amazonUrl: "https://www.amazon.com/Locckmy-Temperature-Insulated-Stainless-AutomotiveTravel/dp/B085XHQ17Z",
      price: 13.79,
      rating: 4.0,
      reviews: 1480,
      description:
        "Smart insulated stainless steel bottle with LED display for real-time temperature. Keeps cold for 24 hours or hot for 12 hours, leak-proof and BPA-free.",
      images: ["https://m.media-amazon.com/images/I/51xK0qXGbxL._AC_SX679_.jpg"],
      colors: ["Black", "Silver", "Rose Gold"],
    },
    "echo-flask-hydrogen": {
      name: "Echo Flask Hydrogen Water Bottle",
      amazonUrl: "https://www.amazon.com/Echo-Flask-Hydrogen-Water-Bottle/dp/B0DQBP8QYS",
      price: 299.99,
      rating: 4.5,
      reviews: 50,
      description:
        "Advanced hydrogen water bottle with LCD touch screen and app for intake tracking. Generates up to 8 ppm hydrogen-rich water for enhanced hydration and health benefits.",
      images: ["https://m.media-amazon.com/images/I/810fGlQuiBL._AC_SX679_.jpg"],
      colors: ["Transparent"],
    },
  }

  const product = productData[productSlug] || productData["arctic-flow-pro"]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  const openAmazonLink = () => {
    window.open(product.amazonUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="container mx-auto px-4 mb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Image Carousel */}
        <div className="sticky top-24">
          <div className="relative aspect-square bg-gradient-to-br from-[#F8FBFF] to-[#1ED3C6]/5 rounded-2xl overflow-hidden mb-4">
            {/* Shimmer lighting effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"></div>

            <div className="relative w-full h-full p-12 flex items-center justify-center">
              <img
                src={product.images[currentImage] || "/placeholder.svg"}
                alt={`${product.name} - View ${currentImage + 1}`}
                className="w-full h-full object-contain drop-shadow-2xl animate-float"
              />
            </div>

            {/* Navigation arrows */}
            
            
          </div>

          {/* Thumbnail navigation */}
          <div className="grid grid-cols-4 gap-4">{product.images.map((_, idx) => null)}</div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#031B2E] mb-4">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(product.rating) ? "text-[#B9FF66]" : "text-gray-300"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[#031B2E]/70">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-lg text-[#031B2E]/80 leading-relaxed mb-8">{product.description}</p>

          {/* Price */}
          <div className="mb-8">
            
          </div>

          {/* Color selection */}
          <div className="mb-8">
            <h3 className="font-heading text-lg font-semibold text-[#031B2E] mb-4">Choose Color</h3>
            <div className="flex gap-3">
              {product.colors.map((color, idx) => (
                <button
                  key={idx}
                  className="px-4 py-2 rounded-lg border-2 border-[#1ED3C6]/30 hover:border-[#1ED3C6] hover:bg-[#1ED3C6]/10 transition-all duration-300 text-sm font-medium text-[#031B2E]"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={openAmazonLink}
              className="flex-1 bg-[#00A8FF] hover:bg-[#1ED3C6] text-white text-lg py-6 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View on Amazon
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
