import type { FC } from 'react';
import { Box, Stack } from '@mui/material';
import ContactInfo from '../components/Contact_Info';
import ContactForm from '../components/Contact_Form';

const ContactSection: FC = () => {
  return (
    <Box
      id="contact-section"
      sx={{
        backgroundColor: 'rgba(28, 28, 28, 1)',
        color: '#FFFFFF',
        py: { xs: 6, md: 12 },
        px: { xs: 2, md: 4 },
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '100%',
      }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={8} maxWidth="lg" mx="auto">
        {/* Left Column */}
        <ContactInfo />

        {/* Right Column: Contact Form */}
        <ContactForm />
      </Stack>
    </Box>
  );
};

export default ContactSection;
