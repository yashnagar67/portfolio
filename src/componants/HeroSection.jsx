import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import myimage from './imgs/myimage.png';

const HeroSection = () => {
  // Simplified with just one background image
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Static Background with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
            filter: "brightness(0.3)"
          }}
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ 
            scale: 1.0,
            opacity: 1,
          }}
          transition={{ 
            scale: { duration: 10, ease: "easeOut" },
            opacity: { duration: 2 }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-netflix-black/40">
          {/* Animated particles for subtle effect */}
          <div className="stars absolute inset-0 opacity-70"></div>
        </div>
      </div>

      {/* CSS for animated background */}
      <style jsx="true">{`
        @keyframes twinkle {
          0% { opacity: 0.2; }
          50% { opacity: 0.7; }
          100% { opacity: 0.2; }
        }
        
        .stars {
          background-image: 
            radial-gradient(1px 1px at 25px 5px, white, rgba(255,255,255,0)),
            radial-gradient(1px 1px at 50px 25px, white, rgba(255,255,255,0)),
            radial-gradient(1px 1px at 125px 20px, white, rgba(255,255,255,0)),
            radial-gradient(1.5px 1.5px at 50px 75px, white, rgba(255,255,255,0)),
            radial-gradient(2px 2px at 15px 125px, white, rgba(255,255,255,0)),
            radial-gradient(2.5px 2.5px at 110px 80px, white, rgba(255,255,255,0));
          animation: twinkle 10s ease-in-out infinite alternate;
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6">
        <div className="text-center max-w-3xl">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-8"
            whileHover={{ 
              scale: 1.05,
              rotate: [0, -5, 5, -5, 5, 0],
              transition: { 
                scale: { duration: 0.2 },
                rotate: { duration: 0.5, ease: "easeInOut" }
              }
            }}
          >
            <img
              src={myimage}
              alt="Yash Nagar"
              className="w-32 h-32 object-cover rounded-full border-4 border-netflix-red shadow-lg shadow-netflix-red/30 hover:shadow-netflix-red/50 transition-shadow duration-300"
            />
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-4 font-netflix"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Yash Nagar
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-3 py-1 bg-netflix-red text-white text-sm font-bold rounded-sm">
              Good Vibe Coder
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-netflix-lightgray mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Frontend developer with a passion for creating vibe-rich interfaces using the MERN stack. 4+ years experience leveraging AI tools like ChatGPT and Claude 3.7 Sonnet to enhance my development workflow. I craft responsive, immersive experiences with a perfect blend of human creativity and AI assistance.
          </motion.p>

          {/* Skills Tags */}
          <motion.div
            className="flex flex-wrap gap-2 justify-center mb-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {["MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "Claude 3.7", "Cursor", "AI-Assisted Dev", "Vibe Coding"].map((skill, index) => (
              <motion.span 
                key={index}
                className="text-white text-sm border border-white/30 rounded px-2 py-1 cursor-default hover:border-netflix-red hover:bg-netflix-red/10 transition-all duration-300"
                whileHover={{ 
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 0px 15px rgba(229, 9, 20, 0.7)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <NavLink
                to="/Project"
                className="flex items-center gap-2 px-6 py-3 bg-netflix-red hover:bg-netflix-hover text-white font-medium rounded relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-500 ease-out group-hover:w-full"></span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:rotate-12 duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span className="relative z-10">Vibe Projects</span>
              </NavLink>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 0px 15px rgba(75, 85, 99, 0.7)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <NavLink
                to="/About"
                className="flex items-center gap-2 px-6 py-3 bg-netflix-light/80 hover:bg-netflix-light text-white font-medium rounded relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-500 ease-out group-hover:w-full"></span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:scale-110 duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="relative z-10">About My Vibe</span>
              </NavLink>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 0px 15px rgba(75, 85, 99, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <NavLink
                to="/contact"
                className="flex items-center gap-2 px-6 py-3 bg-netflix-light/50 hover:bg-netflix-light text-white font-medium rounded relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-500 ease-out group-hover:w-full"></span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-y-[-2px] group-hover:translate-x-[2px] duration-300" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="relative z-10">Connect</span>
              </NavLink>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
