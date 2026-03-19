import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="max-w-2xl mx-auto flex justify-between py-6 px-6">
      <Link href="/" className="text-3xl font-bold">
        Nikhil Ivannan
      </Link>

      <div className="space-x-6">
        <Link href="/projects">projects</Link>
        <Link href="/blog">blog</Link>
        <Link href="/work">work</Link>
        <Link href="https://drive.google.com/file/d/1GVmu9pAr8sQfm6XtvlIotq4MZS5RSJiJ/view">resume</Link>
      </div>
    </nav>
  );
}
