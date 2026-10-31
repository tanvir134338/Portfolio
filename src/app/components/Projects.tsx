import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Bazar Dor",
    category: "Market Price Tracking",
    description:
      "A web application that helps users explore product prices and compare market rates through an organized interface.",
    image: "/images/projects/bazar-dor.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "API"],
    liveUrl: "https://bazar-dor-a7-b14.vercel.app/",
    githubUrl: "https://github.com/tanvir134338/bazar-dor-a7-B14",
  },
  {
    title: "FitLog",
    category: "Fitness & Workout Tracking",
    description:
      "A fitness tracking application designed to help users explore workouts and manage their fitness plans.",
    image: "/images/projects/fitlog.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://assignment-06-b14-fitlog.vercel.app/",
    githubUrl: "https://github.com/tanvir134338/assignment-06-b14-fitlog",
  },
  {
    title: "Dev Stack Builder",
    category: "Developer Tool",
    description:
      "A developer-focused application built to provide a clean interface and simplify the project setup experience.",
    image: "/images/projects/dev-stack-builder.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://dev-stack-builder-2026.netlify.app/",
    githubUrl: "https://github.com/tanvir134338/dev-stack-builder-A05-b14",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-5 py-24 sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            My Recent Work
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted">
            A selection of projects that showcase my skills, creativity and
            passion for building modern web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-xl hover:shadow-purple-500/10"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-background">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-sm font-medium text-accent">
                  {project.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-foreground">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-20 text-sm leading-7 text-muted">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gradient-button gradient-text-button inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-transform hover:scale-105"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </Link>

                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.78 2.08 3.55 1.58.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.24-5.1 5.52.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                    </svg>
                    GitHub
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
