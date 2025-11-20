"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#031B2E]/95 backdrop-blur-sm border-t border-[#1ED3C6]/30 p-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#F8FBFF] text-sm">
          This website uses cookies to improve your experience. By continuing, you agree to our use of cookies.
        </p>
        <Button
          onClick={acceptCookies}
          className="bg-[#00A8FF] hover:bg-[#1ED3C6] text-white transition-all duration-300 shrink-0"
        >
          Accept
        </Button>
      </div>
    </div>
  )
}
