import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Code2, CheckCircle, Lightbulb } from "lucide-react"

interface HowItWorksSectionProps {
  themeClasses: any
  isDarkMode: boolean
}

export function HowItWorksSection({ themeClasses, isDarkMode }: HowItWorksSectionProps) {
  const steps = [
    {
      step: "01",
      title: "Tell Us Your Challenge",
      description: "Describe what you're stuck on and share your GitHub repository for review",
      icon: MessageCircle,
    },
    {
      step: "02",
      title: "Project Review",
      description: "Our experts analyze your project and identify the best solution approach",
      icon: Code2,
    },
    {
      step: "03",
      title: "Implementation & Fix",
      description: "We implement the solution or fix the issue while documenting our approach",
      icon: CheckCircle,
    },
    {
      step: "04",
      title: "Knowledge Transfer",
      description: "We explain how the solution works so you understand and can maintain it",
      icon: Lightbulb,
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className={`text-xl ${themeClasses.text} max-w-3xl mx-auto`}>
            Simple, transparent process to get you the help you need
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className={`${themeClasses.cardBg} ${themeClasses.border} backdrop-blur-sm ${themeClasses.cardHover} transition-all duration-300 relative overflow-hidden group`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{step.step}</div>
                <step.icon className="w-8 h-8 mx-auto mb-4 text-purple-400" />
                <CardTitle className={`text-lg ${isDarkMode ? "text-white" : "text-gray-900"}`}>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`${themeClasses.text} text-center text-sm`}>{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
