import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  React.useEffect(() => {
    // Clear all local storage
    localStorage.clear();
    // Redirect to login page
    navigate('/');
  }, [navigate]);

  return null;
}

export default Logout;
