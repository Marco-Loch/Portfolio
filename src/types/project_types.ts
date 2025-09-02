export interface Technology {
  name: string;
  icon: string;
  id: string;
}

export interface Project {
  id: string;
  title: string;
  translationKey: string;
  technologies: Technology[];
  liveLink: string;
  githubLink: string;
  image: string;
}
