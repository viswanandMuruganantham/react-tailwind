import React from 'react';

function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 text-white py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-center flex-1">
          <h1 className="text-4xl font-bold tracking-wide">Full-Stack Blog</h1>
          <p className="text-xl">
            Learn and explore full-stack development with React, Node.js, Express, MongoDB, and more!
          </p>
        </div>
        {/* Sign In Button */}
        <a href="#" className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-100 transition">
          Sign In
        </a>
      </div>
    </header>
  );
}

export default Header;
