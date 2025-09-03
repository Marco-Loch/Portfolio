import React from 'react';
import { Box, Checkbox, FormControlLabel, FormHelperText, Typography } from '@mui/material';
import { Link as TanstackLink } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import type { PrivacyProps } from '../../types/contact_form_type.ts';

const ContactFormPrivacyPolicy: React.FC<PrivacyProps> = ({
  formData,
  handleChange,
  errors,
  accentColor,
  orbitron,
}) => {
  const { t } = useTranslation();

  return (
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
  );
};

export default ContactFormPrivacyPolicy;
