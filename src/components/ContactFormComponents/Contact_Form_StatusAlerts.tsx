import React from 'react';
import { Alert } from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { ContactFormStatusAlertsProps } from '../../types/contact_form_type';

const ContactFormStatusAlerts: React.FC<ContactFormStatusAlertsProps> = ({ formStatus }) => {
  const { t } = useTranslation();

  return (
    <>
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
    </>
  );
};

export default ContactFormStatusAlerts;
