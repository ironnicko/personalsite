import { getPosts, PostMeta } from "@/lib/blog"
import Link from "next/link"

export default function BlogPage() {
  const posts = getPosts()

  return (
    <div>
      {/*<h1 className="text-3xl font-semibold mb-10">Blog</h1>*/}

      <div className="space-y-6 pt-0">
        {posts.map((post: PostMeta) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div>
              <h2 className="text-xl font-medium">
                {post.title}
              </h2>

              <p className="text-sm opacity-60">
                {post.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
