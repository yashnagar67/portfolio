import React from 'react';
import { motion } from 'framer-motion';
import { OwnerData } from '../types';

interface BentoGridProps {
  data: OwnerData;
  onChatOpen: () => void;
}

// Reusable animation variants with a solid "pop" feel
const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
          type: "spring",
          stiffness: 60,
          damping: 15,
          mass: 1,
          duration: 0.5
      } 
  }
};

const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.2 }
};

// Animation props for individual items to trigger on scroll
// Changed amount to 0.1 to trigger earlier on mobile devices
const scrollAnimationProps = {
    variants: itemVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.1 }
};

// Custom Icon Map for Tech
const techIcons: Record<string, React.ReactNode> = {
    mern: (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
            <defs>
                <linearGradient id="mernGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#61DBFB', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#3596B8', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="10" fill="#61DBFB" />
            <g fill="none" stroke="url(#mernGrad)" strokeWidth="4">
                <ellipse cx="50" cy="50" rx="40" ry="14" transform="rotate(0 50 50)" />
                <ellipse cx="50" cy="50" rx="40" ry="14" transform="rotate(60 50 50)" />
                <ellipse cx="50" cy="50" rx="40" ry="14" transform="rotate(120 50 50)" />
            </g>
        </svg>
    ),
    stitch: (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
             <defs>
                <linearGradient id="stitchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#FF5F6D', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#FFC371', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <path d="M30 30 C 30 10, 70 10, 70 30 C 70 50, 30 50, 30 70 C 30 90, 70 90, 70 70" stroke="url(#stitchGrad)" strokeWidth="12" strokeLinecap="round" fill="none" />
            <circle cx="30" cy="30" r="6" fill="#FFF" />
            <circle cx="70" cy="70" r="6" fill="#FFF" />
        </svg>
    ),
    api: (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
            <defs>
                <linearGradient id="apiGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#00F260', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#0575E6', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            <rect x="20" y="35" width="20" height="30" rx="4" fill="url(#apiGrad)" />
            <rect x="60" y="35" width="20" height="30" rx="4" fill="url(#apiGrad)" />
            <path d="M40 50 L60 50 M 40 45 L 60 45 M 40 55 L 60 55" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <circle cx="20" cy="50" r="5" fill="#fff" />
            <circle cx="80" cy="50" r="5" fill="#fff" />
        </svg>
    ),
    vibe: (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
             <defs>
                <linearGradient id="vibeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#F2994A', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#F2C94C', stopOpacity: 1 }} />
                </linearGradient>
            </defs>
            {/* Headphones */}
            <path d="M20 60 V 50 A 30 30 0 0 1 80 50 V 60" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" />
            <rect x="10" y="55" width="20" height="30" rx="6" fill="url(#vibeGrad)" />
            <rect x="70" y="55" width="20" height="30" rx="6" fill="url(#vibeGrad)" />
            {/* Sunglasses Smile */}
            <path d="M35 85 Q 50 95 65 85" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" />
        </svg>
    )
};

// Social Icons Map
const socialIcons: Record<string, React.ReactNode> = {
    linkedin: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#0077b5]">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
    ),
    github: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#333] dark:text-white">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
    ),
    instagram: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-[#E4405F]">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.225-.149-4.771-1.664-4.919-4.919-.058-1.265-.069-1.644-.069-4.849 0-3.204.012-3.584.069-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
    )
};

