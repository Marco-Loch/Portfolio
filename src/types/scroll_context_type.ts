import type { RefObject } from 'react';

export interface ScrollContextType {
  aboutMeRef: RefObject<HTMLDivElement> | null;
  skillsRef: RefObject<HTMLDivElement> | null;
  projectsRef: RefObject<HTMLDivElement> | null;
  contactRef: RefObject<HTMLDivElement> | null;
  scrollToSection: (ref: RefObject<HTMLDivElement> | null) => void;
}
