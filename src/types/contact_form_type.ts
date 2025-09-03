import { z } from 'zod';

export const createContactSchema = (t: (key: string) => string) =>
  z.object({
    name: z.string().min(2, { message: t('validation.name.min') }),
    email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
      message: t('validation.email.invalid'),
    }),
    message: z.string().min(10, { message: t('validation.message.min') }),
    privacyPolicy: z.boolean().refine(val => val === true, {
      message: t('validation.privacy.required'),
    }),
  });

export type ContactFormInputs = z.infer<ReturnType<typeof createContactSchema>>;
export type FormErrors = Partial<Record<keyof ContactFormInputs, string>>;

export interface ContactFormProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  accentColor: string;
  borderColor: string;
  orbitron: string;
}

export interface PrivacyProps {
  formData: ContactFormInputs;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: FormErrors;
  accentColor: string;
  orbitron: string;
}

export interface ContactFormSubmitButtonProps {
  accentColor: string;
  orbitron: string;
}

export interface ContactFormStatusAlertsProps {
  formStatus: 'idle' | 'success' | 'error';
}
