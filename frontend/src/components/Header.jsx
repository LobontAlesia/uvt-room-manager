import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">UVT Room Manager</h1>
      <nav className="header-nav">
        <Link to="/" className="header-link">Acasă</Link>
        <Link to="/dashboard" className="header-link">Dashboard</Link>
        <Link to="/admin" className="header-link">Admin</Link>
        <Link to="/contact" className="header-link">Contact</Link>
        <Link to="/login" className="header-link">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
