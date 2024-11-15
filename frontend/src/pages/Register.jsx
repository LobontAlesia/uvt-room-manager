import React from 'react';

const Register = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Înregistrare</h1>
      <form>
        <input type="text" placeholder="Nume"/>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Parolă"/>
        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
