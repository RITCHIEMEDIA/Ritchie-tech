import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Award, BookOpen, Download, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function About() {
  const skills = [
    // Frontend
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5/CSS3",
    "Tailwind CSS",
    "Redux/Zustand",
    "React Query",
    // Backend
    "Node.js",
    "Express.js",
    "Python",
    "PHP",
    "REST APIs",
    "GraphQL",
    // Databases
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis",
    // Cloud & DevOps
    "Google Cloud Platform",
    "AWS (EC2, S3, Lambda)",
    "Microsoft Azure",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Vercel/Netlify",
    // Tools & Others
    "Git/GitHub",
    "Webpack/Vite",
    "Jest/Cypress",
    "Cloudflare CDN",
    "Nginx",
  ]

  const certifications = [
    {
      title: "Google Associate Cloud Engineer",
      platform: "Google Cloud",
      year: "2024",
      issuer: "Google",
    },
    {
      title: "AWS Certified Developer - Associate",
      platform: "Amazon Web Services",
      year: "2024",
      issuer: "AWS",
    },
    {
      title: "Meta Front-End Developer Professional Certificate",
      platform: "Coursera",
      year: "2023",
      issuer: "Meta",
    },
    {
      title: "Google Mobile Web Specialist",
      platform: "Google Developers",
      year: "2023",
      issuer: "Google",
    },
    {
      title: "Microsoft Certified: Azure Developer Associate",
      platform: "Microsoft",
      year: "2024",
      issuer: "Microsoft",
    },
    {
      title: "CDN App Developer Certification",
      platform: "Cloudflare",
      year: "2023",
      issuer: "Cloudflare",
    },
    {
      title: "Full Stack Web Development Specialization",
      platform: "Coursera",
      year: "2023",
      issuer: "University of Michigan",
    },
    {
      title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
      platform: "Udemy",
      year: "2023",
      instructor: "Maximilian Schwarzmüller",
    },
    {
      title: "Node.js - The Complete Developer Bootcamp",
      platform: "Udemy",
      year: "2022",
      instructor: "Andrew Mead",
    },
    {
      title: "Advanced JavaScript and TypeScript Patterns",
      platform: "Frontend Masters",
      year: "2024",
      issuer: "Frontend Masters",
    },
  ]

  // Resume and WhatsApp paths
  const resumePath = "/resume/Isaac-Elisha-Resume.pdf"
  const whatsappNumber = "2349079928298"
  const whatsappMessage = encodeURIComponent(
    "Hello Isaac! I reviewed your portfolio and would like to discuss potential opportunities.",
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">About RITCHIE</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Certified Full-Stack Developer | Cloud Solutions Architect | Software Engineering Professional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button asChild>
                <Link href={resumePath} target="_blank" download="Isaac-Elisha-Resume.pdf">
                  <Download className="h-4 w-4 mr-2" />
                  Download My Resume
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={whatsappUrl} target="_blank">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Let's Connect
                </Link>
              </Button>
            </div>
          </div>

          {/* Bio Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                My Story
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                Hello! I'm Isaac Elisha, professionally known as Ritchie Tech. I'm a certified full-stack developer 
                with extensive expertise in building scalable, production-ready web applications. I hold a 
                Bachelor of Science in Computer Science and maintain active certifications from Google Cloud, 
                AWS, Microsoft Azure, and Meta.
              </p>
              <p>
                With a proven track record of delivering enterprise-grade solutions, I specialize in modern web 
                technologies including React, Next.js, Node.js, TypeScript, and cloud infrastructure. My expertise 
                spans from responsive frontend development to robust backend systems, microservices architecture, 
                and cloud deployment strategies.
              </p>
              <p>
                As a certified cloud developer (Google Cloud, AWS, Azure), I architect and deploy scalable applications 
                that handle high traffic and complex business logic. My approach combines technical excellence with 
                business acumen, ensuring that every solution I build drives measurable value and user satisfaction.
              </p>
              <p>
                I'm committed to continuous professional development and staying at the forefront of technology. 
                This dedication is reflected in my portfolio of certifications from industry leaders including Google, 
                Amazon, Microsoft, Meta, and specialized platforms like Cloudflare for CDN application development.
              </p>
            </CardContent>
          </Card>

          {/* Education & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-2 border-blue-200 dark:border-blue-800 pl-4">
                    <h3 className="font-semibold text-lg">Bachelor of Science in Computer Science</h3>
                    <p className="text-slate-600 dark:text-slate-400">Computer Science & Software Engineering</p>
                    <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                      Specialized in software engineering, cloud architecture, and distributed systems
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Current Focus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold">Cloud-Native Development</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Building scalable cloud applications on AWS, GCP, and Azure</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Enterprise Solutions</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Architecting production-grade systems for businesses</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Technical Leadership</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Mentoring developers and driving best practices
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-2">
                    <h3 className="font-semibold text-lg">{cert.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{cert.platform}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {cert.issuer || cert.instructor} • {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Want to Know More?</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Download my complete resume for detailed information about my experience, projects, and achievements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href={resumePath} target="_blank" download="Isaac-Elisha-Resume.pdf">
                    <Download className="h-5 w-5 mr-2" />
                    Download Full Resume
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
