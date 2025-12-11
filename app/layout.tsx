import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://isaac-elisha.vercel.app"),
  title: {
    default: "Isaac Elisha - Certified Full-Stack Developer & Cloud Architect",
    template: "%s | Isaac Elisha",
  },
  description:
    "Certified Full-Stack Developer specializing in scalable cloud solutions. Google Cloud, AWS & Azure certified. Expert in React, Next.js, TypeScript, and enterprise web applications.",
  keywords: ["Isaac Elisha", "Ritchie Tech", "Full-Stack Developer", "Cloud Architect", "React Expert", "Next.js Developer", "Google Cloud Certified", "AWS Certified", "Azure Developer", "TypeScript", "Web Development", "Enterprise Solutions"],
  authors: [{ name: "Isaac Elisha" }],
  creator: "Isaac Elisha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://isaac-elisha.vercel.app",
    title: "Isaac Elisha - Certified Full-Stack Developer & Cloud Architect",
    description:
      "Certified Full-Stack Developer with Google Cloud, AWS & Azure certifications. Building enterprise-grade web solutions.",
    siteName: "Isaac Elisha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac Elisha - Certified Full-Stack Developer & Cloud Architect",
    description:
      "Certified Full-Stack Developer with Google Cloud, AWS & Azure certifications. Building enterprise-grade web solutions.",
  },
  robots: {
    index: true,
    follow: true,
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
