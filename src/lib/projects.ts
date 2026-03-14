export type Project = {
  name: string;
  description: string | null;
  url: string;
  stars: number;
  language: string | null;
};

export async function getGithubProjects(): Promise<Project[]> {
  const res = await fetch("https://api.github.com/users/ironnicko/repos", {
    headers: {
      Accept: "application/vnd.github+json",
    },
    next: { revalidate: 3600 }, // ISR cache
  });

  const data = await res.json();

  return data
    .filter((repo: any) => !repo.fork)
    .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
    .map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
      language: repo.language,
    }));
}
