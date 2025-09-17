import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Paper, Typography, Button, Alert } from "@mui/material";

const DeleteUserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/users/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Delete failed');
      alert('User deleted successfully!');
      navigate('/userlist');
    } catch (err) {
      console.error(err);
      setError('Failed to delete user.');
    }
  };

  const handleCancel = () => navigate('/userlist');

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
      <Paper sx={{ p: 4, width: 400, textAlign: 'center' }}>
        <Typography variant="h6" mb={2}>Confirm Delete User</Typography>
        {error && <Alert severity="error">{error} </Alert>}
        <Button variant="contained" color="error" sx={{ mr: 2 }} onClick={handleDelete}>Delete</Button>
        <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
      </Paper>
    </Box>
  );
};

export default DeleteUserPage;
