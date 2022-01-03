import { Box } from '@mui/material';
import React from 'react';

export function Layout({ children, pageMode }) {
  return (
    <Box sx={{ position: 'relative', minWidth: '100vw', minHeight: '100vh' }}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url(${pageMode === 1 ? '/pp.jpg' : '/bg.jpg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
          filter: 'blur(0px)',
        }}
      ></Box>
      {children}
    </Box>
  );
}
