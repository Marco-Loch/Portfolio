import { createRouter } from '@tanstack/react-router';
import { routeTree } from '../routeTree.gen';

// Erstelle den Router
export const router = createRouter({ routeTree });

// Deklariere die Modul-Typen für den Router
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
