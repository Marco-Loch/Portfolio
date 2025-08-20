import { Box, Grid } from '@mui/material';
import AboutMeInfobox from '../components/AboutMeInfobox';
import AboutMeImage from '../components/AboutMeImage';

const AboutMeSection = () => {
  const accentColor = 'rgba(21, 120, 102, 1)';

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
        {/* Linke Spalte mit dem Bild */}
        <Grid size={{ xs: 12, md: 6 }}>
          <AboutMeImage />
        </Grid>

        {/* Rechte Spalte mit der Infobox */}
        <Grid size={{ xs: 12, md: 6 }}>
          <AboutMeInfobox accentColor={accentColor} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMeSection;
