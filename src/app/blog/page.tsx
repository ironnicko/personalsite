import PostRow from "@/components/PostRow";
import SectionHeading from "@/components/SectionHeading";
import { getPosts } from "@/lib/blog";

export const metadata = { title: "Writing" };

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="rise">
      <SectionHeading>writing</SectionHeading>
      <div>
        {posts.map((post) => (
          <PostRow key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
