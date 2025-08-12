import type { FC } from 'react';
import { Box, Typography, Stack, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';

import { useTranslation } from 'react-i18next';

const ContactSection: FC = () => {
  const { t } = useTranslation();

  const accentColor = 'rgba(21, 120, 102, 1)';
  const borderColor = 'rgba(255, 255, 255, 0.2)';

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
        {/* Left Column: Title and Description */}
        <Stack direction="column" spacing={2} sx={{ flex: 1, pr: { md: 8 } }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              color: accentColor,
              fontWeight: 'bold',
              mb: 1,
            }}>
            {t('contact-section.contact-me')}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 'bold',
              color: 'white',
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
              lineHeight: 1.1,
            }}>
            {t('contact-section.headline')}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              color: 'white',
              mt: 4,
            }}>
            {t('contact-section.question')}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.6,
            }}>
            {t('contact-section.text')}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              color: 'rgba(255, 255, 255, 0.7)',
            }}>
            {t('contact-section.ending-intro')}{' '}
            <Box component="span" sx={{ color: accentColor }}>
              {t('contact-section.ending-outro')}
            </Box>
          </Typography>
        </Stack>

        {/* Right Column: Contact Form */}
        <Box component="form" sx={{ flex: 1, minWidth: { md: 400 } }}>
          <Stack spacing={4}>
            {/* What's your name? */}
            <Stack spacing={0.5}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: 'medium',
                  color: accentColor,
                }}>
                {t('contact-section.input.name')}
              </Typography>
              <TextField
                variant="standard"
                placeholder={t('contact-section.placeholder.name')}
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    fontFamily: "'Orbitron', sans-serif",
                    color: 'rgba(255, 255, 255, 0.7)',
                    borderBottom: `1px solid ${borderColor}`,
                  },
                }}
              />
            </Stack>

            {/* What's your email? */}
            <Stack spacing={0.5}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: 'medium',
                  color: accentColor,
                }}>
                {t('contact-section.input.email')}
              </Typography>
              <TextField
                variant="standard"
                placeholder={t('contact-section.placeholder.email')}
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    fontFamily: "'Orbitron', sans-serif",
                    color: 'rgba(255, 255, 255, 0.7)',
                    borderBottom: `1px solid ${borderColor}`,
                  },
                }}
              />
            </Stack>

            {/* How can I help you? */}
            <Stack spacing={0.5}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: 'medium',
                  color: accentColor,
                }}>
                {t('contact-section.input.subject')}
              </Typography>
              <TextField
                variant="standard"
                multiline
                rows={4}
                placeholder={t('contact-section.placeholder.subject')}
                fullWidth
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    fontFamily: "'Orbitron', sans-serif",
                    color: 'rgba(255, 255, 255, 0.7)',
                    borderBottom: `1px solid ${borderColor}`,
                  },
                }}
              />
            </Stack>

            {/* Privacy Policy Checkbox */}
            <FormControlLabel
              control={<Checkbox sx={{ color: 'white' }} />}
              label={
                <Typography variant="body2" sx={{ fontFamily: "'Orbitron', sans-serif", color: 'white' }}>
                  {t('contact-section.privacy.first')}{' '}
                  <Box component="span" sx={{ color: accentColor }}>
                    {t('contact-section.privacy.second')}
                  </Box>{' '}
                  {t('contact-section.privacy.last')}
                </Typography>
              }
              sx={{ my: 2 }}
            />

            {/* Submit Button */}
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: accentColor,
                color: 'white',
                borderRadius: '50px',
                px: 4,
                py: 1.5,
                fontFamily: "'Orbitron', sans-serif",
                textTransform: 'none',
                alignSelf: 'flex-start',
                '&:hover': {
                  bgcolor: 'rgba(21, 120, 102, 0.8)',
                },
              }}>
              {t('contact-section.button-text')}
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default ContactSection;
