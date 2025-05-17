"use client";

import { Righteous } from "next/font/google";
import MouseGlow from "./mouse-glow";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
});

export default function Page2() {
  return (
    <section id='about' className="h-screen w-full bg-black text-white flex items-center justify-center flex-col gap-10">
      {/* Mouse Glow Effect - With small hole */}
      <MouseGlow
        color="#3b82f6"
        size={0}
        holeSize={0}
        blur={30}
        intensity={0.8}
      />
      <div>
        <h1 className={`text-3xl mt-10 ${righteous.className}`}>About Me</h1>
      </div>
      {/* Neon Border Container */}
      <div className="relative w-11/12 max-w-4xl mx-auto">
        {/* Neon Glow Effect */}
        <div className="absolute inset-0 rounded-md bg-transparent border-2 border-blue-500 shadow-[0_0_10px_3px_rgba(59,130,246,0.7),0_0_20px_8px_rgba(59,130,246,0.5),inset_0_0_10px_rgba(59,130,246,0.2)] animate-pulse"></div>

        {/* Content Inside */}
        <div className="relative z-10 text-white m-6 p-6 rounded">
          <div className="mb-10">
            <h1 className={`text-xl ${righteous.className}`}>
              Hi! I&apos;m Abdullah, a Fullstack Developer who enjoys building
              both the front-end and back-end of web applications. with a very
              strong foundation in styling with CSS and Tailwind, I work with
              tools like React, Next.js, Node.js, and PostgreSQL, and I love
              turning ideas into fast, functional, and user-friendly products.
              I&apos;m passionate about clean code, great design, and continuous
              learning.
            </h1>
          </div>
          <div className="flex gap-30">
            <div>
              <h1 className="font-bold text-lg mb-2">~ Front-End</h1>
              <ul className="list-disc pl-5">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-lg mb-2">Back-End</h1>
              <ul className="list-disc pl-5">
                <li>Node.js</li>
                <li>REST API</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-lg mb-2">Database</h1>
              <ul className="list-disc pl-5">
                <li>PostgreSQL</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-lg mb-2">Tools</h1>
              <ul className="list-disc pl-5">
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
