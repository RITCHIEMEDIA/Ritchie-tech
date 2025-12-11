export function PersonStructuredData() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Isaac Elisha",
    "givenName": "Isaac",
    "familyName": "Elisha",
    "alternateName": "Ritchie Tech",
    "url": "https://ritchietech.vercel.app",
    "image": "https://ritchietech.vercel.app/images/ritchie.jpg",
    "sameAs": [
      "https://github.com/Ritchiemedia",
      "https://www.linkedin.com/in/isaac-elisha-a1701b371",
      "https://wa.me/2349079928298",
      "https://www.google.com/maps?cid=YOUR_GOOGLE_BUSINESS_CID"
    ],
    "jobTitle": "Certified Full-Stack Developer & Cloud Solutions Architect",
    "worksFor": {
      "@type": "Organization",
      "name": "Ritchietech Software Company",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Owerri",
        "addressRegion": "Imo State",
        "addressCountry": "Nigeria"
      },
      "description": "Professional software development company specializing in web applications, cloud solutions, and enterprise software"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Owerri",
      "addressRegion": "Imo State",
      "postalCode": "460001",
      "addressCountry": "NG"
    },
    "nationality": {
      "@type": "Country",
      "name": "Nigeria"
    },
    "description": "Certified Full-Stack Developer and Cloud Solutions Architect based in Owerri, Nigeria. Specializing in scalable enterprise applications with Google Cloud, AWS, and Azure certifications. Expert in React, Next.js, TypeScript, and modern cloud infrastructure.",
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
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Full-Stack Web Development",
          "description": "Custom web application development using React, Next.js, and modern technologies"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Solutions Architecture",
          "description": "Cloud infrastructure design and deployment on Google Cloud, AWS, and Azure"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enterprise Software Development",
          "description": "Scalable enterprise applications and business solutions"
        }
      }
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
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ritchietech.vercel.app/projects?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
    />
  )
}

export function LocalBusinessStructuredData() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ritchietech Software Company",
    "alternateName": "Ritchie Tech",
    "description": "Professional software development company in Owerri, Nigeria. Specializing in web applications, cloud solutions, and enterprise software. Google Cloud, AWS & Azure certified developers.",
    "url": "https://ritchietech.vercel.app",
    "logo": "https://ritchietech.vercel.app/images/ritchie.jpg",
    "image": "https://ritchietech.vercel.app/images/ritchie.jpg",
    "telephone": "+234-907-992-8298",
    "email": "ritchietech01@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Owerri",
      "addressLocality": "Owerri",
      "addressRegion": "Imo State",
      "postalCode": "460001",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "5.4840",
      "longitude": "7.0351"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/in/isaac-elisha-a1701b371",
      "https://github.com/Ritchiemedia",
      "https://wa.me/2349079928298"
    ],
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "City",
        "name": "Owerri"
      },
      {
        "@type": "State",
        "name": "Imo State"
      },
      {
        "@type": "Country",
        "name": "Nigeria"
      },
      {
        "@type": "Place",
        "name": "Global"
      }
    ],
    "serviceType": [
      "Web Development",
      "Mobile App Development",
      "Cloud Solutions",
      "Software Consulting",
      "Enterprise Software Development"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Web Development",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "React & Next.js Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Full-Stack Web Applications"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Cloud Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Google Cloud Solutions"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AWS Development & Deployment"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Azure Cloud Architecture"
              }
            }
          ]
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "12"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  )
}
