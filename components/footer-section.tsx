import { Shield, BookOpen, Users } from "lucide-react"

interface FooterSectionProps {
  themeClasses: any
}

export function FooterSection({ themeClasses }: FooterSectionProps) {
  return (
    <footer className={`py-12 px-4 border-t ${themeClasses.footerBorder}`}>
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
            CodeStuck
          </h3>
          <p className={themeClasses.textSecondary}>Empowering developers through ethical technical guidance</p>
        </div>

        <div className={`flex flex-wrap justify-center gap-6 text-sm ${themeClasses.textSecondary} mb-6`}>
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-400" />
            Ethical Support
          </span>
          <span className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-blue-400" />
            Educational Focus
          </span>
          <span className="flex items-center gap-2">
            <Users className="w-4 h-4 text-purple-400" />
            Developer-Centered
          </span>
        </div>

        <p className={`${themeClasses.textMuted} text-sm`}>
          © {new Date().getFullYear()} CodeStuck. All rights reserved.
          <br />
          Committed to professional integrity and educational excellence.
        </p>
      </div>
    </footer>
  )
}
