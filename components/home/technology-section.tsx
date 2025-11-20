export function TechnologySection() {
  const features = [
    {
      title: "Double-Wall Insulation",
      description: "Advanced vacuum technology keeps drinks at perfect temperature for 24+ hours",
      icon: "❄️",
    },
    {
      title: "Leak-Proof Design",
      description: "Precision-engineered seal prevents spills in any position",
      icon: "🔒",
    },
    {
      title: "Smart Temperature Sensor",
      description: "LED display shows real-time liquid temperature at a glance",
      icon: "🌡️",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-[#F8FBFF] to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
            fill="#1ED3C6"
            className="animate-wave"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-[#031B2E] mb-4">
          Hydration Intelligence
        </h2>
        <p className="text-center text-[#031B2E]/60 mb-16 text-lg max-w-2xl mx-auto">
          Cutting-edge technology meets timeless design
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg border border-[#1ED3C6]/20 hover:border-[#1ED3C6] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="font-heading text-xl font-semibold text-[#031B2E] mb-3">{feature.title}</h3>
              <p className="text-[#031B2E]/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive diagram */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-12 shadow-xl border border-[#1ED3C6]/20">
          <div className="relative aspect-video bg-gradient-to-br from-[#031B2E]/5 to-[#1ED3C6]/10 rounded-xl flex items-center justify-center">
            <img src="/technical-diagram-showing-water-bottle-insulation-.jpg" alt="Technology Diagram" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
