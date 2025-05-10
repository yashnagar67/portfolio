import React, { useState } from "react";
import { motion } from "framer-motion";
import img from "./imgs/Contact.png";
import { NavLink } from "react-router-dom";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interest: 'collaboration'
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('https://movieadminpanel.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit form');
      }
      
      console.log('Success:', data);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: '',
        interest: 'collaboration'
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-netflix-black min-h-screen pt-20 pb-16">
      {/* Hero Banner - Netflix style */}
      <div className="relative w-full h-[40vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url(https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
            filter: "brightness(0.4)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/70 to-transparent" />
        
        <div className="relative z-10 flex h-full items-end px-6 md:px-16 pb-8 max-w-7xl mx-auto">
          <div>
            <motion.span 
              className="inline-block px-2 py-1 bg-netflix-red text-white text-xs font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              GET IN TOUCH
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact Me
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-medium text-white mb-6">Send Me a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitted ? (
                <motion.div 
                  className="bg-green-500/20 border border-green-500 text-white p-4 rounded"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you for your message! I'll get back to you soon.
                </motion.div>
              ) : error ? (
                <motion.div 
                  className="bg-red-500/20 border border-red-500 text-white p-4 rounded"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {error}
                </motion.div>
              ) : (
                <>
                  <div>
                    <label htmlFor="name" className="block text-netflix-lightgray mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-netflix-light text-white border border-netflix-light/50 rounded px-4 py-3 focus:outline-none focus:border-netflix-red transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-netflix-lightgray mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-netflix-light text-white border border-netflix-light/50 rounded px-4 py-3 focus:outline-none focus:border-netflix-red transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-netflix-lightgray mb-2">I'm interested in</label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full bg-netflix-light text-white border border-netflix-light/50 rounded px-4 py-3 focus:outline-none focus:border-netflix-red transition-colors"
                    >
                      <option value="collaboration">Collaboration</option>
                      <option value="job">Job Opportunity</option>
                      <option value="project">Project Inquiry</option>
                      <option value="other">Something Else</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-netflix-lightgray mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full bg-netflix-light text-white border border-netflix-light/50 rounded px-4 py-3 focus:outline-none focus:border-netflix-red transition-colors"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`bg-netflix-red hover:bg-netflix-hover text-white font-medium py-3 px-6 rounded transition-colors duration-300 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
                </>
              )}
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-medium text-white mb-6">Contact Information</h2>
            
            <div className="bg-netflix-light/30 rounded-md p-6 mb-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-netflix-red font-medium mb-1">Email</h3>
                  <p className="text-white">nagary811@gmail.com</p>
                </div>
                
                <div>
                  <h3 className="text-netflix-red font-medium mb-1">Phone</h3>
                  <p className="text-white">+91 8824926382</p>
                </div>
                
                <div>
                  <h3 className="text-netflix-red font-medium mb-1">Address</h3>
                  <p className="text-white">Mahaveer Nagar-I, Mahaveer Nagar Housing Board Colony,<br/>
                  Kota, Rajasthan 324005</p>
                </div>
              </div>
            </div>
            
            {/* Netflix-style profile cards */}
            <h2 className="text-2xl font-medium text-white mb-4">Connect With Me</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a 
                href="https://github.com/yashnagar67" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-netflix-light/30 p-4 rounded-md flex flex-col items-center hover:bg-netflix-light/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-netflix-dark flex items-center justify-center mb-2">
                  <i className="fab fa-github text-2xl"></i>
                </div>
                <h3 className="font-medium">GitHub</h3>
                <p className="text-xs text-netflix-lightgray">@yashnagar67</p>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/yash-nagar-a7484827b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-netflix-light/30 p-4 rounded-md flex flex-col items-center hover:bg-netflix-light/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-netflix-dark flex items-center justify-center mb-2">
                  <i className="fab fa-linkedin-in text-2xl"></i>
                </div>
                <h3 className="font-medium">LinkedIn</h3>
                <p className="text-xs text-netflix-lightgray">Yash Nagar</p>
              </a>
              
              <a 
                href="https://www.instagram.com/dev_yashify" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-netflix-light/30 p-4 rounded-md flex flex-col items-center hover:bg-netflix-light/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-netflix-dark flex items-center justify-center mb-2">
                  <i className="fab fa-instagram text-2xl"></i>
                </div>
                <h3 className="font-medium">Instagram</h3>
                <p className="text-xs text-netflix-lightgray">@dev_yashify</p>
              </a>
            </div>
            
            {/* Image */}
            <div className="hidden md:block mt-8 relative">
              <img
                src={img}
                alt="Contact Illustration"
                className="w-full h-auto rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-netflix-black to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
