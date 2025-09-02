export interface FooterLink {
  id: string;
  text?: string;
  translationKey?: string;
  href: string;
  isExternal?: boolean;
}

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
