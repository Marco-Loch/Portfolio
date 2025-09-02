import { useRef } from 'react';
import HeroSection from './sections/hero_section';
import AboutMeSection from './sections/about_me_section';
import SkillsSection from './sections/skills_section';
import ProjectsSection from './sections/projects_section';
import ContactSection from './sections/contact_section';
import Footer from './sections/footer_section';

function App() {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <HeroSection aboutMeRef={aboutMeRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />
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
    </>
  );
}

export default App;
