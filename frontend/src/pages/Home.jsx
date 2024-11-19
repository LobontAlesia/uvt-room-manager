import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/0.jpg';
import image2 from '../assets/1.jpg';
import image3 from '../assets/2.jpg';
import image4 from '../assets/3.jpg';
import image5 from '../assets/4.jpg';
import image6 from '../assets/5.jpg';


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
          <div>
            <img src={image3} alt="Sala 3 UVT" className="slider-image" />
          </div>
          <div>
            <img src={image4} alt="Sala 4 UVT" className="slider-image" />
          </div>
          <div>
            <img src={image5} alt="Sala 5 UVT" className="slider-image" />
          </div>
          <div>
            <img src={image6} alt="Sala 6 UVT" className="slider-image" />
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
