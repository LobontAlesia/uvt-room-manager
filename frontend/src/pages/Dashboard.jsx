import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
// Importăm pictogramele FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding as solidBuilding } from '@fortawesome/free-solid-svg-icons';
import { faBuilding as regularBuilding } from '@fortawesome/free-regular-svg-icons';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path); // Navighează către ruta specificată
  };

  return (
    <div className="dashboard">
      {/* Banner */}
      <div className="dashboard-banner">
        <h1>Bine ai venit pe Dashboard</h1>
        <p>Accesează sălile și organizează evenimentele tale eficient!</p>
      </div>

      {/* Carduri pentru etaje */}
      <div className="card-container">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="floor-card"
            onClick={() => handleNavigation(i === 0 ? '/parter' : `/etaj${i}`)}
          >
            <div className="floor-icon">
              <FontAwesomeIcon
                icon={i % 2 === 0 ? solidBuilding : regularBuilding} // Alternăm între bold și regular
                size="2x"
              />
            </div>
            <h2>{i === 0 ? 'Parter' : `Etaj ${i}`}</h2>
            <p>Click pentru a vizualiza detalii</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
