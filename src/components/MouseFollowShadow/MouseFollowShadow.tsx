import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

interface MouseFollowShadowProps {
  children: React.ReactNode;
  shadowColor?: string;
  shadowSize?: number;
  blur?: number;
  containerBackground?: string;
}

const MouseFollowShadow: React.FC<MouseFollowShadowProps> = ({
  children,
  shadowColor = 'rgba(61, 207, 182, 0.5)',
  shadowSize = 200,
  blur = 100,
  containerBackground,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        });
      }
    };

    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener('mousemove', handleMouseMove);

      // Beobachte die Größe des Containers, um die Schattenhöhe anzupassen
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          if (entry.target === currentContainer) {
            setContainerHeight(entry.contentRect.height);
          }
        }
      });
      resizeObserver.observe(currentContainer);

      return () => {
        currentContainer.removeEventListener('mousemove', handleMouseMove);
        resizeObserver.disconnect();
      };
    }
    // Abhängigkeit vom containerRef.current ist wichtig, um den Listener korrekt hinzuzufügen/entfernen
  }, [containerRef.current]);

  const backgroundStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${shadowColor} ${
      shadowSize / 2
    }px, transparent ${shadowSize}px)`,
    filter: `blur(${blur}px)`,
    pointerEvents: 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    // Höhe des Schattens basiert auf der tatsächlichen Höhe des Containers
    height: containerHeight > 0 ? `${containerHeight}px` : '100%',
    zIndex: 2,
  };

  return (
    <Box
      id="test"
      ref={containerRef}
      sx={{
        position: 'relative',
        minHeight: '100vh', // Mindesthöhe, damit es bei wenig Inhalt nicht zu klein ist
        background: containerBackground,
        // Die eigentliche Höhe wird durch den Inhalt bestimmt
        // Keine feste Höhe hier mehr, damit der Inhalt scrollen kann
      }}>
      {/* Der Schatten-Layer, der jetzt die Höhe des gesamten Inhalts abdeckt */}
      <Box sx={backgroundStyle} />

      {/* Die Kind-Elemente (HeroSection, AboutMeSection, etc.) werden hier gerendert */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {' '}
        {/* Wichtig: Kinder über dem Schatten platzieren */}
        {children}
      </Box>
    </Box>
  );
};

export default MouseFollowShadow;
