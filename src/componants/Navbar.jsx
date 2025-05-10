import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import log from './imgs/y.png';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-netflix-black' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <img
                src={log}
                alt="Yashify Logo"
                className="h-8 w-auto object-contain cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <span className="ml-2 text-netflix-red font-bold text-2xl font-netflix">YASHIFY</span>
            </NavLink>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="flex space-x-6">
              <NavLink
                to="/"
                className={`text-sm font-netflix font-medium transition duration-300 ${
                  location.pathname === '/' ? 'text-white' : 'text-netflix-lightgray hover:text-white'
                }`}
              >
                Home
              </NavLink>
              <NavLink
                to="/About"
                className={`text-sm font-netflix font-medium transition duration-300 ${
                  location.pathname === '/About' ? 'text-white' : 'text-netflix-lightgray hover:text-white'
                }`}
              >
                About
              </NavLink>
              <NavLink
                to="/project"
                className={`text-sm font-netflix font-medium transition duration-300 ${
                  location.pathname === '/project' ? 'text-white' : 'text-netflix-lightgray hover:text-white'
                }`}
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className={`text-sm font-netflix font-medium transition duration-300 ${
                  location.pathname === '/contact' ? 'text-white' : 'text-netflix-lightgray hover:text-white'
                }`}
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-netflix-lightgray hover:text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open Main Menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-netflix-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className="block px-3 py-2 text-base font-netflix font-medium text-white hover:bg-netflix-light rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              className="block px-3 py-2 text-base font-netflix font-medium text-white hover:bg-netflix-light rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/project"
              className="block px-3 py-2 text-base font-netflix font-medium text-white hover:bg-netflix-light rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="block px-3 py-2 text-base font-netflix font-medium text-white hover:bg-netflix-light rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
