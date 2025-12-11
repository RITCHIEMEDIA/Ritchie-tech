import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Award, BookOpen, Download, MessageCircle } from "lucide-react"
import Link from "next/link"
import PageTransition from "@/components/page-transition"

export default function About() {
  const skills = [
    // Mobile Development
    "React Native",
    "iOS Development",
    "Android Development",
    "Mobile App Development",
    "Flutter",
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
      title: "CPN/NSQ Level 3 in Mobile Application Development",
      platform: "CPN/NSQ Certification",
      year: "2024",
      issuer: "Luzoma Microsystems Limited",
      certificateId: "CPN/NSQ/24175884",
      level: "Level 3",
    },
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
    <PageTransition>
      <div className="min-h-screen bg-mesh">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Header */}
            <div className="text-center space-y-4 animate-fade-in-down">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent animate-gradient">About RITCHIE</h1>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Certified Full-Stack Developer | Cloud Solutions Architect | Software Engineering Professional
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Button asChild className="hover-lift hover-glow group">
                  <Link href={resumePath} target="_blank" download="Isaac-Elisha-Resume.pdf">
                    <Download className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                    Download My Resume
                  </Link>
                </Button>
                <Button variant="outline" asChild className="hover-lift">
                  <Link href={whatsappUrl} target="_blank">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Let's Connect
                  </Link>
                </Button>
              </div>
            </div>

            {/* Professional Certifications Highlight - SEO Optimized */}
            <Card className="glass-strong border-0 overflow-hidden relative animate-fade-in-up delay-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
              <CardHeader className="relative">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Professional Certifications</div>
                    <div className="text-sm font-normal text-slate-600 dark:text-slate-400 mt-1">Industry-Recognized Credentials</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* CPN/NSQ Certification - Featured */}
                <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl border-2 border-green-200 dark:border-green-800 animate-scale-in relative overflow-hidden group hover:shadow-lg transition-all">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                  <div className="relative flex items-start gap-4">
                    <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-3xl">🎓</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-bold text-green-900 dark:text-green-100">CPN/NSQ Level 3 in Mobile Application Development</h3>
                        <Badge className="bg-green-600 text-white border-0 shadow-md">2024</Badge>
                      </div>
                      <p className="text-sm text-green-700 dark:text-green-300 mb-2 font-medium">Luzoma Microsystems Limited • CPN/NSQ Certification</p>
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="inline-flex items-center gap-1 text-xs bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200 px-3 py-1 rounded-full font-mono">
                          <Award className="h-3 w-3" />
                          ID: CPN/NSQ/24175884
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs bg-green-600 text-white px-3 py-1 rounded-full font-semibold">
                          ⭐ Level 3 Certified
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                          Mobile App Development
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cloud Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Google Cloud */}
                  <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all group animate-scale-in" style={{animationDelay: '100ms'}}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-xl">☁️</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">2024</Badge>
                    </div>
                    <h4 className="font-bold text-sm mb-1 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Google Associate Cloud Engineer</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Google Cloud Platform</p>
                  </div>

                  {/* AWS */}
                  <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-orange-400 dark:hover:border-orange-600 transition-all group animate-scale-in" style={{animationDelay: '150ms'}}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                        <span className="text-xl">📦</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">2024</Badge>
                    </div>
                    <h4 className="font-bold text-sm mb-1 text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">AWS Certified Developer</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Amazon Web Services</p>
                  </div>

                  {/* Azure */}
                  <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-600 transition-all group animate-scale-in" style={{animationDelay: '200ms'}}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-xl">🔷</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">2024</Badge>
                    </div>
                    <h4 className="font-bold text-sm mb-1 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Azure Developer Associate</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">Microsoft Certified</p>
                  </div>
                </div>

                {/* Meta Certification */}
                <div className="p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg border border-blue-200 dark:border-blue-800 animate-scale-in" style={{animationDelay: '250ms'}}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-xl">⚛️</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">Meta Front-End Developer Professional Certificate</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400">Meta • Coursera • 2023</p>
                    </div>
                    <Badge className="bg-blue-600 text-white border-0">Verified</Badge>
                  </div>
                </div>

                {/* View All Button */}
                <Button variant="outline" className="w-full mt-4 group" asChild>
                  <a href="#certifications">
                    <Award className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                    View All {certifications.length} Certifications
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Bio Section */}
            <Card className="glass-strong border-0 card-interactive animate-fade-in-up delay-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  My Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                <p className="animate-fade-in delay-300">
                  Hello! I'm Isaac Elisha, professionally known as Ritchie Tech. I'm a certified full-stack developer 
                  with extensive expertise in building scalable, production-ready web applications. I hold a 
                  Bachelor of Science in Computer Science and maintain active certifications from Google Cloud, 
                  AWS, Microsoft Azure, and Meta.
                </p>
                <p className="animate-fade-in delay-400">
                  With a proven track record of delivering enterprise-grade solutions, I specialize in modern web 
                  technologies including React, Next.js, Node.js, TypeScript, and cloud infrastructure. My expertise 
                  spans from responsive frontend development to robust backend systems, microservices architecture, 
                  and cloud deployment strategies.
                </p>
                <p className="animate-fade-in delay-500">
                  As a certified cloud developer (Google Cloud, AWS, Azure), I architect and deploy scalable applications 
                  that handle high traffic and complex business logic. My approach combines technical excellence with 
                  business acumen, ensuring that every solution I build drives measurable value and user satisfaction.
                </p>
                <p className="animate-fade-in delay-600">
                  I'm committed to continuous professional development and staying at the forefront of technology. 
                  This dedication is reflected in my portfolio of certifications from industry leaders including Google, 
                  Amazon, Microsoft, Meta, and specialized platforms like Cloudflare for CDN application development.
                </p>
              </CardContent>
            </Card>

            {/* Education & Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass-strong border-0 card-interactive animate-fade-in-left delay-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <div className="w-0.5 h-full bg-blue-200 dark:bg-blue-800/50"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">University of Nigeria, Nsukka • 2019-2023</p>
                        <p className="text-sm mt-1">Graduated with First Class Honors, Dean's List</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <div className="w-0.5 h-full bg-blue-200 dark:bg-blue-800/50"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold">CPN/NSQ Level 3 in Mobile Application Development</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Luzoma Microsystems Limited • 2024</p>
                        <p className="text-sm mt-1">Certificate ID: CPN/NSQ/24175884</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold">Various Online Certifications</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Coursera, Udemy, Pluralsight • 2022-2024</p>
                        <p className="text-sm mt-1">
                          Including Google Cloud, AWS, Azure, Meta, and specialized courses
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-strong border-0 card-interactive animate-fade-in-right delay-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    Location & Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">Based in Owerri, Nigeria</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Serving clients globally with timezone flexibility
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex-shrink-0 mt-0.5"></div>
                      <div>
                        <h3 className="font-semibold text-green-600 dark:text-green-400">Available for Opportunities</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Open to freelance, contract, and full-time positions
                        </p>
                      </div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h4 className="font-semibold mb-2">Areas of Expertise</h4>
                      <div className="space-y-3">
                        <div className="group">
                          <h3 className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Cloud-Native Development</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Building scalable cloud applications on AWS, GCP, and Azure</p>
                        </div>
                        <div className="group">
                          <h3 className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Enterprise Solutions</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400">Architecting production-grade systems for businesses</p>
                        </div>
                        <div className="group">
                          <h3 className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Technical Leadership</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Mentoring developers and driving best practices
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Skills */}
            <Card className="glass-strong border-0 card-interactive animate-fade-in-up delay-400">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, idx) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-sm hover:scale-110 hover:shadow-md transition-all cursor-default animate-fade-in hover:animate-wiggle group relative"
                      style={{animationDelay: `${idx * 20}ms`}}
                    >
                      <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {skill}
                      </span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card id="certifications" className="glass-strong border-0 card-interactive animate-fade-in-up delay-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Professional Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index} 
                      className="glass border border-slate-200 dark:border-slate-700 rounded-lg p-4 space-y-2 hover-lift hover:border-blue-400 dark:hover:border-blue-600 transition-all animate-scale-in"
                      style={{animationDelay: `${index * 80}ms`}}
                    >
                      <div className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                        <h3 className="font-semibold text-lg leading-tight">{cert.title}</h3>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">{cert.platform}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {cert.issuer || cert.instructor} • {cert.year}
                      </p>
                      {cert.certificateId && (
                        <p className="text-xs text-slate-500 dark:text-slate-500 font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                          ID: {cert.certificateId}
                        </p>
                      )}
                      {cert.level && (
                        <span className="inline-block text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded">
                          {cert.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 dark:from-blue-700 dark:via-blue-800 dark:to-purple-700 border-0 relative overflow-hidden animate-fade-in-up delay-600">
              <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
              <CardContent className="p-8 text-center relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">Want to Know More?</h3>
                <p className="text-blue-100 mb-6">
                  Download my complete resume for detailed information about my experience, projects, and achievements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary" className="hover-lift">
                    <Link href={resumePath} target="_blank" download="Isaac-Elisha-Resume.pdf">
                      <Download className="h-5 w-5 mr-2" />
                      Download Full Resume
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="text-white border-white/30 hover:bg-white/10 hover-lift">
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
