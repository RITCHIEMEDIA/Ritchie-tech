"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, User, Briefcase, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

export default function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/about", icon: User, label: "About" },
    { href: "/projects", icon: Briefcase, label: "Projects" },
    { href: "/contact", icon: Mail, label: "Contact" },
  ]

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-t border-slate-200 dark:border-slate-700 safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all duration-300",
                isActive
                  ? "bg-blue-500 text-white scale-110"
                  : "text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 active:scale-95"
              )}
            >
              <Icon className={cn("h-5 w-5", isActive && "animate-bounce-subtle")} />
              <span className="text-xs font-medium">{item.label}</span>
              {isActive && (
                <span className="absolute -top-1 w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
