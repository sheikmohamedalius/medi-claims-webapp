import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="header-left">
        <img src="/logo192.png" alt="Medi-Claims Logo" className="header-logo" />
        <span className="header-title">Medi-Claims Portal</span>
      </div>
      <div className="header-right">
        {/* Example: Show user info or notifications */}
        <span className="header-user">Welcome, User</span>
      </div>
    </header>
  );
}

export default Header;