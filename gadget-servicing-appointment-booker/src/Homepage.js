import {React, useEffect} from 'react';

function Homepage(){
  useEffect(() => {
    document.title = "Book an Appointment"; // Set the new page title
  }, []);

  return(
 <div className='body'>
  <h1>Hello World!!!</h1>

 </div>


  )}

  export default Homepage;