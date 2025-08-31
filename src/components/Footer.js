import React from 'react';

function Footer() {
  return (
    <footer style={{ background: '#f5f8fa', color: '#1976d2', padding: '1rem', textAlign: 'center' }}>
      &copy; {new Date().getFullYear()} Medi-Claims. All rights reserved.
    </footer>
  );
}

export default Footer;