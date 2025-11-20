export function ProductSpecs() {
  const specs = [
    { label: "Capacity", value: "32 oz (946 ml)" },
    { label: "Material", value: "18/8 Stainless Steel" },
    { label: "Insulation", value: "Double-Wall Vacuum" },
    { label: "Cold Retention", value: "24 hours" },
    { label: "Hot Retention", value: "12 hours" },
    { label: "Dimensions", value: '10.5" H x 3.5" W' },
    { label: "Weight", value: "14 oz (empty)" },
    { label: "Lid Type", value: "Screw-on Leak-Proof" },
  ]

  return (
    <section className="container mx-auto px-4 py-16 border-t border-[#1ED3C6]/20">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center text-[#031B2E] mb-12">Tech Specs</h2>

      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-[#F8FBFF] to-white rounded-2xl border border-[#1ED3C6]/20 overflow-hidden shadow-lg">
          {specs.map((spec, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between p-6 ${
                idx !== specs.length - 1 ? "border-b border-[#1ED3C6]/10" : ""
              } hover:bg-[#1ED3C6]/5 transition-colors duration-200`}
            >
              <span className="font-heading font-semibold text-[#031B2E]">{spec.label}</span>
              <span className="text-[#031B2E]/70">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
