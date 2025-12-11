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
    "jobTitle": "Certified Full-Stack Developer & Cloud Solutions Architect",
    "worksFor": {
      "@type": "Organization",
      "name": "Ritchie Tech"
    },
    "description": "Certified Full-Stack Developer and Cloud Solutions Architect specializing in scalable enterprise applications. Google Cloud, AWS, and Azure certified professional with expertise in React, Next.js, TypeScript, and modern cloud infrastructure.",
    "email": "ritchietech01@gmail.com",
    "telephone": "+234-907-992-8298",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Computer Science Program"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Google Associate Cloud Engineer",
        "credentialCategory": "certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Google Cloud"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "AWS Certified Developer - Associate",
        "credentialCategory": "certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Amazon Web Services"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Microsoft Certified: Azure Developer Associate",
        "credentialCategory": "certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Microsoft"
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Meta Front-End Developer Professional Certificate",
        "credentialCategory": "certification",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Meta"
        }
      }
    ],
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Full-Stack Development",
      "Cloud Architecture",
      "Google Cloud Platform",
      "Amazon Web Services",
      "Microsoft Azure",
      "Software Engineering",
      "Web Development",
      "Enterprise Applications",
      "Microservices",
      "Docker",
      "Kubernetes"
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
