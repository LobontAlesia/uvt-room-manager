import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleRegisterRedirect = () => {
    navigate("/register"); // Redirecționează utilizatorul la pagina de înregistrare
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault(); // Previi comportamentul implicit al formularului
    console.log("Login submitted");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Autentificare</h1>
        <form onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Introduceți emailul" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Parolă:</label>
            <input type="password" id="password" placeholder="Introduceți parola" required />
          </div>
          <button type="submit" className="btn-login">
            Login
          </button>
        </form>
        <p className="register-text">
          Nu ai cont?{" "}
          <button onClick={handleRegisterRedirect} className="btn-register">
            Creează un cont
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
