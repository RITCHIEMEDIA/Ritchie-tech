import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://ritchietech.vercel.app"),
  title: {
    default: "Isaac Elisha - Certified Full-Stack Developer & Cloud Architect | Owerri, Nigeria",
    template: "%s | Isaac Elisha - Ritchietech",
  },
  description:
    "Isaac Elisha - Certified Full-Stack Developer & Cloud Solutions Architect in Owerri, Nigeria. Google Cloud, AWS & Azure certified. Expert in React, Next.js, TypeScript. Ritchietech Software Company - Enterprise web applications, cloud solutions, and custom software development.",
  keywords: [
    // Personal Brand
    "Isaac Elisha",
    "Isaac Elisha Owerri",
    "Isaac Elisha Nigeria",
    "Ritchie Tech",
    "Ritchietech",
    "Ritchietech Software Company",
    
    // Professional Titles
    "Certified Full-Stack Developer",
    "Cloud Solutions Architect",
    "Full-Stack Developer Nigeria",
    "Web Developer Owerri",
    "Software Engineer Nigeria",
    
    // Certifications
    "Google Cloud Certified Developer",
    "AWS Certified Developer",
    "Azure Certified Developer",
    "Google Cloud Engineer Nigeria",
    "Meta Certified Developer",
    
    // Technologies
    "React Developer Nigeria",
    "Next.js Expert",
    "TypeScript Developer",
    "Node.js Developer",
    "JavaScript Expert Nigeria",
    
    // Services
    "Web Development Owerri",
    "Cloud Solutions Nigeria",
    "Enterprise Software Development",
    "Custom Web Applications",
    "Software Development Company Owerri",
    "Tech Company Imo State",
    
    // Local SEO
    "Software Developer Owerri",
    "Web Developer Imo State",
    "IT Services Owerri",
    "Tech Solutions Nigeria",
    "Owerri Software Company",
    
    // Technical
    "Microservices Architecture",
    "Cloud Native Development",
    "Enterprise Web Development",
    "Scalable Applications",
    "Docker Kubernetes",
  ],
  authors: [{ name: "Isaac Elisha", url: "https://ritchietech.vercel.app" }],
  creator: "Isaac Elisha",
  publisher: "Ritchietech Software Company",
  applicationName: "Isaac Elisha Portfolio",
  category: "Technology",
  classification: "Software Development",
  openGraph: {
    type: "website",
    locale: "en_NG",
    alternateLocale: ["en_US", "en_GB"],
    url: "https://ritchietech.vercel.app",
    title: "Isaac Elisha - Certified Full-Stack Developer | Owerri, Nigeria",
    description:
      "Certified Full-Stack Developer with Google Cloud, AWS & Azure certifications. Ritchietech Software Company in Owerri, Nigeria - Building enterprise-grade web solutions.",
    siteName: "Isaac Elisha - Ritchietech Portfolio",
    images: [
      {
        url: "https://ritchietech.vercel.app/images/ritchie.jpg",
        width: 1200,
        height: 630,
        alt: "Isaac Elisha - Certified Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac Elisha - Certified Full-Stack Developer | Owerri, Nigeria",
    description:
      "Google Cloud, AWS & Azure certified developer. Building enterprise solutions with React, Next.js, TypeScript. Owerri, Nigeria.",
    images: ["https://ritchietech.vercel.app/images/ritchie.jpg"],
    creator: "@RitchieTech",
    site: "@RitchieTech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://ritchietech.vercel.app",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    // Add your Google Search Console verification code
  },
  other: {
    'geo.region': 'NG-IM',
    'geo.placename': 'Owerri',
    'geo.position': '5.4840;7.0351',
  },
}

// Add this type declaration
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'expertise-ai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        client: string;
      }
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a href="#main" className="skip-link sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-blue-600 focus:text-white focus:top-0 focus:left-0">
            Skip to main content
          </a>
          <Navigation />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
        <expertise-ai client="1dd9c2d1-9de9-455f-930b-f2ecdbff7f40"></expertise-ai>
        <script 
          src="https://d31ptbphd2zjsx.cloudfront.net/genweb/ai-genweb.js" 
          defer
        />
      </body>
    </html>
  )
}
