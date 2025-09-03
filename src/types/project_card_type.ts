import type { ProjectCardProps } from './project_type';

export interface ProjectCardHeaderProps {
  title: string;
  description: string;
  accentColor: string;
}

export interface ProjectCardTechStackProps {
  technologies: ProjectCardProps['project']['technologies'];
}

export interface ProjectCardLinksProps {
  githubLink: string;
  liveLink: string;
  accentColor: string;
}

export interface ProjectCardImageProps {
  imageSrc: string;
  title: string;
}
