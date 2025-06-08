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
    title: "Bible quiz",
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
]

// Check if we're in the browser
const isBrowser = typeof window !== "undefined"

// Get projects from localStorage with fallback to defaults
function getStoredProjects(): Project[] {
  if (!isBrowser) {
    return defaultProjects
  }

  try {
    const stored = localStorage.getItem("portfolio-projects")
    if (stored) {
      const parsed = JSON.parse(stored)
      // Convert createdAt strings back to Date objects and merge with defaults
      const storedProjects = parsed.map((project: any) => ({
        ...project,
        createdAt: new Date(project.createdAt),
      }))

      // Merge stored projects with defaults, avoiding duplicates
      const allProjects = [...storedProjects]
      defaultProjects.forEach((defaultProject) => {
        if (!storedProjects.find((p) => p.id === defaultProject.id)) {
          allProjects.push(defaultProject)
        }
      })

      return allProjects
    }
  } catch (error) {
    console.error("Error parsing stored projects:", error)
  }

  return defaultProjects
}

// Save projects to localStorage
function saveProjects(projects: Project[]) {
  if (!isBrowser) return

  try {
    localStorage.setItem("portfolio-projects", JSON.stringify(projects))
    console.log("Projects saved to localStorage:", projects.length)
  } catch (error) {
    console.error("Error saving projects to localStorage:", error)
  }
}

// Global projects state
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

  console.log("Project added successfully:", newProject.title)
  console.log("Total projects after addition:", updatedProjects.length)

  return newProject
}

export function updateProject(id: string, updates: Partial<Project>): Project | null {
  const currentProjects = getStoredProjects()
  const index = currentProjects.findIndex((project) => project.id === id)

  if (index === -1) {
    console.error("Project not found for update:", id)
    return null
  }

  currentProjects[index] = { ...currentProjects[index], ...updates }
  saveProjects(currentProjects)
  projectsCache = currentProjects

  console.log("Project updated successfully:", currentProjects[index].title)
  return currentProjects[index]
}

export function deleteProject(id: string): boolean {
  const currentProjects = getStoredProjects()
  const index = currentProjects.findIndex((project) => project.id === id)

  if (index === -1) {
    console.error("Project not found for deletion:", id)
    return false
  }

  const deletedProject = currentProjects[index]
  currentProjects.splice(index, 1)
  saveProjects(currentProjects)
  projectsCache = currentProjects

  console.log("Project deleted successfully:", deletedProject.title)
  return true
}

// Force refresh projects cache
export function refreshProjectsCache(): void {
  projectsCache = null
  if (isBrowser) {
    // Trigger a storage event to notify other components
    window.dispatchEvent(new Event("projects-updated"))
  }
}

// Initialize projects on module load (browser only)
if (isBrowser) {
  // Ensure default projects are always available
  const stored = localStorage.getItem("portfolio-projects")
  if (!stored) {
    console.log("Initializing default projects...")
    saveProjects(defaultProjects)
  }
}
