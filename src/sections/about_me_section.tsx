import React from 'react';
import { Box, Typography, Stack, Paper, Grid } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';

import { useTranslation } from 'react-i18next';

// ==============
// Typdefinition für die Listeneinträge
// ==============
interface AboutPoint {
  icon: React.ElementType;
  text: string;
}

// ==============
// Hauptkomponente
// ==============
const AboutMeSection = () => {
  const { t } = useTranslation();

  const accentColor = 'rgba(21, 120, 102, 1)';

  const aboutPoints: AboutPoint[] = [
    {
      icon: LocationOnOutlinedIcon,
      text: t('about-me-section.textbox.location'),
    },
    {
      icon: AutoAwesomeOutlinedIcon,
      text: t('about-me-section.textbox.growth-mindset'),
    },
    {
      icon: PsychologyOutlinedIcon,
      text: t('about-me-section.textbox.problem-solving'),
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(28, 28, 28, 1)',
        color: '#FFFFFF',
        py: { xs: 6, md: 12 },
        px: { xs: 2, md: 4 },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Grid container spacing={{ xs: 4, md: 8 }} maxWidth="lg">
        {/* Linke Spalte */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src="https://placehold.co/600x750/2a2a2a/ffffff?text=Dein+Bild+hier"
            alt="Ein Bild von Marco Loch"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '16px',
              objectFit: 'cover',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            }}
          />
        </Grid>

        {/* Rechte Spalte */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Orbitron', sans-serif",
                color: accentColor,
                fontWeight: 'bold',
                mb: 1,
              }}>
              {t('about-me-section.who-am-i')}
            </Typography>

            <Paper
              elevation={0}
              sx={{
                border: `2px solid ${accentColor}`,
                borderRadius: '16px',
                p: 4,
                backgroundColor: 'rgba(8, 70, 59, 0.6)',
                // boxShadow: `0 8px 24px ${boxShadowColor}`,
              }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: 'bold',
                  color: accentColor,
                  mb: 4,
                }}>
                {t('about-me-section.textbox.headline')}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Orbitron', sans-serif",
                  color: 'rgba(255, 255, 255, 0.8)',
                  mb: 4,
                }}>
                {t('about-me-section.textbox.introduction')}
              </Typography>

              <Stack spacing={3}>
                {aboutPoints.map((point, index) => (
                  <Stack direction="row" spacing={2} key={index} alignItems="flex-start">
                    <Box sx={{ color: accentColor, mt: '4px' }}>
                      <point.icon />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "'Orbitron', sans-serif",
                        color: 'rgba(255, 255, 255, 0.7)',
                      }}>
                      {point.text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMeSection;
