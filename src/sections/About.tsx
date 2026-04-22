import { motion } from "framer-motion"
import { Code2, Database, Server, Layers } from "lucide-react"

const skills = [
  {
    category: "Languages",
    icon: <Code2 size={18} />,
    items: ["Java", "JavaScript", "TypeScript", "HTML", "CSS"]
  },
  {
    category: "Backend",
    icon: <Server size={18} />,
    items: ["Spring Boot", "Spring MVC", "Spring JPA", "REST APIs", "Hibernate"]
  },
  {
    category: "Frontend",
    icon: <Layers size={18} />,
    items: ["React", "Tailwind CSS", "Three.js", "Framer Motion"]
  },
  {
    category: "Databases & Tools",
    icon: <Database size={18} />,
    items: ["MySQL", "MongoDB", "PostgreSQL", "Git", "Docker", "Postman"]
  }
]

export default function About() {
  return (
    <section id="about" className="py-32 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Bio + Education */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a fresher Java Backend Developer with hands-on experience building full-stack applications using <span className="text-indigo-400 font-semibold">Java, Spring Boot, and MySQL</span>. I enjoy designing clean REST APIs and turning ideas into working products.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              On the frontend, I work with React and TypeScript to build modern, interactive UIs. I'm actively seeking a <span className="text-white font-medium">Java Backend or Full Stack Developer</span> role where I can contribute and grow.
            </p>

            {/* Education Card */}
            <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-white/10 rounded-2xl p-6">
              <p className="text-xs text-indigo-400 uppercase tracking-widest mb-3">Education</p>
              <h3 className="text-white font-bold text-lg mb-1">B.Tech — Computer Science & Engineering</h3>
              <p className="text-gray-400 text-sm mb-3">2021 – 2025</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Java", "Data Structures", "DBMS", "Operating Systems", "Computer Networks"].map(sub => (
                  <span key={sub} className="text-xs bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-full">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-6"
          >
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-indigo-500/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-indigo-400 mb-3">
                  {group.icon}
                  <span className="text-sm font-semibold uppercase tracking-wider">{group.category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <span
                      key={item}
                      className="text-sm bg-indigo-600/20 text-indigo-200 border border-indigo-500/20 px-3 py-1 rounded-lg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
