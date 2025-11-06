// @ts-nocheck
'use client';

import React from "react";
import { motion, type MotionProps } from "framer-motion";
import { Code, Heart, Feather } from "lucide-react";

const MotionDiv =
  motion.div as React.ComponentType<
    React.HTMLAttributes<HTMLDivElement> & MotionProps
  >;

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-8 py-16">
      {/* Header */}
      <MotionDiv
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-semibold text-primary mb-3">About Me 🌿</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A passionate web programmer who loves building creative, user-focused
          applications — combining clean design, solid logic, and a touch of
          aesthetics.
        </p>
      </MotionDiv>

      {/* About card */}
      <MotionDiv
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/60 backdrop-blur-md border border-[#FDAAAA55] rounded-3xl shadow-sm p-8 hover:shadow-md transition hover-soft"
      >
        <p className="text-gray-700 leading-relaxed text-justify">
          I grow from a deep sense of curiosity, especially in the field of
          technology. As someone who enjoys learning new things, I’m always
          eager to find solutions whenever I encounter challenges in my
          projects. This mindset helps me continuously evolve into a more
          skilled and professional developer — one who writes not just code, but
          meaningful experiences for users.
        </p>
      </MotionDiv>

      {/* Skills */}
      <div className="mt-14 grid gap-8 md:grid-cols-2">
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/60 backdrop-blur-md border border-[#59AC7733] rounded-2xl p-6 shadow-sm hover:shadow-md transition hover-soft"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-full bg-primary/10 text-primary">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-semibold text-primary">
              Technical Skills
            </h3>
          </div>
          <ul className="grid grid-cols-2 gap-2 text-gray-700 list-disc pl-5">
            <li>Next.js, React.js, TypeScript, Tailwind CSS</li>
            <li>Django, Python, REST API</li>
            <li>Laravel, PHP</li>
            <li>PostgreSQL, SQL</li>
            <li>GCP, AWS</li>
            <li>Docker, Linux, Git, Bash/Shell</li>
          </ul>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/60 backdrop-blur-md border border-[#FDAAAA44] rounded-2xl p-6 shadow-sm hover:shadow-md transition hover-soft"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-full bg-accent/15 text-primary">
              <Feather className="w-5 h-5" />
            </div>
            <h3 className="text-2xl font-semibold text-primaryDark">
              Soft Skills
            </h3>
          </div>
          <ul className="grid grid-cols-2 gap-2 text-gray-700 list-disc pl-5">
            <li>Team Collaboration</li>
            <li>Adaptability</li>
            <li>Fast Learner</li>
            <li>Discipline & Documentation</li>
          </ul>
        </MotionDiv>
      </div>

      {/* Bottom accent */}
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center"
      >
        <p className="text-gray-500 text-sm">
          Built with curiosity, creativity, and{" "}
          <Heart className="inline w-4 h-4 text-accent mx-1" /> for technology.
        </p>
        {/* <div className="mt-5 bg-gradient-to-r from-[#FFD5D5] via-white to-[#59AC77]/40 h-1 rounded-full w-1/2 mx-auto" /> */}
      </MotionDiv>
    </section>
  );
}
