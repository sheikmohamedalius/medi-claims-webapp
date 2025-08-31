import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Menu.css';

function Menu() {
  return (
    <nav className="main-menu">
      <NavLink to="/dashboard" className="menu-link">Dashboard</NavLink>
      <NavLink to="/claims" className="menu-link">Claims</NavLink>
      <NavLink to="/submit-claim" className="menu-link">Submit Claim</NavLink>
      <NavLink to="/profile" className="menu-link">Profile</NavLink>
      <NavLink to="/reports" className="menu-link">Reports</NavLink>
      <NavLink to="/admin" className="menu-link">Admin Panel</NavLink>
      <NavLink to="/logout" className="menu-link logout">Logout</NavLink>
    </nav>
  );
}

export default Menu;