"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"

// Import all section components
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ServicesSection } from "@/components/services-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { DisclaimersSection } from "@/components/disclaimers-section"
import { ContactSection } from "@/components/contact-section"
import { FooterSection } from "@/components/footer-section"

import { ParticleBackground } from "@/components/particle-background"
import { FloatingElements } from "@/components/floating-elements"

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const themeClasses = {
    background: isDarkMode ? "bg-slate-950" : "bg-gray-50",
    cardBg: isDarkMode ? "bg-slate-900/80" : "bg-white/90",
    cardHover: isDarkMode ? "hover:bg-slate-800/90" : "hover:bg-gray-50/90",
    border: isDarkMode ? "border-slate-700" : "border-gray-200",
    text: isDarkMode ? "text-slate-300" : "text-gray-700",
    textSecondary: isDarkMode ? "text-slate-400" : "text-gray-600",
    textMuted: isDarkMode ? "text-slate-500" : "text-gray-500",
    inputBg: isDarkMode ? "bg-slate-800/80" : "bg-white",
    inputBorder: isDarkMode ? "border-slate-600" : "border-gray-300",
    footerBorder: isDarkMode ? "border-slate-800" : "border-gray-200",
  }

  return (
    <div className={`min-h-screen ${themeClasses.background} transition-colors duration-300`}>
      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50 hidden">
        <Button
          onClick={toggleTheme}
          size="sm"
          className={`${themeClasses.cardBg} ${themeClasses.border} backdrop-blur-sm hover:scale-105 transition-all duration-300`}
          variant="outline"
        >
          {isDarkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
        </Button>
      </div>

      {/* Advanced Particle Background */}
      <ParticleBackground isDarkMode={isDarkMode} />
      <FloatingElements isDarkMode={isDarkMode} />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 ${isDarkMode ? "bg-cyan-500/5" : "bg-cyan-500/10"} rounded-full blur-3xl animate-pulse`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${isDarkMode ? "bg-purple-500/5" : "bg-purple-500/10"} rounded-full blur-3xl animate-pulse delay-1000`}
        ></div>
        <div
          className={`absolute top-3/4 left-1/2 w-96 h-96 ${isDarkMode ? "bg-green-500/5" : "bg-green-500/10"} rounded-full blur-3xl animate-pulse delay-2000`}
        ></div>
      </div>

      <div className="relative z-10">
        <HeroSection themeClasses={themeClasses} isDarkMode={isDarkMode} />
        <AboutSection themeClasses={themeClasses} isDarkMode={isDarkMode} />
        <TechStackSection themeClasses={themeClasses} isDarkMode={isDarkMode} />
        <ServicesSection themeClasses={themeClasses} isDarkMode={isDarkMode} />
        <HowItWorksSection themeClasses={themeClasses} isDarkMode={isDarkMode} />
        <DisclaimersSection themeClasses={themeClasses} />
        <ContactSection themeClasses={themeClasses} isDarkMode={isDarkMode} />
        <FooterSection themeClasses={themeClasses} />
      </div>
    </div>
  )
}
