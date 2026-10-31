import {
  Monitor,
  Server,
  Wrench,
  Layers,
  Database,
  ShieldCheck,
  GitBranch,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Creating modern and responsive user interfaces.",
    icon: Monitor,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Next.js Development",
    description: "Building structured and scalable web applications.",
    icon: Layers,
    skills: [
      "Next.js",
      "App Router",
      "Dynamic Routing",
      "Layouts",
      "Reusable Components",
      "Data Fetching",
      "Server & Client Components",
    ],
  },
  {
    title: "Backend Development",
    description: "Developing server-side logic and API services.",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "API Integration",
      "CRUD Operations",
    ],
  },
  {
    title: "Database Management",
    description: "Working with databases and managing application data.",
    icon: Database,
    skills: [
      "MongoDB",
      "Database Management",
      "Database Integration",
      "Data Handling",
    ],
  },
  {
    title: "Authentication & Security",
    description: "Implementing user authentication and access control.",
    icon: ShieldCheck,
    skills: [
      "Better Auth",
      "Authentication",
      "JWT",
      "Session Management",
      "Password Hashing",
      "OAuth 2.0",
      "Protected Routes",
      "Sign In / Sign Up",
      "Security Fundamentals",
    ],
  },
  {
    title: "Tools & Deployment",
    description: "Development tools and application deployment.",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "npm", "Netlify", "Deployment"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-5 py-24 sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            What I Work With
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            My <span className="gradient-text">Skills</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted">
            Technologies, frameworks and tools I use to build modern, responsive
            and scalable web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-purple-500/10 sm:p-8"
              >
                {/* Card Header */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/15 to-pink-500/15 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon size={27} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-foreground sm:text-xl">
                      {category.title}
                    </h3>

                    <p className="mt-1 text-sm text-muted">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom Gradient */}
                <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-border">
                  <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 opacity-70 transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-12 rounded-2xl border border-border bg-surface p-6 text-center sm:p-8">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/15 to-pink-500/15 text-accent">
            <GitBranch size={25} />
          </div>

          <h3 className="text-xl font-bold text-foreground">
            Always Learning, Always Growing
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted">
            I believe in continuous learning, improving my development skills
            and building real-world projects with modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
