import Link from "next/link";

export default function SectionHeading({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <div className="flex items-baseline justify-between mb-4">
      <h2 className="font-mono text-sm tracking-widest uppercase text-faded">
        {children}
      </h2>
      {href && (
        <Link
          href={href}
          className="font-mono text-xs text-faded hover:text-accent transition-colors"
        >
          view all →
        </Link>
      )}
    </div>
  );
}
