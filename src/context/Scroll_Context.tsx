import { createContext } from 'react';
import type { RefObject } from 'react';

// Definieren des Typs für den Context-Wert
interface ScrollContextType {
  aboutMeRef: RefObject<HTMLDivElement> | null;
  skillsRef: RefObject<HTMLDivElement> | null;
  projectsRef: RefObject<HTMLDivElement> | null;
  contactRef: RefObject<HTMLDivElement> | null;
  scrollToSection: (ref: RefObject<HTMLDivElement> | null) => void;
}

const ScrollContext = createContext<ScrollContextType>({
  aboutMeRef: null,
  skillsRef: null,
  projectsRef: null,
  contactRef: null,
  scrollToSection: () => {},
});

export default ScrollContext;
