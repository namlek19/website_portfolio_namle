import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeTab, setActiveTab] = useState('Work');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  const tabs = ['Work', 'Hobbies', 'Diary', 'Tribute'];

  const getPillGradient = (tab: string, isDark: boolean) => {
    if (isDark) {
      switch (tab) {
        case 'Work': return 'linear-gradient(to right, #ED1C24, #991B1B)';
        case 'Hobbies': return 'linear-gradient(to right, #991B1B, #2585FE)';
        case 'Diary': return 'linear-gradient(to right, #2585FE, #525252)';
        case 'Tribute': return 'linear-gradient(to right, #525252, #111827)';
        default: return 'linear-gradient(to right, #ED1C24, #991B1B)';
      }
    } else {
      switch (tab) {
        case 'Work': return 'linear-gradient(to right, #ED1C24, #D946EF)';
        case 'Hobbies': return 'linear-gradient(to right, #D946EF, #8B5CF6)';
        case 'Diary': return 'linear-gradient(to right, #8B5CF6, #0EA5E9)';
        case 'Tribute': return 'linear-gradient(to right, #0EA5E9, #2585FE)';
        default: return 'linear-gradient(to right, #ED1C24, #D946EF)';
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-10 py-3 md:py-6 flex justify-between items-center backdrop-blur-md bg-white/10 dark:bg-black/10 transition-all duration-500">
      
      {/* Logo */}
      <div className="cursor-pointer mt-1 flex-1 min-w-0 mr-2"> 
        <span className="font-['CombackHome'] text-xl sm:text-2xl md:text-4xl font-normal tracking-tight py-2 inline-block truncate max-w-full
                         bg-[linear-gradient(to_right,#ED1C24_0%,#ED1C24_40%,#2585FE_100%)]
                         dark:bg-[linear-gradient(to_right,#ED1C24_0%,#ED1C24_20%,#2585FE_45%,#6B7280_50%,#D1D5DB_100%)] 
                         bg-clip-text text-transparent transition-all duration-500">
            {"Welc\uF003me to Nam Le's W\uF001rld . . ."}
        </span>
      </div>
      
      {/* Buttons & Nav */}
      <div className="flex items-center gap-2 md:gap-4 shrink-0 relative">
        <nav className="hidden lg:flex gap-1 p-1 rounded-full bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10">
          {tabs.map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 z-10 ${
                activeTab === tab ? 'text-white' : 'text-slate-600 dark:text-gray-400'
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="active-tab-indicator"
                  animate={{ background: getPillGradient(tab, isDark) }}
                  className="absolute inset-0 rounded-full -z-10 shadow-md"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </nav>

        {/* Theme Switcher */}
        <button 
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded-full bg-white/40 dark:bg-white/10 hover:scale-110 transition-all shadow-sm border border-white/20 dark:border-white/5 z-[60]"
        >
          {isDark ? <Sun className="w-5 h-5 text-gray-200" /> : <Moon className="w-5 h-5 text-slate-800" />}
        </button>

        {/* Mobile Menu Button */}
        <div className="relative">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full bg-white/40 dark:bg-white/10 border border-white/20 dark:border-white/5 z-[60] transition-transform active:scale-90"
          >
            {isOpen ? <X className="w-5 h-5 text-spideyRed dark:text-white" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Web-Sling Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <div className="lg:hidden absolute top-full right-0 w-64 pt-4 pointer-events-none">
                {/* Vertical Web Line */}
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 340, opacity: 0.6 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute right-[21px] top-0 w-[1.5px] border-r border-dashed border-spideyRed dark:border-white/40 z-0"
                />

                <div className="flex flex-col gap-8 items-end relative pr-[42px]">
                  {tabs.map((tab, i) => (
                    <div key={tab} className="relative flex items-center justify-end">
                      {/* Horizontal Web Line */}
                      <motion.div 
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 24, opacity: 0.6 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="absolute -right-[22px] w-6 border-t border-dashed border-spideyRed dark:border-white/40"
                      />

                      {/* Nav Tab */}
                      <motion.button
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 20, opacity: 0 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 25,
                          delay: 0.1 + i * 0.1 
                        }}
                        onClick={() => { setActiveTab(tab); setIsOpen(false); }}
                        className="whitespace-nowrap px-6 py-2.5 rounded-xl text-sm font-bold shadow-xl border border-white/20 backdrop-blur-xl pointer-events-auto transition-all active:scale-95 font-sans"
                        style={{ 
                          background: activeTab === tab ? getPillGradient(tab, isDark) : (isDark ? 'rgba(30,30,30,0.95)' : 'rgba(255,255,255,0.98)'),
                          color: activeTab === tab ? 'white' : (isDark ? '#e5e7eb' : '#1f2937'),
                        }}
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