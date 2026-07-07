import Link from "next/link";
import { PostMeta } from "@/lib/blog";

export default function PostRow({ post }: { post: PostMeta }) {
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex items-baseline justify-between gap-4 py-3 border-b border-dashed border-line"
    >
      <span className="text-lg group-hover:text-accent transition-colors">
        {post.title}
      </span>
      <span className="shrink-0 font-mono text-xs text-faded">{date}</span>
    </Link>
  );
}
