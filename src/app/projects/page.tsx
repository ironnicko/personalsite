import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/content/projects";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="rise">
      <SectionHeading>projects</SectionHeading>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
