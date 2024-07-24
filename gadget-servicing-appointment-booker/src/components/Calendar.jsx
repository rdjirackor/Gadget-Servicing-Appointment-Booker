import React from 'react';
import Calendar from 'react-calendar';
import '../styles/Calendar.css';
import 'react-calendar/dist/Calendar.css';

const ReactCalendar = ({ date, setDate }) => {
  const onChange = date => {
    setDate(date);
  };

  return (
    <div className="container">
      <div className="calendar">
        <Calendar onChange={onChange} value={date} />
      </div>
    </div>
  );
};

export default ReactCalendar;
