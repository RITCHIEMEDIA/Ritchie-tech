"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, ArrowRight, MessageCircle, Phone, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getFeaturedProjects } from "@/lib/projects"

export default function Home() {
  const [featuredProjects, setFeaturedProjects] = useState<any[]>([])

  // WhatsApp number
  const whatsappNumber = "2349079928298"
  // Resume path
  const resumePath = "/resume/isaac-Elisha-Resume.pdf"
  // WhatsApp message - using correct WhatsApp URL format
  const whatsappMessage = encodeURIComponent("Hello Isaac! I'm interested in learning more about your work and potentially collaborating on a project.")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  useEffect(() => {
    const projects = getFeaturedProjects()
    setFeaturedProjects(projects)
  }, [])

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-blue-100 via-teal-100 to-purple-200 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900 transition-all duration-700">
      {/* Animated floating gradient bulbs */}
      <div className="absolute left-12 top-12 w-56 h-56 blur-2xl rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-teal-300 opacity-40 animate-pulse"></div>
      <div className="absolute right-16 bottom-24 w-80 h-80 blur-3xl rounded-full bg-gradient-to-tr from-teal-400 via-purple-400 to-blue-300 opacity-30 animate-pulse delay-700"></div>

      {/* Hero Section */}
      <section className="container relative mx-auto px-4 py-24 flex flex-col items-center text-center space-y-8 z-10">
        <div className="relative flex items-center justify-center">
          {/* Glassmorphism circle */}
          <div className="absolute inset-0 w-52 h-52 bg-white/30 dark:bg-white/20 rounded-full shadow-xl backdrop-blur-3xl border-4 border-white/10"></div>
          {/* Profile Image */}
          <Image
            src="/images/ritchie.jpg"
            alt="Isaac Elisha Profile"
            width={200}
            height={200}
            className="rounded-full border-4 border-white shadow-2xl object-cover z-10 animate-fade-in"
            priority
          />
          {/* Floating social icons */}
          <div className="absolute -top-6 -left-6 animate-bounce">
            <Github className="text-blue-600 dark:text-white w-8 h-8 drop-shadow-xl" />
          </div>
          <div className="absolute -bottom-6 -right-6 animate-bounce delay-1000">
            <Linkedin className="text-teal-500 dark:text-white w-8 h-8 drop-shadow-xl" />
          </div>
        </div>

        <div className="space-y-4 max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-blue-600 to-teal-400 bg-clip-text text-transparent animate-fade-in">
            Isaac Elisha
          </h1>
          <p className="text-3xl font-bold tracking-wider text-gradient dark:text-blue-400 animate-fade-in delay-300 [font-family:'Saira',cursive]">
            Ritchie Tech
          </p>
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed animate-fade-in delay-500">
            Full-Stack Developer & Computer Science Student passionate about creating innovative web solutions and building the future of technology.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl justify-center animate-fade-in delay-700">
          <Button asChild className="flex-1 transition-all duration-200 hover:scale-105 hover:ring-4 hover:ring-blue-300">
            <Link href="/projects">
              View My Projects
              <ArrowRight className="ml-2 h-4 w-4 animate-bounce-x" />
            </Link>
          </Button>
          <Button variant="outline" asChild className="flex-1 transition-all duration-200 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-100 hover:to-teal-100">
            <Link href={whatsappUrl} target="_blank">
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat on WhatsApp
            </Link>
          </Button>
          <Button variant="secondary" asChild className="flex-1 transition-all duration-200 hover:scale-105 hover:ring-4 hover:ring-purple-300">
            <Link href={resumePath} target="_blank" download="Isaac-Elisha-Resume.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Link>
          </Button>
        </div>

        <div className="flex space-x-6 pt-4 justify-center animate-fade-in delay-1000">
          <Button variant="ghost" size="icon" asChild className="hover:bg-gradient-to-r hover:from-blue-400 hover:to-teal-200">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-200">
            <Link href="https://www.linkedin.com/in/isaac-elisha-a1701b371" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:bg-purple-100 dark:hover:bg-purple-900">
            <Link href="mailto:ritchietch01@gmail.com">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:bg-teal-100 dark:hover:bg-teal-900">
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-6 w-6" />
              <span className="sr-only">WhatsApp</span>
            </Link>
          </Button>
        </div>
      </section>
      {/* Additional sections remain... */}
    </div>
  )
}
