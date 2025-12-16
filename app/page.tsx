"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, ArrowRight, MessageCircle, Phone, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getFeaturedProjects } from "@/lib/projects"
import Typewriter from "@/components/typewriter"
import CountingNumber from "@/components/counting-number"

export default function Home() {
  const [featuredProjects, setFeaturedProjects] = useState<any[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [projectTilt, setProjectTilt] = useState<{[key: string]: {x: number, y: number}}>({})
  const profileRef = useRef<HTMLDivElement>(null)

  // WhatsApp number
  const whatsappNumber = "2349079928298"

  // Resume path
  const resumePath = "/resume/isaac-Elisha-Resume.pdf"

  // WhatsApp message - using correct WhatsApp URL format
  const whatsappMessage = encodeURIComponent(
    "Hello Isaac! I'm interested in learning more about your work and potentially collaborating on a project.",
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  useEffect(() => {
    // Load featured projects on client side
    const projects = getFeaturedProjects()
    setFeaturedProjects(projects)

    // Magnetic effect for profile image
    const handleMouseMove = (e: MouseEvent) => {
      if (profileRef.current) {
        const rect = profileRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const deltaX = (e.clientX - centerX) * 0.15
        const deltaY = (e.clientY - centerY) * 0.15
        setMousePosition({ x: deltaX, y: deltaY })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-mesh">
 

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-8">
          <div 
            ref={profileRef}
            className="relative animate-fade-in-down"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse-slow"></div>
            <Image
              src="/images/ritchie.jpg"
              alt="Isaac Elisha Profile"
              width={200}
              height={200}
              className="rounded-full border-4 border-white dark:border-slate-700 shadow-2xl object-cover relative z-10 hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>

          <div className="space-y-4 max-w-3xl animate-fade-in-up delay-200">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent animate-gradient">
              Isaac Elisha
            </h1>
            <p className="text-xl md:text-2xl text-gradient-blue font-medium animate-fade-in delay-300">Ritchie Tech</p>
            <div className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-100 animate-fade-in delay-400 min-h-[80px] flex items-center justify-center">
              <Typewriter 
                texts={[
                  "Full-Stack Developer 💻",
                  "Mobile App Expert 📱",
                  "Cloud Architect ☁️",
                  "UI/UX Enthusiast 🎨"
                ]}
                typingSpeed={80}
                deletingSpeed={40}
                pauseDuration={2000}
              />
            </div>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed animate-fade-in delay-500">
              Transforming ideas into production-ready applications with React, Next.js, and modern technologies.
              Specializing in end-to-end web development from concept to deployment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl animate-fade-in-up delay-600">
            {/* Primary CTA */}
            <Button asChild className="flex-1 h-12 text-lg hover-lift hover-glow ripple-effect group" size="lg">
              <Link href="/contact">
                Let's Work Together
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            {/* Secondary CTAs */}
            <Button variant="outline" asChild className="flex-1 h-12 text-lg hover-lift ripple-effect" size="lg">
              <Link href="/projects">
                View My Work
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl animate-fade-in delay-700">
            <Button variant="secondary" asChild className="flex-1 hover-lift ripple-effect">
              <Link href={whatsappUrl} target="_blank">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat on WhatsApp
              </Link>
            </Button>
            <Button variant="secondary" asChild className="flex-1 hover-lift ripple-effect">
              <Link href={resumePath} target="_blank" download="Isaac-Elisha-Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>

          <div className="flex space-x-6 pt-4 animate-fade-in delay-800">
            <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
              <Link href="https://www.linkedin.com/in/isaac-elisha-a1701b371" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
              <Link href="mailto:ritchietch01@gmail.com">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-transform">
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-6 w-6" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section with Counting Numbers */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="text-center space-y-2 animate-fade-in-up delay-100">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              <CountingNumber end={50} suffix="+" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</p>
          </div>
          <div className="text-center space-y-2 animate-fade-in-up delay-200">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              <CountingNumber end={11} suffix="+" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Certifications</p>
          </div>
          <div className="text-center space-y-2 animate-fade-in-up delay-300">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              <CountingNumber end={5} suffix="+" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Years Experience</p>
          </div>
          <div className="text-center space-y-2 animate-fade-in-up delay-400">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              <CountingNumber end={100} suffix="%" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {/* Large Feature - Full Stack */}
          <Card className="md:col-span-4 md:row-span-2 card-interactive glass-strong border-0 animate-fade-in-up delay-100 group overflow-hidden relative">
            <CardContent className="p-8 h-full flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 animate-float group-hover:scale-110 transition-transform">
                  <span className="text-4xl">💻</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Full-Stack Development</h3>
                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                  Building end-to-end web applications with modern technologies. From React frontends to Node.js backends,
                  I create scalable, production-ready solutions that drive business growth.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">Next.js</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">Node.js</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">TypeScript</span>
              </div>
              <div className="absolute -right-4 -bottom-4 md:-right-8 md:-bottom-8 w-24 h-24 md:w-32 md:h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
            </CardContent>
          </Card>

          {/* Tall Feature - Certifications */}
          <Card className="md:col-span-2 md:row-span-2 card-interactive glass-strong border-0 animate-fade-in-up delay-200 group overflow-hidden relative">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 animate-float group-hover:scale-110 transition-transform" style={{animationDelay: '0.5s'}}>
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Certified Expert</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">
                BSc Computer Science with professional certifications from industry leaders.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">CPN/NSQ Level 3</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Google Cloud</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">AWS Certified</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Azure Developer</span>
                </div>
              </div>
              <div className="absolute -right-2 -top-2 md:-right-4 md:-top-4 w-16 h-16 md:w-24 md:h-24 bg-green-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            </CardContent>
          </Card>

          {/* Wide Feature - Mobile Development */}
          <Card className="md:col-span-3 card-interactive glass-strong border-0 animate-fade-in-up delay-300 group overflow-hidden relative">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 animate-float group-hover:scale-110 transition-transform" style={{animationDelay: '1s'}}>
                  <span className="text-3xl">📱</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Mobile Apps</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Cross-platform mobile development with React Native for iOS and Android.
                  </p>
                </div>
              </div>
              <div className="absolute -right-2 -bottom-2 md:-right-4 md:-bottom-4 w-16 h-16 md:w-20 md:h-20 bg-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            </CardContent>
          </Card>

          {/* Wide Feature - Cloud Solutions */}
          <Card className="md:col-span-3 card-interactive glass-strong border-0 animate-fade-in-up delay-400 group overflow-hidden relative">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 animate-float group-hover:scale-110 transition-transform" style={{animationDelay: '1.5s'}}>
                  <span className="text-3xl">☁️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Cloud Architecture</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Scalable cloud solutions on Google Cloud, AWS, and Azure platforms.
                  </p>
                </div>
              </div>
              <div className="absolute -right-2 -bottom-2 md:-right-4 md:-bottom-4 w-16 h-16 md:w-20 md:h-20 bg-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Projects Preview */}
      {featuredProjects.length > 0 && (
        <section className="container mx-auto px-4 py-16 bg-gradient-soft rounded-3xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-300 mt-2">Some of my recent work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredProjects.slice(0, 2).map((project, idx) => (
              <div 
                key={project.id}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
                  const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
                  setProjectTilt(prev => ({...prev, [project.id]: {x, y}}))
                }}
                onMouseLeave={() => {
                  setProjectTilt(prev => ({...prev, [project.id]: {x: 0, y: 0}}))
                }}
                style={{
                  transform: projectTilt[project.id] 
                    ? `perspective(1000px) rotateY(${projectTilt[project.id].x}deg) rotateX(${-projectTilt[project.id].y}deg) scale3d(1.02, 1.02, 1.02)`
                    : 'none',
                  transition: 'transform 0.3s ease-out'
                }}
              >
                <Card className="overflow-hidden card-interactive hover-glow group border-0 shadow-lg animate-scale-in h-full" style={{animationDelay: `${idx * 150}ms`}}>
                  <div className="aspect-video relative bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <Image
                      src={project.image || "/images/project-placeholder.jpg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2 mb-4">{project.description}</p>
                    <Button asChild size="sm" className="group/btn hover-lift">
                      <Link href="/projects">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild className="hover-lift hover-glow">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 dark:from-blue-700 dark:via-blue-800 dark:to-purple-700 rounded-2xl p-8 text-white text-center relative overflow-hidden animate-fade-in-up">
          <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm currently available for freelance work and collaborations. Let's discuss your project and bring your
              ideas to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" className="hover-lift">
                <Link href="/contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" className="text-white border-white/30 hover:bg-white/10 hover-lift">
                <Link href={whatsappUrl} target="_blank">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Me
                </Link>
              </Button>
              <Button asChild variant="outline" className="text-white border-white/30 hover:bg-white/10 hover-lift">
                <Link href={`tel:+${whatsappNumber}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Me
                </Link>
              </Button>
              <Button asChild variant="outline" className="text-white border-white/30 hover:bg-white/10 hover-lift">
                <Link href={resumePath} target="_blank" download="Isaac-Elisha-Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  View My CV
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
