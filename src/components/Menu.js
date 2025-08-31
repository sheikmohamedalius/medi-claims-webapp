import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav style={{ background: '#eee', padding: '0.5rem 2rem', display: 'flex', gap: '1rem' }}>
      <Link to="/">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/claims">Claims</Link>
      {/* Add more links as needed */}
    </nav>
  );
}

export default Menu;