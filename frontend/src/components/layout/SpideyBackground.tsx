import { motion, AnimatePresence } from 'framer-motion';

interface BgProps {
  activeTab: string;
}

const SpideyBackground = ({ activeTab }: BgProps) => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none flex justify-center items-center transition-all duration-700">
      <AnimatePresence mode="wait">
        
        {/* MILES MORALES (Work) */}
        {activeTab === 'Work' && (
          <motion.div key="miles" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="absolute inset-0 bg-[#050505] transition-all duration-700">
            
            {/* 1. Large Sweeping Blue Glow (Top/Left): Vùng xanh nước biển (Xanh dương) rực rỡ, bao phủ rộng */}
            <motion.div animate={{ x: [-30, 30, -30], y: [-80, 80, -80] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[0%] left-[-20%] w-[160vw] h-[50vw] rotate-[20deg] bg-[#0000FF] opacity-15 blur-[120px]" />
            
            {/* 2. Large Sweeping Purple Glow (Bottom/Right): Vùng tím neon vibrant, bao phủ rộng */}
            <motion.div animate={{ x: [50, -50, 50], y: [20, -20, 20] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[-15%] right-[-15%] w-[140vw] h-[40vw] rotate-[-15deg] bg-[#9945FF] opacity-15 blur-[120px]" />
            
            {/* 3. Tiny Red Accent Point (Center-Left): Điểm nhấn đỏ rực, siêu bé, như đường chỉ trong ảnh */}
            <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[35%] left-[15%] w-[20vw] h-[20vw] rounded-full bg-[#FF1A1A] opacity-15 blur-[150px]" />
          </motion.div>
        )}

        {/* SPIDER-GWEN (Hobbies) */}
        {activeTab === 'Hobbies' && (
          <motion.div key="gwen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="absolute inset-0 bg-[#F4F7FB] transition-all duration-700">
            <motion.div animate={{ x: [0, 150, -50, 0], y: [0, -100, 50, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-pink-400 opacity-30 blur-[120px]" />
            <motion.div animate={{ x: [0, -200, 100, 0], y: [0, 150, -100, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[-15%] right-[-15%] w-[60vw] h-[60vw] rounded-full bg-cyan-300 opacity-40 blur-[130px]" />
          </motion.div>
        )}

        {/* PETER PARKER (Diary) */}
        {activeTab === 'Diary' && (
          <motion.div key="peter" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="absolute inset-0 bg-[#0B132B] transition-all duration-700">
            {/* Đám khói Đỏ tươi rực rỡ hơn */}
            <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[-20%] left-[-10%] w-[100vw] h-[80vw] rounded-full bg-[#FF1A1A] opacity-30 blur-[180px]" />
            {/* Đám khói Xanh dương tươi sáng hơn */}
            <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.5, 0.4] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[-10%] right-[-10%] w-[110vw] h-[90vw] rounded-full bg-[#0088FF] opacity-40 blur-[180px]" />
          </motion.div>
        )}

        {/* VENOM (Tribute) */}
        {activeTab === 'Tribute' && (
          <motion.div key="venom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="absolute inset-0 flex justify-center items-center bg-black transition-all duration-700">
            
            <motion.div
              // Nhịp thở: Khối mắt hơi phập phồng, hào quang thu gọn lại bám sát viền
              animate={{ 
                scale: [1, 1.02, 1],
                filter: [
                  "drop-shadow(0 0 5px rgba(255,255,255,0.1)) drop-shadow(0 0 10px rgba(255,255,255,0.05))",  // Tối, gom thật sát
                  "drop-shadow(0 0 20px rgba(255,255,255,0.9)) drop-shadow(0 0 45px rgba(255,255,255,0.4))", // Sáng, tỏa gọn gàng (thu từ 100px xuống 45px)
                  "drop-shadow(0 0 5px rgba(255,255,255,0.1)) drop-shadow(0 0 10px rgba(255,255,255,0.05))"   // Tối dần lại
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-10 w-[50vw] md:w-[50vw] max-w-[600px] h-auto transition-all duration-700"
            >
              <svg viewBox="0 0 800 700" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Mắt Trái - Giữ nguyên màu phẳng #E0E0E0 của Nam */}
                <path d="M 370,560
                         C 0,780 10,120 50,180
                         C 90,380 270,340 340,500 Z" 
                      fill="#E0E0E0" />

                {/* Mắt Phải - Giữ nguyên màu phẳng #E0E0E0 của Nam */}
                <path d="M 430,560
                         C 800,780 790,120 750,180
                         C 710,380 530,340 460,500 Z" 
                      fill="#E0E0E0" />
              </svg>
            </motion.div>

            {/* Sương mù symbiote mờ ảo */}
            <motion.div animate={{ y: [0, -20, 0], opacity: [0.05, 0.15, 0.05] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[-10%] w-[120vw] h-[40vw] bg-gray-500 blur-[130px]" />
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

export default SpideyBackground;