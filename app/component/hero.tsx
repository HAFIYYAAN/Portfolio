"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Righteous } from "next/font/google";
import Image from "next/image";

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
});

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number }[]
  >([]);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Set window size once after mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const generated = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
      setParticles(generated);
    }
  }, []);

  // Mouse movement handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div id="home" className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "radial-gradient(circle at 10% 20%, #333333 0%, #111111 30%, #000000 100%)",
            "radial-gradient(circle at 10% 20%, #222222 0%, #111111 30%, #000000 100%)",
            "radial-gradient(circle at 10% 20%, #2a2a2a 0%, #111111 30%, #000000 100%)",
            "radial-gradient(circle at 10% 20%, #333333 0%, #111111 30%, #000000 100%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Mouse-following gradient */}
      <motion.div
        className="absolute inset-0 z-10 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
            mousePosition.y * 100
          }%, #444444 0%, transparent 20%)`,
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute z-10 h-1 w-1 rounded-full bg-gray-500 opacity-10"
          initial={{ x: p.x, y: p.y }}
          animate={{
            x: [
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
              Math.random() * windowSize.width,
            ],
            y: [
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
              Math.random() * windowSize.height,
            ],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 20 + Math.random() * 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}

      {/* Hero section content */}
      <div className="relative z-20 text-white justify-center items-center flex gap-20 h-screen">
        <div className="flex flex-col gap-3">
          <div className="font-bold text-2xl">
            <h1 className="text-start">
              Hello, my name is <br />
              <span className="text-5xl">ABDULLAH HAFIYYAN</span>
            </h1>
          </div>
          <div
            className={`animate-pulse text-4xl font-bold tracking-wider text-blue-500 drop-shadow-[0_0_10px_rgba(0,122,250,0.8)] md:text-5xl ${righteous.className}`}
          >
            Fullstack Web Developer
          </div>
          <div>
            <p className="text-[14px]">
              &quot;I am a fullstack web developer with a focus on building
              efficient and responsive web applications.&quot; <br />
              <span className="font-bold">
                &quot;Experienced in modern technologies such as React, Next.js,
                and Node.js.&quot;
              </span>
            </p>
          </div>
        </div>
        <div className=" bottom-0">
          <Image
            className="rounded-full"
            src="/myphoto.png"
            alt="avatar"
            width="250"
            height="250"
          />
        </div>
      </div>
    </div>
  );
}
