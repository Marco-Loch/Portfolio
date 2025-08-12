import type { FC } from 'react';
import { Box, Typography, Stack, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';

const ContactSection: FC = () => {
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
            Contact me
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
            Let's work together
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              color: 'white',
              mt: 4,
            }}>
            Got a problem to solve?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.6,
            }}>
            Encourage people to contact you and describe what role you are interested in. Show that you will add value
            to their projects through your work.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              color: 'rgba(255, 255, 255, 0.7)',
            }}>
            Need a Frontend developer?{' '}
            <Box component="span" sx={{ color: accentColor }}>
              Let's talk!
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
                What's your name?
              </Typography>
              <TextField
                variant="standard"
                placeholder="Your name goes here"
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
                What's your email?
              </Typography>
              <TextField
                variant="standard"
                placeholder="youremail@email.com"
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
                How can I help you?
              </Typography>
              <TextField
                variant="standard"
                multiline
                rows={4}
                placeholder="Hello Marco, I am interested in.."
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
                  I've read the{' '}
                  <Box component="span" sx={{ color: accentColor }}>
                    privacy policy
                  </Box>{' '}
                  and agree to the processing of my data as outlined.
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
              Say Hello :)
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default ContactSection;
