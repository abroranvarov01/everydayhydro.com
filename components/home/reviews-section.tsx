import { Card } from "@/components/ui/card"

export function ReviewsSection() {
  const reviews = [
    {
      name: "Evelyn Carter",
      role: "Marathon Runner",
      content: "The insulation is incredible! My water stays ice cold through my entire training session.",
      rating: 5,
      avatar: "EE7733",
    },
    {
      name: "Noah Smith",
      role: "Office Professional",
      content: "Perfect for my daily commute. The smart cap tells me when my coffee is at the right temperature.",
      rating: 5,
      avatar: "00A8FF",
    },
    {
      name: "Liam Patel",
      role: "Hiking Enthusiast",
      content: "Leak-proof design is a game changer. I can throw it in my backpack without worry.",
      rating: 5,
      avatar: "1ED3C6",
    },
    {
      name: "Chloe Reed",
      role: "Yoga Instructor",
      content: "Beautiful design and eco-friendly. I love that it's BPA-free and sustainable.",
      rating: 5,
      avatar: "B9FF66",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-[#F8FBFF] to-white">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-[#031B2E] mb-4">
          Real People. Real Hydration.
        </h2>
        <p className="text-center text-[#031B2E]/60 mb-16 text-lg">See what our customers are saying</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="relative p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1ED3C6]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-heading text-lg font-semibold"
                    style={{ background: `linear-gradient(135deg, #${review.avatar}, #${review.avatar}dd)` }}
                  >
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-[#031B2E]">{review.name}</h4>
                    <p className="text-sm text-[#031B2E]/60">{review.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#B9FF66]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-[#031B2E]/80 leading-relaxed text-sm">"{review.content}"</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
