import React from 'react';

function App() {
  return (
    // Thẻ div bao bọc toàn bộ trang web
    // bg-white cho Light mode, dark:bg-venomVoid cho Dark mode
    <div className="min-h-screen bg-[#EBF5FF] dark:bg-venomVoid text-slate-900 dark:text-white font-sans transition-colors duration-500 overflow-hidden relative">
      
      {/* Test chữ hiển thị */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold mb-4">
          Nam Lê's <span className="text-spideyRed">Universe</span>
        </h1>
        <p className="text-xl opacity-80">
          The Parallel Spidey is coming...
        </p>
      </div>

    </div>
  );
}

export default App;