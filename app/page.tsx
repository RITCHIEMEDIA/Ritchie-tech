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
  const whatsappMessage = encodeURIComponent(
    "Hello Isaac! I'm interested in learning more about your work and potentially collaborating on a project.",
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  useEffect(() => {
    // Load featured projects on client side
    const projects = getFeaturedProjects()
    setFeaturedProjects(projects)
  }, [])

  return (
    <div className="min-h-screen bg-mesh">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative animate-fade-in-down">
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
            <p className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-100 animate-fade-in delay-400">
              Full-Stack Developer building scalable web solutions for businesses and startups
            </p>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed animate-fade-in delay-500">
              Transforming ideas into production-ready applications with React, Next.js, and modern technologies.
              Specializing in end-to-end web development from concept to deployment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl animate-fade-in-up delay-600">
            {/* Primary CTA */}
            <Button asChild className="flex-1 h-12 text-lg hover-lift hover-glow group" size="lg">
              <Link href="/contact">
                Let's Work Together
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            {/* Secondary CTAs */}
            <Button variant="outline" asChild className="flex-1 h-12 text-lg hover-lift" size="lg">
              <Link href="/projects">
                View My Work
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl animate-fade-in delay-700">
            <Button variant="secondary" asChild className="flex-1 hover-lift">
              <Link href={whatsappUrl} target="_blank">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat on WhatsApp
              </Link>
            </Button>
            <Button variant="secondary" asChild className="flex-1 hover-lift">
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

      {/* Quick Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center hover-lift glass-strong border-0 animate-fade-in-up delay-100">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 animate-float">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Full-Stack Developer</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Experienced in both front-end and back-end development with modern technologies
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift glass-strong border-0 animate-fade-in-up delay-200">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4 animate-float" style={{animationDelay: '0.5s'}}>
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Developer</h3>
              <p className="text-slate-600 dark:text-slate-300">
                BSc Computer Science with Google & AWS Developer Certifications
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover-lift glass-strong border-0 animate-fade-in-up delay-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 animate-float" style={{animationDelay: '1s'}}>
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation Focused</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Passionate about creating cutting-edge solutions and learning new technologies
              </p>
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
              <Card key={project.id} className="overflow-hidden hover-lift hover-glow group border-0 shadow-lg animate-scale-in" style={{animationDelay: `${idx * 150}ms`}}>
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
                  <Button asChild size="sm" className="group/btn">
                    <Link href="/projects">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
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
