import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { Github, Linkedin, Mail } from "lucide-react"
import AuroraBackground from "../ui/AuroraBackground"
import FloatingIcons from "../ui/FloatingIcons"
import MagneticButton from "../ui/MagneticButton"

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
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
          <a href="#contact">
            <MagneticButton>
              Contact Me
            </MagneticButton>
          </a>

          <a href="#projects">
            <button className="px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition">
              View Projects
            </button>
          </a>
        </motion.div>

        <div className="flex justify-center gap-6 text-gray-300">

          <a
            href="https://github.com/Pratik-shedge07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="hover:text-white hover:scale-110 transition cursor-pointer" />
          </a>

          <a
            href="https://www.linkedin.com/in/pratik-shedge07/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="hover:text-white hover:scale-110 transition cursor-pointer" />
          </a>

          <a href="mailto:shedgepratik999@gmail.com">
            <Mail className="hover:text-white hover:scale-110 transition cursor-pointer" />
          </a>

        </div>

      </div>
    </section>
  )
}