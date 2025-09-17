import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, IconButton,
  CircularProgress, Box, Alert
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch('http://localhost:5000/api/users');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Failed to fetch users. Please check if backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-user/${id}`);
  };

  const handleDelete = (id) => {
    navigate(`/delete-user/${id}`);
  };

  if (loading) return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
      <CircularProgress />
    </Box>
  );

  if (error) return (
    <Alert severity="error" sx={{ mt: 3 }}>
      {error}
      <Button onClick={fetchUsers} sx={{ ml: 2 }}>Retry</Button>
    </Alert>
  );

  if (users.length === 0) return (
    <Alert severity="info" sx={{ mt: 3 }}>
      No users found. Register some users first!
      <Button onClick={fetchUsers} sx={{ ml: 2 }}>Refresh</Button>
    </Alert>
  );

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <h2>User Management</h2>
        <Button variant="contained" onClick={fetchUsers} sx={{ mb: 1 }}>Refresh Users</Button>
      </Box>

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Gender</strong></TableCell>
              <TableCell><strong>Hobby</strong></TableCell>
              <TableCell><strong>Skill Level</strong></TableCell>
              <TableCell><strong>Bio</strong></TableCell>
              <TableCell><strong>Created At</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell style={{ textTransform: 'capitalize' }}>{user.gender}</TableCell>
                <TableCell>{user.hobby || 'N/A'}</TableCell>
                <TableCell>{user.skill_level || 'N/A'}</TableCell>
                <TableCell style={{
                  maxWidth: '200px', overflow: 'hidden',
                  textOverflow: 'ellipsis', whiteSpace: 'nowrap'
                }} title={user.bio}>{user.bio || 'No bio provided'}</TableCell>
                <TableCell>{user.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEdit(user.id)} title="Edit User">
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(user.id)} title="Delete User">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt={2}>
        <small>Total Users: {users.length}</small>
      </Box>
    </Box>
  );
};

export default UserList;
