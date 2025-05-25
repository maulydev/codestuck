"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  type: "dot" | "triangle" | "square"
  pulsePhase: number
}

interface ParticleBackgroundProps {
  isDarkMode: boolean
}

export function ParticleBackground({ isDarkMode }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    // Initialize particles
    const particleCount = Math.min(150, Math.floor((dimensions.width * dimensions.height) / 15000))
    particlesRef.current = []

    const colors = isDarkMode
      ? ["rgba(34, 211, 238, 0.6)", "rgba(168, 85, 247, 0.6)", "rgba(34, 197, 94, 0.6)", "rgba(251, 191, 36, 0.6)"]
      : ["rgba(34, 211, 238, 0.4)", "rgba(168, 85, 247, 0.4)", "rgba(34, 197, 94, 0.4)", "rgba(251, 191, 36, 0.4)"]

    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: ["dot", "triangle", "square"][Math.floor(Math.random() * 3)] as "dot" | "triangle" | "square",
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      const particles = particlesRef.current
      const mouse = mouseRef.current

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > dimensions.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > dimensions.height) particle.vy *= -1

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(dimensions.width, particle.x))
        particle.y = Math.max(0, Math.min(dimensions.height, particle.y))

        // Mouse interaction
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const force = (150 - distance) / 150
          particle.vx -= (dx / distance) * force * 0.01
          particle.vy -= (dy / distance) * force * 0.01
        }

        // Apply friction
        particle.vx *= 0.99
        particle.vy *= 0.99

        // Update pulse phase
        particle.pulsePhase += 0.02

        // Calculate pulsing size and opacity
        const pulseMultiplier = 1 + Math.sin(particle.pulsePhase) * 0.3
        const currentSize = particle.size * pulseMultiplier
        const currentOpacity = particle.opacity * (0.7 + Math.sin(particle.pulsePhase) * 0.3)

        // Draw particle
        ctx.save()
        ctx.globalAlpha = currentOpacity
        ctx.fillStyle = particle.color
        ctx.strokeStyle = particle.color
        ctx.lineWidth = 1

        switch (particle.type) {
          case "dot":
            ctx.beginPath()
            ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2)
            ctx.fill()
            break

          case "triangle":
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y - currentSize)
            ctx.lineTo(particle.x - currentSize, particle.y + currentSize)
            ctx.lineTo(particle.x + currentSize, particle.y + currentSize)
            ctx.closePath()
            ctx.fill()
            break

          case "square":
            ctx.fillRect(particle.x - currentSize / 2, particle.y - currentSize / 2, currentSize, currentSize)
            break
        }
        ctx.restore()

        // Draw connections
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.save()
            const opacity = ((120 - distance) / 120) * 0.2
            ctx.globalAlpha = opacity * (isDarkMode ? 0.6 : 0.4)
            ctx.strokeStyle = isDarkMode ? "rgba(34, 211, 238, 0.3)" : "rgba(34, 211, 238, 0.2)"
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })

      // Draw floating geometric shapes
      const time = Date.now() * 0.001
      for (let i = 0; i < 5; i++) {
        const x = dimensions.width * 0.1 + Math.sin(time * 0.3 + i) * dimensions.width * 0.8
        const y = dimensions.height * 0.1 + Math.cos(time * 0.2 + i) * dimensions.height * 0.8
        const size = 20 + Math.sin(time + i) * 10

        ctx.save()
        ctx.globalAlpha = isDarkMode ? 0.1 : 0.05
        ctx.strokeStyle = isDarkMode ? "rgba(168, 85, 247, 0.3)" : "rgba(168, 85, 247, 0.2)"
        ctx.lineWidth = 2
        ctx.translate(x, y)
        ctx.rotate(time * 0.5 + i)

        // Draw hexagon
        ctx.beginPath()
        for (let j = 0; j < 6; j++) {
          const angle = (j * Math.PI) / 3
          const px = Math.cos(angle) * size
          const py = Math.sin(angle) * size
          if (j === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.closePath()
        ctx.stroke()
        ctx.restore()
      }

      // Draw neural network effect
      if (mouse.x > 0 && mouse.y > 0) {
        const nearbyParticles = particles.filter((particle) => {
          const dx = mouse.x - particle.x
          const dy = mouse.y - particle.y
          return Math.sqrt(dx * dx + dy * dy) < 200
        })

        nearbyParticles.forEach((particle) => {
          ctx.save()
          ctx.globalAlpha = 0.1
          ctx.strokeStyle = isDarkMode ? "rgba(34, 197, 94, 0.4)" : "rgba(34, 197, 94, 0.3)"
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(mouse.x, mouse.y)
          ctx.lineTo(particle.x, particle.y)
          ctx.stroke()
          ctx.restore()
        })

        // Draw mouse glow effect
        ctx.save()
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 100)
        gradient.addColorStop(0, isDarkMode ? "rgba(34, 211, 238, 0.1)" : "rgba(34, 211, 238, 0.05)")
        gradient.addColorStop(1, "rgba(34, 211, 238, 0)")
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 100, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      // Draw flowing energy streams
      // for (let i = 0; i < 3; i++) {
      //   ctx.save()
      //   ctx.globalAlpha = isDarkMode ? 0.15 : 0.08
      //   ctx.strokeStyle = isDarkMode ? "rgba(251, 191, 36, 0.4)" : "rgba(251, 191, 36, 0.3)"
      //   ctx.lineWidth = 2

      //   const streamY = (dimensions.height / 4) * (i + 1)
      //   const amplitude = 50
      //   const frequency = 0.01
      //   const speed = time * 2

      //   ctx.beginPath()
      //   for (let x = 0; x <= dimensions.width; x += 5) {
      //     const y = streamY + Math.sin(x * frequency + speed + i) * amplitude
      //     if (x === 0) ctx.moveTo(x, y)
      //     else ctx.lineTo(x, y)
      //   }
      //   ctx.stroke()
      //   ctx.restore()
      // }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions, isDarkMode])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        width: dimensions.width,
        height: dimensions.height,
      }}
    />
  )
}
