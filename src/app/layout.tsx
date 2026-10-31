import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-portfolio.vercel.app"),

  title: {
    default: "MD Tanvir Ahsan | Full Stack Web Developer",
    template: "%s | MD Tanvir Ahsan",
  },

  description:
    "MD Tanvir Ahsan is a Full Stack Web Developer specializing in Next.js, React, TypeScript, and modern web technologies. Explore his projects, skills, and portfolio.",

  keywords: [
    "MD Tanvir Ahsan",
    "Tanvir Ahsan",
    "Full Stack Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Web Developer Bangladesh",
    "Frontend Developer",
  ],

  authors: [{ name: "MD Tanvir Ahsan" }],

  creator: "MD Tanvir Ahsan",

  openGraph: {
    title: "MD Tanvir Ahsan | Full Stack Web Developer",
    description:
      "Explore the portfolio, projects, and technical skills of MD Tanvir Ahsan, a Full Stack Web Developer.",
    siteName: "MD Tanvir Ahsan Portfolio",
    type: "website",
    locale: "en_US",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
