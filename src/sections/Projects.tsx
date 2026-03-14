import ProjectCard from "../components/ProjectCard"

export default function Projects() {

const projects = [
{
title: "Pratik Portfolio",
description:
"Modern interactive developer portfolio built with React, animations, 3D elements and AI assistant.",
tech: ["React", "TypeScript", "Tailwind", "Three.js"],
github: "https://github.com/Pratik-shedge07/pratik-portfolio"
},

{
title: "CourseCraft (LMS)",
description:
"Online Learning Management System where instructors can upload courses and students can enroll and learn.",
tech: ["React", "Java", "Spring Boot", "MySQL"],
github: "https://github.com/Pratik-shedge07/Online-Learning-Management-System"
},

{
title: "Dairy Clouds",
description:
"Dairy management system to track milk records, inventory, and business analytics.",
tech: ["MongoDB", "JavaScript", "React JS"],
live: "https://dairycloudz.netlify.app/",
github: "https://github.com/Pratik-shedge07/Dairy_Clouds"
},

{
title: "Product Advisor",
description:
"A product recommendation website that helps users choose the best product based on their requirements.",
tech: ["HTML", "CSS", "JavaScript"],
github: "https://github.com/Pratik-shedge07/Product_advisor"
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
live={p.live}
github={p.github}
/>
))}

</div>

</div>

</section>
)
}