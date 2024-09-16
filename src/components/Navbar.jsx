import React, { useEffect } from 'react';

const Navbar = () => (
  <div className='w-full fixed top-0 left-0 z-50'>
    <div></div>

    <nav className='flex justify-between p-4 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 to-purple-500 animate-gradient-move'>
      <div className="text-2xl font-bold text-white"><a href='#home'>Genesis </a></div>
      <div className="space-x-4 text-white">
        <a href="#vision" className="hover:text-gray-300">Vision of Genesis</a>
        <a href="#team" className="hover:text-gray-300">Team</a>
        <a href="#events" className="hover:text-gray-300">Events</a>
        <a href="#contact" className="hover:text-gray-300">Contact Us</a>
      </div>
    </nav>
  </div>
);

export default Navbar;
