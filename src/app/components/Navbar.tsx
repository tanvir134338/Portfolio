"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, Download } from "lucide-react";

const navLinks = [
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme(savedTheme);

      document.documentElement.dataset.theme = savedTheme;
    }
  }, []);

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
  }

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-border bg-background/90 px-5 py-4 shadow-lg backdrop-blur-xl">
        {/* Logo */}
        <Link
          href="#home"
          className="gradient-text shrink-0 text-xl font-bold tracking-tight sm:text-2xl"
        >
          MD Tanvir Ahsan.
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-foreground transition-colors hover:text-accent xl:text-base"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex shrink-0 items-center gap-3">
          {/* Desktop Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="gradient-button resume-button hidden items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-lg shadow-purple-500/20 sm:flex"
          >
            Resume
            <Download size={16} />
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="rounded-xl border border-border p-3 text-foreground transition-colors hover:bg-surface"
          >
            {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="rounded-xl border border-border p-3 text-foreground lg:hidden"
          >
            {isOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-border bg-background p-4 shadow-xl lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 font-medium text-foreground transition-colors hover:bg-surface hover:text-accent"
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="gradient-button resume-button mt-2 flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold sm:hidden"
            >
              Download Resume
              <Download size={17} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
