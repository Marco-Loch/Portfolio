import React from 'react';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { ContactFormSubmitButtonProps } from '../../types/contact_form_type';

const ContactFormSubmitButton: React.FC<ContactFormSubmitButtonProps> = ({ accentColor, orbitron }) => {
  const { t } = useTranslation();

  return (
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
  );
};

export default ContactFormSubmitButton;
