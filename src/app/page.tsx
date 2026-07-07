import PostRow from "@/components/PostRow";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/content/projects";
import { getPosts } from "@/lib/blog";

export default function Home() {
  const posts = getPosts().slice(0, 3);
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="space-y-14">
      {/* Intro */}
      <section className="rise">
        <div className="space-y-4 text-lg leading-relaxed">
          <p>
            I&rsquo;m interested in distributed systems, databases, object
            stores, and real-time architectures.
          </p>
          <p>
            Former competitive programmer and ICPC regionalist. These days I
            spend most of my time reading systems papers and designing
            distributed systems.
          </p>
        </div>
      </section>

      {/* Recent writing */}
      <section className="rise rise-1">
        <SectionHeading href="/blog">writing</SectionHeading>
        <div>
          {posts.map((post) => (
            <PostRow key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="rise rise-2">
        <SectionHeading href="/projects">projects</SectionHeading>
        <div>
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
