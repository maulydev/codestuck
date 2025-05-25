"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code2, ArrowRight, Shield, Star, Zap } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  themeClasses: any
  isDarkMode: boolean
}

export function HeroSection({ themeClasses }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="mb-6">
            <Image
              src="/logo.png"
              alt="Hero Image"
              width={100}
              height={100}
              className="mx-auto rounded-full shadow-lg"  
              />
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              CodeStuck
            </h1>
            <p className={`text-sm ${themeClasses.textSecondary} tracking-wider uppercase`}>
              Development Support Services
            </p>
          </div>
          <Badge className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-0 mb-4 animate-bounce">
            <Zap className="w-4 h-4 mr-2" />
            Professional Dev Support
          </Badge>
        </div>

        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
          Stuck on Your Development Project?
        </h2>

        <p className={`text-xl md:text-2xl ${themeClasses.text} mb-4 max-w-4xl mx-auto`}>We're Here to Help.</p>

        <p className={`text-lg ${themeClasses.textSecondary} mb-8 max-w-3xl mx-auto leading-relaxed`}>
          Professional development support for developers and students. We help you fix bugs, implement features, and
          understand your code —<span className="text-cyan-400 font-semibold"> fast, friendly, and ethical.</span>
        </p>

        <Button
          size="lg"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 px-8 py-6 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          <Code2 className="w-5 h-5 mr-2" />
          Get Help Now
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        {/* Trust Indicators */}
        <div className={`mt-12 flex flex-wrap justify-center gap-6 ${themeClasses.textSecondary}`}>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" />
            <span>100% Ethical</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span>Expert Developers</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span>Fast Response</span>
          </div>
        </div>
      </div>
    </section>
  )
}
