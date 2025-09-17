import React, { useState } from 'react';
import { TextField, Button, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl, Box, Paper, Typography, Divider, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    hobby: '',
    skill_level: '',
    bio: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Registration successful!');
        navigate('/login');
      } else {
        alert('Registration failed: ' + data.message);
      }
    } catch (error) {
      alert('Network error. Please check if backend is running.');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f0f2f5',
      }}
    >
      <Paper elevation={6} sx={{ p: 5, maxWidth: 450, width: '100%', borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Create Account
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Join us and get started!
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />

          <FormControl component="fieldset" margin="normal" required sx={{ mt: 2 }}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row name="gender" value={form.gender} onChange={handleChange}>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>

          <TextField
            label="Hobby"
            name="hobby"
            value={form.hobby}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Skill Level"
            name="skill_level"
            value={form.skill_level}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Short Bio"
            name="bio"
            value={form.bio}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={3}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3, mb: 2, py: 1.5 }}
          >
            Register
          </Button>
        </form>

        <Divider sx={{ mb: 2 }}>or</Divider>

        <Typography variant="body2" align="center">
          Already have an account?{' '}
          <Link
            component="button"
            variant="body2"
            onClick={() => navigate('/login')}
          >
            Sign In
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Register;
