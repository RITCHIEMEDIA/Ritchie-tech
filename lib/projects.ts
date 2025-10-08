export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  date: string
  featured: boolean
  createdAt: Date
  updatedAt?: Date
}

// Validation interface for project updates
export interface ProjectValidationResult {
  isValid: boolean
  errors: Record<string, string>
  warnings: string[]
}

// Update operation result interface
export interface UpdateResult {
  success: boolean
  project?: Project
  error?: string
  validationErrors?: Record<string, string>
  warnings?: string[]
}

// Default projects that will always be available
const defaultProjects: Project[] = [
  {
    id: "1",
    title: "SWIFTX GLOBAL LOGISTICS",
    description:
      "A full-stack Logistics Management System that streamlines operations, from shipment tracking to invoicing, And a fully working Admin panel. Built with PHP, JS, CSS, and MYSQL.",
    image: "https://swiftxglobal.infinityfreeapp.com/images/pexels-ethan-nguyen-63327081-9749472.jpg",
    technologies: ["PHP", "HTML", "JS", "MYSQL", "CSS"],
    liveUrl: "https://swiftxglobal.infinityfreeapp.com",
    githubUrl: "",
    date: "2023",
    featured: true,
    createdAt: new Date("2023-01-01"),
  },
  // {
  //   id: "2",
  //   title: "Errand PLUS",
  //   description:
  //     "A collaborative Errand management application with real-time updates, Hiring of errand runners, becoming an errand runner ,and team collaboration features. Built with PHP, JS and CSS.",
  //   image: "https://errandplus.org/assets/images/boxs.avif",
  //   technologies: ["REACT", "Node.js", "PHP", "MYSQL", "Express"],
  //   liveUrl: "https://errandplus.org",
  //   githubUrl: "",
  //   date: "2023",
  //   featured: true,
  //   createdAt: new Date("2023-02-01"),
  // },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "A responsive weather application that provides current weather conditions and forecasts. Features location-based weather data and interactive charts.",
    image: "/images/weather.png", 
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    githubUrl: "",
    date: "2024",
    featured: false,
    createdAt: new Date("2024-05-01"),
  },
  {
    id: "4",
    title: "Bible Quiz",
    description:
      "A Bible quiz application that allows users to test their knowledge of the Bible through multiple-choice questions. It features a user-friendly interface, score tracking, and a variety of quizzes covering different books and themes of the Bible.",
    image: "/images/image.png",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    liveUrl: "https://biblepro.vercel.app",
    githubUrl: "",
    date: "2025",
    featured: true,
    createdAt: new Date("2025-06-08"),
  },
  {
    id: "5",
    title: "Cervical Cancer Diagnosis",
    description:
      "A medical site that works with AI to diagnose and provide information on cervical cancer. It uses expert system algorithms to analyze user inputs and provide accurate diagnoses and recommendations.",
    image: "/images/cancer.png",
    technologies: ["JavaScript", "MySQL", "PHP", "CSS", "HTML"],
    liveUrl: "https://cervical-cancer-diagnosis.ct.ws",
    githubUrl: "",
    date: "2024",
    featured: true,
    createdAt: new Date("2024-06-08"),
  },

  {
    id: "6",
    title: "Travelling Consultancy And Real Estate Consultancy",
    description:
      "A comprehensive platform for travel consultancy and real estate services. It provides users with personalized travel recommendations, real estate listings, and expert advice on both sectors.",
    image: "/images/prestige.png",
    technologies: ["Next Js", "Supabase", "Tailwind CSS", "JavaScript", "typescript", "node JS"],
    liveUrl: "https://prestigeivc.vercel.app",
    githubUrl: "",
    date: "2025",
    featured: true,
    createdAt: new Date("2025-06-01"),
  },

  
  {
    id: "7",
    title: "Cargo Parcel Delivery Real-time Tracking system",
    description:
      "A real-time tracking system for cargo and parcel delivery services. It allows users to track their shipments, view delivery status, and receive notifications on their mobile devices.",
    image: "/images/delivery.png",
    technologies: ["JavaScript", "Html","CSS3", "tailwind CSS", "PHP", "MySQL"],
    liveUrl: "https://westwayxpress.infy.uk",
    githubUrl: "",
    date: "2025",
    featured: true,
    createdAt: new Date("2025-03-01"),
  },

 {
    id: "8",
    title: "Journals publishing website",
    description:
      "A platform for publishing and managing academic journals. It provides features for authors to submit articles, reviewers to provide feedback, and editors to manage the publication process.",
    image: "/images/wajrds.png",
    technologies: ["php" , "MySQL", "HTML", "CSS3", "JavaScript"],
    liveUrl: "https://wajrds.org",
    githubUrl: "",
    date: "2025",
    featured: true,
    createdAt: new Date("2025-04-01"),
  },

  {
    id: "9",
    title: "Tradenexa Crypto & Giftcard Trading App",
    description:
      "A secure platform for exchanging and buying Bitcoin and other cryptocurrencies, as well as trading gift cards. Features real-time rates, user authentication, and fast transactions.",
    image: "/images/tradenexa.png",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://tradenexa.vercel.app",
    githubUrl: "",
    date: "2025",
    featured: true,
    createdAt: new Date("2025-06-15"),
  },

  
  // New Project 1: IHE NRI Community Portal
  {
    id: "10",
    title: "IHE NRI Community Portal",
    description:
      "Official website of Ihe Nri community, Anambra State, Nigeria. The platform offers comprehensive information about the community's history, culture, governance, and current news. Features include sections for local news updates, leadership details, community projects, photo galleries, and resources for indigenes and visitors. The site is built for accessibility and to serve as a digital hub for Ihe Nri people worldwide.",
    image: "/images/Annotation 2025-10-08 155520.png",
    technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
    liveUrl: "https://ihe-nri.com",
    githubUrl: "",
    date: "2024",
    featured: true,
    createdAt: new Date("2024-05-20"),
  },
  // New Project 2: Faspay – Bank App Simulation
  {
    id: "11",
    title: "Faspay – Bank App Simulation",
    description:
      "A modern digital banking simulation that allows users to experience seamless money management. Faspay features an intuitive dashboard for viewing balances, transaction history, and transferring funds. Users can create virtual accounts, manage cards, and analyze financial activity—all within a secure and responsive web application. Designed with a clean user interface and real-time feedback for a realistic banking experience.",
    image: "/images/faspay.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "https://faspaybank.vercel.app",
    githubUrl: "",
    date: "2025",
    featured: true,
    createdAt: new Date("2025-10-08"),
  },


]

