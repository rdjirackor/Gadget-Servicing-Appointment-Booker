import '../styles/Calendar.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import React, { useState } from 'react';

const ReactCalendar = () => {
    const [date, setDate] = useState(new Date());
    const onChange = date => {
        setDate(date);
    };

    return (
        <div className="container">
            <div className="calendar">
                <Calendar onChange={onChange} value={date}
                //  className="react-calendar"
                 />
            </div>
            {/* <div className="big-square">
                <div className="small-rectangle"></div>
                <div className="small-rectangle"></div>
                <div className="small-rectangle"></div>
                <div className="small-rectangle"></div>
                <div className="small-rectangle"></div>
                <div className="small-rectangle"></div>
                <div className="small-rectangle"></div>
                <div className="small-rectangle"></div>
                <div className="small-rectangle"></div>
                <div className="small-rectangle"></div>
                <div className="small-rectangle"></div>
                <div className="small-rectangle"></div>
                <div className="small-rectangle"></div>
                <div className="small-rectangle"></div>
                <div className="small-rectangle"></div>
                <div className="small-rectangle"></div>
                <div className="small-rectangle"></div>
                <div className="small-rectangle"></div>
            </div> */}
        </div>
        
    );
};

// render(<ReactCalendar/>, document.querySelector('#root'));
 
export default ReactCalendar;