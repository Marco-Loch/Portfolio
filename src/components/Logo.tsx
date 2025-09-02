import type { FC } from 'react';
import { Box } from '@mui/material';
import LogoImage from '../assets/img/faviconML.png';
import type { LogoProps } from '../types/logo_type';

const Logo: FC<LogoProps> = ({ width = 80, height = 80 }) => {
  return <Box component="img" src={LogoImage} alt="Marco Loch Logo" sx={{ width, height, mb: 1 }} />;
};

export default Logo;
