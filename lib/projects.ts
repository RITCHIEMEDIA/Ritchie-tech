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

// Check if we're in the browser
const isBrowser = typeof window !== "undefined"

// Initialize projects from localStorage or default data
function initializeProjects(): Project[] {
  if (isBrowser) {
    const stored = localStorage.getItem("portfolio-projects")
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        // Convert createdAt strings back to Date objects
        return parsed.map((project: any) => ({
          ...project,
          createdAt: new Date(project.createdAt),
        }))
      } catch (error) {
        console.error("Error parsing stored projects:", error)
      }
    }
  }

  // Default projects if no stored data
  return [
    {
      id: "1",
      title: "SWIFTX GLOBAL LOGISTICS",
      description:
        "A full-stack Logistics Management System that streamlines operations, from shipment tracking to invoicing, And a fully working Admin panel. Built with PHP, JS, CSS, and MYSQL.",
      image: "https://swiftxglobal.infinityfreeapp.com/images/pexels-ethan-nguyen-63327081-9749472.jpg",
      technologies: ["PHP", "HTML", "JS", "MYSQL", " CSS"],
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
      date: "2025",
      featured: true,
      createdAt: new Date("2023-02-01"),
    },
    {
      id: "3",
      title: "Weather Dashboard",
      description:
        "A responsive weather application that provides current weather conditions and forecasts. Features location-based weather data and interactive charts.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      liveUrl: "https://weather-dashboard-demo.vercel.app",
      githubUrl: "https://github.com/isaacelisha/weather-dashboard",
      date: "2022",
      featured: false,
      createdAt: new Date("2022-01-01"),
    },
  ]
}

// Global projects array
let projects: Project[] = initializeProjects()

// Save projects to localStorage
function saveProjects() {
  if (isBrowser) {
    try {
      localStorage.setItem("portfolio-projects", JSON.stringify(projects))
    } catch (error) {
      console.error("Error saving projects to localStorage:", error)
    }
  }
}

export function getProjects(): Project[] {
  // Always get fresh data from localStorage if available
  if (isBrowser) {
    const stored = localStorage.getItem("portfolio-projects")
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        projects = parsed.map((project: any) => ({
          ...project,
          createdAt: new Date(project.createdAt),
        }))
      } catch (error) {
        console.error("Error parsing stored projects:", error)
      }
    }
  }
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
    id: Date.now().toString(),
    createdAt: new Date(),
  }

  // Get current projects and add new one
  const currentProjects = getProjects()
  projects = [newProject, ...currentProjects]
  saveProjects()

  console.log("Project added:", newProject)
  console.log("Total projects:", projects.length)

  return newProject
}

export function updateProject(id: string, updates: Partial<Project>): Project | null {
  const currentProjects = getProjects()
  const index = currentProjects.findIndex((project) => project.id === id)
  if (index === -1) return null

  currentProjects[index] = { ...currentProjects[index], ...updates }
  projects = currentProjects
  saveProjects()

  return currentProjects[index]
}

export function deleteProject(id: string): boolean {
  const currentProjects = getProjects()
  const index = currentProjects.findIndex((project) => project.id === id)
  if (index === -1) return false

  currentProjects.splice(index, 1)
  projects = currentProjects
  saveProjects()

  return true
}

// Initialize projects on module load
if (isBrowser) {
  projects = initializeProjects()
}
