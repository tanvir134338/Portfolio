import Link from "next/link";
import { ArrowUp, Heart } from "lucide-react";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-5 sm:px-6">
      <div className="mx-auto max-w-7xl py-12">
        {/* Footer Top */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <Link
              href="#home"
              className="text-2xl font-extrabold tracking-tight"
            >
              <span className="gradient-text">MD Tanvir Ahsan.</span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
              Building modern, responsive and user-friendly web experiences with
              passion and creativity.
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {/* GitHub */}
            <Link
              href="https://github.com/tanvir134338"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground transition-all hover:border-accent hover:bg-accent/10 hover:text-accent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.78 2.08 3.55 1.58.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.24-5.1 5.52.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/md-tanvir-ahsan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground transition-all hover:border-accent hover:bg-accent/10 hover:text-accent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8 18H5V9h3ZM6.5 7.75A1.75 1.75 0 1 1 6.5 4.25a1.75 1.75 0 0 1 0 3.5ZM19 18h-3v-4.4c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.69 1.14-1.69 2.32V18h-3V9h2.88v1.23h.04a3.16 3.16 0 0 1 2.84-1.56C18.65 8.67 19 10.63 19 13.18Z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-border" />

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row">
          <p className="text-sm text-muted">
            © 2026 MD Tanvir Ahsan. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-sm text-muted">
            Made with
            <Heart size={15} className="fill-rose-500 text-rose-500" />
            by <span className="font-semibold text-foreground">Tanvir</span>
          </p>

          {/* Back to Top */}
          <Link
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-black transition-transform hover:-translate-y-1"
          >
            <ArrowUp size={19} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
