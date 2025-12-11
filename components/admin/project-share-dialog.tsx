"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, X, Share2 } from "lucide-react"
import html2canvas from "html2canvas"
import Link from "next/link"

interface ProjectShareDialogProps {
  project: {
    id: string
    title: string
    description: string
    image: string
    technologies: string[]
    liveUrl: string
    githubUrl: string
    date: string
  }
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ProjectShareDialog({ project, open, onOpenChange }: ProjectShareDialogProps) {
  const bannerRef = useRef<HTMLDivElement>(null)
  const [downloading, setDownloading] = useState(false)
  const [downloaded, setDownloaded] = useState(false)

  const shareMsg = `Hey! I just uploaded a new project "${project.title}" 🎉\nCheck it out!`
  const fullMsg = `${shareMsg}\n${project.liveUrl || project.githubUrl || ""}`

  const handleDownload = async () => {
    setDownloading(true)
    setDownloaded(false)
    if (bannerRef.current) {
      const canvas = await html2canvas(bannerRef.current, { backgroundColor: "#f1f5f9" })
      const url = canvas.toDataURL("image/png")
      const link = document.createElement("a")
      link.href = url
      link.download = `${project.title}-banner.png`
      link.click()
      setDownloaded(true)
    }
    setDownloading(false)
  }

  // Social share URLs (image upload not possible for all, but text+URL is)
  const encodedMsg = encodeURIComponent(fullMsg)
  const encodedURL = encodeURIComponent(project.liveUrl || project.githubUrl || "https://isaac-elisha.vercel.app/projects")
  const twitterShare = `https://twitter.com/intent/tweet?text=${encodedMsg}`
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}&quote=${encodedMsg}`
  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedURL}`

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Share2 className="h-5 w-5" />
            Share Project
          </DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost" size="icon" className="absolute right-4 top-4">
              <X className="h-4 w-4" />
            </Button>
          </DialogClose>
        </DialogHeader>
        {/* Banner preview */}
        <div
          ref={bannerRef}
          className="rounded-xl bg-slate-100 p-4 flex flex-col items-center text-center border relative"
          style={{
            maxWidth: 480,
            margin: "0 auto",
            fontFamily: "Inter, sans-serif",
            background:
              "linear-gradient(135deg, #f1f5f9 0%, #e0e7ef 100%)",
          }}
        >
          <div className="relative w-full h-40 mb-3 rounded-lg overflow-hidden bg-slate-200">
            <Image
              src={project.image || "/placeholder.svg?height=300&width=400"}
              alt={project.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <h3 className="font-bold text-xl mb-1 text-blue-900">{project.title}</h3>
          <p className="text-slate-700 text-sm mb-2 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap justify-center gap-1 mb-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
          <div className="text-xs text-slate-500 mb-2">Year: {project.date}</div>
          <div className="font-semibold text-blue-800 mb-2">
            Hey! I just uploaded a new project. 🚀<br />
            <span className="text-blue-700">Check it out!</span>
          </div>
          {(project.liveUrl || project.githubUrl) && (
            <a
              href={project.liveUrl || project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-700 underline"
            >
              {project.liveUrl || project.githubUrl}
            </a>
          )}
        </div>

        {/* Download and Social Share actions */}
        <div className="flex flex-col gap-2 mt-4">
          <Button onClick={handleDownload} disabled={downloading}>
            <Download className="h-4 w-4 mr-2" />
            {downloading ? "Preparing Banner..." : downloaded ? "Banner Downloaded!" : "Download Banner"}
          </Button>
          <div className="flex gap-2 justify-center">
            <Button asChild variant="outline" size="sm">
              <Link href={twitterShare} target="_blank" rel="noopener noreferrer">
                <span role="img" aria-label="Twitter">🐦</span> Twitter/X
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href={facebookShare} target="_blank" rel="noopener noreferrer">
                <span role="img" aria-label="Facebook">📘</span> Facebook
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href={linkedinShare} target="_blank" rel="noopener noreferrer">
                <span role="img" aria-label="LinkedIn">💼</span> LinkedIn
              </Link>
            </Button>
          </div>
        </div>
        <div className="text-xs text-slate-500 mt-2 text-center">
          You can download this banner and share it anywhere!
        </div>
      </DialogContent>
    </Dialog>
  )
}
