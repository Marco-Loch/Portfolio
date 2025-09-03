import React from 'react';
import { Typography, Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { HeroMainContentProps } from '../../types/hero_section_type';

const HeroMainContent: React.FC<HeroMainContentProps> = ({ projectsRef, contactRef, scrollToSection }) => {
  const { t } = useTranslation();

  return (
    <Stack sx={{ textAlign: 'center', zIndex: 1 }} spacing={4}>
      <Typography
        sx={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: { xs: '0.9rem', md: '1.1rem' },
          letterSpacing: '0.1em',
          color: 'rgba(255, 255, 255, 0.8)',
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
    </Stack>
  );
};

export default HeroMainContent;
