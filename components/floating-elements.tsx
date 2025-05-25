"use client"

import { useEffect, useState } from "react"

interface FloatingElementsProps {
  isDarkMode: boolean
}

export function FloatingElements({ isDarkMode }: FloatingElementsProps) {
  const [elements, setElements] = useState<Array<{ id: number; delay: number; duration: number; size: number }>>([])

  useEffect(() => {
    const newElements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 20,
      size: 20 + Math.random() * 40,
    }))
    setElements(newElements)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Code Symbols */}
      {elements.slice(0, 8).map((element) => (
        <div
          key={`code-${element.id}`}
          className={`absolute opacity-10 ${isDarkMode ? "text-cyan-400" : "text-cyan-600"} font-mono text-2xl`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
            fontSize: `${element.size}px`,
          }}
        >
          {/* <div className="animate-float-vertical">
            {["</>", "{}", "[]", "()", "&&", "||", "=>", "!="][element.id % 8]}
          </div> */}
        </div>
      ))}

      {/* Floating Geometric Shapes */}
      {elements.slice(8, 15).map((element) => (
        <div
          key={`shape-${element.id}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
          }}
        >
          <div
            className={`animate-float-rotate ${
              isDarkMode ? "border-purple-500/20" : "border-purple-400/15"
            } border-2 rounded-lg`}
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
            }}
          />
        </div>
      ))}

      {/* Binary Rain Effect */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={`binary-${i}`}
          className="absolute top-0 opacity-15"
          style={{
            left: `${(i * 100) / 15}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          <div className="animate-binary-rain text-slate-500 font-mono text-3xl leading-tight">
            {Array.from({ length: 50 })
              .map(() => Math.round(Math.random()))
              .join("")
              .match(/.{1,1}/g)
              ?.map((bit, index) => (
                <div key={index} className="opacity-30">
                  {bit}
                </div>
              ))}
          </div>
        </div>
      ))}

      {/* Glowing Orbs */}
      {elements.slice(15).map((element) => (
        <div
          key={`orb-${element.id}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${element.size / 2}px`,
            height: `${element.size / 2}px`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
            background: isDarkMode
              ? `radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)`
              : `radial-gradient(circle, rgba(34, 211, 238, 0.05) 0%, transparent 70%)`,
          }}
        >
          <div className="w-full h-full animate-pulse-glow" />
        </div>
      ))}

      {/* Grid Pattern Overlay */}
      <div
        className={`absolute inset-0 opacity-5 ${isDarkMode ? "opacity-10" : "opacity-5"}`}
        style={{
          backgroundImage: `
            linear-gradient(${isDarkMode ? "rgba(34, 211, 238, 0.1)" : "rgba(34, 211, 238, 0.05)"} 1px, transparent 1px),
            linear-gradient(90deg, ${isDarkMode ? "rgba(34, 211, 238, 0.1)" : "rgba(34, 211, 238, 0.05)"} 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          animation: "grid-move 20s linear infinite",
        }}
      />

      {/* Scanning Lines */}
      <div className="absolute inset-0">
        <div
          className={`absolute w-full h-px ${
            isDarkMode
              ? "bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
              : "bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
          }`}
          style={{
            animation: "scan-vertical 8s ease-in-out infinite",
          }}
        />
        <div
          className={`absolute h-full w-px ${
            isDarkMode
              ? "bg-gradient-to-b from-transparent via-purple-400/20 to-transparent"
              : "bg-gradient-to-b from-transparent via-purple-400/10 to-transparent"
          }`}
          style={{
            animation: "scan-horizontal 10s ease-in-out infinite",
          }}
        />
      </div>
    </div>
  )
}
