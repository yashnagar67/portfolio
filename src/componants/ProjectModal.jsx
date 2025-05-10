import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = ''; // Re-enable scrolling when modal is closed
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop with Netflix's dark overlay */}
          <div className="absolute inset-0 bg-black/90" />

          {/* Modal Content */}
          <motion.div
            ref={modalRef}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-netflix-dark rounded-md shadow-2xl"
            initial={{ y: 50, scale: 0.9 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-netflix-dark/80 text-white flex items-center justify-center hover:bg-netflix-light transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Hero Image Section */}
            <div className="relative w-full h-[50vh]">
              {project.video ? (
                <div className="relative w-full h-full">
                  {/* Laptop Frame for Video */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[90%] h-[90%] bg-black rounded-lg">
                      {/* Laptop Top Bezel */}
                      <div className="absolute top-0 left-0 right-0 h-[4%] bg-gray-900 z-10 rounded-t-lg flex items-center justify-center">
                        <div className="w-[15%] h-[2px] bg-gray-800 rounded-full"></div>
                      </div>
                      
                      {/* Video */}
                      <video 
                        src={project.video} 
                        autoPlay 
                        loop 
                        muted 
                        className="w-full h-full object-cover pt-[4%]"
                        style={{ borderRadius: '4px 4px 0 0' }}
                      />
                      
                      {/* Laptop Bottom with Keyboard */}
                      <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-gray-900 z-10 rounded-b-lg flex items-center justify-center">
                        <div className="w-[30%] h-[3px] bg-gray-800 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark to-transparent" />
                </div>
              ) : (
                <>
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: project.fullDisplay ? 'contain' : 'cover',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark to-transparent" />
                </>
              )}
              
              {/* Project metadata overlay */}
              <div className="absolute bottom-0 left-0 p-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-bold text-netflix-red">{project.match}</span>
                  <span className="text-xs border border-white/50 px-1 text-white">{project.maturityRating}</span>
                  <span className="text-xs text-white">{project.duration}</span>
                  <span className="text-xs text-white">{project.year}</span>
                </div>
                <h1 className="text-4xl font-bold text-white mb-2">{project.title}</h1>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              {/* Action Buttons (Netflix-style) */}
              <div className="flex gap-2 mb-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 bg-white text-black font-medium rounded hover:bg-white/90 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Visit
                </a>
                <button className="flex items-center gap-2 px-6 py-2 bg-gray-600/40 text-white rounded hover:bg-gray-600/60 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  My List
                </button>
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-600/40 text-white hover:bg-gray-600/60 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </button>
              </div>

              {/* Project Description */}
              <p className="text-white mb-6">{project.description}</p>

              {/* Technology Stack */}
              <div className="mb-6">
                <h3 className="text-netflix-lightgray text-sm mb-2">Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-netflix-light text-netflix-lightgray text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Special Features Section */}
              {(project.new || project.trending || project.awardWinning) && (
                <div className="mb-6">
                  <h3 className="text-netflix-lightgray text-sm mb-2">Special Features:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.new && (
                      <span className="bg-green-900/30 text-green-500 text-xs px-2 py-1 rounded">NEW</span>
                    )}
                    {project.trending && (
                      <span className="bg-netflix-red/20 text-netflix-red text-xs px-2 py-1 rounded">TRENDING</span>
                    )}
                    {project.awardWinning && (
                      <span className="bg-yellow-900/30 text-yellow-400 text-xs px-2 py-1 rounded">AWARD WINNING</span>
                    )}
                  </div>
                </div>
              )}

              {/* "More Like This" Section */}
              <div className="mt-10">
                <h3 className="text-white text-lg font-medium mb-4">More Like This</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {Array(3).fill().map((_, i) => (
                    <div key={i} className="relative aspect-video bg-netflix-light rounded overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-2">
                        <span className="text-white text-xs font-medium truncate">Similar Project {i + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* About the developer - Netflix "About" section style */}
              <div className="mt-10">
                <h3 className="text-white text-lg font-medium mb-4">About the Developer</h3>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-netflix-red flex items-center justify-center text-white font-bold">
                      YN
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Yash Nagar</h4>
                    <p className="text-netflix-lightgray text-sm">Frontend Developer specializing in creating intuitive, responsive, and immersive web experiences.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal; 