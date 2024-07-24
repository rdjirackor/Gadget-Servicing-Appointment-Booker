import React, { useEffect, useState } from 'react';
import ReactCalendar from '../components/Calendar';
import Time from '../components/Time';
import '../styles/Appointment.css';

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const [laptopSalesNumber, setLaptopSalesNumber] = useState("Laptop Repairs");
  const [repairServicesNumber, setRepairServicesNumber] = useState("Other Gadgets");

  const changeLaptopSalesNumber = () => {
    const newNumber = laptopSalesNumber === "Laptop Repairs" ? "059-987-6543" : "Laptop Repairs";
    setLaptopSalesNumber(newNumber);
  };

  const changeRepairServicesNumber = () => {
    const newNumber = repairServicesNumber === "Other Gadgets" ? "059-123-4567" : "Other Gadgets";
    setRepairServicesNumber(newNumber);
  };

  useEffect(() => {
    document.title = "Book An Appointment"; 
  }, []); 

  return (
    <>
      <div className='top'>
        <h1>Appointments</h1>
        <p>Home {">"} Appointments</p>
      </div>
      <div className="appointment">
        <div className="subtitle">
          <h2>Book an Appointment</h2>
        </div>
        <div className="appointment-container">
          <div className="rectangle bg" onClick={changeLaptopSalesNumber}>
            <div className="rec">
              <p>📞 {laptopSalesNumber} </p>
            </div>
          </div>
          <div className="rectangle bg" onClick={changeRepairServicesNumber}>
            <div className="rec">
              <p>📞 {repairServicesNumber}</p>
            </div>
          </div>
          <div className="rectangle-b">
          <ReactCalendar date={date} setDate={setDate} />
          </div>
          <div className="rectangle-b">
          <Time date={date} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Appointment;
