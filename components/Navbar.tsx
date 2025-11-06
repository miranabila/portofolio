"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="w-full sticky top-0 z-50">
      <div className="bg-gradient-to-b from-white/60 via-white/50 to-white/30 backdrop-blur-xl border-b border-white/20 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-5">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            Mira Nabila
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative ${
                  isActive(link.href)
                    ? "text-primary bg-gradient-to-r from-primary/10 to-accent/10"
                    : "text-primaryDark hover:text-primary hover:bg-white/30"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2 hover:bg-white/30 rounded-lg transition-all duration-300">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

