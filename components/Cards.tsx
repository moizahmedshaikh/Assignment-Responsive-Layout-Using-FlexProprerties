import React from "react";

const Cards = () => {
  return (
    <div className="pt-28 flex flex-col md:flex-row md:flex-wrap justify-center items-center p-4">
      <div className="bg-blue-300 md:flex-grow md:w-full lg:w-1/2 lg:flex-1 flex flex-col items-center justify-center shadow-lg rounded-lg p-10 hover:scale-105 transition-transform">
        <h2 className="text-xl font-bold mb-2">Innovative Solutions</h2>
        <p className="text-gray-600">
          Discover forward-thinking strategies and tools crafted to enhance your
          productivity and inspire success across all endeavors.
        </p>
      </div>

      <div className="bg-yellow-200 md:w-1/2 lg:w-1/2 flex flex-col items-center justify-center lg:flex-1 shadow-lg rounded-lg p-10 hover:scale-105 transition-transform">
        <h2 className="text-xl font-bold mb-2">Creative Design</h2>
        <p className="text-gray-600">
          Transform ideas into impactful visuals with designs that resonate
          deeply and deliver lasting impressions every time.
        </p>
      </div>

      <div className="bg-red-300 md:w-1/2 lg:w-1/2 lg:flex-1 flex flex-col items-center justify-center shadow-lg rounded-lg p-10 hover:scale-105 transition-transform">
        <h2 className="text-xl font-bold mb-2">Trusted Partnerships</h2>
        <p className="text-gray-600">
          Build meaningful collaborations through commitment, integrity, and a
          shared vision for sustainable growth and success.
        </p>
      </div>
    </div>
  );
};

export default Cards;
