import React, {useEffect} from 'react';
import Questions from '../components/Questions';
import Card from '../components/Card';

const Faqs = () => {
    useEffect(() => {
        document.title = "FAQs"; 
      }, []); 
    return (
        <>
         <div className="top">
                <h1>Faqs</h1>
                <p>Home &gt; FAQs</p>
                
            </div>
        <div className="faqs">
               
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
        </div>
        <Card/>

        </>
    );
    
}
 
export default Faqs;