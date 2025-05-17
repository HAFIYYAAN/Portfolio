"use client";

import { Righteous } from "next/font/google";
import MouseGlow from "./mouse-glow";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
});

export default function Page2() {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-black text-white flex items-center justify-center flex-col gap-10 px-4 py-10 sm:px-8"
    >
      <MouseGlow color="#3b82f6" size={0} holeSize={0} blur={30} intensity={0.8} />

      <h1 className={`text-3xl sm:text-4xl mt-10 ${righteous.className}`}>About Me</h1>

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Neon Glow Border */}
        <div className="absolute inset-0 rounded-md border-2 border-blue-500 shadow-[0_0_10px_3px_rgba(59,130,246,0.7),0_0_20px_8px_rgba(59,130,246,0.5),inset_0_0_10px_rgba(59,130,246,0.2)] animate-pulse" />

        {/* Content */}
        <div className="relative z-10 text-white m-4 sm:m-6 p-4 sm:p-6 rounded">
          <p className={`text-base sm:text-lg mb-10 leading-relaxed ${righteous.className}`}>
            Hi! I&apos;m Abdullah, a Fullstack Developer who enjoys building both the front-end
            and back-end of web applications. With a very strong foundation in styling with CSS and
            Tailwind, I work with tools like React, Next.js, Node.js, and PostgreSQL, and I love
            turning ideas into fast, functional, and user-friendly products. I&apos;m passionate
            about clean code, great design, and continuous learning.
          </p>

          {/* Responsive Grid */}
          <div className="flex flex-wrap gap-y-8 gap-x-10 sm:gap-x-14 justify-start">
            {/* Front-End */}
            <div className="w-full sm:w-[45%] md:w-[22%]">
              <h2 className="font-bold text-lg mb-2">~ Front-End</h2>
              <ul className="list-disc pl-5 text-sm sm:text-base">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            {/* Back-End */}
            <div className="w-full sm:w-[45%] md:w-[22%]">
              <h2 className="font-bold text-lg mb-2">Back-End</h2>
              <ul className="list-disc pl-5 text-sm sm:text-base">
                <li>Node.js</li>
                <li>REST API</li>
              </ul>
            </div>

            {/* Database */}
            <div className="w-full sm:w-[45%] md:w-[22%]">
              <h2 className="font-bold text-lg mb-2">Database</h2>
              <ul className="list-disc pl-5 text-sm sm:text-base">
                <li>PostgreSQL</li>
                <li>MySQL</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="w-full sm:w-[45%] md:w-[22%]">
              <h2 className="font-bold text-lg mb-2">Tools</h2>
              <ul className="list-disc pl-5 text-sm sm:text-base">
                <li>Git & GitHub</li>
                <li>Vercel</li>
                <li>Figma</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
