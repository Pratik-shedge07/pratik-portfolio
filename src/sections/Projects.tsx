import ProjectCard from "../components/ProjectCard"

export default function Projects() {

  const projects = [
    {
      title: "DSA Master Tracker",
      description: "Smart coding progress dashboard with analytics and streak tracking.",
      tech: ["React", "MongoDB", "Node", "Charts"]
    },
    {
      title: "StudySense AI",
      description: "AI-powered personalized study planner and topic explainer.",
      tech: ["React", "AI API", "Node"]
    },
    {
      title: "Emoticonix",
      description: "AI emoji editor with modern UI and export features.",
      tech: ["React", "Canvas", "API"]
    },
    {
      title: "Dairy Clouds",
      description: "Dairy management system with dashboards and product tracking.",
      tech: ["React", "Java", "MySQL"]
    }
  ]

  return (
    <section id="projects" className="py-32 bg-black text-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-16 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              title={p.title}
              description={p.description}
              tech={p.tech}
            />
          ))}

        </div>

      </div>

    </section>
  )
}