import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export type PostMeta = {
  title: string;
  date: string;
  description?: string;
  slug: string;
};

export type Post = {
  meta: PostMeta;
  content: string;
};

export function getPosts(): PostMeta[] {
  const files = fs.readdirSync(BLOG_DIR);

  const posts = files.map((file) => {
    const slug = file.replace(".mdx", "");

    const fullPath = path.join(BLOG_DIR, file);
    const fileContent = fs.readFileSync(fullPath, "utf-8");

    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
    };
  });

  return posts.sort(
    (a, b) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );
}

export function getPost(slug: string): Post | null {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContent = fs.readFileSync(fullPath, "utf-8");

  const { data, content } = matter(fileContent);

  return {
    meta: {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
    },
    content,
  };
}
