import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  // Starea pentru profil
  const [profile, setProfile] = useState({
    photo: 'https://via.placeholder.com/150', // Poza de profil temporară
    name: 'Alesia Popescu',
    email: 'alesia.popescu@example.com',
    institution: 'Universitatea de Vest Timișoara',
    reservations: ['Sala A01', 'Sala A02', 'Sala 003'], // Rezervări temporare
  });

  // Starea pentru editare
  const [isEditing, setIsEditing] = useState(false);
  const [editProfile, setEditProfile] = useState(profile);

  // Funcție pentru deschiderea formularului de editare
  const handleEdit = () => {
    setEditProfile(profile); // Pregătește starea inițială pentru editare
    setIsEditing(true);
  };

  // Funcție pentru închiderea formularului
  const handleCancel = () => {
    setIsEditing(false);
  };

  // Funcție pentru salvarea modificărilor
  const handleSave = () => {
    setProfile(editProfile); // Salvează noile date
    setIsEditing(false);
  };

  // Funcție pentru actualizarea datelor în formular
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="profile">
      {/* Banner */}
      <div className="profile-banner">
        <h1>Bine ai venit pe profilul tău!</h1>
        <p>Aici poți vizualiza sau edita informațiile tale și sălile rezervate.</p>
      </div>

      {/* Cardul cu informațiile utilizatorului */}
      <div className="profile-card">
        <img src={profile.photo} alt="Profil" className="profile-photo" />
        <h2>{profile.name}</h2>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Instituție:</strong> {profile.institution}</p>
        <div className="reservations">
          <h3>Rezervările tale</h3>
          <ul>
            {profile.reservations.map((room, index) => (
              <li key={index}>{room}</li>
            ))}
          </ul>
        </div>
        <button className="btn-edit" onClick={handleEdit}>Editează Profil</button>
      </div>

      {/* Formular pentru editare */}
      {isEditing && (
        <div className="edit-modal">
          <div className="edit-card">
            <h2>Editează Profilul</h2>
            <label>
              Nume:
              <input
                type="text"
                name="name"
                value={editProfile.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={editProfile.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Instituție:
              <input
                type="text"
                name="institution"
                value={editProfile.institution}
                onChange={handleChange}
              />
            </label>
            <label>
              Poză de Profil (URL):
              <input
                type="text"
                name="photo"
                value={editProfile.photo}
                onChange={handleChange}
              />
            </label>
            <div className="edit-actions">
              <button className="btn-save" onClick={handleSave}>Salvează</button>
              <button className="btn-cancel" onClick={handleCancel}>Anulează</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
