interface HeroProps {
  activeTab: string;
}

const HeroSection = ({ activeTab }: HeroProps) => {
  const radii = [70, 130, 200, 280, 370, 470, 580].map(r => r * 1.19);
  const angles = [0, 45, 90, 135, 180, 225, 270, 315];
  const getPoint = (r: number, angle: number) => {
    const rad = (angle * Math.PI) / 180;
    return { x: 400 + r * Math.cos(rad), y: 400 + r * Math.sin(rad) };
  };

  const getNameGradient = () => {
    switch (activeTab) {
      case 'Work': 
        return 'from-[#FF1A1A] via-[#9945FF] to-[#22D3EE]';
      case 'Hobbies': 
        return 'from-[#F472B6] to-[#22D3EE]';
      case 'Diary': 
        // Đảo Xanh lên trước, Đỏ về sau, chia đều 50/50
        return 'from-[#0088FF] to-[#FF1A1A]';
      default: 
        return 'from-[#0088FF] to-[#FF1A1A]';
    }
  };

  const getWebColor = () => {
    switch (activeTab) {
      case 'Work': return 'text-spideyRed opacity-40'; // Mạng nhện đỏ rực rỡ hơn cho Miles
      case 'Hobbies': return 'text-pink-400 opacity-20';
      case 'Diary': return 'text-blue-500 opacity-20'; // Mạng nhện xanh chìm vào khói cho Peter
      default: return 'text-gray-400 opacity-30';
    }
  };

  return (
    <>
      <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start z-20 transition-all duration-700">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide mb-4 lg:mb-6 font-['Fontchoten']">
  <span className={`bg-gradient-to-r ${getNameGradient()} bg-clip-text text-transparent transition-all duration-700`}>
    Lê Đức Nam
  </span>
</h1>
          
        <p className={`text-base md:text-xl leading-relaxed max-w-2xl mt-2 lg:mt-4 text-justify lg:text-left font-['Fontchomota'] transition-opacity duration-700 ${activeTab === 'Hobbies' ? 'opacity-80' : 'opacity-90'}`}>
          2005, March 30<sup className="text-[0.55em] font-medium align-super">th</sup> - Bạch Dương 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block w-5 h-5 md:w-6 md:h-6 ml-2 -mt-1 md:-mt-2 text-spideyRed drop-shadow-sm"><path d="M3 8a4.5 4.5 0 0 1 8 0" /><path d="M21 8a4.5 4.5 0 0 0-8 0" /><path d="M12 9v12" /></svg>
          <br/> Hải Phòng, Việt Nam <br/><br/>
          Giống như một bản nhạc với đầy dấu thăng và dấu giáng, không gian này không chỉ là một portfolio khô khan, mà nó sẽ như là một cuốn nhật ký đa chiều, lưu lại trọn vẹn những giai điệu của cuộc đời mình. Để những thanh âm ấy sẽ còn vang vọng mãi trên suốt hành trình trưởng thành. <br/><br/>
          <span className="italic opacity-90 font-medium transition-opacity duration-700">
            Chàng sinh viên IT 21 tuổi năm ấy từng có những lúc chênh vênh, thiếu định hướng... Giờ đây, khi lật mở lại những dòng này, cậu đã là ai?
          </span>
        </p>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center relative mt-20 lg:mt-0 min-h-[600px] transition-all duration-700">
        <div className="relative flex items-center justify-center w-[300px] h-[500px] lg:mr-24 transition-all duration-700">
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] mix-blend-overlay pointer-events-none flex justify-center items-center transition-all duration-700 ${getWebColor()}`}>
            <svg viewBox="-400 -400 1600 1600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transition-all duration-700">
              <g stroke="currentColor" fill="none" strokeWidth="4">
                {angles.map((angle) => { const p = getPoint(800, angle); return <line key={`line-${angle}`} x1="400" y1="400" x2={p.x} y2={p.y} />; })}
                {radii.map((r, i) => {
                  let d = `M ${getPoint(r, angles[0]).x} ${getPoint(r, angles[0]).y} `;
                  for (let j = 1; j <= angles.length; j++) {
                    const currentAngle = angles[j % angles.length]; const prevAngle = angles[j - 1]; const p = getPoint(r, currentAngle);
                    const midAngle = (prevAngle + (currentAngle < prevAngle ? currentAngle + 360 : currentAngle)) / 2; const cp = getPoint(r * 0.85, midAngle);
                    d += `Q ${cp.x} ${cp.y} ${p.x} ${p.y} `;
                  }
                  return <path key={`loop-${i}`} d={d} />;
                })}
              </g>
              <line x1="400" y1="400" x2="400" y2="520" stroke="currentColor" strokeWidth="3" strokeDasharray="6 4" opacity="0.6" />
            </svg>
          </div>

          <div className="relative z-10 w-[260px] h-[390px] translate-y-24 border-2 border-dashed border-gray-400/50 rounded-xl flex items-center justify-center bg-white/5 backdrop-blur-sm shadow-2xl transition-all duration-700">
            <span className="opacity-50 text-sm font-bold text-center px-6">Thẻ TFT sẽ đu dây ở đây</span>
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-400/80 rounded-full blur-[1px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;