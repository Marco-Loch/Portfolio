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

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const backgroundStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${shadowColor} ${
      shadowSize / 2
    }px, transparent ${shadowSize}px)`,
    filter: `blur(${blur}px)`,
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
        width: '100vw',
        background: containerBackground,
      }}>
      <Box sx={backgroundStyle} />
      {children}
    </Box>
  );
};

export default MouseFollowShadow;
