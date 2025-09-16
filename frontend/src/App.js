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

// Layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout'; // For Login/Register pages

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>

          {/* Public pages with main layout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>

          {/* Auth pages with different layout */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            {/* Add register, forgot password etc here */}
          </Route>

          {/* Protected/dashboard pages */}
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/register" element={<Register />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
