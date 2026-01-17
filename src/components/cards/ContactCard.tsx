import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { OwnerData } from '../../types';

interface ContactCardProps {
  data: OwnerData;
}

const ContactCard = ({ data }: ContactCardProps) => {
  return (
    <div className="h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 border border-blue-400/20 flex flex-col items-center justify-center">
      <motion.div
        initial={{ scale: 0.8, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.3, type: "spring" }}
      >
        <Mail className="w-8 h-8 text-white mb-4" />
      </motion.div>
      <h3 className="text-white font-semibold mb-4">Let's Talk</h3>
      <motion.a
        href={`mailto:${data.email}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-white/90 transition-colors"
      >
        HI
      </motion.a>
    </div>
  );
};

export default ContactCard;
