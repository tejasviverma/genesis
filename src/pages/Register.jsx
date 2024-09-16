import React from 'react';
import logo from '../assets/logo.png';
import reg from '../assets/reg.png'

const Register = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Registration Form */}
      <div
        className="w-1/2 flex flex-col justify-center items-center p-8 bg-gradient-to-r from-pink-500 from-pink-700 via-orange-500 via-orange-700 to-purple-500 to-purple-700 animate-gradient-move"
       >
        <h1 className="text-4xl font-bold mb-6 text-white">Register</h1>
        <form className="w-full max-w-md">
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="regNumber">
              Registration Number
            </label>
            <input
              id="regNumber"
              type="text"
              placeholder="Enter your registration number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="year">
              Year
            </label>
            <input
              id="year"
              type="text"
              placeholder="Enter your year of study"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Official Email ID
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your official email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </form>
      </div>

      {/* Right side - Logo */}
      <div
        className="w-1/2 bg-black flex justify-center items-center"
        style={{
        backgroundImage: `url(${reg})`,
        backgroundColor: 'rgba(1, 1, 1, 0.7)', // Reduced opacity
         }}
       >

        <img src={logo} alt="Logo" className="w-full h-auto" />
      </div> 
    </div>
  );
};

export default Register;
