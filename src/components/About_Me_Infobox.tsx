import React from 'react';
import { Box, Typography, Stack, Paper } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import { useTranslation } from 'react-i18next';
import type { FC } from 'react';

interface AboutPoint {
  id: string;
  icon: React.ElementType;
  text: string;
}

interface AboutMeInfoboxProps {
  accentColor: string;
}

const AboutMeInfobox: FC<AboutMeInfoboxProps> = ({ accentColor }) => {
  const { t } = useTranslation();

  const aboutPoints: AboutPoint[] = [
    {
      id: 'location',
      icon: LocationOnOutlinedIcon,
      text: t('about-me-section.textbox.location'),
    },
    {
      id: 'mindset',
      icon: AutoAwesomeOutlinedIcon,
      text: t('about-me-section.textbox.growth-mindset'),
    },
    {
      id: 'solving',
      icon: PsychologyOutlinedIcon,
      text: t('about-me-section.textbox.problem-solving'),
    },
  ];

  return (
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
          {aboutPoints.map(point => (
            <Stack direction="row" spacing={2} key={point.id} alignItems="flex-start">
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
  );
};

export default AboutMeInfobox;
