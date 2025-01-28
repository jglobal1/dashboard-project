"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-3 cursor-pointer">
          <img
            src="ZIONLogobyDesigner.png" // Replace with the path to your logo file
            alt="Emma Logo"
            className="h-10 w-auto hover:opacity-90 transition-opacity duration-300"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold tracking-wide">
              Zion's
            </span>
            <span className="text-sm font-medium text-gray-200">
              Clothing Store
            </span>
          </div>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 lg:bg-transparent px-6 lg:px-0 py-4 lg:py-0 shadow-lg lg:shadow-none rounded-b-lg lg:rounded-none transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
            <li>
              <Link
                href="#collections"
                className="text-lg font-semibold hover:text-yellow-300 transition-colors duration-300 block py-2 lg:py-0"
              >
                Collections
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-lg font-semibold hover:text-yellow-300 transition-colors duration-300 block py-2 lg:py-0"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-lg font-semibold hover:text-yellow-300 transition-colors duration-300 block py-2 lg:py-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="https://wa.me/+2348147410561" // Replace with your WhatsApp number
            target="_blank"
            className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-lg font-bold shadow-md hover:bg-yellow-300 transition-all duration-300"
          >
            Chat with Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
