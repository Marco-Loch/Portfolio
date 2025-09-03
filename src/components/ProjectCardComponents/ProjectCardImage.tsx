import React from 'react';
import { Box } from '@mui/material';
import type { ProjectCardImageProps } from '../../types/project_card_type'; // Korrekter Import

const ProjectCardImage: React.FC<ProjectCardImageProps> = ({ imageSrc, title }) => (
  <Box
    component="img"
    src={imageSrc}
    alt={`Screenshot of ${title}`}
    sx={{
      width: '100%',
      height: 'auto',
      borderRadius: '16px',
      objectFit: 'cover',
    }}
  />
);

export default ProjectCardImage;
