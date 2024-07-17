import {React, useEffect} from 'react';
import surface from '../assets/surface.png';

function Homepage(){
  useEffect(() => {
    document.title = "Book an Appointment"; // Set the new page title
  }, []);

  return(
 <div className='body'>
  <div className='welcome-banner'>
    <div className='image-with-intro'>
      <img src={surface}></img>
    </div>
  </div>

 </div>
)};

export default Homepage;