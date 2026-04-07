import SpideyBackground from './components/layout/SpideyBackground';
import Header from './components/layout/Header';

function App() {
  const radii = [70, 130, 200, 280, 370, 470, 580].map(r => r * 1.19);
  const angles = [0, 45, 90, 135, 180, 225, 270, 315];

  const getPoint = (r: number, angle: number) => {
    const rad = (angle * Math.PI) / 180;
    return { x: 400 + r * Math.cos(rad), y: 400 + r * Math.sin(rad) };
  };

  return (
    <div className="min-h-screen bg-[#EBF5FF] dark:bg-venomVoid text-slate-900 dark:text-white font-sans transition-colors duration-500 overflow-hidden relative">
      
      <SpideyBackground />
      <Header />
      
      <main className="relative z-10 max-w-full mx-auto px-6 lg:px-24 min-h-screen flex flex-col lg:flex-row items-center justify-between pt-32 lg:pt-20 pb-20 lg:pb-0">
  
        {/* Left Column: Bio & Intro */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start z-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide mb-4 lg:mb-6 font-['Fontchoten']">
            <span className="bg-[linear-gradient(to_right,#ED1C24_0%,#ED1C24_40%,#2585FE_100%)]
                             dark:bg-[linear-gradient(to_right,#ED1C24_0%,#ED1C24_20%,#2585FE_45%,#6B7280_50%,#D1D5DB_100%)] 
                             bg-clip-text text-transparent transition-all duration-500">
              Lê Đức Nam
            </span>
          </h1>
            
          <p className="text-base md:text-xl opacity-80 leading-relaxed max-w-2xl mt-2 lg:mt-4 text-justify lg:text-left font-['Fontchomota']">
            2005, March 30<sup className="text-[0.55em] font-medium align-super">th</sup> - Bạch Dương 
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block w-5 h-5 md:w-6 md:h-6 ml-2 -mt-1 md:-mt-2 text-spideyRed dark:text-gray-300 transition-colors duration-500 drop-shadow-sm">
              <path d="M3 8a4.5 4.5 0 0 1 8 0" />
              <path d="M21 8a4.5 4.5 0 0 0-8 0" />
              <path d="M12 9v12" />
            </svg>
            
            <br/>
            Hải Phòng, Việt Nam <br/><br/>
            
            Giống như một bản nhạc với đầy dấu thăng và dấu giáng, không gian này không chỉ là một portfolio khô khan, mà nó sẽ như là một cuốn nhật ký đa chiều, lưu lại trọn vẹn những giai điệu của cuộc đời mình. Để những thanh âm ấy sẽ còn vang vọng mãi trên suốt hành trình trưởng thành. <br/><br/>
            
            <span className="italic opacity-90 font-medium">
              Chàng sinh viên IT 21 tuổi năm ấy từng có những lúc chênh vênh, thiếu định hướng... Giờ đây, khi lật mở lại những dòng này, cậu đã là ai?
            </span>
          </p>
        </div>

        {/* Right Column: Web & TFT Card */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center relative mt-20 lg:mt-0 min-h-[600px]">
          
          <div className="relative flex items-center justify-center w-[300px] h-[500px] lg:mr-24">
            
            {/* Spidey Web SVG */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 dark:opacity-30 mix-blend-overlay pointer-events-none flex justify-center items-center">
              <svg viewBox="-400 -400 1600 1600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-spideyRed dark:text-white transition-colors duration-500">
                <g stroke="currentColor" fill="none" strokeWidth="4" opacity="0.8">
                  {angles.map((angle) => {
                    const p = getPoint(800, angle);
                    return <line key={`line-${angle}`} x1="400" y1="400" x2={p.x} y2={p.y} />;
                  })}
                  {radii.map((r, i) => {
                    let d = `M ${getPoint(r, angles[0]).x} ${getPoint(r, angles[0]).y} `;
                    for (let j = 1; j <= angles.length; j++) {
                      const currentAngle = angles[j % angles.length];
                      const prevAngle = angles[j - 1];
                      const p = getPoint(r, currentAngle);
                      const midAngle = (prevAngle + (currentAngle < prevAngle ? currentAngle + 360 : currentAngle)) / 2;
                      const cp = getPoint(r * 0.85, midAngle);
                      d += `Q ${cp.x} ${cp.y} ${p.x} ${p.y} `;
                    }
                    return <path key={`loop-${i}`} d={d} />;
                  })}
                </g>
                
                <line x1="400" y1="400" x2="400" y2="520" stroke="currentColor" strokeWidth="3" strokeDasharray="6 4" opacity="0.6" />
              </svg>
            </div>

            {/* Placeholder TFT Card */}
            <div className="relative z-10 w-[260px] h-[390px] translate-y-24 border-2 border-dashed border-gray-400 dark:border-gray-600 rounded-xl flex items-center justify-center bg-white/5 backdrop-blur-sm shadow-2xl transition-all duration-700">
              <span className="opacity-50 text-sm font-bold text-center px-6">Thẻ TFT sẽ đu dây ở đây</span>
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-400 dark:bg-gray-600 rounded-full blur-[1px]" />
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}

export default App;