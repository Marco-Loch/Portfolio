import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import './config/i18next.ts';
import App from './App.tsx';
import MaterialProvider from './provider/material_UI_provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MaterialProvider>
      <App />
    </MaterialProvider>
  </StrictMode>
);
