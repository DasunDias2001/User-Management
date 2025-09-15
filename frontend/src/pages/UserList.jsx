import React, { useEffect, useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Button, IconButton
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const UserList = () => {
  const [users, setUsers] = useState([]);

  // Dummy data (replace with API call later)
  useEffect(() => {
    setUsers([
      {
        id: 1,
        name: "Dasun",
        email: "dasun@example.com",
        gender: "Male",
        hobby: "Chess",
        skill: "Advanced",
        bio: "Love technology and strategy games."
      },
      {
        id: 2,
        name: "Kavindu",
        email: "kavindu@example.com",
        gender: "Male",
        hobby: "Swimming",
        skill: "Intermediate",
        bio: "Fitness freak and backend developer."
      }
    ]);
  }, []);

  const handleEdit = (id) => {
    alert(`Edit user with ID: ${id}`);
    // 👉 Later: Navigate to edit form with user data
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((u) => u.id !== id));
      // 👉 Later: Call DELETE API here
    }
  };

  return (
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
            <TableCell><strong>Actions</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.gender}</TableCell>
              <TableCell>{user.hobby}</TableCell>
              <TableCell>{user.skill}</TableCell>
              <TableCell>{user.bio}</TableCell>
              <TableCell>
                <IconButton color="primary" onClick={() => handleEdit(user.id)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="error" onClick={() => handleDelete(user.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
