import Link from "next/link"
import { Github, Linkedin, Mail, Heart, MessageCircle, Phone, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  // WhatsApp number and resume path
  const whatsappNumber = "2349079928298"
  const resumePath = "/resume/Isaac-Elisha-Resume.pdf"

  // WhatsApp message - using correct WhatsApp URL format
  const whatsappMessage = encodeURIComponent(
    "Hello Isaac! I found your portfolio and would like to connect with you regarding potential opportunities.",
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

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
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" asChild className="text-white border-white/20 hover:bg-white/10">
                <Link href={resumePath} target="_blank" download="Isaac-Elisha-Resume.pdf">
                  <Download className="h-4 w-4 mr-1" />
                  Resume
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild className="text-white border-white/20 hover:bg-white/10">
                <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  WhatsApp
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild className="text-white border-white/20 hover:bg-white/10">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
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
              <Link href="/contact" className="block text-slate-300 hover:text-white transition-colors text-sm">
                Contact
              </Link>
              <Link
                href={resumePath}
                target="_blank"
                download="Isaac-Elisha-Resume.pdf"
                className="block text-slate-300 hover:text-white transition-colors text-sm"
              >
                Download Resume
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="space-y-2">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp: +234 907 992 8298
              </Link>
              <Link
                href="tel:+2349079928298"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                Phone: +234 907 992 8298
              </Link>
              <Link
                href="mailto:isaac@ritchietech.com"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                Email: isaac@ritchietech.com
              </Link>
            </div>
            <div className="flex space-x-3 pt-2">
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
                <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  <span className="sr-only">WhatsApp</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" /> by Isaac Elisha © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
