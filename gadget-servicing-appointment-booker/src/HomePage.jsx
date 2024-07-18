import React from 'react';

const Homepage = () => {
  return (
    <div className="p-8">
      <div className="bg-white-100 p-6 shadow-md mb-6 flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold mb-2">24/7 Repair Service Available</h2>
        <p className="text-gray-700 text-base mb-4">Book an appointment to repair your electronic gadgets</p>
        <div className="space-x-4">
          <button className="rounded-lg shadow-lg px-6 py-3 bg-blue-500 text-white hover:bg-blue-600 transition duration-300">Service</button>
          <button className="rounded-lg shadow-lg px-6 py-3 bg-white text-blue-500 hover:bg-gray-300 transition duration-300">Contact Us</button>
        </div>
      </div>
      
    </div>
  );
};

export default Homepage;
