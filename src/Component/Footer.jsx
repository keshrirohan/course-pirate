import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink for smooth scrolling
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <Link to="/" className="hover:text-gray-400 transition duration-300">
            Home
          </Link>
          <ScrollLink
            to="aboutus" // Scroll to the About Us section
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-400 transition duration-300"
          >
            About Us
          </ScrollLink>
          <ScrollLink
            to="contact" // Scroll to the Contact section
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="hover:text-gray-400 transition duration-300"
          >
            Contact Us
          </ScrollLink>
          <Link
            to="/learning"
            className="hover:text-gray-400 transition duration-300"
          >
            Learning
          </Link>
        </div>
        <p className="mt-4 text-sm text-center">
          © 2024 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
