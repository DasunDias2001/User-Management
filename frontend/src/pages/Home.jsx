import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// Import the local image from components folder
import welcomeImage from '../components/Welcome.jpg';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      
      <br />
      <img
        src={welcomeImage}
        alt="Welcome"
        style={{ display: 'block', margin: '20px auto', maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default Home;
