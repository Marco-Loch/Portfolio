import { Grid } from '@mui/material';
import type { FC } from 'react';
import { skills } from '../data/skills';
import SkillCard from './Skill_Card';

const SkillsGrid: FC = () => {
  return (
    <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
      {skills.map(skill => (
        <Grid size={{ xs: 4, sm: 3, md: 4 }} key={skill.id}>
          <SkillCard skill={skill} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SkillsGrid;