export const BentoGrid: React.FC<BentoGridProps> = ({ data, onChatOpen }) => {
  return (
    <div className="max-w-[1100px] w-full mx-auto p-6 md:p-12">
      <div 
        className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 md:gap-5 auto-rows-[180px] md:auto-rows-[180px]"
      >
        
        {/* Profile Card - 2x2 with Stacking Animation */}
        <motion.div 
          {...scrollAnimationProps}
          className="col-span-1 md:col-span-2 row-span-2 relative group h-full cursor-default"
        >
            {/* Background Stack Card 1 */}
            <div className="absolute inset-0 bg-accent-purple/80 dark:bg-accent-purple/40 rounded-3xl transform transition-transform duration-500 ease-out group-hover:rotate-6 group-hover:translate-x-3 group-hover:translate-y-2 translate-y-0 rotate-0 shadow-lg"></div>
            
            {/* Background Stack Card 2 */}
            <div className="absolute inset-0 bg-accent-orange/80 dark:bg-accent-orange/40 rounded-3xl transform transition-transform duration-500 ease-out group-hover:-rotate-3 group-hover:-translate-x-3 group-hover:translate-y-1 translate-y-0 rotate-0 shadow-lg"></div>

            {/* Main Content Card */}
            <div className="absolute inset-0 bg-white dark:bg-[#1c2433] rounded-3xl p-6 md:p-8 flex flex-col justify-center shadow-md relative z-10 transition-transform duration-500 group-hover:-translate-y-1 overflow-hidden border border-gray-100 dark:border-gray-800">
              <div className="flex flex-col gap-4 relative z-10">
                <div className="relative w-20 h-20 md:w-24 md:h-24">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-yellow-400 via-orange-500 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                  <img 
                    src={data.profileImage} 
                    alt={data.name} 
                    className="relative w-full h-full rounded-full object-cover border-4 border-white dark:border-[#1c2433] shadow-sm"
                  />
                </div>
                <div>
                  <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
                    {data.name}
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400 text-sm md:text-lg font-medium leading-relaxed line-clamp-2">
                    {data.bio}
                  </p>
                </div>
                <div className="flex">
                  <span className="px-4 py-1.5 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs md:text-sm font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    {data.available ? "Available for work" : "Busy"}
                  </span>
                </div>
              </div>
            </div>
        </motion.div>

        {/* Experience Card - 1x1 */}
        <motion.div 
          {...scrollAnimationProps}
          whileHover={hoverScale}
          className="col-span-1 bg-white dark:bg-[#1c2433] rounded-3xl p-4 flex flex-col items-center justify-center relative shadow-sm border border-gray-100 dark:border-gray-800"
        >
           <div className="relative w-24 h-24 flex items-center justify-center mb-2">
             <svg className="w-full h-full transform -rotate-90">
               <circle className="text-gray-100 dark:text-gray-700" cx="50%" cy="50%" fill="transparent" r="40%" stroke="currentColor" strokeWidth="8"></circle>
               <motion.circle 
                initial={{ strokeDashoffset: 251.2 }}
                whileInView={{ strokeDashoffset: 100 }} // Adjusted for 1.5 years roughly relative to full circle
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="text-accent-orange" 
                cx="50%" 
                cy="50%" 
                fill="transparent" 
                r="40%" 
                stroke="currentColor" 
                strokeDasharray="251.2" 
                strokeLinecap="round" 
                strokeWidth="8"
              ></circle>
             </svg>
             <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">{data.experienceYears}+</span>
                <span className="text-[10px] font-bold uppercase text-gray-400">Years</span>
             </div>
           </div>
           <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Experience</p>
        </motion.div>

        {/* Contact/Chat CTA - 1x1 */}
        <motion.div 
          {...scrollAnimationProps}
          whileHover={{ ...hoverScale, scale: 1.05 }}
          onClick={onChatOpen}
          className="col-span-1 bg-primary cursor-pointer rounded-3xl p-6 flex flex-col items-center justify-center gap-4 shadow-lg shadow-blue-500/20 group"
        >
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm group-hover:scale-110 transition-transform">
             <span className="material-symbols-outlined">mail</span>
          </div>
          <div className="text-center w-full">
             <p className="text-white font-bold text-lg mb-2">Let's Talk</p>
             <button className="bg-white text-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-blue-50 transition-colors w-full">
                Hi
             </button>
          </div>
        </motion.div>

        {/* Brand/Image Card - 1x1 */}
        <motion.div 
          {...scrollAnimationProps}
          className="col-span-1 bg-white dark:bg-[#1c2433] rounded-3xl relative group overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800"
        >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop')"}}
            ></div>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-pink-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">
                    Code
                </span>
            </div>
        </motion.div>

        {/* Map Card - 1x1 */}
        <motion.div 
          {...scrollAnimationProps}
          whileHover={hoverScale}
          className="col-span-1 bg-white dark:bg-[#1c2433] rounded-3xl overflow-hidden relative group shadow-sm border border-gray-100 dark:border-gray-800"
        >
           <div 
             className="absolute inset-0 bg-center bg-no-repeat bg-cover group-hover:scale-110 transition-transform duration-700 contrast-125 saturate-150" 
             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1000&auto=format&fit=crop")'}}
           ></div>
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="relative">
                <div className="w-4 h-4 bg-red-500 rounded-full relative z-10 border-2 border-white shadow-lg"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full absolute top-0 left-0 animate-ping opacity-75"></div>
             </div>
           </div>
           <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/95 dark:bg-gray-900/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg">
                <p className="text-[10px] font-extrabold text-black dark:text-white uppercase tracking-wider whitespace-nowrap">INDIA</p>
           </div>
        </motion.div>

        {/* Project Cards */}
        {data.projects.map((project) => (
            <motion.div 
                key={project.id}
                {...scrollAnimationProps}
                whileHover={hoverScale}
                className="col-span-1 md:col-span-2 bg-cover bg-center relative group overflow-hidden rounded-3xl shadow-sm h-full min-h-[180px]"
                style={{ backgroundImage: `url("${project.imageUrl}")` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:via-black/40 transition-colors"></div>
                <div className="absolute top-6 left-6">
                    <span className={`px-3 py-1 ${project.accentColor} text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg`}>
                        {project.category}
                    </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 flex items-end justify-between">
                    <div>
                        <p className="text-white text-2xl font-bold mb-1">{project.name}</p>
                        <p className="text-gray-200 text-sm font-medium">{project.description}</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-2 group-hover:bg-white group-hover:text-black text-white transition-all">
                        <span className="material-symbols-outlined block text-lg">arrow_outward</span>
                    </div>
                </div>
            </motion.div>
        ))}

        {/* Tech Stack - 2x1 */}
        <motion.div 
            {...scrollAnimationProps}
            className="col-span-1 md:col-span-2 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 rounded-3xl p-8 flex flex-col justify-center gap-6 shadow-xl relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="flex justify-between items-center relative z-10">
                <p className="text-xs font-bold text-white/90 uppercase tracking-widest border border-white/20 px-2 py-1 rounded-lg backdrop-blur-sm">Skills</p>
                <span className="material-symbols-outlined text-white/50">auto_awesome</span>
            </div>
            
            <div className="flex items-center justify-around px-2 relative z-10">
                {data.techStack.map((tech, index) => (
                    <div key={tech.name} className="flex flex-col items-center gap-3 group/icon cursor-pointer">
                        <motion.div 
                            className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex items-center justify-center border border-white/10 p-3"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ 
                                duration: 3, 
                                repeat: Infinity, 
                                ease: "easeInOut", 
                                delay: index * 0.2 
                            }}
                            whileHover={{ scale: 1.15, rotate: 5, backgroundColor: "rgba(255,255,255,0.2)" }}
                        >
                            {techIcons[tech.icon] || <span className="material-symbols-outlined text-white">{tech.icon}</span>}
                        </motion.div>
                        <p className="text-[10px] font-bold text-white/90 text-center tracking-wide group-hover/icon:text-white transition-colors">
                            {tech.name}
                        </p>
                    </div>
                ))}
            </div>
        </motion.div>

        {/* Music / Live Card - 1x1 */}
        <motion.div 
            {...scrollAnimationProps}
            className="col-span-1 bg-white dark:bg-[#1c2433] rounded-3xl p-5 flex flex-col justify-between shadow-sm border border-transparent hover:border-green-500/30 transition-all group overflow-hidden border-gray-100 dark:border-gray-800"
        >
             <div className="flex justify-between items-start mb-2 relative z-10">
                <div className="bg-[#1DB954] text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    LIVE
                </div>
                <span className="material-symbols-outlined text-[#1DB954]">playlist_play</span>
             </div>
             
             <div className="flex items-center gap-3 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-700 to-blue-600 flex-shrink-0 flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-white/80" style={{ fontSize: '20px' }}>music_note</span>
                </div>
                <div className="min-w-0 flex-1">
                    <div className="flex items-end gap-1 h-3 mb-1">
                        <div className="w-0.5 bg-[#1DB954] rounded-full animate-[bounce_1s_infinite]" style={{ height: '60%'}}></div>
                        <div className="w-0.5 bg-[#1DB954] rounded-full animate-[bounce_1.2s_infinite]" style={{ height: '100%'}}></div>
                        <div className="w-0.5 bg-[#1DB954] rounded-full animate-[bounce_0.8s_infinite]" style={{ height: '40%'}}></div>
                        <div className="w-0.5 bg-[#1DB954] rounded-full animate-[bounce_1.1s_infinite]" style={{ height: '80%'}}></div>
                    </div>
                    <p className="text-gray-900 dark:text-white text-xs font-bold truncate">{data.music.title}</p>
                    <p className="text-gray-500 text-[10px] truncate">{data.music.artist}</p>
                </div>
             </div>
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-colors"></div>
        </motion.div>

        {/* Socials Card - 1x1 (New Section) */}
        <motion.div 
            {...scrollAnimationProps}
            className="col-span-1 bg-white dark:bg-[#1c2433] rounded-3xl p-6 flex flex-col justify-center items-center gap-6 shadow-sm border border-gray-100 dark:border-gray-800"
        >
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Connect</p>
             <div className="flex items-center gap-4">
                {data.socials.map((social) => (
                    <motion.a 
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 flex items-center justify-center transition-colors"
                    >
                        {socialIcons[social.platform.toLowerCase()] || <span className="material-symbols-outlined text-gray-500">link</span>}
                    </motion.a>
                ))}
             </div>
        </motion.div>

      </div>
    </div>
  );
};