import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm">
                We are dedicated to providing quality services and products. Our
                mission is to make it easier for everyone to find what they need
                with ease and convenience.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm">
                1234 Street Name
                <br />
                City, State, ZIP
                <br />
                Email:{" "}
                <a
                  href="mailto:info@example.com"
                  className="text-gray-400 hover:text-white"
                >
                  info@example.com
                </a>
                <br />
                Phone:{" "}
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-white"
                >
                  +123 456 7890
                </a>
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

          <div className="mt-8 text-center text-gray-500 text-sm">
            &copy; 2024 Your Company Name. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
