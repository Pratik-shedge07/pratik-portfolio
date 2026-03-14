import TechSphere from "../ui/TechSphere"

export default function TechStack() {
  return (
    <section className="py-32 bg-black text-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold mb-16">
          Tech Stack
        </h2>

        <p className="text-gray-400 mb-12">
          Technologies I use to build modern applications
        </p>

        <TechSphere />

      </div>

    </section>
  )
}