import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Award, BookOpen, Download, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "HTML/CSS",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Docker",
  ]

  const certifications = [
    {
      title: "Full Stack Web Development",
      platform: "Coursera",
      year: "2023",
      issuer: "University of Michigan",
    },
    {
      title: "React - The Complete Guide",
      platform: "Udemy",
      year: "2023",
      instructor: "Maximilian Schwarzmüller",
    },
    {
      title: "Node.js Developer Course",
      platform: "Udemy",
      year: "2022",
      instructor: "Andrew Mead",
    },
    {
      title: "Python for Data Science",
      platform: "Coursera",
      year: "2022",
      issuer: "IBM",
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
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">About Isaac Elisha</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Full-Stack Developer | Computer Science Student | Tech Enthusiast
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
                Hello! I'm Isaac Elisha, also known as Ritchie Tech in the development community. I'm a passionate
                full-stack developer with a strong foundation in both front-end and back-end technologies, currently
                pursuing my Bachelor of Science in Computer Science with an expected graduation in 2027.
              </p>
              <p>
                My journey into programming began with a curiosity about how websites and applications work behind the
                scenes. This curiosity quickly evolved into a passion for creating digital solutions that solve
                real-world problems. I specialize in modern web technologies including React, Next.js, Node.js, and
                various database systems.
              </p>
              <p>
                As a front-end developer, I focus on creating intuitive, responsive, and accessible user interfaces that
                provide exceptional user experiences. On the back-end, I build robust APIs, manage databases, and ensure
                scalable architecture that can grow with business needs.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest technologies and best practices in
                software development. This commitment to growth has led me to earn several certifications from renowned
                platforms like Coursera and Udemy, complementing my formal education.
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
                    <p className="text-slate-600 dark:text-slate-400">Expected Graduation: 2027</p>
                    <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
                      Focus on software engineering, algorithms, and system design
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
                    <h3 className="font-semibold">Full-Stack Development</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Building end-to-end web applications</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Open Source Contributions</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Contributing to community projects</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Continuous Learning</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Exploring new technologies and frameworks
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
