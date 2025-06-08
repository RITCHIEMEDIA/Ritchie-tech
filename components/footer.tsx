import Link from "next/link"
import { Github, Linkedin, Mail, Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  // WhatsApp message - using correct WhatsApp URL format
  const whatsappMessage = encodeURIComponent(
    "Hello Isaac! I found your portfolio and would like to connect with you regarding potential opportunities.",
  )
  const whatsappUrl = `https://wa.me/+2349079928298?text=${whatsappMessage}`

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Isaac Elisha</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Full-Stack Developer passionate about creating innovative web solutions and building the future of
              technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-slate-300 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link href="/about" className="block text-slate-300 hover:text-white transition-colors text-sm">
                About
              </Link>
              <Link href="/projects" className="block text-slate-300 hover:text-white transition-colors text-sm">
                Projects
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" asChild className="text-slate-300 hover:text-white">
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-slate-300 hover:text-white">
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-slate-300 hover:text-white">
                <Link href="mailto:isaac@ritchietech.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-slate-300 hover:text-white">
                <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  <span className="sr-only">WhatsApp</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 border-solid mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" /> by Isaac Elisha © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
