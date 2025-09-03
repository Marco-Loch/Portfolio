import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import type { ProjectCardTechStackProps } from '../../types/project_card_type'; // Korrekter Import

const ProjectCardTechStack: React.FC<ProjectCardTechStackProps> = ({ technologies }) => (
  <Stack direction="row" spacing={1} flexWrap="wrap">
    {technologies.map(tech => (
      <Stack key={tech.id} direction="row" alignItems="center" spacing={0.5}>
        <Box component="img" src={tech.icon} alt={tech.name} sx={{ width: 24, height: 24 }} />
        <Typography variant="body2" sx={{ fontFamily: "'Orbitron', sans-serif", color: 'white' }}>
          {tech.name}
        </Typography>
      </Stack>
    ))}
  </Stack>
);

export default ProjectCardTechStack;
