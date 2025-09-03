import React from 'react';
import { Box } from '@mui/material';
import { ArrowDownwardIcon } from '../Icons';

const HeroScrollIndicator: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: { xs: '20px', md: '40px' },
        top: '50%',
        transform: 'translateY(-50%)',
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        alignItems: 'center',
        color: 'rgba(255,255,255,0.5)',
      }}>
      <Box sx={{ width: '1px', height: '100px', bgcolor: 'currentColor', mb: 2 }} />
      <ArrowDownwardIcon />
      <Box sx={{ width: '1px', height: '100px', bgcolor: 'currentColor', mt: 2 }} />
    </Box>
  );
};

export default HeroScrollIndicator;
