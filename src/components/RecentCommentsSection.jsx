import React from 'react';

function RecentCommentsSection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Recent Comments</h2>
        <div className="space-y-4">
          {["Great introduction to full-stack development!", "This helped me set up my project!", "Loved the section on Node.js optimization."].map((comment, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <p className="text-lg text-gray-700 hover:text-blue-500 transition duration-300">{`"${comment}"`}</p>
              <p className="text-sm text-gray-500">- User {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentCommentsSection;

