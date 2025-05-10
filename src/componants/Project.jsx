import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import iphoneframe from './imgs/iPhoenFrame.png';
import laptopframe from './imgs/laptopframe.png';
import mobileframe from './imgs/mbfm.png';
import weather from './imgs/weather.png';
import todo from './imgs/todo.png';
import education from './imgs/educationapp.png';
import ProjectModal from './ProjectModal';

// Enhanced project data with additional metadata for Netflix-like UI
const projectsData = {
  featured: [
  {
      id: 'moodflix',
      title: 'Moodflix - Mood-Based Streaming',
      description: 'Netflix-inspired platform built with React, Tailwind CSS, and self-made APIs. Features mood-based movie browsing, dynamic link scraping, and enhanced UX with modern design. Powered by TMDB and OMDB APIs, delivering a real-time streaming experience.',
      tech: ['React', 'Tailwind CSS', 'TMDB API', 'OMDB API', 'Custom APIs'],
      maturityRating: 'Everyone',
      year: '2023',
      duration: '3 months',
      image: '/moodflix.png',
      video: '/moodflix.mp4',
      thumbnail: '/moodflix.png',
      match: '99% match',
      category: 'Web App',
      link: 'https://moodflixv2.onrender.com',
      popularityScore: 950,
      new: true,
      trending: true,
      awardWinning: true
    }
  ],
  frontend: [
    {
      id: 'netflix-clone',
      title: 'Netflix UI Clone',
      description: 'Rebuilt Netflix UI with React.js, Tailwind CSS, and APIs like TMDB and OMDB. Added genre-based recommendations, random movie shuffle, and dynamic UI updates. Fully responsive and deployed on Vercel.',
      tech: ['React.js', 'Tailwind CSS', 'TMDB API', 'OMDB API'],
      maturityRating: 'Everyone',
      year: '2023',
      duration: '3 months',
      image: '/netflixpreview.png',
      video: '/netflixPreview.mp4',
      thumbnail: '/netflixpreview.png',
      match: '99% match',
      category: 'Web App',
      link: 'https://hackthonnetflix.vercel.app/',
      popularityScore: 950,
      trending: true,
      awardWinning: true,
      new: true,
      featured: true
  },
  {
      id: 'weatherme',
    title: 'WeatherMe',
      description: 'A real-time weather app built with modern technologies and powered by the OpenWeather API. Provides hourly and daily forecasts, severe weather alerts, and interactive maps.',
      tech: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
      maturityRating: 'Everyone',
      year: '2023',
      duration: '3 weeks',
      image: weather,
      thumbnail: weather,
      match: '95% match',
      category: 'Web App',
    link: 'https://weather-me-six.vercel.app/',
      popularityScore: 742,
      trending: true
  },
  {
      id: 'pekotm',
    title: 'PekoTm',
      description: 'A responsive to-do list application built with React, allowing users to add, delete, and mark tasks as complete. Features a minimalist design and user-friendly interface.',
      tech: ['React', 'Tailwind CSS'],
      maturityRating: 'Everyone',
      year: '2023',
      duration: '2 weeks',
      image: todo,
      thumbnail: todo,
      match: '92% match',
      category: 'Web App',
    link: 'https://todo-app-with-react-omega-six.vercel.app/',
      popularityScore: 648
  },
  {
      id: 'nexttopper',
    title: 'NextTopper Clone',
      description: 'A responsive clone of the "NextTopper" website, created using React.js and Tailwind CSS. It replicates the design with added responsiveness for all screen sizes.',
      tech: ['React', 'Tailwind CSS'],
      maturityRating: 'Everyone',
      year: '2023',
      duration: '4 weeks',
      image: education,
      thumbnail: education,
      match: '90% match',
      category: 'Web App',
    link: 'https://nexttopperclone.vercel.app/',
      popularityScore: 592,
      awardWinning: true
    }
  ],
  backend: [],
  mobile: []
};

