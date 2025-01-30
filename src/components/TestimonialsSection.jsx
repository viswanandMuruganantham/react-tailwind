import React from 'react';

function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">What Developers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["Amazing content! Helped me get started.", "Best full-stack guide!", "Clear and concise explanations."].map((testimony, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <p className="text-lg text-gray-700">"{testimony}"</p>
              <p className="text-sm text-gray-500">- Developer {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
