import React from 'react';
import './Home.css'; // Stiluri specifice paginii Home

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Gestionarea eficientă a sălilor UVT</h1>
        <p>
          Simplifică procesul de organizare a evenimentelor cu o aplicație modernă și intuitivă.
          Rezervă săli, gestionează evenimente și colaborează eficient!
        </p>
        <div className="home-buttons">
          <button className="btn-primary">Începe acum</button>
          <button className="btn-secondary">Află mai multe</button>
        </div>
      </div>
      <div className="home-image">
        <img src="./home.png" alt="Organizare săli" />
      </div>
    </div>
  );
};

export default Home;
