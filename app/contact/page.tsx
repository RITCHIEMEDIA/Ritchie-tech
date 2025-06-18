"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle, Send, MessageSquare, Phone, Download, FileText } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  // WhatsApp number and resume path
  const whatsappNumber = "2349079928298"
  const resumePath = "/resume/isaac-Elisha-Resume.pdf"

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  function validateForm() {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!validateForm()) {
      setSubmitStatus({
        type: "error",
        message: "Please fix the errors in the form",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Format the message for WhatsApp
      const whatsappMessage = encodeURIComponent(
        `*New Contact Form Submission*\n\n` +
          `*Name:* ${formData.name}\n` +
          `*Email:* ${formData.email}\n` +
          `*Subject:* ${formData.subject}\n\n` +
          `*Message:*\n${formData.message}`,
      )

      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank")

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Show success message
      setSubmitStatus({
        type: "success",
        message: "Your message has been sent to WhatsApp! You can now send it directly.",
      })

      if (formRef.current) {
        formRef.current.reset()
      }
    } catch (error) {
      console.error("Error sending message:", error)
      setSubmitStatus({
        type: "error",
        message: "There was an error sending your message. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">Get In Touch</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send Me a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && (
                          <p className="text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Your Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Project Inquiry"
                        value={formData.subject}
                        onChange={handleChange}
                        className={errors.subject ? "border-red-500" : ""}
                      />
                      {errors.subject && (
                        <p className="text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {submitStatus && (
                      <div
                        className={`p-4 rounded-lg border flex items-center gap-2 ${
                          submitStatus.type === "success"
                            ? "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300"
                            : "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300"
                        }`}
                      >
                        {submitStatus.type === "success" ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <AlertCircle className="h-4 w-4" />
                        )}
                        {submitStatus.message}
                      </div>
                    )}

                    <Button type="submit" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-blue-600" />
                      WhatsApp
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">+234 907 992 8298</p>
                    <Button variant="outline" size="sm" asChild className="mt-2">
                      <Link href={`https://wa.me/${whatsappNumber}`} target="_blank">
                        Chat on WhatsApp
                      </Link>
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Phone className="h-4 w-4 text-blue-600" />
                      Call Me
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">+234 907 992 8298</p>
                    <Button variant="outline" size="sm" asChild className="mt-2">
                      <Link href={`tel:+${whatsappNumber}`}>Call Now</Link>
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold flex items-center gap-2">
                      <FileText className="h-4 w-4 text-blue-600" />
                      Resume
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">Download my complete CV</p>
                    <Button variant="outline" size="sm" asChild className="mt-2">
                      <Link href={resumePath} target="_blank" download="Isaac-Elisha-Resume.pdf">
                        <Download className="h-4 w-4 mr-1" />
                        Download CV
                      </Link>
                    </Button>
                  </div>

                  <div className="pt-4">
                    <Button asChild className="w-full">
                      <Link href={`https://wa.me/${whatsappNumber}`} target="_blank">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Quick WhatsApp Chat
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <h3 className="font-semibold text-lg">Need Urgent Help?</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      I'm available for quick consultations and emergency support.
                    </p>
                    <Button variant="secondary" asChild className="w-full">
                      <Link
                        href={`https://wa.me/${whatsappNumber}?text=I%20need%20urgent%20assistance%20with%20my%20project!`}
                        target="_blank"
                      >
                        Emergency Support
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
