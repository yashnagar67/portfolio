import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const accentColors: Record<string, string> = {
    red: 'bg-red-600',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
  };

  const isMoodFlix = project.id === 'moodflix';

  return (
    <div className="h-full bg-[#1a1a2e] rounded-2xl overflow-hidden border border-white/10 relative group">
      <div className="absolute top-4 left-4 z-10">
        <span className={`px-3 py-1 ${accentColors[project.accentColor] || 'bg-gray-600'} text-white text-xs font-semibold rounded-full`}>
          {project.category}
        </span>
      </div>
      
      {isMoodFlix ? (
        // MoodFlix card with theater seats
        <div className="w-full h-full bg-gradient-to-br from-red-950/60 to-red-900/40 flex items-center justify-center relative min-h-[180px]">
          <div className="absolute inset-0 flex flex-col justify-end items-center gap-1.5 p-6 pb-8">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-1.5">
                {[...Array(7)].map((_, j) => (
                  <div
                    key={j}
                    className="w-6 h-6 bg-red-900/40 rounded-sm border border-red-800/30 shadow-sm"
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="relative z-10 text-center p-6 mt-auto">
            <h3 className="text-white font-bold text-xl mb-2">{project.name}</h3>
            <p className="text-white/70 text-sm">{project.description}</p>
          </div>
          <div className="absolute bottom-4 right-4 z-10">
            <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
          </div>
        </div>
      ) : (
        // Netflix Clone card
        <div className="h-full p-6 flex flex-col justify-between relative">
          <div className="mt-8">
            <div className={`${project.accentColor === 'red' ? 'text-red-600' : 'text-white'} font-black text-4xl mb-2`}>
              {project.id === 'netflix-clone' ? 'NETFLIX' : project.name.toUpperCase()}
            </div>
            <h3 className="text-white font-bold text-lg mb-2">{project.name}</h3>
            <p className="text-white/70 text-sm">{project.description}</p>
          </div>
          <div className="mt-4 flex justify-end">
            <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
