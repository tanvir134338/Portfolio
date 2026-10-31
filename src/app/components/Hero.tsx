import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-glow relative flex min-h-[calc(100vh-100px)] items-center overflow-hidden"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:gap-20 lg:py-20">
        {/* Left Content */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="mb-4 text-lg font-medium text-muted sm:text-xl">
            Hello, I&apos;m
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            MD
            <span className="gradient-text block">Tanvir Ahsan</span>
          </h1>

          <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
            <span className="gradient-text">Full Stack Web Developer</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-muted md:mx-0 lg:text-lg">
            I am a passionate web developer who loves building modern,
            responsive and user-friendly websites. I enjoy learning new
            technologies and turning creative ideas into real-world digital
            experiences.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <Link
              href="#projects"
              className="gradient-button gradient-text-button inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold shadow-lg shadow-purple-500/20"
            >
              View My Work
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3.5 font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
            >
              Contact Me
              <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <span className="mr-1 text-sm font-medium text-muted">
              Find me on:
            </span>

            {/* GitHub */}
            <a
              href="https://github.com/tanvir134338"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.2 4.3 4.3 0 0 1 .1-3.2s1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 3 .1 3.2a4.7 4.7 0 0 1 1.2 3.2c0 4.6-2.8 5.7-5.5 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
              </svg>
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/md-tanvir-ahsan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M20.45 2H3.55C2.7 2 2 2.67 2 3.5v17c0 .83.7 1.5 1.55 1.5h16.9c.85 0 1.55-.67 1.55-1.5v-17c0-.83-.7-1.5-1.55-1.5ZM8 19H5V9h3v10ZM6.5 7.7a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM19 19h-3v-4.9c0-1.17-.02-2.68-1.63-2.68-1.63 0-1.88 1.27-1.88 2.59V19h-3V9h2.88v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.75 2 3.75 4.6V19Z" />
              </svg>
              LinkedIn
            </a>

            {/* Email */}
            <a
              href="mailto:tanvir134338@gmail.com"
              aria-label="Email"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
            >
              <Mail size={19} />
              Email
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[430px]">
            {/* Background Glow */}
            <div className="absolute inset-5 rounded-full bg-purple-500/20 blur-[90px]" />

            {/* Gradient Border */}
            <div className="relative rounded-[2rem] bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 p-[2px] shadow-2xl shadow-purple-500/20">
              <div className="overflow-hidden rounded-[calc(2rem-2px)] bg-surface">
                <Image
                  src="/images/profile.png"
                  alt="Mohammad Tanvir Ahsan - Web Developer"
                  width={900}
                  height={900}
                  priority
                  className="h-[380px] w-full object-cover object-top sm:h-[450px] lg:h-[500px]"
                />
              </div>
            </div>

            {/* Profile Label */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl border border-border bg-background/90 px-5 py-3 shadow-xl backdrop-blur-md">
              <p className="text-sm font-semibold text-foreground">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500" />
                Available for Opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
