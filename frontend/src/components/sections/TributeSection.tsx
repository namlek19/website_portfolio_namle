import { motion } from 'framer-motion';

const TributeSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-full z-20">
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="text-gray-400 italic font-['Fontchomota']"
      >
        
      </motion.p>
    </div>
  );
};

export default TributeSection;