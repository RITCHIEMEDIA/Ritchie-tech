"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, BarChart3, FolderOpen, Star, LogOut, RefreshCw } from "lucide-react"
import { ProjectForm } from "@/components/admin/project-form"
import { ProjectList } from "@/components/admin/project-list"
import { getProjects, getFeaturedProjects, type Project } from "@/lib/projects"

export default function AdminPage() {
  const [showForm, setShowForm] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [projects, setProjects] = useState<Project[]>([])
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check authentication
    const authenticated = localStorage.getItem("admin-authenticated")
    if (!authenticated) {
      router.push("/admin/login")
    } else {
      setIsAuthenticated(true)
      refreshData()
    }
  }, [router])

  function refreshData() {
    setIsRefreshing(true)
    try {
      // Force a fresh read from localStorage
      const allProjects = getProjects()
      const featured = getFeaturedProjects()

      console.log("Refreshing data - Total projects:", allProjects.length)
      console.log("Featured projects:", featured.length)

      setProjects(allProjects)
      setFeaturedProjects(featured)
    } catch (error) {
      console.error("Error refreshing data:", error)
    } finally {
      setIsRefreshing(false)
      setIsLoading(false)
    }
  }

  function handleLogout() {
    localStorage.removeItem("admin-authenticated")
    router.push("/admin/login")
  }

  function handleEdit(project: Project) {
    setEditingProject(project)
    setShowForm(true)
  }

  function handleFormSuccess() {
    console.log("Form success - refreshing data")
    setShowForm(false)
    setEditingProject(null)

    // Small delay to ensure localStorage is updated
    setTimeout(() => {
      refreshData()
    }, 100)
  }

  function handleCancelForm() {
    setShowForm(false)
    setEditingProject(null)
  }

  function handleAddProject() {
    setEditingProject(null)
    setShowForm(true)
  }

  if (!isAuthenticated || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-slate-600 dark:text-slate-300">
            {!isAuthenticated ? "Checking authentication..." : "Loading projects..."}
          </p>
        </div>
      </div>
    )
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
            <div className="flex gap-2">
              <Button variant="outline" onClick={refreshData} disabled={isRefreshing} className="w-fit">
                <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`} />
                Refresh
              </Button>
              <Button onClick={handleAddProject} className="w-fit">
                <Plus className="h-4 w-4 mr-2" />
                Add Project
              </Button>
              <Button variant="outline" onClick={handleLogout} className="w-fit">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
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
              <ProjectForm
                project={editingProject || undefined}
                onSuccess={handleFormSuccess}
                onCancel={handleCancelForm}
              />
            </div>
          )}

          {/* Projects List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">All Projects ({projects.length})</h2>
              {!showForm && (
                <Button variant="outline" onClick={handleAddProject}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Another Project
                </Button>
              )}
            </div>
            <ProjectList projects={projects} onEdit={handleEdit} />
          </div>
        </div>
      </div>
    </div>
  )
}
