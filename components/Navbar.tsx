"use client";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full py-4 bg-white/40 backdrop-blur-md border-b border-accent/30 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-xl font-semibold text-primary">Mira Nabila</Link>
        <div className="flex gap-6 text-primaryDark">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

