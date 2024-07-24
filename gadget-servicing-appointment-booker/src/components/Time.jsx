import React, { useState } from "react";
import '../styles/Time.css';

const Time = ({ date }) => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [confirmedTime, setConfirmedTime] = useState(null);
const options = { day: 'numeric', month: 'long', year: 'numeric' };
const formattedDate = date.toLocaleDateString('en-GB', options);


  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    setConfirmedTime(selectedTime);
  };
  const handleReturn = () => {
    setConfirmedTime(null);
  };

  const renderTimeSlots = () => {
    const timeSlots = [
      "9:30 - 10:00", "10:10 - 10:40", "10:50 - 11:20", "11:30 - 12:00",
      "12:10 - 12:40", "12:50 - 13:20", "13:30 - 14:00", "14:10 - 14:40",
      "14:50 - 15:20", "15:30 - 16:00", "16:10 - 16:40", "16:50 - 17:00",
      "17:10 - 17:40", "17:50 - 18:20", "18:30 - 19:00", "19:10 - 19:40",
      "19:50 - 20:20", "20:30 - 21:00"
    ];

    return timeSlots.map((time) => (
      <div
        key={time}
        className={`small-rectangle ${confirmedTime === time ? 'confirmed' : ''}`}
        style={{
          backgroundColor: confirmedTime
            ? (confirmedTime === time ? 'green' : 'gray')
            : (selectedTime === time ? '#ddd' : '')
        }}
        onClick={() => handleTimeClick(time)}
      >
        {time}
      </div>
    ));
  };

  return (
    <div className="big-square">
      {renderTimeSlots()}
      {selectedTime && !confirmedTime && (
        <div className="confirmation-box">
          <p>You have selected {selectedTime} and {formattedDate} </p>
          <p style={{fontWeight:'bold', fontSize:'20px'}}>Confirm?</p>
          <button onClick={handleConfirm}>Yes</button>
          <button onClick={handleReturn}>No</button>

        </div>
      )}
    </div>
  );
};

export default Time;
