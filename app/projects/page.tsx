import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "ICE Education Platform",
      tech: "Next.js • Tailwind CSS",
      link: "https://ice-edu.id",
      desc: "Freelance educational web built with Next.js and Tailwind CSS.",
      image: "/ice-app.jpg",
    },
    {
      title: "SIAKAD UDINUS (Student Portal)",
      tech: "Django • REST API • PostgreSQL",
      link: "https://mhs.dinus.ac.id/",
      desc: "Academic information system for UDINUS students.",
      image: "/siadin-mhs.jpg",
    },
    {
      title: "SIAKAD UDINUS (Lecturer Portal)",
      tech: "React • Next.js • Figma",
      link: "https://dsn.dinus.ac.id/",
      desc: "Lecturer interface for managing academic data.",
      image: "/siadin-dsn.jpg",
    },
    {
      title: "UI/UX Design — SIADIN Dosen",
      tech: "Figma",
      link: "https://www.figma.com/proto/CM28TFAVJnqnYWJhEz7gy0/SIAdinDosen?node-id=5-479&p=f&t=pbFc3SAaPaY1Bcyt-1&scaling=min-zoom&content-scaling=fixed&page-id=5%3A246",
      desc: "Figma – SIADIN Dosen — Desain antarmuka sistem akademik berbasis web.",
      image: "/ui-ux.jpg",
    },
    {
      title: "Supply Chain Management Kedaireka 2022",
      tech: "Laravel • PHP • MySQL",
      link: "https://github.com/miranabila/scm-kedaireka2022",
      desc: "A supply chain management web app built with Laravel and MySQL for Kedaireka 2022 collaboration project.",
      image: "/bc-system.jpg",
    },
    {
      title: "Manduin Apps — Bangkit Academy 2022",
      tech: "Android • Kotlin • Firebase",
      link: "https://github.com/miranabila/manduin-apps-BangkitAcademy",
      desc: "Bangkit Academy 2022 Capstone Project — an Android app to support local tourism and creative economy.",
      image: "/manduin-apps.jpg",
    },
    {
      title: "API Documentation",
      tech: "Django • Swagger",
      link: "https://dev-api-nakula.dinus.ac.id/docs/",
      desc: "Documentation for academic API integration.",
      image: "/dev-apinakula.jpg",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto p-10">
      <h2 className="text-3xl font-semibold text-primary mb-6 text-center">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Link
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group cursor-pointer"
          >
            <div className="bg-white/60 backdrop-blur-md border border-[#FDAAAA55] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform group-hover:-translate-y-1 group-hover:border-[#59AC77]/50 group-hover:bg-gradient-to-br from-white to-[#EAF7EE]/60">
              <ProjectCard {...p} />
              <div className="mt-3 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                → View Project
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
