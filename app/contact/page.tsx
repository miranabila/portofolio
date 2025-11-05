// @ts-nocheck
'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Linkedin, Github, Heart } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-8 text-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-semibold text-primary mb-3">
          Let’s Connect 💌
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I’d love to hear from you — whether it’s about a collaboration,
          freelance project, or just to say hi!
        </p>
      </motion.div>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-10 bg-white/60 backdrop-blur-md border border-[#FDAAAA55] rounded-3xl shadow-sm p-10 max-w-2xl mx-auto hover:shadow-md transition hover-soft"
      >
        <div className="space-y-5 text-left">
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-primary" />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <Link
                href="mailto:miranabila128@gmail.com"
                className="text-primary font-medium hover:underline"
              >
                miranabila128@gmail.com
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Linkedin className="w-6 h-6 text-primary" />
            <div>
              <p className="text-sm text-gray-500">LinkedIn</p>
              <Link
                href="https://linkedin.com/in/mira-nabila-110083237"
                target="_blank"
                className="text-primary font-medium hover:underline"
              >
                Mira Nabila
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Github className="w-6 h-6 text-primary" />
            <div>
              <p className="text-sm text-gray-500">GitHub</p>
              <Link
                href="https://github.com/miranabila"
                target="_blank"
                className="text-primary font-medium hover:underline"
              >
                github.com/miranabila
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-500 text-sm">
          Crafted with <Heart className="inline w-4 h-4 text-accent mx-1" /> by
          Mira Nabila
        </p>
        <div className="mt-5 bg-gradient-to-r from-[#FFD5D5] via-white to-[#59AC77]/50 h-1 rounded-full w-1/2 mx-auto" />
      </motion.div>
    </section>
  );
}
