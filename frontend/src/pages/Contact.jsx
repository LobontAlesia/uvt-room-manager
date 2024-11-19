import React from 'react';
import './Contact.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mesajul tău a fost trimis cu succes!');
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Afișează 3 carduri pentru ecrane mari
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Pentru ecrane medii
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Pentru ecrane mici
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <div className="contact">
      <div className="contact-header">
        <h1>Universitatea de Vest</h1>
        <p>
          Universitatea de Vest din Timișoara este un important centru educațional și cultural
          din România. De-a lungul timpului, universitatea a devenit gazda unui număr impresionant
          de evenimente, conferințe internaționale și seminarii academice, contribuind la dezvoltarea
          comunității locale și internaționale.
        </p>
      </div>

      <div className="events-section">
        <h2>Evenimente organizate</h2>
        <div className="events-list">
          <Slider {...settings}>
            <div className="event-card">
              <h3>„Conectați la viitor”</h3>
              <p>
                Seria de conferințe de popularizare a științei, abordând subiecte precum criza științei și discursul pseudo-științific.
              </p>
            </div>
            <div className="event-card">
              <h3>Conferința CIRCULARIO</h3>
              <p>
                Eveniment dedicat economiei circulare, organizat în colaborare cu autorități locale și naționale.
              </p>
            </div>
            <div className="event-card">
              <h3>SYNASC</h3>
              <p>
                Symposium on Symbolic and Numeric Algorithms for Scientific Computing.
              </p>
            </div>
            <div className="event-card">
              <h3>Conferința Internațională SPECTO 2024</h3>
              <p>
                Eveniment axat pe perspective multidisciplinare în tratamentul cvasi-coercitiv al infractorilor.
              </p>
            </div>
            <div className="event-card">
              <h3>Conferința Internațională a Doctoranzilor în Drept</h3>
              <p>
                Platformă pentru doctoranzii în drept de a-și prezenta cercetările.
              </p>
            </div>
          </Slider>
        </div>
      </div>

      <div className="map-section">
        <h2>Locația noastră</h2>
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.2008377641214!2d21.22903491128118!3d45.74711947095932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455d84610655bf%3A0xfd169ff24d29f192!2sWest%20University%20of%20Timi%C8%99oara!5e0!3m2!1sen!2sro!4v1732032502397!5m2!1sen!2sro"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Harta Universitatea de Vest"
          ></iframe>
        </div>
      </div>

      <div className="contact-info">
        <h2>Informații de Contact</h2>
        <p>
          <strong><i className="fas fa-map-marker-alt"></i> Adresa:</strong> Bulevardul Vasile Pârvan, Nr. 4, Timișoara, România
        </p>
        <p>
          <strong><i className="fas fa-envelope"></i> Email:</strong> contact@uvt.ro
        </p>
        <p>
          <strong><i className="fas fa-phone"></i> Telefon:</strong> +40 256 592 111
        </p>
      </div>

      <div className="contact-form">
        <h2>Formular de Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nume</label>
            <input type="text" id="name" placeholder="Introdu numele tău" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Introdu adresa ta de email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mesaj</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Scrie mesajul tău aici..."
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-primary">
            Trimite
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
