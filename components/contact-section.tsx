"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Users, MessageCircle, ArrowRight, Github } from "lucide-react"

interface ContactSectionProps {
  themeClasses: any
  isDarkMode: boolean
}

export function ContactSection({ themeClasses, isDarkMode }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    institution: "",
    projectTitle: "",
    helpNeeded: "",
    githubUrl: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Get Started Today
          </h2>
          <p className={`text-xl ${themeClasses.text} max-w-3xl mx-auto`}>
            Ready to overcome your development challenges? Fill out the form below and we'll get back to you quickly.
          </p>
        </div>

        <Card className={`${themeClasses.cardBg} ${themeClasses.border} backdrop-blur-sm`}>
          <CardHeader>
            <CardTitle
              className={`text-2xl text-center ${isDarkMode ? "text-white" : "text-gray-900"} flex items-center justify-center gap-2`}
            >
              <Users className="w-6 h-6 text-cyan-400" />
              Request Support
            </CardTitle>
            <CardDescription className={`text-center ${themeClasses.textSecondary}`}>
              Tell us about your project and what you need help with
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className={themeClasses.text}>
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`${themeClasses.inputBg} ${themeClasses.inputBorder} ${isDarkMode ? "text-white" : "text-gray-900"} focus:border-cyan-400`}
                    required
                    placeholder="Enter your fullname"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact" className={themeClasses.text}>
                    WhatsApp / Telegram / Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className={`${themeClasses.inputBg} ${themeClasses.inputBorder} ${isDarkMode ? "text-white" : "text-gray-900"} focus:border-cyan-400`}
                    placeholder="Your preferred contact method"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="institution" className={themeClasses.text}>
                    Company / Institution (Optional)
                  </Label>
                  <Input
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                    className={`${themeClasses.inputBg} ${themeClasses.inputBorder} ${isDarkMode ? "text-white" : "text-gray-900"} focus:border-cyan-400`}
                    placeholder="Optional"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectTitle" className={themeClasses.text}>
                    Project Title <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="projectTitle"
                    name="projectTitle"
                    value={formData.projectTitle}
                    onChange={handleInputChange}
                    className={`${themeClasses.inputBg} ${themeClasses.inputBorder} ${isDarkMode ? "text-white" : "text-gray-900"} focus:border-cyan-400`}
                    required
                    placeholder="What' are you working on?"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="helpNeeded" className={themeClasses.text}>
                  What do you need help with? <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="helpNeeded"
                  name="helpNeeded"
                  value={formData.helpNeeded}
                  onChange={handleInputChange}
                  className={`${themeClasses.inputBg} ${themeClasses.inputBorder} ${isDarkMode ? "text-white" : "text-gray-900"} focus:border-cyan-400 min-h-[120px]`}
                  placeholder="Describe your challenge, what you've tried, and what specific help you need..."
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="githubUrl" className={`${themeClasses.text} flex items-center gap-2`}>
                  <Github className="w-4 h-4" />
                  GitHub Repository URL (Optional)
                </Label>
                <Input
                  id="githubUrl"
                  name="githubUrl"
                  type="url"
                  value={formData.githubUrl}
                  onChange={handleInputChange}
                  className={`${themeClasses.inputBg} ${themeClasses.inputBorder} ${isDarkMode ? "text-white" : "text-gray-900"} focus:border-cyan-400`}
                  placeholder="https://github.com/username/repository"
                />
                <p className={`text-sm ${themeClasses.textSecondary}`}>
                  Share your GitHub repository for faster project analysis and better assistance
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 py-6 text-lg font-semibold transform hover:scale-[1.01] transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Send Request
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
