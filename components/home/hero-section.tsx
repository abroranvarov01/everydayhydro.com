"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden gradient-hydra">
      {/* Animated water particles background */}
      <div className="absolute inset-0">
        <div className="absolute w-2 h-2 bg-white/30 rounded-full top-[20%] left-[10%] animate-float blur-sm"></div>
        <div
          className="absolute w-3 h-3 bg-white/20 rounded-full top-[60%] left-[30%] animate-float blur-sm"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-white/30 rounded-full top-[40%] right-[20%] animate-float blur-sm"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-4 h-4 bg-white/15 rounded-full top-[70%] right-[40%] animate-float blur-sm"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute w-2 h-2 bg-white/25 rounded-full top-[30%] left-[50%] animate-float blur-sm"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Stay in Flow<span className="text-[#B9FF66]">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Smart hydration gear for every adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/products">
                <Button
                  size="lg"
                  className="relative bg-[#00A8FF] hover:bg-[#00A8FF]/90 text-white px-8 py-6 text-lg group overflow-hidden"
                >
                  <span className="relative z-10">Shop Bottles</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Button>
              </Link>
              <Link href="/products?filter=thermos">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#031B2E] px-8 py-6 text-lg transition-all duration-300 bg-transparent"
                >
                  View Thermos
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* 3D bottle placeholder with swirling effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-96 animate-float">
                  <img
                    src="/sleek-metallic-water-bottle-with-gradient-blue-to-.jpg"
                    alt="HydraPulse Water Bottle"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                  {/* Swirling particles */}
                  <div className="absolute -inset-20">
                    <div
                      className="absolute w-3 h-3 bg-[#B9FF66] rounded-full top-0 left-1/2 animate-[spin_8s_linear_infinite]"
                      style={{ transformOrigin: "0 200px" }}
                    ></div>
                    <div
                      className="absolute w-2 h-2 bg-white rounded-full top-1/4 right-0 animate-[spin_6s_linear_infinite_reverse]"
                      style={{ transformOrigin: "-100px 150px" }}
                    ></div>
                    <div
                      className="absolute w-4 h-4 bg-[#00A8FF]/50 rounded-full bottom-1/4 left-0 animate-[spin_10s_linear_infinite]"
                      style={{ transformOrigin: "100px -100px" }}
                    ></div>
                  </div>
                </div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1ED3C6]/30 to-transparent blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
