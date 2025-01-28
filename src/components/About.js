"use client";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 text-gray-800"
      style={{
        backgroundColor: "#ffffff", // White base color
        backgroundImage: "linear-gradient(135deg, #ffffff, #eaeaea, #d4e4f7)", // Clean gradient
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Ensure consistent coverage
      }}
    >
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">Who We Are</h2>
          <p className="mt-4 text-lg">
            Get to know the team and mission behind Zion's Clothing Store.
          </p>
        </div>

        {/* About Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* CEO Image */}
          <div className="flex-shrink-0 relative w-80 h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl">
            <img
              src="emma ceo.jpg"
              alt="CEO"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Content */}
          <div className="lg:flex-1">
            <p className="text-xl leading-relaxed">
              At Zion's Clothing Store, we believe that every step you take
              should be a statement of confidence. Starting from a small idea,
              we have grown into a global brand with the vision to empower
              individuals through footwear that’s not only stylish but also
              comfortable and durable.
            </p>
            <p className="mt-4 text-xl leading-relaxed">
              Join us on our journey as we innovate, inspire, and provide
              exceptional products to customers around the world. Together, let’s
              redefine confidence and style.
            </p>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 bg-white bg-opacity-90 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <h3 className="text-2xl font-bold text-blue-500">Our Mission</h3>
            <p className="mt-4 text-lg text-gray-700">
              To create footwear that blends style, comfort, and innovation,
              empowering individuals to move forward with confidence and grace.
            </p>
          </div>
          <div className="p-8 bg-white bg-opacity-90 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <h3 className="text-2xl font-bold text-blue-500">Our Vision</h3>
            <p className="mt-4 text-lg text-gray-700">
              To be a global leader in the footwear industry, inspiring customers
              with designs that seamlessly combine fashion and functionality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
