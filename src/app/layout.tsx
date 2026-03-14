import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Github, Mail, Linkedin } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikhil Ivannan",
  description: "Nikhil Ivannan's personal website",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-2xl mx-auto px-6 py-16">
          {/* Divider */}
          <div className="border-t border-dashed py-6 border-neutral-400"></div>
          {children}
          {/* Divider */}
          <div className="mt-6 border-t border-dashed border-neutral-400"></div>

          {/* Social Links */}
          <div className="flex gap-6 pt-6 text-neutral-700">
            <a href="https://github.com/ironnicko" target="_blank">
              <Github size={28} />
            </a>

            <a href="https://linkedin.com/in/nikhil-ivannan" target="_blank">
              <Linkedin size={28} />
            </a>

            <a href="mailto:nickonicko779@gmail.com">
              <Mail size={28} />
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
