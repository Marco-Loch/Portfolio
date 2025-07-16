import { CssBaseline, ThemeProvider } from '@mui/material';
import type { ReactNode } from 'react';
import { theme } from '../config/material_theme';

type MaterialProviderProps = { children: ReactNode };

export default function MaterialProvider({ children }: Readonly<MaterialProviderProps>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
