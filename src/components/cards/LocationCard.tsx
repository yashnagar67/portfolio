import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { OwnerData } from '../../types';

interface LocationCardProps {
  data: OwnerData;
}

const LocationCard = ({ data }: LocationCardProps) => {
  return (
    <div className="h-full bg-[#1a1a2e] rounded-2xl overflow-hidden border border-white/10 relative group">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10" />
      <div className="absolute bottom-4 left-4 z-20">
        <span className="px-3 py-1 bg-black/80 text-white text-xs font-semibold rounded-full">
          {data.location.toUpperCase()}
        </span>
      </div>
      {/* Taj Mahal representation */}
      <div className="w-full h-full bg-gradient-to-b from-sky-200/30 via-amber-100/20 to-amber-50/10 relative overflow-hidden">
        {/* Reflecting pool */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-sky-400/40 to-transparent" />
        {/* Taj Mahal dome representation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-24 h-24 bg-white/20 rounded-t-full border-2 border-white/30" />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/30 rounded-full" />
        </motion.div>
        {/* Red pin icon */}
        <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
