import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImage from './img/logo.jpg';

function Navbar() {
  return (
    <nav className="bg-white-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-2">
                <img src={logoImage} alt="Logo" className="h-10" />
                <span className="text-xl text-green-500 font-bold">CREDIT SMART</span>
              </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-black hover:text-indigo-200">Home</Link>
          <Link to="/about" className="text-black hover:text-indigo-200">About</Link>
          <Link to="/services" className="text-black hover:text-indigo-200">Services</Link>
          <Link to="/signup" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Sign Up</Link>
          <Link to="/login" className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
