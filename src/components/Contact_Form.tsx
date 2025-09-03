import React, { useState } from 'react';
import type { FC } from 'react';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Stack,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Alert,
  Typography,
} from '@mui/material';
import { Link as TanstackLink } from '@tanstack/react-router';

const createContactSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(2, { message: t('validation.name.min') }),
    email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, { message: t('validation.email.invalid') }),
    message: z.string().min(10, { message: t('validation.message.min') }),
    privacyPolicy: z.boolean().refine(val => val === true, {
      message: t('validation.privacy.required'),
    }),
  });

type ContactFormInputs = z.infer<ReturnType<typeof createContactSchema>>;
type FormErrors = Partial<Record<keyof ContactFormInputs, string>>;

const ContactForm: FC = () => {
  const { t } = useTranslation();
  const contactSchema = createContactSchema(t);

  const [formData, setFormData] = useState<ContactFormInputs>({
    name: '',
    email: '',
    message: '',
    privacyPolicy: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const accentColor = 'rgba(21, 120, 102, 1)';
  const borderColor = 'rgba(255, 255, 255, 0.2)';
  const orbitron = "'Orbitron', sans-serif";

  // Nur Werte speichern, keine Validierung hier
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const fieldName = name as keyof ContactFormInputs;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData(prev => ({ ...prev, [fieldName]: fieldValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setFormStatus('idle');

    const validationResult = contactSchema.safeParse(formData);

    if (!validationResult.success) {
      const newErrors: FormErrors = {};
      validationResult.error.issues.forEach(err => {
        newErrors[err.path[0] as keyof ContactFormInputs] = err.message;
      });
      setErrors(newErrors);
      return;
    }

    try {
      console.log('Form data valid:', validationResult.data);
      // Hier API-Aufruf-Logik
      setFormStatus('success');
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ flex: 1, minWidth: { md: 400 } }}>
      <Stack spacing={4}>
        {/* Name */}
        <TextField
          label={t('contact-section.input.name')}
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name || ''}
          variant="standard"
          placeholder={t('contact-section.placeholder.name')}
          fullWidth
          slotProps={{
            input: {
              disableUnderline: true,
              sx: {
                fontFamily: orbitron,
                color: 'rgba(255, 255, 255, 0.7)',
                borderBottom: `1px solid ${errors.name ? 'red' : borderColor}`,
                '&::placeholder': {
                  color: 'rgba(255, 255, 255, 0.6)',
                  opacity: 1,
                },
                '&:focus': {
                  color: accentColor,
                },
              },
            },
            inputLabel: {
              sx: {
                fontFamily: orbitron,
                color: 'rgba(255,255,255,0.6)',
                '&.Mui-focused': {
                  color: accentColor,
                },
              },
            },
            formHelperText: { sx: { fontFamily: orbitron } },
          }}
        />

        {/* Email */}
        <TextField
          label={t('contact-section.input.email')}
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email || ''}
          variant="standard"
          placeholder={t('contact-section.placeholder.email')}
          fullWidth
          slotProps={{
            input: {
              disableUnderline: true,
              sx: {
                fontFamily: orbitron,
                color: 'rgba(255, 255, 255, 0.7)',
                borderBottom: `1px solid ${errors.email ? 'red' : borderColor}`,
                '&::placeholder': {
                  color: 'rgba(255, 255, 255, 0.6)',
                  opacity: 1,
                },
                '&:focus': {
                  color: accentColor,
                },
              },
            },
            inputLabel: {
              sx: {
                fontFamily: orbitron,
                color: 'rgba(255,255,255,0.6)',
                '&.Mui-focused': {
                  color: accentColor,
                },
              },
            },
            formHelperText: { sx: { fontFamily: orbitron } },
          }}
        />

        {/* Message */}
        <TextField
          label={t('contact-section.input.message')}
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message || ''}
          variant="standard"
          multiline
          rows={4}
          placeholder={t('contact-section.placeholder.message')}
          fullWidth
          slotProps={{
            input: {
              disableUnderline: true,
              sx: {
                fontFamily: orbitron,
                color: 'rgba(255, 255, 255, 0.7)',
                borderBottom: `1px solid ${errors.message ? 'red' : borderColor}`,
                '&::placeholder': {
                  color: 'rgba(255, 255, 255, 0.6)',
                  opacity: 1,
                },
                '&:focus': {
                  color: accentColor,
                },
              },
            },
            inputLabel: {
              sx: {
                fontFamily: orbitron,
                color: 'rgba(255,255,255,0.6)',
                '&.Mui-focused': {
                  color: accentColor,
                },
              },
            },
            formHelperText: { sx: { fontFamily: orbitron } },
          }}
        />

        {/* Privacy Policy */}
        <Box>
          <FormControlLabel
            control={
              <Checkbox
                name="privacyPolicy"
                checked={formData.privacyPolicy}
                onChange={handleChange}
                sx={{ color: errors.privacyPolicy ? 'red' : 'white' }}
              />
            }
            label={
              <Typography variant="body2" sx={{ fontFamily: orbitron, color: 'white' }}>
                {t('contact-section.privacy.first')}{' '}
                <TanstackLink to="/privacy_policy" style={{ textDecoration: 'none', color: accentColor }}>
                  {t('contact-section.privacy.second')}
                </TanstackLink>{' '}
                {t('contact-section.privacy.last')}
              </Typography>
            }
          />
          {errors.privacyPolicy && (
            <FormHelperText error sx={{ fontFamily: orbitron, ml: 2 }}>
              {errors.privacyPolicy}
            </FormHelperText>
          )}
        </Box>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            bgcolor: accentColor,
            color: 'white',
            borderRadius: '50px',
            px: 4,
            py: 1.5,
            fontFamily: orbitron,
            textTransform: 'none',
            alignSelf: 'flex-start',
            '&:hover': { bgcolor: 'rgba(21, 120, 102, 0.8)' },
          }}>
          {t('contact-section.button-text')}
        </Button>

        {/* Status Messages */}
        {formStatus === 'success' && (
          <Alert severity="success" sx={{ mt: 2 }}>
            {t('form.success')}
          </Alert>
        )}
        {formStatus === 'error' && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {t('form.error')}
          </Alert>
        )}
      </Stack>
    </Box>
  );
};

export default ContactForm;
