import { Box, Typography, Stack, Grid, Paper, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import { useTranslation } from 'react-i18next';
import type { FC } from 'react';

import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

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
        {/* Linke Spalte: Projektbeschreibung und Links */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={2} sx={{ height: '100%' }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: 'bold',
                color: accentColor,
                fontSize: { xs: '2rem', md: '2.5rem' },
              }}>
              {project.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Orbitron', sans-serif",
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.6,
                flexGrow: 1,
              }}>
              {description}
            </Typography>

            {/* Technologie-Icons */}
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {project.technologies.map(tech => (
                <Stack key={tech.id} direction="row" alignItems="center" spacing={0.5}>
                  <Box component="img" src={tech.icon} alt={tech.name} sx={{ width: 24, height: 24 }} />
                  <Typography variant="body2" sx={{ fontFamily: "'Orbitron', sans-serif", color: 'white' }}>
                    {tech.name}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            {/* Buttons für GitHub und Live-Test */}
            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
              <Button
                variant="outlined"
                size="large"
                startIcon={<GitHubIcon />}
                href={project.githubLink}
                target="_blank"
                sx={{
                  color: 'white',
                  borderColor: accentColor,
                  borderRadius: '50px',
                  fontFamily: "'Orbitron', sans-serif",
                  textTransform: 'none',
                }}>
                GitHub
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<LinkIcon />}
                href={project.liveLink}
                target="_blank"
                sx={{
                  color: 'white',
                  borderColor: accentColor,
                  borderRadius: '50px',
                  fontFamily: "'Orbitron', sans-serif",
                  textTransform: 'none',
                }}>
                Live Test
              </Button>
            </Stack>
          </Stack>
        </Grid>

        {/* Rechte Spalte: Projektbild */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '16px',
              objectFit: 'cover',
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProjectCard;
