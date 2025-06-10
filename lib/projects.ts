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
  {
    id: "2",
    title: "Errand PLUS",
    description:
      "A collaborative Errand management application with real-time updates, Hiring of errand runners, becoming an errand runner ,and team collaboration features. Built with PHP, JS and CSS.",
    image: "https://errandplus.org/assets/images/boxs.avif",
    technologies: ["REACT", "Node.js", "PHP", "MYSQL", "Express"],
    liveUrl: "https://errandplus.org",
    githubUrl: "",
    date: "2023",
    featured: true,
    createdAt: new Date("2023-02-01"),
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "A responsive weather application that provides current weather conditions and forecasts. Features location-based weather data and interactive charts.",
    image: "images/weather.png",
    technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    githubUrl: "",
    date: "2024",
    featured: false,
    createdAt: new Date("2024-05-01"),
  },
    {
    id: "4",
    title: " Bible quiz",
    description:
      "a Bible quiz application that allows users to test their knowledge of the Bible through multiple-choice questions. It features a user-friendly interface, score tracking, and a variety of quizzes covering different books and themes of the Bible.",
    image: "images/image.png",
    technologies: ["React", "Typescript", "Nextjs", "Tailwind Css"],
    liveUrl: "https://isaac-bible-quiz.vercel.app",
    githubUrl: "",
    date: "2025",
    featured: true,
    createdAt: new Date("2025-06-08"),
  },
    {
    id: "5",
    title: "Cervical Cancer Diagnosis",
    description:
      "A medical Site that works with Ai to diagnose and provide information on cervical cancer. It uses Exper system algorithms to analyze user inputs and provide accurate diagnoses and recommendations.",
    image: "images/cancer.png",
    technologies: ["React", "Typescript", "Nextjs", "Tailwind Css"],
    liveUrl: "https://isaac-bible-quiz.vercel.app",
    githubUrl: "",
    date: "2025",
    featured: true,
    createdAt: new Date("2025-06-08"),
  },
]

// Check if we're in the browser
const isBrowser = typeof window !== "undefined"

// Storage key for projects
const STORAGE_KEY = "portfolio-projects"

// Debug mode for logging
const DEBUG = true

// Log helper function
function log(...args: any[]) {
  if (DEBUG) {
    console.log("[Projects]", ...args)
  }
}

// Get projects from localStorage with fallback to defaults
function getStoredProjects(): Project[] {
  if (!isBrowser) {
    log("Server-side rendering, using default projects")
    return defaultProjects
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      log("Found stored projects in localStorage")
      const parsed = JSON.parse(stored)

      // Convert createdAt strings back to Date objects
      const storedProjects = parsed.map((project: any) => ({
        ...project,
        createdAt: new Date(project.createdAt),
      }))

      log(`Loaded ${storedProjects.length} projects from localStorage`)

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
        log(`Added ${defaultsAdded} default projects that were missing`)
      }

      return allProjects
    }
  } catch (error) {
    console.error("Error parsing stored projects:", error)
    log("Error loading projects from localStorage, falling back to defaults")
  }

  log("No stored projects found, using defaults")
  return defaultProjects
}

// Save projects to localStorage
function saveProjects(projects: Project[]) {
  if (!isBrowser) {
    log("Server-side rendering, skipping save")
    return
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
    log(`Saved ${projects.length} projects to localStorage`)

    // Dispatch event to notify other components
    window.dispatchEvent(new CustomEvent("projects-updated", { detail: { count: projects.length } }))
  } catch (error) {
    console.error("Error saving projects to localStorage:", error)
    log("Failed to save projects to localStorage")
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
  log("Adding new project:", project.title)

  const newProject: Project = {
    ...project,
    id: `project-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date(),
  }

  // Get current projects and add new one
  const currentProjects = getStoredProjects()
  const updatedProjects = [newProject, ...currentProjects]

  // Save to localStorage
  saveProjects(updatedProjects)

  // Update cache
  projectsCache = updatedProjects

  log("Project added successfully:", newProject.title)
  log("Total projects after addition:", updatedProjects.length)

  return newProject
}

export function updateProject(id: string, updates: Partial<Project>): Project | null {
  log("Updating project:", id)

  const currentProjects = getStoredProjects()
  const index = currentProjects.findIndex((project) => project.id === id)

  if (index === -1) {
    log("Project not found for update:", id)
    return null
  }

  currentProjects[index] = { ...currentProjects[index], ...updates }
  saveProjects(currentProjects)
  projectsCache = currentProjects

  log("Project updated successfully:", currentProjects[index].title)
  return currentProjects[index]
}

export function deleteProject(id: string): boolean {
  log("Deleting project:", id)

  const currentProjects = getStoredProjects()
  const index = currentProjects.findIndex((project) => project.id === id)

  if (index === -1) {
    log("Project not found for deletion:", id)
    return false
  }

  // Don't delete default projects in production
  if (process.env.NODE_ENV === "production" && defaultProjects.some((p) => p.id === id)) {
    log("Attempted to delete a default project in production, skipping:", id)
    return false
  }

  const deletedProject = currentProjects[index]
  currentProjects.splice(index, 1)
  saveProjects(currentProjects)
  projectsCache = currentProjects

  log("Project deleted successfully:", deletedProject.title)
  return true
}

// Force refresh projects cache
export function refreshProjectsCache(): void {
  log("Refreshing projects cache")
  projectsCache = null

  if (isBrowser) {
    // Trigger a storage event to notify other components
    window.dispatchEvent(new CustomEvent("projects-updated"))
    log("Dispatched projects-updated event")
  }
}

// Initialize projects on module load (browser only)
if (isBrowser) {
  // Ensure default projects are always available
  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) {
    log("Initializing default projects...")
    saveProjects(defaultProjects)
  }

  // Set up storage event listener
  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEY) {
      log("Storage event detected, refreshing projects")
      projectsCache = null
    }
  })

  log("Projects module initialized")
}
