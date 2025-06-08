"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { createProject, editProject } from "@/app/admin/actions"
import { AlertCircle, CheckCircle, Upload, X } from "lucide-react"
import type { Project } from "@/lib/projects"

interface ProjectFormProps {
  project?: Project
  onSuccess?: () => void
  onCancel?: () => void
}

export function ProjectForm({ project, onSuccess, onCancel }: ProjectFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [formData, setFormData] = useState({
    title: project?.title || "",
    description: project?.description || "",
    image: project?.image || "",
    technologies: project?.technologies.join(", ") || "",
    liveUrl: project?.liveUrl || "",
    githubUrl: project?.githubUrl || "",
    date: project?.date || new Date().getFullYear().toString(),
    featured: project?.featured || false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  function validateForm() {
    const newErrors: Record<string, string> = {}

    // Required fields
    if (!formData.title.trim()) {
      newErrors.title = "Title is required"
    } else if (formData.title.length < 3) {
      newErrors.title = "Title must be at least 3 characters"
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required"
    } else if (formData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters"
    }

    if (!formData.technologies.trim()) {
      newErrors.technologies = "At least one technology is required"
    }

    // URL validation
    if (formData.liveUrl && !isValidUrl(formData.liveUrl)) {
      newErrors.liveUrl = "Please enter a valid URL"
    }

    if (formData.githubUrl && !isValidUrl(formData.githubUrl)) {
      newErrors.githubUrl = "Please enter a valid URL"
    }

    if (formData.image && !isValidUrl(formData.image)) {
      newErrors.image = "Please enter a valid image URL"
    }

    // Date validation
    const currentYear = new Date().getFullYear()
    const year = Number.parseInt(formData.date)
    if (isNaN(year) || year < 2000 || year > currentYear + 1) {
      newErrors.date = `Year must be between 2000 and ${currentYear + 1}`
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function isValidUrl(string: string) {
    try {
      new URL(string)
      return true
    } catch (_) {
      return false
    }
  }

  function handleInputChange(field: string, value: string | boolean) {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    console.log("Form: Starting submission for project:", formData.title)

    if (!validateForm()) {
      setMessage({ type: "error", text: "Please fix the errors below" })
      return
    }

    setIsSubmitting(true)
    setMessage(null)

    try {
      // Create FormData object
      const submitData = new FormData()
      submitData.append("title", formData.title.trim())
      submitData.append("description", formData.description.trim())
      submitData.append("image", formData.image.trim())
      submitData.append("technologies", formData.technologies.trim())
      submitData.append("liveUrl", formData.liveUrl.trim())
      submitData.append("githubUrl", formData.githubUrl.trim())
      submitData.append("date", formData.date.trim())
      if (formData.featured) {
        submitData.append("featured", "on")
      }

      console.log("Form: Calling server action...")
      const result = project ? await editProject(project.id, submitData) : await createProject(submitData)

      console.log("Form: Server action result:", result)

      if (result.success) {
        setMessage({
          type: "success",
          text: `Project "${formData.title}" ${project ? "updated" : "created"} successfully! 🎉`,
        })

        // Reset form if creating new project
        if (!project) {
          setFormData({
            title: "",
            description: "",
            image: "",
            technologies: "",
            liveUrl: "",
            githubUrl: "",
            date: new Date().getFullYear().toString(),
            featured: false,
          })
        }

        // Trigger storage event to notify other components
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("projects-updated"))
        }

        // Call success callback after a short delay
        setTimeout(() => {
          if (onSuccess) {
            console.log("Form: Calling onSuccess callback")
            onSuccess()
          }
        }, 2000)
      } else {
        setMessage({ type: "error", text: result.error || "Something went wrong" })
      }
    } catch (error) {
      console.error("Form: Error submitting project:", error)
      setMessage({ type: "error", text: "Failed to save project. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{project ? "Edit Project" : "Add New Project"}</CardTitle>
          {onCancel && (
            <Button variant="ghost" size="icon" onClick={onCancel}>
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title and Date */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-2">
              <Label htmlFor="title">Project Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="Enter project title"
                className={errors.title ? "border-red-500" : ""}
              />
              {errors.title && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.title}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Year *</Label>
              <Input
                id="date"
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
                placeholder="2024"
                className={errors.date ? "border-red-500" : ""}
              />
              {errors.date && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.date}
                </p>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Describe your project, its features, and what makes it special..."
              rows={4}
              className={errors.description ? "border-red-500" : ""}
            />
            <div className="flex justify-between items-center">
              {errors.description ? (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.description}
                </p>
              ) : (
                <p className="text-sm text-slate-500">{formData.description.length} characters</p>
              )}
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-2">
            <Label htmlFor="technologies">Technologies *</Label>
            <Input
              id="technologies"
              value={formData.technologies}
              onChange={(e) => handleInputChange("technologies", e.target.value)}
              placeholder="React, Next.js, TypeScript, Tailwind CSS"
              className={errors.technologies ? "border-red-500" : ""}
            />
            {errors.technologies ? (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.technologies}
              </p>
            ) : (
              <p className="text-sm text-slate-500">Separate technologies with commas</p>
            )}
          </div>

          {/* Image URL */}
          <div className="space-y-2">
            <Label htmlFor="image">Project Image URL</Label>
            <div className="flex gap-2">
              <Input
                id="image"
                type="url"
                value={formData.image}
                onChange={(e) => handleInputChange("image", e.target.value)}
                placeholder="https://example.com/project-image.jpg"
                className={errors.image ? "border-red-500" : ""}
              />
              <Button type="button" variant="outline" size="icon">
                <Upload className="h-4 w-4" />
              </Button>
            </div>
            {errors.image ? (
              <p className="text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {errors.image}
              </p>
            ) : (
              <p className="text-sm text-slate-500">Optional: Add a screenshot or preview image</p>
            )}
          </div>

          {/* URLs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="liveUrl">Live Demo URL</Label>
              <Input
                id="liveUrl"
                type="url"
                value={formData.liveUrl}
                onChange={(e) => handleInputChange("liveUrl", e.target.value)}
                placeholder="https://project-demo.vercel.app"
                className={errors.liveUrl ? "border-red-500" : ""}
              />
              {errors.liveUrl && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.liveUrl}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="githubUrl">GitHub Repository URL</Label>
              <Input
                id="githubUrl"
                type="url"
                value={formData.githubUrl}
                onChange={(e) => handleInputChange("githubUrl", e.target.value)}
                placeholder="https://github.com/username/project"
                className={errors.githubUrl ? "border-red-500" : ""}
              />
              {errors.githubUrl && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.githubUrl}
                </p>
              )}
            </div>
          </div>

          {/* Featured Toggle */}
          <div className="flex items-center space-x-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <Switch
              id="featured"
              checked={formData.featured}
              onCheckedChange={(checked) => handleInputChange("featured", checked)}
            />
            <div className="space-y-1">
              <Label htmlFor="featured" className="text-sm font-medium">
                Featured Project
              </Label>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Featured projects appear prominently on your portfolio
              </p>
            </div>
          </div>

          {/* Success/Error Message */}
          {message && (
            <div
              className={`p-4 rounded-lg border flex items-center gap-2 ${
                message.type === "success"
                  ? "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300"
                  : "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300"
              }`}
            >
              {message.type === "success" ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
              {message.text}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button type="submit" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {project ? "Updating..." : "Creating..."}
                </>
              ) : project ? (
                "Update Project"
              ) : (
                "Create Project"
              )}
            </Button>
            {onCancel && (
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
