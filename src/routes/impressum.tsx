import { createFileRoute } from '@tanstack/react-router';
import { Box, Typography, Container } from '@mui/material';

function ImpressumPage() {
    return (
        <Container sx={{ color: 'white', py: 10 }}>
            <Typography variant="h2">Impressum</Typography>
            <Typography sx={{ mt: 2 }}>Hier kommen deine Impressums-Daten hin.</Typography>
        </Container>
    )
}

export const Route = createFileRoute('/impressum')({
  component: ImpressumPage,
});