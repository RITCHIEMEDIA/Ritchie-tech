"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, BarChart3, FolderOpen, Star } from "lucide-react"
import { ProjectForm } from "@/components/admin/project-form"
import { ProjectList } from "@/components/admin/project-list"
import { getProjects, getFeaturedProjects, type Project } from "@/lib/projects"

export default function AdminPage() {
  const [showForm, setShowForm] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [projects] = useState(() => getProjects())
  const [featuredProjects] = useState(() => getFeaturedProjects())

  function handleEdit(project: Project) {
    setEditingProject(project)
    setShowForm(true)
  }

  function handleFormSuccess() {
    setShowForm(false)
    setEditingProject(null)
    // In a real app, you'd refresh the data here
    window.location.reload()
  }

  function handleCancelForm() {
    setShowForm(false)
    setEditingProject(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Admin Dashboard</h1>
              <p className="text-slate-600 dark:text-slate-300 mt-2">Manage your projects and portfolio content</p>
            </div>
            <Button onClick={() => setShowForm(true)} className="w-fit">
              <Plus className="h-4 w-4 mr-2" />
              Add Project
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Total Projects</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{projects.length}</p>
                  </div>
                  <FolderOpen className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Featured Projects</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{featuredProjects.length}</p>
                  </div>
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Recent Projects</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">
                      {projects.filter((p) => new Date(p.createdAt).getFullYear() === new Date().getFullYear()).length}
                    </p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          {showForm && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {editingProject ? "Edit Project" : "Add New Project"}
                </h2>
                <Button variant="outline" onClick={handleCancelForm}>
                  Cancel
                </Button>
              </div>
              <ProjectForm project={editingProject || undefined} onSuccess={handleFormSuccess} />
            </div>
          )}

          {/* Projects List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">All Projects</h2>
            <ProjectList projects={projects} onEdit={handleEdit} />
          </div>
        </div>
      </div>
    </div>
  )
}
