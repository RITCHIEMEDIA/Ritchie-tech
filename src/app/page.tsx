import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Isaac Elisha Profile"
              width={200}
              height={200}
              className="rounded-full border-4 border-white shadow-xl"
            />
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white">Isaac Elisha</h1>
            <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium">Ritchie Tech</p>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Full-Stack Developer & Computer Science Student passionate about creating innovative web solutions and
              building the future of technology.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <Button asChild className="flex-1">
              <Link href="/about">
                Learn More About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="flex-1">
              <Link href="/projects">View My Projects</Link>
            </Button>
          </div>

          <div className="flex space-x-6 pt-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:isaac@ritchietech.com">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Full-Stack Developer</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Experienced in both front-end and back-end development with modern technologies
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">CS Student</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Bachelor of Science in Computer Science, expected graduation 2027
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation Focused</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Passionate about creating cutting-edge solutions and learning new technologies
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
