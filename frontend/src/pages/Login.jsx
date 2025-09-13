import React from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

const Login = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Paper elevation={6} sx={{ padding: 4, width: 400 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Login
        </Typography>

        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, mb: 1 }}
        >
          Sign In
        </Button>

        <Button
          variant="text"
          color="secondary"
          fullWidth
        >
          Forgot Password?
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
