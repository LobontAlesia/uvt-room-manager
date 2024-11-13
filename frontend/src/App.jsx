import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // pentru click și drag-and-drop

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Calendar Demo</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth" // Afișează calendarul în modul lunar
        editable={true} // Permite modificarea evenimentelor
        selectable={true} // Permite selectarea zilelor
        events={[
          { title: 'Eveniment 1', date: '2024-11-15' },
          { title: 'Eveniment 2', date: '2024-11-16' },
        ]} // Evenimente presetate
      />
    </div>
  );
};

export default App;
