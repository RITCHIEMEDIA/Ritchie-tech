"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, ExternalLink, Github } from "lucide-react"
import { removeProject } from "@/app/admin/actions"
import type { Project } from "@/lib/projects"
import Link from "next/link"
import Image from "next/image"

interface ProjectListProps {
  projects: Project[]
  onEdit: (project: Project) => void
}

export function ProjectList({ projects, onEdit }: ProjectListProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null)

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this project?")) return

    setDeletingId(id)
    try {
      await removeProject(id)
    } catch (error) {
      console.error("Failed to delete project:", error)
    } finally {
      setDeletingId(null)
    }
  }

  if (projects.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <p className="text-slate-500">No projects found. Create your first project!</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {projects.map((project) => (
        <Card key={project.id}>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-48 h-32 relative rounded-lg overflow-hidden">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>

              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-sm text-slate-500">{project.date}</p>
                    {project.featured && (
                      <Badge variant="secondary" className="mt-1">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => onEdit(project)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(project.id)}
                      disabled={deletingId === project.id}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </Link>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
