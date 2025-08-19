import { useRef } from 'react';
import HeroSection from './sections/hero_section';
import MouseFollowShadow from './components/MouseFollowShadow/MouseFollowShadow';
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
    <MouseFollowShadow
      shadowColor="rgba(61, 207, 182, 0.5)"
      shadowSize={250}
      blur={150}
      containerBackground="linear-gradient(135deg, rgba(8, 70, 59, 1) 0%, rgba(28, 28, 28, 1) 50%, rgba(28, 28, 28, 1) 100%)">
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
    </MouseFollowShadow>
  );
}

export default App;
