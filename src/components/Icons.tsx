import type { FC } from 'react';
import { SvgIcon, IconButton } from '@mui/material';
import type { SvgIconProps, IconButtonProps } from '@mui/material';

interface CustomSvgIconProps extends SvgIconProps {}

export const ArrowDownwardIcon: FC<CustomSvgIconProps> = props => (
  <SvgIcon {...props}>
    <path
      d="M12 20L12 4M12 20L16 16M12 20L8 16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export const GitHubLink: FC<IconButtonProps> = props => (
  <IconButton
    component="a"
    href="https://github.com/Marco-Loch"
    target="_blank"
    rel="noopener noreferrer"
    sx={{ color: 'inherit' }}
    {...props}>
    <SvgIcon>
      <path
        d="M9 19c-4.3 1.4 -4.3-2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .5 -.9 1.4 -.9 2.8v4.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  </IconButton>
);

export const LinkedInLink: FC<IconButtonProps> = props => (
  <IconButton
    component="a"
    href="https://de.linkedin.com/in/marco-loch"
    target="_blank"
    rel="noopener noreferrer"
    sx={{ color: 'inherit' }}
    {...props}>
    <SvgIcon>
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0 -2 -2a2 2 0 0 0 -2 2v7h-4v-7a6 6 0 0 1 6 -6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4 9h4v12h-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M4 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  </IconButton>
);
