import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { Github, Linkedin, Mail } from "lucide-react"
import AuroraBackground from "../ui/AuroraBackground"
import FloatingIcons from "../ui/FloatingIcons"

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden">

      <AuroraBackground />
<FloatingIcons />

      <div className="text-center max-w-3xl px-6">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold mb-6"
        >
          Hi, I'm Pratik
        </motion.h1>

        <p className="text-xl text-gray-300 mb-8">
          <Typewriter
            words={[
              "Frontend Developer",
              "React Specialist",
              "UI Engineer",
              "Building Modern Web Apps"
            ]}
            loop
            cursor
          />
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-4 justify-center mb-8"
        >

          <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:scale-105 transition">
            View Projects
          </button>

          <button className="px-6 py-3 border border-gray-400 backdrop-blur-md rounded-lg hover:bg-gray-800 transition">
            Contact Me
          </button>

        </motion.div>

        <div className="flex justify-center gap-6 text-gray-300">

          <Github className="hover:text-white cursor-pointer" />
          <Linkedin className="hover:text-white cursor-pointer" />
          <Mail className="hover:text-white cursor-pointer" />

        </div>

      </div>

    </section>
  )
}