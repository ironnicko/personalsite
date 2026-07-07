import { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const stack = project.stack.slice(0, 6);
  const extra = project.stack.length - stack.length;

  return (
    <div className="group py-5 border-b border-dashed border-line">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <div className="flex gap-4 font-mono text-xs shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="text-faded hover:text-accent transition-colors"
            >
              code ↗
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="text-faded hover:text-accent transition-colors"
            >
              demo ↗
            </a>
          )}
        </div>
      </div>

      <p className="mt-1.5 text-faded leading-relaxed">
        {project.description}
      </p>

      <p className="mt-2 font-mono text-xs text-faded/80">
        {stack.join(" · ")}
        {extra > 0 && ` · +${extra} more`}
      </p>
    </div>
  );
}
