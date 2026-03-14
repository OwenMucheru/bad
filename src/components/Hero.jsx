import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="hero-gradient text-white py-20 md:py-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fadeInUp">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Rotaract Club of Chuka University
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Service Above Self. Join us in making a difference in our community and beyond.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg text-center transition duration-300"
            >
              Join Us
            </a>
            <a
              href="#projects"
              className="border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-3 px-6 rounded-lg text-center transition duration-300"
            >
              Our Projects
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="rac/20250329_111356.jpg"
            alt="Rotaract Members"
            className="rounded-lg shadow-xl animate-float max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
