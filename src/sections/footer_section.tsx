import React from 'react';
import { Box, Typography, Stack, Link as MuiLink } from '@mui/material';
import { Link as TanstackLink } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';

import Logo from '../components/Logo';
import { footerLinks } from '../data/footer-links';

const Footer: React.FC = () => {
  const accentColor = 'rgba(21, 120, 102, 1)';
  const linkColor = 'rgba(255, 255, 255, 0.7)';
  const { t } = useTranslation();

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
          <Logo />
          <Typography
            variant="body2"
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              color: linkColor,
              mt: 1,
            }}>
            {t('footer-section.webdev')}
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "'Orbitron', sans-serif", color: linkColor }}>
            {t('footer-section.location')}
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
          {footerLinks.map(link => {
            const linkText = link.translationKey ? t(link.translationKey) : link.text;

            return link.isExternal ? (
              <MuiLink
                key={link.id}
                href={link.href}
                color="inherit"
                underline="none"
                sx={{ fontFamily: "'Orbitron', sans-serif", color: linkColor, '&:hover': { color: 'white' } }}>
                {linkText}
              </MuiLink>
            ) : (
              <TanstackLink key={link.id} to={link.href} style={{ textDecoration: 'none' }}>
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "'Orbitron', sans-serif", color: linkColor, '&:hover': { color: 'white' } }}>
                  {linkText}
                </Typography>
              </TanstackLink>
            );
          })}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
