"use server"

import { addProject, updateProject, deleteProject } from "@/lib/projects"
import { revalidatePath } from "next/cache"

export async function createProject(formData: FormData) {
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

    // Revalidate pages to show new project
    revalidatePath("/projects")
    revalidatePath("/admin")
    revalidatePath("/") // In case featured projects are shown on home

    return { success: true, project }
  } catch (error) {
    console.error("Error creating project:", error)
    return { success: false, error: "Failed to create project. Please try again." }
  }
}

export async function editProject(id: string, formData: FormData) {
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

  try {
    const project = updateProject(id, {
      title: title.trim(),
      description: description.trim(),
      image: image.trim() || "/placeholder.svg?height=300&width=400",
      technologies,
      liveUrl: liveUrl.trim(),
      githubUrl: githubUrl.trim(),
      date: date.trim(),
      featured,
    })

    if (!project) {
      return { success: false, error: "Project not found" }
    }

    // Revalidate pages to show updated project
    revalidatePath("/projects")
    revalidatePath("/admin")
    revalidatePath("/")

    return { success: true, project }
  } catch (error) {
    console.error("Error updating project:", error)
    return { success: false, error: "Failed to update project. Please try again." }
  }
}

export async function removeProject(id: string) {
  try {
    const success = deleteProject(id)

    if (!success) {
      return { success: false, error: "Project not found" }
    }

    // Revalidate pages to remove deleted project
    revalidatePath("/projects")
    revalidatePath("/admin")
    revalidatePath("/")

    return { success: true }
  } catch (error) {
    console.error("Error deleting project:", error)
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
