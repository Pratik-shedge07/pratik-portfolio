import { Mail, Linkedin, Download } from "lucide-react"
import { motion } from "framer-motion"
import resume from "../assets/Pratik_Shedge_Resume.pdf"

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-black text-white">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold mb-8">
          Let's Work Together
        </h2>

        <p className="text-gray-400 mb-16">
          I'm always interested in new opportunities and exciting projects.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-xl"
        >

          <div className="flex flex-col md:flex-row gap-6 justify-center">

            {/* Email */}
            <a href="mailto:shedgepratik999@gmail.com">
              <button className="flex items-center gap-3 px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition">
                <Mail size={18} />
                Email Me
              </button>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/pratik-shedge07/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-3 px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition">
                <Linkedin size={18} />
                LinkedIn
              </button>
            </a>

            {/* Resume Download */}
            <a href={resume} download="Pratik_Shedge_Resume.pdf">
              <button className="flex items-center gap-3 px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition">
                <Download size={18} />
                Download Resume
              </button>
            </a>

          </div>

        </motion.div>

      </div>

    </section>
  )
}