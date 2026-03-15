import { motion } from "framer-motion"

export default function Skills() {

  const skills = [
    { name: "React / Frontend", level: 90 },
    { name: "UI Engineering", level: 85 },
    { name: "Java", level: 80 },
    { name: "Backend Development", level: 75 },
    { name: "Data Structures & Algorithms", level: 70 }
  ]

  return (
    <section id="skills" className="py-32 bg-black text-white">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Skills
        </h2>

        <div className="space-y-8">

          {skills.map((skill, index) => (
            <div key={index}>

              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5 }}
                  className="h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                />

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}