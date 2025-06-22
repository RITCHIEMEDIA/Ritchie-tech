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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative">
            <Image
              src="/images/ritchie.jpg"
              alt="Isaac Elisha Profile"
              width={200}
              height={200}
              className="rounded-full border-4 border-white shadow-xl object-cover"
              priority
            />
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white">Isaac Elisha</h1>
            <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium">Ritchie Tech</p>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Full-Stack Developer & Computer Science Student passionate about creating innovative web solutions and
              building the future of technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
            <Button asChild className="flex-1">
              <Link href="/projects">
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="flex-1">
              <Link href={whatsappUrl} target="_blank">
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat on WhatsApp
              </Link>
            </Button>
            <Button variant="secondary" asChild className="flex-1">
              <Link href={resumePath} target="_blank" download="Isaac-Elisha-Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Link>
            </Button>
          </div>

          <div className="flex space-x-6 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="www.linkedin.com/in/isaac-elisha-a1701b371" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:ritchietch01@gmail.com">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
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
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Full-Stack Developer</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Experienced in both front-end and back-end development with modern technologies
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">CS Student</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Bachelor of Science in Computer Science, expected graduation 2027
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
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
        <section className="container mx-auto px-4 py-16 bg-slate-50 dark:bg-slate-800/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-300 mt-2">Some of my recent work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredProjects.slice(0, 2).map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative bg-slate-200 dark:bg-slate-700">
                  <Image
                    src={project.image || "/images/project-placeholder.jpg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2 mb-4">{project.description}</p>
                  <Button asChild size="sm">
                    <Link href="/projects">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild>
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
        <div className="max-w-4xl mx-auto bg-blue-600 dark:bg-blue-700 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance work and collaborations. Let's discuss your project and bring your
            ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary">
              <Link href="/contact">Contact Me</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white/30 hover:bg-white/10">
              <Link href={whatsappUrl} target="_blank">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Me
              </Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white/30 hover:bg-white/10">
              <Link href={`tel:+${whatsappNumber}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call Me
              </Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white/30 hover:bg-white/10">
              <Link href={resumePath} target="_blank" download="Isaac-Elisha-Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                View My CV
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
