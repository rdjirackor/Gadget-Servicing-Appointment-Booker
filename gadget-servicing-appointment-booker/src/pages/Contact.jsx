import BasicButtons from "../components/BasicButtons";
import CheckboxLabels from "../components/CheckboxLabels";
import SendMessageForm from "../components/SendMessageForm";
import CallIcon from '@mui/icons-material/Call';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    return (
        <div className="contact">
            <div className="heading">
                <h1>Contact us</h1>
                <p>Home Contact</p>
                
            </div>
            <div >
                <div className="info">
                <div className="info-content">
                    <CallIcon/>
                    <p>Direct Call us</p>
                    <p>+0 123-456-7890</p>
                    <p>+0 123-456-7890</p>
                </div >
                <div className="info-content">
                    <MyLocationIcon/>
                    <p>Location</p>
                    <p>123 Tech Street, Cityname, Country</p>
                </div>
                <div className="info-content">
                    <EmailIcon/>
                    <p>Email us</p>
                    <p>support@themeix.com</p>
                </div>

                </div>
              
                <SendMessageForm/>
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