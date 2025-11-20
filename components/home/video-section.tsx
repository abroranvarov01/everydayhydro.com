export function VideoSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background video simulation with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#031B2E] via-[#0a3f5c] to-[#031B2E]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#1ED3C6] rounded-full blur-[100px] animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00A8FF] rounded-full blur-[120px] animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative aspect-video bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden mb-8 border border-white/10">
            <img
              src="/water-droplets-and-steam-condensation-on-metallic-.jpg"
              alt="Temperature Control Video"
              className="w-full h-full object-cover"
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              
            </div>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            The Art of Perfect Temperature
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">Hot stays hot. Cold stays cold. Always in style.</p>
        </div>
      </div>
    </section>
  )
}
