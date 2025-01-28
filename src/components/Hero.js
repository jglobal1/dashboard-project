import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* High-Definition Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/shoebg.jpg')", // Replace with your HD image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.4)",
        }}
      ></div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800 to-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col items-center text-center h-screen justify-center space-y-8">
        {/* Title */}
        <h1 className="text-5xl lg:text-8xl font-extrabold leading-tight max-w-5xl tracking-wide text-shadow-lg">
          Zion's Clothing Store
        </h1>

        {/* Subtitle */}
        <p className="text-lg lg:text-2xl font-medium max-w-4xl text-gray-300 drop-shadow-lg">
          Experience the perfect blend of elegance, comfort, and durability with
          our premium shoe collection.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#collections"
            className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-2xl"
          >
            Shop Now
          </a>
          <a
            href="#about"
            className="px-8 py-4 text-lg font-semibold bg-gray-800 hover:bg-gray-700 text-gray-200 transition-all duration-300 rounded-lg shadow-xl"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-10 left-6 lg:top-16 lg:left-12 bg-gradient-to-r from-yellow-400 to-red-500 text-black px-4 py-2 rounded-md shadow-lg text-sm font-bold uppercase tracking-wide">
        Trending
      </div>

      {/* Floating Shoes Showcase */}
      <div className="absolute inset-x-0 bottom-12 flex justify-evenly items-center px-6 lg:px-20 space-x-8">
        <div className="relative transform hover:scale-105 transition-transform duration-300">
          <div className="rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 p-4">
            <img
              src="/shoe2.png" // Replace with your shoe image
              alt="Shoe 1"
              className="w-24 h-24 lg:w-36 lg:h-36 object-contain rotate-12"
            />
          </div>
        </div>

        
        <div className="relative transform hover:scale-105 transition-transform duration-300">
          <div className="rounded-full bg-gradient-to-r from-purple-500 to-red-500 p-4">
            <img
              src="/shoe1.png" // Replace with your shoe image
              alt="Shoe 3"
              className="w-24 h-24 lg:w-36 lg:h-36 object-contain -rotate-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
