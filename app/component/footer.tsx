import Link from "next/link";
// Make sure lucide-react is installed in your project
// The correct import syntax is:
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="w-full border-t bg-white py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-xl mx-auto">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Let&apos;s Contact
            </h2>
            <p className="text-gray-600">
              Feel free to reach out for collaborations or just a friendly chat
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[{
              href: "mailto:rusydahafiyyan@gmail.com?subject=Portfolio%20Inquiry&body=Hello%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",
              label: "Email",
              icon: <Mail className="h-5 w-5" />
            }, {
              href: "https://github.com/HAFIYYAAN",
              label: "GitHub",
              icon: <Github className="h-5 w-5" />
            }, {
              href: "https://www.linkedin.com/in/hafiyyan-rusyda-010613276/",
              label: "LinkedIn",
              icon: <Linkedin className="h-5 w-5" />
            }, {
              href: "https://x.com/HafiyyanRu92425",
              label: "Twitter",
              icon: <Twitter className="h-5 w-5" />
            }, {
              href: "https://www.instagram.com/abd_hafiyyan/?__pwa=1",
              label: "Instagram",
              icon: <Instagram className="h-5 w-5" />
            }].map(({ href, label, icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={label}
              >
                {icon}
                <span className="sr-only">{label}</span>
              </Link>
            ))}
          </div>

          <div className="mt-6 space-y-2 text-gray-700 text-sm">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:rusydahafiyyan@gmail.com"
                className="underline hover:text-blue-600"
              >
                rusydahafiyyan@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              <Link
                href="https://wa.me/6285183391627"
                className="underline hover:text-blue-600"
              >
                +62 851 8339 1627
              </Link>
            </p>
            <p>
              <span className="font-semibold">Location:</span> Yogyakarta, Indonesia
            </p>
          </div>

          <div className="mt-6 text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Abdullah. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
