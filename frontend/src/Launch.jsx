import React from 'react';

const Launch = () => {
  return (
    <div className="flex flex-col items-center justify-center p-20 bg-purple-500">
      <div className="text-center">
        <h2 className="text-white font-extrabold text-4xl sm:text-5xl">
          Ready to Launch Your <br /> Independent Project?
        </h2>
        <p className="text-gray-200 mt-4 text-sm">
          Get your website up and running in minutes
        </p>
      </div>
      <button className="border backdrop-blur-lg border-amber-50 p-8 text-3xl text-black rounded-4xl px-20 py-10 mt-8 shadow-inner/40 shadow-white bg-white/80 font-semibold hover:shadow-xl hover:bg-gray-200 transition-shadow duration-300 ease-in-out hover:text-purple-600">
        Launch Now!
      </button>
    </div>
  );
};

export default Launch;