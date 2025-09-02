import type { FooterLink } from '../types/footer_types';

export const footerLinks: FooterLink[] = [
  {
    id: 'github',
    text: 'GitHub',
    href: 'https://github.com/Marco-Loch',
    isExternal: true,
  },
  {
    id: 'linkedin',
    text: 'LinkedIn',
    href: 'https://de.linkedin.com/in/marco-loch',
    isExternal: true,
  },
  {
    id: 'email',
    text: 'Email',
    href: '#',
    isExternal: true,
  },
  {
    id: 'legal',
    translationKey: 'footer-section.legal',
    href: '/impressum',
    isExternal: false,
  },
];
