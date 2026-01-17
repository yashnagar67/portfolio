import { motion } from 'framer-motion';
import { OwnerData } from '../../types';

interface ExperienceCardProps {
  data: OwnerData;
}

const ExperienceCard = ({ data }: ExperienceCardProps) => {
  return (
    <div className="h-full bg-[#1a1a2e] rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
        className="w-20 h-20 rounded-full bg-orange-500/20 border-2 border-orange-500/30 flex items-center justify-center mb-4"
      >
        <span className="text-orange-400 font-bold text-sm text-center leading-tight">
          {data.experienceYears}+<br />YEARS
        </span>
      </motion.div>
      <span className="text-white/90 font-medium">Experience</span>
    </div>
  );
};

export default ExperienceCard;
