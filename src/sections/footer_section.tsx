import React from 'react';
import { Box, Typography, Link, Stack, Divider } from '@mui/material';

import LogoImage from '../assets/img/faviconML.png';

const Footer: React.FC = () => {
  const accentColor = 'rgba(21, 120, 102, 1)';
  const linkColor = 'rgba(255, 255, 255, 0.7)';

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(0deg, rgba(8, 70, 59, 1) 0%, rgba(28, 28, 28, 1) 50%, rgba(28, 28, 28, 1) 100%)',
        color: '#FFFFFF',
        py: { xs: 6, md: 8 },
        px: { xs: 2, md: 4 },
      }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'center', md: 'flex-start' }}
        spacing={4}>
        {/* Linke Seite: Logo, Beruf und Standort */}
        <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
          <Box component="img" src={LogoImage} alt="Lukas Müller Logo" sx={{ width: 40, height: 40, mb: 1 }} />
          <Typography
            variant="body2"
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              color: linkColor,
              mt: 1,
            }}>
            Web Developer
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "'Orbitron', sans-serif", color: linkColor }}>
            Crailsheim Germany
          </Typography>
        </Stack>

        {/* Mittlerer Teil: Copyright */}
        <Box sx={{ my: { xs: 2, md: 0 } }}>
          <Typography
            variant="body2"
            align="center"
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              color: accentColor,
            }}>
            © Marco Loch 2025
          </Typography>
        </Box>

        {/* Rechte Seite: Links */}
        <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-end' }}>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{ fontFamily: "'Orbitron', sans-serif", color: linkColor, '&:hover': { color: 'white' } }}>
            Github
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{ fontFamily: "'Orbitron', sans-serif", color: linkColor, '&:hover': { color: 'white' } }}>
            Linkedin
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{ fontFamily: "'Orbitron', sans-serif", color: linkColor, '&:hover': { color: 'white' } }}>
            Email
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{ fontFamily: "'Orbitron', sans-serif", color: linkColor, '&:hover': { color: 'white' } }}>
            Legal Notice
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
