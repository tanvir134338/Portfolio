import Link from "next/link";
import { Mail, MapPin, Send, ArrowUpRight, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "tanvir134338@gmail.com",
    href: "mailto:tanvir134338@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+8801935655955",
    href: "tel:+8801935655955",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangladesh",
    href: null,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-24 sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
            Get In Touch
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted">
            Have a project in mind or want to work together? Feel free to reach
            out. I&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground">
              Let&apos;s talk about your project
            </h3>

            <p className="mt-4 max-w-lg leading-8 text-muted">
              I&apos;m interested in web development opportunities, creative
              projects and collaborations. You can contact me through email or
              social media.
            </p>

            {/* Contact Details */}
            <div className="mt-8 space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/15 to-pink-500/15 text-accent">
                      <Icon size={22} />
                    </div>

                    <div>
                      <p className="text-sm text-muted">{item.label}</p>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium text-foreground transition-colors hover:text-accent"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap gap-3">
              {/* GitHub */}
              <Link
                href="https://github.com/tanvir134338"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.78 2.08 3.55 1.58.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.24-5.1 5.52.4.35.76 1.03.76 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                </svg>
                GitHub
                <ArrowUpRight size={15} />
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/md-tanvir-ahsan/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-accent hover:text-accent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8 18H5V9h3ZM6.5 7.75A1.75 1.75 0 1 1 6.5 4.25a1.75 1.75 0 0 1 0 3.5ZM19 18h-3v-4.4c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.69 1.14-1.69 2.32V18h-3V9h2.88v1.23h.04a3.16 3.16 0 0 1 2.84-1.56C18.65 8.67 19 10.63 19 13.18Z" />
                </svg>
                LinkedIn
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <h3 className="text-xl font-bold text-foreground">
              Send Me a Message
            </h3>

            <p className="mt-2 text-sm text-muted">
              Fill out the form below to get in touch.
            </p>

            <form
              action="https://formsubmit.co/tanvir134338@gmail.com"
              method="POST"
              className="mt-7 space-y-5"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Message"
              />

              <input type="hidden" name="_template" value="table" />

              <input type="hidden" name="_captcha" value="true" />

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Your Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter message subject"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message..."
                  required
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
                />
              </div>

              <button
                type="submit"
                className="gradient-button gradient-text-button flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 font-semibold transition-transform hover:scale-[1.02]"
              >
                Send Message
                <Send size={17} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
