import type { Metadata } from "next";
import { Newsreader, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Github, Mail, Linkedin } from "lucide-react";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nikhil Ivannan",
    template: "%s — Nikhil Ivannan",
  },
  description:
    "Software engineer interested in distributed systems, databases, object stores, and real-time architectures.",
};

const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(!t)t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${newsreader.variable} ${geistMono.variable}`}>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <Navbar />
        <main className="max-w-2xl mx-auto px-6 pt-10 pb-16">{children}</main>

        <footer className="max-w-2xl mx-auto px-6 pb-10">
          <div className="border-t border-dashed border-line pt-6 flex items-center justify-between">
            <div className="flex gap-5 text-faded">
              <a
                href="https://github.com/ironnicko"
                target="_blank"
                aria-label="GitHub"
                className="hover:text-accent transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/nikhil-ivannan"
                target="_blank"
                aria-label="LinkedIn"
                className="hover:text-accent transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:nickonicko779@gmail.com"
                aria-label="Email"
                className="hover:text-accent transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="font-mono text-xs text-faded">
              © 2026 Nikhil Ivannan
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
