import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import profileIcon from '../../public/user.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-logo">UVT Room Manager</h1>
        <nav className="header-nav">
          <Link to="/" className="header-link">Acasă</Link>
          <Link to="/contact" className="header-link">Despre noi</Link>
          <Link to="/dashboard" className="header-link">Dashboard</Link>
          <Link to="/login" className="header-link">Login</Link>
          <Link to="/profile" className="header-profile">
            <img src={profileIcon} alt="Profil" className="profile-icon" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
