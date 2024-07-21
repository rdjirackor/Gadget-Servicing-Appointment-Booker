import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Questions from '../components/Questions';
import BasicButtons from '../components/BasicButtons';

const Faqs = () => {
    return (
        <div className="faqs">
                <div className="heading">
                <h1>Faqs</h1>
                <p className="Arrow">Home
                      <ArrowForwardIosIcon color="primary" fontSize="small"/> 
                     Contact</p>
                
            </div>
            <div className='faqs-list'>
            <Questions text={"How much will our repair cost?"}/>
            <Questions text={"How to we start repair process?"}/>
            <Questions text={"Repair and replace devices"}/>
            <Questions text={"MacBook repair and replace"}/>
            <Questions text={"What is the our starting process?"}/>
            <Questions text={"Selling Laptop, Desktop, iphone, ipad "}/>
            <Questions text={"Repairing Cost"}/>
            <Questions text={"Replace any kind of Parts"}/>

            </div>
            <div className='faqs-bottom'>
                <h2>Find a laptop repair expert now!</h2>
                <p>Book an appointment with us now and let us repair your laptop for you</p>
                <div className='faqs-button'>
                <BasicButtons label={"View Services"}/>
                <BasicButtons label={"Contact Us"}/>
                </div>
            </div>
        </div>
    );
}
 
export default Faqs;