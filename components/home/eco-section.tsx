export function EcoSection() {
  const commitments = [
    {
      title: "Reusable Materials",
      description: "Premium stainless steel and glass designed to last for years",
      icon: "♻️",
    },
    {
      title: "BPA-Free",
      description: "All our products are 100% BPA-free and food-grade safe",
      icon: "✓",
    },
    {
      title: "Sustainable Packaging",
      description: "Recyclable packaging made from post-consumer materials",
      icon: "📦",
    },
  ]

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Green wave pattern */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,50 C300,100 500,0 800,50 C1000,80 1100,20 1200,50 L1200,120 L0,120 Z"
            fill="#B9FF66"
            className="animate-wave"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#031B2E] mb-4">Eco Commitment</h2>
          <p className="text-lg text-[#031B2E]/60 max-w-2xl mx-auto">Hydration that's good for you and the planet</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {commitments.map((commitment, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#B9FF66]/20 to-[#1ED3C6]/20 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                {commitment.icon}
              </div>
              <h3 className="font-heading text-xl font-semibold text-[#031B2E] mb-3">{commitment.title}</h3>
              <p className="text-[#031B2E]/70 leading-relaxed">{commitment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