// Check if we're in the browser
const isBrowser = typeof window !== "undefined"

// Storage key for projects
const STORAGE_KEY = "portfolio-projects"
const BACKUP_KEY = "portfolio-projects-backup"

// Debug mode for logging
const DEBUG = true

// Log helper function with different levels
function log(level: "info" | "warn" | "error", ...args: any[]) {
  if (DEBUG) {
    const timestamp = new Date().toISOString()
    const prefix = `[Projects ${level.toUpperCase()}] ${timestamp}:`

    switch (level) {
      case "error":
        console.error(prefix, ...args)
        break
      case "warn":
        console.warn(prefix, ...args)
        break
      default:
        console.log(prefix, ...args)
    }
  }
}

// Validation helper functions
function isValidUrl(url: string): boolean {
  if (!url || url.trim() === "") return true // Empty URLs are allowed
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

function isValidYear(year: string): boolean {
  const currentYear = new Date().getFullYear()
  const yearNum = Number.parseInt(year, 10)
  return !isNaN(yearNum) && yearNum >= 2000 && yearNum <= currentYear + 2
}

function sanitizeString(str: string): string {
  return str.trim().replace(/\s+/g, " ")
}

function validateProjectData(project: Partial<Project>, isUpdate = false): ProjectValidationResult {
  const errors: Record<string, string> = {}
  const warnings: string[] = []

  // Title validation
  if (project.title !== undefined) {
    const title = sanitizeString(project.title)
    if (!title) {
      errors.title = "Title is required"
    } else if (title.length < 3) {
      errors.title = "Title must be at least 3 characters long"
    } else if (title.length > 100) {
      errors.title = "Title must be less than 100 characters"
    }
  }

  // Description validation
  if (project.description !== undefined) {
    const description = sanitizeString(project.description)
    if (!description) {
      errors.description = "Description is required"
    } else if (description.length < 10) {
      errors.description = "Description must be at least 10 characters long"
    } else if (description.length > 1000) {
      errors.description = "Description must be less than 1000 characters"
    }
  }

  // Technologies validation
  if (project.technologies !== undefined) {
    if (!Array.isArray(project.technologies) || project.technologies.length === 0) {
      errors.technologies = "At least one technology is required"
    } else if (project.technologies.some((tech) => !tech || tech.trim() === "")) {
      errors.technologies = "All technologies must be non-empty"
    } else if (project.technologies.length > 20) {
      warnings.push("Consider reducing the number of technologies for better readability")
    }
  }

  // URL validations
  if (project.liveUrl !== undefined && !isValidUrl(project.liveUrl)) {
    errors.liveUrl = "Live URL must be a valid URL"
  }

  if (project.githubUrl !== undefined && !isValidUrl(project.githubUrl)) {
    errors.githubUrl = "GitHub URL must be a valid URL"
  }

  if (project.image !== undefined && project.image && !isValidUrl(project.image)) {
    errors.image = "Image URL must be a valid URL"
  }

  // Date validation
  if (project.date !== undefined && !isValidYear(project.date)) {
    errors.date = "Date must be a valid year between 2000 and current year + 2"
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    warnings,
  }
}

// Create backup before critical operations
function createBackup(projects: Project[]): boolean {
  if (!isBrowser) return false

  try {
    const backup = {
      timestamp: new Date().toISOString(),
      projects: projects,
      version: "1.0",
    }
    localStorage.setItem(BACKUP_KEY, JSON.stringify(backup))
    log("info", "Backup created successfully")
    return true
  } catch (error) {
    log("error", "Failed to create backup:", error)
    return false
  }
}

// Restore from backup
function restoreFromBackup(): Project[] | null {
  if (!isBrowser) return null

  try {
    const backupData = localStorage.getItem(BACKUP_KEY)
    if (backupData) {
      const backup = JSON.parse(backupData)
      const projects = backup.projects.map((project: any) => ({
        ...project,
        createdAt: new Date(project.createdAt),
        updatedAt: project.updatedAt ? new Date(project.updatedAt) : undefined,
      }))
      log("info", "Restored from backup successfully")
      return projects
    }
  } catch (error) {
    log("error", "Failed to restore from backup:", error)
  }
  return null
}

// Get projects from localStorage with fallback to defaults
function getStoredProjects(): Project[] {
  if (!isBrowser) {
    log("info", "Server-side rendering, using default projects")
    return defaultProjects
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      log("info", "Found stored projects in localStorage")
      const parsed = JSON.parse(stored)

      // Convert date strings back to Date objects
      const storedProjects = parsed.map((project: any) => ({
        ...project,
        createdAt: new Date(project.createdAt),
        updatedAt: project.updatedAt ? new Date(project.updatedAt) : undefined,
      }))

      log("info", `Loaded ${storedProjects.length} projects from localStorage`)

      // Merge stored projects with defaults, avoiding duplicates
      const allProjects = [...storedProjects]
      let defaultsAdded = 0

      defaultProjects.forEach((defaultProject) => {
        if (!storedProjects.find((p: Project) => p.id === defaultProject.id)) {
          allProjects.push(defaultProject)
          defaultsAdded++
        }
      })

      if (defaultsAdded > 0) {
        log("info", `Added ${defaultsAdded} default projects that were missing`)
      }

      return allProjects
    }
  } catch (error) {
    log("error", "Error parsing stored projects:", error)
    log("warn", "Attempting to restore from backup...")

    const backupProjects = restoreFromBackup()
    if (backupProjects) {
      return backupProjects
    }

    log("warn", "Error loading projects from localStorage, falling back to defaults")
  }

  log("info", "No stored projects found, using defaults")
  return defaultProjects
}

