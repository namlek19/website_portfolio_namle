import { useState } from 'react';
import SpideyBackground from './components/layout/SpideyBackground';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import TributeSection from './components/sections/TributeSection';

function App() {
  // Trạm kiểm soát Đa Vũ Trụ: Mặc định là vũ trụ của Miles Morales (Work)
  const [activeTab, setActiveTab] = useState('Work');

  // Đổi màu nền gốc dựa theo Tab
  const getBaseBackground = () => {
    switch (activeTab) {
      case 'Work': return 'bg-[#050505] text-white'; // Miles: Đen sâu
      case 'Hobbies': return 'bg-[#F4F7FB] text-slate-900'; // Gwen: Trắng xanh/hồng siêu nhạt
      case 'Diary': return 'bg-[#0B132B] text-white'; // Peter: Navy đậm
      case 'Tribute': return 'bg-black text-gray-300'; // Venom: Đen kịt
      default: return 'bg-[#050505] text-white';
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-700 overflow-hidden relative ${getBaseBackground()}`}>
      
      {/* Background Đa Vũ Trụ */}
      <SpideyBackground activeTab={activeTab} />
      
      {/* Header truyền activeTab xuống để đổi màu Pill và Logo */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* Điều hướng Component */}
      <main className="relative z-10 max-w-full mx-auto px-6 lg:px-24 min-h-screen flex flex-col lg:flex-row items-center justify-between pt-32 lg:pt-20 pb-20 lg:pb-0">
        {activeTab === 'Tribute' ? (
          <TributeSection />
        ) : (
          <HeroSection activeTab={activeTab} />
        )}
      </main>

    </div>
  );
}

export default App;