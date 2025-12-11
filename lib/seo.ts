import type { Metadata } from "next"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ritchietech.vercel.app"
const siteName = "Isaac Elisha - Ritchie Tech"
const defaultDescription = "Full-Stack Developer building scalable web solutions for businesses and startups. Specializing in React, Next.js, and modern web technologies."
const defaultImage = `${baseUrl}/images/ritchie.jpg`

export function generateMetadata({
  title,
  description = defaultDescription,
  image = defaultImage,
  path = "",
  keywords = [],
  noIndex = false,
}: {
  title: string
  description?: string
  image?: string
  path?: string
  keywords?: string[]
  noIndex?: boolean
}): Metadata {
  const pageUrl = `${baseUrl}${path}`
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`

  const defaultKeywords = [
    "Isaac Elisha",
    "Ritchie Tech",
    "Full-Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
  ]

  return {
    metadataBase: new URL(baseUrl),
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    authors: [{ name: "Isaac Elisha", url: baseUrl }],
    creator: "Isaac Elisha",
    publisher: "Isaac Elisha",
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: pageUrl,
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@RitchieTech",
    },
    alternates: {
      canonical: pageUrl,
    },
  }
}

// Specific page metadata generators
export const homeMetadata = generateMetadata({
  title: siteName,
  description: "Full-Stack Developer building scalable web solutions for businesses and startups. View my portfolio of production-ready applications.",
  path: "/",
  keywords: ["portfolio", "web development", "software engineer"],
})

export const aboutMetadata = generateMetadata({
  title: "About Me",
  description: "Learn more about Isaac Elisha (Ritchie Tech) - Full-Stack Developer with expertise in React, Next.js, Node.js, and modern web technologies.",
  path: "/about",
  keywords: ["about", "bio", "experience", "skills", "education"],
})

export const projectsMetadata = generateMetadata({
  title: "Projects",
  description: "Explore my portfolio of full-stack web development projects. From e-commerce platforms to SaaS applications built with React, Next.js, and TypeScript.",
  path: "/projects",
  keywords: ["projects", "portfolio", "web apps", "case studies", "full-stack projects"],
})

export const contactMetadata = generateMetadata({
  title: "Contact Me",
  description: "Get in touch to discuss your project. Available for freelance work, collaborations, and full-time opportunities.",
  path: "/contact",
  keywords: ["contact", "hire", "freelance", "collaboration", "opportunities"],
})

export function generateProjectMetadata(project: {
  title: string
  description: string
  image?: string
  technologies?: string[]
}): Metadata {
  return generateMetadata({
    title: project.title,
    description: project.description,
    image: project.image || defaultImage,
    path: `/projects/${encodeURIComponent(project.title.toLowerCase().replace(/\s+/g, '-'))}`,
    keywords: project.technologies || [],
  })
}
