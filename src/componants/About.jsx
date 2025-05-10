import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaNodeJs, FaReact, FaBootstrap, FaJsSquare, FaPython, FaDatabase, FaGithub, FaBrain } from 'react-icons/fa';
import { PiStudentFill } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";
import { SiOpenai, SiGithubcopilot } from "react-icons/si";
import myimage from './imgs/myimage.png';

const AboutSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('overview');

  // Netflix category tabs
  const categories = [
    { id: 'overview', name: 'Overview' },
    { id: 'skills', name: 'Skills & Expertise' },
    { id: 'education', name: 'Education' },
    { id: 'experience', name: 'Experience' }
  ];

  // Skills data
  const skills = [
    { name: 'React', icon: <FaReact className="text-3xl" />, level: 85, color: 'text-blue-500' },
    { name: 'JavaScript', icon: <FaJsSquare className="text-3xl" />, level: 90, color: 'text-yellow-500' },
    { name: 'Node.js', icon: <FaNodeJs className="text-3xl" />, level: 75, color: 'text-green-500' },
    { name: 'Tailwind CSS', icon: <BiLogoTailwindCss className="text-3xl" />, level: 95, color: 'text-[#38bdf8]' },
    { name: 'Python', icon: <FaPython className="text-3xl" />, level: 65, color: 'text-blue-400' },
    { name: 'Bootstrap', icon: <FaBootstrap className="text-3xl" />, level: 80, color: 'text-purple-500' },
    { name: 'AI Tools', icon: <SiOpenai className="text-3xl" />, level: 85, color: 'text-green-500' },
    { name: 'Git/GitHub', icon: <FaGithub className="text-3xl" />, level: 75, color: 'text-white' },
  ];

  // Education data
  const educationHistory = [
    {
      degree: "Bachelor's in Computer Applications (BCA)",
      institution: "University Name",
      duration: "2021 - Present",
      description: "Currently pursuing a degree in Computer Applications with focus on programming and web development.",
      match: "98% match",
      icon: <PiStudentFill className="text-3xl text-yellow-400" />
    },
    {
      degree: "Full Stack Web Development Certification",
      institution: "Online Learning Platform",
      duration: "2022",
      description: "Completed comprehensive coursework on modern web technologies including React, Node.js, and databases.",
      match: "95% match",
      icon: <FaComputer className="text-3xl text-blue-500" />
    }
  ];

  // Experience data
  const experienceHistory = [
    {
      position: "Frontend Developer Intern",
      company: "Tech Company",
      duration: "2022 - 2023",
      description: "Worked on responsive web applications using React and Tailwind CSS. Contributed to improving user experience and interface design.",
      match: "90% match",
      tech: ["React", "Tailwind CSS", "JavaScript"]
    },
    {
      position: "Freelance Web Developer",
      company: "Self-employed",
      duration: "2021 - Present",
      description: "Designing and developing custom websites for clients across various industries. Focus on responsive design and modern UI/UX principles.",
      match: "97% match", 
      tech: ["HTML/CSS", "JavaScript", "WordPress", "Figma"]
    }
  ];

  return (
    <div className="bg-netflix-black min-h-screen pb-20 pt-20">
      {/* Hero Banner - Netflix style */}
      <div className="relative w-full h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ 
            backgroundImage: "url(https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
            filter: "brightness(0.4)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/70 to-transparent" />
        
        <div className="relative z-10 flex h-full items-center px-6 md:px-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
      <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-full border-4 border-netflix-red overflow-hidden h-40 w-40 md:h-60 md:w-60 flex-shrink-0"
            >
              <img src={myimage} alt="Yash Nagar" className="w-full h-full object-cover" />
      </motion.div>

            <div className="text-center md:text-left pb-4">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Yash Nagar
              </motion.h1>
              
          <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-3 justify-center md:justify-start"
              >
                <span className="text-netflix-red font-medium">98% match</span>
                <span className="text-white text-opacity-70">Frontend Developer</span>
                <span className="border border-white/40 px-2 py-0.5 text-sm text-white/80">2023</span>
                <span className="text-white text-opacity-70">Web Enthusiast</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs - Netflix style */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mt-6">
        <div className="flex overflow-x-auto hide-scrollbar space-x-8 border-b border-netflix-light/30 pb-2">
          {categories.map(category => (
            <button 
              key={category.id}
              className={`text-lg whitespace-nowrap pb-2 border-b-2 transition-colors ${
                selectedCategory === category.id 
                  ? 'text-white border-netflix-red font-medium' 
                  : 'text-netflix-lightgray border-transparent hover:text-white'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mt-10">
        <AnimatePresence mode="wait">
          {/* Overview Section */}
          {selectedCategory === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-white"
            >
              <h2 className="text-2xl font-medium mb-6">About Me</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 text-netflix-lightgray leading-relaxed">
                  <p className="mb-4">
                    Hey, I'm Yash Nagar, a passionate Frontend Developer who loves turning creative ideas into functional, user-friendly websites. 
                  </p>
                  <p className="mb-4">
                    Currently pursuing a Bachelor's in Computer Applications (BCA), I focus on expanding my technical knowledge in web development and programming. I specialize in creating responsive designs using modern tools and technologies like React.js, Tailwind CSS, and JavaScript.
                  </p>
                  <p>
                    I'm constantly learning and exploring new technologies to enhance my skills and stay up-to-date with the latest industry trends. When I'm not coding, you can find me exploring AI tools, watching tech tutorials, or contributing to open-source projects.
                  </p>
                </div>
                
                <div className="bg-netflix-light rounded-md p-6">
                  <h3 className="text-xl font-medium mb-4 text-netflix-red">My Interests</h3>
                  <ul className="space-y-2 text-netflix-lightgray">
                    <li className="flex items-center gap-3">
                      <FaReact className="text-blue-500" /> Frontend Development
                    </li>
                    <li className="flex items-center gap-3">
                      <FaBrain className="text-yellow-500" /> AI & Machine Learning
                    </li>
                    <li className="flex items-center gap-3">
                      <FaNodeJs className="text-green-500" /> Backend Technologies
                    </li>
                    <li className="flex items-center gap-3">
                      <SiOpenai className="text-[#10a37f]" /> Prompt Engineering
                    </li>
                    <li className="flex items-center gap-3">
                      <BiLogoTailwindCss className="text-[#38bdf8]" /> UI/UX Design
                    </li>
                  </ul>
                </div>
            </div>
          </motion.div>
          )}

          {/* Skills Section */}
          {selectedCategory === 'skills' && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-white"
            >
              <h2 className="text-2xl font-medium mb-6">My Skills & Expertise</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="bg-netflix-light rounded-md p-4 hover:bg-netflix-light/80 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={skill.color}>{skill.icon}</div>
                      <h3 className="text-lg font-medium">{skill.name}</h3>
                    </div>
                    
                    <div className="w-full bg-netflix-dark rounded-full h-2.5 mb-1">
                      <motion.div 
                        className="bg-netflix-red h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                    <p className="text-xs text-netflix-lightgray text-right">{skill.level}%</p>
        </motion.div>
                ))}
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-medium mb-4 text-netflix-red">Technical Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-netflix-light/30 p-6 rounded-md">
                    <h4 className="text-lg mb-3">Frontend Development</h4>
                    <p className="text-netflix-lightgray mb-4">
                      Expert in creating responsive, accessible, and visually appealing user interfaces using modern frontend frameworks and libraries.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-netflix-dark px-2 py-1 rounded">HTML5/CSS3</span>
                      <span className="text-xs bg-netflix-dark px-2 py-1 rounded">JavaScript (ES6+)</span>
                      <span className="text-xs bg-netflix-dark px-2 py-1 rounded">React.js</span>
                      <span className="text-xs bg-netflix-dark px-2 py-1 rounded">Tailwind CSS</span>
                      <span className="text-xs bg-netflix-dark px-2 py-1 rounded">Responsive Design</span>
                    </div>
                  </div>
                  
                  <div className="bg-netflix-light/30 p-6 rounded-md">
                    <h4 className="text-lg mb-3">Tools & Technologies</h4>
                    <p className="text-netflix-lightgray mb-4">
                      Proficient with industry-standard tools and technologies for efficient development workflow and collaboration.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-netflix-dark px-2 py-1 rounded">Git/GitHub</span>
                      <span className="text-xs bg-netflix-dark px-2 py-1 rounded">VS Code</span>
                      <span className="text-xs bg-netflix-dark px-2 py-1 rounded">NPM/Yarn</span>
                      <span className="text-xs bg-netflix-dark px-2 py-1 rounded">Webpack</span>
                      <span className="text-xs bg-netflix-dark px-2 py-1 rounded">Chrome DevTools</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Education Section */}
          {selectedCategory === 'education' && (
        <motion.div
              key="education"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-white"
            >
              <h2 className="text-2xl font-medium mb-6">Education & Certifications</h2>
              
              <div className="space-y-8">
                {educationHistory.map((edu, index) => (
          <motion.div
                    key={index}
                    className="bg-netflix-light/30 p-6 rounded-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="bg-netflix-dark p-4 rounded-full">{edu.icon}</div>
                      <div>
                        <div className="flex items-center flex-wrap gap-2 mb-1">
                          <h3 className="text-xl font-medium">{edu.degree}</h3>
                          <span className="text-netflix-red text-sm">{edu.match}</span>
                        </div>
                        <p className="text-netflix-lightgray">{edu.institution}</p>
                        <p className="text-sm text-netflix-gray">{edu.duration}</p>
                        <p className="mt-3">{edu.description}</p>
                      </div>
            </div>
          </motion.div>
                ))}
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-medium mb-4 text-netflix-red">Additional Learning</h3>
                <div className="bg-netflix-light/30 p-6 rounded-md">
                  <h4 className="text-lg mb-3">Online Courses & Self-Learning</h4>
                  <p className="text-netflix-lightgray mb-4">
                    Continuously expanding knowledge through online platforms and self-directed learning resources.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <div className="bg-netflix-dark p-3 rounded-md text-center">
                      <h5 className="font-medium">Frontend Masters</h5>
                      <p className="text-xs text-netflix-lightgray mt-1">Advanced React Patterns</p>
                    </div>
                    <div className="bg-netflix-dark p-3 rounded-md text-center">
                      <h5 className="font-medium">Udemy</h5>
                      <p className="text-xs text-netflix-lightgray mt-1">Complete Web Development</p>
                    </div>
                    <div className="bg-netflix-dark p-3 rounded-md text-center">
                      <h5 className="font-medium">Coursera</h5>
                      <p className="text-xs text-netflix-lightgray mt-1">UI/UX Design Specialization</p>
                    </div>
                  </div>
                </div>
              </div>
        </motion.div>
          )}

          {/* Experience Section */}
          {selectedCategory === 'experience' && (
        <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-white"
            >
              <h2 className="text-2xl font-medium mb-6">Professional Experience</h2>
              
              <div className="space-y-8">
                {experienceHistory.map((exp, index) => (
          <motion.div
                    key={index}
                    className="bg-netflix-light/30 p-6 rounded-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-medium">{exp.position}</h3>
                      <span className="text-netflix-red text-sm">{exp.match}</span>
                    </div>
                    <p className="text-netflix-lightgray">{exp.company}</p>
                    <p className="text-sm text-netflix-gray mb-4">{exp.duration}</p>
                    <p className="mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span key={i} className="text-xs bg-netflix-dark px-2 py-1 rounded">{tech}</span>
                      ))}
            </div>
          </motion.div>
                ))}
              </div>
              
              {/* Netflix-style "More Content" section */}
              <div className="mt-12">
                <h3 className="text-xl font-medium mb-4 text-netflix-red">Projects & Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-netflix-light/30 p-4 rounded-md">
                    <h4 className="font-medium mb-2">E-Commerce Website</h4>
                    <p className="text-sm text-netflix-lightgray">Built a full-featured online store with React and Node.js</p>
                  </div>
                  <div className="bg-netflix-light/30 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Social Media Dashboard</h4>
                    <p className="text-sm text-netflix-lightgray">Created an analytics dashboard for social media management</p>
                  </div>
                  <div className="bg-netflix-light/30 p-4 rounded-md">
                    <h4 className="font-medium mb-2">Weather App</h4>
                    <p className="text-sm text-netflix-lightgray">Developed a responsive weather application with geolocation</p>
                  </div>
                </div>
              </div>
        </motion.div>
          )}
        </AnimatePresence>
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
      `}</style>
    </div>
  );
};

export default AboutSection;
