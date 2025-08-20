import type { FC } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ContactInfo: FC = () => {
  const { t } = useTranslation();
  const accentColor = 'rgba(21, 120, 102, 1)';
  const orbitron = "'Orbitron', sans-serif";

  return (
    <Stack direction="column" spacing={2} sx={{ flex: 1, pr: { md: 8 } }}>
      <Typography variant="h6" sx={{ fontFamily: orbitron, color: accentColor, fontWeight: 'bold', mb: 1 }}>
        {t('contact-section.contact-me')}
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontFamily: orbitron,
          fontWeight: 'bold',
          color: 'white',
          fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
          lineHeight: 1.1,
        }}>
        {t('contact-section.headline')}
      </Typography>
      <Typography variant="h5" sx={{ fontFamily: orbitron, color: 'white', mt: 4 }}>
        {t('contact-section.question')}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: orbitron, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
        {t('contact-section.text')}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: orbitron, color: 'rgba(255, 255, 255, 0.7)' }}>
        {t('contact-section.ending-intro')}{' '}
        <Box component="span" sx={{ color: accentColor }}>
          {t('contact-section.ending-outro')}
        </Box>
      </Typography>
    </Stack>
  );
};

export default ContactInfo;
