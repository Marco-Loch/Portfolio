import React, { useRef, useEffect } from 'react';
import { Typography, Stack } from '@mui/material';
import gsap from 'gsap';

const ExplodingText: React.FC = () => {
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);

  const explodeAndAssemble = (ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return;
    const letters = ref.current.querySelectorAll('span');

    gsap.to(letters, {
      duration: 0.6,
      x: () => gsap.utils.random(-200, 200),
      y: () => gsap.utils.random(-150, 150),
      rotation: () => gsap.utils.random(-180, 180),
      opacity: 0,
      stagger: 0.02,
      ease: 'power3.out',
      onComplete: () => {
        gsap.to(letters, {
          duration: 1.8,
          x: 0,
          y: 0,
          rotation: 0,
          opacity: 1,
          stagger: 0.02,
          ease: 'elastic.out(1, 1.5)',
        });
      },
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      explodeAndAssemble(textRef1);
      setTimeout(() => explodeAndAssemble(textRef2), 300);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Stack spacing={0.5} alignItems="center">
      <Typography
        variant="h1"
        sx={{
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 700,
          fontSize: { xs: '3rem', sm: '4.5rem', md: '6rem' },
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          color: 'white',
          cursor: 'pointer',
          display: 'inline-block',
        }}
        onMouseEnter={() => explodeAndAssemble(textRef1)}>
        <div ref={textRef1}>
          {'Marco'.split('').map((char, i) => (
            <span key={i} style={{ display: 'inline-block' }}>
              {char}
            </span>
          ))}
        </div>
      </Typography>

      <Typography
        variant="h1"
        sx={{
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 700,
          fontSize: { xs: '3rem', sm: '4.5rem', md: '6rem' },
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          color: 'white',
          cursor: 'pointer',
          display: 'inline-block',
        }}
        onMouseEnter={() => explodeAndAssemble(textRef2)}>
        <div ref={textRef2}>
          {'Loch'.split('').map((char, i) => (
            <span key={i} style={{ display: 'inline-block' }}>
              {char}
            </span>
          ))}
        </div>
      </Typography>
    </Stack>
  );
};

export default ExplodingText;
