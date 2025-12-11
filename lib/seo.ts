import type { Metadata } from "next"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ritchietech.vercel.app"
const siteName = "Isaac Elisha - Certified Full-Stack Developer & Cloud Architect"
const defaultDescription = "Certified Full-Stack Developer and Cloud Solutions Architect. Google Cloud, AWS & Azure certified. Expert in React, Next.js, TypeScript, and enterprise web applications. Building scalable solutions for businesses."
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
    "Certified Full-Stack Developer",
    "Cloud Solutions Architect",
    "Google Cloud Certified",
    "AWS Certified Developer",
    "Azure Developer",
    "React Expert",
    "Next.js Specialist",
    "TypeScript Developer",
    "JavaScript Expert",
    "Enterprise Web Development",
    "Cloud Architecture",
    "Scalable Applications",
    "Microservices",
    "Full-Stack Engineer",
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
  description: "Certified Full-Stack Developer & Cloud Architect. Google Cloud, AWS & Azure certified. Building enterprise-grade applications with React, Next.js, TypeScript. View my portfolio of production-ready solutions.",
  path: "/",
  keywords: ["portfolio", "enterprise development", "cloud solutions", "certified developer", "software architect"],
})

export const aboutMetadata = generateMetadata({
  title: "About Me",
  description: "Learn about Isaac Elisha (Ritchie Tech) - Certified Full-Stack Developer with Google Cloud, AWS & Azure certifications. BSc Computer Science. Expert in React, Next.js, Node.js, and cloud infrastructure.",
  path: "/about",
  keywords: ["about", "certifications", "experience", "skills", "education", "cloud certified", "professional developer"],
})

export const projectsMetadata = generateMetadata({
  title: "Projects",
  description: "Explore my portfolio of enterprise-grade full-stack projects. From e-commerce platforms to SaaS applications and cloud solutions built with React, Next.js, TypeScript, and modern cloud infrastructure.",
  path: "/projects",
  keywords: ["projects", "portfolio", "enterprise applications", "case studies", "cloud solutions", "full-stack projects", "production apps"],
})

export const contactMetadata = generateMetadata({
  title: "Contact Me",
  description: "Get in touch to discuss your project. Available for enterprise consulting, full-time opportunities, and freelance collaborations. Google Cloud, AWS & Azure certified developer.",
  path: "/contact",
  keywords: ["contact", "hire", "consulting", "enterprise development", "cloud solutions", "collaboration", "opportunities"],
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
