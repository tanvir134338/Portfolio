import { Camera, Code2, MonitorSmartphone, Music2 } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "I enjoy building modern websites with clean code, creative layouts and smooth user experiences.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Design",
    description:
      "I focus on creating websites that look great and work smoothly across all devices.",
  },
  {
    icon: Music2,
    title: "Music & Guitar",
    description:
      "Music is one of my favorite ways to relax, and I enjoy spending time playing guitar.",
  },
  {
    icon: Camera,
    title: "Photography",
    description:
      "I also enjoy photography and exploring creative ways to tell stories through visuals.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-5 py-24 sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Get to know me
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            About <span className="gradient-text">Me</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted">
            A little introduction about who I am, what I do, and what inspires
            me.
          </p>
        </div>

        {/* About Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Introduction */}
          <div>
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
              My Journey in
              <span className="gradient-text"> Web Development</span>
            </h3>

            <div className="mt-6 space-y-5 text-base leading-8 text-muted">
              <p>
                Hello! I&apos;m MD Tanvir Ahsan, an EEE student with a strong
                interest in web development and modern technology.
              </p>

              <p>
                My journey into programming started with curiosity about how
                websites work. Over time, that curiosity turned into a passion
                for creating beautiful, functional and user-friendly web
                experiences.
              </p>

              <p>
                I enjoy working with modern web technologies, especially React,
                Next.js, TypeScript and Tailwind CSS. I am continuously
                improving my skills and exploring both frontend and backend
                development.
              </p>

              <p>
                Beyond programming, I enjoy listening to music, playing guitar
                and exploring photography. I believe creativity, curiosity and
                continuous learning are important parts of becoming a better
                developer.
              </p>
            </div>

            {/* Highlight */}
            <div className="mt-8 rounded-2xl border border-border bg-surface p-5 shadow-lg shadow-purple-500/5">
              <p className="font-semibold text-foreground">
                <span className="gradient-text">My Philosophy</span>
              </p>

              <p className="mt-2 text-sm leading-7 text-muted">
                Learn continuously, build consistently, and turn ideas into
                meaningful digital experiences.
              </p>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-xl hover:shadow-purple-500/10"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/15 to-pink-500/15 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon size={25} />
                  </div>

                  <h4 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