// If the backend and mobile categories are empty, create some placeholder projects
if (projectsData.backend.length === 0) {
  projectsData.backend = [
    {
      id: 'placeholder1',
      title: 'API Service',
      description: 'RESTful API service built with Node.js and Express to handle data management for e-commerce applications.',
      tech: ['Node.js', 'Express', 'MongoDB'],
      maturityRating: 'Everyone',
      year: '2023',
      duration: '1 month',
      image: laptopframe,
      thumbnail: laptopframe,
      match: '88% match',
      category: 'Backend',
      link: '#',
      popularityScore: 520,
      comingSoon: true
    }
  ];
}

if (projectsData.mobile.length === 0) {
  projectsData.mobile = [
    {
      id: 'netflix-mobile',
      title: 'Netflix Mobile UI',
      description: 'Mobile-responsive version of the Netflix UI clone with optimized interface for smaller screens. Features smooth navigation, adaptive layouts, and touch-friendly controls for an authentic Netflix mobile experience.',
      tech: ['React.js', 'Tailwind CSS', 'Responsive Design', 'Mobile-First'],
      maturityRating: 'Everyone',
      year: '2023',
      duration: '1 month',
      image: '/netflix.png',
      thumbnail: '/netflix.png',
      match: '97% match',
      category: 'Mobile App',
      link: 'https://hackthonnetflix.vercel.app/',
      popularityScore: 880,
      new: true,
      trending: true,
      fullDisplay: true
    },
    {
      id: 'placeholder2',
      title: 'Fitness Tracker',
      description: 'Mobile app for tracking workouts, nutrition, and progress with social sharing features.',
      tech: ['React Native', 'Firebase'],
      maturityRating: 'Everyone',
      year: '2023',
      duration: '3 months',
      image: iphoneframe,
      thumbnail: iphoneframe,
      match: '85% match',
      category: 'Mobile App',
      link: '#',
      popularityScore: 480,
      comingSoon: true
    }
  ];
}

// Create recommendations based on highest popularity scores
const recommendations = [
  projectsData.featured.find(p => p.id === 'moodflix'),
  projectsData.frontend.find(p => p.id === 'netflix-clone'),
  projectsData.mobile.find(p => p.id === 'netflix-mobile'),
  ...projectsData.frontend.filter(p => p.id !== 'netflix-clone'),
  ...projectsData.backend,
  ...projectsData.mobile.filter(p => p.id !== 'netflix-mobile')
].filter(Boolean).sort((a, b) => b.popularityScore - a.popularityScore).slice(0, 4);

