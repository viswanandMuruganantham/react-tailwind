import React from 'react';

function NewsletterSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
        <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-xl">
          <input 
            type="email" 
            className="w-full p-3 border-2 border-gray-400 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600" 
            placeholder="Enter your email"
          />
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 mt-4 rounded-xl hover:bg-blue-800 transition">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewsletterSection;
