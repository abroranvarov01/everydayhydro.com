export function ProductFeatures() {
  const features = [
    {
      title: "Temperature Control",
      description: "Advanced double-wall vacuum insulation maintains temperature for 24+ hours",
      icon: "🌡️",
    },
    {
      title: "Premium Materials",
      description: "Food-grade 18/8 stainless steel construction that will never rust",
      icon: "✨",
    },
    {
      title: "Leak-Proof Seal",
      description: "Engineered cap with silicone gasket prevents any spills or leaks",
      icon: "🔒",
    },
    {
      title: "Easy to Clean",
      description: "Wide mouth opening allows for easy cleaning and ice cube insertion",
      icon: "🧼",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 border-t border-[#1ED3C6]/20">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-[#031B2E] mb-12">Features</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#1ED3C6]/20 to-[#00A8FF]/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="font-heading text-lg font-semibold text-[#031B2E] mb-2">{feature.title}</h3>
            <p className="text-sm text-[#031B2E]/70 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
