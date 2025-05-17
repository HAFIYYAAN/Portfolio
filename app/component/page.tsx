"use client";

import Image from "next/image";

const cards = [
  {
    title: "HTML",
    image: "/HTML.png",
    desc: "The basic structure of every web page. HTML5 brings new semantic elements, multimedia support, and performance improvements to build more modern and responsive layouts.",
  },
  {
    title: "CSS",
    image: "/CSS.png",
    desc: "A styling language used to beautify web pages. CSS3 introduced features like flexbox, grid, animation, and media queries for responsive designs.",
  },
  {
    title: "JavaScript",
    image: "/JavaScript.png",
    desc: "The primary programming language for interactive web applications. Enables DOM manipulation, form validation, and API communication.",
  },
  {
    title: "Tailwind",
    image: "/Tailwind.png",
    desc: "A utility-first CSS framework for quickly building custom user interfaces directly in HTML with minimal custom CSS.",
  },
  {
    title: "React",
    image: "/React.png",
    desc: "A JavaScript library for building interactive UIs using reusable components. Perfect for building fast SPA apps.",
  },
  {
    title: "Next.js",
    image: "/Next.js.png",
    desc: "A React framework with SSR, static site generation, and optimized performance. Ideal for SEO and production-ready apps.",
  },
  {
    title: "Node.js",
    image: "/Node.js.png",
    desc: "A runtime environment for executing JavaScript outside the browser, often used to build fast and scalable server-side apps.",
  },
  {
    title: "PostgreSQL",
    image: "/PostgreSQL.png",
    desc: "A minimal and flexible Node.js framework for building web applications and APIs. Perfect for building RESTful APIs.",
  },
];

export default function InfiniteScrollSlider() {
  return (
    <div className="overflow-hidden w-full bg-gray-100 py-10">
      <div className="flex w-max animate-slide gap-5">
        {[...cards, ...cards].map((card, i) => (
          <div
            key={i}
            className="min-w-[300px] max-w-[300px] shadow-2xl border rounded-md bg-white text-center py-12 px-4"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={50}
              height={50}
              className="mx-auto m-4"
            />
            <h3 className="font-bold text-lg my-2">{card.title}</h3>
            <p className="text-[14px]">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Tambah style di bawah */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
