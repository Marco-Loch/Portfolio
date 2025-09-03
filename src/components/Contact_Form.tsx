import React, { useState } from 'react';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Stack } from '@mui/material';
import ContactFormName from './ContactFormComponents/Contact_Form_Name';
import ContactFormEmail from './ContactFormComponents/Contact_Form_Email';
import ContactFormMessage from './ContactFormComponents/Contact_Form_Text';
import ContactFormPrivacyPolicy from './ContactFormComponents/Contact_Form_PrivacyPolicy';
import ContactFormSubmitButton from './ContactFormComponents/Contact_Form_SubmitButton';
import ContactFormStatusAlerts from './ContactFormComponents/Contact_Form_StatusAlerts';
import { createContactSchema } from '../types/contact_form_type.ts';
import type { ContactFormInputs, FormErrors } from '../types/contact_form_type.ts';

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
      const response = await fetch('https://marco-loch.de/sendmail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validationResult.data),
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        throw new Error('Server response was not ok.');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setFormStatus('error');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ flex: 1, minWidth: { md: 400 } }}>
      <Stack spacing={4}>
        <ContactFormName
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          accentColor={accentColor}
          borderColor={borderColor}
          orbitron={orbitron}
        />

        <ContactFormEmail
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          accentColor={accentColor}
          borderColor={borderColor}
          orbitron={orbitron}
        />

        <ContactFormMessage
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          accentColor={accentColor}
          borderColor={borderColor}
          orbitron={orbitron}
        />

        <ContactFormPrivacyPolicy
          formData={formData}
          handleChange={handleChange}
          errors={errors}
          accentColor={accentColor}
          orbitron={orbitron}
        />

        <ContactFormSubmitButton accentColor={accentColor} orbitron={orbitron} />

        <ContactFormStatusAlerts formStatus={formStatus} />
      </Stack>
    </Box>
  );
};

export default ContactForm;
