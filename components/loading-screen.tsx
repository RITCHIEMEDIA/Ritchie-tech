"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide loading screen after 4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 animate-fade-out">
      <div className="text-center space-y-10">
        {/* Logo with pulse animation */}
        <div className="relative w-24 h-24 mx-auto animate-pulse-slow">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
          <Image
            src="/images/ritchie-logo.jpg"
            alt="Ritchie Tech Logo"
            width={96}
            height={96}
            className="relative z-10 rounded-full object-cover animate-float"
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
