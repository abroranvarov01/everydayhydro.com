import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative bg-[#031B2E] text-[#F8FBFF] py-16 overflow-hidden">
      {/* Floating bubbles animation background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-32 h-32 bg-[#1ED3C6] rounded-full blur-3xl top-10 left-10 animate-float"></div>
        <div
          className="absolute w-24 h-24 bg-[#00A8FF] rounded-full blur-3xl bottom-20 right-20 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-40 h-40 bg-[#1ED3C6] rounded-full blur-3xl top-1/2 right-1/3 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4 text-[#1ED3C6]">HydraPulse</h3>
            <p className="text-sm text-[#F8FBFF]/70">Born from motion. Built for endurance. Designed for style.</p>
          </div>

          

          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-[#F8FBFF]/70 hover:text-[#1ED3C6] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#F8FBFF]/70 hover:text-[#1ED3C6] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#F8FBFF]/70 hover:text-[#1ED3C6] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[#F8FBFF]/70 hover:text-[#1ED3C6] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          
        </div>

        <div className="border-t border-[#1ED3C6]/20 pt-8 text-center text-sm text-[#F8FBFF]/60">
          <p className="mb-2">&copy; 2025 HydraPulse.com. All rights reserved.</p>
          <p className="mb-1">Participant in the Amazon Associates Program.</p>
          <p>As an Amazon Associate, we earn from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  )
}
