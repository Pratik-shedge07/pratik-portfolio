import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-xl font-bold text-white">
          Pratik.dev
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          <li>
            <a href="#home" className="hover:text-white">Home</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white">Projects</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-white">Skills</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white">Contact</a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg text-center py-6 space-y-4 text-gray-300">
          <a href="#home" onClick={() => setOpen(false)} className="block hover:text-white">Home</a>
          <a href="#projects" onClick={() => setOpen(false)} className="block hover:text-white">Projects</a>
          <a href="#skills" onClick={() => setOpen(false)} className="block hover:text-white">Skills</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block hover:text-white">Contact</a>
        </div>
      )}
    </nav>
  )
}