const Project = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const rowRefs = {
    featured: useRef(null),
    recommended: useRef(null),
    frontend: useRef(null),
    backend: useRef(null),
    mobile: useRef(null)
  };

  const scrollRow = (direction, rowName) => {
    const row = rowRefs[rowName].current;
    if (row) {
      const scrollAmount = direction === 'left' ? -row.clientWidth * 0.75 : row.clientWidth * 0.75;
      row.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleProjectHover = (project) => {
    setSelectedProject(project);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const ProjectCard = ({ project, index, isLarge = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    const delay = index * 0.1;
    
    return (
      <motion.div
        className={`relative flex-shrink-0 ${isLarge ? 'w-[90%] sm:w-[80%] md:w-[60%] mx-auto' : 'w-[85%] sm:w-[45%] md:w-[30%] lg:w-[23%]'} 
                   overflow-hidden rounded cursor-pointer transition-all duration-300 ease-in-out`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        style={{ 
          zIndex: isHovered ? 10 : 1,
          transform: isHovered ? 'scale(1.08)' : 'scale(1)',
        }}
        onMouseEnter={() => {
          setIsHovered(true);
          handleProjectHover(project);
        }}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => handleProjectClick(project)}
      >
        <div className={`relative overflow-hidden rounded group ${isHovered ? 'shadow-2xl' : ''} transition-all duration-300 ease-in-out`}>
          {/* Thumbnail Image or Video */}
          <div
            className={`relative w-full aspect-video bg-netflix-light overflow-hidden transition-all duration-300 ease-in-out ${
              isHovered ? 'rounded-b-none' : ''
            }`}
          >
            {project.video && isHovered ? (
              <div className="w-full h-full relative">
                {/* Laptop Frame for Video */}
                <div className="absolute inset-0 w-full h-full">
                  <div className="relative w-full h-full bg-black rounded-lg">
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
              </div>
            ) : (
              <img 
                src={project.image} 
                alt={project.title} 
                className={`w-full h-full ${project.fullDisplay ? 'object-contain' : 'object-cover'} ${project.id === 'netflix-clone' || project.id === 'moodflix' || project.id === 'netflix-mobile' ? 'highlight-image' : ''}`}
              />
            )}
            
            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Movie metadata badges */}
            <div className="absolute bottom-2 left-2 right-2 flex flex-wrap items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              {/* Match percentage */}
              <span className="text-sm font-bold text-netflix-red mr-2">{project.match}</span>
              
              {/* Maturity rating */}
              <span className="text-xs border border-white/50 px-1 text-white mr-2">{project.maturityRating}</span>
              
              {/* Duration */}
              <span className="text-xs text-white mr-2">{project.duration}</span>
              
              {/* Special labels */}
              {project.new && (
                <span className="text-xs font-bold text-green-500 mr-1">NEW</span>
              )}
              {project.trending && (
                <span className="text-xs font-bold text-white bg-netflix-red px-1 rounded mr-1">TRENDING</span>
              )}
              {project.awardWinning && (
                <span className="text-xs font-bold text-yellow-400 mr-1">★ AWARD WINNING</span>
              )}
              {project.comingSoon && (
                <span className="text-xs font-bold text-blue-400 mr-1">COMING SOON</span>
              )}
            </div>
          </div>

          {/* Expanded Card on Hover */}
          {isHovered && (
            <div className="absolute w-full bg-netflix-dark rounded-b p-3 transform transition-all duration-300 ease-in-out shadow-lg animate-fadeIn">
              {/* Title and Actions */}
              <h3 className="text-white font-medium text-sm mb-2">{project.title}</h3>
              
              {/* Technology pills */}
              <div className="flex flex-wrap gap-1 mb-2">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-xs px-1.5 py-0.5 bg-netflix-light text-netflix-lightgray rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Interactive buttons */}
              <div className="flex items-center space-x-2 mt-2">
                <button className="bg-white text-black rounded-full p-1 hover:bg-white/90 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="bg-netflix-light/80 text-white rounded-full p-1 hover:bg-netflix-light transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="bg-netflix-light/80 text-white rounded-full p-1 hover:bg-netflix-light transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  const ProjectRow = ({ title, projects, rowKey }) => {
    return (
      <div className="mb-12">
        <h2 className="text-white text-xl md:text-2xl font-medium ml-4 mb-2">{title}</h2>
        <div className="relative">
          {/* Left scroll button */}
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/80 text-white rounded-full p-2 z-10 opacity-0 hover:opacity-100 transition-opacity"
            onClick={() => scrollRow('left', rowKey)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          {/* Scrollable row */}
          <div 
            ref={rowRefs[rowKey]} 
            className="flex overflow-x-auto space-x-4 py-4 px-4 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                isLarge={rowKey === 'featured'} 
              />
            ))}
          </div>
          
          {/* Right scroll button */}
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/80 text-white rounded-full p-2 z-10 opacity-0 hover:opacity-100 transition-opacity"
            onClick={() => scrollRow('right', rowKey)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-netflix-black min-h-screen pb-16 pt-20">
      {/* Featured project banner */}
      <div className="relative w-full h-[50vh] md:h-[70vh] mb-8">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${projectsData.featured.find(p => p.id === 'moodflix')?.image || projectsData.frontend.find(p => p.id === 'netflix-clone')?.image})`,
            filter: "brightness(0.4)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-netflix-black/40" />
        
        <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-12 py-8 max-w-7xl mx-auto">
          <span className="inline-block mb-2 px-2 py-1 bg-netflix-red text-white text-xs font-bold">
            FEATURED PROJECT
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-xl">
            {projectsData.featured.find(p => p.id === 'moodflix')?.title}
          </h1>
          <p className="text-white/80 max-w-xl mb-6">
            {projectsData.featured.find(p => p.id === 'moodflix')?.description}
          </p>
          <div className="flex space-x-4">
            <button 
              onClick={() => window.open(projectsData.featured.find(p => p.id === 'moodflix')?.link, '_blank')}
              className="flex items-center gap-2 px-6 py-2 bg-netflix-red hover:bg-netflix-hover text-white font-medium rounded"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Watch Now
            </button>
            <button className="flex items-center gap-2 px-6 py-2 bg-netflix-light/80 hover:bg-netflix-light text-white font-medium rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Main content - project rows */}
      <div className="px-4 max-w-screen-2xl mx-auto">
        <ProjectRow title="Featured Projects" projects={projectsData.featured} rowKey="featured" />
        <ProjectRow title="Recommended For You" projects={recommendations} rowKey="recommended" />
        
        {/* Special Mobile Showcase */}
        <div className="mb-16">
          <h2 className="text-white text-xl md:text-2xl font-medium ml-4 mb-6">Netflix Mobile Experience</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 bg-netflix-light/10 p-6 rounded-lg">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-[280px] h-[500px] overflow-hidden rounded-xl border-4 border-gray-800 shadow-2xl highlight-image">
                <img 
                  src="/netflix.png" 
                  alt="Netflix Mobile UI" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 text-white">
              <h3 className="text-2xl font-bold mb-3">Netflix Mobile UI</h3>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-bold text-netflix-red">97% match</span>
                <span className="text-xs border border-white/50 px-1">Everyone</span>
                <span className="text-xs">2023</span>
                <span className="text-xs bg-netflix-red px-1 rounded">TRENDING</span>
              </div>
              <p className="text-netflix-lightgray mb-6">
                Mobile-responsive version of the Netflix UI clone with optimized interface for smaller screens. 
                Features smooth navigation, adaptive layouts, and touch-friendly controls for an authentic 
                Netflix mobile experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['React.js', 'Tailwind CSS', 'Responsive Design', 'Mobile-First'].map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-xs px-2 py-1 bg-netflix-light text-netflix-lightgray rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => window.open('https://hackthonnetflix.vercel.app/', '_blank')}
                className="flex items-center gap-2 px-6 py-2 bg-netflix-red hover:bg-netflix-hover text-white font-medium rounded"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                View Mobile Experience
              </button>
            </div>
          </div>
        </div>
        
        <ProjectRow title="Frontend Projects" projects={projectsData.frontend} rowKey="frontend" />
        <ProjectRow title="Backend Projects" projects={projectsData.backend} rowKey="backend" />
        <ProjectRow title="Mobile Development" projects={projectsData.mobile} rowKey="mobile" />
      </div>

      {/* CSS for hiding scrollbar */}
      <style jsx="true">{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .highlight-image {
          box-shadow: 0 0 15px 5px rgba(229, 9, 20, 0.7);
          border: 2px solid #e50914;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% {
            box-shadow: 0 0 15px 5px rgba(229, 9, 20, 0.7);
          }
          50% {
            box-shadow: 0 0 20px 8px rgba(229, 9, 20, 0.9);
          }
          100% {
            box-shadow: 0 0 15px 5px rgba(229, 9, 20, 0.7);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out forwards;
        }
      `}</style>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </div>
  );
};

export default Project; 