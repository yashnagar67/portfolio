import React from "react";
import { motion } from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-netflix-black text-netflix-lightgray py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Social Media Icons */}
        <div className="flex gap-6 mb-8">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/yashnagar67"
            target="_blank"
            rel="noopener noreferrer"
            className="text-netflix-gray hover:text-white transition duration-300"
          >
            <i className="fab fa-github text-xl"></i>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-netflix-gray hover:text-white transition duration-300"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-netflix-gray hover:text-white transition duration-300"
          >
            <i className="fab fa-twitter text-xl"></i>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:contact@example.com"
            className="text-netflix-gray hover:text-white transition duration-300"
          >
            <i className="far fa-envelope text-xl"></i>
          </motion.a>
        </div>
        
        {/* Footer Links in Netflix-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          <div>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><a href="#" className="hover:text-white transition">Accessibility</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li><Link to="/About" className="hover:text-white transition">About</Link></li>
              <li><a href="#" className="hover:text-white transition">Experience</a></li>
              <li><a href="#" className="hover:text-white transition">Skills</a></li>
              <li><a href="#" className="hover:text-white transition">Resume</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li><Link to="/Project" className="hover:text-white transition">Projects</Link></li>
              <li><a href="#" className="hover:text-white transition">Frontend</a></li>
              <li><a href="#" className="hover:text-white transition">Backend</a></li>
              <li><a href="#" className="hover:text-white transition">Mobile</a></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition">Service</a></li>
              <li><a href="#" className="hover:text-white transition">Support</a></li>
              <li><a href="#" className="hover:text-white transition">Collaboration</a></li>
            </ul>
          </div>
        </div>
        
        {/* Service Code - mimicking Netflix's service code */}
        <div className="mt-8 mb-4">
          <button className="text-netflix-gray border border-netflix-gray p-1 text-xs hover:text-white hover:border-white transition">
            Service Code
          </button>
        </div>
        
        {/* Netflix-style copyright text */}
        <div className="text-xs">
          <p className="mt-4">© {new Date().getFullYear()} YASHIFY. All rights reserved.</p>
          <p className="mt-2">Yash Nagar • Frontend Developer • Web Enthusiast</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
