import type { FC } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { keyframes } from '@emotion/react';
import { useTranslation } from 'react-i18next';

const marqueeAnimation = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
`;

const Ticker: FC = () => {
  const { t } = useTranslation();
  const tickerItems: string[] = [
    t('hero-section.remote'),
    t('hero-section.frontenddev'),
    t('hero-section.based'),
    t('hero-section.open-for-projects'),
  ];
  const extendedItems = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
        py: 2,
        backgroundColor: 'transparent',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
      <Stack
        direction="row"
        spacing={8}
        sx={{
          width: 'fit-content',
          animation: `${marqueeAnimation} 40s linear infinite`,
        }}>
        {extendedItems.map((item, index) => (
          <Stack direction="row" alignItems="center" spacing={2} key={`${item}-${index}`}>
            <Box sx={{ width: '8px', height: '8px', backgroundColor: 'rgba(8, 70, 59, 1)', borderRadius: '50%' }} />
            <Typography
              variant="body2"
              sx={{
                fontFamily: "'Orbitron', sans-serif",
                color: 'rgba(255, 255, 255, 0.7)',
                whiteSpace: 'nowrap',
              }}>
              {item}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default Ticker;
