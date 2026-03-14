import Tilt from "react-parallax-tilt"

type Props = {
  title: string
  description: string
  tech: string[]
  live?: string
  github?: string
}

export default function ProjectCard({ title, description, tech, live, github }: Props) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1.05}
      className="w-full"
    >
      <div className="bg-gray-900 border border-white/10 rounded-2xl p-6 shadow-xl hover:border-indigo-500 transition">

        <h3 className="text-2xl font-bold mb-3">{title}</h3>

        <p className="text-gray-400 mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-sm bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">

          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition">
                Live Demo
              </button>
            </a>
          )}

          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-800 transition">
                GitHub
              </button>
            </a>
          )}

        </div>

      </div>
    </Tilt>
  )
}