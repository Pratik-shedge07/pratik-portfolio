import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import TechStack from "./sections/TechStack"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"
import Starfield from "./ui/Starfield"
import AIAssistant from "./components/AIAssistant"
import CustomCursor from "./ui/CustomCursor"

function App() {
  return (
    <div className="bg-black text-white relative">
      <CustomCursor />

      <Starfield />


      <Navbar />

      <Hero />

      <Projects />

      <Skills />

      <TechStack />

      <Contact />

      <Footer />

      <AIAssistant />

      

    </div>
  )
}

export default App