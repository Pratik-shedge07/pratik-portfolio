import Particles from "@tsparticles/react"
import { initParticlesEngine } from "@tsparticles/react"
import { loadFull } from "tsparticles"
import { useEffect, useState } from "react"

export default function Starfield() {

  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  if (!init) return null

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