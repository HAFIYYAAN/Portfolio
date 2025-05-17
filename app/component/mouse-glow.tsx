"use client"

import { useEffect, useState } from "react"

interface MousePosition {
  x: number
  y: number
}

export default function MouseGlow({
  color = "#3b82f6",
  size = 5,
  holeSize = 0, // Ukuran lingkaran bolong di tengah
  blur = 20,
  intensity = 0.8,
}: {
  color?: string
  size?: number
  holeSize?: number
  blur?: number
  intensity?: number
}) {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <>
      {/* Glow effect */}
      <div
        className="fixed pointer-events-none z-50 rounded-full mix-blend-screen"
        style={{
          left: `${mousePosition.x - size / 2}px`,
          top: `${mousePosition.y - size / 2}px`,
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: `0 0 ${blur}px ${blur / 1.5}px ${color}`,
          opacity: intensity,
          transition: "transform 0.05s ease-out",
          background: `radial-gradient(circle at center, 
                      transparent ${holeSize}px, 
                      ${color} ${holeSize + 5}px)`,
        }}
      />
    </>
  )
}
