import { useEffect, useState } from "react"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

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

        <button className="md:hidden text-white">
          <Menu />
        </button>

      </div>
    </nav>
  )
}