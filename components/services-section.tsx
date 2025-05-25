import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bug, Code2, Lightbulb, CheckCircle, MessageCircle } from "lucide-react"

interface ServicesSectionProps {
  themeClasses: any
  isDarkMode: boolean
}

export function ServicesSection({ themeClasses, isDarkMode }: ServicesSectionProps) {
  const services = [
    {
      icon: Bug,
      title: "Bug Fixing",
      description: "Identify and resolve code errors, runtime issues, and logical bugs in your project",
      color: "text-red-400",
    },
    {
      icon: Code2,
      title: "Feature Implementation",
      description: "Help implement complex features you're struggling with, with full explanations",
      color: "text-cyan-400",
    },
    {
      icon: Lightbulb,
      title: "Code Explanation",
      description: "Detailed explanations of complex code sections and architectural decisions",
      color: "text-yellow-400",
    },
    {
      icon: CheckCircle,
      title: "Project Completion",
      description: "Guidance to help you run, test, and finalize your project successfully",
      color: "text-green-400",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            What We Help With
          </h2>
          <p className={`text-xl ${themeClasses.text} max-w-3xl mx-auto`}>
            Comprehensive technical support for your development challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${themeClasses.cardBg} ${themeClasses.border} backdrop-blur-sm ${themeClasses.cardHover} hover:border-slate-600 transition-all duration-300 transform hover:scale-105`}
            >
              <CardHeader className="text-center">
                <service.icon className={`w-12 h-12 mx-auto mb-4 ${service.color}`} />
                <CardTitle className={`text-xl ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`${themeClasses.text} text-center`}>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card
            className={`${themeClasses.cardBg} ${themeClasses.border} backdrop-blur-sm relative overflow-hidden group`}
          >
            {/* Gradient background for theme support */}
            <div
              className={`absolute inset-0 ${
                isDarkMode
                  ? "bg-gradient-to-r from-cyan-900/50 to-purple-900/50"
                  : "bg-gradient-to-r from-cyan-100/50 to-purple-100/50"
              } transition-colors duration-300`}
            ></div>
            <div
              className={`absolute inset-0 border ${
                isDarkMode ? "border-cyan-500/30" : "border-cyan-300/50"
              } rounded-lg transition-colors duration-300`}
            ></div>
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MessageCircle className="w-6 h-6 text-cyan-400" />
                <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Optional Live Support
                </h3>
              </div>
              <p className={`${isDarkMode ? "text-slate-300" : "text-gray-600"}`}>
                Get real-time assistance via video calls or chat sessions for complex debugging and implementation
                guidance
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
