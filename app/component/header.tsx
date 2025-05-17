"use client";

import Link from "next/link";
import { Righteous } from "next/font/google";
import { useState, useEffect } from "react";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // bisa disesuaikan trigger scroll-nya
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 p-5 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md shadow-md p-[14px]"
          : "bg-transparent"
      }`}
    >
      <header className="flex items-center justify-around">
        <div>
          <h1 className="font-extrabold text-white text-2xl">ABDULLAH</h1>
        </div>
        <ul className={`flex gap-16 text-white ${righteous.className}`}>
          <li>
            <Link
              href="#home"
              className="inline-block transition-all duration-300 hover:scale-135 hover:text-blue-400"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="#about"
              scroll={true}
              className="inline-block transition-all duration-300 hover:scale-135 hover:text-blue-400"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              scroll={true}
              className="inline-block transition-all duration-300 hover:scale-135 hover:text-blue-400"
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              scroll={true}
              className="inline-block transition-all duration-300 hover:scale-135 hover:text-blue-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
