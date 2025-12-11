"use client"

import { useState } from "react"
import Link from "next/link"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)
  const whatsappNumber = "2349079928298"
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Quick message bubble */}
        {isOpen && (
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl p-4 max-w-xs animate-scale-in">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                  Chat with Isaac
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Hi! 👋 How can I help you today?
                </p>
                <Button asChild size="sm" className="mt-3 w-full bg-green-500 hover:bg-green-600">
                  <Link href={whatsappUrl} target="_blank">
                    Start Chat
                  </Link>
                </Button>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Main FAB */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
          aria-label="WhatsApp Chat"
        >
          {/* Pulse rings */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
          <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse"></span>

          {/* Icon */}
          <MessageCircle className="h-6 w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform" />

          {/* Notification dot */}
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-slate-900 animate-bounce"></span>
        </button>
      </div>
    </>
  )
}
