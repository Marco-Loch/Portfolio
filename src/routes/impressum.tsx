import { createFileRoute } from '@tanstack/react-router';
import { Box, Typography, Container, Link as MuiLink } from '@mui/material';
import { useTranslation } from 'react-i18next';

function ImpressumPage() {
  const { t } = useTranslation();
  const accentColor = 'rgba(21, 120, 102, 1)';
  const orbitron = "'Orbitron', sans-serif";

  return (
    <Container sx={{ color: 'white', py: 10 }}>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          fontFamily: orbitron,
          color: accentColor,
          fontWeight: 'bold',
          mb: 4,
        }}>
        {t('imprint-page.title')}
      </Typography>

      <Box component="section" sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontFamily: orbitron,
            color: 'white',
            fontWeight: 'bold',
            mb: 2,
          }}>
          {t('imprint-page.section1-title')}
        </Typography>

        <Typography variant="body1" sx={{ color: 'white' }}>
          Marco Loch
          <br />
          Ingersheimer Hauptstraße 1,
          <br />
          74564 Crailsheim
        </Typography>
      </Box>

      <Box component="section">
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontFamily: orbitron,
            color: 'white',
            fontWeight: 'bold',
            mb: 2,
          }}>
          {t('imprint-page.contact-title')}
        </Typography>

        <Typography variant="body1" sx={{ color: 'white' }}>
          E-Mail:{' '}
          <MuiLink href="mailto:cn_macro@web.de" color={accentColor}>
            cn_macro@web.de
          </MuiLink>
        </Typography>
      </Box>
    </Container>
  );
}

export const Route = createFileRoute('/impressum')({
  component: ImpressumPage,
});
