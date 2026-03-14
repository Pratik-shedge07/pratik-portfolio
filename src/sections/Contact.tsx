import { Mail, Linkedin, Download } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section className="py-32 bg-black text-white">

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

            <button className="flex items-center gap-3 px-6 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition">
              <Mail size={18} />
              Email Me
            </button>

            <button className="flex items-center gap-3 px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition">
              <Linkedin size={18} />
              LinkedIn
            </button>

            <button className="flex items-center gap-3 px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition">
              <Download size={18} />
              Download Resume
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  )
}