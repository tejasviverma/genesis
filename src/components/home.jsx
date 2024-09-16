import React, { useEffect, useRef } from 'react';
import backgroundImage from '../assets/bg.png';
import logo from '../assets/logo.png';

const Home = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    // Add the animation class when the component is mounted
    if (imageRef.current) {
      imageRef.current.classList.add('animate-slide-diagonal');
    }
  }, []);

  return (
    <div
      className="bg-dark text-white min-h-screen bg-cover bg-center flex items-center justify-between px-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      id='home'
    >
      {/* Left side - text */}
      <div className="text-left w-1/2">
        <h1 className="text-5xl font-bold">Explore the WEB3 Realm with GENESIS</h1>
        <p className="mt-8 text-xl text-red-500" style={{ textShadow: '0 0 10px white' }}> 
        Smart Contracts x Community
        </p>
        <button
          className="mt-8 py-2 px-4 rounded"
          style={{ backgroundColor: '#9B2DFF' }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#7A00E0')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#9B2DFF')}
        >
         <a href='/Register'>Join Us</a> 
        </button>
      </div>

      {/* Right side - image */}
      <div
        ref={imageRef}
        className="w-1/2 flex justify-center items-center"
      >
        <img
          src={logo}
          alt="Web3 Illustration"
          className="animate-slide-diagonal"  // Applying the animation class
        />
      </div>
    </div>
  );
};

export default Home;





