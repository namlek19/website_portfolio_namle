import { motion } from 'framer-motion';

const SpideyBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none flex justify-center">
      
      {/* Red/White Glow Layer */}
      <motion.div
        animate={{ x: [0, 150, -50, 0], y: [0, -100, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-15%] left-[-20%] w-[50vw] h-[50vw] rounded-full blur-[100px] 
                   bg-spideyRed opacity-[0.15] dark:bg-white dark:opacity-[0.30]" 
      />
      
      {/* Blue/Gray Glow Layer */}
      <motion.div
        animate={{ x: [0, -350, 50, 0], y: [0, 100, -100, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] right-[-15%] w-[60vw] h-[60vw] rounded-full blur-[120px] 
                   bg-mcuBlue opacity-[0.22] dark:bg-[#666666] dark:opacity-[0.45]"
      />
      
    </div>
  );
};

export default SpideyBackground;