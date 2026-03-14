import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, Html } from "@react-three/drei"

type TechItem = {
  name: string
  position: [number, number, number]
}

function TechLabels() {

  const tech: TechItem[] = [
    { name: "React", position: [3, 0, 0] },
    { name: "Java", position: [-3, 0, 0] },
    { name: "MongoDB", position: [0, 3, 0] },
    { name: "MySQL", position: [0, -3, 0] },
    { name: "Spring", position: [0, 0, 3] }
  ]

  return tech.map((item, i) => (
    <Html key={i} position={item.position} center>
      <div className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-sm shadow-lg">
        {item.name}
      </div>
    </Html>
  ))
}

function TechSphereMesh() {
  return (
    <Sphere args={[2, 64, 64]}>
      <meshStandardMaterial color="#6366f1" wireframe />
    </Sphere>
  )
}

export default function TechSphere() {
  return (
    <Canvas style={{ height: "450px" }}>

      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} />

      <TechSphereMesh />
      <TechLabels />

      <OrbitControls enableZoom={false} autoRotate />

    </Canvas>
  )
}