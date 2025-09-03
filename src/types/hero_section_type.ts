import type { RefObject } from 'react';

export interface HeroMainContentProps {
  projectsRef: RefObject<HTMLDivElement> | null;
  contactRef: RefObject<HTMLDivElement> | null;
  scrollToSection: (ref: RefObject<HTMLDivElement> | null) => void;
}
