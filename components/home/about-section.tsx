export function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative aspect-square">
            {/* Dynamic droplet motion */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1ED3C6] to-[#00A8FF] rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src="/abstract-water-droplet-motion-blue-teal-gradient-d.jpg"
                  alt="HydraPulse Motion"
                  className="relative w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#031B2E] mb-6">About HydraPulse</h2>
            <div className="space-y-4 text-lg text-[#031B2E]/80 leading-relaxed">
              <p>
                <strong className="text-[#00A8FF]">Born from motion.</strong> We understand that life doesn't stop, and
                neither should your hydration.
              </p>
              <p>
                <strong className="text-[#1ED3C6]">Built for endurance.</strong> Every product is engineered with
                precision to withstand your most demanding adventures.
              </p>
              <p>
                <strong className="text-[#B9FF66]">Designed for style.</strong> Functionality meets aesthetics in
                products that look as good as they perform.
              </p>
              <p className="pt-4">
                From the gym to the trail, from the office to the open road, HydraPulse keeps you in flow. Our mission
                is simple: create the perfect hydration companion for every moment of your active lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
