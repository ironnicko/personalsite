import Link from "next/link";
import { PostMeta } from "@/lib/blog";

export default function PostRow({
  post,
  index,
}: {
  post: PostMeta;
  index?: number;
}) {
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex gap-4 py-4 border-b border-dashed border-line"
    >
      {typeof index === "number" && (
        <span className="font-mono text-xs text-faded/60 pt-1.5 tabular-nums select-none">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}

      <div className="flex-1">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-lg group-hover:text-accent transition-colors">
            <span className="bg-[linear-gradient(var(--accent),var(--accent))] bg-[length:0%_1px] group-hover:bg-[length:100%_1px] bg-no-repeat bg-left-bottom transition-[background-size] duration-300">
              {post.title}
            </span>
          </h3>
          <span className="shrink-0 font-mono text-xs text-faded">{date}</span>
        </div>

        {post.description && (
          <p className="mt-1 text-sm text-faded leading-relaxed line-clamp-2">
            {post.description}
          </p>
        )}
      </div>
    </Link>
  );
}
