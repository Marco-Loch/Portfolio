import { createFileRoute } from '@tanstack/react-router';
import { useRef } from 'react';
import HeroSection from '../sections/hero_section';
import AboutMeSection from '../sections/about_me_section';
import SkillsSection from '../sections/skills_section';
import ProjectsSection from '../sections/projects_section';
import ContactSection from '../sections/contact_section';
import Footer from '../sections/footer_section';
import ScrollContext from '../context/Scroll_Context';

function HomePage() {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement> | null) => {
    ref?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const scrollContextValue = {
    aboutMeRef,
    skillsRef,
    projectsRef,
    contactRef,
    scrollToSection,
  };

  return (
    <ScrollContext.Provider value={scrollContextValue}>
      <HeroSection />
      <div ref={aboutMeRef}>
        <AboutMeSection />
      </div>
      <div ref={skillsRef}>
        <SkillsSection />
      </div>
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>
      <div ref={contactRef}>
        <ContactSection />
      </div>
      <Footer />
    </ScrollContext.Provider>
  );
}

export const Route = createFileRoute('/')({
  component: HomePage,
});
