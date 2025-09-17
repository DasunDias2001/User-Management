import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: '#fff',
        color: '#000',
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Toolbar
        sx={{
          minHeight: 56,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo or Brand */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            letterSpacing: 2,
            color: '#000',
            cursor: 'pointer',
            fontFamily: 'Montserrat, Arial, sans-serif',
          }}
          onClick={() => navigate('/')}
        >
          WELCOME
        </Typography>

        {/* Centered Navigation */}
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            flexGrow: 1,
            justifyContent: 'center',
          }}
        >
          <Button color="inherit" sx={{ fontWeight: 500 }} onClick={() => navigate('/userlist')}>
            User List
          </Button>
        </Box>

        {/* Right Side: Login and Register */}
        <Box>
          <Button
            color="inherit"
            sx={{
              fontWeight: 500,
              textTransform: 'none',
              borderRadius: 20,
              px: 2,
              background: '#f4f4f4',
              ml: 2,
              '&:hover': { background: '#e0e0e0' },
            }}
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
          <Button
            color="inherit"
            sx={{
              fontWeight: 500,
              textTransform: 'none',
              borderRadius: 20,
              px: 2,
              background: '#f4f4f4',
              ml: 2,
              '&:hover': { background: '#e0e0e0' },
            }}
            onClick={() => navigate('/register')}
          >
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
