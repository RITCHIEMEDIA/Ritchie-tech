"use client"

import { useEffect, useState } from "react"

export default function KonamiCode() {
  const [easterEggActive, setEasterEggActive] = useState(false)
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
  const [userInput, setUserInput] = useState<string[]>([])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newInput = [...userInput, e.key].slice(-10)
      setUserInput(newInput)

      // Check if konami code matches
      if (JSON.stringify(newInput) === JSON.stringify(konamiCode)) {
        setEasterEggActive(true)
        
        // Show confetti effect
        createConfetti()
        
        // Reset after 5 seconds
        setTimeout(() => {
          setEasterEggActive(false)
          setUserInput([])
        }, 5000)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [userInput])

  const createConfetti = () => {
    const duration = 3000
    const animationEnd = Date.now() + duration
    const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b']

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div')
        particle.className = 'confetti-particle'
        particle.style.cssText = `
          position: fixed;
          width: 10px;
          height: 10px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          left: ${randomInRange(0, 100)}%;
          top: -10px;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          animation: confettiFall ${randomInRange(2, 4)}s linear forwards;
          opacity: ${randomInRange(0.5, 1)};
        `
        document.body.appendChild(particle)
        
        setTimeout(() => {
          particle.remove()
        }, 4000)
      }
    }, 250)
  }

  if (!easterEggActive) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] flex items-center justify-center">
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl shadow-2xl animate-scale-in text-center">
        <div className="text-4xl mb-2">🎉</div>
        <div className="text-2xl font-bold mb-1">You Found the Secret!</div>
        <div className="text-sm opacity-90">Welcome to the Matrix, Neo! 😎</div>
      </div>
    </div>
  )
}
