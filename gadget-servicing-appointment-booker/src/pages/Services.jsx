import React from 'react';
import { Link } from 'react-router-dom';

// Importing the 6 images on the page
import first from '../assets/first.png';
import second from '../assets/second.png';
import third from '../assets/third.png';
import fourth from '../assets/fourth.png';
import fifth from '../assets/fifth.png';
import sixth from '../assets/sixth.png';

//Importing Card and Footer
import Card from '../components/Card';
import Footer from '../components/Footer';

const servicesDataTop = [
    { img: first, title: 'iPhone Repair', description: 'Professional iPhone repair service' },
    { img: second, title: 'Laptop Repair', description: 'Professional Laptop repair service' },
    { img: third, title: 'Tablet Repair', description: 'Professional Tablet repair service' },
];

const servicesDataDown = [
    { img: fourth, title: 'Smartwatch Repair', description: 'Professional Smartwatch repair service' },
    { img: fifth, title: 'Console Repair', description: 'Professional Console repair service' },
    { img: sixth, title: 'Other Repair', description: 'Professional repair service for other devices' },
];

const Services = () => {
    return (
        <div className="services">
            <div className="top">
                <h1 className='about-head'>Services</h1>
                <p>Home &gt; Services</p>
            </div>
            <div className='service-images'>
                <div className='row'>
                    {servicesDataTop.map((service, index) => (
                        <div className='service-card' key={index}>
                            <img src={service.img} alt={service.title} className='service-image'/>
                            <div className='service-info'>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <Link to="/service-detail" className='read-more'>Read More &gt;</Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='row'>
                    {servicesDataDown.map((service, index) => (
                        <div className='service-card' key={index}>
                            <img src={service.img} alt={service.title} className='service-image'/>
                            <div className='service-info'>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <Link to="/service-detail" className='read-more'>Read More &gt;</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Card/>


        </div>
    );
}

export default Services;
