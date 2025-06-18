"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, MessageSquare, Download } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  // WhatsApp number and resume path
  const whatsappNumber = "2349079928298"
  const whatsappUrl = `https://wa.me/${whatsappNumber}`
  const resumePath = "/resume/isaac-Elisha-Resume.pdf"

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl text-slate-900 dark:text-white">
            Isaac Elisha
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400",
                  pathname === item.href ? "text-blue-600 dark:text-blue-400" : "text-slate-600 dark:text-slate-300",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button size="sm" variant="outline" asChild className="text-sm">
              <Link href={resumePath} target="_blank" download="Isaac-Elisha-Resume.pdf">
                <Download className="h-4 w-4 mr-1" />
                CV
              </Link>
            </Button>
            <Button size="sm" variant="outline" asChild className="text-sm">
              <Link href={whatsappUrl} target="_blank">
                <MessageSquare className="h-4 w-4 mr-1" />
                Chat
              </Link>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button size="sm" variant="outline" asChild className="text-sm">
              <Link href={resumePath} target="_blank" download="Isaac-Elisha-Resume.pdf">
                <Download className="h-4 w-4" />
                <span className="sr-only">Download CV</span>
              </Link>
            </Button>
            <Button size="sm" variant="outline" asChild className="text-sm">
              <Link href={whatsappUrl} target="_blank">
                <MessageSquare className="h-4 w-4" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </Button>
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                  pathname === item.href
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                    : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={resumePath}
              target="_blank"
              download="Isaac-Elisha-Resume.pdf"
              className="flex items-center gap-2 px-3 py-2 text-base font-medium rounded-md transition-colors bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
              onClick={() => setIsOpen(false)}
            >
              <Download className="h-4 w-4" />
              View My CV
            </Link>
            <Link
              href={whatsappUrl}
              target="_blank"
              className="flex items-center gap-2 px-3 py-2 text-base font-medium rounded-md transition-colors bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              <MessageSquare className="h-4 w-4" />
              Chat on WhatsApp
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
