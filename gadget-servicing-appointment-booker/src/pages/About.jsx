import React, { useEffect } from 'react';


import img from "../assets/img.png";
import good from "../assets/good.png";
import effici from "../assets/efficient.svg";
import cussup from "../assets/customer-support.jpeg";
import great from "../assets/great-team.jpeg";
import quality from "../assets/quality.svg";






const About = () => {
    return (
        <div className="about">
            <div className="top">
                 <h1 className='about-head'>About Us</h1>
                 <p>Home &gt; About Us</p>
            </div>
            <div className="about-description">
            <div className='about-left'>
                     <div className='about-description-header'>
                         <p className='about-bold-header'>Gadget Repairs</p>
                     </div>
                     <div className='about-description-para'>
                         <p>
                          We exist to provide you<br/>
                          repairing services for<br/> 
                          your digital devices</p>
                     </div>
                 <div className='about-icons-and-text'>
                     <div className='icon-conta'>

                        <div className='left'>
                        <img className='about-good' src={quality}/>
                        <p className='quality' ><b>Only A-Grade Parts</b></p>
                        <p className='quality'>Repairs are made with original materials of the highest quality</p>


                        </div>
                        <div className='right'>
                        <img className='about-effici' src={effici}/>
                        <p className='efficient'><b>Quick and efficient</b></p>
                        <p className='efficient'>Our efficient repair process means our repairs are affordable</p>

                        </div>
                        </div>
                          
                        </div>
                        
                    </div>
                 <div className="image-rep-lap">
                      <img src={img} alt="Description" className="right-aligned"/>
                      
                 </div>
                
                    
                 </div>


            <div className='button'><button className='book-appointment-button' >Book Appointment<div className='arrow'/>  
                        </button></div>
                        </div>
    );
}
 
export default About;