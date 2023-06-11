import React from 'react';
import '../CSS/navbar.css'

const Navbar = () => {
  return (
    <div className='navi'>
      <nav className="bg-gray-900 navbar">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-16">
            <div className="flex-shrink-0">
              <span className="text-white font-semibold text-xl mr-8 gr-text">UNITEUP</span>
            </div>
            <div className="flex">
              <button className="text-gray-000 hover:bg-gray-800 hover:text-white px-6 py-2 rounded-md text-sm font-medium mr-4"></button>
              <button className="text-gray-100 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-4">HOME</button>
              <button className="text-gray-100 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-4">PROJECT</button>
              <button className="text-gray-100 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-4">ABOUT US</button>
              <button className="text-gray-100 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-4">FEATURES</button>
              <button className="text-gray-100 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium">SIGN UP</button>
            </div>
          </div>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;