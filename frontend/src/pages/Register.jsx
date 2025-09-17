import React, { useState } from 'react';
import { TextField, Button, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl, Box, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Add this import

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    hobby: '', // Backend eke thiyena field eka add karanna
    skill_level: '', // Backend eke thiyena field eka add karanna
    bio: '',
  });

  const navigate = useNavigate(); // Add this line

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
      // Backend URL eka properly mention karanna
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Registration successful:', data);
        alert('Registration successful!');
        navigate('/login'); // Navigate to login page
      } else {
        console.error('Registration failed:', data);
        alert('Registration failed: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
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
        background: '#f5f6fa',
      }}
    >
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Register
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
            <RadioGroup
              row
              name="gender"
              value={form.gender}
              onChange={handleChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
          
          {/* Backend eke thiyena fields add karanna */}
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
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Register
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;