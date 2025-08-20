import { Box } from '@mui/material';
import type { FC } from 'react';

const AboutMeImage: FC = () => {
  return (
    <Box
      component="img"
      src="https://placehold.co/600x750/2a2a2a/ffffff?text=Dein+Bild+hier"
      alt="Ein Bild von Marco Loch"
      sx={{
        width: '100%',
        height: 'auto',
        borderRadius: '16px',
        objectFit: 'cover',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
      }}
    />
  );
};

export default AboutMeImage;
