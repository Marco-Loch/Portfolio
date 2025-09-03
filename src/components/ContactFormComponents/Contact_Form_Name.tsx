import React from 'react';
import { TextField } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import type { SxProps } from '@mui/material';
import type { ContactFormProps } from '../../types/contact_form_type';

const ContactFormName: React.FC<ContactFormProps> = ({
  value,
  onChange,
  error,
  accentColor,
  borderColor,
  orbitron,
}) => {
  const { t } = useTranslation();

  const inputSx: SxProps<Theme> = {
    fontFamily: orbitron,
    color: 'rgba(255, 255, 255, 0.7)',
    borderBottom: `1px solid ${error ? 'red' : borderColor}`,
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.6)',
      opacity: 1,
    },
    '&:focus': {
      color: accentColor,
    },
  };

  const inputLabelSx: SxProps<Theme> = {
    fontFamily: orbitron,
    color: 'rgba(255,255,255,0.6)',
    '&.Mui-focused': {
      color: accentColor,
    },
  };

  const formHelperTextSx: SxProps<Theme> = { fontFamily: orbitron };

  return (
    <TextField
      label={t('contact-section.input.name')}
      name="name"
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={error || ''}
      variant="standard"
      placeholder={t('contact-section.placeholder.name')}
      fullWidth
      slotProps={{
        input: { disableUnderline: true, sx: inputSx },
        inputLabel: { sx: inputLabelSx },
        formHelperText: { sx: formHelperTextSx },
      }}
    />
  );
};

export default ContactFormName;
