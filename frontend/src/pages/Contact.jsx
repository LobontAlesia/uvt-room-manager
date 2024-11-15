import React from 'react';

const Contact = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Contact</h1>
      <p>Ne puteți contacta pentru întrebări sau sugestii.</p>
      <form>
        <input type="email" placeholder="Email"/>
        <textarea placeholder="Mesaj"></textarea>
        <button type="submit">
          Trimite
        </button>
      </form>
    </div>
  );
};

export default Contact;
