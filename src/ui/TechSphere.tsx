import { Canvas } from "@react-three/fiber"
import { OrbitControls, Html } from "@react-three/drei"
import * as THREE from "three"

const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Java",
  "Spring Boot",
  "Spring MVC",
  "Spring Microservices",
  "Spring JPA",
  "Hibernate",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "DevOps",
  "Git",
  "Linux",
  "REST APIs",
  "Three.js",
  "TailwindCSS"
]

function SkillNodes() {

  const radius = 3

  return skills.map((skill, i) => {

    const phi = Math.acos(-1 + (2 * i) / skills.length)
    const theta = Math.sqrt(skills.length * Math.PI) * phi

    const x = radius * Math.cos(theta) * Math.sin(phi)
    const y = radius * Math.sin(theta) * Math.sin(phi)
    const z = radius * Math.cos(phi)

    return (
      <Html key={i} position={[x, y, z]} center>
        <div className="px-3 py-1 bg-indigo-600 text-white text-sm rounded-lg shadow-lg whitespace-nowrap">
          {skill}
        </div>
      </Html>
    )
  })
}

/* Mars Planet */
function MarsSphere() {

  const texture = new THREE.TextureLoader().load(
    "https://threejsfundamentals.org/threejs/resources/images/mars_1k_color.jpg"
  )

  return (
    <mesh>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}

/* Simple Sphere Layer */
function SimpleSphere() {
  return (
    <mesh>
      <sphereGeometry args={[2.2, 32, 32]} />
      <meshBasicMaterial
        color="#6366f1"
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  )
}

export default function TechSphere() {
  return (
    <Canvas
      style={{ height: "500px" }}
      camera={{ position: [0, 0, 7] }}
    >

      {/* Lights */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />

      {/* Planet */}
      <MarsSphere />

      {/* Simple Sphere overlay */}
      <SimpleSphere />

      {/* Skills */}
      <SkillNodes />

      {/* Controls */}
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1.2}
      />

    </Canvas>
  )
}