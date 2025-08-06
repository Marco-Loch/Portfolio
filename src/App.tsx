import HeroSection from './sections/hero_section';
import MouseFollowShadow from './components/MouseFollowShadow/MouseFollowShadow';
import AboutMeSection from './sections/about_me_section';
import SkillsSection from './sections/skills_section';

function App() {
  return (
    <MouseFollowShadow
      shadowColor="rgba(61, 207, 182, 0.5)"
      shadowSize={250}
      blur={150}
      containerBackground="linear-gradient(135deg, rgba(8, 70, 59, 1) 0%, rgba(28, 28, 28, 1) 50%, rgba(28, 28, 28, 1) 100%)">
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
    </MouseFollowShadow>
  );
}

export default App;
