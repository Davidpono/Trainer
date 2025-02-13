'use client'; // Add this line to mark the component as a client-side component

import Link from 'next/link'; // Import Link from next/link
import { useState } from 'react'; // Import useState to handle the menu toggle state

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for managing mobile menu visibility

  // Function to toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-50">
      <div className="max-w-sm mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo or title section */}
        <div className="text-white font-bold text-xl"></div>

        {/* Desktop menu links */}
        <div className="hidden lg:flex space-x-6 items-center">
          <Link href="/" className="text-white hover:text-blue-300 transition">HOME</Link>
          <Link href="/training" className="text-white hover:text-blue-300 transition">ONLINE PERSONAL TRAINING</Link>
          <Link href="/reviews" className="text-white hover:text-blue-300 transition">REVIEWS & TESTIMONIALS</Link>
          <Link href="/One" className="text-white hover:text-blue-300 transition">ONE ON ONE</Link>
          <Link href="/consultation" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            BOOK CONSULTATION
          </Link>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu links */}
      {isMobileMenuOpen && (


<div className="lg:hidden bg-black absolute top-14 left-0 w-full shadow-lg z-60">
<div className="flex flex-col items-center py-4">
  {/* Non-consultation links */}
  <div className="w-full">
    <Link href="/" className="text-white py-2 hover:bg-white hover:text-black transition w-full text-center">
      HOME
    </Link>
  </div>
  <div className="w-full">
    <Link href="/training" className="text-white py-2 hover:bg-white hover:text-black transition w-full text-center">
      ONLINE PERSONAL TRAINING
    </Link>
  </div>
  <div className="w-full">
    <Link href="/reviews" className="text-white py-2 hover:bg-white hover:text-black transition w-full text-center">
      REVIEWS & TESTIMONIALS
    </Link>
  </div>
  <div className="w-full">
    <Link href="/One" className="text-white py-2 hover:bg-white hover:text-black transition w-full text-center">
      ONE ON ONE
    </Link>
  </div>
  
  {/* Book Consultation link */}
  <div className="w-full bg-red-600">
    <Link
      href="/consultation"
      className="text-white  hover:bg-white hover:text-black transition w-full text-center"
    >
      BOOK CONSULTATION
    </Link>
  </div>
</div>
</div>

      )}
    </nav>
  );
};

export default Navbar;
