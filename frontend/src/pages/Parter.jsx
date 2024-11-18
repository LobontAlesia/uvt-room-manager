import React, { useState } from 'react';
import { Modal, Button, message } from 'antd'; // Importăm componentele necesare
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import moment from 'moment';
import './Parter.css';

const Parter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Controlăm afișarea modalului
  const [selectedRoom, setSelectedRoom] = useState(''); // Păstrează sala selectată
  const [reservations, setReservations] = useState({}); // Rezervările pentru fiecare sală

  // Funcție pentru a deschide modalul
  const openModal = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  // Funcție pentru a închide modalul
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRoom('');
  };

  // Funcție pentru a adăuga o rezervare
  const handleDateSelect = (selectInfo) => {
    const calendarApi = selectInfo.view.calendar;

    const title = prompt('Introdu numele evenimentului:'); // Prompt pentru numele evenimentului
    const startTime = prompt('Introdu ora de început (format HH:mm):'); // Prompt pentru ora de început

    if (title && startTime) {
      const [hour, minute] = startTime.split(':').map(Number); // Descompune ora și minutul
      const start = moment(selectInfo.startStr).set({ hour, minute });
      const end = start.clone().add(1.5, 'hours'); // Adaugă durata fixă de 1 oră și jumătate

      const newEvent = {
        id: String(Date.now()), // ID unic
        title,
        start: start.toISOString(),
        end: end.toISOString(),
      };

      // Adaugă evenimentul în rezervările camerei selectate
      setReservations((prevReservations) => {
        const roomReservations = prevReservations[selectedRoom] || [];
        return {
          ...prevReservations,
          [selectedRoom]: [...roomReservations, newEvent],
        };
      });

      calendarApi.unselect(); // Deselectează zona selectată
      message.success('Rezervarea a fost adăugată cu succes!');
    } else {
      message.error('Rezervarea nu a fost creată. Asigură-te că ai completat toate câmpurile.');
    }
  };

  return (
    <div className="parter">
      <div className="button-container">
        <button className="floor-button active">Parter</button>
        <button className="floor-button">Etaj 1</button>
        <button className="floor-button">Etaj 2</button>
        <button className="floor-button">Etaj 3</button>
        <button className="floor-button">Etaj 4</button>
        <button className="floor-button">Etaj 5</button>
        <button className="floor-button">Etaj 6</button>
        <button className="floor-button">Etaj 7</button>
      </div>

      <div className="sketchfab-embed-wrapper">
        <iframe
          title="UVT_Parter"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/5be604b9a78043e99c6a08580815e6c6/embed"
        ></iframe>
      </div>

      {/* Secțiunea Amfiteatre */}
      <div className="section">
        <h2>Amfiteatre</h2>
        <div className="button-container">
          <button className="room-button" onClick={() => openModal('AM')}>AM</button>
          <button className="room-button" onClick={() => openModal('A01')}>A01</button>
          <button className="room-button" onClick={() => openModal('A02')}>A02</button>
        </div>
      </div>

      {/* Secțiunea Laboratoare/Seminarii */}
      <div className="section">
        <h2>Laboratoare/Seminarii</h2>
        <div className="button-container">
          <button className="room-button" onClick={() => openModal('002')}>002</button>
          <button className="room-button" onClick={() => openModal('003')}>003</button>
          <button className="room-button" onClick={() => openModal('004')}>004</button>
          <button className="room-button" onClick={() => openModal('005')}>005</button>
          <button className="room-button" onClick={() => openModal('028')}>028</button>
          <button className="room-button" onClick={() => openModal('029')}>029</button>
          <button className="room-button" onClick={() => openModal('031')}>031</button>
          <button className="room-button" onClick={() => openModal('032')}>032</button>
          <button className="room-button" onClick={() => openModal('033')}>033</button>
          <button className="room-button" onClick={() => openModal('048')}>048</button>
          <button className="room-button" onClick={() => openModal('059')}>059</button>
          <button className="room-button" onClick={() => openModal('F020')}>F020</button>
        </div>
      </div>

      {/* Modal pentru rezervare */}
      <Modal
        title={`Rezervare pentru sala: ${selectedRoom}`}
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
        width={800}
      >
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          editable={true}
          selectable={true}
          events={reservations[selectedRoom] || []} // Afișează rezervările pentru sala selectată
          slotMinTime="08:00:00"
          slotMaxTime="22:00:00"
          select={handleDateSelect} // Permite selectarea unei date
        />
      </Modal>
    </div>
  );
};

export default Parter;
