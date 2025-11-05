import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    {
      title: "ICE Education Platform",
      tech: "Next.js • Tailwind CSS",
      link: "https://ice-edu.id",
      desc: "Freelance educational web built with Next.js and Tailwind CSS.",
    },
    {
      title: "SIAKAD UDINUS (Student Portal)",
      tech: "Django • REST API • PostgreSQL",
      link: "https://mhs.dinus.ac.id/",
      desc: "Academic information system for UDINUS students.",
    },
    {
      title: "SIAKAD UDINUS (Lecturer Portal)",
      tech: "React • Next.js • Figma",
      link: "https://dsn.dinus.ac.id/",
      desc: "Lecturer interface for managing academic data.",
    },
    {
      title: "API Documentation",
      tech: "Django • Swagger",
      link: "https://dev-api-nakula.dinus.ac.id/docs/",
      desc: "Documentation for academic API integration.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto p-10">
      <h2 className="text-3xl font-semibold text-primary mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
