import React from 'react';

function CategoriesSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Explore by Category</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["React", "Node.js", "Express", "MongoDB", "AWS", "DevOps"].map((category, index) => (
            <div key={index} className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
              {category}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
