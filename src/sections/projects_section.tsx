import React from 'react';
import { Box, Typography, Stack, Grid, Paper, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

// Importiere die Technologie-Icons
import htmlIcon from '../assets/img/thtml.png';
import cssIcon from '../assets/img/tcss.png';
import jsIcon from '../assets/img/tjavascript.png';
import tsIcon from '../assets/img/ttypescript.png';
import angularIcon from '../assets/img/tangular.png';
import firebaseIcon from '../assets/img/tfirebase.png';
import reactIcon from '../assets/img/treact.png';

// Importiere Projektbilder
// Passe die Pfade zu deinen tatsächlichen Bildern an!
import joinProjectImg from '../assets/img/join.png';
import elPolloLocoProjectImg from '../assets/img/crazydog.png';
import daBubbleProjectImg from '../assets/img/evelike.png';

// ==============
// Typdefinitionen
// ==============
interface Technology {
  name: string;
  icon: string;
}

interface Project {
  title: string;
  description: string;
  technologies: Technology[];
  liveLink: string;
  githubLink: string;
  image: string;
}

// Eine Liste aller verfügbaren Technologien für die Projekte
const allTechnologies = {
  html: { name: 'HTML', icon: htmlIcon },
  css: { name: 'CSS', icon: cssIcon },
  js: { name: 'JavaScript', icon: jsIcon },
  ts: { name: 'TypeScript', icon: tsIcon },
  angular: { name: 'Angular', icon: angularIcon },
  firebase: { name: 'Firebase', icon: firebaseIcon },
  react: { name: 'React', icon: reactIcon },
};

// ==============
// Projektdaten
// ==============
const projects: Project[] = [
  {
    title: 'Join',
    description:
      'Eine Projektmanagement-Anwendung im Kanban-Stil. Erstelle und organisiere Aufgaben per Drag-and-Drop, weise sie Nutzern zu und kategorisiere sie.',
    technologies: [
      allTechnologies.angular,
      allTechnologies.ts,
      allTechnologies.html,
      allTechnologies.css,
      allTechnologies.firebase,
    ],
    liveLink: 'https://marco-loch.developerakademie.net/join/index.html',
    githubLink: 'https://github.com/Marco-Loch/join',
    image: joinProjectImg,
  },
  {
    title: 'Crazy Dog',
    description: 'Ein einfaches Jump-and-Run-Spiel, das komplett mit reinem JavaScript entwickelt wurde.',
    technologies: [allTechnologies.html, allTechnologies.css, allTechnologies.js],
    liveLink: 'https://marco-loch.developerakademie.net/CrazyDogEng/index.html',
    githubLink: 'https://github.com/Marco-Loch/2d-Game-DA',
    image: elPolloLocoProjectImg,
  },
  {
    title: 'EVElike',
    description: 'Ein Chat-Messenger, der von Slack inspiriert ist und ähnliche Funktionen bietet.',
    technologies: [allTechnologies.js, allTechnologies.html, allTechnologies.css, allTechnologies.react],
    liveLink: 'https://evelike.onrender.com/',
    githubLink: 'https://github.com/Marco-Loch/EVElike',
    image: daBubbleProjectImg,
  },
];

// ==============
// Wiederverwendbare Komponente für eine einzelne Projektkarte
// ==============
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const accentColor = 'rgba(21, 120, 102, 1)';

  return (
    <Paper
      sx={{
        background:
          'linear-gradient(-130deg, rgba(8, 70, 59, 1) 0%, rgba(27, 27, 27, 1) 50%, rgba(28, 28, 28, 1) 100%)',
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
              {project.description}
            </Typography>

            {/* Technologie-Icons */}
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {project.technologies.map((tech, index) => (
                <Stack key={index} direction="row" alignItems="center" spacing={0.5}>
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

// ==============
// Hauptkomponente: ProjectsSection
// ==============
const ProjectsSection: React.FC = () => {
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
        minHeight: '100vh',
      }}>
      <Grid container spacing={{ xs: 6, md: 8 }} maxWidth="lg">
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
            Featured Projects
          </Typography>
        </Grid>
        {projects.map((project, index) => (
          <Grid size={{ xs: 12 }} key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsSection;
