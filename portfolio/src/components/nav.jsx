import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">
          MySite
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Home</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">About</a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Services</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none transition-transform duration-300 cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with smooth transition */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white px-4 py-4 space-y-2 shadow-md">
          <a href="#home" className="block text-gray-700 hover:text-blue-600 transition-colors duration-300">Home</a>
          <a href="#about" className="block text-gray-700 hover:text-blue-600 transition-colors duration-300">About</a>
          <a href="#services" className="block text-gray-700 hover:text-blue-600 transition-colors duration-300">Services</a>
          <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition-colors duration-300">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
