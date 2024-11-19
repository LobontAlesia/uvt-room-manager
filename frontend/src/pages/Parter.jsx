import React, { useState } from 'react';
import { Modal, Button, message } from 'antd'; 
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Parter.css';

const Parter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedRoom, setSelectedRoom] = useState(''); 
  const [reservations, setReservations] = useState({}); 

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

    // Creează un nou eveniment
    calendarApi.unselect(); // Deselectează zona selectată
    const title = prompt('Introdu numele evenimentului:');
    if (title) {
      const newEvent = {
        id: String(Date.now()), // Un ID unic
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      };

      // Adaugă rezervarea în state-ul specific sălii
      setReservations((prevReservations) => {
        const roomReservations = prevReservations[selectedRoom] || [];
        return {
          ...prevReservations,
          [selectedRoom]: [...roomReservations, newEvent],
        };
      });

      message.success('Rezervarea a fost adăugată cu succes!');
    }
  };

  // Funcție pentru a șterge o rezervare
  const handleEventClick = (clickInfo) => {
    Modal.confirm({
      title: 'Șterge rezervarea',
      content: `Ești sigur că vrei să ștergi rezervarea "${clickInfo.event.title}"?`,
      okText: 'Da',
      cancelText: 'Nu',
      onOk: () => {
        // Șterge evenimentul din state
        setReservations((prevReservations) => {
          const roomReservations = prevReservations[selectedRoom] || [];
          const updatedReservations = roomReservations.filter(
            (event) => event.id !== clickInfo.event.id
          );
          return {
            ...prevReservations,
            [selectedRoom]: updatedReservations,
          };
        });

        clickInfo.event.remove(); // Șterge evenimentul din calendar
        message.success('Rezervarea a fost ștearsă cu succes!');
      },
    });
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
          eventClick={handleEventClick} // Permite ștergerea unui eveniment
        />
      </Modal>
    </div>
  );
};

export default Parter;
