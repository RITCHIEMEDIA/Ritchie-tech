"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar, RefreshCw } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getProjects, getFeaturedProjects } from "@/lib/projects"

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([])
  const [featuredProjects, setFeaturedProjects] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

  function loadProjects() {
    console.log("Projects page: Loading projects...")
    setIsLoading(true)

    try {
      const allProjects = getProjects()
      const featured = getFeaturedProjects()

      console.log("Projects page: Loaded", allProjects.length, "total projects")
      console.log("Projects page: Loaded", featured.length, "featured projects")

      setProjects(allProjects)
      setFeaturedProjects(featured)
      setLastUpdated(new Date())
    } catch (error) {
      console.error("Projects page: Error loading projects:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // Initial load
    loadProjects()

    // Listen for storage events (when projects are updated)
    function handleStorageChange() {
      console.log("Projects page: Storage changed, reloading projects...")
      loadProjects()
    }

    function handleProjectsUpdated() {
      console.log("Projects page: Projects updated event received")
      setTimeout(loadProjects, 100) // Small delay to ensure localStorage is updated
    }

    // Listen for custom events
    window.addEventListener("projects-updated", handleProjectsUpdated)
    window.addEventListener("storage", handleStorageChange)

    // Cleanup
    return () => {
      window.removeEventListener("projects-updated", handleProjectsUpdated)
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  // WhatsApp message - using correct WhatsApp URL format
  const whatsappMessage = encodeURIComponent(
    "Hello Isaac! I'm interested in discussing a potential project collaboration. I saw your portfolio and would love to connect with you.",
  )
  const whatsappUrl = `https://wa.me/+2349079928298?text=${whatsappMessage}`

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-slate-600 dark:text-slate-300">Loading projects...</p>
        </div>
      </div>
    )
  }

  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">My Projects</h1>
              <Button
                variant="outline"
                size="icon"
                onClick={loadProjects}
                className="shrink-0"
                title="Refresh projects"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A collection of projects showcasing my skills in full-stack development, from concept to deployment.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Total Projects: {projects.length}</span>
              <span>•</span>
              <span>Featured: {featuredProjects.length}</span>
              <span>•</span>
              <span>Last Updated: {lastUpdated.toLocaleTimeString()}</span>
            </div>
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">Featured Projects</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video relative bg-slate-200 dark:bg-slate-700">
                      <Image
                        src={project.image || "/placeholder.svg?height=300&width=400"}
                        alt={project.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <div className="flex items-center gap-1 text-sm text-slate-500">
                          <Calendar className="h-4 w-4" />
                          {project.date}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech: string) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3 pt-2">
                        {project.liveUrl && (
                          <Button asChild size="sm">
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </Link>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">Other Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {otherProjects.map((project) => (
                  <Card key={project.id} className="hover:shadow-lg transition-shadow">
                    <div className="aspect-video relative bg-slate-200 dark:bg-slate-700">
                      <Image
                        src={project.image || "/placeholder.svg?height=300&width=400"}
                        alt={project.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <div className="flex items-center gap-1 text-sm text-slate-500">
                          <Calendar className="h-4 w-4" />
                          {project.date}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech: string) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2 pt-1">
                        {project.liveUrl && (
                          <Button asChild size="sm" className="flex-1">
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Demo
                            </Link>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" className="flex-1" asChild>
                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-3 w-3 mr-1" />
                              Code
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* No Projects Message */}
          {projects.length === 0 && (
            <section className="text-center py-12">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">No Projects Yet</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Projects will appear here once they are added through the admin panel.
                  </p>
                </CardContent>
              </Card>
            </section>
          )}

          {/* Call to Action */}
          {projects.length > 0 && (
            <section className="text-center py-12">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Interested in Working Together?</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    I'm always open to discussing new opportunities and exciting projects. Let's connect and see how we
                    can create something amazing together.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild>
                      <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Get In Touch
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/about">Learn More About Me</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
