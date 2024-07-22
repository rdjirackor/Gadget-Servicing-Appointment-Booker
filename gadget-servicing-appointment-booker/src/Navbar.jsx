import React from 'react';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();

  return (
    <nav className="bg-white p-4">
      <div className="container ml-auto flex justify-between items-center">
        <div className="text-black text-3xl font-bold">
          <h2>Computer</h2>
          <h2>Doctor</h2>
          </div>
        <div className="flex items-center space-x-4 ml-auto">
          <button className="text-black hover:text-gray-400" onClick={() => history.push('/')}>Home</button>
          <button className="text-black hover:text-gray-400" onClick={() => history.push('/about')}>About</button>
          <button className="text-black hover:text-gray-400" onClick={() => history.push('/pages')}>Pages</button>
          <button className="text-black hover:text-gray-400" onClick={() => history.push('/services')}>Services</button>
          <button className="text-black hover:text-gray-400" onClick={() => history.push('/appointment')}>Book Appointment</button>
          <button className="text-black hover:text-gray-400" onClick={() => history.push('/contact')}>Contact</button>
          <div className="relative text-gray-600 ml-4">
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M12.9 14.32a8 8 0 111.42-1.42l5.18 5.18a1 1 0 01-1.42 1.42l-5.18-5.18zM8 14a6 6 0 100-12 6 6 0 000 12z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col space-y-2 mt-2">
        <button className="text-white hover:text-gray-400" onClick={() => history.push('/')}>Home</button>
        <button className="text-white hover:text-gray-400" onClick={() => history.push('/about')}>About</button>
        <button className="text-white hover:text-gray-400" onClick={() => history.push('/pages')}>Pages</button>
        <button className="text-white hover:text-gray-400" onClick={() => history.push('/services')}>Services</button>
        <button className="text-white hover:text-gray-400" onClick={() => history.push('/appointment')}>Book Appointment</button>
        <button className="text-white hover:text-gray-400" onClick={() => history.push('/contact')}>Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
