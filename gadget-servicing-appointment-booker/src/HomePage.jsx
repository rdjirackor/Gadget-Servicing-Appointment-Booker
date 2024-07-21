import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHeadset, faShieldAlt, faTruck, faWrench, faShoppingCart, faMobileAlt, faDesktop, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faRegistered } from '@fortawesome/free-solid-svg-icons'; 



const Homepage = () => {
  return (
    <div className="p-8">
      {/* Existing Sections */}
      <div className="relative bg-[url('https://plus.unsplash.com/premium_photo-1683326528070-4ebec9188ae1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5uZXIlMjB2ZXclMjBvZiUyMGRlc2t0b3B8ZW58MHx8MHx8fDA%3D')] bg-cover bg-center p-6 shadow-md mb-6 flex flex-col items-center justify-center text-center">
    <div className="bg-white bg-opacity-70 p-6 flex flex-col items-center justify-center text-center">
    <h2 className="text-2xl font-bold mb-2">24/7 Repair Service Available</h2>
    <p className="text-gray-700 text-base mb-4">Book an appointment to repair your electronic gadgets</p>
    <div className="space-x-4">
      <button className="rounded-lg shadow-lg px-6 py-3 bg-blue-500 text-white hover:bg-blue-600 transition duration-300">Service</button>
      <button className="rounded-lg shadow-lg px-6 py-3 bg-white text-blue-500 hover:bg-gray-300 transition duration-300">Contact Us</button>
    </div>
  </div>
</div>


      <div className="bg-white p-6 shadow-md mb-4 w-full mx-auto text-center max-w-4xl">
        <h2 className="text-2xl font-semibold mb-2">Request a Service Repair</h2>
        <p className="mb-4">Book an appointment with us now</p>
        <div className="flex space-x-4 justify-center mt-4">
          <input
            type="text"
            placeholder="Name"
            className="rounded-lg shadow-md px-2 py-3 bg-gray-100 text-black transition duration-300 w-full max-w-xs"
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg shadow-md px-2 py-3 bg-gray-100 text-black transition duration-300 w-full max-w-xs" />
          <button className="rounded-lg shadow-md px-2 py-3 bg-gray-100 text-black hover:bg-blue-300 transition duration-300 w-full max-w-xs">
            Book A Service
          </button>
        </div>
      </div>

      <div className="bg-white p-6 mb-6">
        <div className="flex space-x-4 justify-center">
          <div className="bg-white flex flex-col items-center justify-center h-40 w-48 p-4">
            <div className="bg-blue-300 text-white rounded-full p-4 mb-2">
              <FontAwesomeIcon icon={faUsers} size="2x" />
            </div>
            <h3 className="text-lg font-bold">Great Team</h3>
            <p className="text-sm">We have a team of computer experts ready to solve your problem</p>
          </div>
          <div className="bg-white flex flex-col items-center justify-center h-40 w-48 p-4">
            <div className="bg-green-300 text-white rounded-full p-4 mb-2">
              <FontAwesomeIcon icon={faHeadset} size="2x" />
            </div>
            <h3 className="text-lg font-bold">Customer Support</h3>
            <p className="text-sm">The self-interest been children. I knowing train the instruments, actually</p>
          </div>
          <div className="bg-white flex flex-col items-center justify-center h-40 w-48 p-4">
            <div className="bg-red-300 text-white rounded-full p-4 mb-2">
              <FontAwesomeIcon icon={faShieldAlt} size="2x" />
            </div>
            <h3 className="text-lg font-bold">Quality Guarantee</h3>
            <p className="text-sm">Must understood. Hand painted, who very unmolested periodic your film design</p>
          </div>
          <div className="bg-white flex flex-col items-center justify-center h-40 w-48 p-4">
            <div className="bg-yellow-300 text-white rounded-full p-4 mb-2">
              <FontAwesomeIcon icon={faTruck} size="2x" />
            </div>
            <h3 className="text-lg font-bold">Free Delivery</h3>
            <p className="text-sm">The slept control by first be right, and left men's own tin, without at the in project</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 shadow-md mb-4 mx-auto text-center max-w-4xl">
        <div className="flex items-center">
          {/* Square section with an image */}
          <div className="flex-shrink-0 h-80 w-60 bg-gray-200">
            <img src="https://plus.unsplash.com/premium_photo-1683134238579-a7575f7eba35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaG5pY2FsJTIwYmFja2dyb3VnJTIwZm9yJTIwc3lzdGVtJTIwdW5pdHxlbnwwfHwwfHx8MA%3D%3D" alt="Description" className="h-full w-full object-cover" />
          </div>

          {/* Rectangle section with text and images */}
          <div className="flex-1 pl-6 text-left">
            <h3 className="text-xl font-bold mb-2">
              We’re here to help you to fix all types of phones, iPhones, and laptops.
            </h3>
            <p className="text-sm mb-4">
              We specialize in repairing all types of phones, including iPhones, and laptops with professional and reliable service.
            </p>

            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-blue-500 text-white rounded-full p-3 mr-3">
                <FontAwesomeIcon icon={faWrench} size="lg" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Replace Device</h4>
                <p className="text-sm">The were a claim hair was deep may she this carpeting</p>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-green-500 text-white rounded-full p-3 mr-3">
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Buy and Sell Device</h4>
                <p className="text-sm">Last how absolutely have attention and torn of up</p>
              </div>
            </div>

            {/* New Repair Device Section */}
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 bg-red-500 text-white rounded-full p-3 mr-3">
                <FontAwesomeIcon icon={faWrench} size="lg" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Repair Device</h4>
                <p className="text-sm">Right systems textile either self-interest. Object hadn't</p>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">View Services</button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300">Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Our Services */}
      <div className="bg-blue-50 p-6  mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Our Service</h2>
        <p className="text-gray-700 text-base mb-6 text-center">
          We all count on our cell phones and computers to get us through our day. They keep us connected to friends, family, and work.
        </p>
        
        <div className="flex space-x-6 justify-center">
          {/* Square Box 1 */}
          <div className="bg-gray-100 flex flex-col items-center justify-center h-64 w-64 rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full h-1/2 flex items-center justify-center bg-blue-200">
              <FontAwesomeIcon icon={faMobileAlt} size="3x" className="text-blue-600 absolute" />
              <img src="https://media.istockphoto.com/id/1262832016/photo/technicians-to-fix-mobile-phones.jpg?s=612x612&w=0&k=20&c=VfLmKqFiMpYIsVIx1YLRIPgJoKPfRIsNmtQC9Ow4QdU=" alt="Smartphone Repair" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white">
              <h3 className="text-lg font-bold mb-2">Smartphone Repairs</h3>
              <p className="text-sm mb-4">
                Ideas it would brought city, been a concise upper office propitiously necessary though
              </p>
              <a href="#" className="text-blue-500 flex items-center space-x-1">
                <span>Read more</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>

          {/* Square Box 2 */}
          <div className="bg-gray-100 flex flex-col items-center justify-center h-64 w-64 rounded-lg shadow-md overflow-hidden">
  <div className="relative w-full h-1/2 flex items-center justify-center bg-green-200">
    <div className="flex items-center justify-center w-16 h-16 bg-green-600 rounded-full absolute">
      <FontAwesomeIcon icon={faDesktop} size="2x" className="text-white" />
    </div>
    <img src="https://media.istockphoto.com/id/927087640/photo/computer-repairman-it-support-computer-technician-engineer-man-support-service-concept-system.webp?b=1&s=170667a&w=0&k=20&c=pNUXw-8oMsZUe25IHGeZFV3HLHTbctSqGGBDUlcfQeQ=" alt="Smartphone Repair" className="w-full h-full object-cover" />
  </div>
  <div className="flex flex-col items-center justify-center p-4 bg-white">
    <h3 className="text-lg font-bold mb-2">Desktop Repairs</h3>
    <p className="text-sm mb-4">
      Set power royal this boss it and of take all that, space hands and of the found in week
    </p>
    <a href="#" className="text-blue-500 flex items-center space-x-1">
      <span>Read more</span>
      <FontAwesomeIcon icon={faArrowRight} />
    </a>
  </div>
</div>


          {/* Square Box 3 */}
          <div className="bg-gray-100 flex flex-col items-center justify-center h-64 w-64 rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full h-1/2 flex items-center justify-center bg-red-200">
              <FontAwesomeIcon icon={faLaptop} size="3x" className="text-red-600 absolute text-center" />
              <img src="https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="Smartphone Repair" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-white">
              <h3 className="text-lg font-bold mb-2">Laptop sales</h3>
              <p className="text-sm mb-2 w-100">
              Chooses by not must structure to him all findings. Sitting into the and we he everyday
              </p>
              <a href="#" className="text-blue-500 flex items-center space-x-1">
                <span>Read more</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
        <div className="p-6 mb-6">
        <div className="bg-white mx-auto mt-0 text-center max-w-4xl  p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">Get your laptop fixed in 24 hours</h2>
      <p className="text-gray-700 text-base mb-6">
        We have strong feelings about planning. So strong, in fact, that we believe they deserve their own manifesto.
      </p>
      <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
        </div>
        </div>

      <footer className="bg-white text-black py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Computer Doctor Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Computer Doctor</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Mobile Repair</a></li>
              <li><a href="#" className="hover:underline">Laptop Screen Fix</a></li>
              <li><a href="#" className="hover:underline">Display Repair</a></li>
              <li><a href="#" className="hover:underline">Phone Unlock</a></li>
              <li><a href="#" className="hover:underline">Mobile Screen Fix</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Mobile Repair</a></li>
              <li><a href="#" className="hover:underline">Laptop Screen Fix</a></li>
              <li><a href="#" className="hover:underline">Display Repair</a></li>
              <li><a href="#" className="hover:underline">Phone Unlock</a></li>
              <li><a href="#" className="hover:underline">Mobile Screen Fix</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <ul className="space-y-2">
              <li><a href="#" className="flex items-center space-x-2 hover:underline"><FontAwesomeIcon icon={faFacebookF} /> Facebook</a></li>
              <li><a href="#" className="flex items-center space-x-2 hover:underline"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
              <li><a href="#" className="flex items-center space-x-2 hover:underline"><FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn</a></li>
              <li><a href="#" className="flex items-center space-x-2 hover:underline"><FontAwesomeIcon icon={faPinterestP} /> Pinterest</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Enter your email address</p>
            <form>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-md text-black mb-4"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-left">
          <p>©2024 - Computer Doctor. All Rights Reserved by HCI Group 11 <FontAwesomeIcon icon={faRegistered} className="ml-2" /></p>
        </div>
      </div>
    </footer>
  
    </div>
    
  );
};

export default Homepage;
