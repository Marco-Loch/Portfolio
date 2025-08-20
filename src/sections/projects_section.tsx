import { Box, Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { FC } from 'react';

import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects'; // Nur die Daten importieren

const ProjectsSection: FC = () => {
  const { t } = useTranslation();
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
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100%',
      }}>
      <Grid container spacing={{ xs: 6, md: 8 }} maxWidth="lg">
        {/* Sektions-Überschriften */}
        <Grid size={{ xs: 12 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              color: accentColor,
              fontWeight: 'bold',
              mb: 1,
            }}>
            Portfolio
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 'bold',
              color: 'white',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              mb: 6,
            }}>
            {t('project-section.headline')}
          </Typography>
        </Grid>
        {/* Projektkarten */}
        {projects.map(project => (
          <Grid size={{ xs: 12 }} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsSection;
