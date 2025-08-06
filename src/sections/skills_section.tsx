import React from 'react';
import { Box, Typography, Stack, Paper, Grid, Button } from '@mui/material';

import htmlIcon from '../assets/img/html.png';
import cssIcon from '../assets/img/css.png';
import jsIcon from '../assets/img/javascript.png';
import materialDesignIcon from '../assets/img/materialdesign.png';
import typescriptIcon from '../assets/img/typescript.png';
import angularIcon from '../assets/img/angular.png';
import firebaseIcon from '../assets/img/firebase.png';
import gitIcon from '../assets/img/git.png';
import restApiIcon from '../assets/img/restapi.png';
import scrumIcon from '../assets/img/scrum.png';
import growthMindsetIcon from '../assets/img/growthmindset.png';

// ==============
// Typdefinition für einen Skill
// ==============
interface Skill {
  name: string;
  icon: string;
}

// ==============
// Daten für die Skills
// ==============
const skills: Skill[] = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'Material Design', icon: materialDesignIcon },
  { name: 'TypeScript', icon: typescriptIcon },
  { name: 'Angular', icon: angularIcon },
  { name: 'Firebase', icon: firebaseIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'REST-API', icon: restApiIcon },
  { name: 'Scrum', icon: scrumIcon },
  { name: 'Growth mindset', icon: growthMindsetIcon },
];

// ==============
// SkillCard Komponente für einzelne Skills
// ==============
interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => (
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

// ==============
// Hauptkomponente: SkillsSection
// ==============
const SkillsSection: React.FC = () => {
  const accentColor = 'rgba(21, 120, 102, 1)';
  // const boxShadowColor = 'rgba(8, 70, 59, 0.5)';

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
        {/* Linke Spalte: Beschreibung der Skills */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Orbitron', sans-serif",
                color: accentColor,
                fontWeight: 'bold',
                mb: 1,
              }}>
              Technologies
            </Typography>

            <Paper
              elevation={0}
              sx={{
                border: `2px solid ${accentColor}`,
                borderRadius: '16px',
                p: { xs: 3, sm: 4 },
                backgroundColor: 'rgba(8, 70, 59, 0.6)',
                // boxShadow: `0 8px 24px ${boxShadowColor}`,
              }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: 'bold',
                  color: 'white',
                  mb: 3,
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                }}>
                Skill Set
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Orbitron', sans-serif",
                  color: 'rgba(255, 255, 255, 0.8)',
                  mb: 4,
                  lineHeight: 1.6,
                }}>
                A short introduction of your skills. Highlight your experience of using different front-end technologies
                and emphasise your openness to learning and adapting to new technologies. Show how important it is for
                you to keep up with the rapid changes in web development.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: 'bold',
                  color: 'white',
                  mb: 2,
                }}>
                You need another skill?
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontFamily: "'Orbitron', sans-serif",
                  color: 'rgba(255, 255, 255, 0.7)',
                  mb: 4,
                }}>
                Feel free to contact me. I look forward to expanding on my previous knowledge.
              </Typography>

              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: 'white',
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  borderRadius: '50px',
                  px: 4,
                  py: 1.5,
                  fontFamily: "'Orbitron', sans-serif",
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}>
                Let's Talk
              </Button>
            </Paper>
          </Box>
        </Grid>

        {/* Rechte Spalte: Skill Icons */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
            {skills.map((skill, index) => (
              <Grid size={{ xs: 4, sm: 3, md: 4 }} key={index}>
                <SkillCard skill={skill} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillsSection;
