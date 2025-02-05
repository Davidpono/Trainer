import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-center items-center px-8 py-4">
        <div className="flex space-x-6 items-center">
          <a href="/" className="text-white hover:text-blue-300 transition">HOME</a>
          <a href="/training" className="text-white hover:text-blue-300 transition">ONLINE PERSONAL TRAINING</a>
          <a href="/reviews" className="text-white hover:text-blue-300 transition">REVIEWS & TESTIMONIALS</a>
          <a href="/One" className="text-white hover:text-blue-300 transition">ONE ON ONE</a>

          <a 
            href="/consultation" 
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            BOOK CONSULTATION
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;