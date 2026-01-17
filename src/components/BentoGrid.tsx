import { motion } from 'framer-motion';
import { ownerData } from '../data';
import ProfileCard from './cards/ProfileCard';
import ExperienceCard from './cards/ExperienceCard';
import ContactCard from './cards/ContactCard';
import CodeCard from './cards/CodeCard';
import LocationCard from './cards/LocationCard';
import ProjectCard from './cards/ProjectCard';

const BentoGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[180px]"
    >
      {/* Profile Card - Large (2x2) */}
      <motion.div
        variants={cardVariants}
        className="md:col-span-2 md:row-span-2"
      >
        <ProfileCard data={ownerData} />
      </motion.div>

      {/* Experience Card */}
      <motion.div variants={cardVariants}>
        <ExperienceCard data={ownerData} />
      </motion.div>

      {/* Contact Card */}
      <motion.div variants={cardVariants}>
        <ContactCard data={ownerData} />
      </motion.div>

      {/* Code Card */}
      <motion.div variants={cardVariants} className="md:col-span-1">
        <CodeCard data={ownerData} />
      </motion.div>

      {/* Location Card */}
      <motion.div variants={cardVariants} className="md:col-span-1">
        <LocationCard data={ownerData} />
      </motion.div>

      {/* Netflix Clone Project */}
      <motion.div variants={cardVariants} className="md:col-span-1">
        <ProjectCard project={ownerData.projects[0]} />
      </motion.div>

      {/* MoodFlix Project */}
      <motion.div variants={cardVariants} className="md:col-span-1">
        <ProjectCard project={ownerData.projects[1]} />
      </motion.div>
    </motion.div>
  );
};

export default BentoGrid;
