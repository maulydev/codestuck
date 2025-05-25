import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Shield, Zap, Star, Users } from "lucide-react"

interface AboutSectionProps {
  themeClasses: any
  isDarkMode: boolean
}

export function AboutSection({ themeClasses, isDarkMode }: AboutSectionProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About Our Service
          </h2>
          <p className={`text-xl ${themeClasses.text} max-w-3xl mx-auto leading-relaxed`}>
            We're a specialized development support service for developers, students, and teams working on software
            projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <Card
            className={`${themeClasses.cardBg} ${themeClasses.border} backdrop-blur-sm ${themeClasses.cardHover} transition-all duration-300 relative overflow-hidden group`}
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

            <CardHeader className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30">
                  <BookOpen className="w-6 h-6 text-cyan-400" />
                </div>
                <CardTitle className="text-2xl text-cyan-400">What We Do</CardTitle>
              </div>
            </CardHeader>
            <CardContent className={`${themeClasses.text} space-y-4 relative z-10`}>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                  <p className="text-lg leading-relaxed">
                    We provide targeted technical assistance to help you complete your software development projects
                    successfully. Our approach is educational and supportive — we don't do your work for you.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                  <p className="text-lg leading-relaxed">
                    Instead, we help you overcome technical hurdles, understand complex concepts, and implement features
                    you're struggling with across various technologies and frameworks.
                  </p>
                </div>
              </div>

              {/* Feature highlights */}
              <div className="mt-6 pt-4 border-t border-cyan-500/20">
                <div className="flex flex-wrap gap-2">
                  {["Code Review", "Bug Analysis", "Feature Guidance", "Best Practices"].map((feature, index) => (
                    <Badge
                      key={index}
                      className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30 hover:bg-cyan-500/20 transition-colors"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className={`${themeClasses.cardBg} ${themeClasses.border} backdrop-blur-sm ${themeClasses.cardHover} transition-all duration-300 relative overflow-hidden group`}
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

            <CardHeader className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-2xl text-purple-400">Our Ethics</CardTitle>
              </div>
            </CardHeader>
            <CardContent className={`${themeClasses.text} space-y-4 relative z-10`}>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                  <p className="text-lg leading-relaxed">
                    We maintain strict ethical standards. We provide guidance, explanations, and technical support while
                    ensuring you understand and learn from every solution.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
                  <p className="text-lg leading-relaxed">
                    Your learning and project integrity are paramount — we help you succeed through understanding, not
                    shortcuts.
                  </p>
                </div>
              </div>

              {/* Ethics highlights */}
              <div className="mt-6 pt-4 border-t border-purple-500/20">
                <div className="flex flex-wrap gap-2">
                  {["Transparent Process", "Educational Focus", "Code Ownership", "Learning First"].map(
                    (principle, index) => (
                      <Badge
                        key={index}
                        className="bg-purple-500/10 text-purple-400 border-purple-500/30 hover:bg-purple-500/20 transition-colors"
                      >
                        {principle}
                      </Badge>
                    ),
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card
            className={`${themeClasses.cardBg} ${themeClasses.border} backdrop-blur-sm ${themeClasses.cardHover} transition-all duration-300 text-center group`}
          >
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-green-400" />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Fast Response
              </h3>
              <p className={`text-sm ${themeClasses.textSecondary}`}>
                Quick turnaround times to keep your project moving forward
              </p>
            </CardContent>
          </Card>

          <Card
            className={`${themeClasses.cardBg} ${themeClasses.border} backdrop-blur-sm ${themeClasses.cardHover} transition-all duration-300 text-center group`}
          >
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Expert Team
              </h3>
              <p className={`text-sm ${themeClasses.textSecondary}`}>
                Experienced developers across multiple technologies and frameworks
              </p>
            </CardContent>
          </Card>

          <Card
            className={`${themeClasses.cardBg} ${themeClasses.border} backdrop-blur-sm ${themeClasses.cardHover} transition-all duration-300 text-center group`}
          >
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Personalized Support
              </h3>
              <p className={`text-sm ${themeClasses.textSecondary}`}>
                Tailored assistance based on your specific project needs and goals
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
