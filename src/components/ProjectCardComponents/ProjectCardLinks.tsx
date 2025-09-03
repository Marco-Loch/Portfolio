import React from 'react';
import { Stack, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import type { ProjectCardLinksProps } from '../../types/project_card_type'; // Korrekter Import

const ProjectCardLinks: React.FC<ProjectCardLinksProps> = ({ githubLink, liveLink, accentColor }) => (
  <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
    <Button
      variant="outlined"
      size="large"
      startIcon={<GitHubIcon />}
      href={githubLink}
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
      href={liveLink}
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
);

export default ProjectCardLinks;
