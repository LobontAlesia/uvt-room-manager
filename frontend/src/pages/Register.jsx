import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Parolele nu coincid!");
      return;
    }
    console.log("Register submitted:", formData);
    // Redirect to login after successful registration
    navigate("/login");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Înregistrare</h1>
        <form onSubmit={handleRegisterSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nume:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Introduceți numele"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Introduceți emailul"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Parolă:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Introduceți parola"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmare Parolă:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirmați parola"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn-register">
            Înregistrare
          </button>
        </form>
        <p className="login-text">
          Ai deja un cont?{" "}
          <button onClick={() => navigate("/login")} className="btn-login">
            Autentificare
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
