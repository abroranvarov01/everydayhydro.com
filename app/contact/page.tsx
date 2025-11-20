"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        {/* Hero Section */}
        <section className="relative py-16 gradient-hydra overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute w-64 h-64 bg-white rounded-full blur-[100px] animate-float"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-center text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-white/90 text-center max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="font-heading text-3xl font-bold text-[#031B2E] mb-8">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#031B2E] mb-2">Name</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="focus:border-[#1ED3C6] focus:ring-[#1ED3C6]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#031B2E] mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="focus:border-[#1ED3C6] focus:ring-[#1ED3C6]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#031B2E] mb-2">Subject</label>
                    <Input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="focus:border-[#1ED3C6] focus:ring-[#1ED3C6]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#031B2E] mb-2">Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="focus:border-[#1ED3C6] focus:ring-[#1ED3C6] min-h-[150px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#00A8FF] hover:bg-[#1ED3C6] text-white relative overflow-hidden group"
                  >
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500"></div>
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="lg:pl-12">
                <h2 className="font-heading text-3xl font-bold text-[#031B2E] mb-8">Contact Information</h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1ED3C6]/20 to-[#00A8FF]/20 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-[#00A8FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-[#031B2E] mb-1">Email</h3>
                      <p className="text-[#031B2E]/70">support@hydrapulse.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1ED3C6]/20 to-[#00A8FF]/20 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-[#00A8FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-[#031B2E] mb-1">Phone</h3>
                      <p className="text-[#031B2E]/70">+1 989-240-7040</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1ED3C6]/20 to-[#00A8FF]/20 flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-[#00A8FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-[#031B2E] mb-1">Address</h3>
                      <p className="text-[#031B2E]/70">
                        2786 Hart Ridge Road
                        <br />
                        Saginaw, Michigan 48607
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-gradient-to-br from-[#F8FBFF] to-[#1ED3C6]/5 rounded-xl border border-[#1ED3C6]/20">
                  <h3 className="font-heading text-xl font-semibold text-[#031B2E] mb-4">Business Hours</h3>
                  <div className="space-y-2 text-sm text-[#031B2E]/70">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
