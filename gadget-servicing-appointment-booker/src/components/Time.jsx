import React, { useState } from "react";
import '../styles/Time.css'; // Ensure you have this file for the styles

const Time = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [confirmedTime, setConfirmedTime] = useState(null);

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    setConfirmedTime(selectedTime);
  };

  const renderTimeSlots = () => {
    const timeSlots = [
      "9:30 - 10:00", "10:10 - 10:40", "10:50 - 11:20", "11:30 - 12:00",
      "12:10 - 12:40", "12:50 - 1:20", "1:30 - 2:00", "2:10 - 2:40",
      "2:50 - 3:20", "3:30 - 4:00", "4:10 - 4:40", "4:50 - 5:00",
      "5:10 - 5:40", "5:50 - 6:20", "6:30 - 7:00", "7:10 - 7:40",
      "7:50 - 8:20", "8:30 - 9:00"
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
          <p>You have selected {selectedTime}. Confirm?</p>
          <button onClick={handleConfirm}>Yes</button>
        </div>
      )}
    </div>
  );
};

export default Time;
