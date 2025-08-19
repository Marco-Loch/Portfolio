import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './config/router.ts'; // Importiere den neuen Router
import './styles/index.css';
import './config/i18next.ts';
import MaterialProvider from './provider/material_UI_provider.tsx';

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <MaterialProvider>
        <RouterProvider router={router} />
      </MaterialProvider>
    </StrictMode>
  );
}
