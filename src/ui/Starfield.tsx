import Particles from "@tsparticles/react"
import { useEffect, useState } from "react"

export default function Starfield() {

  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  if (!ready) return null

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 100 },
          color: { value: "#ffffff" },
          size: { value: 2 },
          move: { enable: true, speed: 0.3 },
          opacity: { value: 0.6 }
        }
      }}
      className="absolute inset-0 -z-10"
    />
  )
}