// Save projects to localStorage with error handling
function saveProjects(projects: Project[]): boolean {
  if (!isBrowser) {
    log("info", "Server-side rendering, skipping save")
    return false
  }

  try {
    // Create backup before saving
    createBackup(getStoredProjects())

    // Validate projects before saving
    const invalidProjects = projects.filter((project) => {
      const validation = validateProjectData(project)
      return !validation.isValid
    })

    if (invalidProjects.length > 0) {
      log("error", `Found ${invalidProjects.length} invalid projects, aborting save`)
      return false
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
    log("info", `Saved ${projects.length} projects to localStorage`)

    // Dispatch event to notify other components
    window.dispatchEvent(
      new CustomEvent("projects-updated", {
        detail: {
          count: projects.length,
          timestamp: new Date().toISOString(),
        },
      }),
    )

    return true
  } catch (error) {
    log("error", "Error saving projects to localStorage:", error)

    // Attempt to restore from backup if save fails
    const backupProjects = restoreFromBackup()
    if (backupProjects) {
      log("warn", "Restored from backup after save failure")
    }

    return false
  }
}

// Global projects cache
let projectsCache: Project[] | null = null

export function getProjects(): Project[] {
  // Always get fresh data from localStorage in browser
  const projects = getStoredProjects()
  projectsCache = projects
  return projects.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((project) => project.featured)
}

export function getProject(id: string): Project | undefined {
  return getProjects().find((project) => project.id === id)
}

export function addProject(project: Omit<Project, "id" | "createdAt">): Project {
  log("info", "Adding new project:", project.title)

  // Validate project data
  const validation = validateProjectData(project)
  if (!validation.isValid) {
    log("error", "Project validation failed:", validation.errors)
    throw new Error(`Validation failed: ${Object.values(validation.errors).join(", ")}`)
  }

  if (validation.warnings.length > 0) {
    log("warn", "Project validation warnings:", validation.warnings)
  }

  const newProject: Project = {
    ...project,
    title: sanitizeString(project.title),
    description: sanitizeString(project.description),
    technologies: project.technologies.map((tech) => sanitizeString(tech)),
    id: `project-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date(),
  }

  // Get current projects and add new one
  const currentProjects = getStoredProjects()
  const updatedProjects = [newProject, ...currentProjects]

  // Save to localStorage
  const saveSuccess = saveProjects(updatedProjects)
  if (!saveSuccess) {
    log("error", "Failed to save new project")
    throw new Error("Failed to save project to storage")
  }

  // Update cache
  projectsCache = updatedProjects

  log("info", "Project added successfully:", newProject.title)
  log("info", "Total projects after addition:", updatedProjects.length)

  return newProject
}

export function updateProject(id: string, updates: Partial<Project>): UpdateResult {
  log("info", "Starting project update for ID:", id)
  log("info", "Update data:", updates)

  try {
    // Input validation
    if (!id || typeof id !== "string") {
      log("error", "Invalid project ID provided:", id)
      return {
        success: false,
        error: "Invalid project ID provided",
      }
    }

    // Get current projects
    const currentProjects = getStoredProjects()
    const projectIndex = currentProjects.findIndex((project) => project.id === id)

    if (projectIndex === -1) {
      log("error", "Project not found for update:", id)
      return {
        success: false,
        error: "Project not found",
      }
    }

    const existingProject = currentProjects[projectIndex]
    log("info", "Found existing project:", existingProject.title)

    // Check if this is a default project and we're in production
    const isDefaultProject = defaultProjects.some((p) => p.id === id)
    if (process.env.NODE_ENV === "production" && isDefaultProject) {
      log("warn", "Attempted to update default project in production:", id)
      // Allow updates to default projects but log it
    }

    // Validate update data
    const validation = validateProjectData(updates, true)
    if (!validation.isValid) {
      log("error", "Update validation failed:", validation.errors)
      return {
        success: false,
        error: "Validation failed",
        validationErrors: validation.errors,
      }
    }

    // Sanitize string fields in updates
    const sanitizedUpdates = { ...updates }
    if (sanitizedUpdates.title) {
      sanitizedUpdates.title = sanitizeString(sanitizedUpdates.title)
    }
    if (sanitizedUpdates.description) {
      sanitizedUpdates.description = sanitizeString(sanitizedUpdates.description)
    }
    if (sanitizedUpdates.technologies) {
      sanitizedUpdates.technologies = sanitizedUpdates.technologies.map((tech) => sanitizeString(tech))
    }

    // Create updated project with timestamp
    const updatedProject: Project = {
      ...existingProject,
      ...sanitizedUpdates,
      updatedAt: new Date(),
    }

    log("info", "Prepared updated project:", updatedProject.title)

    // Update the project in the array
    const updatedProjects = [...currentProjects]
    updatedProjects[projectIndex] = updatedProject

    // Save to localStorage with error handling
    const saveSuccess = saveProjects(updatedProjects)
    if (!saveSuccess) {
      log("error", "Failed to save updated project to storage")
      return {
        success: false,
        error: "Failed to save project updates to storage",
      }
    }

    // Update cache
    projectsCache = updatedProjects

    log("info", "Project updated successfully:", updatedProject.title)
    log("info", "Update completed at:", updatedProject.updatedAt)

    // Return success result with warnings if any
    return {
      success: true,
      project: updatedProject,
      warnings: validation.warnings.length > 0 ? validation.warnings : undefined,
    }
  } catch (error) {
    log("error", "Unexpected error during project update:", error)
    return {
      success: false,
      error: `Unexpected error: ${error instanceof Error ? error.message : "Unknown error"}`,
    }
  }
}

export function deleteProject(id: string): boolean {
  log("info", "Deleting project:", id)

  try {
    const currentProjects = getStoredProjects()
    const index = currentProjects.findIndex((project) => project.id === id)

    if (index === -1) {
      log("error", "Project not found for deletion:", id)
      return false
    }

    // Check if this is a default project and we're in production
    const isDefaultProject = defaultProjects.some((p) => p.id === id)
    if (process.env.NODE_ENV === "production" && isDefaultProject) {
      log("warn", "Attempted to delete a default project in production, skipping:", id)
      return false
    }

    const deletedProject = currentProjects[index]
    currentProjects.splice(index, 1)

    const saveSuccess = saveProjects(currentProjects)
    if (!saveSuccess) {
      log("error", "Failed to save after project deletion")
      return false
    }

    projectsCache = currentProjects

    log("info", "Project deleted successfully:", deletedProject.title)
    return true
  } catch (error) {
    log("error", "Error during project deletion:", error)
    return false
  }
}

// Force refresh projects cache
export function refreshProjectsCache(): void {
  log("info", "Refreshing projects cache")
  projectsCache = null

  if (isBrowser) {
    // Trigger a storage event to notify other components
    window.dispatchEvent(
      new CustomEvent("projects-updated", {
        detail: {
          action: "cache-refresh",
          timestamp: new Date().toISOString(),
        },
      }),
    )
    log("info", "Dispatched projects-updated event")
  }
}

// Get project statistics
export function getProjectStats() {
  const projects = getProjects()
  const featured = getFeaturedProjects()
  const currentYear = new Date().getFullYear()
  const recentProjects = projects.filter((p) => Number.parseInt(p.date) === currentYear)

  // Fix the Set iteration issue
  const allTechnologies = projects.flatMap((p) => p.technologies)
  const uniqueTechnologies = Array.from(new Set(allTechnologies))

  return {
    total: projects.length,
    featured: featured.length,
    recent: recentProjects.length,
    technologies: uniqueTechnologies.length,
    lastUpdated: projects.reduce((latest, project) => {
      const projectDate = project.updatedAt || project.createdAt
      return projectDate > latest ? projectDate : latest
    }, new Date(0)),
  }
}

// Initialize projects on module load (browser only)
if (isBrowser) {
  // Ensure default projects are always available
  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) {
    log("info", "Initializing default projects...")
    saveProjects(defaultProjects)
  }

  // Set up storage event listener
  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEY) {
      log("info", "Storage event detected, refreshing projects")
      projectsCache = null
    }
  })

  // Set up error handling for unhandled promise rejections
  window.addEventListener("unhandledrejection", (event) => {
    if (event.reason && event.reason.message && event.reason.message.includes("projects")) {
      log("error", "Unhandled promise rejection in projects module:", event.reason)
    }
  })

  log("info", "Projects module initialized successfully")
}
