const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          {/* Brand & Copyright */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-blue-400">Zion's Clothing Store</h3>
            <p className="mt-2 text-gray-400">
              &copy; {new Date().getFullYear()} Zion's Clothing Store. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-8 text-center">
            <a
              href="#collections"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              Collections
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 font-semibold hover:underline"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
