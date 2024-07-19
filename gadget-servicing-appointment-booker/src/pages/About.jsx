import React, { useEffect } from 'react';

import replap from "../assets/img-rep-lap.png";
import good from "../assets/good.png";
import effici from "../assets/efficient.png";


const About = () => {
    return (
        <div className="about">
            <div className="top">
                 <h1>About Us</h1>
                 <p>Home&gt;About Us</p>
            </div>
            <div className="about-description">
                 <div className="image-rep-lap">
                      <img src={replap} alt="Description" className="right-aligned"/>
                      <img src={replap} alt="Description" className="right-aligned"/>
                      <img src={replap} alt="Description" className="right-aligned"/>
                      <img src={replap} alt="Description" className="right-aligned"/>


                 </div>
                 <div className='about-description-header'>
                    <p>We exist to fix your gadgets</p>
                 </div>
                 <div className='about-description-para'>
                    <p>
                    We're here to help you fix all phones and laptops efficiently, 
                    professionally, and affordably, ensuring
                    your devices work perfectly again.</p>
                 </div>
                 <div className='about-icons-and-text'>
                    <div className='about-icons'>
                        <img className='about-good' src={good}/>
                        <img className='about-effici' src={effici}/>
                    </div>
                    <div className='about-text'>
                        <div className='about-text-header'>
                            <p className='affordable'>Quick and Efficient</p>
                            <p className='quality'>Only A-Grade Parts</p>
                        </div>
                        <div className='about-text-descr'>
                            <p className='cheap'>Fix your gadgets without breaking the bank</p>
                            <p className='quality'>Only Mechanical Parts of the highest quality are used in our repairs</p>

                        </div>

                    </div>
                    
                 </div>


            </div>

        </div>
    );
}
 
export default About;