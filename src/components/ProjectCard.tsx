import { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border rounded-xl p-6 hover:shadow-md transition">
      <h2 className="text-xl font-semibold underline decoration-red-200 underline-offset-4">{project.title}</h2>

      <p className="text-neutral-600 mt-2">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.stack.map((tech) => (
          <span key={tech} className="text-sm bg-neutral-100 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-4 text-sm">
        {project.github && (
          <a href={project.github} target="_blank" className="underline">
            GitHub
          </a>
        )}

        {project.demo && (
          <a href={project.demo} target="_blank" className="underline">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
