import { Box, Stack } from '@mui/material';
import type { FC } from 'react';
import type { Skill } from '../data/skills';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: FC<SkillCardProps> = ({ skill }) => (
  <Stack
    direction="column"
    alignItems="center"
    spacing={1}
    sx={{
      p: 2,
      borderRadius: '8px',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
      },
      transition: 'background-color 0.3s ease',
    }}>
    <Box
      component="img"
      src={skill.icon}
      alt={skill.name}
      sx={{
        width: { xs: 70, sm: 80, md: 90 },
        height: { xs: 70, sm: 80, md: 90 },
        objectFit: 'contain',
      }}
    />
  </Stack>
);

export default SkillCard;
