'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src="/mira-photo.jpg"
          alt="Mira Nabila"
          width={150}
          height={150}
          className="rounded-full mx-auto shadow-lg mb-6 object-cover"
        />
        <h1 className="text-4xl font-semibold">Hi, I’m <span className="text-primary">Mira Nabila</span></h1>
        <p className="mt-3 text-lg text-gray-600 max-w-xl mx-auto">
          Web Programmer at UDINUS — passionate about Web, Cloud, and UI/UX development.
        </p>
        <div className="flex justify-center gap-5 mt-5">
          <Link href="https://github.com/miranabila" target="_blank"><Github className="w-6 h-6 hover:text-primary" /></Link>
          <Link href="mailto:miranabila128@gmail.com"><Mail className="w-6 h-6 hover:text-primary" /></Link>
          <Link href="https://linkedin.com/in/mira-nabila-110083237" target="_blank"><Linkedin className="w-6 h-6 hover:text-primary" /></Link>
        </div>

        <Link
          href="/projects"
          className="mt-8 inline-block bg-primary text-white px-6 py-2 rounded-xl hover:bg-primaryDark transition"
        >
          View My Projects
        </Link>
      </motion.div>
    </section>
  );
}
