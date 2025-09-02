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
    height: containerHeight > 0 ? `${containerHeight}px` : '100%',
    zIndex: 2,
  };

  return (
    <Box
      id="test"
      ref={containerRef}
      sx={{
        position: 'relative',
        minHeight: '100vh',
        background: containerBackground,
      }}>
      <Box sx={backgroundStyle} />

      <Box sx={{ position: 'relative', zIndex: 1 }}> {children}</Box>
    </Box>
  );
};

export default MouseFollowShadow;
