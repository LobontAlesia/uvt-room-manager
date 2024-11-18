import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Stiluri specifice Dashboard

const Dashboard = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path); // Navighează către ruta specificată
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Aici poți vizualiza rezervările tale și calendarul.</p>
      <div className="button-container">
        <button className="floor-button" onClick={() => handleNavigation('/parter')}>Parter</button>
        <button className="floor-button">Etaj 1</button>
        <button className="floor-button">Etaj 2</button>
        <button className="floor-button">Etaj 3</button>
        <button className="floor-button">Etaj 4</button>
        <button className="floor-button">Etaj 5</button>
        <button className="floor-button">Etaj 6</button>
        <button className="floor-button">Etaj 7</button>
      </div>
    </div>
  );
};

export default Dashboard;
