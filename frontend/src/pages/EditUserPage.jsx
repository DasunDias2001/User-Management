import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, TextField, Button, Paper, Typography, Alert } from "@mui/material";

const EditUserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', gender: '', hobby: '', skill_level: '', bio: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/users`);
      const data = await res.json();
      const user = data.find(u => u.id.toString() === id);
      if (user) setForm(user);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch user details.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Update failed');
      alert('User updated successfully!');
      navigate('/userlist');
    } catch (err) {
      console.error(err);
      setError('Failed to update user.');
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" mb={2}>Edit User</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField label="Name" name="name" value={form.name} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Gender" name="gender" value={form.gender} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Hobby" name="hobby" value={form.hobby} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Skill Level" name="skill_level" value={form.skill_level} onChange={handleChange} fullWidth margin="normal" />
          <TextField label="Bio" name="bio" value={form.bio} onChange={handleChange} fullWidth margin="normal" />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>Save Changes</Button>
        </form>
      </Paper>
    </Box>
  );
};

export default EditUserPage;
