"use server"

import { addProject, updateProject, deleteProject, refreshProjectsCache, type UpdateResult } from "@/lib/projects"
import { revalidatePath, revalidateTag } from "next/cache"

export async function createProject(formData: FormData): Promise<{
  success: boolean
  project?: any
  error?: string
  warnings?: string[]
  validationErrors?: Record<string, string>
}> {
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const image = formData.get("image") as string
  const technologies = (formData.get("technologies") as string)
    .split(",")
    .map((tech) => tech.trim())
    .filter((tech) => tech.length > 0)
  const liveUrl = formData.get("liveUrl") as string
  const githubUrl = formData.get("githubUrl") as string
  const date = formData.get("date") as string
  const featured = formData.get("featured") === "on"

  console.log("Server: Creating project with title:", title)

  // Server-side validation
  if (!title || title.trim().length < 3) {
    return { success: false, error: "Title must be at least 3 characters long" }
  }

  if (!description || description.trim().length < 10) {
    return { success: false, error: "Description must be at least 10 characters long" }
  }

  if (technologies.length === 0) {
    return { success: false, error: "At least one technology is required" }
  }

  // Validate URLs if provided
  if (liveUrl && !isValidUrl(liveUrl)) {
    return { success: false, error: "Live URL is not valid" }
  }

  if (githubUrl && !isValidUrl(githubUrl)) {
    return { success: false, error: "GitHub URL is not valid" }
  }

  if (image && !isValidUrl(image)) {
    return { success: false, error: "Image URL is not valid" }
  }

  // Validate year
  const currentYear = new Date().getFullYear()
  const year = Number.parseInt(date)
  if (isNaN(year) || year < 2000 || year > currentYear + 1) {
    return { success: false, error: `Year must be between 2000 and ${currentYear + 1}` }
  }

  try {
    const project = addProject({
      title: title.trim(),
      description: description.trim(),
      image: image.trim() || "/placeholder.svg?height=300&width=400",
      technologies,
      liveUrl: liveUrl.trim(),
      githubUrl: githubUrl.trim(),
      date: date.trim(),
      featured,
    })

    console.log("Server: Project created successfully:", project.id)

    // Force refresh cache
    refreshProjectsCache()

    // Revalidate all relevant pages
    revalidatePath("/projects")
    revalidatePath("/admin")
    revalidatePath("/")
    revalidateTag("projects")

    return { success: true, project }
  } catch (error) {
    console.error("Server: Error creating project:", error)
    return { success: false, error: "Failed to create project. Please try again." }
  }
}

export async function editProject(
  id: string,
  formData: FormData,
): Promise<{
  success: boolean
  project?: any
  error?: string
  warnings?: string[]
  validationErrors?: Record<string, string>
}> {
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const image = formData.get("image") as string
  const technologies = (formData.get("technologies") as string)
    .split(",")
    .map((tech) => tech.trim())
    .filter((tech) => tech.length > 0)
  const liveUrl = formData.get("liveUrl") as string
  const githubUrl = formData.get("githubUrl") as string
  const date = formData.get("date") as string
  const featured = formData.get("featured") === "on"

  console.log("Server: Updating project:", id)
  console.log("Server: Update data:", { title, description, technologies: technologies.length })

  // Server-side validation (same as create)
  if (!title || title.trim().length < 3) {
    return { success: false, error: "Title must be at least 3 characters long" }
  }

  if (!description || description.trim().length < 10) {
    return { success: false, error: "Description must be at least 10 characters long" }
  }

  if (technologies.length === 0) {
    return { success: false, error: "At least one technology is required" }
  }

  // Validate URLs if provided
  if (liveUrl && !isValidUrl(liveUrl)) {
    return { success: false, error: "Live URL is not valid" }
  }

  if (githubUrl && !isValidUrl(githubUrl)) {
    return { success: false, error: "GitHub URL is not valid" }
  }

  if (image && !isValidUrl(image)) {
    return { success: false, error: "Image URL is not valid" }
  }

  // Validate year
  const currentYear = new Date().getFullYear()
  const year = Number.parseInt(date)
  if (isNaN(year) || year < 2000 || year > currentYear + 1) {
    return { success: false, error: `Year must be between 2000 and ${currentYear + 1}` }
  }

  try {
    const result: UpdateResult = updateProject(id, {
      title: title.trim(),
      description: description.trim(),
      image: image.trim() || "/placeholder.svg?height=300&width=400",
      technologies,
      liveUrl: liveUrl.trim(),
      githubUrl: githubUrl.trim(),
      date: date.trim(),
      featured,
    })

    if (!result.success) {
      console.error("Server: Project update failed:", result.error)
      return {
        success: false,
        error: result.error || "Failed to update project",
        validationErrors: result.validationErrors,
      }
    }

    console.log("Server: Project updated successfully:", result.project?.id)

    if (result.warnings && result.warnings.length > 0) {
      console.warn("Server: Project update warnings:", result.warnings)
    }

    // Force refresh cache
    refreshProjectsCache()

    // Revalidate pages
    revalidatePath("/projects")
    revalidatePath("/admin")
    revalidatePath("/")
    revalidateTag("projects")

    return {
      success: true,
      project: result.project,
      warnings: result.warnings,
    }
  } catch (error) {
    console.error("Server: Error updating project:", error)
    return { success: false, error: "Failed to update project. Please try again." }
  }
}

export async function removeProject(id: string): Promise<{ success: boolean; error?: string }> {
  console.log("Server: Deleting project:", id)

  try {
    const success = deleteProject(id)

    if (!success) {
      return { success: false, error: "Project not found or could not be deleted" }
    }

    console.log("Server: Project deleted successfully:", id)

    // Force refresh cache
    refreshProjectsCache()

    // Revalidate pages
    revalidatePath("/projects")
    revalidatePath("/admin")
    revalidatePath("/")
    revalidateTag("projects")

    return { success: true }
  } catch (error) {
    console.error("Server: Error deleting project:", error)
    return { success: false, error: "Failed to delete project. Please try again." }
  }
}

function isValidUrl(string: string): boolean {
  try {
    new URL(string)
    return true
  } catch (_) {
    return false
  }
}
