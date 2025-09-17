import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box
    sx={{
      textAlign: 'center',
      py: 2,
      mt: 4,
      backgroundColor: '#f5f5f5',
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      zIndex: 1300,
    }}
  >
    <Typography variant="body2">© 2025 My App. All rights reserved.</Typography>
  </Box>
);

export default Footer;
