import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Globe, Smartphone, Server } from "lucide-react"

interface TechStackSectionProps {
  themeClasses: any
  isDarkMode: boolean
}

export function TechStackSection({ themeClasses, isDarkMode }: TechStackSectionProps) {
  const techStacks = [
    {
      category: "Frontend",
      icon: Globe,
      color: "text-blue-400",
      technologies: ["HTML", "CSS", "JavaScript", "React JS", "Next JS"],
    },
    {
      category: "Backend",
      icon: Server,
      color: "text-green-400",
      technologies: ["Python", "Flask", "Node JS", "Django Rest Framework", "Express JS"],
    },
    {
      category: "Mobile",
      icon: Smartphone,
      color: "text-purple-400",
      technologies: ["React Native"],
    },
    {
      category: "Database",
      icon: Database,
      color: "text-cyan-400",
      technologies: ["SQL", "NoSQL", "Database Design"],
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Technologies We Support
          </h2>
          <p className={`text-xl ${themeClasses.text} max-w-3xl mx-auto`}>
            Expert assistance across the full stack of modern web and mobile development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {techStacks.map((stack, index) => (
            <Card
              key={index}
              className={`${themeClasses.cardBg} ${themeClasses.border} backdrop-blur-sm ${themeClasses.cardHover} hover:border-slate-600 transition-all duration-300 transform hover:scale-105`}
            >
              <CardHeader className="text-center">
                <stack.icon className={`w-12 h-12 mx-auto mb-4 ${stack.color}`} />
                <CardTitle className={`text-xl ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  {stack.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {stack.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className={`${themeClasses.border} ${themeClasses.text} mr-2 mb-2`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className={`${themeClasses.cardBg} ${themeClasses.border} backdrop-blur-sm max-w-2xl mx-auto`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Code2 className="w-6 h-6 text-cyan-400" />
                <h3 className={`text-xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  Full Stack Expertise
                </h3>
              </div>
              <p className={themeClasses.text}>
                From frontend frameworks to backend APIs, mobile apps to database design - we've got you covered across
                the entire development spectrum.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
