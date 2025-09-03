import React from 'react';
import { Typography, Stack } from '@mui/material';
import type { ProjectCardHeaderProps } from '../../types/project_card_type';

const ProjectCardHeader: React.FC<ProjectCardHeaderProps> = ({ title, description, accentColor }) => (
  <Stack spacing={2}>
    <Typography
      variant="h3"
      sx={{
        fontFamily: "'Orbitron', sans-serif",
        fontWeight: 'bold',
        color: accentColor,
        fontSize: { xs: '2rem', md: '2.5rem' },
      }}>
      {title}
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
  </Stack>
);

export default ProjectCardHeader;
