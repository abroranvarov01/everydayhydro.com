"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <section className="py-24 bg-gradient-to-br from-[#031B2E] to-[#0a3f5c] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-64 h-64 bg-[#1ED3C6] rounded-full blur-[100px] top-20 right-20 animate-float"></div>
        <div
          className="absolute w-96 h-96 bg-[#00A8FF] rounded-full blur-[120px] bottom-20 left-20 animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Get in Touch. Stay Hydrated.
          </h2>
          <p className="text-center text-white/80 mb-12 text-lg">Have questions? We'd love to hear from you.</p>

          <form className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                className={`bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#1ED3C6] transition-all duration-300 ${isFocused ? "ring-2 ring-[#1ED3C6]/50" : ""}`}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#1ED3C6] transition-all duration-300"
              />
            </div>

            <div>
              <Textarea
                placeholder="Your Message"
                rows={5}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#1ED3C6] transition-all duration-300 resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#1ED3C6] hover:bg-[#00A8FF] text-white relative overflow-hidden group"
            >
              <span className="relative z-10">Send Message</span>
              {/* Ripple effect */}
              <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500"></div>
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
