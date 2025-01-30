import React from 'react';

function TrendingPostsSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Trending Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["Advanced React Patterns", "Node.js Performance Optimization", "MongoDB Best Practices"].map((trend, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 hover:bg-blue-100">
              <h3 className="text-2xl font-semibold mb-4 text-black hover:text-blue-500">{trend}</h3>
              <p className="text-gray-600">Best practices and techniques for {trend.toLowerCase()}.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingPostsSection;
