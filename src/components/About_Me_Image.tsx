import { Box } from '@mui/material';
import type { FC } from 'react';
import meImage from '../assets/img/me.jpeg';

const AboutMeImage: FC = () => {
  return (
    <Box
      component="img"
      src={meImage}
      alt="Ein Bild von Marco Loch"
      sx={{
        width: '100%',
        height: 'auto',
        borderRadius: '16px',
        objectFit: 'cover',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        filter: 'grayscale(100%)',
        transition: 'filter 0.6s ease',
        '@media (hover: hover)': {
          '&:hover': {
            filter: 'grayscale(0%)',
          },
        },
      }}
    />
  );
};

export default AboutMeImage;
