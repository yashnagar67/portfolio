import { motion } from 'framer-motion';
import { OwnerData } from '../../types';

interface ProfileCardProps {
  data: OwnerData;
}

const ProfileCard = ({ data }: ProfileCardProps) => {
  return (
    <div className="h-full bg-gradient-to-br from-[#1a1a2e] to-[#2d1b3d] rounded-2xl p-8 border border-white/10 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#8b4513]/30 to-transparent" />
      <div className="relative z-10 h-full flex flex-col">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-start gap-6 mb-6"
        >
          <motion.img
            src={data.profileImage}
            alt={data.name}
            className="w-24 h-24 rounded-full object-cover border-2 border-white/20"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl font-bold mb-2"
            >
              {data.name}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/80 text-sm leading-relaxed"
            >
              {data.bio}
            </motion.p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-auto"
        >
          {data.available && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Available for work</span>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileCard;
