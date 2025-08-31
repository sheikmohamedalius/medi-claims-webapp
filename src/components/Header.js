import React from 'react';

function Header() {
  return (
    <header style={{ background: '#1976d2', color: '#fff', padding: '1rem 2rem' }}>
      <img src="/logo192.png" alt="Logo" style={{ width: 40, verticalAlign: 'middle' }} />
      <span style={{ marginLeft: 10, fontWeight: 'bold' }}>Medi-Claims</span>
    </header>
  );
}

export default Header;