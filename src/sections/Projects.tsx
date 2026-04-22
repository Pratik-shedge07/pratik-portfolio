import ProjectCard from "../components/ProjectCard"

export default function Projects() {

const projects = [
{
title: "Pratik Portfolio",
description:
"Interactive developer portfolio with 3D tech sphere, custom cursor, AI assistant, and framer-motion animations. Built with React + TypeScript and deployed on Vercel.",
tech: ["React", "TypeScript", "Tailwind", "Three.js"],
live: "https://pratik-portfolio-henna.vercel.app/",
github: "https://github.com/Pratik-shedge07/pratik-portfolio"
},

{
title: "CourseCraft (LMS)",
description:
"Full-stack Learning Management System with role-based access (instructor/student). Built RESTful APIs with Spring Boot, designed relational MySQL schema with JPA, and integrated React frontend.",
tech: ["React", "Java", "Spring Boot", "MySQL"],
live: "https://online-learning-managment-system.vercel.app/",
github: "https://github.com/Pratik-shedge07/Online-Learning-Management-System"
},

{
title: "Dairy Clouds",
description:
"Full-stack dairy management system with real-time milk record tracking, inventory management, and business analytics dashboard. Uses MongoDB for flexible data storage.",
tech: ["MongoDB", "JavaScript", "React JS"],
live: "https://dairycloudz.netlify.app/",
github: "https://github.com/Pratik-shedge07/Dairy_Clouds"
},

{
title: "Product Advisor",
description:
"Smart product recommendation engine that filters and suggests best-fit products based on user requirements and preferences. Built with vanilla JS for fast, dependency-free performance.",
tech: ["HTML", "CSS", "JavaScript"],
live: "https://productadvisor.netlify.app/",
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