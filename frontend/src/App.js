import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import UserList from './pages/UserList';
import EditUserPage from './pages/EditUserPage';
import DeleteUserPage from './pages/DeleteUserPage';

// Layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>

          {/* Public routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* Protected routes */}
          <Route element={<MainLayout />}>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path="/userlist"
              element={
                <ProtectedRoute>
                  <UserList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit-user/:id"
              element={
                <ProtectedRoute>
                  <EditUserPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/delete-user/:id"
              element={
                <ProtectedRoute>
                  <DeleteUserPage />
                </ProtectedRoute>
              }
            />
          </Route>

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
