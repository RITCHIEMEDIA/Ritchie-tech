"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide loading screen after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 animate-fade-out">
      <div className="text-center space-y-6">
        {/* Logo with pulse animation */}
        <div className="relative w-48 h-48 mx-auto animate-pulse-slow">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <Image
            src="/images/ritchie-logo.png"
            alt="Ritchie Tech Logo"
            width={192}
            height={192}
            className="relative z-10 animate-float"
            priority
          />
        </div>

        {/* Loading text */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white animate-fade-in">
            RITCHIE<span className="text-cyan-400">TECH</span>
          </h2>
          <p className="text-slate-300 animate-fade-in delay-200">Code Crafted, Solutions Unleashed</p>
        </div>

        {/* Loading bar */}
        <div className="w-64 h-1 bg-slate-700 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-loading-bar"></div>
        </div>
      </div>
    </div>
  )
}
