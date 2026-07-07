"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/projects", label: "projects" },
  { href: "/blog", label: "blog" },
  { href: "/work", label: "work" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="max-w-2xl mx-auto px-6 pt-8">
      <nav className="flex flex-wrap items-baseline justify-between gap-y-2 pb-6 border-b border-dashed border-line">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight hover:text-accent transition-colors"
        >
          Nikhil Ivannan
        </Link>

        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 font-mono text-sm">
          {links.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "text-accent underline"
                    : "text-faded hover:text-accent transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://drive.google.com/file/d/1GVmu9pAr8sQfm6XtvlIotq4MZS5RSJiJ/view"
            target="_blank"
            className="text-faded hover:text-accent transition-colors"
          >
            resume ↗
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
