export function MotionSection() {
  const activities = [
    { icon: "🏃‍♀️", title: "Gym", description: "Power through workouts" },
    { icon: "🚴", title: "Cycling", description: "Ride with confidence" },
    { icon: "🏕", title: "Outdoor", description: "Adventure awaits" },
    { icon: "💻", title: "Office", description: "Stay productive" },
  ]

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#031B2E] via-[#0a2f47] to-[#031B2E] overflow-hidden">
      {/* Liquid metal gradient animation */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1ED3C6]/20 to-transparent animate-shimmer"
          style={{ backgroundSize: "200% 100%" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Engineered for Motion
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#1ED3C6] transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
            >
              {/* Ripple effect on hover */}
              <div className="absolute inset-0 bg-[#1ED3C6]/0 group-hover:bg-[#1ED3C6]/10 transition-colors duration-300"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 group-hover:w-full group-hover:h-full bg-[#1ED3C6]/20 rounded-full transition-all duration-500 blur-xl"></div>
              </div>

              <div className="relative z-10 text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {activity.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-white mb-2">{activity.title}</h3>
                <p className="text-sm text-white/70">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
