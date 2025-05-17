import Link from "next/link";
// Make sure lucide-react is installed in your project
// The correct import syntax is:
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";

export default function PortfolioFooter() {
  // Make sure we're actually using the imported icons
  return (
    <footer id="contact" className="w-full border-t bg-[#ffffff] py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">
              Let&apos;s Contact
            </h2>
            <p className="text-muted-foreground">
              Feel free to reach out for collaborations or just a friendly chat
            </p>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <Link
              href="mailto:rusydahafiyyan@gmail.com?subject=Portfolio%20Inquiry&body=Hello%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
              className="flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background transition-colors hover:bg-muted"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="https://github.com/HAFIYYAAN"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background transition-colors hover:bg-muted"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/hafiyyan-rusyda-010613276/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background transition-colors hover:bg-muted"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://x.com/HafiyyanRu92425"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background transition-colors hover:bg-muted"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://www.instagram.com/abd_hafiyyan/?__pwa=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background transition-colors hover:bg-muted"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>

          <div className="mt-6 space-y-2">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:rusydahafiyyan@gmail.com">
                rusydahafiyyan@gmail.com
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Phone:</span>{" "}
              <Link href="https://wa.me/6285183391627">+62 851 8339 1627</Link>
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Location:</span> Yogyagkarta,
              Indonesia
            </p>
          </div>

          <div className="mt-6">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Abdullah. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
