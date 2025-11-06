// @ts-nocheck
'use client';

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";

const experience = [
  {
    role: "Web Programmer — UDINUS",
    time: "Nov 2023 – Present",
    place: "Semarang, Indonesia",
    points: [
      "Designed and built the SIADIN Lecturer Interface using Figma, Next.js, React.js, and Tailwind CSS.",
      "Developed RESTful APIs using Django with secure authentication and PostgreSQL optimization.",
      "Implemented CI/CD pipelines via Git for 99% uptime.",
    ],
  },
];

const certs = [
  "2023 — Professional Network Administrator (BNSP – LSP UDINUS)",
  "2023 — Google IT Support (Coursera)",
];

export default function ExperiencePage() {
  return (
    <section className="max-w-5xl mx-auto p-8 lg:py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-semibold text-primary mb-2">Experience</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Roles, responsibilities, and credentials that shape my journey as a web programmer.
        </p>
      </motion.div>

      {/* Experience + Certifications */}
      <div className="grid gap-6 md:grid-cols-2">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white/65 backdrop-blur-sm border border-[#FDAAAA33] rounded-2xl p-6 shadow-sm hover:shadow-md transition hover-soft"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-full bg-primary/10 text-primary">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary">{exp.role}</h3>
                <p className="text-xs text-gray-500">
                  {exp.time} • {exp.place}
                </p>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {exp.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Certifications card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="bg-white/65 backdrop-blur-sm border border-[#59AC7733] rounded-2xl p-6 shadow-sm hover:shadow-md transition hover-soft"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-full bg-accent/15 text-primary">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primaryDark">Certifications</h3>
              <p className="text-xs text-gray-500">Continuous learning & professional growth</p>
            </div>
          </div>
          <ul className="space-y-2 text-gray-700">
            {certs.map((c, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/80"></span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom accent */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-10 bg-gradient-to-r from-[#FFD5D5] via-white to-[#59AC77]/40 h-1 rounded-full"
      /> */}
    </section>
  );
}
