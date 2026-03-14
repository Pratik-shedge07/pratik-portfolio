import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import TechStack from "./sections/TechStack"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"
import Starfield from "./ui/Starfield"

function App() {
  return (
    <div className="bg-black text-white relative">

      <Starfield />

      <Navbar />

      <Hero />

      <Projects />

      <Skills />

      <TechStack />

      <Contact />

      <Footer />

    </div>
  )
}

export default App