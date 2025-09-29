"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";

interface TheTeamSectionProps {
  themeClasses: any;
  isDarkMode: boolean;
}

export default function TheTeamSection({
  themeClasses,
  isDarkMode,
}: TheTeamSectionProps) {
  const team = [
    {
      name: "Ernest Kumashie",
      role: "Fullstack Developer",
      description:
        "Fullstack developer skilled in Next.js, React, React Native, and Django REST Framework. Strong focus on UI/UX and frontend design while also delivering robust backend solutions.",
      image: "https://avatar.iran.liara.run/public/21",
      github: "https://github.com/maulydev",
      linkedin: "https://linkedin.com/in/maulydotdev",
    },
    {
      name: "Desmond Kudjuh",
      role: "Fullstack Developer",
      description:
        "Fullstack developer with expertise in Next.js, React, and Express. Strong focus on backend systems and scalable architectures, while also skilled at building polished, user-friendly frontends.",
      image: "https://avatar.iran.liara.run/public/5",
      github: "https://github.com/desi-10",
      linkedin: "https://linkedin.com/in/desmond-kudjuh-375221278/",
    },
    {
      name: "Kenneth Lumor",
      role: "Fullstack Developer",
      description:
        "Fullstack developer building complete web applications with Flask and FastAPI. Skilled at designing end-to-end solutions, combining frontend and backend seamlessly to deliver efficient and modern applications.",
      image: "https://avatar.iran.liara.run/public/12",
      github: "https://github.com/Kennarttechl",
      linkedin: "https://linkedin.com/in/kennart-foundation-449907282/",
    },
    {
      name: "Bernard Tay",
      role: "Fullstack Developer",
      description:
        "Fullstack developer specializing in React, Next.js, React Native, FastAPI, and Django REST Framework. Experienced in building scalable applications with seamless frontend and backend integration.",
      image: "https://avatar.iran.liara.run/public/16",
      github: "https://github.com/Bheny",
      linkedin: "https://linkedin.com/in/bernard-kojo-tay/",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Meet The Team
          </h2>
          <p className={`text-xl ${themeClasses.text} max-w-3xl mx-auto`}>
            The minds behind our projects — passionate, skilled, and dedicated.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className={`${themeClasses.cardBg} ${themeClasses.border} backdrop-blur-sm ${themeClasses.cardHover} transition-all duration-300 relative overflow-hidden group`}
            >
              {/* Accent Hover Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

              <CardHeader className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-400 shadow-lg"
                />
                <CardTitle
                  className={`text-xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {member.name}
                </CardTitle>
                <p className="text-cyan-400 text-sm font-medium">
                  {member.role}
                </p>
              </CardHeader>

              <CardContent className="text-center">
                <p className={`${themeClasses.text} text-sm mb-4`}>
                  {member.description}
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition-colors" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 text-gray-400 hover:text-purple-400 transition-colors" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
