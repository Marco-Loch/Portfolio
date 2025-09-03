import type { FC } from 'react';
import { Box } from '@mui/material';
import { useContext } from 'react';
import ScrollContext from '../context/Scroll_Context';
import Ticker from '../components/Ticker';
import HeroNav from '../components/Hero_Nav';
import HeroMainContent from '../components/HeroSectionComponents/Hero_Main_Content';
import HeroScrollIndicator from '../components/HeroSectionComponents/Hero_Scroll_Indicator';
import HeroSocials from '../components/HeroSectionComponents/Hero_Socials';

const HeroSection: FC = () => {
  const { projectsRef, contactRef, scrollToSection } = useContext(ScrollContext);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        position: 'relative',
        color: '#FFFFFF',
        fontFamily: "'Orbitron', sans-serif",
        px: { xs: 2, md: 4 },
        overflowX: 'hidden',
      }}>
      <HeroNav />
      <HeroMainContent projectsRef={projectsRef} contactRef={contactRef} scrollToSection={scrollToSection} />
      <HeroScrollIndicator />
      <HeroSocials />
      <Ticker />
    </Box>
  );
};

export default HeroSection;
