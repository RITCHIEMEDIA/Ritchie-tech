export function PersonStructuredData() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Isaac Elisha",
    "alternateName": "Ritchie Tech",
    "url": "https://ritchietech.vercel.app",
    "image": "https://ritchietech.vercel.app/images/ritchie.jpg",
    "sameAs": [
      "https://github.com/Ritchiemedia",
      "https://www.linkedin.com/in/isaac-elisha-a1701b371",
      "https://wa.me/2349079928298"
    ],
    "jobTitle": "Full-Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Ritchie Tech"
    },
    "description": "Full-Stack Developer building scalable web solutions for businesses and startups. Specializing in React, Next.js, and modern web technologies.",
    "email": "ritchietech01@gmail.com",
    "telephone": "+234-907-992-8298",
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Full-Stack Development",
      "Web Development",
      "Software Engineering"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
    />
  )
}

export function ProjectStructuredData({ project }: { project: any }) {
  const projectData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "image": project.image,
    "url": project.liveUrl || project.githubUrl,
    "author": {
      "@type": "Person",
      "name": "Isaac Elisha"
    },
    "dateCreated": project.createdAt,
    "keywords": project.technologies?.join(", "),
    "programmingLanguage": project.technologies
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(projectData) }}
    />
  )
}

export function WebsiteStructuredData() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Isaac Elisha Portfolio",
    "alternateName": "Ritchie Tech Portfolio",
    "url": "https://ritchietech.vercel.app",
    "description": "Professional portfolio showcasing full-stack development projects and expertise",
    "author": {
      "@type": "Person",
      "name": "Isaac Elisha"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
    />
  )
}
