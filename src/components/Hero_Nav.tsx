import type { FC } from 'react';
import { Box, Stack, Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import { useContext } from 'react';
import ScrollContext from '../context/Scroll_Context';

const HeroNav: FC = () => {
  const { t, i18n } = useTranslation();
  const { aboutMeRef, skillsRef, projectsRef, scrollToSection } = useContext(ScrollContext);

  const setLanguage = async (lang: string) => {
    await i18n.changeLanguage(lang);
  };

  const navLinks = [
    { label: t('hero-section.about'), ref: aboutMeRef },
    { label: t('hero-section.skills'), ref: skillsRef },
    { label: t('hero-section.projects'), ref: projectsRef },
  ];

  return (
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
        {/* Sprachauswahl */}
        <Stack
          direction="row"
          spacing={1}
          sx={{ border: '1px solid rgba(255,255,255,0.3)', borderRadius: '20px', p: '4px' }}>
          <Button
            size="small"
            onClick={() => setLanguage('en')}
            sx={
              i18n.language === 'en'
                ? { color: 'white', borderRadius: '20px', bgcolor: 'rgba(255,255,255,0.2)' }
                : { color: 'rgba(255,255,255,0.7)', borderRadius: '20px' }
            }>
            EN
          </Button>
          <Button
            size="small"
            onClick={() => setLanguage('de')}
            sx={
              i18n.language === 'de'
                ? { color: 'white', borderRadius: '20px', bgcolor: 'rgba(255,255,255,0.2)' }
                : { color: 'rgba(255,255,255,0.7)', borderRadius: '20px' }
            }>
            DE
          </Button>
        </Stack>

        {/* Navigationslinks */}
        <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navLinks.map(link => (
            <Button
              key={link.label}
              onClick={() => scrollToSection(link.ref)}
              color="inherit"
              sx={{ textTransform: 'none', fontFamily: "'Orbitron', sans-serif", fontSize: '1rem' }}>
              {link.label}
            </Button>
          ))}
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
  );
};

export default HeroNav;
