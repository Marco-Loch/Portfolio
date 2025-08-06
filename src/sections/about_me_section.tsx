import React from 'react';
import { Box, Typography, Stack, Paper, Grid } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';

// ==============
// Typdefinition für die Listeneinträge
// ==============
interface AboutPoint {
  icon: React.ElementType;
  text: string;
}

// ==============
// Daten für die "Über mich"-Punkte
// ==============
const aboutPoints: AboutPoint[] = [
  {
    icon: LocationOnOutlinedIcon,
    text: 'Wo bist du ansässig? Wärst du offen für Remote-Arbeit oder einen möglichen Umzug?',
  },
  {
    icon: AutoAwesomeOutlinedIcon,
    text: 'Zeige, dass du aufgeschlossen bist. Bist du begeistert davon, neue Technologien zu lernen und deine Fähigkeiten kontinuierlich zu verbessern?',
  },
  {
    icon: PsychologyOutlinedIcon,
    text: 'Eine kurze Beschreibung deines Ansatzes zur Problemlösung. Lernst du aus jeder Herausforderung, während du nach der effizientesten oder elegantesten Lösung suchst?',
  },
];

// ==============
// Hauptkomponente
// ==============
const AboutMeSection = () => {
  const accentColor = 'rgba(21, 120, 102, 1)';
  // const boxShadowColor = 'rgba(8, 70, 59, 0.5)';  //eventuell benutzen

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
      <Grid container spacing={{ xs: 4, md: 8 }} maxWidth="lg">
        {/* Linke Spalte */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            component="img"
            src="https://placehold.co/600x750/2a2a2a/ffffff?text=Dein+Bild+hier"
            alt="Ein Bild von Marco Loch"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '16px',
              objectFit: 'cover',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            }}
          />
        </Grid>

        {/* Rechte Spalte */}
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
              Who I Am
            </Typography>

            <Paper
              elevation={0}
              sx={{
                border: `2px solid ${accentColor}`,
                borderRadius: '16px',
                p: 4,
                backgroundColor: 'rgba(8, 70, 59, 0.6)',
                // boxShadow: `0 8px 24px ${boxShadowColor}`,
              }}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: 'bold',
                  color: accentColor,
                  mb: 4,
                }}>
                About me
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Orbitron', sans-serif",
                  color: 'rgba(255, 255, 255, 0.8)',
                  mb: 4,
                }}>
                Hey, ich bin Marco! Hier kannst du etwas über dich und deine Leidenschaft für IT und Programmierung
                schreiben. Was ist deine Inspirationsquelle, um deine Fähigkeiten zu verbessern?
              </Typography>

              <Stack spacing={3}>
                {aboutPoints.map((point, index) => (
                  <Stack direction="row" spacing={2} key={index} alignItems="flex-start">
                    <Box sx={{ color: accentColor, mt: '4px' }}>
                      <point.icon />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "'Orbitron', sans-serif",
                        color: 'rgba(255, 255, 255, 0.7)',
                      }}>
                      {point.text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMeSection;
