import React from 'react';

const Login = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Autentificare</h1>
      <form>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Parolă"/>
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
