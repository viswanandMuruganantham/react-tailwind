import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 Full-Stack Blog. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          {["Facebook", "Twitter", "LinkedIn"].map((social, index) => (
            <a key={index} href="#" className="text-white hover:text-blue-400">{social}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
