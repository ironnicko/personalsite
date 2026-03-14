import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/content/projects"

export default function ProjectsPage() {
  return (
    <main className="max-w-3xl pt-0 mx-auto py-10">
      {/*<h1 className="text-3xl font-bold mb-8">
        Projects
      </h1>*/}

      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </main>
  )
}
