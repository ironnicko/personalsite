import { getPosts, getPost } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getPosts().map((p) => ({ slug: p.slug }));
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
    <main className="max-w-6xl mx-auto py-16 px-4">
      {/* Blog Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-semibold leading-tight mb-3">
          {meta.title}
        </h1>

        <p className="text-sm opacity-60">
          {new Date(meta.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {meta.description && (
          <p className="mt-4 text-lg opacity-80">{meta.description}</p>
        )}
      </header>

      {/* Blog Content */}
      <article className="prose prose-gray dark:prose-invert lg:prose-lg">
        <MDXRemote source={content} />
      </article>
    </main>
  );
}
