import { motion } from 'framer-motion';
import { OwnerData } from '../../types';

interface CodeCardProps {
  data: OwnerData;
}

import laptopframe from '../../componants/imgs/laptopframe.png';

const CodeCard = ({ data }: CodeCardProps) => {
  return (
    <div className="h-full bg-[#1a1a2e] rounded-2xl overflow-hidden border border-white/10 relative group">
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3 py-1 bg-pink-500/80 text-white text-xs font-semibold rounded-full">CODE</span>
      </div>
      <motion.img
        src={laptopframe}
        alt="Code"
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default CodeCard;
