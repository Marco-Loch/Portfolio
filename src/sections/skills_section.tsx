import { Box, Grid } from '@mui/material';
import type { FC } from 'react';
import SkillsInfobox from '../components/Skills_Infobox';
import SkillsGrid from '../components/Skills_Grid';

const SkillsSection: FC = () => {
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
      <Grid container spacing={{ xs: 4, md: 8 }} maxWidth="lg" alignItems="center">
        {/* Linke Spalte: Die Infobox */}
        <Grid size={{ xs: 12, md: 6 }}>
          <SkillsInfobox accentColor={accentColor} />
        </Grid>

        {/* Rechte Spalte: Das Skill-Grid */}
        <Grid size={{ xs: 12, md: 6 }}>
          <SkillsGrid />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillsSection;
