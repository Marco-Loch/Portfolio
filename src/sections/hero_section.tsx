import type { FC, RefObject } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Ticker from '../components/Ticker';
import HeroNav from '../components/Hero_Nav';
import { ArrowDownwardIcon, GitHubLink, LinkedInLink } from '../components/Icons';
import { useContext } from 'react';
import ScrollContext from '../context/Scroll_Context';

const HeroSection: FC = () => {
  const { t } = useTranslation();
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
            onClick={() => scrollToSection(contactRef)}
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
        <Box sx={{ width: '1px', height: '100px', bgcolor: 'currentColor', mb: 2 }} />
        <ArrowDownwardIcon />
        <Box sx={{ width: '1px', height: '100px', bgcolor: 'currentColor', mt: 2 }} />
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
          mail@marco-loch.de
        </Typography>
        <Box sx={{ width: '1px', height: '50px', bgcolor: 'currentColor' }} />
        <GitHubLink />
        <LinkedInLink />
      </Stack>

      {/* Ticker am unteren Rand */}
      <Ticker />
    </Box>
  );
};

export default HeroSection;
