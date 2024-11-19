import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';

const Home = () => {
  const navigate = useNavigate();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="home">
      <div className="home-slider">
        <Slider {...sliderSettings}>
          <div>
            <img src={image1} alt="Sala 1 UVT" className="slider-image" />
          </div>
          <div>
            <img src={image2} alt="Sala 2 UVT" className="slider-image" />
          </div>
        </Slider>
      </div>

      <div className="home-content">
        <h1>Gestionarea eficientă a sălilor Universității de Vest din Timișoara</h1>
        <p>
          Simplifică procesul de organizare a evenimentelor cu o aplicație modernă și intuitivă.
          Rezervă săli, gestionează evenimente și colaborează eficient!
        </p>
        <div className="home-buttons">
        <button
          className="btn-primary"
          onClick={() => navigate('/dashboard')}
        >
          Începe acum
        </button>
        <button
          className="btn-primary"
          onClick={() => navigate('/contact')}
        >
          Află mai multe
        </button>
      </div>
      </div>
    </div>
  );
};

export default Home;
