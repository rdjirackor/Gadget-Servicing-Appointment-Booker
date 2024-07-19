import BasicButtons from "../components/BasicButtons";
import CheckboxLabels from "../components/CheckboxLabels";
import SendMessageForm from "../components/SendMessageForm";
import CallIcon from '@mui/icons-material/Call';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Contact = () => {
    return (
        <div className="contact">
            <div className="heading">
                <h1>Contact us</h1>
                <p className="Arrow">Home
                      <ArrowForwardIosIcon color="primary" fontSize="small"/> 
                     Contact</p>
                
            </div>
            <div className="gap">
                <div className="info">
                <div className="info-content">
                    <CallIcon color="primary"/>
                    <p>Direct Call us</p>
                    <p>+0 123-456-78888</p>
                </div >
                <div className="info-content">
                    <MyLocationIcon color="primary"/>
                    <p>Location</p>
                    <p>123 Tech Street, Cityname</p>
                </div>
                <div className="info-content">
                    <EmailIcon color="primary"/>
                    <p>Email us</p>
                    <p>support@themeix.com</p>
                </div>

                </div>
                <div className="MessageForm">
                    <div className="MToplayer">
                        <EmailIcon color="primary"/>
                        <h3>Send Us a Message</h3>
                    </div>
                     
                        <p>Drop us a message, and our experts will respond promptly to assist you!</p>
                    
                
                     <SendMessageForm/>

                </div>
              
                <CheckboxLabels lable={"Sign up to receive the Idea Catalyst newsletter filled with our latest thinking, insights, and provocations on corporate innovation"}/>
                <div>
                    <h3>
                        Purpose of Inquiry
                    </h3>
                    <CheckboxLabels lable={"Learn more about Clarizent services"}/>
                    <CheckboxLabels lable={"Scope my project"}/>
                    <CheckboxLabels lable={"Discuss media and partnership"}/>
                    <CheckboxLabels lable={"other"}/>
 
                </div>
                <BasicButtons label={"Send Message"}/>

            </div>
          
        </div>
    );
}
 
export default Contact;