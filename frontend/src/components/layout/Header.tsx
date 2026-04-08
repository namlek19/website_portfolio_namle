import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const tabs = ['Work', 'Hobbies', 'Diary', 'Tribute'];

  const isDarkTheme = activeTab !== 'Hobbies'; 

  const getPillGradient = (tab: string) => {
    switch (tab) {
      case 'Work': return 'linear-gradient(to right, #ED1C24, #8B5CF6, #0EA5E9)';
      case 'Hobbies': return 'linear-gradient(to right, #F472B6, #22D3EE)';
      case 'Diary': return 'linear-gradient(to right, #ED1C24, #1D4ED8)'; // Đỏ - Xanh khói
      case 'Tribute': return 'linear-gradient(to right, #374151, #000000)';
      default: return 'linear-gradient(to right, #ED1C24, #991B1B)';
    }
  };

  const getLogoGradient = (tab: string) => {
    switch (tab) {
      case 'Work': 
        return 'from-[#FF1A1A] via-[#9945FF] to-[#22D3EE]';
      case 'Hobbies': 
        return 'from-[#F472B6] to-[#22D3EE]';
      case 'Diary': 
        // Đảo Xanh lên trước, Đỏ về sau, bỏ 'via' để chia đều 50/50
        return 'from-[#0088FF] to-[#FF1A1A]'; 
      case 'Tribute': 
        return 'from-[#374151] via-[#F3F4F6] to-[#1F2937]';
      default:
        return 'from-[#0088FF] to-[#FF1A1A]';
    }
  };

  return (
    // Nới lề tổng thể (px-12, lg:px-16) để header thoáng hơn
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-12 lg:px-16 py-4 md:py-6 flex justify-between items-center backdrop-blur-md bg-white/5 transition-all duration-500">
      
      {/* Logo */}
      <div className="cursor-pointer mt-1 flex-1 min-w-0 mr-4"> 
        <span className={`font-['CombackHome'] text-xl sm:text-2xl md:text-4xl font-normal tracking-tight py-2 inline-block truncate max-w-full text-transparent bg-clip-text transition-all duration-700 bg-gradient-to-r ${getLogoGradient(activeTab)}`}>
          {"Welc\uF003me to Nam Le's W\uF001rld . . ."}
        </span>
      </div>
      
      <div className="flex items-center shrink-0 relative">
        {/* Thanh Nav: Tăng gap-3, p-2 để kéo dài và làm dày thanh chứa */}
        <nav className="hidden lg:flex gap-3 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
          {tabs.map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              // Button: Tăng px-10, py-2.5, text-base để nút dài ra và dễ click hơn
              className={`relative px-10 py-2.5 rounded-full text-sm lg:text-base font-semibold transition-colors duration-300 z-10 ${
                activeTab === tab 
                  ? 'text-white' 
                  : (isDarkTheme ? 'text-gray-300 hover:text-white' : 'text-slate-600 hover:text-slate-900')
              }`}
            >
              {activeTab === tab && (
                <motion.div layoutId="active-tab-indicator" animate={{ background: getPillGradient(tab) }} className="absolute inset-0 rounded-full -z-10 shadow-md" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </nav>

        {/* Nút Menu Mobile */}
        <div className="relative ml-2">
          <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden p-2.5 rounded-full bg-white/10 border border-white/20 z-[60] transition-transform active:scale-90 ${isDarkTheme ? 'text-white' : 'text-slate-900'}`}>
            {isOpen ? <X className="w-6 h-6 text-spideyRed" /> : <Menu className="w-6 h-6" />}
          </button>

          <AnimatePresence>
            {isOpen && (
              <div className="lg:hidden absolute top-full right-0 w-64 pt-4 pointer-events-none">
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 340, opacity: 0.6 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }} className="absolute right-[21px] top-0 w-[1.5px] border-r border-dashed border-spideyRed z-0" />
                <div className="flex flex-col gap-8 items-end relative pr-[42px]">
                  {tabs.map((tab, i) => (
                    <div key={tab} className="relative flex items-center justify-end">
                      <motion.div initial={{ width: 0, opacity: 0 }} animate={{ width: 24, opacity: 0.6 }} exit={{ width: 0, opacity: 0 }} transition={{ delay: 0.2 + i * 0.1 }} className="absolute -right-[22px] w-6 border-t border-dashed border-spideyRed" />
                      <motion.button
                        initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 20, opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.1 + i * 0.1 }} onClick={() => { setActiveTab(tab); setIsOpen(false); }}
                        className="whitespace-nowrap px-8 py-3 rounded-xl text-sm font-bold shadow-xl border border-white/20 backdrop-blur-xl pointer-events-auto transition-all active:scale-95 font-sans text-white"
                        style={{ background: activeTab === tab ? getPillGradient(tab) : 'rgba(30,30,30,0.95)' }}
                      >
                        {tab}
                      </motion.button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;