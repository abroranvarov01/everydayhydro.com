"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-[#031B2E]/95 backdrop-blur-md border-b border-[#1ED3C6]/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1ED3C6] to-[#00A8FF] flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <span className="font-heading text-2xl font-bold text-[#F8FBFF]">HydraPulse</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/products" className="text-[#F8FBFF]/80 hover:text-[#1ED3C6] transition-colors font-medium">
              Products
            </Link>
            <Link href="/about" className="text-[#F8FBFF]/80 hover:text-[#1ED3C6] transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-[#F8FBFF]/80 hover:text-[#1ED3C6] transition-colors font-medium">
              Contact
            </Link>
            
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#F8FBFF]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="/products"
              className="block text-[#F8FBFF]/80 hover:text-[#1ED3C6] transition-colors font-medium"
            >
              Products
            </Link>
            <Link href="/about" className="block text-[#F8FBFF]/80 hover:text-[#1ED3C6] transition-colors font-medium">
              About
            </Link>
            <Link
              href="/contact"
              className="block text-[#F8FBFF]/80 hover:text-[#1ED3C6] transition-colors font-medium"
            >
              Contact
            </Link>
            <Button className="w-full bg-[#00A8FF] hover:bg-[#1ED3C6] text-white transition-all duration-300">
              Shop Now
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
