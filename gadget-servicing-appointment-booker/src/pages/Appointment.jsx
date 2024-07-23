import ReactCalendar from '../components/Calendar';
import Time from '../components/Time';
import '../styles/Appointment.css';

const Appointment = () => {
    return (
        <div className="appointment">
            <div className="appointment-text">
                <h1>Appointment</h1>
                <p>Home {">"} Appointment</p>
            </div>
            <div className="subtitle">
            <h2>Book an Appointment</h2>
            </div>
            <div className="appointment-container">
                <div className="rectangle bg">
                    <div className="rec">
                        <p>📞 Laptop Sales</p>
                    </div>
                </div>
                <div className="rectangle bg">
                    <div className="rec">
                        <p>📞 Repair Services</p>
                    </div>
                </div>
                <div className="rectangle">
                    <ReactCalendar/>
                </div>
                <div className="rectangle">
                    <Time/>
                </div>
            </div>
            
        </div>
    );
}
 
export default Appointment;