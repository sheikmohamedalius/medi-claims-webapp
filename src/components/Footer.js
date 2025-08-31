import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      <div>
        &copy; {new Date().getFullYear()} Medi-Claims. All rights reserved.
      </div>
      <div>
        <a href="/privacy" className="footer-link">Privacy Policy</a>
        <span className="footer-divider">|</span>
        <a href="/terms" className="footer-link">Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;