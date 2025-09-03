import { Paper, Stack, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { FC } from 'react';

import type { ProjectCardProps } from '../types/project_type';
import ProjectCardHeader from './ProjectCardComponents/ProjectCardHeader';
import ProjectCardTechStack from './ProjectCardComponents/ProjectCardTechStack';
import ProjectCardLinks from './ProjectCardComponents/ProjectCardLinks';
import ProjectCardImage from './ProjectCardComponents/ProjectCardImage';

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation();
  const description = t(`project-section.projects.${project.translationKey}.description`);
  const accentColor = 'rgba(21, 120, 102, 1)';

  return (
    <Paper
      sx={{
        background: 'linear-gradient(-130deg, rgba(8, 70, 59, 1) 0%, rgba(5, 43, 36, 1) 50%, rgba(3, 25, 20, 1) 100%)',
        color: '#FFFFFF',
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
        p: { xs: 3, md: 5 },
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {/* Linke Spalte */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={2} sx={{ height: '100%' }}>
            <ProjectCardHeader title={project.title} description={description} accentColor={accentColor} />
            <ProjectCardTechStack technologies={project.technologies} />
            <ProjectCardLinks githubLink={project.githubLink} liveLink={project.liveLink} accentColor={accentColor} />
          </Stack>
        </Grid>

        {/* Rechte Spalte */}
        <Grid size={{ xs: 12, md: 6 }}>
          <ProjectCardImage imageSrc={project.image} title={project.title} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProjectCard;
