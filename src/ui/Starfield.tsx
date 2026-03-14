import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";

export default function Starfield() {

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
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
  );
}