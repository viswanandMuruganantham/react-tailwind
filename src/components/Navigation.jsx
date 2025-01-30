import React from 'react';

function Navigation() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo / Branding */}
        <a href="#" className="text-2xl font-bold text-blue-600">TechInsights</a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="text-gray-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:text-white hover:bg-blue-100">About Us</a></li>
          <li><a href="#" className="text-gray-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:text-white hover:bg-blue-100">Services</a></li>
          <li><a href="#" className="text-gray-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:text-white hover:bg-blue-100">Industries</a></li>
          <li><a href="#" className="text-gray-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:text-white hover:bg-blue-100">Blog</a></li>
          <li><a href="#" className="text-gray-100 font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:text-white hover:bg-blue-100">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button id="menu-btn" className="md:hidden text-gray-700 focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
