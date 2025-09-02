import { createContext } from 'react';
import type { ScrollContextType } from '../types/scroll_context_type';

const ScrollContext = createContext<ScrollContextType>({
  aboutMeRef: null,
  skillsRef: null,
  projectsRef: null,
  contactRef: null,
  scrollToSection: () => {},
});

export default ScrollContext;
