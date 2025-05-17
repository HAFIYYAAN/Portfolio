"use client";

import Link from "next/link";
import { Righteous } from "next/font/google";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // ikon menu dan close

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <header className="flex items-center justify-around px-6 md:px-12">
        {/* Logo */}
        <h1 className="font-extrabold text-white text-2xl">ABDULLAH</h1>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex gap-10 text-white text-lg ${righteous.className}`}
        >
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section}>
              <Link
                href={`#${section}`}
                scroll={true}
                className="inline-block transition-all duration-300 hover:scale-120 hover:text-blue-400"
              >
                {section === "about"
                  ? "About Me"
                  : section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white md:hidden"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/90 px-6 py-4 flex flex-col gap-4 md:hidden">
            {["home", "about", "projects", "contact"].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                scroll={true}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-white text-base transition-all duration-300 hover:text-blue-400 ${righteous.className}`}
              >
                {section === "about"
                  ? "About Me"
                  : section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}
