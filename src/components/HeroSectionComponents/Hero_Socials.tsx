import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { GitHubLink, LinkedInLink } from '../Icons';

const HeroSocials: React.FC = () => {
  return (
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
  );
};

export default HeroSocials;
