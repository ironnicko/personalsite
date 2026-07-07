import { getPosts, getPost } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.meta.title, description: post.meta.description };
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { meta, content } = post;

  return (
    <article className="rise">
      <Link
        href="/blog"
        className="font-mono text-xs text-faded hover:text-accent transition-colors"
      >
        ← writing
      </Link>

      <header className="mt-6 mb-10 pb-6 border-b border-dashed border-line">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight">
          {meta.title}
        </h1>
        <p className="mt-3 font-mono text-xs text-faded">
          {new Date(meta.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        {meta.description && (
          <p className="mt-4 text-lg text-faded">{meta.description}</p>
        )}
      </header>

      <div className="prose">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
