import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, Shield, BookOpen, CheckCircle } from "lucide-react"

interface DisclaimersSectionProps {
  themeClasses: any
}

export function DisclaimersSection({ themeClasses }: DisclaimersSectionProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
            Important Disclaimers
          </h2>
        </div>

        <div className="space-y-6">
          <Alert className="bg-yellow-900/20 border-yellow-500/30">
            <AlertTriangle className="h-4 w-4" color="#facc15" />
            <AlertDescription className={themeClasses.text}>
              <strong className="text-yellow-400">Professional Integrity:</strong> Our service is designed to help you
              learn and understand your project, not to complete it for you. We provide guidance, explanations, and
              technical support while ensuring you maintain full ownership and understanding of your work.
            </AlertDescription>
          </Alert>

          <Alert className="bg-blue-900/20 border-blue-500/30">
            <Shield className="h-4 w-4" color="#60a5fa" />
            <AlertDescription className={themeClasses.text}>
              <strong className="text-blue-400">Educational Support:</strong> All assistance provided is for educational
              and professional development purposes. We encourage transparency with your team or institution regarding
              external technical support when applicable.
            </AlertDescription>
          </Alert>

          <Alert className="bg-purple-900/20 border-purple-500/30">
            <BookOpen className="h-4 w-4" color="#c084fc" />
            <AlertDescription className={themeClasses.text}>
              <strong className="text-purple-400">Learning-Focused Approach:</strong> Our methodology emphasizes
              teaching and explanation. Every solution comes with detailed documentation and explanations to ensure you
              understand the implementation and can maintain or extend it independently.
            </AlertDescription>
          </Alert>

          <Alert className="bg-green-900/20 border-green-500/30">
            <CheckCircle className="h-4 w-4" color="#4ade80" />
            <AlertDescription className={themeClasses.text}>
              <strong className="text-green-400">Quality Assurance:</strong> While we strive for excellence, we
              recommend thorough testing of all implementations. Our support includes guidance on testing methodologies
              and best practices to ensure your project meets professional standards.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  )
}
