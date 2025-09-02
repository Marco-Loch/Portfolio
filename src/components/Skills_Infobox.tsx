import { Box, Typography, Paper, Button } from '@mui/material';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import ScrollContext from '../context/Scroll_Context';

interface SkillsInfoboxProps {
  accentColor: string;
}

const SkillsInfobox: FC<SkillsInfoboxProps> = ({ accentColor }) => {
  const { t } = useTranslation();
  const { contactRef, scrollToSection } = useContext(ScrollContext);

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "'Orbitron', sans-serif",
          color: accentColor,
          fontWeight: 'bold',
          mb: 1,
        }}>
        {t('skills-section.technologies')}
      </Typography>
      <Paper
        elevation={0}
        sx={{
          border: `2px solid ${accentColor}`,
          borderRadius: '16px',
          p: { xs: 3, sm: 4 },
          backgroundColor: 'rgba(8, 70, 59, 0.6)',
        }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 'bold',
            color: 'white',
            mb: 3,
            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
          }}>
          {t('skills-section.textbox.headline')}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Orbitron', sans-serif",
            color: 'rgba(255, 255, 255, 0.8)',
            mb: 4,
            lineHeight: 1.6,
          }}>
          {t('skills-section.textbox.introduction')}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Orbitron', sans-serif",
            fontWeight: 'bold',
            color: 'white',
            mb: 2,
          }}>
          {t('skills-section.textbox.question')}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "'Orbitron', sans-serif",
            color: 'rgba(255, 255, 255, 0.7)',
            mb: 4,
          }}>
          {t('skills-section.textbox.looking-forward')}
        </Typography>
        <Button
          onClick={() => scrollToSection(contactRef)}
          variant="outlined"
          size="large"
          sx={{
            color: 'white',
            borderColor: 'rgba(255, 255, 255, 0.5)',
            borderRadius: '50px',
            px: 4,
            py: 1.5,
            fontFamily: "'Orbitron', sans-serif",
            textTransform: 'none',
            '&:hover': {
              borderColor: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}>
          {t('skills-section.textbox.button.text')}
        </Button>
      </Paper>
    </Box>
  );
};

export default SkillsInfobox;
