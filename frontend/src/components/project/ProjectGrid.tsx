import { ProjectCard } from './ProjectCard';

interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
}

interface ProjectGridProps {
  projects: Project[];
}

export const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          slug={project.slug}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
};