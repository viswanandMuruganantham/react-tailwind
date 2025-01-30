import React from 'react';

function FeaturedPostsSection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Featured Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["React State Management", "Serverless with AWS", "GraphQL API Development", "Docker for Developers"].map((feature, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition">
              <h3 className="text-xl font-semibold mb-2">{feature}</h3>
              <p className="text-gray-600">Learn the best practices for {feature.toLowerCase()}.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedPostsSection;
