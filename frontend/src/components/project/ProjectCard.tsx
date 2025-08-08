import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
}

export const ProjectCard = ({
  slug,
  title,
  description,
  technologies,
}: ProjectCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-text-secondary">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-accent-gray px-2 py-1 text-xs text-text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link href={`/projects/${slug}`} className="text-accent-blue mt-4 inline-block">
          View Project
        </Link>
      </CardContent>
    </Card>
  );
};