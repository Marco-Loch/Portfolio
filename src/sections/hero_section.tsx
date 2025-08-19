import React from 'react';
import type { FC, RefObject } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { keyframes } from '@emotion/react';
import FaviconML from '../assets/img/faviconML.png';
import { useTranslation } from 'react-i18next';

interface HeroSectionProps {
  aboutMeRef: RefObject<HTMLDivElement>;
  skillsRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

interface LogoProps {
  alt?: string;
  style?: React.CSSProperties;
  width?: string | number;
  height?: string | number;
}

// ==============
// Logo
// ==============
const Logo: FC<LogoProps> = ({ alt = 'Favicon ML', ...props }) => (
  <Box component="img" src={FaviconML} alt={alt} sx={{ width: 60, height: 50 }} {...props} />
);

// ==============
// Icons (Platzhalter)
// ==============
const ArrowDownwardIcon: FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 20L12 4M12 20L16 16M12 20L8 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GitHubIcon: FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 19c-4.3 1.4 -4.3-2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .5 -.9 1.4 -.9 2.8v4.2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LinkedInIcon: FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0 -2 -2a2 2 0 0 0 -2 2v7h-4v-7a6 6 0 0 1 6 -6z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M4 9h4v12h-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M4 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ==============
// Animierter Ticker am unteren Rand
// ==============
const marqueeAnimation = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
`;

const Ticker: FC = () => {
  const { t } = useTranslation();
  const tickerItems: string[] = [
    t('hero-section.remote'),
    t('hero-section.frontenddev'),
    t('hero-section.based'),
    t('hero-section.open-for-projects'),
  ];

  //dupliziere die Items, um einen nahtlosen Loop zu erzeugen
  const extendedItems = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
        py: 2,
        backgroundColor: 'transparent',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
      <Stack
        direction="row"
        spacing={8}
        sx={{
          width: 'fit-content',
          animation: `${marqueeAnimation} 20s linear infinite`,
        }}>
        {extendedItems.map((item, index) => (
          <Stack direction="row" alignItems="center" spacing={2} key={index}>
            <Box sx={{ width: '8px', height: '8px', backgroundColor: 'rgba(8, 70, 59, 1)', borderRadius: '50%' }} />
            <Typography
              variant="body2"
              sx={{
                fontFamily: "'Orbitron', sans-serif",
                color: 'rgba(255, 255, 255, 0.7)',
                whiteSpace: 'nowrap',
              }}>
              {item}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

// ==============
// Hauptkomponente: HeroSection
// ==============
const HeroSection: FC<HeroSectionProps> = ({ aboutMeRef, skillsRef, projectsRef, contactRef }) => {
  const { t, i18n } = useTranslation();

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const setLanguage = async (lang: string) => {
    await i18n.changeLanguage(lang);
  };

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
      {/* Header / Navbar */}
      <Box
        component="header"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: { xs: 2, md: 4 },
        }}>
        {/* Linke Seite: Navigation */}
        <Stack direction="row" spacing={3} alignItems="center">
          <Stack
            direction="row"
            spacing={1}
            sx={{ border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', p: '4px' }}>
            <Button
              size="small"
              onClick={() => setLanguage('en')}
              sx={
                i18n.language === 'en'
                  ? {
                      color: 'white',
                      borderRadius: '20px',
                      bgcolor: 'rgba(255,255,255,0.2)',
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' },
                    }
                  : {
                      color: 'rgba(255,255,255,0.7)',
                      borderRadius: '20px',
                      '&:hover': { bgcolor: 'rgba(255,255,0.1)' },
                    }
              }>
              EN
            </Button>
            <Button
              size="small"
              onClick={() => setLanguage('de')}
              sx={
                i18n.language === 'de'
                  ? {
                      color: 'white',
                      borderRadius: '20px',
                      bgcolor: 'rgba(255,255,255,0.2)',
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' },
                    }
                  : {
                      color: 'rgba(255,255,255,0.7)',
                      borderRadius: '20px',
                      '&:hover': { bgcolor: 'rgba(255,255,0.1)' },
                    }
              }>
              DE
            </Button>
          </Stack>
          <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={() => scrollToSection(aboutMeRef)}
              color="inherit"
              sx={{ textTransform: 'none', fontFamily: "'Orbitron', sans-serif", fontSize: '1rem' }}>
              {t('hero-section.about')}
            </Button>
            <Button
              onClick={() => scrollToSection(skillsRef)}
              color="inherit"
              sx={{ textTransform: 'none', fontFamily: "'Orbitron', sans-serif", fontSize: '1rem' }}>
              {t('hero-section.skills')}
            </Button>
            <Button
              onClick={() => scrollToSection(projectsRef)}
              color="inherit"
              sx={{ textTransform: 'none', fontFamily: "'Orbitron', sans-serif", fontSize: '1rem' }}>
              {t('hero-section.projects')}
            </Button>
          </Stack>
        </Stack>

        {/* Rechte Seite: Logo & Name */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Logo />
          <Typography variant="h6" sx={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 'medium' }}>
            Marco Loch
          </Typography>
        </Stack>
      </Box>

      {/* Zentraler Inhalt */}
      <Box sx={{ textAlign: 'center', zIndex: 1 }}>
        <Typography
          sx={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: { xs: '0.9rem', md: '1.1rem' },
            letterSpacing: '0.1em',
            color: 'rgba(255, 255, 255, 0.8)',
            mb: 2,
          }}>
          {t('hero-section.frontenddev')}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 700,
            fontSize: { xs: '3.5rem', sm: '5rem', md: '7rem' },
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            mb: 4,
          }}>
          Marco Loch
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button
            variant="outlined"
            size="large"
            onClick={() => scrollToSection(projectsRef)}
            sx={{
              color: 'white',
              borderColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '50px',
              px: 4,
              py: 1.5,
              fontFamily: "'Orbitron', sans-serif",
              textTransform: 'none',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}>
            {t('hero-section.check-my-work')}
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              color: 'white',
              borderColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '50px',
              px: 4,
              py: 1.5,
              fontFamily: "'Orbitron', sans-serif",
              textTransform: 'none',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}>
            {t('hero-section.contact')}
          </Button>
        </Stack>
      </Box>

      {/* Linke vertikale Linie */}
      <Box
        sx={{
          position: 'absolute',
          left: { xs: '20px', md: '40px' },
          top: '50%',
          transform: 'translateY(-50%)',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          color: 'rgba(255,255,255,0.5)',
        }}>
        <Box
          sx={{
            width: '1px',
            height: '100px',
            bgcolor: 'currentColor',
            mb: 2,
          }}
        />
        <ArrowDownwardIcon />
        <Box
          sx={{
            width: '1px',
            height: '100px',
            bgcolor: 'currentColor',
            mt: 2,
          }}
        />
      </Box>

      {/* Rechte vertikale Linie (Socials) */}
      <Stack
        spacing={3}
        alignItems="center"
        sx={{
          position: 'absolute',
          right: { xs: '20px', md: '40px' },
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'rgba(255, 255, 255, 0.7)',
          display: { xs: 'none', md: 'flex' },
        }}>
        <Typography
          sx={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            fontFamily: "'Fira Code', monospace",
            fontSize: '0.9rem',
            letterSpacing: '0.1em',
            '&:hover': {
              color: 'white',
            },
          }}>
          marco.loch@email.com
        </Typography>
        <Box sx={{ width: '1px', height: '50px', bgcolor: 'currentColor' }} />
        <GitHubIcon />
        <LinkedInIcon />
      </Stack>

      {/* Ticker am unteren Rand */}
      <Ticker />
    </Box>
  );
};

export default HeroSection;
