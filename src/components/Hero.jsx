import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url(https://miro.medium.com/v2/resize:fit:1200/1*UUqdQ1ydQuILZ7TyGqHPNQ.jpeg)" }}>
      <div className="absolute inset-0 bg-black opacity-40"></div> 
      <div className="relative flex justify-center items-center h-full px-4">
        <div className="text-center text-white max-w-lg">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Building the Future with Quality and Trust
          </h1>
          <p className="mb-4 text-lg">
            Construction projects that turn your vision into reality.
          </p>
          <Link to="/projects">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded text-sm sm:text-base md:text-lg">
              View Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
