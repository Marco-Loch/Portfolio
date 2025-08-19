import { createFileRoute } from '@tanstack/react-router';
import { Box, Typography, Container } from '@mui/material';

function ImpressumPage() {
  return (
    <Container sx={{ color: 'white', py: 10 }}>
      <Typography variant="h2">Privacy Policy</Typography>
      <Typography sx={{ mt: 2 }}>Hier kommen deine Daten hin.</Typography>
    </Container>
  );
}

export const Route = createFileRoute('/privacy_policy')({
  component: ImpressumPage,
});
