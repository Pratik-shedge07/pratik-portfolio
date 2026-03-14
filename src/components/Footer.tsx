import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 bg-black text-gray-400">

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <p>
          © {new Date().getFullYear()} Pratik Shedge. All rights reserved.
        </p>

        <div className="flex gap-6">

          <Github className="hover:text-white cursor-pointer" />

          <Linkedin className="hover:text-white cursor-pointer" />

          <Mail className="hover:text-white cursor-pointer" />

        </div>

      </div>

    </footer>
  )
}