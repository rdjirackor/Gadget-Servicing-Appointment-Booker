import React, {useEffect} from 'react';
import SendMessageForm from "../components/SendMessageForm";
import CallIcon from '@mui/icons-material/Call';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {

    useEffect(() => {
        document.title = "Contact Us"; 
      }, []); 

    return (
        <div className="contact">
          <div className="top">
                <h1 className='about-head'>Contact Us</h1>
                <p>Home &gt; Contact</p>
            </div>
            <div className="gap">
                <div className="info">
                <div className="info-content">
                    <CallIcon color="primary"/>
                    <p>Direct Call us</p>
                    <p>+059-321-4567</p>
                </div >
                <div className="info-content">
                    <MyLocationIcon color="primary"/>
                    <p>Location</p>
                    <p>Legon, Greater Accra</p>
                </div>
                <div className="info-content">
                    <EmailIcon color="primary"/>
                    <p>Email us</p>
                    <p>support@compu-repair.com</p>
                </div>

                </div>
                <div className="MessageForm">
                    <div className="MToplayer">
                        <EmailIcon color="primary"/>
                        <h3>Send Us a Message</h3>
                    </div>
                    <div className="DropMessage">
                    <p>Drop us a message, and our experts will respond promptly to assist you!</p>

                    </div>
                     
                    
                
                     <SendMessageForm/>

                </div>
              
                <div>
                    
                </div>

            </div>
          
        </div>
    );
}
 
export default Contact;
/* Ellipse 107 */


