import React, { useRef, useEffect } from 'react';
import { Typography } from '@mui/material';
import gsap from 'gsap';

const ExplodingText: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  const explodeAndAssemble = () => {
    if (!textRef.current) return;

    const letters = textRef.current.querySelectorAll('span');

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
          duration: 0.8,
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
    explodeAndAssemble();
  }, []);

  return (
    <Typography
      variant="h1"
      sx={{
        fontFamily: "'Orbitron', sans-serif",
        fontWeight: 700,
        fontSize: { xs: '3.5rem', sm: '5rem', md: '7rem' },
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        color: 'white',
        cursor: 'pointer',
        display: 'inline-block',
      }}
      onMouseEnter={explodeAndAssemble}>
      <div ref={textRef}>
        {'Marco Loch'.split('').map((char, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              whiteSpace: 'pre', // wichtig für Leerzeichen
            }}>
            {char}
          </span>
        ))}
      </div>
    </Typography>
  );
};

export default ExplodingText;
