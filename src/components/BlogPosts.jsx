import React from 'react';

function BlogPosts() {
  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["Introduction to Full-Stack Development", "Setting Up a Full-Stack App with React and Node.js", "Connecting Your React App with a Backend API"].map((title, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition transform hover:scale-105 hover:bg-blue-100">
              <h2 className="text-2xl font-semibold mb-4 text-black hover:text-blue-500">{title}</h2>
              <p className="text-gray-600 mb-4">Explore key concepts of {title.toLowerCase()}.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default BlogPosts;
