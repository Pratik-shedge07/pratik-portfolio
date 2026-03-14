import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", move)

    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 w-6 h-6 bg-indigo-500 rounded-full pointer-events-none mix-blend-difference z-[999]"
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`
      }}
    />
  )
}