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
    default: "Isaac Elisha - Full-Stack Developer",
    template: "%s | Isaac Elisha",
  },
  description:
    "Full-Stack Developer and Computer Science Student passionate about creating innovative web solutions. Specializing in React, Next.js, and modern web technologies.",
  keywords: ["Isaac Elisha", "Ritchie Tech", "Full-Stack Developer", "React", "Next.js", "Web Development"],
  authors: [{ name: "Isaac Elisha" }],
  creator: "Isaac Elisha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://isaac-elisha.vercel.app",
    title: "Isaac Elisha - Full-Stack Developer",
    description:
      "Full-Stack Developer and Computer Science Student passionate about creating innovative web solutions.",
    siteName: "Isaac Elisha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac Elisha - Full-Stack Developer",
    description:
      "Full-Stack Developer and Computer Science Student passionate about creating innovative web solutions.",
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
          <Navigation />
          <main>{children}</main>
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
